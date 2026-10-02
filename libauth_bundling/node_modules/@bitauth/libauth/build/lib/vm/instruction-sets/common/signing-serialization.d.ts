import type { CompilationContextBch, Sha256 } from '../../../lib.js';
/**
 * A.K.A. `sighash` flags
 */
export declare enum SigningSerializationFlag {
    /**
     * A.K.A. `SIGHASH_ALL`
     */
    allOutputs = 1,
    /**
     * A.K.A `SIGHASH_NONE`
     */
    noOutputs = 2,
    /**
     * A.K.A. `SIGHASH_SINGLE`
     */
    correspondingOutput = 3,
    /**
     * A.K.A. `SIGHASH_UTXOS`
     */
    utxos = 32,
    forkId = 64,
    /**
     * A.K.A `ANYONE_CAN_PAY`/`SIGHASH_ANYONECANPAY`
     */
    singleInput = 128
}
export declare enum SigningSerializationType {
    allOutputs = 65,
    allOutputsAllUtxos = 97,
    allOutputsSingleInput = 193,
    correspondingOutput = 67,
    correspondingOutputAllUtxos = 99,
    correspondingOutputSingleInput = 195,
    noOutputs = 66,
    noOutputsAllUtxos = 98,
    noOutputsSingleInput = 194
}
export declare const SigningSerializationTypeBch: typeof SigningSerializationType;
/**
 * @deprecated Alias of `SigningSerializationTypeBch` for backwards-compatibility.
 */
export declare const SigningSerializationTypeBCH: typeof SigningSerializationType;
/**
 * Return the proper `hashPrevouts` value for a given a signing serialization
 * type.
 */
export declare const hashPrevouts: ({ signingSerializationType, transactionOutpoints, }: {
    /**
     * The signing serialization type to test
     */
    signingSerializationType: Uint8Array;
    /**
     * See {@link generateSigningSerializationComponentsBch}
     */
    transactionOutpoints: Uint8Array;
}, sha256?: {
    hash: Sha256["hash"];
}) => Uint8Array;
/**
 * Return the proper `hashUtxos` value for a given a signing serialization
 * type.
 */
export declare const hashUtxos: ({ signingSerializationType, transactionUtxos, }: {
    /**
     * The signing serialization type to test
     */
    signingSerializationType: Uint8Array;
    /**
     * See {@link generateSigningSerializationComponentsBch}
     */
    transactionUtxos: Uint8Array;
}, sha256?: {
    hash: Sha256["hash"];
}) => Uint8Array;
/**
 * Return the proper `hashSequence` value for a given a signing serialization
 * type.
 */
export declare const hashSequence: ({ signingSerializationType, transactionSequenceNumbers, }: {
    /**
     * The signing serialization type to test
     */
    signingSerializationType: Uint8Array;
    /**
     * See {@link generateSigningSerializationComponentsBch}
     */
    transactionSequenceNumbers: Uint8Array;
}, sha256?: {
    hash: Sha256["hash"];
}) => Uint8Array;
/**
 * Return the proper `hashOutputs` value for a given a signing serialization
 * type.
 */
export declare const hashOutputs: ({ correspondingOutput, signingSerializationType, transactionOutputs, }: {
    /**
     * The signing serialization type to test
     */
    signingSerializationType: Uint8Array;
    /**
     * See {@link generateSigningSerializationComponentsBch}
     */
    transactionOutputs: Uint8Array;
    /**
     * See {@link generateSigningSerializationComponentsBch}
     */
    correspondingOutput: Uint8Array | undefined;
}, sha256?: {
    hash: Sha256["hash"];
}) => Uint8Array;
/**
 * Encode the signature-protected properties of a transaction following the
 * algorithm required by the `signingSerializationType` of a signature.
 *
 * Note: When validating transactions with multiple signatures,
 * performance-critical applications should use a memoized sha256 implementation
 * to avoid re-computing hashes.
 */
