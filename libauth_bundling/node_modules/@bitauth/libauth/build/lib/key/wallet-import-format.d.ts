import type { Sha256 } from '../lib.js';
export declare enum WalletImportFormatError {
    incorrectLength = "The WIF private key payload is not the correct length."
}
/**
 * The network and address format in which a WIF-encoded private key is expected
 * to be used.
 *
 * WIF-encoding is generally used to encode private keys for Pay to Public
 * Key (P2PKH) addresses – each WIF-encoded private key specifies the
 * compression of the public key to use in the P2PKH address:
 *
 * - The values `mainnet` and `testnet` indicate that the address should use the
 * compressed form of the derived public key (33 bytes, beginning with `0x02` or
 * `0x03`) on the respective network.
 * - The less common `mainnet-uncompressed` and `testnet-uncompressed` values
 * indicate that the address should use the uncompressed form of the public key
 * (65 bytes beginning with `0x04`) on the specified network.
 */
export type WalletImportFormatType = 'mainnet' | 'mainnetUncompressed' | 'testnet' | 'testnetUncompressed';
/**
 * Encode a private key using Wallet Import Format (WIF).
 *
 * WIF encodes the 32-byte private key, a 4-byte checksum, and a `type`
 * indicating the intended usage for the private key. See
 * {@link WalletImportFormatType} for details.
 *
 * @remarks
 * WIF-encoding uses the Base58Address format with version
 * {@link Base58AddressFormatVersion.wif} (`128`/`0x80`) or
 * {@link Base58AddressFormatVersion.wifTestnet} (`239`/`0xef`), respectively.
 *
 * To indicate that the private key is intended for use in a P2PKH address using
 * the compressed form of its derived public key, a `0x01` is appended to the
 * payload prior to encoding. For the uncompressed construction, the extra byte
 * is omitted.
 *
 * For the reverse, see {@link decodePrivateKeyWif}.
 *
 * @param privateKey - a 32-byte Secp256k1 ECDSA private key
 * @param type - the intended usage of the private key (e.g. `mainnet` or
 * `testnet`)
 * @param sha256 - an implementation of sha256
 */
export declare const encodePrivateKeyWif: (privateKey: Uint8Array, type: WalletImportFormatType, sha256?: {
    hash: Sha256["hash"];
}) => string;
/**
 * Decode a private key using Wallet Import Format (WIF). See
 * {@link encodePrivateKeyWif} for details.
 *
 * For the reverse, use {@link encodePrivateKeyWif}.
 *
 * @param wifKey - the private key to decode (in Wallet Import Format)
 * @param sha256 - an implementation of sha256
 */
export declare const decodePrivateKeyWif: (wifKey: string, sha256?: {
    hash: Sha256["hash"];
}) => string | {
    privateKey: Uint8Array;
    type: WalletImportFormatType;
};
//# sourceMappingURL=wallet-import-format.d.ts.map