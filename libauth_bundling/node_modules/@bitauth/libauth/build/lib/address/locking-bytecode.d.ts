import type { Base58AddressNetwork, CashAddressNetworkPrefix, CashAddressResult, Sha256 } from '../lib.js';
/**
 * The most common address types used on Bitcoin Cash and similar networks. Each
 * address type represents a commonly used locking bytecode pattern.
 *
 * @remarks
 * Addresses are strings that encode information about the network and
 * `lockingBytecode` to which a transaction output can pay.
 *
 * Several address formats exist – `Base58Address` was the format used by the
 * original satoshi client, and is still in use on several active chains (see
 * {@link encodeBase58Address}). On Bitcoin Cash, the `CashAddress` standard is
 * most common (See {@link encodeCashAddress}).
 */
export declare enum LockingBytecodeType {
    /**
     * Pay to Public Key (P2PK). This address type is uncommon, and primarily
     * occurs in early blocks because the original satoshi implementation mined
     * rewards to P2PK addresses.
     *
     * There are no standardized address formats for representing a P2PK address.
     * Instead, most applications use the `AddressType.p2pkh` format.
     */
    p2pk = "P2PK",
    /**
     * Pay to Public Key Hash (P2PKH). The most common address type. P2PKH
     * addresses lock funds using a single private key.
     */
    p2pkh = "P2PKH",
    /**
     * 20-byte Pay to Script Hash (P2SH20). An address type that locks funds to
     * the 20-byte hash of a script provided in the spending transaction. See
     * BIPs 13 and 16 for details.
     */
    p2sh20 = "P2SH20",
    /**
     * 32-byte Pay to Script Hash (P2SH32). An address type that locks funds to
     * the 32-byte hash of a script provided in the spending transaction.
     */
    p2sh32 = "P2SH32"
}
/**
 * An object representing the contents of an address of a known address type.
 * This can be used to encode an address or its locking bytecode.
 */
export type KnownAddressTypeContents = {
    type: `${LockingBytecodeType}`;
    payload: Uint8Array;
};
export type UnknownAddressTypeContents = {
    /**
     * This address type represents an address using an unknown or uncommon
     * locking bytecode pattern for which no standardized address formats exist.
     */
    type: 'unknown';
    payload: Uint8Array;
};
/**
 * An object representing the contents of an address. This can be used to encode
 * an address or its locking bytecode.
 *
 * See {@link lockingBytecodeToAddressContents} for details.
 */
export type AddressContents = KnownAddressTypeContents | UnknownAddressTypeContents;
export declare const isPayToPublicKeyUncompressed: (lockingBytecode: Uint8Array) => boolean;
export declare const isPayToPublicKeyCompressed: (lockingBytecode: Uint8Array) => boolean;
export declare const isPayToPublicKey: (lockingBytecode: Uint8Array) => boolean;
export declare const isPayToPublicKeyHash: (lockingBytecode: Uint8Array) => boolean;
export declare const isPayToScriptHash20: (lockingBytecode: Uint8Array) => boolean;
export declare const isPayToScriptHash32: (lockingBytecode: Uint8Array) => boolean;
/**
 * Attempt to match a lockingBytecode to a standard address type for use in
 * address encoding. (See {@link LockingBytecodeType} for details.)
 *
 * For a locking bytecode matching the Pay to Public Key Hash (P2PKH) pattern,
 * the returned `type` is {@link LockingBytecodeType.p2pkh} and `payload` is the
 * `HASH160` of the public key.
 *
 * For a locking bytecode matching the 20-byte Pay to Script Hash (P2SH20)
 * pattern, the returned `type` is {@link LockingBytecodeType.p2sh20} and
 * `payload` is the `HASH160` of the redeeming bytecode, A.K.A. "redeem
 * script hash".
 *
 * For a locking bytecode matching the Pay to Public Key (P2PK) pattern, the
 * returned `type` is {@link LockingBytecodeType.p2pk} and `payload` is the full
 * public key.
 *
 * Any other locking bytecode will return a `type` of
 * {@link LockingBytecodeType.unknown} and a payload of the
 * unmodified `bytecode`.
 *
 * @param bytecode - the locking bytecode to match
 */
export declare const lockingBytecodeToAddressContents: (bytecode: Uint8Array) => AddressContents;
/**
 * Given the 20-byte {@link hash160} of a compressed public key, return a P2PKH
 * locking bytecode:
 * `OP_DUP OP_HASH160 OP_PUSHBYTES_20 publicKeyHash OP_EQUALVERIFY OP_CHECKSIG`.
 *
 * This method does not validate `publicKeyHash` in any way; inputs of incorrect
 * lengths will produce incorrect results.
 *
 * @param publicKeyHash - the 20-byte hash of the compressed public key
 * @returns
 */
export declare const encodeLockingBytecodeP2pkh: (publicKeyHash: Uint8Array) => Uint8Array;
/**
 * Given the 20-byte {@link hash160} of a P2SH20 redeem bytecode, encode a
 * P2SH20 locking bytecode:
 * `OP_HASH160 OP_PUSHBYTES_20 redeemBytecodeHash OP_EQUAL`.
 *
 * This method does not validate `p2sh20Hash` in any way; inputs of incorrect
 * lengths will produce incorrect results.
 *
 * @param p2sh20Hash - the 20-byte, p2sh20 redeem bytecode hash
 */