export declare const encodeSigningSerializationBch: ({ correspondingOutput, coveredBytecode, forkId, locktime, outpointIndex, outpointTransactionHash, outputTokenPrefix, outputValue, sequenceNumber, signingSerializationType, transactionOutpoints, transactionOutputs, transactionSequenceNumbers, transactionUtxos, version, }: {
    /**
     * The version number of the transaction.
     */
    version: number;
    /**
     * The serialization of all input outpoints (A.K.A. {@link hashPrevouts}) –
     * used if `ANYONECANPAY` is not set.
     */
    transactionOutpoints: Uint8Array;
    /**
     * The serialization of all input sequence numbers. (A.K.A.
     * {@link hashSequence}) – used if none of `ANYONECANPAY`, `SINGLE`, or
     * `NONE` are set.
     */
    transactionSequenceNumbers: Uint8Array;
    /**
     * The big-endian (standard) transaction hash of the outpoint being spent.
     */
    outpointTransactionHash: Uint8Array;
    /**
     * The index of the outpoint being spent in `outpointTransactionHash`.
     */
    outpointIndex: number;
    /**
     * The encoded script currently being executed, beginning at the
     * `lastCodeSeparator`.
     */
    coveredBytecode: Uint8Array;
    /**
     * The encoded token prefix of the output being spent
     * (see {@link encodeTokenPrefix}).
     *
     * If the output includes no tokens, a zero-length Uint8Array.
     */
    outputTokenPrefix: Uint8Array;
    /**
     * The 8-byte `Uint64LE`-encoded value of the outpoint in satoshis (see
     * {@link bigIntToBinUint64LE}).
     */
    outputValue: Uint8Array;
    /**
     * The sequence number of the input (A.K.A. `nSequence`).
     */
    sequenceNumber: number;
    /**
     * The serialization of the output at the same index as this input (A.K.A.
     * {@link hashOutputs} with `SIGHASH_SINGLE`) – only used if `SINGLE`
     * is set.
     */
    correspondingOutput: Uint8Array | undefined;
    /**
     * The serialization of output amounts and locking bytecode values (A.K.A.
     * {@link hashOutputs} with `SIGHASH_ALL`) – only used if `ALL` is set.
     */
    transactionOutputs: Uint8Array;
    /**
     * The signing serialization of all UTXOs spent by the transaction's inputs
     * (concatenated in input order).
     */
    transactionUtxos: Uint8Array;
    /**
     * The locktime of the transaction.
     */
    locktime: number;
    /**
     * The signing serialization type of the signature (A.K.A. `sighash` type).
     */
    signingSerializationType: Uint8Array;
    /**
     * While a bitcoin-encoded signature only includes a single byte to encode the
     * signing serialization type, a 3-byte forkId can be appended to provide
     * replay-protection between different forks. (See Bitcoin Cash's Replay
     * Protected Sighash spec for details.)
     */
    forkId?: Uint8Array;
}, sha256?: {
    hash: Sha256["hash"];
}) => Uint8Array;
/**
 * @deprecated Alias of `encodeSigningSerializationBch` for backwards-compatibility.
 */
export declare const encodeSigningSerializationBCH: ({ correspondingOutput, coveredBytecode, forkId, locktime, outpointIndex, outpointTransactionHash, outputTokenPrefix, outputValue, sequenceNumber, signingSerializationType, transactionOutpoints, transactionOutputs, transactionSequenceNumbers, transactionUtxos, version, }: {
    /**
     * The version number of the transaction.
     */
    version: number;
    /**
     * The serialization of all input outpoints (A.K.A. {@link hashPrevouts}) –
     * used if `ANYONECANPAY` is not set.
     */
    transactionOutpoints: Uint8Array;
    /**
     * The serialization of all input sequence numbers. (A.K.A.
     * {@link hashSequence}) – used if none of `ANYONECANPAY`, `SINGLE`, or
     * `NONE` are set.
     */
    transactionSequenceNumbers: Uint8Array;
    /**
     * The big-endian (standard) transaction hash of the outpoint being spent.
     */
    outpointTransactionHash: Uint8Array;
    /**
     * The index of the outpoint being spent in `outpointTransactionHash`.
     */
    outpointIndex: number;
    /**
     * The encoded script currently being executed, beginning at the
     * `lastCodeSeparator`.
     */
    coveredBytecode: Uint8Array;
    /**
     * The encoded token prefix of the output being spent
     * (see {@link encodeTokenPrefix}).
     *
     * If the output includes no tokens, a zero-length Uint8Array.
     */
    outputTokenPrefix: Uint8Array;
    /**
     * The 8-byte `Uint64LE`-encoded value of the outpoint in satoshis (see
     * {@link bigIntToBinUint64LE}).
     */
    outputValue: Uint8Array;
    /**
     * The sequence number of the input (A.K.A. `nSequence`).
     */
    sequenceNumber: number;
    /**
     * The serialization of the output at the same index as this input (A.K.A.
     * {@link hashOutputs} with `SIGHASH_SINGLE`) – only used if `SINGLE`
     * is set.
     */
    correspondingOutput: Uint8Array | undefined;
    /**
     * The serialization of output amounts and locking bytecode values (A.K.A.
     * {@link hashOutputs} with `SIGHASH_ALL`) – only used if `ALL` is set.
     */
    transactionOutputs: Uint8Array;
    /**
     * The signing serialization of all UTXOs spent by the transaction's inputs
     * (concatenated in input order).
     */
    transactionUtxos: Uint8Array;
    /**
     * The locktime of the transaction.
     */
    locktime: number;
    /**
     * The signing serialization type of the signature (A.K.A. `sighash` type).
     */
    signingSerializationType: Uint8Array;
    /**
     * While a bitcoin-encoded signature only includes a single byte to encode the
     * signing serialization type, a 3-byte forkId can be appended to provide
     * replay-protection between different forks. (See Bitcoin Cash's Replay
     * Protected Sighash spec for details.)
     */
    forkId?: Uint8Array;
}, sha256?: {
    hash: Sha256["hash"];
}) => Uint8Array;
/**
 * The signing serialization components that are shared between all of the
 * inputs in a transaction.
 */
