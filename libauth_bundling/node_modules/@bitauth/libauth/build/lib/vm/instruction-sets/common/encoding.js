import { ConsensusCommon } from './consensus.js';
const isNegative = (value) => 
// eslint-disable-next-line no-bitwise, @typescript-eslint/no-non-null-assertion
(value & 128 /* Mask.negative */) !== 0;
const hasUnnecessaryPadding = (length, firstByte, secondByte) => length > 1 && firstByte === 0 && !isNegative(secondByte);
const isValidInteger = (signature, tagIndex, length, valueIndex) => signature[tagIndex] === 2 /* ASN1.integerTagType */ &&
    length !== 0 &&
    !isNegative(signature[valueIndex]) &&
    !hasUnnecessaryPadding(length, signature[valueIndex], signature[valueIndex + 1]);
/**
 * Validate a DER-encoded signature.
 *
 * @remarks
 * This function is consensus-critical since BIP66, but differs from the BIP66
 * specification in that it does not validate the existence of a signing
 * serialization type byte at the end of the signature (to support
 * OP_CHECKDATASIG). To validate a bitcoin-encoded signature (including null
 * signatures), use {@link isValidSignatureEncodingBchTransaction}.
 *
 * @privateRemarks
 * From the Bitcoin ABC C++ implementation:
 *
 * Format: 0x30 [total-length] 0x02 [R-length] [R] 0x02 [S-length] [S]
 * total-length: 1-byte length descriptor of everything that follows,
 * excluding the sighash byte.
 * R-length: 1-byte length descriptor of the R value that follows.
 * R: arbitrary-length big-endian encoded R value. It must use the
 * shortest possible encoding for a positive integers (which means no null
 * bytes at the start, except a single one when the next byte has its highest
 * bit set).
 * S-length: 1-byte length descriptor of the S value that follows.
 * S: arbitrary-length big-endian encoded S value. The same rules apply.
 */
// eslint-disable-next-line complexity
export const isValidSignatureEncodingDER = (signature) => {
    const correctLengthRange = signature.length > 8 /* DER.minimumLength */ &&
        signature.length < 72 /* DER.maximumLength */;
    const correctSequenceTagType = signature[0 /* DER.sequenceTagIndex */] === 48 /* ASN1.sequenceTagType */;
    const correctSequenceLength = signature[1 /* DER.sequenceLengthIndex */] ===
        signature.length - 2 /* DER.sequenceMetadataBytes */;
    const rLength = signature[3 /* DER.rLengthIndex */];
    if (rLength === undefined) {
        return false;
    }
    const consistentRLength = rLength <= signature.length - 7 /* DER.minimumNonRValueBytes */;
    const rIsValid = isValidInteger(signature, 2 /* DER.rTagIndex */, rLength, 4 /* DER.rValueIndex */);
    const sTagIndex = 4 /* DER.rValueIndex */ + rLength;
    const sLengthIndex = sTagIndex + 1;
    const sLength = signature[sLengthIndex];
    if (sLength === undefined) {
        return false;
    }
    const sValueIndex = sLengthIndex + 1;
    const consistentSLength = sValueIndex + sLength === signature.length;
    const sIsValid = isValidInteger(signature, sTagIndex, sLength, sValueIndex);
    return (correctLengthRange &&
        correctSequenceTagType &&
        correctSequenceLength &&
        consistentRLength &&
        rIsValid &&
        consistentSLength &&
        sIsValid);
};
/**
 * Validate the encoding of a transaction signature, including a signing
 * serialization type byte (A.K.A. "sighash" byte).
 *
 * @param transactionSignature - the full transaction signature
 */
export const isValidSignatureEncodingBchTransaction = (transactionSignature, validSigningSerializationTypes) => transactionSignature.length === 0 ||
    (validSigningSerializationTypes.includes(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    transactionSignature[transactionSignature.length - 1]) &&
        (transactionSignature.length ===
            ConsensusCommon.schnorrSignatureLength + 1 ||
            isValidSignatureEncodingDER(transactionSignature.slice(0, transactionSignature.length - 1))));
/**
 * Split a bitcoin-encoded signature into a signature and signing serialization
 * type.
 *
 * While a bitcoin-encoded signature only includes a single byte to encode the
 * signing serialization type, a 3-byte forkId can be appended to the signing
 * serialization to provide replay-protection between different forks. (See
 * Bitcoin Cash's Replay Protected Sighash spec for details.)
 *
 * @param encodedSignature - a signature that passes
 * {@link isValidSignatureEncodingBchTransaction}
 */
export const decodeBitcoinSignature = (encodedSignature) => ({
    signature: encodedSignature.slice(0, -1),
    signingSerializationType: encodedSignature.slice(-1),
});
//# sourceMappingURL=encoding.js.map