export declare const encodeLockingBytecodeP2sh20: (p2sh20Hash: Uint8Array) => Uint8Array;
/**
 * Given the 32-byte {@link hash256} of a P2SH32 redeem bytecode, encode a
 * P2SH32 locking bytecode:
 * `OP_HASH256 OP_PUSHBYTES_32 redeemBytecodeHash OP_EQUAL`.
 *
 * This method does not validate `p2sh32Hash` in any way; inputs of incorrect
 * lengths will produce incorrect results.
 *
 * @param p2sh32Hash - the 32-byte, p2sh32 redeem bytecode hash
 */
export declare const encodeLockingBytecodeP2sh32: (p2sh32Hash: Uint8Array) => Uint8Array;
/**
 * Given a 33-byte compressed or 65-byte uncompressed public key, encode a P2PK
 * locking bytecode: `OP_PUSHBYTES_33 publicKey OP_CHECKSIG` or
 * `OP_PUSHBYTES_65 publicKey OP_CHECKSIG`.
 *
 * This method does not validate `publicKey` in any way; inputs of incorrect
 * lengths will produce incorrect results.
 *
 * @param publicKey - the 33-byte or 65-byte public key
 */
export declare const encodeLockingBytecodeP2pk: (publicKey: Uint8Array) => Uint8Array;
/**
 * Get the locking bytecode for a {@link KnownAddressTypeContents}. See
 * {@link lockingBytecodeToAddressContents} for details.
 *
 * @param addressContents - the `AddressContents` to encode
 */
export declare const addressContentsToLockingBytecode: ({ payload, type, }: KnownAddressTypeContents) => Uint8Array;
export type DecodedCashAddressLockingBytecode = {
    bytecode: Uint8Array;
    prefix: `${CashAddressNetworkPrefix}`;
    tokenSupport: boolean;
};
/**
 * Encode a locking bytecode as a CashAddress.
 *
 * If `bytecode` matches a standard pattern, it is encoded using the proper
 * address type and returned as a {@link CashAddressResult}.
 *
 * If `bytecode` cannot be encoded as an address (i.e. because the pattern is
 * not standard), an error message is returned as a `string`.
 *
 * For the reverse, see {@link cashAddressToLockingBytecode}.
 *
 * Due to the high likelihood of runtime errors in a variety of use cases (e.g.
 * attempting to convert P2PK or arbitrary data outputs to CashAddresses for
 * display in a transaction viewer or block explorer), this function returns
 * encoding errors in a type-safe way (as a `string`) rather than via thrown
 * `Error` objects.
 *
 * For applications in which the input to `lockingBytecodeToCashAddress` is
 * trusted (e.g. the application is encoding an address for self-generated
 * locking bytecode), consider using `assertSuccess` to simplify error handling:
 *
 * ```ts
 * import {
 *   assertSuccess,
 *   lockingBytecodeToCashAddress
 * } from '@bitauth/libauth';
 * import { lockingBytecode, useTheAddress } from './my/app.js';
 *
 * const { address } = assertSuccess(
 *   lockingBytecodeToCashAddress(lockingBytecode)
 * );
 *
 * useTheAddress(address);
 * ```
 *
 * @param bytecode - the locking bytecode to encode
 * @param prefix - the network prefix to use, e.g. `bitcoincash`, `bchtest`, or
 * `bchreg`, defaults to `bitcoincash`
 * @param tokenSupport - If `true`, the address will indicate that the receiver
 * accepts CashTokens; defaults to `false`.
 */
export declare const lockingBytecodeToCashAddress: ({ prefix, bytecode, tokenSupport, }: Omit<DecodedCashAddressLockingBytecode, "prefix" | "tokenSupport"> & {
    prefix?: `${CashAddressNetworkPrefix}`;
    tokenSupport?: boolean;
}) => CashAddressResult | string;
/**
 * Convert a CashAddress to its respective locking bytecode.
 *
 * This method returns the locking bytecode and network prefix. If an error
 * occurs, an error message is returned as a string.
 *
 * For the reverse, see {@link lockingBytecodeToCashAddress}.
 *
 * @param address - the CashAddress to convert
 */
export declare const cashAddressToLockingBytecode: (address: string) => string | DecodedCashAddressLockingBytecode;
/**
 * Encode a locking bytecode as a Base58Address for a given network.
 *
 * If `bytecode` matches a standard pattern, it is encoded using the proper
 * address type and returned as a valid Base58Address (string).
 *
 * If `bytecode` cannot be encoded as an address (i.e. because the pattern is
 * not standard), the resulting {@link AddressContents} is returned.
 *
 * For the reverse, see {@link base58AddressToLockingBytecode}.
 *
 * Note, Base58Addresses cannot accept tokens; to accept tokens,
 * use {@link lockingBytecodeToCashAddress} with `tokenSupport` set
 * to `true`.
 *
 * @param bytecode - the locking bytecode to encode
 * @param network - the network for which to encode the address (`mainnet`,
 * `testnet`, or 'copayBCH'), defaults to `mainnet`
 * @param sha256 - an implementation of sha256 (defaults to the internal WASM
 * implementation)
 */
export declare const lockingBytecodeToBase58Address: (bytecode: Uint8Array, network?: `${Base58AddressNetwork}`, sha256?: {
    hash: Sha256["hash"];
}) => string | AddressContents;
/**
 * Convert a Base58Address to its respective locking bytecode.
 *
 * This method returns the locking bytecode and network version. If an error
 * occurs, an error message is returned as a string.
 *
 * For the reverse, see {@link lockingBytecodeToBase58Address}.
 *
 * @param address - the CashAddress to convert
 */
export declare const base58AddressToLockingBytecode: (address: string, sha256?: {
    hash: Sha256["hash"];
}) => string | {
    bytecode: Uint8Array;
    version: number;
};
//# sourceMappingURL=locking-bytecode.d.ts.map