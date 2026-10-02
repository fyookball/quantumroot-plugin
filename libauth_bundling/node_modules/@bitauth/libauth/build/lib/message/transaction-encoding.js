import { hash256, sha256 as internalSha256 } from '../crypto/crypto.js';
import { bigIntToCompactUint, binToHex, flattenBinArray, formatError, numberToBinUint32LE, readCompactUintMinimal, readItemCount, readMultiple, valueSatoshisToBin, } from '../format/format.js';
import { readBytes, readCompactUintPrefixedBin, readRemainingBytes, readUint32LE, readUint64LE, } from './read-components.js';
import { NonFungibleTokenCapability } from './transaction-types.js';
/**
 * Encode a single input for inclusion in an encoded transaction.
 *
 * @param input - the input to encode
 */
export const encodeTransactionInput = (input) => flattenBinArray([
    input.outpointTransactionHash.slice().reverse(),
    numberToBinUint32LE(input.outpointIndex),
    bigIntToCompactUint(BigInt(input.unlockingBytecode.length)),
    input.unlockingBytecode,
    numberToBinUint32LE(input.sequenceNumber),
]);
export var TransactionDecodingError;
(function (TransactionDecodingError) {
    TransactionDecodingError["transaction"] = "Error reading transaction.";
    TransactionDecodingError["endsWithUnexpectedBytes"] = "Error decoding transaction: the provided input includes unexpected bytes after the encoded transaction.";
    TransactionDecodingError["input"] = "Error reading transaction input.";
    TransactionDecodingError["inputs"] = "Error reading transaction inputs.";
    TransactionDecodingError["output"] = "Error reading transaction output.";
    TransactionDecodingError["outputs"] = "Error reading transaction outputs.";
    TransactionDecodingError["outputsEndWithUnexpectedBytes"] = "Error decoding transaction outputs: the provided serialization includes unexpected bytes after the encoded transaction outputs.";
    TransactionDecodingError["lockingBytecodeLength"] = "Error reading locking bytecode length.";
})(TransactionDecodingError || (TransactionDecodingError = {}));
/**
 * Read a transaction {@link Input} from the provided {@link ReadPosition},
 * returning either an error message (as a string) or an object containing the
 * {@link Input} and the next {@link ReadPosition}.
 * @param position - the {@link ReadPosition} at which to start reading the
 * transaction output
 */
export const readTransactionInput = (position) => {
    const inputRead = readMultiple(position, [
        readBytes(32 /* TransactionConstants.outpointTransactionHashLength */),
        readUint32LE,
        readCompactUintPrefixedBin,
        readUint32LE,
    ]);
    if (typeof inputRead === 'string') {
        return formatError(TransactionDecodingError.input, inputRead);
    }
    const { position: nextPosition, result: [outpointTransactionHash, outpointIndex, unlockingBytecode, sequenceNumber,], } = inputRead;
    return {
        position: nextPosition,
        result: {
            outpointIndex,
            outpointTransactionHash: outpointTransactionHash.reverse(),
            sequenceNumber,
            unlockingBytecode,
        },
    };
};
/**
 * Encode a set of {@link Input}s for inclusion in an encoded transaction
 * including the prefixed number of inputs.
 *
 * Format: [CompactUint: input count] [encoded inputs]
 *
 * @param inputs - the set of inputs to encode
 */
