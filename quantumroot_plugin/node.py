import itertools
import json
import os
import platform
import queue
import shutil
import subprocess
import tempfile
import threading
import zipfile
from pathlib import Path

"""
This file handles actually connecting to the node executable.  Locate and
extract the bundled Node, manage the persistent service process, 
and provide the JSON-RPC client used by plugin.
"""

HERE = os.path.dirname(__file__)


def _is_running_from_zip() -> bool:
    return ".zip" + os.sep in __file__


def _zip_info():
    """Return (zip_path, package_dir) when running from a plugin ZIP."""
    marker = ".zip" + os.sep
    if marker not in __file__:
        return None, None

    zip_path, inner = __file__.split(marker, 1)
    return zip_path + ".zip", inner.split(os.sep, 1)[0]


def _platform_node_relpath():
    """Return (relative Node path, is_windows) for the current platform."""
    system = platform.system().lower()

    if system == "linux":
        return os.path.join("bin", "linux-x64", "node"), False
    if system == "windows":
        return os.path.join("bin", "win-x64", "node.exe"), True
    if system == "darwin":
        machine = platform.machine().lower()
        arch = "mac-arm64" if machine in ("arm64", "aarch64") else "mac-x64"
        return os.path.join("bin", arch, "node"), False

    raise RuntimeError(f"Unsupported platform: {platform.system()} / {platform.machine()}")


def _ensure_node_assets():
    """Ensure bundled Node and the libauth service are available as files on disk."""
    node_rel, is_windows = _platform_node_relpath()
    service_rel = os.path.join("scripts", "libauth_service.bundle.mjs")

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

    zip_path, package_dir = _zip_info()
    if not zip_path or not package_dir:
        raise RuntimeError("Could not locate plugin zip info")

    out_dir = Path(tempfile.gettempdir()) / "electroncash_node_plugins" / package_dir
    out_dir.mkdir(parents=True, exist_ok=True)

    extracted_node = out_dir / ("node.exe" if is_windows else "node")
    out_service_path = out_dir / service_rel
    node_member = package_dir + "/" + node_rel.replace(os.sep, "/")
    scripts_prefix = package_dir + "/scripts/"

    with zipfile.ZipFile(zip_path, "r") as archive:
        # Do not overwrite a Node executable that may already be running.
        if not extracted_node.exists():
            try:
                with archive.open(node_member) as src, open(extracted_node, "wb") as dst:
                    shutil.copyfileobj(src, dst)
            except KeyError:
                raise FileNotFoundError(f"Node binary not found in zip at: {node_member}")

        # Scripts are ordinary files and can be refreshed from the plugin ZIP.
        for name in archive.namelist():
            if not name.startswith(scripts_prefix) or name.endswith("/"):
                continue

            rel_path = name[len(scripts_prefix):]
            out_path = out_dir / "scripts" / rel_path
            out_path.parent.mkdir(parents=True, exist_ok=True)
            with archive.open(name) as src, open(out_path, "wb") as dst:
                shutil.copyfileobj(src, dst)

    if not is_windows:
        try:
            os.chmod(str(extracted_node), 0o755)
        except Exception:
            pass

    if not extracted_node.exists():
        raise FileNotFoundError(f"Node binary not found after extraction: {extracted_node}")
    if not out_service_path.exists():
        raise FileNotFoundError(f"Service bundle not found after extraction: {out_service_path}")

    return str(extracted_node), str(out_service_path)


class NodeLibauthClient:
    """Persistent, concurrency-safe JSON-RPC client for the bundled libauth service."""

    def __init__(self):
        self.proc = None
        self._id = itertools.count(1)
        self._waiters = {}
        self._waiters_lock = threading.Lock()
        self._write_lock = threading.Lock()
        self._node_path = None
        self._service_path = None

    def start(self):
        if self.proc is not None:
            return

        self._node_path, self._service_path = _ensure_node_assets()
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
                        response = json.loads(line)
                    except Exception:
                        continue

                    response_id = response.get("id")
                    with self._waiters_lock:
                        waiter = self._waiters.get(response_id)
                    if waiter is not None:
                        try:
                            waiter.put(response, block=False)
                        except Exception:
                            pass
            except Exception:
                pass

        def stderr_reader():
            try:
                for line in self.proc.stderr:
                    line = line.rstrip("\n")
                    if line:
                        print("[quantumroot][node stderr]", line)
            except Exception:
                pass

        threading.Thread(target=stdout_reader, daemon=True).start()
        threading.Thread(target=stderr_reader, daemon=True).start()

    def call(self, method: str, params: dict, timeout_s: float = 5.0):
        self.start()
        if self.proc is None or self.proc.stdin is None:
            raise RuntimeError("Node process not running")

        call_id = next(self._id)
        message = {"id": call_id, "method": method, "params": params}
        waiter = queue.Queue(maxsize=1)

        with self._waiters_lock:
            self._waiters[call_id] = waiter

        try:
            with self._write_lock:
                self.proc.stdin.write(json.dumps(message) + "\n")
                self.proc.stdin.flush()

            try:
                response = waiter.get(timeout=timeout_s)
            except queue.Empty:
                raise TimeoutError("Timed out waiting for libauth")

            if not response.get("ok", False):
                raise RuntimeError(f"libauth error: {response.get('error')}")
            return response.get("result")
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


def run_custom_js(script_rel_path: str, params=None, timeout_s: float = 5.0):
    """Run a bundled one-off JS script. Libauth operations belong in the persistent service."""
    params = {} if params is None else params
    node_path, _ = _ensure_node_assets()

    if _is_running_from_zip():
        _, package_dir = _zip_info()
        out_dir = Path(tempfile.gettempdir()) / "electroncash_node_plugins" / package_dir
        script_path = str(out_dir / script_rel_path)
    else:
        script_path = os.path.join(HERE, script_rel_path)

    if not os.path.exists(script_path):
        raise FileNotFoundError(f"JS script not found: {script_path}")

    process = subprocess.run(
        [node_path, script_path],
        input=json.dumps(params),
        capture_output=True,
        text=True,
        timeout=timeout_s,
    )
    if process.returncode != 0:
        raise RuntimeError(
            f"node script failed rc={process.returncode}: {(process.stderr or '').strip()}"
        )

    output = (process.stdout or "").strip()
    try:
        return json.loads(output) if output else None
    except Exception:
        return output
