from PyQt5.QtCore import Qt
from PyQt5.QtWidgets import QComboBox, QDialog, QDialogButtonBox, QFormLayout, QLabel, QVBoxLayout

from electroncash.i18n import _
from electroncash import address, bitcoin, token, wallet
from electroncash_gui.qt.util import MessageBoxMixin

"""
Creates the Quantumroot authorization NFT. This dialog selects a genesis-capable
wallet UTXO, uses its transaction ID as the vault's CashTokens category, compiles
quantum_lock #0, and builds the unsigned genesis transaction that places the
immutable authorization NFT at that lock.
"""

class MintNftDialog(QDialog, MessageBoxMixin):
    """Quantumroot authorization NFT genesis dialog."""

    def __init__(self, ui):
        super().__init__(ui)

        self.ui = ui
        self.main_window = ui.main_window
        self.wallet = ui.wallet
        self.eligible_utxos = []

        self.setWindowTitle(_("Mint Quantumroot Authorization NFT"))
        self.setMinimumWidth(650)

        layout = QVBoxLayout(self)

        title = QLabel("<b>{}</b>".format(_("Mint Quantumroot Authorization NFT")))
        layout.addWidget(title)

        info = QLabel(_("Select a genesis-capable :0 wallet coin for the Quantumroot vault category."))
        info.setWordWrap(True)
        layout.addWidget(info)

        form = QFormLayout()

        self.coin_combo = QComboBox()
        self.coin_combo.setMinimumWidth(500)
        self.coin_combo.currentIndexChanged.connect(self.on_coin_changed)
        form.addRow(_("Genesis Coin:"), self.coin_combo)

        self.category_label = QLabel("-")
        self.category_label.setWordWrap(True)
        self.category_label.setTextInteractionFlags(Qt.TextSelectableByMouse | Qt.TextSelectableByKeyboard)
        form.addRow(_("Category ID:"), self.category_label)

        self.nft_type_label = QLabel(_("Immutable"))
        form.addRow(_("NFT:"), self.nft_type_label)

        self.commitment_label = QLabel(_("quantumroot"))
        form.addRow(_("Commitment:"), self.commitment_label)

        self.destination_label = QLabel(_("Quantumroot quantum_lock #0"))
        form.addRow(_("Destination:"), self.destination_label)

        layout.addLayout(form)

        self.status_label = QLabel("")
        self.status_label.setWordWrap(True)
        layout.addWidget(self.status_label)

        self.buttons = QDialogButtonBox(QDialogButtonBox.Ok | QDialogButtonBox.Cancel)
        self.mint_button = self.buttons.button(QDialogButtonBox.Ok)
        self.mint_button.setText(_("Mint"))

        self.buttons.accepted.connect(self.mint_nft)
        self.buttons.rejected.connect(self.reject)
        layout.addWidget(self.buttons)

        self.load_genesis_coins()

    def estimate_tx_fee(self, tx_size=310):
        return int((tx_size * wallet.relayfee(self.main_window.network) + 999) // 1000)

    def minimum_genesis_coin_value(self):
        token_dust = token.heuristic_dust_limit_for_longest_possible_token_bearing_p2pkh_output()
        return token_dust + self.estimate_tx_fee()

    def load_genesis_coins(self):
        self.coin_combo.clear()
        self.eligible_utxos = []

        try:
            utxos = self.wallet.get_utxos(
                exclude_frozen=True,
                mature=True,
                confirmed_only=False,
                exclude_slp=True,
                exclude_tokens=True,
            )
        except Exception as e:
            self.mint_button.setEnabled(False)
            self.status_label.setText(_("Unable to read wallet UTXOs: {}").format(str(e)))
            return

        try:
            minimum_value = self.minimum_genesis_coin_value()
        except Exception as e:
            self.mint_button.setEnabled(False)
            self.status_label.setText(_("Unable to calculate minimum coin value: {}").format(str(e)))
            return

        for utxo in utxos:
            if utxo.get("prevout_n") != 0:
                continue

            if utxo.get("value", 0) < minimum_value:
                continue

            self.eligible_utxos.append(utxo)

        self.eligible_utxos.sort(key=lambda u: -u["value"])

        for index, utxo in enumerate(self.eligible_utxos):
            txid = utxo["prevout_hash"]
            value = utxo["value"]

            try:
                addr = utxo["address"].to_ui_string()
            except Exception:
                addr = str(utxo.get("address", ""))

            short_txid = "{}...{}".format(txid[:8], txid[-8:])
            display_text = "{}:0 | {} sats | {}".format(short_txid, value, addr)
            self.coin_combo.addItem(display_text, index)

        if not self.eligible_utxos:
            self.category_label.setText("-")
            self.status_label.setText(
                _(
                    "No suitable genesis-capable :0 coin was found. "
                    "A :0 coin must contain at least {:,} sats using "
                    "Electron Cash's current token dust/fee estimate."
                ).format(minimum_value)
            )
            self.mint_button.setEnabled(False)
            return

        self.status_label.setText(_("Select the :0 wallet coin to use for the Quantumroot vault category."))
        self.mint_button.setEnabled(True)
        self.on_coin_changed(self.coin_combo.currentIndex())

    def on_coin_changed(self, index):
        if index < 0 or index >= len(self.eligible_utxos):
            self.category_label.setText("-")
            return

        utxo = self.eligible_utxos[index]
        self.category_label.setText(utxo["prevout_hash"])

    def mint_nft(self):
        index = self.coin_combo.currentIndex()

        if index < 0 or index >= len(self.eligible_utxos):
            self.show_error(_("Please select a genesis-capable coin."))
            return

        utxo = self.eligible_utxos[index]
        category_id = utxo["prevout_hash"]

        if len(category_id) != 64:
            self.show_error(_("Unexpected transaction ID length."))
            return

        if utxo.get("prevout_n") != 0:
            self.show_error(_("Selected coin is not output index 0."))
            return

        if self.ui.quantumroot_template is None:
            self.show_error(_("Quantumroot wallet template is not loaded."))
            return

        try:
            quantumroot_xprv = self.ui.plugin.quantumroot_get_xprv(self.wallet, self.main_window)
        except Exception as e:
            self.show_error(_("Unable to access the wallet XPRV: {}").format(str(e)))
            return

        if not quantumroot_xprv:
            return

        print("[quantumroot-ui] category:", category_id)

        self.status_label.setText(_("Compiling quantum_lock #0..."))

        try:
            result = self.ui.plugin.quantumroot_compile_script(
                template=self.ui.quantumroot_template,
                xprv=quantumroot_xprv,
                category_id=category_id,
                script_id="quantum_lock",
                address_index=0,
            )
        except Exception as e:
            self.show_error(_("Unable to compile quantum_lock #0: {}").format(str(e)))
            return

        if not isinstance(result, dict):
            self.show_error(_("Compiler returned an unexpected result."))
            return

        locking_bytecode = result.get("lockingBytecode")
        cash_address = result.get("address")

        if not locking_bytecode:
            self.show_error(_("Compiler returned no locking bytecode."))
            return

        if not cash_address:
            self.show_error(_("Compiler returned no address."))
            return

        print("[quantumroot-ui] quantum_lock #0 bytecode:", locking_bytecode)
        print("[quantumroot-ui] quantum_lock #0 address:", cash_address)

        try:
            locking_bytecode_bytes = bytes.fromhex(locking_bytecode)
        except Exception as e:
            self.show_error(_("Invalid Quantumroot locking bytecode: {}").format(str(e)))
            return

        if not locking_bytecode_bytes:
            self.show_error(_("Quantumroot locking bytecode is empty."))
            return

        quantum_script = address.ScriptOutput(locking_bytecode_bytes)

        bitfield = 0
        bitfield |= token.Structure.HasNFT
        bitfield |= token.Structure.HasCommitmentLength
        bitfield |= token.Capability.NoCapability

        commitment = b"quantumroot"

        try:
            tok = token.OutputData(
                id=category_id,
                amount=0,
                commitment=commitment,
                bitfield=bitfield,
            )
        except Exception as e:
            self.show_error(_("Unable to construct Quantumroot authorization NFT: {}").format(str(e)))
            return

        try:
            nft_dust = wallet.calc_dust(locking_bytecode_bytes, tok)
        except Exception as e:
            self.show_error(_("Unable to calculate Quantumroot NFT dust: {}").format(str(e)))
            return

        print("[quantumroot-ui] NFT dust:", nft_dust)

        try:
            change_addr = self.wallet.get_unused_address(for_change=True, frozen_ok=False)

            if change_addr is None:
                change_addr = utxo["address"]

        except Exception as e:
            self.show_error(_("Unable to get change address: {}").format(str(e)))
            return

        # Output 0: ordinary BCH wallet change.
        # Output 1: Quantumroot authorization NFT at quantum_lock #0.

        outputs = [
            (bitcoin.TYPE_ADDRESS, change_addr, "!"),
            (bitcoin.TYPE_SCRIPT, quantum_script, nft_dust),
        ]

        token_datas = [None, tok]

        print("[quantumroot-ui] building genesis transaction")
        print("[quantumroot-ui] input:", "{}:{}".format(category_id, utxo.get("prevout_n")))
        print("[quantumroot-ui] category:", category_id)
        print("[quantumroot-ui] commitment:", commitment)
        print("[quantumroot-ui] capability: immutable")
        print("[quantumroot-ui] fungible amount: 0")
        print("[quantumroot-ui] destination:", cash_address)
        print("[quantumroot-ui] destination bytecode:", locking_bytecode)

        self.status_label.setText(_("Building unsigned transaction..."))

        try:
            tx = self.wallet.make_unsigned_transaction(
                inputs=[utxo],
                outputs=outputs,
                config=self.main_window.config,
                token_datas=token_datas,
                bip69_sort=False,
            )
        except Exception as e:
            self.show_error(_("Unable to create Quantumroot NFT transaction: {}").format(str(e)))
            return

        self.accept()

        tx_desc = _("Quantumroot authorization NFT genesis: {}").format(category_id)

        try:
            self.main_window.show_transaction(tx, tx_desc=tx_desc)
        except Exception as e:
            self.show_error(_("Unable to display transaction: {}").format(str(e)))