export const encodeTransactionInputs = (inputs) => flattenBinArray([
    bigIntToCompactUint(BigInt(inputs.length)),
    ...inputs.map(encodeTransactionInput),
]);
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
export const readTransactionInputs = (position) => {
    const inputsRead = readItemCount(position, readTransactionInput);
    if (typeof inputsRead === 'string') {
        return formatError(TransactionDecodingError.inputs, inputsRead);
    }
    return inputsRead;
};
const maximumTokenAmount = 9223372036854775807n;
export const nftCapabilityNumberToLabel = [
    NonFungibleTokenCapability.none,
    NonFungibleTokenCapability.mutable,
    NonFungibleTokenCapability.minting,
];
export const nftCapabilityLabelToNumber = {
    [NonFungibleTokenCapability.none]: 0,
    [NonFungibleTokenCapability.mutable]: 1,
    [NonFungibleTokenCapability.minting]: 2,
};
export var CashTokenDecodingError;
(function (CashTokenDecodingError) {
    CashTokenDecodingError["invalidPrefix"] = "Error reading token prefix.";
    CashTokenDecodingError["insufficientLength"] = "Invalid token prefix: insufficient length.";
    CashTokenDecodingError["reservedBit"] = "Invalid token prefix: reserved bit is set.";
    CashTokenDecodingError["invalidCapability"] = "Invalid token prefix: capability must be none (0), mutable (1), or minting (2).";
    CashTokenDecodingError["commitmentWithoutNft"] = "Invalid token prefix: commitment requires an NFT.";
    CashTokenDecodingError["capabilityWithoutNft"] = "Invalid token prefix: capability requires an NFT.";
    CashTokenDecodingError["commitmentLengthZero"] = "Invalid token prefix: if encoded, commitment length must be greater than 0.";
    CashTokenDecodingError["invalidCommitment"] = "Invalid token prefix: invalid non-fungible token commitment.";
    CashTokenDecodingError["invalidAmountEncoding"] = "Invalid token prefix: invalid fungible token amount encoding.";
    CashTokenDecodingError["zeroAmount"] = "Invalid token prefix: if encoded, fungible token amount must be greater than 0.";
    CashTokenDecodingError["excessiveAmount"] = "Invalid token prefix: exceeds maximum fungible token amount of 9223372036854775807.";
    CashTokenDecodingError["noTokens"] = "Invalid token prefix: must encode at least one token.";
})(CashTokenDecodingError || (CashTokenDecodingError = {}));
/**
 * Read a token amount from the provided {@link ReadPosition}, returning either
 * an error message (as a string) or an object containing the value and the next
 * {@link ReadPosition}.
 *
 * @param position - the {@link ReadPosition} at which to start reading the
 * token amount.
 */
export const readTokenAmount = (position) => {
    const amountRead = readCompactUintMinimal(position);
    if (typeof amountRead === 'string') {
        return formatError(CashTokenDecodingError.invalidAmountEncoding, amountRead);
    }
    if (amountRead.result > maximumTokenAmount) {
        return formatError(CashTokenDecodingError.excessiveAmount, `Encoded amount: ${amountRead.result}`);
    }
    if (amountRead.result === 0n) {
        return formatError(CashTokenDecodingError.zeroAmount);
    }
    return amountRead;
};
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
// eslint-disable-next-line complexity
export const readTokenPrefix = (position) => {
    const { bin, index } = position;
    if (bin[index] !== 239 /* CashTokens.PREFIX_TOKEN */) {
        return { position, result: {} };
    }
    if (bin.length < index + 34 /* CashTokens.minimumPrefixLength */) {
        return formatError(CashTokenDecodingError.insufficientLength, `The minimum possible length is ${34 /* CashTokens.minimumPrefixLength */}. Missing bytes: ${34 /* CashTokens.minimumPrefixLength */ - (bin.length - index)}`);
    }
    const category = bin
        .slice(index + 1, index + 33 /* CashTokens.tokenBitfieldIndex */)
        .reverse();
    const tokenBitfield = bin[index + 33 /* CashTokens.tokenBitfieldIndex */]; // eslint-disable-line @typescript-eslint/no-non-null-assertion
    /* eslint-disable no-bitwise */
    const prefixStructure = tokenBitfield & 240 /* CashTokens.tokenFormatMask */;
    if ((prefixStructure & 128 /* CashTokens.RESERVED_BIT */) !== 0) {
        return formatError(CashTokenDecodingError.reservedBit, `Bitfield: 0b${tokenBitfield.toString(2 /* CashTokens.useBinaryOutput */)}`);
    }
    const nftCapabilityInt = tokenBitfield & 15 /* CashTokens.nftCapabilityMask */;
    if (nftCapabilityInt > 2 /* CashTokens.maximumCapability */) {
        return formatError(CashTokenDecodingError.invalidCapability, `Capability value: ${nftCapabilityInt}`);
    }
    const capability = nftCapabilityNumberToLabel[nftCapabilityInt]; // eslint-disable-line @typescript-eslint/no-non-null-assertion
    const hasNft = (prefixStructure & 32 /* CashTokens.HAS_NFT */) !== 0;
    const hasCommitmentLength = (prefixStructure & 64 /* CashTokens.HAS_COMMITMENT_LENGTH */) !== 0;
    if (hasCommitmentLength && !hasNft) {
        return formatError(CashTokenDecodingError.commitmentWithoutNft, `Bitfield: 0b${tokenBitfield.toString(2 /* CashTokens.useBinaryOutput */)}`);
    }
    const hasAmount = (prefixStructure & 16 /* CashTokens.HAS_AMOUNT */) !== 0;
    /* eslint-enable no-bitwise */
    const nextPosition = {
        bin,
        index: index + 33 /* CashTokens.tokenBitfieldIndex */ + 1,
    };
    if (hasNft) {
        const commitmentRead = hasCommitmentLength
            ? readCompactUintPrefixedBin(nextPosition)
            : { position: nextPosition, result: Uint8Array.of() };
        if (typeof commitmentRead === 'string') {
            return formatError(CashTokenDecodingError.invalidCommitment, commitmentRead);
        }
        if (hasCommitmentLength && commitmentRead.result.length === 0) {
            return formatError(CashTokenDecodingError.commitmentLengthZero);
        }
        const amountRead = hasAmount
            ? readTokenAmount(commitmentRead.position)
            : { position: commitmentRead.position, result: 0n };
        if (typeof amountRead === 'string') {
            return amountRead;
        }
        return {
            position: amountRead.position,
            result: {
                token: {
                    amount: amountRead.result,
                    category,
                    nft: { capability, commitment: commitmentRead.result },
                },
            },
        };
    }
    if (capability !== NonFungibleTokenCapability.none) {
        return formatError(CashTokenDecodingError.capabilityWithoutNft, `Bitfield: 0b${tokenBitfield.toString(2 /* CashTokens.useBinaryOutput */)}`);
    }
    if (!hasAmount) {
        return formatError(CashTokenDecodingError.noTokens, `Bitfield: 0b${tokenBitfield.toString(2 /* CashTokens.useBinaryOutput */)}`);
    }
    const amountRead = readTokenAmount(nextPosition);
    if (typeof amountRead === 'string') {
        return amountRead;
    }
    return {
        position: amountRead.position,
        result: { token: { amount: amountRead.result, category } },
    };
};
/**
 * Read the locking bytecode and token prefix (if present) of a transaction
 * {@link Output}, beginning at the `CompactUint` indicating the
 * combined length.
 * @param position - the {@link ReadPosition} at which to start reading the
 * optional token prefix and locking bytecode
 */
