import type { Sha256 } from '../lib.js';
/**
 * Base58 version byte values for common Base58Address format
 * (A.K.A. "Base58Check") versions.
 */
export declare enum Base58AddressFormatVersion {
    /**
     * A Pay to Public Key Hash (P2PKH) address – base58 encodes to a leading `1`.
     *
     * Hex: `0x00`
     */
    p2pkh = 0,
    /**
     * A 20-byte Pay to Script Hash (P2SH20) address – base58 encodes to a leading
     * `3`.
     *
     * Hex: `0x05`
     */
    p2sh20 = 5,
    /**
     * A private key in Wallet Import Format. For private keys used with
     * uncompressed public keys, the payload is 32 bytes and causes the version
     * to be encoded as a `5`. For private keys used with compressed public keys,
     * a final `0x01` byte is appended to the private key, increasing the payload
     * to 33 bytes, and causing the version to be encoded as a `K` or `L`.
     *
     * Hex: `0x80`
     */
    wif = 128,
    /**
     * A testnet Pay to Public Key Hash (P2PKH) address – base58 encodes to a
     * leading `m` or `n`.
     *
     * Hex: `0x6f`
     */
    p2pkhTestnet = 111,
    /**
     * A testnet 20-byte Pay to Script Hash (P2SH20) address – base58 encodes to a
     * leading `2`.
     *
     * Hex: `0xc4`
     */
    p2sh20Testnet = 196,
    /**
     * A private key in Wallet Import Format intended for testnet use. For private
     * keys used with uncompressed public keys, the payload is 32 bytes and causes
     * the version to be encoded as a `9`. For private keys used with compressed
     * public keys, a final `0x01` byte is appended to the private key, increasing
     * the payload to 33 bytes, and causing the version to be encoded as a `c`.
     *
     * Hex: `0xef`
     */
    wifTestnet = 239,
    /**
     * A Pay to Public Key Hash (P2PKH) address intended for use on the Bitcoin
     * Cash network – base58 encodes to a leading `C`. This version was
     * temporarily used by the Copay project before the CashAddress format was
     * standardized.
     *
     * Hex: `0x1c`
     */
    p2pkhCopayBCH = 28,
    /**
     * A 20-byte Pay to Script Hash (P2SH20) address intended for use on the
     * Bitcoin Cash network – base58 encodes to a leading `H`. This version was
     * temporarily used by the Copay project before the CashAddress format was
     * standardized.
     *
     * Hex: `0x28`
     */
    p2sh20CopayBCH = 40
}
/**
 * The available networks for common Base58Address versions.
 */
export type Base58AddressNetwork = 'copayBCH' | 'mainnet' | 'testnet';
/**
 * Encode a payload using the Base58Address format (A.K.A. "Base58Check"), the
 * original address format used by the Satoshi implementation.
 *
 * Note, this method does not enforce error handling via the type system. The
 * returned string will not be a valid Base58Address if `hash` is not exactly 20
 * bytes. If needed, validate the length of `hash` before calling this method.
 *
 * To decode a Base58Address-like format, use {@link decodeBase58AddressFormat}.
 *
 * @remarks
 * A Base58Address includes a 1-byte prefix to indicate the address version, a
 * variable-length payload, and a 4-byte checksum:
 *
 * `[version: 1 byte] [payload: variable length] [checksum: 4 bytes]`
 *
 * The checksum is the first 4 bytes of the double-SHA256 hash of the version
 * byte followed by the payload.
 *
 * @param version - the address version byte (see
 * {@link Base58AddressFormatVersion})
 * @param payload - the Uint8Array payload to encode
 * @param sha256 - an implementation of sha256 (defaults to the internal WASM
 * implementation)
 */
export declare const encodeBase58AddressFormat: <VersionType extends number = Base58AddressFormatVersion>(version: VersionType, payload: Uint8Array, sha256?: {
    hash: Sha256["hash"];
}) => string;
/**
 * Encode a hash as a Base58Address.
 *
 * Note, this method does not enforce error handling via the type system. The
 * returned string will not be a valid Base58Address if `hash` is not exactly 20
 * bytes. If needed, validate the length of `hash` before calling this method.
 *
 * For other standards that use the Base58Address format but have other version
 * or length requirements, use {@link encodeCashAddressFormat}.
 *
 * To decode a Base58Address, see {@link decodeBase58Address}.
 *
 * @param type - the type of address to encode: `p2pkh`, `p2sh20`,
 * `p2pkh-testnet`, or `p2sh20-testnet`
 * @param hash - the 20-byte hash to encode
 * (`RIPEMD160(SHA256(public key or bytecode))`)
 * @param sha256 - an implementation of sha256 (defaults to the internal WASM
 * implementation)
 */
export declare const encodeBase58Address: (type: "p2pkh" | "p2pkhCopayBCH" | "p2pkhTestnet" | "p2sh20" | "p2sh20CopayBCH" | "p2sh20Testnet", payload: Uint8Array, sha256?: {
    hash: Sha256["hash"];
}) => string;
export declare enum Base58AddressError {
    unknownCharacter = "Base58Address error: address may only contain valid base58 characters.",
    tooShort = "Base58Address error: address is too short to be valid.",
    invalidChecksum = "Base58Address error: address has an invalid checksum.",
    unknownAddressVersion = "Base58Address error: address uses an unknown address version.",
    incorrectLength = "Base58Address error: the encoded payload is not the correct length (20 bytes)."
}
/**
 * Attempt to decode a Base58Address-formatted string. This is more lenient than
 * {@link decodeCashAddress}, which also validates the address version.
 *
 * Returns the contents of the address or an error message as a string.
 *
 * To encode a Base58Address-like format, use {@link encodeBase58AddressFormat}.
 *
 * @param address - the string to decode as a base58 address
 * @param sha256 - an implementation of sha256 (defaults to the internal WASM
 * implementation)
 */
export declare const decodeBase58AddressFormat: (address: string, sha256?: {
    hash: Sha256["hash"];
}) => string | {
    payload: Uint8Array;
    version: number;
};
/**
 * Decode and validate a Base58Address, strictly checking the version and
 * payload length.
 *
 * Because the Wallet Import Format (WIF) private key serialization format uses
 * the Base58Address format, some libraries allow WIF key decoding via the same
 * method as base58 address decoding. This method accepts only Base58Address
 * types, but WIF keys can be decoded with {@link decodePrivateKeyWif}.
 *
 * For other address-like standards that closely follow the Base58Address
 * format (but have alternative version byte requirements), use
 * {@link decodeBase58AddressFormat}.
 *
 * To encode a Base58Address, see {@link encodeBase58Address}.
 *
 * @param address - the string to decode as a base58 address
 * @param sha256 - an implementation of sha256 (defaults to the internal WASM
 * implementation)
 */
export declare const decodeBase58Address: (address: string, sha256?: {
    hash: Sha256["hash"];
}) => string | {
    payload: Uint8Array;
    version: number;
};
//# sourceMappingURL=base58-address.d.ts.map