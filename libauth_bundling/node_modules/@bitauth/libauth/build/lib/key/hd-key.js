/* eslint-disable max-lines */
import { hmacSha512, ripemd160 as internalRipemd160, secp256k1 as internalSecp256k1, sha256 as internalSha256, sha512 as internalSha512, } from '../crypto/crypto.js';
import { base58ToBin, bigIntToBinUint256BEClamped, binsAreEqual, binToBase58, binToBigIntUint256BE, binToHex, flattenBinArray, formatError, numberToBinUint32BE, utf8ToBin, } from '../format/format.js';
/**
 * Verify that a private key is valid for the Secp256k1 curve. Returns `true`
 * for success, or `false` on failure.
 *
 * Private keys are 256-bit numbers encoded as a 32-byte, big-endian Uint8Array.
 * Nearly every 256-bit number is a valid secp256k1 private key. Specifically,
 * any 256-bit number greater than `0x01` and less than
 * `0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141`
 * is a valid private key. This range is part of the definition of the
 * secp256k1 elliptic curve parameters.
 *
 * This method does not require a `Secp256k1` implementation.
 *
 * @param privateKey - The private key to validate.
 */
export const validateSecp256k1PrivateKey = (privateKey) => {
    if (privateKey.length !== 32 /* Secp256k1Constants.privateKeyLength */ ||
        privateKey.every((value) => value === 0)) {
        return false;
    }
    /**
     * The largest possible Secp256k1 private key – equal to the order of the
     * Secp256k1 curve minus one.
     */
    // prettier-ignore
    const maximumSecp256k1PrivateKey = [255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 254, 186, 174, 220, 230, 175, 72, 160, 59, 191, 210, 94, 140, 208, 54, 65, 64]; // eslint-disable-line @typescript-eslint/no-magic-numbers
    const firstDifference = privateKey.findIndex((value, i) => value !== maximumSecp256k1PrivateKey[i]);
    if (firstDifference === -1 ||
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        privateKey[firstDifference] < maximumSecp256k1PrivateKey[firstDifference]) {
        return true;
    }
    return false;
};
/**
 * An error in the derivation of child HD public or private nodes.
 */
export var HdNodeDerivationError;
(function (HdNodeDerivationError) {
    HdNodeDerivationError["childIndexExceedsMaximum"] = "HD node derivation error: child index exceeds maximum (4294967295).";
    HdNodeDerivationError["requiresZeroDepthNode"] = "HD node derivation error: absolute derivation requires an HD node with a depth of 0.";
    HdNodeDerivationError["hardenedDerivationRequiresPrivateNode"] = "HD node derivation error: derivation for hardened child indexes (indexes greater than or equal to 2147483648) requires an HD private node.";
    HdNodeDerivationError["invalidAbsoluteDerivationPath"] = "HD node derivation error: invalid absolute derivation path; path must begin with \"m\" or \"M\" and contain only positive child index numbers, separated by forward slashes (\"/\"), with zero or one apostrophe (\"'\") after each child index number.";
    HdNodeDerivationError["invalidRelativeDerivationPath"] = "HD node derivation error: invalid relative derivation path; path must contain only positive child index numbers, separated by forward slashes (\"/\"), with zero or one apostrophe (\"'\") after each child index number.";
    HdNodeDerivationError["invalidDerivedKey"] = "HD node derivation error: an astronomically rare HMAC-SHA512 result produced an invalid Secp256k1 key.";
    HdNodeDerivationError["invalidPrivateDerivationPrefix"] = "HD node derivation error: private derivation paths must begin with \"m\".";
    HdNodeDerivationError["invalidPublicDerivationPrefix"] = "HD node derivation error: public derivation paths must begin with \"M\".";
})(HdNodeDerivationError || (HdNodeDerivationError = {}));
/**
 * An error in the decoding of an HD public or private key.
 */
export var HdKeyDecodingError;
(function (HdKeyDecodingError) {
    HdKeyDecodingError["incorrectLength"] = "HD key decoding error: length is incorrect (must encode 82 bytes).";
    HdKeyDecodingError["invalidChecksum"] = "HD key decoding error: checksum is invalid.";
    HdKeyDecodingError["invalidPublicKey"] = "HD key decoding error: the public key for this HD public node is not a valid Secp256k1 public key.";
    HdKeyDecodingError["invalidPrivateKey"] = "HD key decoding error: the key for this HD private node is not a valid Secp256k1 private key.";
    HdKeyDecodingError["missingPrivateKeyPaddingByte"] = "HD key decoding error: version indicates a private key, but the key data is missing a padding byte.";
    HdKeyDecodingError["privateKeyExpected"] = "HD key decoding error: expected an HD private key, but encountered an HD public key.";
    HdKeyDecodingError["publicKeyExpected"] = "HD key decoding error: expected an HD public key, but encountered an HD private key.";
    HdKeyDecodingError["unknownCharacter"] = "HD key decoding error: key includes a non-base58 character.";
    HdKeyDecodingError["unknownVersion"] = "HD key decoding error: key uses an unknown version.";
    HdKeyDecodingError["zeroDepthWithNonZeroChildIndex"] = "HD key decoding error: key encodes a depth of zero with a non-zero child index.";
    HdKeyDecodingError["zeroDepthWithNonZeroParentFingerprint"] = "HD key decoding error: key encodes a depth of zero with a non-zero parent fingerprint.";
})(HdKeyDecodingError || (HdKeyDecodingError = {}));
/**
 * An error in the encoding of an HD public or private key.
 */
