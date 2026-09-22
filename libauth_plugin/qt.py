from PyQt5.QtGui import *
from PyQt5.QtCore import *
from PyQt5.QtWidgets import *
import electroncash.version
from electroncash.i18n import _
from electroncash.plugins import BasePlugin, hook

import os, sys
import json
import zipfile, tempfile, shutil
from pathlib import Path
import platform
import subprocess
import threading
import queue
import itertools
import time

HERE = os.path.dirname(__file__)
if HERE not in sys.path:
    sys.path.insert(0, HERE)

def _is_running_from_zip() -> bool:
    zmark = ".zip" + os.sep
    return zmark in __file__

def _zip_info():
    """
    Return (zip_path, pkg_dir) if running from zip; else (None, None).
    """
    zmark = ".zip" + os.sep
    if zmark not in __file__:
        return None, None
    zip_path, inner = __file__.split(zmark, 1)
    zip_path = zip_path + ".zip"
    pkg_dir = inner.split(os.sep, 1)[0]
    return zip_path, pkg_dir


def _platform_node_relpaths():
    """
    Return node relative path
      - Linux x64:     bin/linux-x64/node
      - Windows x64:   bin/win-x64/node.exe
      - macOS x64:     bin/mac-x64/node
      - macOS arm64:   bin/mac-arm64/node
    """
    sysname = platform.system().lower()

    if sysname == "linux":
        return os.path.join("bin", "linux-x64", "node"), False

    if sysname == "windows":
        return os.path.join("bin", "win-x64", "node.exe"), True

    if sysname == "darwin":
        machine = platform.machine().lower()

        if machine in ("arm64", "aarch64"):
            return os.path.join("bin", "mac-arm64", "node"), False
        else:
            return os.path.join("bin", "mac-x64", "node"), False

    raise RuntimeError(
        f"Unsupported platform: {platform.system()} / {platform.machine()}"
    )
 
def _ensure_node_assets():
    """
    Ensure we have executable node + the service bundle as files on disk.
    Returns (node_path, service_path).

    If plugin is zipped, extracts:
      - platform node binary
      - scripts/ (entire folder, preserving subpaths)
    into a temp directory.

    If plugin is unzipped, returns paths inside HERE.
    """
    node_rel, is_windows = _platform_node_relpaths()
    service_rel = os.path.join("scripts", "libauth_service.bundle.mjs")

    # ---- Unzipped plugin: use on-disk paths directly ----
    if not _is_running_from_zip():
        node_path = os.path.join(HERE, node_rel)
        service_path = os.path.join(HERE, service_rel)

        if not os.path.exists(node_path):
            raise FileNotFoundError(f"Bundled node not found at: {node_path}")
        if not os.path.exists(service_path):
            raise FileNotFoundError(f"Service bundle not found at: {service_path}")

        if not is_windows:
            try:
                os.chmod(node_path, 0o755)
            except Exception:
                pass

        return node_path, service_path

    # ---- Zipped plugin: extract to tempdir ----
    zip_path, pkg_dir = _zip_info()
    if not zip_path or not pkg_dir:
        raise RuntimeError("Could not locate plugin zip info")

    out_dir = Path(tempfile.gettempdir()) / "electroncash_node_plugins" / pkg_dir
    out_dir.mkdir(parents=True, exist_ok=True)

    extracted_node = out_dir / ("node.exe" if is_windows else "node")
 
    out_service_path = out_dir / service_rel  # Assumes we have: /scripts/libauth_service.bundle.mjs

    node_member = pkg_dir + "/" + node_rel.replace(os.sep, "/")
    scripts_prefix = pkg_dir + "/scripts/"

    with zipfile.ZipFile(zip_path, "r") as zf:
        # Extract node binary
        try:
            with zf.open(node_member) as src, open(extracted_node, "wb") as dst:
                shutil.copyfileobj(src, dst)
        except KeyError:
            raise FileNotFoundError(f"Node binary not found in zip at: {node_member}")

        # Extract everything under scripts/ preserving subpaths
        for name in zf.namelist():
            if not name.startswith(scripts_prefix):
                continue
            if name.endswith("/"):
                continue  # directory entry

            rel_under_scripts = name[len(scripts_prefix):]  # e.g. "hello.js" or "subfolder/hello.js"
            out_path = out_dir / "scripts" / rel_under_scripts
            out_path.parent.mkdir(parents=True, exist_ok=True)

            with zf.open(name) as src, open(out_path, "wb") as dst:
                shutil.copyfileobj(src, dst)

    # Make node executable
    if not is_windows:
        try:
            os.chmod(str(extracted_node), 0o755)
        except Exception:
            pass

    # Verify service exists after extraction
    if not out_service_path.exists():
        raise FileNotFoundError(f"Service bundle not found after extract: {out_service_path}")

    return str(extracted_node), str(out_service_path)

