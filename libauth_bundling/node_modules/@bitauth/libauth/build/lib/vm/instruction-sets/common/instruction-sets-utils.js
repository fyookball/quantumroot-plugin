/* eslint-disable max-lines */
import { isPayToPublicKey, isPayToPublicKeyHash, isPayToScriptHash20, isPayToScriptHash32, } from '../../../address/address.js';
import { binToHex, flattenBinArray, numberToBinUint16LE, numberToBinUint32LE, } from '../../../format/format.js';
import { encodeTransactionOutput } from '../../../message/message.js';
import { OpcodesBchSpec } from '../bch/spec/bch-spec-opcodes.js';
import { OpcodesBtc } from '../btc/btc-opcodes.js';
/**
 * A type-guard that checks if the provided instruction is malformed.
 * @param instruction - the instruction to check
 */
export const authenticationInstructionIsMalformed = (instruction) => 'malformed' in instruction;
/**
 * A type-guard that checks if the final instruction in the provided array of
 * instructions is malformed. (Only the final instruction can be malformed.)
 * @param instructions - the array of instructions to check
 */
export const authenticationInstructionsAreMalformed = (instructions) => instructions.length > 0 &&
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    authenticationInstructionIsMalformed(instructions[instructions.length - 1]);
export const authenticationInstructionsArePushInstructions = (instructions) => instructions.every((instruction) => 'data' in instruction);
const uint8Bytes = 1;
const uint16Bytes = 2;
const uint32Bytes = 4;
/**
 * Read a little endian number of `length` from the provided
 * {@link ReadPosition}.
 *
 * @param position - the {@link ReadPosition} at which to start reading
 * @param length - the length of the little endian number to read
 */
export const readLittleEndianNumber = (position, length) => {
    const view = new DataView(position.bin.buffer, position.bin.byteOffset, position.bin.byteLength);
    const readAsLittleEndian = true;
    return length === uint8Bytes
        ? view.getUint8(position.index)
        : length === uint16Bytes
            ? view.getUint16(position.index, readAsLittleEndian)
            : view.getUint32(position.index, readAsLittleEndian);
};
/**
 * Returns the number of bytes used to indicate the length of the push in this
 * operation.
 * @param opcode - an opcode between 0x00 and 0xff
 */
export const opcodeToPushLength = (opcode) => ({
    [76 /* CommonPushOpcodes.OP_PUSHDATA_1 */]: uint8Bytes,
    [77 /* CommonPushOpcodes.OP_PUSHDATA_2 */]: uint16Bytes,
    [78 /* CommonPushOpcodes.OP_PUSHDATA_4 */]: uint32Bytes,
})[opcode] ?? 0;
/**
 * Decode one virtual machine bytecode instruction from the
 * provided {@link ReadPosition}.
 *
 * Returns an object with an `instruction` referencing a
 * {@link AuthenticationInstructionMaybeMalformed} and the next position.
 *
 * If the next index is greater than or equal to the length of the bytecode, the
 * bytecode has been fully decoded.
 *
 * The final {@link AuthenticationInstructionMaybeMalformed} in the bytecode may
 * be malformed if 1) the final operation is a push and 2) too few bytes remain
 * for the push operation to complete.
 *
 * @param position - the {@link ReadPosition} at which to start reading
 */
// eslint-disable-next-line complexity
export const readAuthenticationInstruction = (position) => {
    const { bin, index } = position;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const opcode = bin[index];
    if (opcode > 78 /* CommonPushOpcodes.OP_PUSHDATA_4 */) {
        return {
            instruction: { opcode },
            position: { bin, index: index + 1 },
        };
    }
    const lengthBytes = opcodeToPushLength(opcode);
    if (lengthBytes !== 0 && index + lengthBytes >= bin.length) {
        const sliceStart = index + 1;
        const sliceEnd = sliceStart + lengthBytes;
        return {
            instruction: {
                expectedLengthBytes: lengthBytes,
                length: bin.slice(sliceStart, sliceEnd),
                malformed: true,
                opcode,
            },
            position: { bin, index: sliceEnd },
        };
    }
    const dataBytes = lengthBytes === 0
        ? opcode
        : readLittleEndianNumber({ bin, index: index + 1 }, lengthBytes);
    const dataStart = index + 1 + lengthBytes;
    const dataEnd = dataStart + dataBytes;
    return {
        instruction: {
            data: bin.slice(dataStart, dataEnd),
            ...(dataEnd > bin.length
                ? { expectedDataBytes: dataEnd - dataStart, malformed: true }
                : undefined),
            opcode,
        },
        position: { bin, index: dataEnd },
    };
};
/**
 * @param instruction - the {@link AuthenticationInstruction} to clone.
 * @returns A copy of the provided {@link AuthenticationInstruction}.
 *
 * @deprecated use `structuredClone` instead
 */
