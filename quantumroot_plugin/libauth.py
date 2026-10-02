from electroncash import address


"""
This file is essentially the python interface to the persistent libauth
service. It validates and prepares Quantumroot-specific data, converts
Electron Cash objects into JSON-safe values and makes the RPC 
calls to the node.js layer.
"""

def compile_script(
    client,
    template,
    xprv: str,
    category_id: str,
    script_id: str = "quantum_lock",
    address_index: int = 0,
):
    """Compile one deterministic Quantumroot locking script through libauth."""
    print(
        "[quantumroot] compiling:", script_id,
        "index:", address_index,
        "category:", category_id,
    )

    result = client.call(
        "quantumrootCompileScript",
        {
            "template": template,
            "xprv": xprv,
            "category": category_id,
            "scriptId": script_id,
            "addressIndex": address_index,
        },
        timeout_s=10.0,
    )
    print("[quantumroot] compiled script:", result)
    return result


def compile_spend_transaction(
    client,
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
    """Validate, compile, sign, and verify one complete Quantumroot spend transaction."""
    if not isinstance(authorization_utxo, dict):
        raise ValueError("Invalid Quantumroot authorization UTXO.")

    token_data = authorization_utxo.get("token_data")
    if token_data is None:
        raise ValueError("Authorization UTXO has no CashToken data.")
    if token_data.id_hex.lower() != category_id.lower():
        raise ValueError("Authorization NFT category does not match the vault category.")
    if not token_data.has_nft() or not token_data.is_immutable_nft():
        raise ValueError("Authorization UTXO is not an immutable NFT.")

    commitment = bytes(token_data.commitment)
    if commitment != b"quantumroot":
        raise ValueError("Authorization NFT has the wrong commitment.")

    recipient_address = address.Address.from_string(recipient.strip())
    recipient_locking_bytecode = recipient_address.to_script().hex()

    receive_script = compile_script(
        client,
        template=template,
        xprv=xprv,
        category_id=category_id,
        script_id="receive_address",
        address_index=0,
    )
    receive_locking_bytecode = receive_script["lockingBytecode"]

    current_lock = compile_script(
        client,
        template=template,
        xprv=xprv,
        category_id=category_id,
        script_id="quantum_lock",
        address_index=quantum_lock_index,
    )
    authorization_locking_bytecode = current_lock["lockingBytecode"]

    authorization_input = {
        "txid": authorization_utxo["tx_hash"],
        "vout": int(authorization_utxo["tx_pos"]),
        "satoshis": int(authorization_utxo["value"]),
        "lockingBytecode": authorization_locking_bytecode,
    }

    json_receive_inputs = [
        {
            "txid": coin["tx_hash"],
            "vout": int(coin["tx_pos"]),
            "satoshis": int(coin["value"]),
            "lockingBytecode": receive_locking_bytecode,
        }
        for coin in receive_inputs
    ]

    result = client.call(
        "quantumrootCompileSpend",
        {
            "template": template,
            "xprv": xprv,
            "category": category_id,
            "quantumLockIndex": int(quantum_lock_index),
            "authorizationInput": authorization_input,
            "receiveInputs": json_receive_inputs,
            "recipientLockingBytecode": recipient_locking_bytecode,
            "recipientSatoshis": int(amount_sats),
            "changeLockingBytecode": receive_locking_bytecode,
            "changeSatoshis": None if change_sats is None else int(change_sats),
            # Preserve the incidental sats carried by the authorization NFT while rotating it.
            "nftSatoshis": int(authorization_utxo["value"]),
            "nftCommitment": commitment.hex(),
        },
        timeout_s=60.0,
    )

    print(
        "[quantumroot] compiled spend transaction:",
        {
            "verified": result.get("verified") if isinstance(result, dict) else None,
            "transactionBytes": result.get("transactionBytes") if isinstance(result, dict) else None,
            "feeSatoshis": result.get("feeSatoshis") if isinstance(result, dict) else None,
        },
    )

    # Keep the planner's established Python-side name while the service reports transactionBytes.
    if isinstance(result, dict) and "transactionBytes" in result:
        result["sizeBytes"] = int(result["transactionBytes"])

    return result
