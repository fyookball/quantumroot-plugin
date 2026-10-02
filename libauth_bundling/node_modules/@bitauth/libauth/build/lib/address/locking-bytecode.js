import { sha256 as internalSha256 } from '../crypto/crypto.js';
import { unknownValue } from '../format/format.js';
import { Base58AddressFormatVersion, decodeBase58Address, encodeBase58AddressFormat, } from './base58-address.js';
import { CashAddressEncodingError, CashAddressType, decodeCashAddress, encodeCashAddress, } from './cash-address.js';
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
export var LockingBytecodeType;
(function (LockingBytecodeType) {
    /**
     * Pay to Public Key (P2PK). This address type is uncommon, and primarily
     * occurs in early blocks because the original satoshi implementation mined
     * rewards to P2PK addresses.
     *
     * There are no standardized address formats for representing a P2PK address.
     * Instead, most applications use the `AddressType.p2pkh` format.
     */
    LockingBytecodeType["p2pk"] = "P2PK";
    /**
     * Pay to Public Key Hash (P2PKH). The most common address type. P2PKH
     * addresses lock funds using a single private key.
     */
    LockingBytecodeType["p2pkh"] = "P2PKH";
    /**
     * 20-byte Pay to Script Hash (P2SH20). An address type that locks funds to
     * the 20-byte hash of a script provided in the spending transaction. See
     * BIPs 13 and 16 for details.
     */
    LockingBytecodeType["p2sh20"] = "P2SH20";
    /**
     * 32-byte Pay to Script Hash (P2SH32). An address type that locks funds to
     * the 32-byte hash of a script provided in the spending transaction.
     */
    LockingBytecodeType["p2sh32"] = "P2SH32";
})(LockingBytecodeType || (LockingBytecodeType = {}));
export const isPayToPublicKeyUncompressed = (lockingBytecode) => lockingBytecode.length === 67 /* PayToPublicKeyUncompressed.length */ &&
    lockingBytecode[0] === 65 /* Opcodes.OP_PUSHBYTES_65 */ &&
    lockingBytecode[66 /* PayToPublicKeyUncompressed.lastElement */] ===
        172 /* Opcodes.OP_CHECKSIG */;
export const isPayToPublicKeyCompressed = (lockingBytecode) => lockingBytecode.length === 35 /* PayToPublicKeyCompressed.length */ &&
    lockingBytecode[0] === 33 /* Opcodes.OP_PUSHBYTES_33 */ &&
    lockingBytecode[34 /* PayToPublicKeyCompressed.lastElement */] === 172 /* Opcodes.OP_CHECKSIG */;
export const isPayToPublicKey = (lockingBytecode) => isPayToPublicKeyCompressed(lockingBytecode) ||
    isPayToPublicKeyUncompressed(lockingBytecode);
// eslint-disable-next-line complexity
export const isPayToPublicKeyHash = (lockingBytecode) => lockingBytecode.length === 25 /* PayToPublicKeyHash.length */ &&
    lockingBytecode[0] === 118 /* Opcodes.OP_DUP */ &&
    lockingBytecode[1] === 169 /* Opcodes.OP_HASH160 */ &&
    lockingBytecode[2] === 20 /* Opcodes.OP_PUSHBYTES_20 */ &&
    lockingBytecode[23] === 136 /* Opcodes.OP_EQUALVERIFY */ &&
    lockingBytecode[24] === 172 /* Opcodes.OP_CHECKSIG */;
export const isPayToScriptHash20 = (lockingBytecode) => lockingBytecode.length === 23 /* PayToScriptHash20.length */ &&
    lockingBytecode[0] === 169 /* Opcodes.OP_HASH160 */ &&
    lockingBytecode[1] === 20 /* Opcodes.OP_PUSHBYTES_20 */ &&
    lockingBytecode[22 /* PayToScriptHash20.lastElement */] === 135 /* Opcodes.OP_EQUAL */;