export const cloneAuthenticationInstruction = (instruction) => ({
    ...('data' in instruction ? { data: instruction.data } : {}),
    opcode: instruction.opcode,
});
/**
 * Decode authentication virtual machine bytecode (`lockingBytecode` or
 * `unlockingBytecode`) into {@link AuthenticationInstructionsMaybeMalformed}.
 * The method {@link authenticationInstructionsAreMalformed} can be used to
 * check if these instructions include a malformed instruction. If not, they are
 * valid {@link AuthenticationInstructions}.
 *
 * @param bytecode - the authentication virtual machine bytecode to decode
 */
export const decodeAuthenticationInstructions = (bytecode) => {
    const instructions = [];
    // eslint-disable-next-line functional/no-let
    let i = 0;
    // eslint-disable-next-line functional/no-loop-statements
    while (i < bytecode.length) {
        const { instruction, position } = readAuthenticationInstruction({
            bin: bytecode,
            index: i,
        });
        // eslint-disable-next-line functional/no-expression-statements
        i = position.index;
        // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
        instructions.push(instruction);
    }
    return instructions;
};
/**
 * OP_0 is the only single-word push. All other push instructions will
 * disassemble to multiple ASM words. (OP_1-OP_16 are handled like normal
 * operations.)
 */
const isMultiWordPush = (opcode) => opcode !== 0 /* CommonPushOpcodes.OP_0 */;
const formatAsmPushHex = (data) => data.length > 0 ? `0x${binToHex(data)}` : '';
const formatMissingBytesAsm = (missing) => `[missing ${missing} byte${missing === 1 ? '' : 's'}]`;
const hasMalformedLength = (instruction) => 'length' in instruction;
const isPushData = (pushOpcode) => pushOpcode >= 76 /* CommonPushOpcodes.OP_PUSHDATA_1 */;
/**
 * Disassemble a malformed authentication instruction into a string description.
 * @param opcodes - a mapping of possible opcodes to their string representation
 * @param instruction - the {@link AuthenticationInstructionMalformed} to
 * disassemble
 */
export const disassembleAuthenticationInstructionMalformed = (opcodes, instruction) => `${opcodes[instruction.opcode] ?? 'OP_UNKNOWN'} ${hasMalformedLength(instruction)
    ? `${formatAsmPushHex(instruction.length)}${formatMissingBytesAsm(instruction.expectedLengthBytes - instruction.length.length)}`
    : `${isPushData(instruction.opcode)
        ? `${instruction.expectedDataBytes} `
        : ''}${formatAsmPushHex(instruction.data)}${formatMissingBytesAsm(instruction.expectedDataBytes - instruction.data.length)}`}`;
/**
 * Disassemble a properly-formed authentication instruction into a string
 * description.
 * @param opcodes - a mapping of possible opcodes to their string representation
 * @param instruction - the instruction to disassemble
 */
export const disassembleAuthenticationInstruction = (opcodes, instruction) => `${opcodes[instruction.opcode] ?? 'OP_UNKNOWN'}${'data' in instruction && isMultiWordPush(instruction.opcode)
    ? ` ${isPushData(instruction.opcode) ? `${instruction.data.length} ` : ''}${formatAsmPushHex(instruction.data)}`
    : ''}`;
/**
 * Disassemble a single {@link AuthenticationInstructionMaybeMalformed} into its
 * ASM representation.
 *
 * @param opcodes - a mapping of possible opcodes to their string representation
 * @param instruction - the instruction to disassemble
 */