export var HdKeyEncodingError;
(function (HdKeyEncodingError) {
    HdKeyEncodingError["invalidChainCodeLength"] = "HD key encoding error: invalid chain code length. Chain code must be 32 bytes.";
    HdKeyEncodingError["invalidChildDepth"] = "HD key encoding error: invalid child depth. Child depth must be between 0 and 255 (inclusive).";
    HdKeyEncodingError["invalidChildIndex"] = "HD key encoding error: invalid child index. Child index must be between 0 and 4294967295 (inclusive).";
    HdKeyEncodingError["invalidParentFingerprintLength"] = "HD key encoding error: invalid parent fingerprint length. Parent fingerprint must be 4 bytes.";
    HdKeyEncodingError["invalidPrivateKeyLength"] = "HD key encoding error: invalid private key length. Secp256k1 private keys must be 32 bytes.";
    HdKeyEncodingError["invalidPublicKeyLength"] = "HD key encoding error: invalid public key length. Public key must be 33 bytes (compressed).";
    HdKeyEncodingError["invalidPublicKey"] = "HD key encoding error: the public key for this HD public node is not a valid Secp256k1 public key.";
    HdKeyEncodingError["zeroDepthWithNonZeroChildIndex"] = "HD key encoding error: attempted to encode a zero depth key with a non-zero child index.";
    HdKeyEncodingError["zeroDepthWithNonZeroParentFingerprint"] = "HD key encoding error: attempted to encode a zero depth key with a non-zero parent fingerprint.";
})(HdKeyEncodingError || (HdKeyEncodingError = {}));
const emptyParentFingerprint = Uint8Array.from([0, 0, 0, 0]);
/**
 * The HMAC SHA-512 key used by BIP32, "Bitcoin seed"
 * (`utf8ToBin('Bitcoin seed')`)
 */
export const bip32HmacSha512Key = utf8ToBin('Bitcoin seed');
/**
 * Derive an {@link HdPrivateNode} from the provided seed following the BIP32
 * specification. A seed should include between 16 bytes and 64 bytes of
 * entropy (recommended: 32 bytes).
 *
 * @param seed - the entropy from which to derive the {@link HdPrivateNode}
 */
export const deriveHdPrivateNodeFromSeed = (seed, { assumeValidity, crypto = { sha512: internalSha512 }, hmacSha512Key = bip32HmacSha512Key, throwErrors = true, } = {}) => {
    const mac = hmacSha512(hmacSha512Key, seed, crypto.sha512);
    const privateKey = mac.slice(0, 32 /* Bip32Constants.halfHmacSha512Length */);
    const chainCode = mac.slice(32 /* Bip32Constants.halfHmacSha512Length */);
    const depth = 0;
    const childIndex = 0;
    const parentFingerprint = emptyParentFingerprint.slice();
    const valid = assumeValidity ?? validateSecp256k1PrivateKey(privateKey);
    if (throwErrors && !valid)
        // eslint-disable-next-line functional/no-throw-statements
        throw new Error(HdNodeDerivationError.invalidDerivedKey);
    return (valid
        ? { chainCode, childIndex, depth, parentFingerprint, privateKey }
        : {
            chainCode,
            childIndex,
            depth,
            invalidMaterial: privateKey,
            parentFingerprint,
        });
};
/**
 * Derive the public identifier for a given {@link HdPrivateNode}. This is used
 * to uniquely identify HD nodes in software. The first 4 bytes of this
 * identifier are considered its "fingerprint".
 *
 * @param hdPrivateNode - The {@link HdPrivateNode} from which to derive the
 * public identifier.
 */
export const deriveHdPrivateNodeIdentifier = (hdPrivateNode, { crypto = {
    ripemd160: internalRipemd160,
    secp256k1: internalSecp256k1,
    sha256: internalSha256,
}, } = {}) => {
    const publicKey = crypto.secp256k1.derivePublicKeyCompressed(hdPrivateNode.privateKey);
    if (typeof publicKey === 'string')
        return publicKey;
    return crypto.ripemd160.hash(crypto.sha256.hash(publicKey));
};
/**
 * Derive the public identifier for a given {@link HdPublicNodeValid}. This is
 * used to uniquely identify HD nodes in software. The first 4 bytes of this
 * identifier are considered its fingerprint.
 *
 * @param node - The {@link HdPublicNodeValid} from which to derive the
 * public identifier.
 */
export const deriveHdPublicNodeIdentifier = (node, { crypto = { ripemd160: internalRipemd160, sha256: internalSha256 }, } = {}) => crypto.ripemd160.hash(crypto.sha256.hash(node.publicKey));
/**
 * The 4-byte version indicating the network and type of an {@link HdPrivateKey}
 * or {@link HdPublicKey}.
 */
export var HdKeyVersion;
(function (HdKeyVersion) {
    /**
     * Version indicating the HD key is an {@link HdPrivateKey} intended for use
     * on the main network. Base58 encoding at the expected length of an HD key
     * results in a prefix of `xprv`.
     *
     * Hex: `0x0488ade4`
     */
    HdKeyVersion[HdKeyVersion["mainnetPrivateKey"] = 76066276] = "mainnetPrivateKey";
    /**
     * Version indicating the HD key is an {@link HdPrivateKey} intended for use
     * on the main network. Base58 encoding at the expected length of an HD key
     * results in a prefix of `xpub`.
     *
     * Hex: `0x0488b21e`
     */
    HdKeyVersion[HdKeyVersion["mainnetPublicKey"] = 76067358] = "mainnetPublicKey";
    /**
     * Version indicating the HD key is an {@link HdPrivateKey} intended for use
     * on the test network. Base58 encoding at the expected length of an HD key
     * results in a prefix of `tprv`.
     *
     * Hex: `0x04358394`
     */
    HdKeyVersion[HdKeyVersion["testnetPrivateKey"] = 70615956] = "testnetPrivateKey";
    /**
     * Version indicating the HD key is an {@link HdPrivateKey} intended for use
     * on the test network. Base58 encoding at the expected length of an HD key
     * results in a prefix of `tpub`.
     *
     * Hex: `0x043587cf`
     */
    HdKeyVersion[HdKeyVersion["testnetPublicKey"] = 70617039] = "testnetPublicKey";
})(HdKeyVersion || (HdKeyVersion = {}));
export const hdKeyVersionIsPublicKey = (version) => version === HdKeyVersion.mainnetPublicKey ||
    version === HdKeyVersion.testnetPublicKey;