class NodeLibauthClient:
    """
    Persistent Node subprocess running scripts/libauth_service.bundle.mjs 

    Concurrency-safe: routes responses by id so multiple threads can call()
    without losing each other's messages.
    """

    def __init__(self):
        self.proc = None
        self._id = itertools.count(1)

        # id -> queue.Queue(maxsize=1)
        self._waiters = {}
        self._waiters_lock = threading.Lock()

        # serialize writes to stdin
        self._write_lock = threading.Lock()

        self._node_path = None
        self._service_path = None

    def start(self):
        if self.proc is not None:
            return

        node_path, service_path = _ensure_node_assets()
        self._node_path = node_path
        self._service_path = service_path

        self.proc = subprocess.Popen(
            [self._node_path, self._service_path],
            stdin=subprocess.PIPE,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True,
            bufsize=1,
        )

        def stdout_reader():
            try:
                for line in self.proc.stdout:
                    line = line.strip()
                    if not line:
                        continue

                    try:
                        resp = json.loads(line)
                    except Exception:
                        continue

                    resp_id = resp.get("id", None)

                    with self._waiters_lock:
                        q = self._waiters.get(resp_id)

                    # If someone is waiting for this id, deliver it.
                    if q is not None:
                        try:
                            q.put(resp, block=False)
                        except Exception:
                            pass
            except Exception:
                pass

        def stderr_reader():
            try:
                for line in self.proc.stderr:
                    line = line.rstrip("\n")
                    if line:
                        print("[libauth-plugin][node stderr]", line)
            except Exception:
                pass

        threading.Thread(target=stdout_reader, daemon=True).start()
        threading.Thread(target=stderr_reader, daemon=True).start()

    def call(self, method: str, params: dict, timeout_s: float = 5.0):
        self.start()

        if self.proc is None or self.proc.stdin is None:
            raise RuntimeError("Node process not running")

        call_id = next(self._id)
        msg = {"id": call_id, "method": method, "params": params}

        waiter = queue.Queue(maxsize=1)
        with self._waiters_lock:
            self._waiters[call_id] = waiter

        try:
            # Write request (serialize writes)
            with self._write_lock:
                self.proc.stdin.write(json.dumps(msg) + "\n")
                self.proc.stdin.flush()

            # Wait for response routed by id
            try:
                resp = waiter.get(timeout=timeout_s)
            except queue.Empty:
                raise TimeoutError("Timed out waiting for libauth")

            if not resp.get("ok", False):
                raise RuntimeError(f"libauth error: {resp.get('error')}")
            return resp.get("result", None)

        finally:
            with self._waiters_lock:
                self._waiters.pop(call_id, None)

    def stop(self):
        if self.proc is None:
            return
        try:
            self.proc.terminate()
        except Exception:
            pass
        self.proc = None


