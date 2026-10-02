from PyQt5.QtCore import Qt
from PyQt5.QtGui import QPixmap
from PyQt5.QtWidgets import QGroupBox, QHBoxLayout, QLabel, QPushButton, QVBoxLayout

import copy
import pkgutil

from electroncash.i18n import _
from electroncash import wallet 
from electroncash_gui.qt.util import ButtonsLineEdit, MyTreeWidget, MessageBoxMixin
from .mint import MintNftDialog
from .vault import QuantumrootVault
from .send import QuantumrootSendDialog
from .transaction import QuantumrootTransactionPlanner


class Ui(MyTreeWidget, MessageBoxMixin):
    def __init__(self, parent, plugin, wallet_name):
        MyTreeWidget.__init__(self, parent, self.create_menu, [], 0, [])

        self.main_window = parent
        self.wallet = parent.wallet
        self.plugin = plugin
        self.wallet_name = wallet_name

        self.quantumroot_vault = QuantumrootVault(self.main_window.network)
        self.quantumroot_transaction_planner = QuantumrootTransactionPlanner(self.quantumroot_vault)
        self.quantumroot_template = self.plugin.quantumroot_load_template()

        layout = QVBoxLayout()
        layout.setContentsMargins(18, 12, 18, 12)
        layout.setSpacing(10)
        self.setLayout(layout)

        header_row = QHBoxLayout()
        header_row.setContentsMargins(4, 2, 4, 4)
        header_row.setSpacing(12)

        self.logo_label = QLabel()
        self.logo_label.setFixedSize(100, 100)
        self.logo_label.setAlignment(Qt.AlignCenter)

        try:
            logo_data = pkgutil.get_data(__package__, "assets/logo-quantumroot-icon.png")

            if not logo_data:
                raise RuntimeError("Logo asset is empty or missing.")

            logo_pixmap = QPixmap()

            if not logo_pixmap.loadFromData(logo_data):
                raise RuntimeError("Unable to decode logo image.")

            self.logo_label.setPixmap(
                logo_pixmap.scaled(82, 82, Qt.KeepAspectRatio, Qt.SmoothTransformation)
            )

        except Exception as e:
            print("[quantumroot-ui] unable to load logo:", str(e))

        header_row.addWidget(self.logo_label, 0, Qt.AlignTop)

        header_text = QVBoxLayout()
        header_text.setSpacing(2)

        title = QLabel(
            "<span style='font-size: 20px; font-weight: 600;'>"
            "Quantumroot Vault"
            "</span>"
        )

        subtitle = QLabel(_("Quantum-resistant BCH vault"))
        subtitle.setWordWrap(False)
        subtitle.setMinimumWidth(260)

        header_text.addStretch()
        header_text.addWidget(title)
        header_text.addWidget(subtitle)
        header_text.addStretch()

        header_row.addLayout(header_text)
        header_row.addStretch()
        layout.addLayout(header_row)

        self.info_box = QGroupBox(_("Your Vault"))
        self.info_box.setStyleSheet(
            "QGroupBox {"
            "  border: 1px solid #b8c9dc;"
            "  border-radius: 6px;"
            "  margin-top: 12px;"
            "  padding-top: 10px;"
            "}"
            "QGroupBox::title {"
            "  subcontrol-origin: margin;"
            "  left: 12px;"
            "  padding: 0 5px;"
            "  color: #245b8f;"
            "  font-weight: 600;"
            "}"
        )

        info_layout = QVBoxLayout(self.info_box)
        info_layout.setContentsMargins(18, 16, 18, 14)
        info_layout.setSpacing(7)

        self.vault_status_label = QLabel(_("You haven't created the vault yet."))
        self.vault_status_label.setWordWrap(True)
        self.vault_status_label.setStyleSheet(
            "font-size: 18px; font-weight: 600;"
            "padding: 3px 0 5px 0;"
        )
        info_layout.addWidget(self.vault_status_label)

        self.vault_address_intro_label = QLabel(_("Your vault address is"))
        self.vault_address_intro_label.setWordWrap(True)
        self.vault_address_intro_label.setStyleSheet("padding-top: 3px;")
        self.vault_address_intro_label.setVisible(False)
        info_layout.addWidget(self.vault_address_intro_label)

        self.receive_address_label = ButtonsLineEdit("")
        self.receive_address_label.setReadOnly(True)
        self.receive_address_label.addCopyButton()
        self.receive_address_label.setVisible(False)
        info_layout.addWidget(self.receive_address_label)
        
        refresh_row = QHBoxLayout()
        refresh_row.addStretch()

        self.refresh_button = QPushButton(_("Refresh"))
        self.refresh_button.setFixedSize(100, 34)
        self.refresh_button.setToolTip(_("Refresh Quantumroot vault information")) 
        self.refresh_button.clicked.connect(self.refresh_quantumroot)
        refresh_row.addWidget(self.refresh_button)
        info_layout.addLayout(refresh_row)
        layout.addWidget(self.info_box)

        action_row = QHBoxLayout()
        action_row.setContentsMargins(16, 8, 16, 0)
        action_row.setSpacing(12)

        self.mint_nft_button = QPushButton(_("Create Vault"))
        self.mint_nft_button.setMinimumHeight(50)
        self.mint_nft_button.setMinimumWidth(170)
        self.mint_nft_button.setStyleSheet(
            "QPushButton {"
            "  padding: 8px 20px;"
            "  font-size: 14px;"
            "  font-weight: 600;"
            "}"
        )
        self.mint_nft_button.clicked.connect(self.open_mint_nft_dialog)

        self.send_button = QPushButton(_("Send"))
        self.send_button.setMinimumHeight(50)
        self.send_button.setMinimumWidth(170)
        self.send_button.setStyleSheet(
            "QPushButton {"
            "  background-color: #1473e6;"
            "  color: white;"
            "  border: 1px solid #0f65cc;"
            "  border-radius: 5px;"
            "  padding: 8px 20px;"
            "  font-size: 14px;"
            "  font-weight: 600;"
            "}"
            "QPushButton:hover {"
            "  background-color: #0f68d4;"
            "}"
            "QPushButton:pressed {"
            "  background-color: #0b5bbb;"
            "}"
            "QPushButton:disabled {"
            "  background-color: #d6d9dd;"
            "  color: #8a8f96;"
            "  border-color: #c6c9cd;"
            "}"
        )
        self.send_button.clicked.connect(self.open_send_dialog)

        action_row.addStretch()
        action_row.addWidget(self.mint_nft_button)
        action_row.addWidget(self.send_button)
        action_row.addStretch()

        layout.addLayout(action_row)

        self.quantumroot_nft = self.find_quantumroot_nft()
        initialized = self.quantumroot_nft is not None
 
        self.mint_nft_button.setEnabled(not initialized)
        self.send_button.setEnabled(initialized)
        layout.addStretch()

        if initialized:
            self.refresh_vault_information(show_errors=False)

    # The authorization NFT identifies this Quantumroot vault. Search the
    # wallet's known transactions for an NFT with the "quantumroot" commitment
    # and recover its CashTokens category.
    def find_quantumroot_nft_in_wallet(self):
        quantumroot_xprv = self.plugin.quantumroot_get_xprv(self.wallet, self.main_window)

        if not quantumroot_xprv:
            return None

        for wallet_tx in self.wallet.transactions.values():
            try:
                tx = copy.deepcopy(wallet_tx)
                tx.deserialize()
                outputs = tx.outputs(tokens=True)

            except Exception as e:
                print("[quantumroot-ui] unable to inspect transaction:", str(e))
                continue

            for output in outputs:
                transaction_output, token_data = output

                if token_data is None:
                    continue

                if not token_data.has_nft():
                    continue

                if not token_data.is_immutable_nft():
                    continue

                if token_data.commitment != b"quantumroot":
                    continue

                category_id = token_data.id_hex

                try:
                    quantum_lock = self.plugin.quantumroot_compile_script(
                        template=self.quantumroot_template,
                        xprv=quantumroot_xprv,
                        category_id=category_id,
                        script_id="quantum_lock",
                        address_index=0,
                    )

                    expected_script = bytes.fromhex(quantum_lock["lockingBytecode"])
                    actual_script = transaction_output[1].to_script()

                except Exception as e:
                    print("[quantumroot-ui] unable to verify Quantumroot NFT:", str(e))
                    continue

                if actual_script != expected_script:
                    print("[quantumroot-ui] ignoring foreign Quantumroot NFT category:", category_id)
                    continue

                print("[quantumroot-ui] found Quantumroot NFT category:", category_id)
                return {"category": category_id}

        return None

    # Recover the vault category from an authorization NFT that has been
    # verified against this wallet's deterministic Quantum Lock.
    def find_quantumroot_nft(self):
        entry = self.find_quantumroot_nft_in_wallet()

        if entry is None:
            print("[quantumroot-ui] no Quantumroot NFT found")
            return None

        print("[quantumroot-ui] found Quantumroot category:", entry["category"])
        return entry
    # The vault uses one deterministic receive address for BCH deposits and
    # change. It is always compiled as receive_address #0 using the vault's
    # CashTokens category and wallet key.
    def compile_receive_address(self):
        if self.quantumroot_nft is None:
            raise RuntimeError("Quantumroot vault is not initialized.")

        if self.quantumroot_template is None:
            raise RuntimeError("Quantumroot wallet template is not loaded.")

        quantumroot_xprv = self.plugin.quantumroot_get_xprv(self.wallet, self.main_window)

        if not quantumroot_xprv:
            return None

        category_id = self.quantumroot_nft["category"]

        result = self.plugin.quantumroot_compile_script(
            template=self.quantumroot_template,
            xprv=quantumroot_xprv,
            category_id=category_id,
            script_id="receive_address",
            address_index=0,
        )

        if not isinstance(result, dict):
            raise RuntimeError("Compiler returned an unexpected result.")

        if not result.get("address"):
            raise RuntimeError("Compiler returned no receive address.")

        if not result.get("lockingBytecode"):
            raise RuntimeError("Compiler returned no receive locking bytecode.")

        return result

    # Recheck whether this wallet has a Quantumroot vault, then update the
    # controls and displayed vault information to match the current state.
    def refresh_quantumroot(self):
        self.quantumroot_nft = self.find_quantumroot_nft()
        initialized = self.quantumroot_nft is not None
        self.mint_nft_button.setEnabled(not initialized)
        self.send_button.setEnabled(initialized)
        self.refresh_vault_information()
        
    def refresh_vault_information(self, show_errors=True):
        if self.quantumroot_nft is None:
            self.vault_status_label.setText(_("You haven't created the vault yet."))
            self.vault_address_intro_label.setVisible(False)
            self.receive_address_label.clear()
            self.receive_address_label.setVisible(False)
            return

        try:
            result = self.compile_receive_address()

        except Exception as e:
            if show_errors:
                self.show_error(_("Unable to compile receive address #0: {}").format(str(e)))
            else:
                print("[quantumroot-ui] unable to compile receive address #0:", str(e))
            return

        if result is None:
            return

        try:
            vault_state = self.quantumroot_vault.list_unspent(result["lockingBytecode"])

        except Exception as e:
            if show_errors:
                self.show_error(_("Unable to fetch Quantumroot UTXOs: {}").format(str(e)))
            else:
                print("[quantumroot-ui] unable to fetch Quantumroot UTXOs:", str(e))
            return

        balance = vault_state["balance"]
        utxos = vault_state["utxos"]

        print("[quantumroot-ui] receive_address #0:", result["address"])
        print("[quantumroot-ui] receive_address #0 scripthash:", vault_state["scripthash"])
        print("[quantumroot-ui] receive_address #0 UTXOs:", utxos)
        print("[quantumroot-ui] receive_address #0 balance:", balance)

        utxo_count = len(utxos)
        utxo_word = _("UTXO") if utxo_count == 1 else _("UTXOs")

        self.vault_status_label.setText(
            _("Your vault contains {:,} sats across {} {}.").format(balance, utxo_count, utxo_word)
        )

        self.vault_address_intro_label.setText(_("Your vault address is"))
        self.vault_address_intro_label.setVisible(True)

        self.receive_address_label.setText(result["address"])
        self.receive_address_label.setVisible(True)


    # The authorization NFT moves from quantum_lock #N to quantum_lock #(N+1)
    # after every successful vault spend. Walk the deterministic Quantum Locks
    # from #0 until the current authorization NFT is found.  
    def discover_current_quantum_lock(self, max_index=1000):
        if self.quantumroot_nft is None:
            raise RuntimeError("Quantumroot vault is not initialized.")

        if self.quantumroot_template is None:
            raise RuntimeError("Quantumroot wallet template is not loaded.")

        quantumroot_xprv = self.plugin.quantumroot_get_xprv(self.wallet, self.main_window)

        if not quantumroot_xprv:
            return None

        category_id = self.quantumroot_nft["category"]

        for quantum_index in range(max_index + 1):
            compiled = self.plugin.quantumroot_compile_script(
                template=self.quantumroot_template,
                xprv=quantumroot_xprv,
                category_id=category_id,
                script_id="quantum_lock",
                address_index=quantum_index,
            )

            if not isinstance(compiled, dict) or not compiled.get("lockingBytecode"):
                raise RuntimeError("Compiler returned an unexpected Quantum Lock result.")

            authorization_utxo = self.quantumroot_vault.find_authorization_utxo(
                compiled["lockingBytecode"],
                category_id,
            )

            if authorization_utxo is not None:
                current = {
                    "index": quantum_index,
                    "compiled": compiled,
                    "utxo": authorization_utxo,
                }

                self.wallet.storage.put("quantumroot_lock_index", quantum_index)
                self.wallet.storage.write()

                return current
            if not self.quantumroot_vault.has_history(compiled["lockingBytecode"]):
                raise RuntimeError(
                    "Authorization NFT was not found while walking Quantum Locks. "
                    "The first unused Quantum Lock is #{}.".format(quantum_index)
                )

        raise RuntimeError(
            "Authorization NFT was not found within Quantum Lock indices 0..{}.".format(max_index)
        )

    def build_send_plan(self, recipient, amount_sats):
        receive_result = self.compile_receive_address()

        if receive_result is None:
            return None

        receive_state = self.quantumroot_vault.list_unspent(receive_result["lockingBytecode"])
        current_lock = self.discover_current_quantum_lock()

        if current_lock is None:
            return None

        quantumroot_xprv = self.plugin.quantumroot_get_xprv(self.wallet, self.main_window)

        if not quantumroot_xprv:
            return None

        next_index = current_lock["index"] + 1

        next_lock = self.plugin.quantumroot_compile_script(
            template=self.quantumroot_template,
            xprv=quantumroot_xprv,
            category_id=self.quantumroot_nft["category"],
            script_id="quantum_lock",
            address_index=next_index,
        )

        receive_locking_bytecode = bytes.fromhex(receive_result["lockingBytecode"])
        change_dust_sats = wallet.calc_dust(receive_locking_bytecode, None)

        # This plugin uses a fixed fee rate of 2 sat/byte.
        fee_per_kb = 2000

        def compile_candidate(selected_receive_inputs, change_sats):
            return self.plugin.quantumroot_compile_spend(
                template=self.quantumroot_template,
                xprv=quantumroot_xprv,
                category_id=self.quantumroot_nft["category"],
                quantum_lock_index=current_lock["index"],
                authorization_utxo=current_lock["utxo"],
                receive_inputs=selected_receive_inputs,
                recipient=recipient,
                amount_sats=amount_sats,
                change_sats=change_sats,
            )

        plan = self.quantumroot_transaction_planner.build_transaction(
            recipient=recipient,
            amount_sats=amount_sats,
            receive_address=receive_result["address"],
            receive_locking_bytecode=receive_result["lockingBytecode"],
            receive_utxos=receive_state["utxos"],
            category=self.quantumroot_nft["category"],
            quantum_lock_index=current_lock["index"],
            quantum_lock_utxo=current_lock["utxo"],
            next_quantum_lock=next_lock,
            fee_per_kb=fee_per_kb,
            change_dust_sats=change_dust_sats,
            compile_candidate=compile_candidate,
        )

        plan["template"] = self.quantumroot_template
        return plan

    def open_send_dialog(self):
        try:
            dialog = QuantumrootSendDialog(self)
            dialog.exec_()

            self.quantumroot_nft = self.find_quantumroot_nft()
            initialized = self.quantumroot_nft is not None

            self.mint_nft_button.setEnabled(not initialized)
            self.send_button.setEnabled(initialized) 

            if initialized:
                self.refresh_vault_information(show_errors=False)

        except Exception as e:
            self.show_error(_("Unable to open Quantumroot send dialog: {}").format(str(e)))

    def open_mint_nft_dialog(self):
        try:
            dialog = MintNftDialog(self)
            dialog.exec_()

            self.quantumroot_nft = self.find_quantumroot_nft()
            initialized = self.quantumroot_nft is not None

            self.mint_nft_button.setEnabled(not initialized)
            self.send_button.setEnabled(initialized) 

            if initialized:
                self.refresh_vault_information(show_errors=False)

        except Exception as e:
            self.show_error(_("Unable to open NFT mint dialog: {}").format(str(e)))

    def create_menu(self):
        pass

    def on_delete(self):
        pass

    def on_update(self):
        pass
