import type { Input, MaybeReadResult, Output, ReadPosition, Sha256, TransactionCommon } from '../lib.js';
import { NonFungibleTokenCapability } from './transaction-types.js';
/**
 * Encode a single input for inclusion in an encoded transaction.
 *
 * @param input - the input to encode
 */
export declare const encodeTransactionInput: (input: Input) => Uint8Array;
export declare enum TransactionDecodingError {
    transaction = "Error reading transaction.",
    endsWithUnexpectedBytes = "Error decoding transaction: the provided input includes unexpected bytes after the encoded transaction.",
    input = "Error reading transaction input.",
    inputs = "Error reading transaction inputs.",
    output = "Error reading transaction output.",
    outputs = "Error reading transaction outputs.",
    outputsEndWithUnexpectedBytes = "Error decoding transaction outputs: the provided serialization includes unexpected bytes after the encoded transaction outputs.",
    lockingBytecodeLength = "Error reading locking bytecode length."
}
/**
 * Read a transaction {@link Input} from the provided {@link ReadPosition},
 * returning either an error message (as a string) or an object containing the
 * {@link Input} and the next {@link ReadPosition}.
 * @param position - the {@link ReadPosition} at which to start reading the
 * transaction output
 */
export declare const readTransactionInput: (position: ReadPosition) => MaybeReadResult<Input>;
/**
 * Encode a set of {@link Input}s for inclusion in an encoded transaction
 * including the prefixed number of inputs.
 *
 * Format: [CompactUint: input count] [encoded inputs]
 *
 * @param inputs - the set of inputs to encode
 */
export declare const encodeTransactionInputs: (inputs: Input[]) => Uint8Array;
/**
 * Read a set of transaction {@link Input}s beginning at {@link ReadPosition}.
 * A CompactUint will be read to determine the number of inputs, and that
 * number of transaction inputs will be read and returned. Returns either an
 * error message (as a string) or an object containing the array of inputs and
 * the next {@link ReadPosition}.
 *
 * @param position - the {@link ReadPosition} at which to start reading the
 * transaction inputs
 */
export declare const readTransactionInputs: (position: ReadPosition) => MaybeReadResult<Input[]>;
export declare const nftCapabilityNumberToLabel: readonly [NonFungibleTokenCapability.none, NonFungibleTokenCapability.mutable, NonFungibleTokenCapability.minting];
export declare const nftCapabilityLabelToNumber: {
    [key in NonFungibleTokenCapability]: number;
};
export declare enum CashTokenDecodingError {
    invalidPrefix = "Error reading token prefix.",
    insufficientLength = "Invalid token prefix: insufficient length.",
    reservedBit = "Invalid token prefix: reserved bit is set.",
    invalidCapability = "Invalid token prefix: capability must be none (0), mutable (1), or minting (2).",
    commitmentWithoutNft = "Invalid token prefix: commitment requires an NFT.",
    capabilityWithoutNft = "Invalid token prefix: capability requires an NFT.",
    commitmentLengthZero = "Invalid token prefix: if encoded, commitment length must be greater than 0.",
    invalidCommitment = "Invalid token prefix: invalid non-fungible token commitment.",
    invalidAmountEncoding = "Invalid token prefix: invalid fungible token amount encoding.",
    zeroAmount = "Invalid token prefix: if encoded, fungible token amount must be greater than 0.",
    excessiveAmount = "Invalid token prefix: exceeds maximum fungible token amount of 9223372036854775807.",
    noTokens = "Invalid token prefix: must encode at least one token."
}
/**
 * Read a token amount from the provided {@link ReadPosition}, returning either
 * an error message (as a string) or an object containing the value and the next
 * {@link ReadPosition}.
 *
 * @param position - the {@link ReadPosition} at which to start reading the
 * token amount.
 */
export declare const readTokenAmount: (position: ReadPosition) => MaybeReadResult<bigint>;
/**
 * Attempt to read a transaction {@link Output}'s token prefix from the provided
 * {@link ReadPosition}, returning either an error message (as a string) or an
 * object containing the (optional) token information and the
 * next {@link ReadPosition}.
 *
 * Rather than using this function directly, most applications
 * should use {@link readLockingBytecodeWithPrefix}.
 *
 * @param position - the {@link ReadPosition} at which to start reading the
 * token prefix
 */
export declare const readTokenPrefix: (position: ReadPosition) => MaybeReadResult<{
    token?: NonNullable<Output["token"]>;
}>;
/**
 * Read the locking bytecode and token prefix (if present) of a transaction
 * {@link Output}, beginning at the `CompactUint` indicating the
 * combined length.
 * @param position - the {@link ReadPosition} at which to start reading the
 * optional token prefix and locking bytecode
 */
