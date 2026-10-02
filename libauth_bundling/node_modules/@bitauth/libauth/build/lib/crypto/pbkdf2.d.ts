import type { HmacFunction } from './hmac.js';
export declare enum Pbkdf2Error {
    invalidIterations = "Invalid PBKDF2 parameters: iterations must be a positive integer.",
    invalidDerivedKeyLength = "Invalid PBKDF2 parameters: derived key length must be a positive integer.",
    invalidHmacLength = "Invalid HMAC length: HMAC length must be a positive integer."
}
/**
 * An object representing the parameters to use with PBKDF2 (Password-Based Key Derivation Function 2).
 */
export type Pbkdf2Parameters = {
    /** The length of the derived key in bytes. */
    derivedKeyLength: number;
    password: Uint8Array;
    iterations: number;
    salt: Uint8Array;
};
/**
 * Instantiate a PBKDF2 function as specified by RFC 2898.
 *
 * @param hmacFunction - the HMAC function to use
 * @param hmacByteLength - the byte-length of the HMAC function
 */
export declare const instantiatePbkdf2Function: (hmacFunction: HmacFunction, hmacByteLength: number) => (parameters: Pbkdf2Parameters) => string | Uint8Array;
/**
 * Derive a key using PBKDF2 and the HMAC SHA256 function as specified in RFC 2898.
 *
 * Note, if the provided `parameters` are valid, this method will never error.
 *
 * @param parameters - the PBKDF2 parameters to use
 * @param sha256Hmac - the SHA256 HMAC implementation to use (defaults to the
 * internal WASM implementation)
 */
export declare const pbkdf2HmacSha256: (parameters: Pbkdf2Parameters, sha256Hmac?: HmacFunction) => string | Uint8Array;
/**
 * Derive a key using PBKDF2 and the HMAC SHA512 function as specified in RFC 2898.
 *
 * Note, if the provided `parameters` are valid, this method will never error.
 *
 * @param parameters - the PBKDF2 parameters to use
 * @param sha512Hmac - the SHA512 HMAC implementation to use (defaults to the
 * internal WASM implementation)
 */
export declare const pbkdf2HmacSha512: (parameters: Pbkdf2Parameters, sha512Hmac?: HmacFunction) => string | Uint8Array;
//# sourceMappingURL=pbkdf2.d.ts.map