export const isPayToScriptHash32 = (lockingBytecode) => lockingBytecode.length === 35 /* PayToScriptHash32.length */ &&
    lockingBytecode[0] === 170 /* Opcodes.OP_HASH256 */ &&
    lockingBytecode[1] === 32 /* Opcodes.OP_PUSHBYTES_32 */ &&
    lockingBytecode[34 /* PayToScriptHash32.lastElement */] === 135 /* Opcodes.OP_EQUAL */;
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
// eslint-disable-next-line complexity
export const lockingBytecodeToAddressContents = (bytecode) => {
    if (isPayToPublicKeyHash(bytecode)) {
        return {
            payload: bytecode.slice(3 /* AddressPayload.p2pkhStart */, 23 /* AddressPayload.p2pkhEnd */),
            type: LockingBytecodeType.p2pkh,
        };
    }
    if (isPayToScriptHash20(bytecode)) {
        return {
            payload: bytecode.slice(2 /* AddressPayload.p2sh20Start */, 22 /* AddressPayload.p2sh20End */),
            type: LockingBytecodeType.p2sh20,
        };
    }
    if (isPayToScriptHash32(bytecode)) {
        return {
            payload: bytecode.slice(2 /* AddressPayload.p2sh32Start */, 34 /* AddressPayload.p2sh32End */),
            type: LockingBytecodeType.p2sh32,
        };
    }
    if (isPayToPublicKeyUncompressed(bytecode)) {
        return {
            payload: bytecode.slice(1 /* AddressPayload.p2pkUncompressedStart */, 66 /* AddressPayload.p2pkUncompressedEnd */),
            type: LockingBytecodeType.p2pk,
        };
    }
    if (isPayToPublicKeyCompressed(bytecode)) {
        return {
            payload: bytecode.slice(1 /* AddressPayload.p2pkCompressedStart */, 34 /* AddressPayload.p2pkCompressedEnd */),
            type: LockingBytecodeType.p2pk,
        };
    }
    return { payload: bytecode.slice(), type: 'unknown' };
};
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
export const encodeLockingBytecodeP2pkh = (publicKeyHash) => Uint8Array.from([
    118 /* Opcodes.OP_DUP */,
    169 /* Opcodes.OP_HASH160 */,
    20 /* Opcodes.OP_PUSHBYTES_20 */,
    ...publicKeyHash,
    136 /* Opcodes.OP_EQUALVERIFY */,
    172 /* Opcodes.OP_CHECKSIG */,
]);
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
export const encodeLockingBytecodeP2sh20 = (p2sh20Hash) => Uint8Array.from([
    169 /* Opcodes.OP_HASH160 */,
    20 /* Opcodes.OP_PUSHBYTES_20 */,
    ...p2sh20Hash,
    135 /* Opcodes.OP_EQUAL */,
]);
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
export const encodeLockingBytecodeP2sh32 = (p2sh32Hash) => Uint8Array.from([
    170 /* Opcodes.OP_HASH256 */,
    32 /* Opcodes.OP_PUSHBYTES_32 */,
    ...p2sh32Hash,
    135 /* Opcodes.OP_EQUAL */,
]);
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
export const encodeLockingBytecodeP2pk = (publicKey) => publicKey.length === 33 /* AddressPayload.compressedPublicKeyLength */
    ? Uint8Array.from([
        33 /* Opcodes.OP_PUSHBYTES_33 */,
        ...publicKey,
        172 /* Opcodes.OP_CHECKSIG */,
    ])
    : Uint8Array.from([
        65 /* Opcodes.OP_PUSHBYTES_65 */,
        ...publicKey,
        172 /* Opcodes.OP_CHECKSIG */,
    ]);
/**
 * Get the locking bytecode for a {@link KnownAddressTypeContents}. See
 * {@link lockingBytecodeToAddressContents} for details.
 *
 * @param addressContents - the `AddressContents` to encode
 */