export const readLockingBytecodeWithPrefix = (position) => {
    const bytecodeRead = readCompactUintPrefixedBin(position);
    if (typeof bytecodeRead === 'string') {
        return formatError(TransactionDecodingError.lockingBytecodeLength, bytecodeRead);
    }
    const { result: contents, position: nextPosition } = bytecodeRead;
    const contentsRead = readMultiple({ bin: contents, index: 0 }, [
        readTokenPrefix,
        readRemainingBytes,
    ]);
    if (typeof contentsRead === 'string') {
        return formatError(CashTokenDecodingError.invalidPrefix, contentsRead);
    }
    const { result: [{ token }, lockingBytecode], } = contentsRead;
    return {
        position: nextPosition,
        result: { lockingBytecode, ...(token === undefined ? {} : { token }) },
    };
};
/**
 * Read a transaction {@link Output} from the provided {@link ReadPosition},
 * returning either an error message (as a string) or an object containing the
 * {@link Output} and the next {@link ReadPosition}.
 *
 * @param position - the {@link ReadPosition} at which to start reading the
 * transaction output
 */
export const readTransactionOutput = (position) => {
    const outputRead = readMultiple(position, [
        readUint64LE,
        readLockingBytecodeWithPrefix,
    ]);
    if (typeof outputRead === 'string') {
        return formatError(TransactionDecodingError.output, outputRead);
    }
    const { position: nextPosition, result: [valueSatoshis, { lockingBytecode, token }], } = outputRead;
    return {
        position: nextPosition,
        result: {
            lockingBytecode,
            ...(token === undefined ? {} : { token }),
            valueSatoshis,
        },
    };
};
/**
 * Given {@link Output.token} data, encode a token prefix.
 *
 * This function does not fail, but returns an empty Uint8Array if the token
 * data does not encode any tokens (even if `token.category` is set).
 *
 * @param token - the token data to encode
 */
