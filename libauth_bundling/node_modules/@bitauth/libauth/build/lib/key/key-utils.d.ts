import type { Sha256 } from '../lib.js';
declare const enum KeyUtilConstants {
    privateKeyLength = 32,
    privateKeyRequiredEntropyBits = 128,
    utf8NumbersOffset = 48
}
export declare enum EntropyGenerationError {
    duplicateResults = "Entropy generation error: the \"getRandomValues\" function provided by this JavaScript environment returned duplicate results across two evaluations; entropy generation was halted for safety.",
    insufficientEntropy = "Entropy generation error: the provided list of events contains insufficient entropy."
}
/**
 * Generate a Uint8Array of the specified length containing a
 * cryptographically-random series of bytes. See {@link generateRandomBytes} for
 * a safer alternative.
 *
 * @param length - the length of the Uint8Array to generate
 * @param cryptoInstance - an instance of the `Crypto` object with the
 * `getRandomValues` function (defaults to the `crypto` global property).
 */
export declare const generateRandomBytesUnchecked: (length: number, cryptoInstance?: {
    getRandomValues: (typeof crypto)["getRandomValues"];
}) => Uint8Array;
/**
 * Generate a Uint8Array of the specified length containing a
 * cryptographically-random series of bytes.
 *
 * For safety, this function first verifies that the provided `generate`
 * function produces unique results across two evaluations; by default, this
 * verifies that the `crypto.getRandomValues` function provided by the
 * JavaScript environment appears to be producing random values.
 *
 * While this validation can't prevent a compromised environment from producing
 * attacker-known entropy, it may help to prevent software defects in unusual
 * environments (e.g. React Native) from impacting end-user security.
 *
 * An `Error` is thrown if this validation fails, otherwise, the `Uint8Array`
 * produced by the first evaluation is returned.
 *
 * @param length - the length of the Uint8Array to generate
 * @param generate - a function used to generate the random bytes, defaults
 * to {@link generateRandomBytesUnchecked}.
 */
export declare const generateRandomBytes: (length: number, generate?: (length: number, cryptoInstance?: {
    getRandomValues: (typeof crypto)["getRandomValues"];
}) => Uint8Array) => Uint8Array;
/**
 * Securely generate a 32-byte, cryptographically random seed (Uint8Array) for
 * use in Hierarchical Deterministic (HD) Key derivation
 * (see {@link deriveHdPrivateNodeFromSeed}).
 *
 * To generate a single Secp256k1 private key, use {@link generatePrivateKey}.
 */
export declare const generateRandomSeed: () => Uint8Array;
/**
 * Securely generate a valid Secp256k1 private key.
 *
 * By default, this function uses `crypto.getRandomValues` to produce
 * sufficiently-random key material, but another source of randomness may also
 * be provided.
 *
 * To generate an HD Key, use {@link generateHdPrivateKey}.
 *
 * @param secureRandom - a method that returns a securely-random 32-byte
 * Uint8Array
 */
export declare const generatePrivateKey: (secureRandom?: () => Uint8Array) => Uint8Array;
/**
 * Securely generate a valid {@link HdPrivateNode}, returning both the source
 * seed and the {@link HdPrivateNodeValid}.
 *
 * By default, this function uses `crypto.getRandomValues` to produce
 * sufficiently-random key material, but another source of randomness may also
 * be provided.
 *
 * To generate a single Secp256k1 private key, use {@link generatePrivateKey}.
 */
export declare const generateHdPrivateNode: (secureRandom?: () => Uint8Array) => {
    hdPrivateNode: import("./hd-key.js").HdPrivateNodeValid;
    seed: Uint8Array;
};
/**
 * Given the number of equally-likely results per event, return the Shannon
 * entropy of the event in bits.
 *
 * @param possibleResults - the number of equally-likely results per event;
 * e.g. for a coin, `2`, for dice, the number of faces (for a standard die, `6`)
 */
export declare const shannonEntropyPerEvent: (possibleResults: number) => number;
/**
 * Given the number of equally-likely results per event, return the number of
 * events required to achieve the required bits of Shannon entropy.
 * entropy of the event in bits.
 *
 * For example, to compute the number of standard, 6-sided dice rolls required
 * to generate a private key (with the recommended 128-bit entropy minimum),
 * `minimumEventsPerEntropyBits(6)`.
 *
 * @param possibleResults - the number of equally-likely results per event;
 * e.g. for a coin, `2`, for dice, the number of faces (for a standard die, `6`)
 * @param requiredEntropyBits - the number of bits of entropy required. Defaults
 * to `128`, the recommended value for all private key generation.
 */
export declare const minimumEventsPerEntropyBits: (possibleResults: number, requiredEntropyBits?: KeyUtilConstants) => number;
/**
 * Generate deterministic entropy by seeding SHA-256 with a list of random
 * events like coin flips or dice rolls. For coin flips, use `0` ("heads") and
 * `1` ("tails"); for dice, use the visible number.
 *
 * **Warning: this function's validation assumes that the provided events
 * are truly random ("unbiased").** If the events are biased, e.g. by a weighted
 * dice or a human attempting to type random numbers, the entropy of this
 * function's result will be degraded. Using insufficiently random results will
 * compromise the security of systems relying on the result, making it possible
 * for an attacker to, e.g. guess secret keys and steal funds.
 *
 * This method of entropy generation is designed to be easily auditable: the
 * list of results are simply concatenated (without any spaces or separating
 * characters), and the UTF8 encoding of the resulting string of digits is
 * hashed with SHA-256.
 *
 * For example, if a 20-sided dice (D20) is rolled 3 times with results 13, 4,
 * and 10, the UTF8 encoding of `13410` (`0x3133343130`) is hashed with SHA-256,
 * producing a result of
 * `6dd4f2758287be9f38e0e93c71146c76e90f83f0b8c9b49760fc0b594494607b`. This can
 * be verified in most command line environments with the command:
 * `echo -n 13410 | sha256sum`.
 *
 * Note that this function is compatible with Coldcard's deterministic key
 * generation workflow when used with six-sided dice (D6).
 *
 * @param possibleResults - the number of equally-likely results per event;
 * e.g. for a coin, `2`, for dice, the number of faces (for a standard die, `6`)
 * @param events - an array of numbers encoding the random events; for coin
 * flips, use `0` ("heads") and `1` ("tails"); for dice, use the exposed number
 * (e.g. `1` through `6` for 6-sided dice)
 * @param requiredEntropyBits - the number of bits of entropy required. Defaults
 * to `128`, the recommended value for all private key generation.
 * @param crypto - an optional object containing an implementation of sha256
 * to use
 */
export declare const generateDeterministicEntropy: (possibleResults: number, events: number[], { crypto, requiredEntropyBits, }?: {
    crypto?: {
        sha256: {
            hash: Sha256["hash"];
        };
    };
    requiredEntropyBits?: number;
}) => string | Uint8Array;
export {};
//# sourceMappingURL=key-utils.d.ts.map