export const hdKeyVersionIsPrivateKey = (version) => version === HdKeyVersion.mainnetPrivateKey ||
    version === HdKeyVersion.testnetPrivateKey;
/**
 * Decode a string following the HD key format as defined by BIP32, returning a
 * `node` and a `version`. Decoding errors are returned as strings.
 *
 * This is a less strict variant of {@link decodeHdKey}; most applications
 * should instead use {@link decodeHdKey}, or if the type of the key is known,
 * either {@link decodeHdPrivateKey} or {@link decodeHdPublicKey}.
 *
 * @param hdKey - A BIP32 HD private key or HD public key.
 */
// eslint-disable-next-line complexity
export const decodeHdKeyUnchecked = (hdKey, { crypto = { secp256k1: internalSecp256k1, sha256: internalSha256 }, } = {}) => {
    const decoded = base58ToBin(hdKey);
    if (typeof decoded === 'string')
        return formatError(HdKeyDecodingError.unknownCharacter, decoded);
    if (decoded.length !== 82 /* Bip32Constants.hdKeyLength */)
        return formatError(HdKeyDecodingError.incorrectLength, `Length: ${decoded.length}.`);
    const payload = decoded.slice(0, 78 /* Bip32Constants.hdKeyChecksumIndex */);
    const checksumBits = decoded.slice(78 /* Bip32Constants.hdKeyChecksumIndex */);
    const checksum = crypto.sha256.hash(crypto.sha256.hash(payload));
    if (!checksumBits.every((value, i) => value === checksum[i])) {
        return formatError(HdKeyDecodingError.invalidChecksum, `Encoded: ${binToHex(checksumBits)}; computed: ${binToHex(checksum.slice(0, 4 /* Bip32Constants.hdKeyChecksumLength */))}.`);
    }
    const depthIndex = 4;
    const fingerprintIndex = 5;
    const childIndexIndex = 9;
    const chainCodeIndex = 13;
    const keyDataIndex = 45;
    const view = new DataView(decoded.buffer, decoded.byteOffset, decoded.byteLength);
    const version = view.getUint32(0, false);
    const depth = view.getUint8(depthIndex);
    const parentFingerprint = decoded.slice(fingerprintIndex, childIndexIndex);
    const childIndex = view.getUint32(childIndexIndex, false);
    const chainCode = decoded.slice(chainCodeIndex, keyDataIndex);
    const keyData = decoded.slice(keyDataIndex, 78 /* Bip32Constants.hdKeyChecksumIndex */);
    const isPrivateKey = hdKeyVersionIsPrivateKey(version);
    if (isPrivateKey && keyData[0] !== 0x00) {
        return HdKeyDecodingError.missingPrivateKeyPaddingByte;
    }
    if (isPrivateKey) {
        const privateKey = keyData.slice(1);
        const valid = validateSecp256k1PrivateKey(privateKey);
        return {
            node: valid
                ? {
                    chainCode,
                    childIndex,
                    depth,
                    parentFingerprint,
                    privateKey,
                }
                : {
                    chainCode,
                    childIndex,
                    depth,
                    invalidMaterial: privateKey,
                    parentFingerprint,
                },
            version,
        };
    }
    const isPublicKey = hdKeyVersionIsPublicKey(version);
    if (!isPublicKey) {
        return formatError(HdKeyDecodingError.unknownVersion, `Version: ${version}`);
    }
    const publicKey = keyData;
    const valid = crypto.secp256k1.validatePublicKey(publicKey);
    return {
        node: valid
            ? {
                chainCode,
                childIndex,
                depth,
                parentFingerprint,
                publicKey,
            }
            : {
                chainCode,
                childIndex,
                depth,
                invalidMaterial: publicKey,
                parentFingerprint,
            },
        version,
    };
};
/**
 * Decode an HD key as defined by BIP32, returning a `node` and a `network`.
 * Decoding errors are returned as strings.
 *
 * If the type of the key is known, use {@link decodeHdPrivateKey} or
 * {@link decodeHdPublicKey}. For a variant with less strict validation,
 * use {@link decodeHdKeyUnchecked}.
 *
 * @param hdKey - A BIP32 HD private key or HD public key.
 */
// eslint-disable-next-line complexity
export const decodeHdKey = (hdKey, { crypto = { secp256k1: internalSecp256k1, sha256: internalSha256 }, } = {}) => {
    const decoded = decodeHdKeyUnchecked(hdKey, { crypto });
    if (typeof decoded === 'string')
        return decoded;
    const { node, version } = decoded;
    if (node.depth === 0) {
        if (node.childIndex !== 0) {
            return formatError(HdKeyDecodingError.zeroDepthWithNonZeroChildIndex, `Child index: ${node.childIndex}.`);
        }
        if (!binsAreEqual(node.parentFingerprint, emptyParentFingerprint)) {
            return formatError(HdKeyDecodingError.zeroDepthWithNonZeroParentFingerprint, `Parent fingerprint: ${node.parentFingerprint.join(',')}.`);
        }
    }
    const isPublicKey = hdKeyVersionIsPublicKey(version);
    if ('invalidMaterial' in node) {
        return isPublicKey
            ? formatError(HdKeyDecodingError.invalidPublicKey, `Invalid public key: ${binToHex(node.invalidMaterial)}.`)
            : formatError(HdKeyDecodingError.invalidPrivateKey);
    }
    const network = version === HdKeyVersion.mainnetPrivateKey ||
        version === HdKeyVersion.mainnetPublicKey
        ? 'mainnet'
        : 'testnet';
    return { network, node };
};
/**
 * Decode an HD private key as defined by BIP32.
 *
 * This method is similar to {@link decodeHdKey} but ensures that the result is
 * a valid HD private node. Decoding error messages are returned as strings.
 *
 * @param hdPrivateKey - A BIP32 HD private key.
 */