export const disassembleAuthenticationInstructionMaybeMalformed = (opcodes, instruction) => authenticationInstructionIsMalformed(instruction)
    ? disassembleAuthenticationInstructionMalformed(opcodes, instruction)
    : disassembleAuthenticationInstruction(opcodes, instruction);
/**
 * Disassemble an array of {@link AuthenticationInstructionMaybeMalformed}
 * (including potentially malformed instructions) into its ASM representation.
 *
 * This method supports disassembling an array including multiple
 * {@link AuthenticationInstructionMaybeMalformed}s, rather than the more
 * constrained {@link AuthenticationInstructionsMaybeMalformed} (may only
 * include one malformed instruction as the last item in the array).
 *
 * @param opcodes - a mapping of possible opcodes to their string representation
 * @param instructions - the array of instructions to disassemble
 */
export const disassembleAuthenticationInstructionsMaybeMalformed = (opcodes, instructions) => instructions
    .map((instruction) => disassembleAuthenticationInstructionMaybeMalformed(opcodes, instruction))
    .join(' ');
/**
 * Disassemble authentication bytecode into a lossless ASM representation. (All
 * push operations are represented with the same opcodes used in the bytecode,
 * even when non-minimally encoded.)
 *
 * For the reverse, see {@link assembleBytecode}.
 *
 * @param opcodes - a mapping of possible opcodes to their string representation
 * @param bytecode - the authentication bytecode to disassemble
 */
export const disassembleBytecode = (opcodes, bytecode) => disassembleAuthenticationInstructionsMaybeMalformed(opcodes, decodeAuthenticationInstructions(bytecode));
/**
 * Disassemble BCH authentication bytecode into its ASM representation.
 *
 * Note, this method automatically uses the latest BCH instruction set. To
 * manually select an instruction set, use {@link disassembleBytecode}.
 *
 * For the reverse, see {@link assembleBytecodeBch}.
 *
 * @param bytecode - the virtual machine bytecode to disassemble
 */
export const disassembleBytecodeBch = (bytecode) => disassembleAuthenticationInstructionsMaybeMalformed(OpcodesBchSpec, decodeAuthenticationInstructions(bytecode));
/**
 * @deprecated Alias of `disassembleBytecodeBch` for backwards-compatibility.
 */
export const disassembleBytecodeBCH = disassembleBytecodeBch;
/**
 * Disassemble BTC authentication bytecode into its ASM representation.
 *
 * Note, this method automatically uses the latest BTC instruction set. To
 * manually select an instruction set, use {@link disassembleBytecode}.
 *
 * For the reverse, see {@link assembleBytecodeBtc}.
 *
 * @param bytecode - the virtual machine bytecode to disassemble
 */
export const disassembleBytecodeBtc = (bytecode) => disassembleAuthenticationInstructionsMaybeMalformed(OpcodesBtc, decodeAuthenticationInstructions(bytecode));
/**
 * @deprecated Alias of `disassembleBytecodeBtc` for backwards-compatibility.
 */
export const disassembleBytecodeBTC = disassembleBytecodeBtc;
/**
 * Create an object where each key is an opcode identifier and each value is
 * the bytecode value (`Uint8Array`) it represents.
 * @param opcodes - An opcode enum, e.g. {@link OpcodesBch}
 */
export const generateBytecodeMap = (opcodes) => Object.entries(opcodes)
    .filter((entry) => typeof entry[1] === 'number')
    .reduce((identifiers, pair) => ({
    ...identifiers,
    [pair[0]]: Uint8Array.of(pair[1]),
}), {});
const getInstructionLengthBytes = (instruction) => {
    const { opcode } = instruction;
    const expectedLength = opcodeToPushLength(opcode);
    return expectedLength === uint8Bytes
        ? Uint8Array.of(instruction.data.length)
        : expectedLength === uint16Bytes
            ? numberToBinUint16LE(instruction.data.length)
            : numberToBinUint32LE(instruction.data.length);
};
/**
 * Re-encode a valid authentication instruction.
 * @param instruction - the instruction to encode
 */
