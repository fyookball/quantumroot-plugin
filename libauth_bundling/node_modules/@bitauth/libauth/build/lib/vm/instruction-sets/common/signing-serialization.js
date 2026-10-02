import { hash256, sha256 as internalSha256 } from '../../../crypto/crypto.js';
import { bigIntToCompactUint, flattenBinArray, numberToBinUint32LE, valueSatoshisToBin, } from '../../../format/format.js';
import { encodeTokenPrefix, encodeTransactionInputSequenceNumbersForSigning, encodeTransactionOutpoints, encodeTransactionOutput, encodeTransactionOutputsForSigning, } from '../../../message/message.js';
/**
 * A.K.A. `sighash` flags
 */
export var SigningSerializationFlag;
(function (SigningSerializationFlag) {
    /**
     * A.K.A. `SIGHASH_ALL`
     */
    SigningSerializationFlag[SigningSerializationFlag["allOutputs"] = 1] = "allOutputs";
    /**
     * A.K.A `SIGHASH_NONE`
     */
    SigningSerializationFlag[SigningSerializationFlag["noOutputs"] = 2] = "noOutputs";
    /**
     * A.K.A. `SIGHASH_SINGLE`
     */
    SigningSerializationFlag[SigningSerializationFlag["correspondingOutput"] = 3] = "correspondingOutput";
    /**
     * A.K.A. `SIGHASH_UTXOS`
     */
    SigningSerializationFlag[SigningSerializationFlag["utxos"] = 32] = "utxos";
    SigningSerializationFlag[SigningSerializationFlag["forkId"] = 64] = "forkId";
    /**
     * A.K.A `ANYONE_CAN_PAY`/`SIGHASH_ANYONECANPAY`
     */
    SigningSerializationFlag[SigningSerializationFlag["singleInput"] = 128] = "singleInput";
})(SigningSerializationFlag || (SigningSerializationFlag = {}));
/* eslint-disable no-bitwise, @typescript-eslint/prefer-literal-enum-member */
export var SigningSerializationType;
(function (SigningSerializationType) {
    SigningSerializationType[SigningSerializationType["allOutputs"] = 65] = "allOutputs";
    SigningSerializationType[SigningSerializationType["allOutputsAllUtxos"] = 97] = "allOutputsAllUtxos";
    SigningSerializationType[SigningSerializationType["allOutputsSingleInput"] = 193] = "allOutputsSingleInput";
    SigningSerializationType[SigningSerializationType["correspondingOutput"] = 67] = "correspondingOutput";
    SigningSerializationType[SigningSerializationType["correspondingOutputAllUtxos"] = 99] = "correspondingOutputAllUtxos";
    SigningSerializationType[SigningSerializationType["correspondingOutputSingleInput"] = 195] = "correspondingOutputSingleInput";
    SigningSerializationType[SigningSerializationType["noOutputs"] = 66] = "noOutputs";
    SigningSerializationType[SigningSerializationType["noOutputsAllUtxos"] = 98] = "noOutputsAllUtxos";
    SigningSerializationType[SigningSerializationType["noOutputsSingleInput"] = 194] = "noOutputsSingleInput";
})(SigningSerializationType || (SigningSerializationType = {}));
/* eslint-enable no-bitwise, @typescript-eslint/prefer-literal-enum-member */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SigningSerializationTypeBch = SigningSerializationType;
/**
 * @deprecated Alias of `SigningSerializationTypeBch` for backwards-compatibility.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SigningSerializationTypeBCH = SigningSerializationTypeBch;
const match = (type, flag) => 
// eslint-disable-next-line no-bitwise, @typescript-eslint/no-non-null-assertion
(type[0] & flag) !== 0;
const equals = (type, flag) => (type[0] & 31 /* Internal.mask5Bits */) === flag;
const shouldSerializeSingleInput = (type) => match(type, SigningSerializationFlag.singleInput);
const shouldSerializeCorrespondingOutput = (type) => equals(type, SigningSerializationFlag.correspondingOutput);
const shouldSerializeNoOutputs = (type) => equals(type, SigningSerializationFlag.noOutputs);
const shouldSerializeUtxos = (type) => match(type, SigningSerializationFlag.utxos);
const emptyHash = () => new Uint8Array(32 /* Internal.sha256HashByteLength */).fill(0);
/**
 * Return the proper `hashPrevouts` value for a given a signing serialization
 * type.
 */
export const hashPrevouts = ({ signingSerializationType, transactionOutpoints, }, sha256 = internalSha256) => shouldSerializeSingleInput(signingSerializationType)
    ? emptyHash()
    : hash256(transactionOutpoints, sha256);
/**
 * Return the proper `hashUtxos` value for a given a signing serialization
 * type.
 */
export const hashUtxos = ({ signingSerializationType, transactionUtxos, }, sha256 = internalSha256) => shouldSerializeUtxos(signingSerializationType)
    ? hash256(transactionUtxos, sha256)
    : Uint8Array.of();
/**
 * Return the proper `hashSequence` value for a given a signing serialization
 * type.
 */
export const hashSequence = ({ signingSerializationType, transactionSequenceNumbers, }, sha256 = internalSha256) => !shouldSerializeSingleInput(signingSerializationType) &&
    !shouldSerializeCorrespondingOutput(signingSerializationType) &&
    !shouldSerializeNoOutputs(signingSerializationType)
    ? hash256(transactionSequenceNumbers, sha256)
    : emptyHash();