export type SigningSerializationTransactionComponentsBch = {
    /**
     * A time or block height at which the transaction is considered valid (and
     * can be added to the block chain). This allows signers to create time-locked
     * transactions that may only become valid in the future.
     */
    locktime: number;
    /**
     * A.K.A. the serialization for {@link hashPrevouts}
     *
     * The signing serialization of all input outpoints. (See BIP143 or Bitcoin
     * Cash's Replay Protected Sighash spec for details.)
     */
    transactionOutpoints: Uint8Array;
    transactionOutputs: Uint8Array;
    transactionSequenceNumbers: Uint8Array;
    /**
     * A.K.A. the serialization for {@link hashUtxos}
     *
     * The signing serialization of all UTXOs spent by the transaction's inputs
     * (concatenated in input order).
     */
    transactionUtxos: Uint8Array;
    /**
     * The transaction's version.
     */
    version: number;
};
/**
 * @deprecated Alias of `SigningSerializationTransactionComponentsBch` for backwards-compatibility.
 */
export type SigningSerializationTransactionComponentsBCH = SigningSerializationTransactionComponentsBch;
/**
 * All signing serialization components for a particular transaction input.
 */
export type SigningSerializationComponentsBch = SigningSerializationTransactionComponentsBch & {
    correspondingOutput: Uint8Array | undefined;
    /**
     * The index (within the previous transaction) of the outpoint being spent by
     * this input.
     */
    outpointIndex: number;
    /**
     * The hash/ID of the transaction from which the outpoint being spent by this
     * input originated.
     */
    outpointTransactionHash: Uint8Array;
    /**
     * The 8-byte `Uint64LE`-encoded value of the output being spent in satoshis
     * (see {@link bigIntToBinUint64LE}).
     */
    outputValue: Uint8Array;
    /**
     * The encoded token prefix of the output being spent
     * (see {@link encodeTokenPrefix}).
     *
     * If the output includes no tokens, a zero-length Uint8Array.
     */
    outputTokenPrefix: Uint8Array;
    /**
     * The `sequenceNumber` associated with the input being validated. See
     * {@link Input.sequenceNumber} for details.
     */
    sequenceNumber: number;
};
/**
 * @deprecated Alias of `SigningSerializationComponentsBch` for backwards-compatibility.
 */
export type SigningSerializationComponentsBCH = SigningSerializationComponentsBch;
/**
 * Generate the encoded components of a BCH signing serialization from
 * compilation context.
 */
export declare const generateSigningSerializationComponentsBch: (context: CompilationContextBch) => SigningSerializationComponentsBch;
/**
 * @deprecated Alias of `generateSigningSerializationComponentsBch` for backwards-compatibility.
 */
export declare const generateSigningSerializationComponentsBCH: (context: CompilationContextBch) => SigningSerializationComponentsBch;
/**
 * Generate the signing serialization for a particular transaction input
 * following the algorithm required by the provided `signingSerializationType`.
 *
 * Note: When validating transactions with multiple signatures,
 * performance-critical applications should use a memoized sha256 implementation
 * to avoid re-computing hashes.
 */
export declare const generateSigningSerializationBch: (context: CompilationContextBch, { coveredBytecode, signingSerializationType, }: {
    /**
     * The encoded script currently being executed, beginning at the
     * `lastCodeSeparator`.
     */
    coveredBytecode: Uint8Array;
    /**
     * The signing serialization type of the signature (A.K.A. `sighash` type).
     */
    signingSerializationType: Uint8Array;
}, sha256?: {
    hash: Sha256["hash"];
}) => Uint8Array;
/**
 * @deprecated Alias of `generateSigningSerializationBch` for backwards-compatibility.
 */
export declare const generateSigningSerializationBCH: (context: CompilationContextBch, { coveredBytecode, signingSerializationType, }: {
    /**
     * The encoded script currently being executed, beginning at the
     * `lastCodeSeparator`.
     */
    coveredBytecode: Uint8Array;
    /**
     * The signing serialization type of the signature (A.K.A. `sighash` type).
     */
    signingSerializationType: Uint8Array;
}, sha256?: {
    hash: Sha256["hash"];
}) => Uint8Array;
/**
 * @param signingSerializationType - the 32-bit number indicating the signing
 * serialization algorithm to use
 */
export declare const isLegacySigningSerialization: (signingSerializationType: number) => boolean;
//# sourceMappingURL=signing-serialization.d.ts.map