export const encodeAuthenticationInstruction = (instruction) => Uint8Array.from([
    instruction.opcode,
    ...('data' in instruction
        ? [
            ...(isPushData(instruction.opcode)
                ? getInstructionLengthBytes(instruction)
                : []),
            ...instruction.data,
        ]
        : []),
]);
/**
 * Re-encode a malformed authentication instruction.
 * @param instruction - the {@link AuthenticationInstructionMalformed} to encode
 */
export const encodeAuthenticationInstructionMalformed = (instruction) => {
    const { opcode } = instruction;
    if (hasMalformedLength(instruction)) {
        return Uint8Array.from([opcode, ...instruction.length]);
    }
    if (isPushData(opcode)) {
        return Uint8Array.from([
            opcode,
            ...(opcode === 76 /* CommonPushOpcodes.OP_PUSHDATA_1 */
                ? Uint8Array.of(instruction.expectedDataBytes)
                : opcode === 77 /* CommonPushOpcodes.OP_PUSHDATA_2 */
                    ? numberToBinUint16LE(instruction.expectedDataBytes)
                    : numberToBinUint32LE(instruction.expectedDataBytes)),
            ...instruction.data,
        ]);
    }
    return Uint8Array.from([opcode, ...instruction.data]);
};
/**
 * Re-encode a potentially-malformed authentication instruction.
 * @param instruction - the {@link AuthenticationInstructionMaybeMalformed}
 * to encode
 */
export const encodeAuthenticationInstructionMaybeMalformed = (instruction) => authenticationInstructionIsMalformed(instruction)
    ? encodeAuthenticationInstructionMalformed(instruction)
    : encodeAuthenticationInstruction(instruction);
/**
 * Re-encode an array of valid authentication instructions.
 * @param instructions - the array of valid instructions to encode
 */
export const encodeAuthenticationInstructions = (instructions) => flattenBinArray(instructions.map(encodeAuthenticationInstruction));
/**
 * Re-encode an array of potentially-malformed authentication instructions.
 * @param instructions - the array of
 * {@link AuthenticationInstructionMaybeMalformed}s to encode
 */
export const encodeAuthenticationInstructionsMaybeMalformed = (instructions) => flattenBinArray(instructions.map(encodeAuthenticationInstructionMaybeMalformed));
export var VmNumberError;
(function (VmNumberError) {
    VmNumberError["outOfRange"] = "Failed to decode VM Number: overflows VM Number range.";
    VmNumberError["requiresMinimal"] = "Failed to decode VM Number: the number is not minimally-encoded.";
})(VmNumberError || (VmNumberError = {}));
export const isVmNumberError = (value) => value === VmNumberError.outOfRange || value === VmNumberError.requiresMinimal;
/**
 * This method attempts to decode a VM Number, a format in which numeric values
 * are represented on the stack. (The Satoshi implementation calls this
 * `CScriptNum`.)
 *
 * If `bytes` is a valid VM Number, this method returns the represented number
 * in BigInt format. If `bytes` is not valid, a {@link VmNumberError}
 * is returned.
 *
 * All common operations accepting numeric parameters or pushing numeric values
 * to the stack currently use the VM Number format. The binary format of numbers
 * wouldn't be important if they could only be operated on by arithmetic
 * operators, but since the results of these operations may become input to
 * other operations (e.g. hashing), the specific representation is consensus-
 * critical.
 *
 * For the reverse, see {@link bigIntToVmNumber}.
 *
 * @param bytes - a Uint8Array from the stack
 */