/**
 * Return the proper `hashOutputs` value for a given a signing serialization
 * type.
 */
export const hashOutputs = ({ correspondingOutput, signingSerializationType, transactionOutputs, }, sha256 = internalSha256) => !shouldSerializeCorrespondingOutput(signingSerializationType) &&
    !shouldSerializeNoOutputs(signingSerializationType)
    ? hash256(transactionOutputs, sha256)
    : shouldSerializeCorrespondingOutput(signingSerializationType)
        ? correspondingOutput === undefined
            ? emptyHash()
            : hash256(correspondingOutput, sha256)
        : emptyHash();
/**
 * Encode the signature-protected properties of a transaction following the
 * algorithm required by the `signingSerializationType` of a signature.
 *
 * Note: When validating transactions with multiple signatures,
 * performance-critical applications should use a memoized sha256 implementation
 * to avoid re-computing hashes.
 */
export const encodeSigningSerializationBch = ({ correspondingOutput, coveredBytecode, forkId = new Uint8Array([0, 0, 0]), locktime, outpointIndex, outpointTransactionHash, outputTokenPrefix, outputValue, sequenceNumber, signingSerializationType, transactionOutpoints, transactionOutputs, transactionSequenceNumbers, transactionUtxos, version, }, sha256 = internalSha256) => flattenBinArray([
    numberToBinUint32LE(version),
    hashPrevouts({ signingSerializationType, transactionOutpoints }, sha256),
    hashUtxos({ signingSerializationType, transactionUtxos }, sha256),
    hashSequence({
        signingSerializationType,
        transactionSequenceNumbers,
    }, sha256),
    outpointTransactionHash.slice().reverse(),
    numberToBinUint32LE(outpointIndex),
    outputTokenPrefix,
    bigIntToCompactUint(BigInt(coveredBytecode.length)),
    coveredBytecode,
    outputValue,
    numberToBinUint32LE(sequenceNumber),
    hashOutputs({
        correspondingOutput,
        signingSerializationType,
        transactionOutputs,
    }, sha256),
    numberToBinUint32LE(locktime),
    signingSerializationType,
    forkId,
]);
/**
 * @deprecated Alias of `encodeSigningSerializationBch` for backwards-compatibility.
 */
export const encodeSigningSerializationBCH = encodeSigningSerializationBch;
/**
 * Generate the encoded components of a BCH signing serialization from
 * compilation context.
 */
export const generateSigningSerializationComponentsBch = (context) => ({
    correspondingOutput: context.inputIndex < context.transaction.outputs.length
        ? encodeTransactionOutput(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        context.transaction.outputs[context.inputIndex])
        : undefined,
    locktime: context.transaction.locktime,
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    outpointIndex: context.transaction.inputs[context.inputIndex].outpointIndex,
    outpointTransactionHash: 
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    context.transaction.inputs[context.inputIndex].outpointTransactionHash,
    outputTokenPrefix: encodeTokenPrefix(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    context.sourceOutputs[context.inputIndex].token),
    outputValue: valueSatoshisToBin(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    context.sourceOutputs[context.inputIndex].valueSatoshis),
    sequenceNumber: 
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    context.transaction.inputs[context.inputIndex].sequenceNumber,
    transactionOutpoints: encodeTransactionOutpoints(context.transaction.inputs),
    transactionOutputs: encodeTransactionOutputsForSigning(context.transaction.outputs),
    transactionSequenceNumbers: encodeTransactionInputSequenceNumbersForSigning(context.transaction.inputs),
    transactionUtxos: encodeTransactionOutputsForSigning(context.sourceOutputs),
    version: context.transaction.version,
});
/**
 * @deprecated Alias of `generateSigningSerializationComponentsBch` for backwards-compatibility.
 */
export const generateSigningSerializationComponentsBCH = generateSigningSerializationComponentsBch;
/**
 * Generate the signing serialization for a particular transaction input
 * following the algorithm required by the provided `signingSerializationType`.
 *
 * Note: When validating transactions with multiple signatures,
 * performance-critical applications should use a memoized sha256 implementation
 * to avoid re-computing hashes.
 */
export const generateSigningSerializationBch = (context, { coveredBytecode, signingSerializationType, }, sha256 = internalSha256) => encodeSigningSerializationBch({
    ...generateSigningSerializationComponentsBch(context),
    coveredBytecode,
    signingSerializationType,
}, sha256);
/**
 * @deprecated Alias of `generateSigningSerializationBch` for backwards-compatibility.
 */
export const generateSigningSerializationBCH = generateSigningSerializationBch;
/**
 * @param signingSerializationType - the 32-bit number indicating the signing
 * serialization algorithm to use
 */
export const isLegacySigningSerialization = (signingSerializationType) => {
    // eslint-disable-next-line no-bitwise, @typescript-eslint/no-magic-numbers
    const forkValue = signingSerializationType >> 8;
    // eslint-disable-next-line no-bitwise, @typescript-eslint/no-magic-numbers
    const newForkValue = (forkValue ^ 0xdead) | 0xff0000;
    // eslint-disable-next-line no-bitwise, @typescript-eslint/no-magic-numbers
    const sighashType = (newForkValue << 8) | (signingSerializationType & 0xff);
    // eslint-disable-next-line no-bitwise
    return (sighashType & SigningSerializationFlag.forkId) === 0;
};
//# sourceMappingURL=signing-serialization.js.map