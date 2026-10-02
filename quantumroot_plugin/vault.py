from electroncash import address
from electroncash.transaction import Transaction


class QuantumrootVault:
    """
    Reads Quantumroot vault state from the BCH network.

    This module looks up UTXOs and transaction history for Quantumroot
    and verifies the authorization NFT used by the current Quantum Lock.
    """

    def __init__(self, network):
        self.network = network

    @staticmethod
    def script_output(locking_bytecode):
        """Convert Quantumroot locking bytecode into a ScriptOutput."""
        if isinstance(locking_bytecode, str):
            locking_bytecode = bytes.fromhex(locking_bytecode)

        if not isinstance(locking_bytecode, (bytes, bytearray)):
            raise TypeError("Quantumroot locking bytecode must be bytes or hex.")

        locking_bytecode = bytes(locking_bytecode)

        if not locking_bytecode:
            raise ValueError("Quantumroot locking bytecode is empty.")

        return address.ScriptOutput(locking_bytecode)

    def _require_network(self):
        if self.network is None:
            raise RuntimeError("Electron Cash is not connected to a network.")

    def list_unspent(self, locking_bytecode):
        """
        Find vault UTXOs.
        """
        self._require_network()

        script_output = self.script_output(locking_bytecode)
        scripthash = script_output.to_scripthash_hex()

        result = self.network.synchronous_get(
            ("blockchain.scripthash.listunspent", [scripthash, "include_tokens"])
        )

        if result is None:
            result = []

        if not isinstance(result, list):
            raise RuntimeError("Server returned an unexpected UTXO response.")

        utxos = []

        for item in result:
            if not isinstance(item, dict):
                continue

            tx_hash = item.get("tx_hash")
            tx_pos = item.get("tx_pos")
            value = item.get("value")
            height = item.get("height", 0)

            if not isinstance(tx_hash, str) or not isinstance(tx_pos, int) or not isinstance(value, int):
                continue

            utxos.append(
                {
                    "tx_hash": tx_hash,
                    "tx_pos": tx_pos,
                    "value": value,
                    "height": height,
                }
            )

        return {
            "scripthash": scripthash,
            "utxos": utxos,
            "balance": sum(item["value"] for item in utxos),
        }

    def has_history(self, locking_bytecode):
        """Check whether this Quantumroot locking script has ever been used."""
        self._require_network()

        script_output = self.script_output(locking_bytecode)
        scripthash = script_output.to_scripthash_hex()

        result = self.network.synchronous_get(
            ("blockchain.scripthash.get_history", [scripthash])
        )

        if result is None:
            result = []

        if not isinstance(result, list):
            raise RuntimeError("Server returned an unexpected history response.")

        return bool(result)

    def transaction_output(self, tx_hash, tx_pos):
        """
        Fetch one transaction output from the network.
        """
        self._require_network()

        if not isinstance(tx_hash, str) or len(tx_hash) != 64:
            raise ValueError("Invalid transaction hash.")

        if not isinstance(tx_pos, int) or tx_pos < 0:
            raise ValueError("Invalid transaction output index.")

        ok, raw_tx = self.network.get_raw_tx_for_txid(tx_hash)

        if not ok:
            raise RuntimeError(
                "Unable to retrieve transaction {}: {}".format(tx_hash, raw_tx)
            )

        tx = Transaction(raw_tx)
        tx.deserialize()

        outputs = tx.outputs(tokens=True)

        if tx_pos >= len(outputs):
            raise RuntimeError(
                "Transaction {} has no output #{}.".format(tx_hash, tx_pos)
            )

        output, token_data = outputs[tx_pos]

        return {
            "output": output,
            "token_data": token_data,
        }

    def find_authorization_utxo(
        self,
        locking_bytecode,
        category,
        commitment=b"quantumroot",
    ):
        """
        Find and verify the authorization NFT at a Quantum Lock.

        The output must use the vault's category, contain an immutable NFT with
        the expected commitment, and be locked by the exact Quantum Lock script.
        """
        if not isinstance(category, str) or len(category) != 64:
            raise ValueError("Invalid Quantumroot category ID.")

        expected_script = self.script_output(locking_bytecode).to_script()
        state = self.list_unspent(locking_bytecode)

        for utxo in state["utxos"]:
            prevout = self.transaction_output(utxo["tx_hash"], utxo["tx_pos"])

            output = prevout["output"]
            token_data = prevout["token_data"]

            if token_data is None:
                continue

            if token_data.id_hex != category:
                continue

            if not token_data.has_nft():
                continue

            if not token_data.is_immutable_nft():
                continue

            if token_data.commitment != commitment:
                continue

            _output_type, output_destination, output_value = output

            try:
                output_script = output_destination.to_script()
            except Exception:
                continue

            if output_script != expected_script:
                continue

            # Return the server UTXO with the BCH value and token data from the transaction output.
            verified = dict(utxo)
            verified["value"] = output_value
            verified["token_data"] = token_data

            return verified

        return None