// eslint-disable-next-line complexity
export const vmNumberToBigInt = (bytes, { maximumVmNumberByteLength = 0, requireMinimalEncoding = true, } = {
    maximumVmNumberByteLength: 0,
    requireMinimalEncoding: true,
}) => {
    if (bytes.length === 0) {
        return 0n;
    }
    if (maximumVmNumberByteLength !== 0 &&
        bytes.length > maximumVmNumberByteLength) {
        return VmNumberError.outOfRange;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const mostSignificantByte = bytes[bytes.length - 1];
    const secondMostSignificantByte = bytes[bytes.length - 1 - 1];
    const allButTheSignBit = 0b1111_111;
    const justTheSignBit = 0b1000_0000;
    if (requireMinimalEncoding &&
        // eslint-disable-next-line no-bitwise
        (mostSignificantByte & allButTheSignBit) === 0 &&
        // eslint-disable-next-line no-bitwise, @typescript-eslint/no-non-null-assertion
        (bytes.length <= 1 || (secondMostSignificantByte & justTheSignBit) === 0)) {
        return VmNumberError.requiresMinimal;
    }
    const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.length);
    // eslint-disable-next-line functional/no-let
    let result = 0n;
    const wordBytes = 8;
    const wordBits = 64n;
    // eslint-disable-next-line functional/no-loop-statements, functional/no-let
    for (let off = bytes.length - wordBytes; off >= 0; off -= wordBytes) {
        const littleEndianWord = view.getBigUint64(off, true);
        // eslint-disable-next-line functional/no-expression-statements, no-bitwise
        result = (result << wordBits) | littleEndianWord;
    }
    const byteBits = 8n;
    // eslint-disable-next-line functional/no-loop-statements, functional/no-let, no-plusplus
    for (let i = (bytes.length % wordBytes) - 1; i >= 0; --i) {
        // eslint-disable-next-line functional/no-expression-statements, no-bitwise, @typescript-eslint/no-non-null-assertion
        result = (result << byteBits) | BigInt(bytes[i]);
    }
    // eslint-disable-next-line no-bitwise, @typescript-eslint/no-non-null-assertion
    const negative = (bytes[bytes.length - 1] & 128 /* VmNumber.signByte */) !== 0;
    if (!negative)
        return result;
    const bitsPerByte = 8;
    const signDepth = bitsPerByte * (bytes.length - 1);
    // eslint-disable-next-line no-bitwise
    const removeSign = ~(BigInt(128 /* VmNumber.signByte */) << BigInt(signDepth));
    // eslint-disable-next-line no-bitwise
    return -(result & removeSign);
};
/**
 * Convert a BigInt into the VM Number format. See {@link vmNumberToBigInt} for
 * more information.
 *
 * For the reverse, use {@link vmNumberToBigInt}.
 *
 * @param integer - the BigInt to encode as a VM Number
 */
// eslint-disable-next-line complexity
export const bigIntToVmNumber = (integer) => {
    if (integer === 0n) {
        return new Uint8Array();
    }
    const bytes = [];
    const isNegative = integer < 0;
    const byteStates = 0xff;
    const bitsPerByte = 8;
    // eslint-disable-next-line functional/no-let
    let remaining = isNegative ? -integer : integer;
    // eslint-disable-next-line functional/no-loop-statements
    while (remaining > 0) {
        // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data, no-bitwise
        bytes.push(Number(remaining & BigInt(byteStates)));
        // eslint-disable-next-line functional/no-expression-statements, no-bitwise
        remaining >>= BigInt(bitsPerByte);
    }
    const signFlippingByte = 0x80;
    // eslint-disable-next-line no-bitwise, functional/no-conditional-statements, @typescript-eslint/no-non-null-assertion
    if ((bytes[bytes.length - 1] & signFlippingByte) > 0) {
        // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
        bytes.push(isNegative ? signFlippingByte : 0x00);
        // eslint-disable-next-line functional/no-conditional-statements
    }
    else if (isNegative) {
        // eslint-disable-next-line functional/no-expression-statements, no-bitwise, @typescript-eslint/no-non-null-assertion
        bytes[bytes.length - 1] |= signFlippingByte;
    }
    return new Uint8Array(bytes);
};
/**
 * Returns true if the provided stack item is "truthy" in the sense required
 * by several operations (anything but zero and "negative zero").
 *
 * The Satoshi implementation calls this method `CastToBool`.
 *
 * To cast a boolean value to a stack item (VM number),
 * use {@link booleanToVmNumber}.
 *
 * @param item - the stack item to check for truthiness
 */
