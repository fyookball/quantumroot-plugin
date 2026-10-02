import type { Ripemd160, Sha256 } from '../lib.js';
/**
 * Hash the given payload with sha256, then hash the 32-byte result with
 * ripemd160, returning a 20-byte hash.
 *
 * This hash is used in both {@link AddressType.p2pkh} and
 * {@link AddressType.p2sh20} addresses.
 *
 * @param payload - the Uint8Array to hash
 */
export declare const hash160: (payload: Uint8Array, crypto?: {
    ripemd160: {
        hash: Ripemd160["hash"];
    };
    sha256: {
        hash: Sha256["hash"];
    };
}) => Uint8Array;
/**
 * Hash the given payload with sha256, then hash the 32-byte result with
 * one final round of sha256, returning a 32-byte hash.
 *
 * This type of hash is used to generate identifiers for transactions and blocks
 * (and therefore in block mining).
 *
 * @param payload - the Uint8Array to hash
 */
export declare const hash256: (payload: Uint8Array, sha256?: {
    hash: Sha256["hash"];
}) => Uint8Array;
//# sourceMappingURL=combinations.d.ts.map