// eslint-disable-next-line complexity
export const encodeTokenPrefix = (token) => {
    if (token === undefined || (token.nft === undefined && token.amount < 1n)) {
        return Uint8Array.of();
    }
    const hasNft = token.nft === undefined ? 0 : 32 /* CashTokens.HAS_NFT */;
    const capabilityInt = token.nft === undefined
        ? 0
        : nftCapabilityLabelToNumber[token.nft.capability];
    const hasCommitmentLength = token.nft !== undefined && token.nft.commitment.length > 0
        ? 64 /* CashTokens.HAS_COMMITMENT_LENGTH */
        : 0;
    const hasAmount = token.amount > 0n ? 16 /* CashTokens.HAS_AMOUNT */ : 0;
    const tokenBitfield = 
    // eslint-disable-next-line no-bitwise
    hasNft | hasCommitmentLength | hasAmount | capabilityInt;
    return flattenBinArray([
        Uint8Array.of(239 /* CashTokens.PREFIX_TOKEN */),
        token.category.slice().reverse(),
        Uint8Array.of(tokenBitfield),
        ...(hasCommitmentLength === 0
            ? []
            : [
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                bigIntToCompactUint(BigInt(token.nft.commitment.length)),
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                token.nft.commitment,
            ]),
        ...(hasAmount === 0 ? [] : [bigIntToCompactUint(token.amount)]),
    ]);
};
/**
 * Encode a single {@link Output} for inclusion in an encoded transaction.
 *
 * @param output - the output to encode
 */
export const encodeTransactionOutput = (output) => {
    const lockingBytecodeField = flattenBinArray([
        encodeTokenPrefix(output.token),
        output.lockingBytecode,
    ]);
    return flattenBinArray([
        valueSatoshisToBin(output.valueSatoshis),
        bigIntToCompactUint(BigInt(lockingBytecodeField.length)),
        lockingBytecodeField,
    ]);
};
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
export const readTransactionOutputs = (position) => {
    const outputsRead = readItemCount(position, readTransactionOutput);
    if (typeof outputsRead === 'string') {
        return formatError(TransactionDecodingError.outputs, outputsRead);
    }
    return outputsRead;
};
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
export const decodeTransactionOutputs = (bin) => {
    const outputsRead = readTransactionOutputs({ bin, index: 0 });
    if (typeof outputsRead === 'string') {
        return outputsRead;
    }
    if (outputsRead.position.index !== bin.length) {
        return formatError(TransactionDecodingError.outputsEndWithUnexpectedBytes, `Last encoded transaction output ends at index ${outputsRead.position.index - 1}, leaving ${bin.length - outputsRead.position.index} remaining byte(s).`);
    }
    return outputsRead.result;
};
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
export const encodeTransactionOutputs = (outputs) => flattenBinArray([
    bigIntToCompactUint(BigInt(outputs.length)),
    ...outputs.map(encodeTransactionOutput),
]);
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
export const readTransactionCommon = (position) => {
    const transactionRead = readMultiple(position, [
        readUint32LE,
        readTransactionInputs,
        readTransactionOutputs,
        readUint32LE,
    ]);
    if (typeof transactionRead === 'string') {
        return formatError(TransactionDecodingError.transaction, transactionRead);
    }
    const { position: nextPosition, result: [version, inputs, outputs, locktime], } = transactionRead;
    return {
        position: nextPosition,
        result: { inputs, locktime, outputs, version },
    };
};
export const readTransaction = readTransactionCommon;
export const readTransactionOutputNonTokenAware = (pos) => {
    const outputRead = readMultiple(pos, [
        readUint64LE,
        readCompactUintPrefixedBin,
    ]);
    if (typeof outputRead === 'string') {
        return formatError(TransactionDecodingError.output, outputRead);
    }
    const { position: nextPosition, result: [valueSatoshis, lockingBytecode], } = outputRead;
    return {
        position: nextPosition,
        result: { lockingBytecode, valueSatoshis },
    };
};
export const readTransactionOutputsNonTokenAware = (pos) => {
    const outputsRead = readItemCount(pos, readTransactionOutputNonTokenAware);
    if (typeof outputsRead === 'string') {
        return formatError(TransactionDecodingError.outputs, outputsRead);
    }
    return outputsRead;
};
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
export const readTransactionNonTokenAware = (position) => {
    const transactionRead = readMultiple(position, [
        readUint32LE,
        readTransactionInputs,
        readTransactionOutputsNonTokenAware,
        readUint32LE,
    ]);
    if (typeof transactionRead === 'string') {
        return formatError(TransactionDecodingError.transaction, transactionRead);
    }
    const { position: nextPosition, result: [version, inputs, outputs, locktime], } = transactionRead;
    return {
        position: nextPosition,
        result: { inputs, locktime, outputs, version },
    };
};
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
export const decodeTransactionCommon = (bin) => {
    const transactionRead = readTransactionCommon({ bin, index: 0 });
    if (typeof transactionRead === 'string') {
        return transactionRead;
    }
    if (transactionRead.position.index !== bin.length) {
        return formatError(TransactionDecodingError.endsWithUnexpectedBytes, `Encoded transaction ends at index ${transactionRead.position.index - 1}, leaving ${bin.length - transactionRead.position.index} remaining bytes.`);
    }
    return transactionRead.result;
};
export const decodeTransactionBch = decodeTransactionCommon;
export const decodeTransaction = decodeTransactionBch;
/**
 * @deprecated Alias of `decodeTransactionBch` for backwards-compatibility.
 */