class Plugin(BasePlugin):
    electrumcash_qt_gui = None
    is_version_compatible = True

    def __init__(self, parent, config, name):
        BasePlugin.__init__(self, parent, config, name)

        self.wallet_windows = {}
        self.wallet_payment_tabs = {}
        self.wallet_payment_lists = {}

        # Persistent Node libauth service
        self.libauth = NodeLibauthClient()

    def fullname(self):
        return "JS and Libauth Integration"

    def description(self):
        return _("JS and Libauth Integration.")

    def is_available(self):
        if self.is_version_compatible is None:
            version = float(electroncash.version.PACKAGE_VERSION)
            self.is_version_compatible = version >= MINIMUM_ELECTRON_CASH_VERSION
        return True

    def on_close(self):
        """
        BasePlugin callback called when the wallet is disabled among other things.
        """
        try:
            self.libauth.stop()
        except Exception:
            pass

        for window in list(self.wallet_windows.values()):
            self.close_wallet(window.wallet)
 
    @hook
    def init_qt(self, qt_gui):
        """
        Hook called when a plugin is loaded (or enabled).
        """
        self.electrumcash_qt_gui = qt_gui
        if len(self.wallet_windows):
            return

        for window in self.electrumcash_qt_gui.windows:
            self.load_wallet(window.wallet, window)

    def run_custom_js(self, script_rel_path: str, params=None, timeout_s: float = 5.0):
        """
        Run a bundled Node script as a one-off process.

        Inputs:
          - script_rel_path: e.g. "scripts/hello.js"
          - params: dict (JSON-encoded to stdin). If None, uses {}.
          
        Output:
          - If stdout is JSON: returns parsed object (dict/list/etc.)
          - Otherwise: returns stdout string

        Script protocol:
          - Read one JSON object from stdin (optional)
          - Write one JSON value to stdout
          - Use stderr for logs
        """
        if params is None:
            params = {}

        # Ensure node + service + scripts are extracted if running from zip
        node_path, _service_path = _ensure_node_assets()

        # Resolve script path depending on zip/unzipped plugin
        if _is_running_from_zip():
            _zip_path, pkg_dir = _zip_info()
            out_dir = Path(tempfile.gettempdir()) / "electroncash_node_plugins" / pkg_dir
            # In zip mode, scripts are extracted to out_dir/scripts/... preserving subpaths
            script_path = str(out_dir / script_rel_path)
        else:
            script_path = os.path.join(HERE, script_rel_path)
                
        if not os.path.exists(script_path):
            raise FileNotFoundError(f"JS script not found: {script_path}")


        payload_text = json.dumps(params)

        p = subprocess.run(
            [node_path, script_path],
            input=payload_text,
            capture_output=True,
            text=True,
            timeout=timeout_s,
        )

        if p.returncode != 0:
            err = (p.stderr or "").strip()
            raise RuntimeError(f"node script failed rc={p.returncode}: {err}")

        out = (p.stdout or "").strip()

        # Try JSON output; fallback to raw string
        try:
            return json.loads(out) if out else None
        except Exception:
            return out

 
    def test_libauth(self):
        """
        Smoke tests for the libauth JSON-RPC bridge.
        """
        try: 

            # ---- TEST 1) privateKeyToP2pkhCashAddress ----

            priv_hex = "11" * 32  #Dummy private key


            r1 = self.libauth.call(
                "libauthCall",
                {
                    "fn": "privateKeyToP2pkhCashAddress",
                    "args": {
                        "privateKey": {"hexbytes": priv_hex},
                        "prefix": "bitcoincash",
                        "tokenSupport": False,
                    },
                },
            )

            addr = r1.get("address") if isinstance(r1, dict) else None
            print("[libauth-plugin] privateKeyToP2pkhCashAddress ->", addr)

            # ---- TEST 2) decodeCashAddress  ----

            r2 = self.libauth.call(
                "libauthCall",
                {
                    "fn": "decodeCashAddress",
                    "args": [addr],
                },
            )
            print("[libauth-plugin] decodeCashAddress ->", r2)

            # ---- TEST 3) derivePublicKeyCompressed (from privkey) ----

            r3 = self.libauth.call(
                "libauthCall",
                {
                    "fn": "secp256k1.derivePublicKeyCompressed",
                    "args": [{"hexbytes": priv_hex}],
                },
            )
            print("[libauth-plugin] derivePublicKeyCompressed ->", r3)

            # ---- TEST 4) publicKeyToP2pkhCashAddress (from derived pubkey) ----

            r4 = self.libauth.call(
                "libauthCall",
                {
                    "fn": "publicKeyToP2pkhCashAddress",
                    "args": {
                        "publicKey": r3,
                        "prefix": "bitcoincash",
                        "tokenSupport": False,
                    },
                },
            )

            print(
                "[libauth-plugin] publicKeyToP2pkhCashAddress ->",
                r4.get("address") if isinstance(r4, dict) else r4,
            )

            # ---- TEST 5) hexToBin ----

            r5 = self.libauth.call(
                "libauthCall",
                {
                    "fn": "hexToBin",
                    "args": ["AAABBBCCCDDDEEEFFF000111222"],
                },
            )
            print("[libauth-plugin] hexToBin('AAABBBCCCDDDEEEFFF000111222') ->", r5)

            # ---- TEST 6) binToHex ----

            # This one feels stupid to test because we have to start with
            # a hex string to pass via JSON as "hexbytes" but we'll test it anyway.
            
            r6 = self.libauth.call(
                "libauthCall",
                {
                    "fn": "binToHex",
                    "args": [{"hexbytes": "AAABBBCCCDDDEEEFFF000111222"}],
                },
            )
            print("[libauth-plugin] binToHex(hexbytes AAABBBCCCDDDEEEFFF000111222) ->", r6)

            # ---- TEST 7) transaction encode/decode round-trip ----
        
            zero32 = "00" * 32
            tx_obj = {
                "version": 2,
                "locktime": 0,
                "inputs": [
                    {
                        "outpointTransactionHash": {"hexbytes": zero32},
                        "outpointIndex": 0,
                        "sequenceNumber": 0xFFFFFFFF,
                        "unlockingBytecode": {"hexbytes": ""},
                    }
                ],
                "outputs": [
                    { 
                        "valueSatoshis": {"bigint": "0"},
                        "lockingBytecode": {"hexbytes": ""},
                    }
                ],
            }

            enc = self.libauth.call(
                "libauthCall",
                {
                    "fn": "encodeTransactionCommon",
                    "args": [tx_obj],   
                },
            )
            print("[libauth-plugin] encodeTransactionCommon ->", enc)

            dec = self.libauth.call(
                "libauthCall",
                {
                    "fn": "decodeTransactionCommon",
                    "args": [enc],   
                },
            )
            print("[libauth-plugin] decodeTransactionCommon ->", dec)

            # ---- TEST 8) compileCashAssembly ----
            # Minimal CashAssembly that compiles to bytecode 0x51 0x51 0x87 (515187)

            ca = "0x51 0x51 0x87"  # OP_1 OP_1 OP_EQUAL
            r8 = self.libauth.call(
                "libauthCall",
                {
                    "fn": "compileCashAssembly",
                    "args": [ca],
                },
            )
            print("[libauth-plugin] compileCashAssembly ->", r8)

        except Exception as e:
            print("[libauth-plugin] libauth bridge test failed:", repr(e))

    @hook
    def load_wallet(self, wallet, window):
        """
        Hook called when a wallet is loaded and a window opened for it.
        """
        wallet_name = window.wallet.basename()
        self.wallet_windows[wallet_name] = window
        print("wallet loaded")

        self.add_ui_for_wallet(wallet_name, window)
        self.refresh_ui_for_wallet(wallet_name)
        
        # custom JS script via the single runner
        try:
            res = self.run_custom_js("scripts/hello.js",
                {"name": "Alice"},
                timeout_s=5.0,
            )
            print("[libauth-plugin] hello script ->", res)
        except Exception as e:
            print("[libauth-plugin] hello script failed:", repr(e))

        # test Libauth functionality
        self.test_libauth()
        
    @hook
    def close_wallet(self, wallet):
        wallet_name = wallet.basename()
        window = self.wallet_windows[wallet_name]
        del self.wallet_windows[wallet_name]
        self.remove_ui_for_wallet(wallet_name, window)

    def add_ui_for_wallet(self, wallet_name, window):
        from .ui import Ui

        l = Ui(window, self, wallet_name)
        tab = window.create_list_tab(l)
        self.wallet_payment_tabs[wallet_name] = tab
        self.wallet_payment_lists[wallet_name] = l
        window.tabs.addTab(tab, QIcon(":icons/preferences.png"), _("libauth-plugin"))

    def remove_ui_for_wallet(self, wallet_name, window):
        wallet_tab = self.wallet_payment_tabs.get(wallet_name, None)
        if wallet_tab is not None:
            del self.wallet_payment_lists[wallet_name]
            del self.wallet_payment_tabs[wallet_name]
            i = window.tabs.indexOf(wallet_tab)
            window.tabs.removeTab(i)

    def refresh_ui_for_wallet(self, wallet_name):
        wallet_tab = self.wallet_payment_tabs[wallet_name]
        wallet_tab.update()
        wallet_tab = self.wallet_payment_lists[wallet_name]
        wallet_tab.update()