export const stackItemIsTruthy = (item) => {
    const signFlippingByte = 0x80;
    // eslint-disable-next-line functional/no-let, functional/no-loop-statements, no-plusplus
    for (let i = 0; i < item.length; i++) {
        if (item[i] !== 0) {
            if (i === item.length - 1 && item[i] === signFlippingByte) {
                return false;
            }
            return true;
        }
    }
    return false;
};
/**
 * Convert a boolean into VM Number format (the type used to express
 * boolean values emitted by several operations).
 *
 * For the less-strict inverse used by the VM, see {@link stackItemIsTruthy}.
 *
 * @param value - the boolean value to convert
 */
export const booleanToVmNumber = (value) => value ? bigIntToVmNumber(1n) : bigIntToVmNumber(0n);
/**
 * From C++ implementation:
 * Note that IsPushOnly() *does* consider OP_RESERVED to be a push-type
 * opcode, however execution of OP_RESERVED fails, so it's not relevant to
 * P2SH/BIP62 as the scriptSig would fail prior to the P2SH special
 * validation code being executed.
 */
export const isPushOperation = (opcode) => opcode <= 96 /* Opcodes.OP_16 */;
export const isPushOnly = (bytecode) => {
    const instructions = decodeAuthenticationInstructions(bytecode);
    return instructions.every((instruction) => isPushOperation(instruction.opcode));
};
export const isPushOnlyAccurate = (bytecode) => {
    const instructions = decodeAuthenticationInstructions(bytecode);
    return (!authenticationInstructionsAreMalformed(instructions) &&
        authenticationInstructionsArePushInstructions(instructions));
};
/**
 * Test if the provided locking bytecode is an arbitrary data output (A.K.A.
 * `TX_NULL_DATA`, "data carrier", or OP_RETURN output).
 * @param lockingBytecode - the locking bytecode to test
 */
export const isArbitraryDataOutput = (lockingBytecode) => lockingBytecode.length >= 1 &&
    lockingBytecode[0] === 106 /* Opcodes.OP_RETURN */ &&
    isPushOnly(lockingBytecode.slice(1));
/**
 * Given a number of bytes and a fee rate in satoshis-per-kilobyte, return the
 * minimum required fee. This calculation is important for standardness in dust
 * threshold calculation.
 *
 * @param length - the number of bytes for which the fee is to be paid
 * @param feeRateSatsPerKb - the fee rate in satoshis per 1000 bytes
 */
export const getMinimumFee = (length, feeRateSatsPerKb) => {
    if (length < 1n)
        return 0n;
    const truncated = (length * feeRateSatsPerKb) / BigInt(1000 /* Dust.bytesPerKb */);
    return truncated === 0n ? 1n : truncated;
};
/**
 * Given an encoded output length, return the minimum output value in satoshis
 * required to exceed the dust threshold. See {@link getDustThreshold}
 * for details.
 *
 * Most applications should instead use {@link getDustThreshold} to ensure
 * proper encoding and proper treatment of arbitrary data outputs
 * ({@link isArbitraryDataOutput}).
 *
 * @param outputLength - the length of the serialized output
 * @param dustRelayFeeSatPerKb - the "dust relay fee", defaults to `1000n`
 */
