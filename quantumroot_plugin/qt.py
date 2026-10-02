import json
import os
import zipfile

import electroncash.version
from PyQt5.QtGui import QIcon
from electroncash.i18n import _
from electroncash.plugins import BasePlugin, hook

from . import libauth as quantumroot_libauth
from .node import NodeLibauthClient, run_custom_js

"""
The main plugin file, which manages the plugin lifecycle and wallet tabs, 
provides access to wallet data,  and connects the UI to the 
Quantumroot libauth interface and persistent Node service.
"""


class Plugin(BasePlugin):
    electrumcash_qt_gui = None
    is_version_compatible = True

    def __init__(self, parent, config, name):
        super().__init__(parent, config, name)
        self.wallet_windows = {}
        self.wallet_payment_tabs = {}
        self.wallet_payment_lists = {}

        # Persistent client for the bundled libauth service.
        self.libauth = NodeLibauthClient()

    def fullname(self):
        return "Quantumroot Vault"

    def description(self):
        return _("Quantumroot Vault")

    def is_available(self):
        return True

    def on_close(self):
        """Stop the Node service and remove Quantumroot UI from open wallets."""
        try:
            self.libauth.stop()
        except Exception:
            pass

        for window in list(self.wallet_windows.values()):
            self.close_wallet(window.wallet)

    @hook
    def init_qt(self, qt_gui):
        """Load Quantumroot into each Electron Cash window."""
        self.electrumcash_qt_gui = qt_gui
        if self.wallet_windows:
            return

        for window in self.electrumcash_qt_gui.windows:
            self.load_wallet(window.wallet, window)

    def run_custom_js(self, script_rel_path: str, params=None, timeout_s: float = 5.0):
        return run_custom_js(script_rel_path, params=params, timeout_s=timeout_s)

    def quantumroot_get_xprv(self, wallet, window):
        """Return the wallet master XPRV using Electron Cash's keystore APIs."""
        from electroncash import keystore
        from electroncash.util import InvalidPassword

        xprv_keystores = [
            ks
            for ks in wallet.get_keystores()
            if isinstance(ks, keystore.Xprv) and ks.has_master_private_key()
        ]

        if not xprv_keystores:
            raise RuntimeError("Wallet does not contain a master private key.")
        if len(xprv_keystores) != 1:
            raise RuntimeError(
                "Quantumroot currently requires a wallet with exactly one master private key."
            )

        xprv_keystore = xprv_keystores[0]
        password = None

        if xprv_keystore.is_master_private_key_encrypted():
            password = window.password_dialog()
            if password is None:
                return None

        try:
            return xprv_keystore.get_master_private_key(password)
        except InvalidPassword:
            raise RuntimeError("Incorrect wallet password.")
            
    def quantumroot_load_template(self):
        """Load the Quantumroot authentication template from the plugin or plugin ZIP."""
        module_path = os.path.abspath(__file__).replace("\\", "/")

        if ".zip/" in module_path:
            zip_path, internal_path = module_path.split(".zip/", 1)
            zip_path += ".zip"
            template_path = os.path.dirname(internal_path) + "/quantumroot-schnorr-lm-ots-vault.json"

            with zipfile.ZipFile(zip_path, "r") as archive:
                template_bytes = archive.read(template_path)

            return json.loads(template_bytes.decode("utf-8"))

        template_path = os.path.join(os.path.dirname(module_path), "quantumroot-schnorr-lm-ots-vault.json")

        with open(template_path, "r", encoding="utf-8") as template_file:
            return json.load(template_file)
            
                    
    def quantumroot_compile_script(
        self,
        template,
        xprv: str,
        category_id: str,
        script_id: str = "quantum_lock",
        address_index: int = 0,
    ):
        """Compile one deterministic Quantumroot locking script through libauth."""
        return quantumroot_libauth.compile_script(
            self.libauth,
            template=template,
            xprv=xprv,
            category_id=category_id,
            script_id=script_id,
            address_index=address_index,
        )

    def quantumroot_compile_spend(
        self,
        *,
        template,
        xprv: str,
        category_id: str,
        quantum_lock_index: int,
        authorization_utxo,
        receive_inputs,
        recipient: str,
        amount_sats: int,
        change_sats,
    ):
        """Compile, sign, and verify a complete Quantumroot spend transaction."""
        return quantumroot_libauth.compile_spend_transaction(
            self.libauth,
            template=template,
            xprv=xprv,
            category_id=category_id,
            quantum_lock_index=quantum_lock_index,
            authorization_utxo=authorization_utxo,
            receive_inputs=receive_inputs,
            recipient=recipient,
            amount_sats=amount_sats,
            change_sats=change_sats,
        )

    # ------------------------------------------------------------------
    # Electron Cash wallet / tab lifecycle
    # ------------------------------------------------------------------

    @hook
    def load_wallet(self, wallet, window):
        wallet_name = window.wallet.basename()
        self.wallet_windows[wallet_name] = window
        print("[quantumroot] wallet loaded:", wallet_name)
        self.add_ui_for_wallet(wallet_name, window)
        self.refresh_ui_for_wallet(wallet_name)

    @hook
    def close_wallet(self, wallet):
        wallet_name = wallet.basename()
        window = self.wallet_windows.get(wallet_name)
        if window is None:
            return

        self.remove_ui_for_wallet(wallet_name, window)
        self.wallet_windows.pop(wallet_name, None)

    def add_ui_for_wallet(self, wallet_name, window):
        from .ui import Ui

        ui = Ui(window, self, wallet_name)
        tab = window.create_list_tab(ui)
        self.wallet_payment_tabs[wallet_name] = tab
        self.wallet_payment_lists[wallet_name] = ui
        window.tabs.addTab(tab, QIcon(":icons/preferences.png"), _("Quantumroot Vault"))

    def remove_ui_for_wallet(self, wallet_name, window):
        wallet_tab = self.wallet_payment_tabs.pop(wallet_name, None)
        self.wallet_payment_lists.pop(wallet_name, None)
        if wallet_tab is not None:
            index = window.tabs.indexOf(wallet_tab)
            if index >= 0:
                window.tabs.removeTab(index)

    def refresh_ui_for_wallet(self, wallet_name):
        wallet_tab = self.wallet_payment_tabs.get(wallet_name)
        wallet_list = self.wallet_payment_lists.get(wallet_name)
        if wallet_tab is not None:
            wallet_tab.update()
        if wallet_list is not None:
            wallet_list.update()