export const decodeHdPrivateKey = (hdPrivateKey, { crypto = { secp256k1: internalSecp256k1, sha256: internalSha256 }, } = {}) => {
    const decoded = decodeHdKey(hdPrivateKey, { crypto });
    if (typeof decoded === 'string')
        return decoded;
    const { network, node } = decoded;
    if ('publicKey' in node) {
        return HdKeyDecodingError.privateKeyExpected;
    }
    return { network, node };
};
/**
 * Decode an HD public key as defined by BIP32.
 *
 * This method is similar to {@link decodeHdKey} but ensures that the result is
 * a valid HD public node. Decoding error messages are returned as strings.
 *
 * @param hdPublicKey - A BIP32 HD public key.
 */
export const decodeHdPublicKey = (hdPublicKey, { crypto = { secp256k1: internalSecp256k1, sha256: internalSha256 }, } = {}) => {
    const decoded = decodeHdKey(hdPublicKey, { crypto });
    if (typeof decoded === 'string')
        return decoded;
    const { network, node } = decoded;
    if ('privateKey' in node) {
        return HdKeyDecodingError.publicKeyExpected;
    }
    return { network, node };
};
/**
 * Decode the provided HD private key and compute its identifier. Error messages
 * are returned as a string.
 */
export const hdPrivateKeyToIdentifier = (hdPrivateKey, { crypto = { secp256k1: internalSecp256k1, sha256: internalSha256 }, } = {}) => {
    const privateKeyParams = decodeHdPrivateKey(hdPrivateKey, { crypto });
    if (typeof privateKeyParams === 'string') {
        return privateKeyParams;
    }
    return deriveHdPrivateNodeIdentifier(privateKeyParams.node);
};
/**
 * Decode the provided HD public key and compute its identifier. Error messages
 * are returned as a string.
 */
export const hdPublicKeyToIdentifier = (hdPublicKey, { crypto = { secp256k1: internalSecp256k1, sha256: internalSha256 }, } = {}) => {
    const publicKeyParams = decodeHdPublicKey(hdPublicKey, { crypto });
    if (typeof publicKeyParams === 'string') {
        return publicKeyParams;
    }
    return deriveHdPublicNodeIdentifier(publicKeyParams.node);
};
/**
 * Encode the metadata portion of an HD key payload.
 */
// eslint-disable-next-line complexity
export const encodeHdKeyPayloadMetadata = ({ version, keyParameters, throwErrors = true, }) => {
    if (keyParameters.node.depth === 0) {
        if (keyParameters.node.childIndex !== 0) {
            return formatError(HdKeyEncodingError.zeroDepthWithNonZeroChildIndex, `Child index: ${keyParameters.node.childIndex}.`, throwErrors);
        }
        if (!binsAreEqual(keyParameters.node.parentFingerprint, emptyParentFingerprint)) {
            return formatError(HdKeyEncodingError.zeroDepthWithNonZeroParentFingerprint, `Parent fingerprint: ${keyParameters.node.parentFingerprint.join(',')}.`, throwErrors);
        }
    }
    if (keyParameters.node.chainCode.length !== 32 /* Bip32Constants.halfHmacSha512Length */) {
        return formatError(HdKeyEncodingError.invalidChainCodeLength, `Chain code length: ${keyParameters.node.chainCode.length}.`, throwErrors);
    }
    if (keyParameters.node.parentFingerprint.length !==
        4 /* Bip32Constants.parentFingerprintLength */) {
        return formatError(HdKeyEncodingError.invalidParentFingerprintLength, `Parent fingerprint length: ${keyParameters.node.parentFingerprint.length}.`, throwErrors);
    }
    if (keyParameters.node.depth < 0 ||
        keyParameters.node.depth > 255 /* Bip32Constants.maximumEncodingDepth */) {
        return formatError(HdKeyEncodingError.invalidChildDepth, `Depth: ${keyParameters.node.depth}.`, throwErrors);
    }
    const depth = Uint8Array.of(keyParameters.node.depth);
    if (keyParameters.node.childIndex < 0 ||
        keyParameters.node.childIndex > 4294967295 /* Bip32Constants.maximumChildIndex */) {
        return formatError(HdKeyEncodingError.invalidChildIndex, `Child index: ${keyParameters.node.childIndex}.`, throwErrors);
    }
    const childIndex = numberToBinUint32BE(keyParameters.node.childIndex);
    const payload = flattenBinArray([
        version,
        depth,
        keyParameters.node.parentFingerprint,
        childIndex,
        keyParameters.node.chainCode,
    ]);
    return payload;
};
/**
 * Encode an HD private key (as defined by BIP32) payload (without the checksum)
 * given a valid {@link HdPrivateNode} and network.
 *
 * Note that this function defaults to throwing encoding errors. To handle
 * errors in a type-safe way, set `throwErrors` to `false`.
 *
 * @param keyParameters - A valid HD private node and the network for which to
 * encode the key.
 */
