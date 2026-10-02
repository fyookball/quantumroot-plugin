import type { Sha256, Sha512 } from '../lib.js';
export type HmacFunction = (secret: Uint8Array, message: Uint8Array) => Uint8Array;
/**
 * Instantiate a hash-based message authentication code (HMAC) function as
 * specified by RFC 2104.
 *
 * @param hashFunction - a cryptographic hash function that iterates a basic
 * compression function over blocks of data
 * @param blockByteLength - the byte-length of blocks used in `hashFunction`
 */
export declare const instantiateHmacFunction: (hashFunction: (input: Uint8Array) => Uint8Array, blockByteLength: number) => HmacFunction;
/**
 * Create a hash-based message authentication code using HMAC-SHA256 as
 * specified in `RFC 4231`. Returns a 32-byte Uint8Array.
 *
 * Secrets longer than the block byte-length (64 bytes) are hashed before
 * use, shortening their length to the minimum recommended length (32 bytes).
 * See `RFC 2104` for details.
 *
 * @param secret - the secret key (recommended length: 32-64 bytes)
 * @param message - the message to authenticate
 * @param sha256 - an implementation of Sha256 (defaults to the
 * internal WASM implementation)
 */
export declare const hmacSha256: (secret: Uint8Array, message: Uint8Array, sha256?: {
    hash: Sha256["hash"];
}) => Uint8Array;
/**
 * Create a hash-based message authentication code using HMAC-SHA512 as
 * specified in `RFC 4231`. Returns a 64-byte Uint8Array.
 *
 * Secrets longer than the block byte-length (128 bytes) are hashed before
 * use, shortening their length to the minimum recommended length (64 bytes).
 * See `RFC 2104` for details.
 *
 * @param secret - the secret key (recommended length: 64-128 bytes)
 * @param message - the message to authenticate
 * @param sha512 - an implementation of Sha512 (defaults to the
 * internal WASM implementation)
 */
export declare const hmacSha512: (secret: Uint8Array, message: Uint8Array, sha512?: {
    hash: Sha512["hash"];
}) => Uint8Array;
//# sourceMappingURL=hmac.d.ts.map