export declare const readLockingBytecodeWithPrefix: (position: ReadPosition) => MaybeReadResult<{
    lockingBytecode: Uint8Array;
    token?: NonNullable<Output["token"]>;
}>;
/**
 * Read a transaction {@link Output} from the provided {@link ReadPosition},
 * returning either an error message (as a string) or an object containing the
 * {@link Output} and the next {@link ReadPosition}.
 *
 * @param position - the {@link ReadPosition} at which to start reading the
 * transaction output
 */
export declare const readTransactionOutput: (position: ReadPosition) => MaybeReadResult<Output>;
/**
 * Given {@link Output.token} data, encode a token prefix.
 *
 * This function does not fail, but returns an empty Uint8Array if the token
 * data does not encode any tokens (even if `token.category` is set).
 *
 * @param token - the token data to encode
 */
export declare const encodeTokenPrefix: (token: Output["token"]) => Uint8Array;
/**
 * Encode a single {@link Output} for inclusion in an encoded transaction.
 *
 * @param output - the output to encode
 */
export declare const encodeTransactionOutput: (output: Output) => Uint8Array;
/**
 * Read a set of transaction {@link Output}s beginning at {@link ReadPosition}.
 * A CompactUint will be read to determine the number of outputs, and that
 * number of transaction outputs will be read and returned. Returns either an
 * error message (as a string) or an object containing the array of outputs and
 * the next {@link ReadPosition}.
 *
 * @param position - the {@link ReadPosition} at which to start reading the
 * transaction outputs
 */
export declare const readTransactionOutputs: (position: ReadPosition) => MaybeReadResult<Output[]>;
/**
 * Decode a CompactUint-prefixed series of Transaction {@link Output}s
 * according to the version 1/2 P2P network transaction format.
 *
 * This function verifies that the provided `bin` contains one `CompactUint`
 * followed by the indicated number of serialized transaction outputs with no
 * additional data. To read a transaction from a
 * specific location within a `Uint8Array`, use {@link readTransactionCommon}.
 *
 * For the reverse, see {@link encodeTransactionOutputs}.
 *
 * @param bin - the encoded transaction to decode
 */
export declare const decodeTransactionOutputs: (bin: Uint8Array) => Output[] | string;
/**
 * Encode a set of {@link Output}s for inclusion in an encoded transaction
 * including the prefixed number of outputs. Note, this encoding differs from
 * {@link encodeTransactionOutputsForSigning} (used for signing serializations).
 *
 * Format: `[CompactUint: output count] [encoded outputs]`
 *
 * For the reverse, see {@link decodeTransactionOutputs}.
 *
 * @param outputs - the set of outputs to encode
 */
export declare const encodeTransactionOutputs: (outputs: Output[]) => Uint8Array;
/**
 * Read a version 1 or 2 transaction beginning at {@link ReadPosition},
 * returning either an error message (as a string) or an object containing the
 * {@link Transaction} and the next {@link ReadPosition}. Rather than using this
 * function directly, most applications should
 * use {@link decodeTransactionCommon}.
 *
 * @param position - the {@link ReadPosition} at which to start reading the
 * {@link TransactionCommon}
 */
export declare const readTransactionCommon: (position: ReadPosition) => MaybeReadResult<TransactionCommon>;
export declare const readTransaction: (position: ReadPosition) => MaybeReadResult<TransactionCommon>;
export declare const readTransactionOutputNonTokenAware: (pos: ReadPosition) => MaybeReadResult<Output>;
export declare const readTransactionOutputsNonTokenAware: (pos: ReadPosition) => MaybeReadResult<Output[]>;
/**
 * Read a version 1 or 2 transaction beginning at a {@link ReadPosition} as if
 * CHIP-2022-02-CashTokens were not deployed, returning either an error message
 * (as a string) or an object containing the {@link Transaction} and the next
 * {@link ReadPosition}.
 *
 * This function emulates legacy transaction parsing to test behavior prior to
 * deployment of CHIP-2022-02-CashTokens; most applications should instead
 * use {@link readTransactionCommon}.
 *
 * @param position - the {@link ReadPosition} at which to start reading the
 * {@link TransactionCommon}
 */
export declare const readTransactionNonTokenAware: (position: ReadPosition) => MaybeReadResult<TransactionCommon>;
/**
 * Decode a {@link TransactionCommon} according to the version 1/2 P2P network
 * transaction format.
 *
 * This function verifies that the provided `bin` contains only one transaction
 * and no additional data. To read a transaction from a specific location within
 * a `Uint8Array`, use {@link readTransactionCommon}.
 *
 * For the reverse, see {@link encodeTransactionCommon}.
 *
 * @param bin - the encoded transaction to decode
 */
