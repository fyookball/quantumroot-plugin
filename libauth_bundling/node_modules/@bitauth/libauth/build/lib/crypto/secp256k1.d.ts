import type { Secp256k1 } from '../lib.js';
export declare enum Secp256k1Error {
    unparsableSignature = "Failed to parse signature.",
    unparsablePublicKey = "Failed to parse public key.",
    derivePublicKeyFromInvalidPrivateKey = "Cannot derive public key from invalid private key.",
    signWithInvalidPrivateKey = "Failed to sign message hash. The private key is not valid.",
    recoverPublicKeyWithUnparsableSignature = "Failed to recover public key. Could not parse signature.",
    recoverPublicKeyInvalidMaterial = "Failed to recover public key. The compact signature, recovery, or message hash is invalid.",
    addTweakPrivateKey = "Private key is invalid or adding failed.",
    mulTweakPrivateKey = "Private key is invalid or multiplying failed.",
    addTweakPublicKey = "Failed to tweak public key (by addition).",
    mulTweakPublicKey = "Failed to tweak public key (by multiplication)."
}
/**
 * This method is like {@link instantiateSecp256k1}, but requires the consumer
 * to `Window.fetch` or `fs.readFile` the `secp256k1.wasm` binary and provide it
 * to this method as `webassemblyBytes`. This skips a base64 decoding of an
 * embedded binary.
 *
 * ### Randomizing the Context with `randomSeed`
 * This method also accepts an optional, 32-byte `randomSeed`, which is passed
 * to the `contextRandomize` method in the underlying WebAssembly.
 *
 * In the secp256k1 C library, context randomization is an additional layer of
 * security from side-channel attacks that attempt to extract private key
 * information by analyzing things like a CPU's emitted radio frequencies or
 * power usage.
 *
 * As most applications also benefit from deterministic, reproducible behavior,
 * context is not randomized by default in Libauth. To randomize the context,
 * provide a 32-byte Uint8Array of cryptographically strong random values
 * (e.g. `crypto.getRandomValues(new Uint8Array(32))`).
 *
 * @param webassemblyBytes - an ArrayBuffer containing the bytes from Libauth's
 * `secp256k1.wasm` binary. Providing this buffer manually may be faster than
 * the internal base64 decode that happens in {@link instantiateSecp256k1}.
 * @param randomSeed - a 32-byte random seed used to randomize the secp256k1
 * context after creation. See above for details.
 */
export declare const instantiateSecp256k1Bytes: (webassemblyBytes: ArrayBuffer, randomSeed?: Uint8Array) => Promise<Secp256k1>;
/**
 * Create and wrap a Secp256k1 WebAssembly instance to expose a set of
 * purely-functional Secp256k1 methods. For slightly faster initialization, use
 * {@link instantiateSecp256k1Bytes}.
 *
 * @param randomSeed - a 32-byte random seed used to randomize the secp256k1
 * context after creation. See the description in
 * {@link instantiateSecp256k1Bytes} for details.
 */
export declare const instantiateSecp256k1: (randomSeed?: Uint8Array) => Promise<Secp256k1>;
//# sourceMappingURL=secp256k1.d.ts.map