import { CompressionFlag, ContextFlag, instantiateSecp256k1Wasm, instantiateSecp256k1WasmBytes, } from './dependencies.js';
/* eslint-enable @typescript-eslint/no-duplicate-enum-values */
export var Secp256k1Error;
(function (Secp256k1Error) {
    Secp256k1Error["unparsableSignature"] = "Failed to parse signature.";
    Secp256k1Error["unparsablePublicKey"] = "Failed to parse public key.";
    Secp256k1Error["derivePublicKeyFromInvalidPrivateKey"] = "Cannot derive public key from invalid private key.";
    Secp256k1Error["signWithInvalidPrivateKey"] = "Failed to sign message hash. The private key is not valid.";
    Secp256k1Error["recoverPublicKeyWithUnparsableSignature"] = "Failed to recover public key. Could not parse signature.";
    Secp256k1Error["recoverPublicKeyInvalidMaterial"] = "Failed to recover public key. The compact signature, recovery, or message hash is invalid.";
    Secp256k1Error["addTweakPrivateKey"] = "Private key is invalid or adding failed.";
    Secp256k1Error["mulTweakPrivateKey"] = "Private key is invalid or multiplying failed.";
    Secp256k1Error["addTweakPublicKey"] = "Failed to tweak public key (by addition).";
    Secp256k1Error["mulTweakPublicKey"] = "Failed to tweak public key (by multiplication).";
})(Secp256k1Error || (Secp256k1Error = {}));
/**
 * @param secp256k1Wasm - a Secp256k1Wasm object
 * @param randomSeed - a 32-byte random seed used to randomize the context after
 * creation
 */