export const getDustThresholdForLength = (outputLength, dustRelayFeeSatPerKb = BigInt(1000 /* Dust.standardDustRelayFee */)) => {
    const expectedTotalLength = outputLength + 148 /* Dust.p2pkhInputLength */;
    return (BigInt(3 /* Dust.minimumFeeMultiple */) *
        getMinimumFee(BigInt(expectedTotalLength), dustRelayFeeSatPerKb));
};
/**
 * Given an {@link Output} and (optionally) a dust relay fee in
 * satoshis-per-kilobyte, return the minimum satoshi value for this output to
 * not be considered a "dust output". **For nodes to relay or mine a transaction
 * with this output, the output must have a satoshi value greater than or equal
 * to this threshold.**
 *
 * By standardness, if an output is expected to cost more than 1/3 of it's value
 * in fees to spend, it is considered dust. When calculating the expected fee,
 * the input size is assumed to be (at least) the size of a typical P2PKH input
 * spent using a 72-byte ECDSA signature, 148 bytes:
 * - Outpoint transaction hash: 32 bytes
 * - Outpoint index: 4 bytes
 * - Unlocking bytecode length: 1 byte
 * - Push of 72-byte ECDSA signature: 72 + 1 byte
 * - Push of public key: 33 + 1 byte
 * - Sequence number: 4 bytes
 *
 * The encoded length of the serialized output is added to 148 bytes, and the
 * dust threshold for the output is 3 times the minimum fee for the total bytes.
 * For a P2PKH output (34 bytes) and the standard 1000 sat/Kb dust relay fee,
 * this results in a dust limit of `546` satoshis (`(34+148)*3*1000/1000`).
 *
 * Note, arbitrary data outputs are not required to meet the dust limit as
 * they are provably unspendable and can be pruned from the UTXO set.
 *
 * @param output - the output to test
 * @param dustRelayFeeSatPerKb - the "dust relay fee", defaults to `1000n`
 */
export const getDustThreshold = (output, dustRelayFeeSatPerKb = BigInt(1000 /* Dust.standardDustRelayFee */)) => {
    if (isArbitraryDataOutput(output.lockingBytecode)) {
        return 0n;
    }
    const encodedOutputLength = encodeTransactionOutput(output).length;
    return getDustThresholdForLength(encodedOutputLength, dustRelayFeeSatPerKb);
};
/**
 * Given an {@link Output} and (optionally) a dust relay fee in
 * satoshis-per-kilobyte, return `true` if the provided output is considered
 * a "dust output", or `false` otherwise.
 *
 * @param output - the output to test
 * @param dustRelayFeeSatPerKb - the "dust relay fee", defaults to `1000n`
 */
export const isDustOutput = (output, dustRelayFeeSatPerKb = BigInt(1000 /* Dust.standardDustRelayFee */)) => output.valueSatoshis < getDustThreshold(output, dustRelayFeeSatPerKb);
export const isValidUncompressedPublicKeyEncoding = (publicKey) => publicKey.length === 65 /* PublicKey.uncompressedByteLength */ &&
    publicKey[0] === 4 /* PublicKey.uncompressedHeaderByte */;
export const isValidCompressedPublicKeyEncoding = (publicKey) => publicKey.length === 33 /* PublicKey.compressedByteLength */ &&
    (publicKey[0] === 2 /* PublicKey.compressedHeaderByteEven */ ||
        publicKey[0] === 3 /* PublicKey.compressedHeaderByteOdd */);
export const isValidPublicKeyEncoding = (publicKey) => isValidCompressedPublicKeyEncoding(publicKey) ||
    isValidUncompressedPublicKeyEncoding(publicKey);