export const addressContentsToLockingBytecode = ({ payload, type, }) => {
    if (type === LockingBytecodeType.p2pkh) {
        return encodeLockingBytecodeP2pkh(payload);
    }
    if (type === LockingBytecodeType.p2sh20) {
        return encodeLockingBytecodeP2sh20(payload);
    }
    if (type === LockingBytecodeType.p2sh32) {
        return encodeLockingBytecodeP2sh32(payload);
    }
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    if (type === LockingBytecodeType.p2pk) {
        return encodeLockingBytecodeP2pk(payload);
    }
    return unknownValue(type, `Unrecognized addressContents type:`);
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
// eslint-disable-next-line complexity
export const lockingBytecodeToCashAddress = ({ prefix = 'bitcoincash', bytecode, tokenSupport = false, }) => {
    const { payload, type } = lockingBytecodeToAddressContents(bytecode);
    if (type === LockingBytecodeType.p2pkh) {
        return tokenSupport
            ? encodeCashAddress({
                payload,
                prefix,
                throwErrors: false,
                type: CashAddressType.p2pkhWithTokens,
            })
            : encodeCashAddress({
                payload,
                prefix,
                throwErrors: false,
                type: CashAddressType.p2pkh,
            });
    }
    if (type === LockingBytecodeType.p2sh20 ||
        type === LockingBytecodeType.p2sh32) {
        return tokenSupport
            ? encodeCashAddress({
                payload,
                prefix,
                throwErrors: false,
                type: CashAddressType.p2shWithTokens,
            })
            : encodeCashAddress({
                payload,
                prefix,
                throwErrors: false,
                type: CashAddressType.p2sh,
            });
    }
    if (type === 'P2PK') {
        return CashAddressEncodingError.noTypeBitsValueStandardizedForP2pk;
    }
    return CashAddressEncodingError.unknownLockingBytecodeType;
};
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
// eslint-disable-next-line complexity
export const cashAddressToLockingBytecode = (address) => {
    const decoded = decodeCashAddress(address);
    if (typeof decoded === 'string')
        return decoded;
    if (decoded.type === CashAddressType.p2pkh ||
        decoded.type === CashAddressType.p2pkhWithTokens) {
        return {
            bytecode: addressContentsToLockingBytecode({
                payload: decoded.payload,
                type: LockingBytecodeType.p2pkh,
            }),
            prefix: decoded.prefix,
            tokenSupport: decoded.type === CashAddressType.p2pkhWithTokens,
        };
    }
    if (decoded.type === CashAddressType.p2sh ||
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        decoded.type === CashAddressType.p2shWithTokens) {
        return {
            bytecode: addressContentsToLockingBytecode({
                payload: decoded.payload,
                type: decoded.payload.length === 32 /* AddressPayload.p2sh32Length */
                    ? LockingBytecodeType.p2sh32
                    : LockingBytecodeType.p2sh20,
            }),
            prefix: decoded.prefix,
            tokenSupport: decoded.type === CashAddressType.p2shWithTokens,
        };
    }
    /* c8 ignore next 2 */
    return unknownValue(decoded.type);
};
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
export const lockingBytecodeToBase58Address = (bytecode, network = 'mainnet', sha256 = internalSha256) => {
    const contents = lockingBytecodeToAddressContents(bytecode);
    if (contents.type === LockingBytecodeType.p2pkh) {
        return encodeBase58AddressFormat({
            copayBCH: Base58AddressFormatVersion.p2pkhCopayBCH,
            mainnet: Base58AddressFormatVersion.p2pkh,
            testnet: Base58AddressFormatVersion.p2pkhTestnet,
        }[network], contents.payload, sha256);
    }
    if (contents.type === LockingBytecodeType.p2sh20) {
        return encodeBase58AddressFormat({
            copayBCH: Base58AddressFormatVersion.p2sh20CopayBCH,
            mainnet: Base58AddressFormatVersion.p2sh20,
            testnet: Base58AddressFormatVersion.p2sh20Testnet,
        }[network], contents.payload, sha256);
    }
    return contents;
};
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
export const base58AddressToLockingBytecode = (address, sha256 = internalSha256) => {
    const decoded = decodeBase58Address(address, sha256);
    if (typeof decoded === 'string')
        return decoded;
    return {
        bytecode: addressContentsToLockingBytecode({
            payload: decoded.payload,
            type: [
                Base58AddressFormatVersion.p2pkh,
                Base58AddressFormatVersion.p2pkhCopayBCH,
                Base58AddressFormatVersion.p2pkhTestnet,
            ].includes(decoded.version)
                ? LockingBytecodeType.p2pkh
                : LockingBytecodeType.p2sh20,
        }),
        version: decoded.version,
    };
};
//# sourceMappingURL=locking-bytecode.js.map