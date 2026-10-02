from electroncash.transaction import Transaction


class QuantumrootTransactionPlanner:
    """
    Selects receive coins and calculates the fee and change required for a
    Quantumroot spend transaction.
    """

    def __init__(self, vault):
        self.vault = vault

    @staticmethod
    def ordered_receive_utxos(utxos):
        """Sort receive UTXOs largest-first."""
        return sorted(utxos, key=lambda item: (item["value"], item["tx_hash"], item["tx_pos"]), reverse=True)

    @staticmethod
    def fee_for_size(size_bytes, fee_per_kb):
        """Calculate the miner fee from the compiled transaction size."""
        if not isinstance(size_bytes, int) or size_bytes <= 0:
            raise ValueError("Compiled transaction size must be positive.")

        if not isinstance(fee_per_kb, int) or fee_per_kb <= 0:
            raise ValueError("Fee rate must be a positive integer number of sats/kB.")

        return (size_bytes * fee_per_kb + 999) // 1000

    @staticmethod
    def validate_inputs(recipient, amount_sats, change_dust_sats):
        """Check the basic transaction values before selecting coins."""
        if not isinstance(recipient, str) or not recipient.strip():
            raise ValueError("Recipient is required.")

        if not isinstance(amount_sats, int) or amount_sats <= 0:
            raise ValueError("Amount must be a positive integer number of sats.")

        if amount_sats < 546:
            raise ValueError("Amount must be at least 546 satoshis.")

        if not isinstance(change_dust_sats, int) or change_dust_sats < 0:
            raise ValueError("Change dust limit is invalid.")

    def build_transaction_with_change(
        self, selected, available_change, change_dust_sats, fee_per_kb, compile_candidate
    ):
        """
        Build the transaction with a change output.

        The transaction is compiled first so its actual size can be used to
        calculate the fee. Change is then reduced by that fee and compiled again.
        """
        if available_change < change_dust_sats:
            return None

        transaction = compile_candidate(selected, available_change)
        fee = self.fee_for_size(transaction["sizeBytes"], fee_per_kb)
        change = available_change - fee

        if change < change_dust_sats:
            return None

        transaction = compile_candidate(selected, change)
        final_fee = self.fee_for_size(transaction["sizeBytes"], fee_per_kb)
        final_change = available_change - final_fee

        if final_change < change_dust_sats:
            return None

        # Normally the transaction size will already be stable. If changing the
        # change amount changed the required fee, compile once more with the new value.
        if final_change != change:
            transaction = compile_candidate(selected, final_change)
            final_fee = self.fee_for_size(transaction["sizeBytes"], fee_per_kb)
            final_change = available_change - final_fee

        if final_change < change_dust_sats:
            return None

        return {
            "transaction": transaction,
            "fee": final_fee,
            "change": final_change,
        }

    def build_transaction_without_change(self, selected, available_change, fee_per_kb, compile_candidate):
        """
        Build the transaction without a change output.

        This is used when there is not enough remaining value to create change.
        Any value left after the payment becomes the miner fee.
        """
        transaction = compile_candidate(selected, None)
        minimum_fee = self.fee_for_size(transaction["sizeBytes"], fee_per_kb)

        if available_change < minimum_fee:
            return None

        return {
            "transaction": transaction,
            "fee": available_change,
            "change": 0,
        }

    def check_transaction_safety(
        self,
        transaction_info,
        selected,
        quantum_lock_utxo,
        receive_locking_bytecode,
    ):
        """
        Independently check the compiled transaction before returning it.

        The raw transaction is deserialized locally. If there is change, it must
        return to the vault receive address. The actual miner fee is calculated
        from the transaction inputs and outputs and must not be excessive.
        """
        compiled = transaction_info["transaction"]
        transaction_hex = compiled.get("transactionHex")

        if not isinstance(transaction_hex, str) or not transaction_hex:
            raise RuntimeError("Compiled transaction hex is missing.")

        tx = Transaction(transaction_hex)
        tx.deserialize()

        outputs = tx.outputs(tokens=True)
        change_sats = transaction_info["change"]

        if change_sats > 0:
            if len(outputs) < 3:
                raise RuntimeError("Compiled transaction is missing the vault change output.")

            change_output, change_token = outputs[2]
            actual_change_script = Transaction.pay_script(change_output[1])

            if actual_change_script.lower() != receive_locking_bytecode.lower():
                raise RuntimeError("Compiled transaction change does not return to the Quantumroot vault.")

            if int(change_output[2]) != change_sats:
                raise RuntimeError("Compiled transaction change amount is incorrect.")

            if change_token is not None:
                raise RuntimeError("Compiled transaction change output unexpectedly contains CashToken data.")

        total_input_sats = int(quantum_lock_utxo["value"])
        total_input_sats += sum(int(coin["value"]) for coin in selected)

        total_output_sats = sum(int(output[0][2]) for output in outputs)
        actual_fee = total_input_sats - total_output_sats

        if actual_fee < 0:
            raise RuntimeError("Compiled transaction outputs exceed its inputs.")

        excessive_fee = 50000

        if actual_fee >= excessive_fee:
            raise RuntimeError(
                "Compiled transaction miner fee is excessive: {} sats.".format(actual_fee)
            )

    def build_transaction(
        self,
        *,
        recipient,
        amount_sats,
        receive_address,
        receive_locking_bytecode,
        receive_utxos,
        category,
        quantum_lock_index,
        quantum_lock_utxo,
        next_quantum_lock,
        fee_per_kb,
        change_dust_sats,
        compile_candidate,
    ):
        """
        Select receive coins until the payment and transaction fee can be covered.

        For each possible coin selection, first try to return change. If the
        remaining value is too small for change, try a transaction without it.
        """
        self.validate_inputs(recipient, amount_sats, change_dust_sats)

        coins = self.ordered_receive_utxos(receive_utxos)

        if not coins:
            raise RuntimeError("Quantumroot vault has no spendable receive UTXOs.")

        selected = []
        selected_total = 0

        for coin in coins:
            selected.append(coin)
            selected_total += coin["value"]

            available_change = selected_total - amount_sats

            # Keep adding coins until there is enough to cover the payment.
            if available_change < 0:
                continue

            transaction_info = self.build_transaction_with_change(
                selected, available_change, change_dust_sats, fee_per_kb, compile_candidate
            )

            if transaction_info is None:
                transaction_info = self.build_transaction_without_change(
                    selected, available_change, fee_per_kb, compile_candidate
                )

            # The payment is covered, but there is not yet enough to pay the transaction fee.
            if transaction_info is None:
                continue

            self.check_transaction_safety(
                transaction_info=transaction_info,
                selected=selected,
                quantum_lock_utxo=quantum_lock_utxo,
                receive_locking_bytecode=receive_locking_bytecode,
            )

            return {
                "recipient": recipient.strip(),
                "amount_sats": amount_sats,
                "category": category,
                "receive_address": receive_address,
                "receive_locking_bytecode": receive_locking_bytecode,
                "receive_inputs": list(selected),
                "receive_input_total": selected_total,
                "quantum_lock_index": quantum_lock_index,
                "quantum_lock_utxo": quantum_lock_utxo,
                "next_quantum_lock_index": quantum_lock_index + 1,
                "next_quantum_lock": next_quantum_lock,
                "fee_per_kb": fee_per_kb,
                "fee_sats": transaction_info["fee"],
                "change_sats": transaction_info["change"],
                "gross_change_before_fee": selected_total - amount_sats,
                "compiled": transaction_info["transaction"],
            }

        raise RuntimeError("Insufficient Quantumroot vault balance after accounting for the transaction fee.")