export const encodeHdPrivateKeyPayload = (keyParameters, { throwErrors = true, } = {}) => {
    const version = numberToBinUint32BE(keyParameters.network === 'mainnet'
        ? HdKeyVersion.mainnetPrivateKey
        : HdKeyVersion.testnetPrivateKey);
    if (keyParameters.node.privateKey.length !== 32 /* Bip32Constants.halfHmacSha512Length */) {
        return formatError(HdKeyEncodingError.invalidPrivateKeyLength, `Private key length: ${keyParameters.node.privateKey.length}.`, throwErrors);
    }
    const metadata = encodeHdKeyPayloadMetadata({
        keyParameters,
        throwErrors,
        version,
    });
    if (typeof metadata === 'string') {
        return metadata;
    }
    const isPrivateKey = Uint8Array.of(0x00);
    const payload = flattenBinArray([
        metadata,
        isPrivateKey,
        keyParameters.node.privateKey,
    ]);
    return payload;
};
/**
 * Encode an HD public key (as defined by BIP32) payload (without the checksum)
 * given a valid {@link HdPublicNodeValid} and network.
 *
 * Note that this function defaults to throwing encoding errors. To handle
 * errors in a type-safe way, set `throwErrors` to `false`.
 *
 * @param keyParameters - A valid HD public node and the network for which to
 * encode the key.
 */
export const encodeHdPublicKeyPayload = (keyParameters, { throwErrors = true, } = {}) => {
    const version = numberToBinUint32BE(keyParameters.network === 'mainnet'
        ? HdKeyVersion.mainnetPublicKey
        : HdKeyVersion.testnetPublicKey);
    if (keyParameters.node.publicKey.length !== 33 /* Bip32Constants.publicKeyLength */) {
        return formatError(HdKeyEncodingError.invalidPublicKeyLength, `Public key length: ${keyParameters.node.publicKey.length}.`, throwErrors);
    }
    const metadata = encodeHdKeyPayloadMetadata({
        keyParameters,
        throwErrors,
        version,
    });
    if (typeof metadata === 'string') {
        return metadata;
    }
    const payload = flattenBinArray([metadata, keyParameters.node.publicKey]);
    return payload;
};
/**
 * Encode an HD public or private key (as defined by BIP32) payload with
 * a checksum.
 *
 * @param payload - the HD public or private key payload to encode
 */
export const encodeHdKeyPayloadWithChecksum = (payload, { crypto = { sha256: internalSha256 }, } = {}) => {
    const checksumLength = 4;
    const checksum = crypto.sha256
        .hash(crypto.sha256.hash(payload))
        .slice(0, checksumLength);
    return binToBase58(flattenBinArray([payload, checksum]));
};
/**
 * Encode an HD private key (as defined by BIP32) given a valid
 * {@link HdPrivateNode} and network.
 *
 * Note that this function defaults to throwing encoding errors. To handle
 * errors in a type-safe way, set `throwErrors` to `false`.
 *
 * @param keyParameters - A valid HD private node and the network for which to
 * encode the key.
 */
export const encodeHdPrivateKey = (keyParameters, { crypto = { sha256: internalSha256 }, throwErrors = true, } = {}) => {
    const payload = encodeHdPrivateKeyPayload(keyParameters, { throwErrors });
    return typeof payload === 'string'
        ? payload
        : { hdPrivateKey: encodeHdKeyPayloadWithChecksum(payload, { crypto }) };
};
/**
 * Encode an HD public key (as defined by BIP32) given a valid
 * {@link HdPublicNodeValid} and network.
 *
 * Note that this function defaults to throwing encoding errors. To handle
 * errors in a type-safe way, set `throwErrors` to `false`.
 *
 * @param keyParameters - An HD public node and the network for which to encode
 * the key.
 */
export const encodeHdPublicKey = (keyParameters, { crypto = { secp256k1: internalSecp256k1, sha256: internalSha256 }, throwErrors = true, } = {}) => {
    if (!crypto.secp256k1.validatePublicKey(keyParameters.node.publicKey)) {
        return formatError(HdKeyEncodingError.invalidPublicKey, `Invalid public key: "${binToHex(keyParameters.node.publicKey)}".`, throwErrors);
    }
    const payload = encodeHdPublicKeyPayload(keyParameters, { throwErrors });
    return typeof payload === 'string'
        ? payload
        : { hdPublicKey: encodeHdKeyPayloadWithChecksum(payload, { crypto }) };
};
/**
 * Derive the HD public node of an HD private node.
 *
 * Though private keys cannot be derived from HD public keys, sharing HD public
 * keys still carries risk. Along with allowing an attacker to associate wallet
 * addresses together (breaking privacy), should an attacker gain knowledge of a
 * single child private key, **it's possible to derive all parent HD private
 * keys**. See {@link crackHdPrivateNodeFromHdPublicNodeAndChildPrivateNode} for
 * details.
 *
 * To derive an HD public key from an encoded HD private key,
 * use {@link deriveHdPublicKey}.
 *
 * @param node - A valid HD private node.
 */
export const deriveHdPublicNode = (node, { crypto = { secp256k1: internalSecp256k1 }, } = {}) => ({
    chainCode: node.chainCode,
    childIndex: node.childIndex,
    depth: node.depth,
    parentFingerprint: node.parentFingerprint,
    ...(node.parentIdentifier === undefined
        ? {}
        : { parentIdentifier: node.parentIdentifier }),
    publicKey: crypto.secp256k1.derivePublicKeyCompressed(node.privateKey),
});
/**
 * Derive the HD public key of an HD private key.
 *
 * Though private keys cannot be derived from HD public keys, sharing HD public
 * keys still carries risk. Along with allowing an attacker to associate wallet
 * addresses together (breaking privacy), should an attacker gain knowledge of a
 * single child private key, **it's possible to derive all parent HD private
 * keys**. See {@link crackHdPrivateNodeFromHdPublicNodeAndChildPrivateNode} for
 * details.
 *
 * To derive the HD public node of an already-decoded HD private node,
 * use {@link deriveHdPublicNode}.
 *
 * Note that this function defaults to throwing errors. To handle errors in a
 * type-safe way, set `throwErrors` to `false`.
 *
 * @param hdPrivateKey - A BIP32 HD private key.
 */
