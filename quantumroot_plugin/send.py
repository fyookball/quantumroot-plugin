from PyQt5.QtCore import Qt
from PyQt5.QtWidgets import (
    QDialog,
    QFormLayout,
    QHBoxLayout,
    QLabel,
    QLineEdit,
    QPushButton,
    QVBoxLayout,
)

from electroncash.i18n import _
from electroncash.transaction import Transaction
from electroncash_gui.qt.util import MessageBoxMixin
from electroncash_gui.qt.transaction_dialog import show_transaction

"""
Quantumroot withdrawal UI and signing flow. This dialog constructs a Quantumroot
transaction, creates a safe unsigned version for Electron Cash's transaction
preview, and uses Quantumroot signing in place of Electron Cash's normal wallet
signer before broadcast.
"""

class QuantumrootSendDialog(QDialog, MessageBoxMixin):
    def __init__(self, ui):
        super().__init__(ui.main_window)

        self.ui = ui
        self.wallet = ui.wallet

        self.setWindowTitle(_("Quantumroot Send"))
        self.setMinimumWidth(520)

        self._constructing = False

        layout = QVBoxLayout(self)

        title = QLabel(_("<b>Send from Quantumroot Vault</b>"))
        title.setTextFormat(Qt.RichText)
        layout.addWidget(title)

        self.status_label = QLabel("")
        self.status_label.setWordWrap(True)
        layout.addWidget(self.status_label)

        form = QFormLayout()

        self.recipient_edit = QLineEdit()
        self.amount_edit = QLineEdit() 

        form.addRow(_("Recipient"), self.recipient_edit)
        form.addRow(_("Amount (sats)"), self.amount_edit) 

        layout.addLayout(form)

        button_row = QHBoxLayout()

        self.preview_button = QPushButton(_("PREVIEW"))
        self.preview_button.clicked.connect(self.preview_clicked)
        button_row.addWidget(self.preview_button)

        self.sign_broadcast_button = QPushButton(_("SIGN && BROADCAST"))
        self.sign_broadcast_button.clicked.connect(self.sign_and_broadcast_clicked)
        button_row.addWidget(self.sign_broadcast_button)

        layout.addLayout(button_row)

    def set_constructing(self, constructing):
        self._constructing = bool(constructing)
        enabled = not self._constructing

        self.recipient_edit.setEnabled(enabled)
        self.amount_edit.setEnabled(enabled)
        self.preview_button.setEnabled(enabled)
        self.sign_broadcast_button.setEnabled(enabled)

        if self._constructing:
            self.status_label.setText(
                _("<b>Constructing Quantum Vault Transaction</b><br>Please Wait a few Moments...")
            )
            self.status_label.setTextFormat(Qt.RichText)
        else:
            self.status_label.setText("")

    @staticmethod
    def parse_amount_sats(text):
        value = text.strip()

        if not value:
            raise ValueError("Amount is required.")

        if not value.isdigit():
            raise ValueError("Amount must be a whole number of satoshis.")

        amount = int(value)

        if amount < 546:
            raise ValueError("Amount must be at least 546 satoshis.")

        return amount

    @staticmethod
    def build_unsigned_preview(plan):   
        """
        Create the unsigned transaction shown in Electron Cash before signing.
        
        The transaction uses the same inputs, outputs, size, fee, and change as the
        compiled Quantumroot transaction. The outputs are checked to ensure that
        creating the unsigned preview does not change the transaction being reviewed.
        """        

        compiled = plan["compiled"]
        transaction_hex = compiled.get("transactionHex")

        if not isinstance(transaction_hex, str) or not transaction_hex:
            raise RuntimeError("Compiled transaction hex is missing.")

        tx = Transaction(transaction_hex)
        tx.deserialize()

        compiled_outputs = tx.outputs(tokens=True)
        compiled_output_bytes = [
            tx.serialize_output_n_bytes(index) for index in range(len(compiled_outputs))
        ]

        print("[quantumroot] compiled output count:", len(compiled_outputs))

        for index, item in enumerate(compiled_outputs):
            output, token_data = item

            print(
                "[quantumroot] compiled output",
                index,
                {
                    "value": int(output[2]),
                    "destination": str(output[1]),
                    "lockingBytecode": Transaction.pay_script(output[1]),
                    "tokenData": repr(token_data),
                },
            )

        if len(compiled_outputs) < 2:
            raise RuntimeError(
                "Compiled Quantumroot transaction does not contain the recipient output."
            )

        recipient_output, recipient_token = compiled_outputs[1]
        expected_recipient = plan["recipient"]

        try:
            from electroncash.address import Address

            expected_address = Address.from_string(expected_recipient)
            expected_script = expected_address.to_script().hex()

        except Exception as e:
            raise RuntimeError(
                "Unable to validate recipient address: {}".format(str(e))
            )

        actual_recipient_script = Transaction.pay_script(recipient_output[1])

        if actual_recipient_script != expected_script:
            raise RuntimeError(
                "Compiled transaction recipient does not match the requested recipient. "
                "Expected {}, but output 1 has locking bytecode {}.".format(
                    expected_recipient,
                    actual_recipient_script,
                )
            )

        if int(recipient_output[2]) != int(plan["amount_sats"]):
            raise RuntimeError(
                "Compiled transaction recipient amount does not match the requested amount. "
                "Expected {} sats, got {} sats.".format(
                    int(plan["amount_sats"]),
                    int(recipient_output[2]),
                )
            )

        if recipient_token is not None:
            raise RuntimeError("Recipient output unexpectedly contains CashToken data.")

        input_values = [int(plan["quantum_lock_utxo"]["value"])]
        input_values.extend(int(item["value"]) for item in plan["receive_inputs"])

        tx_inputs = tx.inputs()

        if len(tx_inputs) != len(input_values):
            raise RuntimeError(
                "Compiled transaction input count does not match the Quantumroot plan."
            )

        for txin, value in zip(tx_inputs, input_values):
            real_script_sig = txin.get("scriptSig", "")

            if not isinstance(real_script_sig, str):
                raise RuntimeError(
                    "Compiled Quantumroot input has an unexpected unlocking script type."
                )

            if len(real_script_sig) % 2 != 0:
                raise RuntimeError(
                    "Compiled Quantumroot input has an invalid unlocking script."
                )

            # Preserve serialized unlocking-script length so the 
            # unsigned preview has the same transaction size as the
            # compiled transaction.
            txin["scriptSig"] = "00" * (len(real_script_sig) // 2)
            txin["signatures"] = [None]
            txin["num_sig"] = 1
            txin["value"] = value

        preview_output_bytes = [
            tx.serialize_output_n_bytes(index) for index in range(len(tx.outputs()))
        ]

        if preview_output_bytes != compiled_output_bytes:
            raise RuntimeError(
                "Creating the unsigned Quantumroot preview changed transaction outputs. "
                "The preview was rejected."
            )

        tx.raw = None

        try:
            tx.invalidate_common_sighash_cache()
        except AttributeError:
            pass

        if tx.is_complete():
            raise RuntimeError(
                "Quantumroot preview transaction unexpectedly appears complete."
            )

        print("[quantumroot] unsigned preview outputs verified byte-for-byte unchanged")

        return tx

    def compile_signed_transaction(self, plan):
        xprv = None

        try:
            xprv = self.ui.plugin.quantumroot_get_xprv(
                self.wallet,
                self.ui.main_window,
            )

            if xprv is None:
                raise RuntimeError("Signing cancelled.")

            result = self.ui.plugin.quantumroot_compile_spend(
                template=plan["template"],
                xprv=xprv,
                category_id=plan["category"],
                quantum_lock_index=plan["quantum_lock_index"],
                authorization_utxo=plan["quantum_lock_utxo"],
                receive_inputs=plan["receive_inputs"],
                recipient=plan["recipient"],
                amount_sats=plan["amount_sats"],
                change_sats=plan["change_sats"],
            )

        finally:
            xprv = None

        if not isinstance(result, dict):
            raise RuntimeError("Quantumroot compiler returned an unexpected result.")

        if result.get("verified") is not True:
            raise RuntimeError("Quantumroot compiler did not verify the transaction.")

        transaction_hex = result.get("transactionHex")

        if not isinstance(transaction_hex, str) or not transaction_hex:
            raise RuntimeError("Quantumroot compiler returned no transaction.")

        signed_tx = Transaction(transaction_hex)
        signed_tx.deserialize()

        input_values = [int(plan["quantum_lock_utxo"]["value"])]
        input_values.extend(int(item["value"]) for item in plan["receive_inputs"])

        signed_inputs = signed_tx.inputs()

        if len(signed_inputs) != len(input_values):
            raise RuntimeError(
                "Signed transaction input count does not match the Quantumroot plan."
            )

        for txin, value in zip(signed_inputs, input_values):
            txin["value"] = value

        return signed_tx
        
    @staticmethod
    def same_reviewed_transaction(review_tx, signed_tx):
        """
        Ensure Sign reconstructed the same economic transaction that the user
        reviewed.

        Unlocking bytecode may differ. Inputs, sequences, outputs, version, and
        locktime may not.
        """

        if review_tx.version != signed_tx.version:
            return False

        if review_tx.locktime != signed_tx.locktime:
            return False

        review_inputs = review_tx.inputs()
        signed_inputs = signed_tx.inputs()

        if len(review_inputs) != len(signed_inputs):
            return False

        for review_input, signed_input in zip(review_inputs, signed_inputs):
            if review_input.get("prevout_hash") != signed_input.get("prevout_hash"):
                return False

            if review_input.get("prevout_n") != signed_input.get("prevout_n"):
                return False

            if review_input.get("sequence") != signed_input.get("sequence"):
                return False

        review_outputs = review_tx.outputs()
        signed_outputs = signed_tx.outputs()

        if len(review_outputs) != len(signed_outputs):
            return False

        for index in range(len(review_outputs)):
            if (
                review_tx.serialize_output_n_bytes(index)
                != signed_tx.serialize_output_n_bytes(index)
            ):
                return False

        return True

    @staticmethod
    def force_quantumroot_sign_state(dialog):
        """
        Electron Cash normally disables Sign when wallet.can_sign(tx) is false.

        Quantumroot inputs are intentionally unknown to the ordinary wallet
        signer, so the plugin owns this Sign action.
        """

        if dialog is None or getattr(dialog, "sign_button", None) is None:
            return

        if dialog.tx is not None and not dialog.tx.is_complete():
            dialog.sign_button.setEnabled(True)

    def sign_dialog_transaction(self, dialog, plan):
        if dialog is None or dialog.tx is None:
            return

        if dialog.tx.is_complete():
            return

        try:
            dialog.sign_button.setEnabled(False)

            signed_tx = self.compile_signed_transaction(plan)

            if not self.same_reviewed_transaction(dialog.tx, signed_tx):
                raise RuntimeError(
                    "Signed Quantumroot transaction does not match the transaction that was reviewed."
                )

            dialog.tx = signed_tx
            dialog.update()

            print("[quantumroot] Electron Cash transaction dialog signed successfully")

        except Exception as e:
            self.show_error(
                _("Unable to sign Quantumroot transaction: {}").format(str(e))
            )
            self.force_quantumroot_sign_state(dialog)

    def open_transaction_dialog(self, unsigned_tx, plan):
        dialog = show_transaction(
            unsigned_tx,
            self.ui.main_window,
            _("Quantumroot withdrawal"),
        )

        if dialog is None:
            raise RuntimeError("Electron Cash did not create a transaction dialog.")

        sign_button = getattr(dialog, "sign_button", None)

        if sign_button is None:
            raise RuntimeError("Electron Cash transaction dialog has no Sign button.")

        try:
            sign_button.clicked.disconnect()
        except TypeError:
            pass

        def quantumroot_sign():
            self.sign_dialog_transaction(dialog, plan)

        sign_button.clicked.connect(quantumroot_sign)

        original_update = dialog.update

        def quantumroot_update():
            original_update()
            self.force_quantumroot_sign_state(dialog)

        dialog.update = quantumroot_update
        self.force_quantumroot_sign_state(dialog)

        return dialog

    def build_requested_plan(self):
        recipient = self.recipient_edit.text().strip()

        if not recipient:
            raise ValueError("Recipient is required.")

        amount_sats = self.parse_amount_sats(self.amount_edit.text())
        plan = self.ui.build_send_plan(recipient, amount_sats)

        if not isinstance(plan, dict):
            raise RuntimeError(
                "Quantumroot transaction planner returned an unexpected result."
            )

        return plan

    def preview_clicked(self):
        if self._constructing:
            return

        self.set_constructing(True)

        try:
            from PyQt5.QtWidgets import QApplication

            QApplication.processEvents()

            plan = self.build_requested_plan()
            unsigned_tx = self.build_unsigned_preview(plan)

        except Exception as e:
            self.set_constructing(False)
            self.show_error(
                _("Unable to open unsigned Quantumroot transaction: {}").format(str(e))
            )
            return

        self.set_constructing(False)

        try:
            self.open_transaction_dialog(unsigned_tx, plan)

        except Exception as e:
            self.show_error(
                _("Unable to open Electron Cash transaction dialog: {}").format(str(e))
            )
            return

        self.accept()

    def sign_and_broadcast_clicked(self):
        if self._constructing:
            return

        self.set_constructing(True)

        try:
            from PyQt5.QtWidgets import QApplication

            QApplication.processEvents()

            plan = self.build_requested_plan()

            # Use the same planned transaction identity check as PREVIEW, even
            # though this direct path does not display the preview.
            review_tx = self.build_unsigned_preview(plan)
            signed_tx = self.compile_signed_transaction(plan)

            if not self.same_reviewed_transaction(review_tx, signed_tx):
                raise RuntimeError(
                    "Signed Quantumroot transaction does not match the planned transaction."
                )

            network = self.ui.main_window.network

            if network is None:
                raise RuntimeError("Electron Cash is not connected to a network.")

            success, result = network.broadcast_transaction(signed_tx)

            if not success:
                raise RuntimeError(str(result))

            txid = signed_tx.txid()

            print("[quantumroot] transaction signed and broadcast:", txid)

        except Exception as e:
            self.set_constructing(False)
            self.show_error(
                _("Unable to sign and broadcast Quantumroot transaction: {}").format(str(e))
            )
            return

        self.set_constructing(False)

        self.show_message(
            _(
                "Quantumroot transaction broadcast successfully.\n\n"
                "Transaction ID:\n{}"
            ).format(txid)
        )

        self.accept()