const wrapSecp256k1Wasm = (secp256k1Wasm, randomSeed) => {
    /**
     * Currently, this wrapper creates a context with both SIGN and VERIFY
     * capabilities. For better initialization performance, consumers could
     * re-implement a wrapper with only the capabilities they require.
     */
    const contextPtr = secp256k1Wasm.contextCreate(ContextFlag.BOTH);
    /**
     * Since all of these methods are single-threaded and synchronous, we can
     * reuse allocated WebAssembly memory for each method without worrying about
     * calls interfering with each other. Likewise, these spaces never need to be
     * `free`d, since we will continue using them until this entire object (and
     * with it, the entire WebAssembly instance) is garbage collected.
     *
     * If malicious javascript gained access to this object, it should be
     * considered a critical vulnerability in the consumer. However, as a best
     * practice, we zero out private keys below when we're finished with them.
     */
    const sigScratch = secp256k1Wasm.malloc(72 /* ByteLength.maxECDSASig */);
    const publicKeyScratch = secp256k1Wasm.malloc(65 /* ByteLength.maxPublicKey */);
    const messageHashScratch = secp256k1Wasm.malloc(32 /* ByteLength.messageHash */);
    const internalPublicKeyPtr = secp256k1Wasm.malloc(64 /* ByteLength.internalPublicKey */);
    const internalSigPtr = secp256k1Wasm.malloc(64 /* ByteLength.internalSig */);
    const schnorrSigPtr = secp256k1Wasm.malloc(64 /* ByteLength.schnorrSig */);
    const privateKeyPtr = secp256k1Wasm.malloc(32 /* ByteLength.privateKey */);
    const internalRSigPtr = secp256k1Wasm.malloc(65 /* ByteLength.recoverableSig */);
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const recoveryNumPtr = secp256k1Wasm.malloc(4);
    // eslint-disable-next-line no-bitwise, @typescript-eslint/no-magic-numbers
    const recoveryNumPtrView32 = recoveryNumPtr >> 2;
    const getRecoveryNumPtr = () => secp256k1Wasm.heapU32[recoveryNumPtrView32];
    // eslint-disable-next-line @typescript-eslint/no-magic-numbers
    const lengthPtr = secp256k1Wasm.malloc(4);
    // eslint-disable-next-line no-bitwise, @typescript-eslint/no-magic-numbers
    const lengthPtrView32 = lengthPtr >> 2;
    const cloneAndPad = (value, expectedLength) => {
        const zeroPaddedValue = new Uint8Array(expectedLength);
        zeroPaddedValue.set(value);
        return zeroPaddedValue;
    };
    const parsePublicKey = (publicKey) => {
        const paddedPublicKey = cloneAndPad(publicKey, 65 /* ByteLength.maxPublicKey */);
        secp256k1Wasm.heapU8.set(paddedPublicKey, publicKeyScratch);
        return (secp256k1Wasm.pubkeyParse(contextPtr, internalPublicKeyPtr, publicKeyScratch, 
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        publicKey.length) === 1);
    };
    const setLengthPtr = (value) => {
        secp256k1Wasm.heapU32.set([value], lengthPtrView32);
    };
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const getLengthPtr = () => secp256k1Wasm.heapU32[lengthPtrView32];
    const serializePublicKey = (length, flag) => {
        setLengthPtr(length);
        secp256k1Wasm.pubkeySerialize(contextPtr, publicKeyScratch, lengthPtr, internalPublicKeyPtr, flag);
        return secp256k1Wasm.readHeapU8(publicKeyScratch, getLengthPtr()).slice();
    };
    const getSerializedPublicKey = (compressed) => compressed
        ? serializePublicKey(33 /* ByteLength.compressedPublicKey */, CompressionFlag.COMPRESSED)
        : serializePublicKey(65 /* ByteLength.uncompressedPublicKey */, CompressionFlag.UNCOMPRESSED);
    const convertPublicKey = (compressed) => (publicKey) => {
        if (!parsePublicKey(publicKey)) {
            return Secp256k1Error.unparsablePublicKey;
        }
        return getSerializedPublicKey(compressed);
    };
    const parseSignature = (signature, isDer) => {
        const paddedSignature = cloneAndPad(signature, 72 /* ByteLength.maxECDSASig */);
        secp256k1Wasm.heapU8.set(paddedSignature, sigScratch);
        return isDer
            ? secp256k1Wasm.signatureParseDER(contextPtr, internalSigPtr, sigScratch, signature.length) === 1
            : secp256k1Wasm.signatureParseCompact(contextPtr, internalSigPtr, sigScratch) === 1;
    };
    const getCompactSig = () => {
        secp256k1Wasm.signatureSerializeCompact(contextPtr, sigScratch, internalSigPtr);
        return secp256k1Wasm.readHeapU8(sigScratch, 64 /* ByteLength.compactSig */).slice();
    };
    const getDERSig = () => {
        setLengthPtr(72 /* ByteLength.maxECDSASig */);
        secp256k1Wasm.signatureSerializeDER(contextPtr, sigScratch, lengthPtr, internalSigPtr);
        return secp256k1Wasm.readHeapU8(sigScratch, getLengthPtr()).slice();
    };
    const convertSignature = (wasDER) => (signature) => {
        if (!parseSignature(signature, wasDER)) {
            return Secp256k1Error.unparsableSignature;
        }
        return wasDER ? getCompactSig() : getDERSig();
    };
    const fillPrivateKeyPtr = (privateKey) => {
        const paddedPrivateKey = cloneAndPad(privateKey, 32 /* ByteLength.privateKey */);
        secp256k1Wasm.heapU8.set(paddedPrivateKey, privateKeyPtr);
    };
    const zeroOutPtr = (pointer, bytes) => {
        secp256k1Wasm.heapU8.fill(0, pointer, pointer + bytes);
    };
    const zeroOutPrivateKeyPtr = () => {
        zeroOutPtr(privateKeyPtr, 32 /* ByteLength.privateKey */);
    };
    const withPrivateKey = (privateKey, instructions) => {
        fillPrivateKeyPtr(privateKey);
        const ret = instructions();
        zeroOutPrivateKeyPtr();
        return ret;
    };
    const derivePublicKey = (compressed) => (privateKey) => {
        const invalid = withPrivateKey(privateKey, () => secp256k1Wasm.pubkeyCreate(contextPtr, internalPublicKeyPtr, privateKeyPtr) !== 1);
        if (invalid) {
            return Secp256k1Error.derivePublicKeyFromInvalidPrivateKey;
        }
        return getSerializedPublicKey(compressed);
    };
    const fillMessageHashScratch = (messageHash) => {
        const paddedMessageHash = cloneAndPad(messageHash, 32 /* ByteLength.messageHash */);
        secp256k1Wasm.heapU8.set(paddedMessageHash, messageHashScratch);
    };
    const normalizeSignature = () => {
        secp256k1Wasm.signatureNormalize(contextPtr, internalSigPtr, internalSigPtr);
    };
    const modifySignature = (isDer, normalize) => (signature) => {
        if (!parseSignature(signature, isDer)) {
            return Secp256k1Error.unparsableSignature;
        }
        if (normalize) {
            normalizeSignature();
        }
        else {
            secp256k1Wasm.signatureMalleate(contextPtr, internalSigPtr, internalSigPtr);
        }
        return isDer ? getDERSig() : getCompactSig();
    };
    const parseAndNormalizeSignature = (signature, isDer, normalize) => {
        const ret = parseSignature(signature, isDer);
        if (normalize) {
            normalizeSignature();
        }
        return ret;
    };
    const signMessageHash = (isDer) => (privateKey, messageHash) => {
        fillMessageHashScratch(messageHash);
        return withPrivateKey(privateKey, () => {
            const failed = secp256k1Wasm.sign(contextPtr, internalSigPtr, messageHashScratch, privateKeyPtr) !== 1;
            if (failed) {
                return Secp256k1Error.signWithInvalidPrivateKey;
            }
            if (isDer) {
                setLengthPtr(72 /* ByteLength.maxECDSASig */);
                secp256k1Wasm.signatureSerializeDER(contextPtr, sigScratch, lengthPtr, internalSigPtr);
                return secp256k1Wasm.readHeapU8(sigScratch, getLengthPtr()).slice();
            }
            secp256k1Wasm.signatureSerializeCompact(contextPtr, sigScratch, internalSigPtr);
            return secp256k1Wasm
                .readHeapU8(sigScratch, 64 /* ByteLength.compactSig */)
                .slice();
        });
    };
    const signMessageHashSchnorr = () => (privateKey, messageHash) => {
        fillMessageHashScratch(messageHash);
        return withPrivateKey(privateKey, () => {
            const failed = secp256k1Wasm.schnorrSign(contextPtr, schnorrSigPtr, messageHashScratch, privateKeyPtr) !== 1;
            if (failed) {
                return Secp256k1Error.signWithInvalidPrivateKey;
            }
            return secp256k1Wasm
                .readHeapU8(schnorrSigPtr, 64 /* ByteLength.schnorrSig */)
                .slice();
        });
    };
    const verifyMessage = (messageHash) => {
        fillMessageHashScratch(messageHash);
        return (secp256k1Wasm.verify(contextPtr, internalSigPtr, messageHashScratch, internalPublicKeyPtr) === 1);
    };
    const verifySignature = (isDer, normalize) => (signature, publicKey, messageHash) => parsePublicKey(publicKey) &&
        parseAndNormalizeSignature(signature, isDer, normalize) &&
        verifyMessage(messageHash);
    const verifyMessageSchnorr = (messageHash, signature) => {
        fillMessageHashScratch(messageHash);
        const paddedSignature = cloneAndPad(signature, 64 /* ByteLength.schnorrSig */);
        secp256k1Wasm.heapU8.set(paddedSignature, schnorrSigPtr);
        return (secp256k1Wasm.schnorrVerify(contextPtr, schnorrSigPtr, messageHashScratch, internalPublicKeyPtr) === 1);
    };
    const verifySignatureSchnorr = () => (signature, publicKey, messageHash) => parsePublicKey(publicKey)
        ? verifyMessageSchnorr(messageHash, signature)
        : false;
    const signMessageHashRecoverable = (privateKey, messageHash) => {
        fillMessageHashScratch(messageHash);
        return withPrivateKey(privateKey, () => {
            if (secp256k1Wasm.signRecoverable(contextPtr, internalRSigPtr, messageHashScratch, privateKeyPtr) !== 1) {
                return Secp256k1Error.signWithInvalidPrivateKey;
            }
            secp256k1Wasm.recoverableSignatureSerialize(contextPtr, sigScratch, recoveryNumPtr, internalRSigPtr);
            return {
                recoveryId: getRecoveryNumPtr(),
                signature: secp256k1Wasm
                    .readHeapU8(sigScratch, 64 /* ByteLength.compactSig */)
                    .slice(),
            };
        });
    };
    const recoverPublicKey = (compressed) => (signature, recoveryId, messageHash) => {
        fillMessageHashScratch(messageHash);
        const paddedSignature = cloneAndPad(signature, 72 /* ByteLength.maxECDSASig */);
        secp256k1Wasm.heapU8.set(paddedSignature, sigScratch);
        if (secp256k1Wasm.recoverableSignatureParse(contextPtr, internalRSigPtr, sigScratch, recoveryId) !== 1) {
            return Secp256k1Error.recoverPublicKeyWithUnparsableSignature;
        }
        if (secp256k1Wasm.recover(contextPtr, internalPublicKeyPtr, internalRSigPtr, messageHashScratch) !== 1) {
            return Secp256k1Error.recoverPublicKeyInvalidMaterial;
        }
        return getSerializedPublicKey(compressed);
    };
    const addTweakPrivateKey = (privateKey, tweakValue) => {
        fillMessageHashScratch(tweakValue);
        return withPrivateKey(privateKey, () => {
            if (secp256k1Wasm.privkeyTweakAdd(contextPtr, privateKeyPtr, messageHashScratch) !== 1) {
                return Secp256k1Error.addTweakPrivateKey;
            }
            return secp256k1Wasm
                .readHeapU8(privateKeyPtr, 32 /* ByteLength.privateKey */)
                .slice();
        });
    };
    const mulTweakPrivateKey = (privateKey, tweakValue) => {
        fillMessageHashScratch(tweakValue);
        return withPrivateKey(privateKey, () => {
            if (secp256k1Wasm.privkeyTweakMul(contextPtr, privateKeyPtr, messageHashScratch) !== 1) {
                return Secp256k1Error.mulTweakPrivateKey;
            }
            return secp256k1Wasm
                .readHeapU8(privateKeyPtr, 32 /* ByteLength.privateKey */)
                .slice();
        });
    };
    const addTweakPublicKey = (compressed) => (publicKey, tweakValue) => {
        if (!parsePublicKey(publicKey)) {
            return Secp256k1Error.unparsablePublicKey;
        }
        fillMessageHashScratch(tweakValue);
        if (secp256k1Wasm.pubkeyTweakAdd(contextPtr, internalPublicKeyPtr, messageHashScratch) !== 1) {
            return Secp256k1Error.addTweakPublicKey;
        }
        return getSerializedPublicKey(compressed);
    };
    const mulTweakPublicKey = (compressed) => (publicKey, tweakValue) => {
        if (!parsePublicKey(publicKey)) {
            return Secp256k1Error.unparsablePublicKey;
        }
        fillMessageHashScratch(tweakValue);
        if (secp256k1Wasm.pubkeyTweakMul(contextPtr, internalPublicKeyPtr, messageHashScratch) !== 1) {
            return Secp256k1Error.mulTweakPublicKey;
        }
        return getSerializedPublicKey(compressed);
    };
    if (randomSeed !== undefined) {
        const randomSeedPtr = messageHashScratch;
        const paddedRandomSeed = cloneAndPad(randomSeed, 32 /* ByteLength.randomSeed */);
        secp256k1Wasm.heapU8.set(paddedRandomSeed, randomSeedPtr);
        secp256k1Wasm.contextRandomize(contextPtr, randomSeedPtr);
        zeroOutPtr(randomSeedPtr, 32 /* ByteLength.randomSeed */);
    }
    return {
        addTweakPrivateKey,
        addTweakPublicKeyCompressed: addTweakPublicKey(true),
        addTweakPublicKeyUncompressed: addTweakPublicKey(false),
        compressPublicKey: convertPublicKey(true),
        derivePublicKeyCompressed: derivePublicKey(true),
        derivePublicKeyUncompressed: derivePublicKey(false),
        malleateSignatureCompact: modifySignature(false, false),
        malleateSignatureDER: modifySignature(true, false),
        mulTweakPrivateKey,
        mulTweakPublicKeyCompressed: mulTweakPublicKey(true),
        mulTweakPublicKeyUncompressed: mulTweakPublicKey(false),
        normalizeSignatureCompact: modifySignature(false, true),
        normalizeSignatureDER: modifySignature(true, true),
        recoverPublicKeyCompressed: recoverPublicKey(true),
        recoverPublicKeyUncompressed: recoverPublicKey(false),
        signMessageHashCompact: signMessageHash(false),
        signMessageHashDER: signMessageHash(true),
        signMessageHashRecoverableCompact: signMessageHashRecoverable,
        signMessageHashSchnorr: signMessageHashSchnorr(),
        signatureCompactToDER: convertSignature(false),
        signatureDERToCompact: convertSignature(true),
        uncompressPublicKey: convertPublicKey(false),
        validatePrivateKey: (privateKey) => withPrivateKey(privateKey, () => secp256k1Wasm.seckeyVerify(contextPtr, privateKeyPtr) === 1),
        validatePublicKey: parsePublicKey,
        verifySignatureCompact: verifySignature(false, true),
        verifySignatureCompactLowS: verifySignature(false, false),
        verifySignatureDER: verifySignature(true, true),
        verifySignatureDERLowS: verifySignature(true, false),
        verifySignatureSchnorr: verifySignatureSchnorr(),
    };
};
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
export const instantiateSecp256k1Bytes = async (webassemblyBytes, randomSeed) => wrapSecp256k1Wasm(await instantiateSecp256k1WasmBytes(webassemblyBytes), randomSeed);
/**
 * Create and wrap a Secp256k1 WebAssembly instance to expose a set of
 * purely-functional Secp256k1 methods. For slightly faster initialization, use
 * {@link instantiateSecp256k1Bytes}.
 *
 * @param randomSeed - a 32-byte random seed used to randomize the secp256k1
 * context after creation. See the description in
 * {@link instantiateSecp256k1Bytes} for details.
 */
export const instantiateSecp256k1 = async (randomSeed) => wrapSecp256k1Wasm(await instantiateSecp256k1Wasm(), randomSeed);
//# sourceMappingURL=secp256k1.js.map