export const deriveHdPublicKey = (privateKey, { crypto = { secp256k1: internalSecp256k1, sha256: internalSha256 }, throwErrors = true, } = {}) => {
    const decoded = decodeHdPrivateKey(privateKey, { crypto });
    if (typeof decoded === 'string') {
        return formatError(decoded, undefined, throwErrors);
    }
    const node = deriveHdPublicNode(decoded.node, { crypto });
    return encodeHdPublicKey({ network: decoded.network, node }, { crypto, throwErrors });
};
/**
 * Derive a child HD private node from an HD private node.
 *
 * To derive a child HD public node, use {@link deriveHdPublicNode} on the
 * result of this method. If the child uses a non-hardened index, it's also
 * possible to use {@link deriveHdPublicNodeChild}.
 *
 * Note that this function defaults to throwing errors. To handle errors in a
 * type-safe way, set `throwErrors` to `false`.
 *
 * This function has a less than 1 in 2^127 probability of producing
 * an invalid result (where the resulting private key is not a valid Secp256k1
 * private key, see {@link validateSecp256k1PrivateKey}). While this scenario is
 * unlikely to ever occur without a weakness in HMAC-SHA512, the
 * `returnInvalidNodes` parameter can be set to `true` to return the resulting
 * {@link HdPrivateNodeInvalid} rather than an error (defaults to `false`).
 *
 * @param node - The valid HD private node from which to derive the child node.
 * @param index - The index at which to derive the child node - indexes greater
 * than or equal to the hardened index offset (`0x80000000`/`2147483648`) are
 * derived using the "hardened" derivation algorithm.
 */
// eslint-disable-next-line complexity
export const deriveHdPrivateNodeChild = (node, index, { crypto = {
    ripemd160: internalRipemd160,
    secp256k1: internalSecp256k1,
    sha256: internalSha256,
    sha512: internalSha512,
}, throwErrors = true, returnInvalidNodes = false, } = {}) => {
    const maximumIndex = 0xffffffff;
    if (index > maximumIndex) {
        return formatError(HdNodeDerivationError.childIndexExceedsMaximum, `Child index: ${index}.`, throwErrors);
    }
    const parentIdentifier = deriveHdPrivateNodeIdentifier(node, { crypto });
    const parentFingerprint = parentIdentifier.slice(0, 4 /* Bip32Constants.parentFingerprintLength */);
    const depth = node.depth + 1;
    const hardenedIndexOffset = 0x80000000;
    const useHardenedAlgorithm = index >= hardenedIndexOffset;
    const keyMaterial = useHardenedAlgorithm
        ? node.privateKey
        : crypto.secp256k1.derivePublicKeyCompressed(node.privateKey);
    const serialization = Uint8Array.from([
        ...(useHardenedAlgorithm ? [0x00] : []),
        ...keyMaterial,
        ...numberToBinUint32BE(index),
    ]);
    const derivation = hmacSha512(node.chainCode, serialization, crypto.sha512);
    const tweakValueLength = 32;
    const tweakValue = derivation.slice(0, tweakValueLength);
    const nextChainCode = derivation.slice(tweakValueLength);
    const nextPrivateKey = crypto.secp256k1.addTweakPrivateKey(node.privateKey, tweakValue);
    if (typeof nextPrivateKey === 'string') {
        const error = formatError(HdNodeDerivationError.invalidDerivedKey, `Invalid child index: ${index}.`, throwErrors);
        if (returnInvalidNodes) {
            return {
                chainCode: nextChainCode,
                childIndex: index,
                depth,
                invalidMaterial: tweakValue,
                parentFingerprint,
                parentIdentifier,
            };
        }
        return error;
    }
    return {
        chainCode: nextChainCode,
        childIndex: index,
        depth,
        parentFingerprint,
        parentIdentifier,
        privateKey: nextPrivateKey,
    };
};
/**
 * Derive a non-hardened, child HD public node from an HD public node.
 *
 * Because hardened derivation also requires knowledge of the parent private
 * node, it's not possible to use an HD public node to derive a hardened child
 * HD public node. (See {@link deriveHdPath} or {@link deriveHdPublicNode}.)
 *
 * Though private keys cannot be derived from HD public keys, sharing HD public
 * keys still carries risk. Along with allowing an attacker to associate wallet
 * addresses together (breaking privacy), should an attacker gain knowledge of a
 * single child private key, **it's possible to derive all parent HD private
 * keys**. See {@link crackHdPrivateNodeFromHdPublicNodeAndChildPrivateNode}
 * for details.
 *
 * This function has a less than 1 in 2^127 probability of producing
 * an invalid result (where the resulting public key is not a valid Secp256k1
 * public key). While this scenario is unlikely to ever occur without a weakness
 * in HMAC-SHA512, the `returnInvalidNodes` parameter can be set to `true` to
 * return the resulting {@link HdPrivateNodeInvalid} rather than an error
 * (defaults to `false`).
 *
 * @param node - The valid HD public node from which to derive the child
 * public node.
 * @param index - The index at which to derive the child node.
 */