export declare const decodeTransactionCommon: (bin: Uint8Array) => TransactionCommon | string;
export declare const decodeTransactionBch: (bin: Uint8Array) => TransactionCommon | string;
export declare const decodeTransaction: (bin: Uint8Array) => TransactionCommon | string;
/**
 * @deprecated Alias of `decodeTransactionBch` for backwards-compatibility.
 */
export declare const decodeTransactionBCH: (bin: Uint8Array) => TransactionCommon | string;
/**
 * Decode a {@link TransactionCommon} from a trusted source according to the
 * version 1/2 P2P network transaction format.
 *
 * Note: this method throws runtime errors when attempting to decode messages
 * which do not properly follow the transaction format. If the input is
 * untrusted, use {@link decodeTransactionCommon}.
 *
 * @param bin - the raw message to decode
 */
export declare const decodeTransactionUnsafeCommon: (bin: Uint8Array) => TransactionCommon;
export declare const decodeTransactionUnsafeBch: (bin: Uint8Array) => TransactionCommon;
export declare const decodeTransactionUnsafe: (bin: Uint8Array) => TransactionCommon;
/**
 * @deprecated Alias of `decodeTransactionUnsafeBch` for backwards-compatibility.
 */
export declare const decodeTransactionUnsafeBCH: (bin: Uint8Array) => TransactionCommon;
/**
 * Encode a {@link Transaction} using the standard P2P network format. This
 * serialization is also used when computing the transaction's hash (A.K.A.
 * "transaction ID" or "TXID").
 *
 * For the reverse, see {@link decodeTransactionCommon}.
 */
export declare const encodeTransactionCommon: (tx: TransactionCommon) => Uint8Array;
export declare const encodeTransactionBch: (tx: TransactionCommon) => Uint8Array;
export declare const encodeTransaction: (tx: TransactionCommon) => Uint8Array;
/**
 * @deprecated Alias of `decodeTransactionUnsafeBch` for backwards-compatibility.
 */
export declare const encodeTransactionBCH: (tx: TransactionCommon) => Uint8Array;
/**
 * Compute a transaction hash (A.K.A. "transaction ID" or "TXID") from an
 * encoded transaction in P2P network message order. This is the byte order
 * produced by most sha256 libraries and used by encoded P2P network messages.
 * It is also the byte order produced by `OP_SHA256` and `OP_HASH256` in the
 * virtual machine.
 *
 * @returns the transaction hash in P2P network message byte order
 *
 * @param transaction - the encoded transaction
 * @param sha256 - an implementation of sha256
 */
export declare const hashTransactionP2pOrder: (transaction: Uint8Array, sha256?: {
    hash: Sha256["hash"];
}) => Uint8Array;
/**
 * Compute a transaction hash (A.K.A. "transaction ID" or "TXID") from an
 * encoded transaction in user interface byte order. This is the byte order
 * typically used by block explorers, wallets, and other user interfaces.
 *
 * To return this result as a `string`, use {@link hashTransaction}.
 *
 * @returns the transaction hash in User Interface byte order
 *
 * @param transaction - the encoded transaction
 * @param sha256 - an implementation of sha256
 */
export declare const hashTransactionUiOrder: (transaction: Uint8Array, sha256?: {
    hash: Sha256["hash"];
}) => Uint8Array;
/**
 * Return an encoded {@link Transaction}'s hash/ID as a string in user interface
 * byte order (typically used by wallets and block explorers).
 *
 * To return this result as a `Uint8Array`, use {@link hashTransactionUiOrder}.
 *
 * @param transaction - the encoded transaction
 */
export declare const hashTransaction: (transaction: Uint8Array) => string;
/**
 * Encode all outpoints in a series of transaction inputs. (For use in
 * {@link hashTransactionOutpoints}.)
 *
 * @param inputs - the series of inputs from which to extract the outpoints
 */
export declare const encodeTransactionOutpoints: (inputs: {
    outpointIndex: number;
    outpointTransactionHash: Uint8Array;
}[]) => Uint8Array;
/**
 * Encode an array of transaction {@link Output}s for use in transaction signing
 * serializations. Note, this encoding differs from
 * {@link encodeTransactionOutputs} (used for encoding full transactions).
 *
 * @param outputs - the array of outputs to encode
 */
export declare const encodeTransactionOutputsForSigning: (outputs: Output[]) => Uint8Array;
/**
 * Encode the sequence numbers of an array of transaction inputs for use in
 * transaction signing serializations.
 *
 * @param inputs - the array of inputs from which to extract the sequence
 * numbers
 */
export declare const encodeTransactionInputSequenceNumbersForSigning: (inputs: {
    sequenceNumber: number;
}[]) => Uint8Array;
//# sourceMappingURL=transaction-encoding.d.ts.map