export const decodeTransactionBCH = decodeTransactionBch;
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
export const decodeTransactionUnsafeCommon = (bin) => {
    const result = decodeTransactionCommon(bin);
    if (typeof result === 'string') {
        // eslint-disable-next-line functional/no-throw-statements
        throw new Error(result);
    }
    return result;
};
export const decodeTransactionUnsafeBch = decodeTransactionUnsafeCommon;
export const decodeTransactionUnsafe = decodeTransactionUnsafeBch;
/**
 * @deprecated Alias of `decodeTransactionUnsafeBch` for backwards-compatibility.
 */
export const decodeTransactionUnsafeBCH = decodeTransactionUnsafeBch;
/**
 * Encode a {@link Transaction} using the standard P2P network format. This
 * serialization is also used when computing the transaction's hash (A.K.A.
 * "transaction ID" or "TXID").
 *
 * For the reverse, see {@link decodeTransactionCommon}.
 */
export const encodeTransactionCommon = (tx) => flattenBinArray([
    numberToBinUint32LE(tx.version),
    encodeTransactionInputs(tx.inputs),
    encodeTransactionOutputs(tx.outputs),
    numberToBinUint32LE(tx.locktime),
]);
export const encodeTransactionBch = encodeTransactionCommon;
export const encodeTransaction = encodeTransactionBch;
/**
 * @deprecated Alias of `decodeTransactionUnsafeBch` for backwards-compatibility.
 */
export const encodeTransactionBCH = encodeTransactionBch;
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
export const hashTransactionP2pOrder = (transaction, sha256 = internalSha256) => hash256(transaction, sha256);
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
export const hashTransactionUiOrder = (transaction, sha256 = internalSha256) => hashTransactionP2pOrder(transaction, sha256).reverse();
/**
 * Return an encoded {@link Transaction}'s hash/ID as a string in user interface
 * byte order (typically used by wallets and block explorers).
 *
 * To return this result as a `Uint8Array`, use {@link hashTransactionUiOrder}.
 *
 * @param transaction - the encoded transaction
 */
export const hashTransaction = (transaction) => binToHex(hashTransactionUiOrder(transaction));
/**
 * Encode all outpoints in a series of transaction inputs. (For use in
 * {@link hashTransactionOutpoints}.)
 *
 * @param inputs - the series of inputs from which to extract the outpoints
 */
export const encodeTransactionOutpoints = (inputs) => flattenBinArray(inputs.map((i) => flattenBinArray([
    i.outpointTransactionHash.slice().reverse(),
    numberToBinUint32LE(i.outpointIndex),
])));
/**
 * Encode an array of transaction {@link Output}s for use in transaction signing
 * serializations. Note, this encoding differs from
 * {@link encodeTransactionOutputs} (used for encoding full transactions).
 *
 * @param outputs - the array of outputs to encode
 */
export const encodeTransactionOutputsForSigning = (outputs) => flattenBinArray(outputs.map(encodeTransactionOutput));
/**
 * Encode the sequence numbers of an array of transaction inputs for use in
 * transaction signing serializations.
 *
 * @param inputs - the array of inputs from which to extract the sequence
 * numbers
 */
export const encodeTransactionInputSequenceNumbersForSigning = (inputs) => flattenBinArray(inputs.map((i) => numberToBinUint32LE(i.sequenceNumber)));
//# sourceMappingURL=transaction-encoding.js.map