export const deriveHdPublicNodeChild = (node, index, { crypto = {
    ripemd160: internalRipemd160,
    secp256k1: internalSecp256k1,
    sha256: internalSha256,
    sha512: internalSha512,
}, returnInvalidNodes = false, throwErrors = true, } = {}) => {
    const hardenedIndexOffset = 0x80000000;
    if (index >= hardenedIndexOffset) {
        return formatError(HdNodeDerivationError.hardenedDerivationRequiresPrivateNode, `Requested index: ${index}.`, throwErrors);
    }
    const parentIdentifier = deriveHdPublicNodeIdentifier(node, { crypto });
    const parentFingerprint = parentIdentifier.slice(0, 4 /* Bip32Constants.parentFingerprintLength */);
    const depth = node.depth + 1;
    const serialization = Uint8Array.from([
        ...node.publicKey,
        ...numberToBinUint32BE(index),
    ]);
    const derivation = hmacSha512(node.chainCode, serialization, crypto.sha512);
    const tweakValueLength = 32;
    const tweakValue = derivation.slice(0, tweakValueLength);
    const nextChainCode = derivation.slice(tweakValueLength);
    const nextPublicKey = crypto.secp256k1.addTweakPublicKeyCompressed(node.publicKey, tweakValue);
    if (typeof nextPublicKey === 'string') {
        const error = formatError(HdNodeDerivationError.invalidDerivedKey, `Invalid child index: ${index}.`, throwErrors);
        if (returnInvalidNodes) {
            return {
                chainCode: nextChainCode,
                childIndex: index,
                depth,
                invalidMaterial: tweakValue,
                parentFingerprint,
                parentIdentifier,
            };
        }
        return error;
    }
    return {
        chainCode: nextChainCode,
        childIndex: index,
        depth,
        parentFingerprint,
        parentIdentifier,
        publicKey: nextPublicKey,
    };
};
/**
 * Derive a child HD node from a parent node given a relative derivation path.
 * The resulting node is the same type as the parent node – private nodes return
 * private nodes, public nodes return public nodes. (To prevent implementation
 * errors, this function will not internally derive a public node from any
 * private node; for public derivation, use {@link deriveHdPublicNode} at the
 * desired BIP32 account level and provide the HD public key to this function.)
 *
 * Where possible, consider instead using {@link deriveHdPath} to reduce the
 * likelihood of implementation errors.
 *
 * By default, this function throws an `Error` rather than returning the error
 * as string when the provided path is invalid or cannot be derived from the
 * provided HD node (e.g. the path requests an excessive child index, a hardened
 * path is requested from a public node, or an astronomically rare HMAC-SHA512
 * result produces and invalid node).
 *
 * While the throwing behavior is reasonable for the common case of deriving
 * known, fixed paths (e.g. the BCH account as standardized by SLIP44 at
 * `m/44'/145'/0'`), **it is recommended that `throwErrors` be set to `false`
 * for use cases where dynamic or user-specified paths might be derived**. In
 * these cases, deliberate error handling is recommended, e.g. saving any data
 * and safely shutting down, displaying troubleshooting information to the
 * user, etc.
 *
 * The derivation path uses the notation specified in BIP32; see
 * {@link deriveHdPath} for details.
 *
 * @param node - The HD node from which to begin the derivation – for private
 * derivation, an {@link HdPrivateNodeValid}; for public derivation,
 * an {@link HdPublicNodeValid}.
 * @param path - The relative BIP32 derivation path, e.g. `1'/2` or `3/4/5`.
 */
export const deriveHdPathRelative = (node, path, { crypto = {
    ripemd160: internalRipemd160,
    secp256k1: internalSecp256k1,
    sha256: internalSha256,
    sha512: internalSha512,
}, throwErrors = true, } = {}) => {
    if (path === '') {
        return node;
    }
    const validRelativeDerivationPath = /^(?:[0-9]+'?)(?:\/[0-9]+'?)*$/u;
    if (!validRelativeDerivationPath.test(path)) {
        return formatError(HdNodeDerivationError.invalidRelativeDerivationPath, `Invalid path: "${path}".`, throwErrors);
    }
    const parsed = path.split('/');
    const isPrivateDerivation = 'privateKey' in node;
    const base = 10;
    const hardenedIndexOffset = 0x80000000;
    const indexes = parsed.map((index) => index.endsWith("'")
        ? parseInt(index.slice(0, -1), base) + hardenedIndexOffset
        : parseInt(index, base));
    return (isPrivateDerivation
        ? indexes.reduce((result, nextIndex) => typeof result === 'string'
            ? result
            : deriveHdPrivateNodeChild(result, nextIndex, {
                crypto,
                throwErrors,
            }), node)
        : indexes.reduce((result, nextIndex) => typeof result === 'string'
            ? result
            : deriveHdPublicNodeChild(result, nextIndex, {
                crypto,
                throwErrors,
            }), node));
};
/**
 * Derive a child HD node from a master node given an absolute derivation path.
 * The resulting node is the same type as the parent node – private nodes return
 * private nodes, public nodes return public nodes. (To prevent implementation
 * errors, this function will not internally derive a public node from any
 * private node; for public derivation, use {@link deriveHdPublicNode} at the
 * desired BIP32 account level and provide the HD public key to this function.)
 *
 * The derivation path uses the notation specified in BIP32: the first character
 * must be either `m` for private derivation or `M` for public derivation,
 * followed by sets of `/` and a number representing the child index used in the
 * derivation at that depth. Hardened derivation is represented by a trailing
 * `'`, and may only appear in private derivation paths (hardened derivation
 * requires knowledge of the private key). Hardened child indexes are
 * represented with the hardened index offset (`2147483648`) subtracted.
 *
 * For example, `m/0/1'/2` uses private derivation (`m`), with child indexes in
 * the following order:
 *
 * `derivePrivate(derivePrivate(derivePrivate(node, 0), 2147483648 + 1), 2)`
 *
 * Likewise, `M/3/4/5` uses public derivation (`M`), with child indexes in the
 * following order:
 *
 * `derivePublic(derivePublic(derivePublic(node, 3), 4), 5)`
 *
 * Because hardened derivation requires a private node, paths that specify
 * public derivation (`M`) using hardened derivation (`'`) will return an error.
 * To derive the public node associated with a child private node that requires
 * hardened derivation, begin with private derivation, then provide the result
 * to {@link deriveHdPublicNode} or {@link deriveHdPathRelative}.
 *
 * By default, this function throws an `Error` rather than returning the error
 * as string when the provided path is invalid or cannot be derived from the
 * provided HD node (e.g. the path requests an excessive child index, a hardened
 * path is requested from a public node, or an astronomically rare HMAC-SHA512
 * result produces and invalid node).
 *
 * While the throwing behavior is reasonable for the common case of deriving
 * known, fixed paths (e.g. the BCH account as standardized by SLIP44 at
 * `m/44'/145'/0'`), **it is recommended that `throwErrors` be set to `false`
 * for use cases where dynamic or user-specified paths might be derived**. In
 * these cases, deliberate error handling is recommended, e.g. saving any data
 * and safely shutting down, displaying troubleshooting information to the
 * user, etc.
 *
 * @param node - The HD node from which to begin the derivation – for paths
 * beginning with `m`, an {@link HdPrivateNodeValid}; for paths beginning with
 * `M`, an {@link HdPublicNodeValid}.
 * @param path - The BIP32 derivation path, e.g. `m/0/1'/2` or `M/3/4/5`.
 */