// eslint-disable-next-line complexity
export const isStandardnessPublicKeyEncodingPre2026 = (publicKey) => {
    const [header] = publicKey;
    if (publicKey.length === 33 /* PublicKey.compressedByteLength */) {
        return (header === 2 /* PublicKey.compressedHeaderByteEven */ ||
            header === 3 /* PublicKey.compressedHeaderByteOdd */);
    }
    if (publicKey.length === 65 /* PublicKey.uncompressedByteLength */) {
        return (header === 4 /* PublicKey.uncompressedHeaderByte */ ||
            header === 6 /* PublicKey.uncompressedHeaderByteLegacyEvenY */ ||
            header === 7 /* PublicKey.uncompressedHeaderByteLegacyOddY */);
    }
    return false;
};
// eslint-disable-next-line complexity
export const pushNumberOpcodeToNumber = (opcode) => {
    if (opcode === 0 /* Opcodes.OP_0 */) {
        return 0;
    }
    if (opcode === 79 /* Opcodes.OP_1NEGATE */) {
        return -1;
    }
    if (!Number.isInteger(opcode) ||
        opcode < 81 /* Opcodes.OP_1 */ ||
        opcode > 96 /* Opcodes.OP_16 */) {
        return false;
    }
    return opcode - 80 /* Opcodes.OP_RESERVED */;
};
// eslint-disable-next-line complexity
export const isSimpleMultisig = (lockingBytecode) => {
    const instructions = decodeAuthenticationInstructions(lockingBytecode);
    if (authenticationInstructionsAreMalformed(instructions)) {
        return false;
    }
    const lastIndex = instructions.length - 1;
    if (instructions.length < 4 /* Multisig.minimumInstructions */ ||
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        instructions[lastIndex].opcode !== 174 /* Opcodes.OP_CHECKMULTISIG */) {
        return false;
    }
    /**
     * The required count of signers (the `m` in `m-of-n`).
     */
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const m = pushNumberOpcodeToNumber(instructions[0].opcode);
    /**
     * The total count of signers (the `n` in `m-of-n`).
     */
    const n = pushNumberOpcodeToNumber(
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    instructions[lastIndex - 1].opcode);
    if (n === false || m === false) {
        return false;
    }
    const publicKeyInstructions = instructions.slice(1 /* Multisig.keyStart */, -2 /* Multisig.keyEnd */);
    if (!authenticationInstructionsArePushInstructions(publicKeyInstructions)) {
        return false;
    }
    const publicKeys = publicKeyInstructions.map((instruction) => instruction.data);
    if (publicKeys.some((key) => !isStandardnessPublicKeyEncodingPre2026(key))) {
        return false;
    }
    return { m, n, publicKeys };
};
// eslint-disable-next-line complexity
export const isStandardMultisig = (lockingBytecode) => {
    const multisigProperties = isSimpleMultisig(lockingBytecode);
    if (multisigProperties === false) {
        return false;
    }
    const { m, n } = multisigProperties;
    if (n < 1 || n > 3 /* Multisig.maximumStandardN */ || m < 1 || m > n) {
        return false;
    }
    return true;
};
/**
 * Test that the provided locking bytecode matches one of the standard output
 * bytecode patterns prior to the `BCH_2023_05` upgrade (following
 * P2SH32 activation).
 * @param lockingBytecode - the locking bytecode to test for standardness
 */
export const isStandardOutputBytecodePre2023 = (lockingBytecode) => isPayToPublicKeyHash(lockingBytecode) ||
    isPayToScriptHash20(lockingBytecode) ||
    isPayToPublicKey(lockingBytecode) ||
    isArbitraryDataOutput(lockingBytecode) ||
    isStandardMultisig(lockingBytecode);
/**
 * Test that the provided locking bytecode matches one of the standard output
 * bytecode patterns as of the `BCH_2023_05` upgrade (following
 * P2SH32 activation).
 * @param lockingBytecode - the locking bytecode to test for standardness
 */
export const isStandardOutputBytecode2023 = (lockingBytecode) => isStandardOutputBytecodePre2023(lockingBytecode) ||
    isPayToScriptHash32(lockingBytecode);
// eslint-disable-next-line complexity
export const isStandardUtxoBytecode2023 = (lockingBytecode) => isPayToPublicKeyHash(lockingBytecode) ||
    isPayToScriptHash20(lockingBytecode) ||
    isPayToPublicKey(lockingBytecode) ||
    isArbitraryDataOutput(lockingBytecode) ||
    isSimpleMultisig(lockingBytecode) !== false ||
    isPayToScriptHash32(lockingBytecode);
/**
 * Test a stack item for the SegWit Recovery Rules activated in `BCH_2019_05`.
 *
 * @param bytecode - the stack item to test
 */
// eslint-disable-next-line complexity
export const isWitnessProgram = (bytecode) => {
    const correctLength = bytecode.length >= 4 /* SegWit.minimumLength */ &&
        bytecode.length <= 42 /* SegWit.maximumLength */;
    const validVersionPush = bytecode[0] === 0 /* SegWit.OP_0 */ ||
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        (bytecode[0] >= 81 /* SegWit.OP_1 */ && bytecode[0] <= 96 /* SegWit.OP_16 */);
    const correctLengthByte = 
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    bytecode[1] + 2 /* SegWit.versionAndLengthBytes */ === bytecode.length;
    return correctLength && validVersionPush && correctLengthByte;
};
//# sourceMappingURL=instruction-sets-utils.js.map