// eslint-disable-next-line complexity
export const deriveHdPath = (node, path, { crypto = {
    ripemd160: internalRipemd160,
    secp256k1: internalSecp256k1,
    sha256: internalSha256,
    sha512: internalSha512,
}, throwErrors = true, } = {}) => {
    if (node.depth !== 0) {
        return formatError(HdNodeDerivationError.requiresZeroDepthNode, `Depth of provided HD node: ${node.depth}.`, throwErrors);
    }
    const validDerivationPath = /^[mM](?:\/[0-9]+'?)*$/u;
    if (!validDerivationPath.test(path)) {
        return formatError(HdNodeDerivationError.invalidAbsoluteDerivationPath, `Invalid path: "${path}".`, throwErrors);
    }
    const parsed = path.split('/');
    const isPrivateDerivation = 'privateKey' in node;
    if (isPrivateDerivation && parsed[0] !== 'm') {
        return formatError(HdNodeDerivationError.invalidPrivateDerivationPrefix, `Invalid path: "${path}".`, throwErrors);
    }
    if (!isPrivateDerivation && parsed[0] !== 'M') {
        return formatError(HdNodeDerivationError.invalidPublicDerivationPrefix, `Invalid path: "${path}".`, throwErrors);
    }
    if (parsed.length === 1) {
        return node;
    }
    const relativePath = parsed.slice(1).join('/');
    return deriveHdPathRelative(node, relativePath, {
        crypto,
        throwErrors,
    });
};
export var HdNodeCrackingError;
(function (HdNodeCrackingError) {
    HdNodeCrackingError["cannotCrackHardenedDerivation"] = "HD node cracking error: cannot crack an HD parent node using hardened child node.";
})(HdNodeCrackingError || (HdNodeCrackingError = {}));
/**
 * Derive the HD private node from a HD public node, given any non-hardened
 * child private node.
 *
 * This exploits the "non-hardened" BIP32 derivation algorithm. Because
 * non-hardened derivation only requires knowledge of the "chain code" (rather
 * than requiring knowledge of the parent private key) it's possible to
 * calculate the value by which the parent private key is "tweaked" to arrive at
 * the child private key. Since we have the child private key, we simply
 * subtract this "tweaked" amount to get back to the parent private key.
 *
 * The BIP32 "hardened" derivation algorithm is designed to address this
 * weakness. Using hardened derivation, child private nodes can be shared
 * without risk of leaking the parent private node, but this comes at the cost
 * of public node derivation. Given only a parent public node, it is not
 * possible to derive hardened child public keys, so applications must choose
 * between support for HD public node derivation or support for sharing child
 * private nodes.
 *
 * @param parentPublicNode - the parent HD public node for which to derive a
 * private node.
 * @param childPrivateNode - Any non-hardened child private node of the parent
 * node (only the `privateKey` and the `childIndex` are required).
 */
export const crackHdPrivateNodeFromHdPublicNodeAndChildPrivateNode = (parentPublicNode, childPrivateNode, { crypto = { sha512: internalSha512 }, } = {}) => {
    const hardenedIndexOffset = 0x80000000;
    if (childPrivateNode.childIndex >= hardenedIndexOffset) {
        return HdNodeCrackingError.cannotCrackHardenedDerivation;
    }
    const serialization = Uint8Array.from([
        ...parentPublicNode.publicKey,
        ...numberToBinUint32BE(childPrivateNode.childIndex),
    ]);
    const derivation = hmacSha512(parentPublicNode.chainCode, serialization, crypto.sha512);
    const tweakValueLength = 32;
    const tweakValue = binToBigIntUint256BE(derivation.slice(0, tweakValueLength));
    const childPrivateValue = binToBigIntUint256BE(childPrivateNode.privateKey);
    const secp256k1OrderN = 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n;
    const trueMod = (n, m) => ((n % m) + m) % m;
    const parentPrivateValue = trueMod(childPrivateValue - tweakValue, secp256k1OrderN);
    const privateKey = bigIntToBinUint256BEClamped(parentPrivateValue);
    return {
        chainCode: parentPublicNode.chainCode,
        childIndex: parentPublicNode.childIndex,
        depth: parentPublicNode.depth,
        parentFingerprint: parentPublicNode.parentFingerprint,
        ...(parentPublicNode.parentIdentifier === undefined
            ? {}
            : { parentIdentifier: parentPublicNode.parentIdentifier }),
        privateKey,
    };
};
//# sourceMappingURL=hd-key.js.map