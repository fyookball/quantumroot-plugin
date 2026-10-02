import { numberToBinUint16LE, numberToBinUint32LE, } from '../../../format/format.js';
import { executionIsActive, pushToStack } from './combinators.js';
import { ConsensusCommon } from './consensus.js';
import { applyError, AuthenticationErrorCommon } from './errors.js';
import { bigIntToVmNumber } from './instruction-sets-utils.js';
/**
 * Returns the minimal bytecode required to push the provided `data` to the
 * stack.
 *
 * @remarks
 * This method conservatively encodes a `Uint8Array` as a data push. For VM
 * Numbers that can be pushed using a single opcode (-1 through 16), the
 * equivalent bytecode value is returned. Other `data` values will be prefixed
 * with the proper opcode and push length bytes (if necessary) to create the
 * minimal push instruction.
 *
 * Note, while some single-byte VM Number pushes will be minimally-encoded by
 * this method, all larger inputs will be encoded as-is (it cannot be assumed
 * that inputs are intended to be used as VM Numbers). To encode the push of a
 * VM Number, minimally-encode the number before passing it to this
 * method, e.g.:
 * `encodeDataPush(bigIntToVmNumber(decodeVmNumber(nonMinimalNumber)))`.
 *
 * The maximum `bytecode` length that can be encoded for a push in the Bitcoin
 * system is `4294967295` (~4GB). This method assumes a smaller input – if
 * `bytecode` has the potential to be longer, it should be checked (and the
 * error handled) prior to calling this method.
 *
 * @param data - the Uint8Array to push to the stack
 */
// eslint-disable-next-line complexity
export const encodeDataPush = (data) => data.length <= 75 /* PushOperationConstants.maximumPushByteOperationSize */
    ? data.length === 0
        ? Uint8Array.of(0)
        : data.length === 1
            ? // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                data[0] !== 0 && data[0] <= 16 /* PushOperationConstants.pushNumberOpcodes */
                    ? Uint8Array.of(
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    data[0] + 80 /* PushOperationConstants.pushNumberOpcodesOffset */)
                    : data[0] === 129 /* PushOperationConstants.negativeOne */
                        ? Uint8Array.of(79 /* PushOperationConstants.OP_1NEGATE */)
                        : Uint8Array.from([1, ...data])
            : Uint8Array.from([data.length, ...data])
    : data.length <= 255 /* PushOperationConstants.maximumPushData1Size */
        ? Uint8Array.from([
            76 /* PushOperationConstants.OP_PUSHDATA_1 */,
            data.length,
            ...data,
        ])
        : data.length <= 65535 /* PushOperationConstants.maximumPushData2Size */
            ? Uint8Array.from([
                77 /* PushOperationConstants.OP_PUSHDATA_2 */,
                ...numberToBinUint16LE(data.length),
                ...data,
            ])
            : Uint8Array.from([
                78 /* PushOperationConstants.OP_PUSHDATA_4 */,
                ...numberToBinUint32LE(data.length),
                ...data,
            ]);
/**
 * Returns true if the provided `data` is minimally-encoded by the provided
 * `opcode`.
 * @param opcode - the opcode used to push `data`
 * @param data - the contents of the push
 */
// eslint-disable-next-line complexity
export const isMinimalDataPush = (opcode, data) => {
    if (data.length === 0) {
        return opcode === 0 /* PushOperationConstants.OP_0 */;
    }
    if (data.length === 1) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const byte = data[0];
        if (byte >= 1 && byte <= 16 /* PushOperationConstants.pushNumberOpcodes */) {
            return opcode === byte + 80 /* PushOperationConstants.pushNumberOpcodesOffset */;
        }
        if (byte === 129 /* PushOperationConstants.negativeOne */) {
            return opcode === 79 /* PushOperationConstants.OP_1NEGATE */;
        }
    }
    if (data.length <= 75 /* PushOperationConstants.maximumPushByteOperationSize */) {
        return opcode === data.length;
    }
    if (data.length <= 255 /* PushOperationConstants.maximumPushData1Size */) {
        return opcode === 76 /* PushOperationConstants.OP_PUSHDATA_1 */;
    }
    if (data.length <= 65535 /* PushOperationConstants.maximumPushData2Size */) {
        return opcode === 77 /* PushOperationConstants.OP_PUSHDATA_2 */;
    }
    if (data.length <= 4294967295 /* PushOperationConstants.maximumPushData4Size */) {
        return opcode === 78 /* PushOperationConstants.OP_PUSHDATA_4 */;
    }
    return false;
};
export const pushOperation = ({ maximumStackItemLength = ConsensusCommon.maximumStackItemLength, } = {}) => (state) => {
    const instruction = state.instructions[state.ip];
    return instruction.data.length > maximumStackItemLength
        ? applyError(state, AuthenticationErrorCommon.exceededMaximumStackItemLength, `Maximum stack item length: ${maximumStackItemLength} bytes. Item length: ${instruction.data.length} bytes.`)
        : executionIsActive(state)
            ? isMinimalDataPush(instruction.opcode, instruction.data)
                ? pushToStack(state, [instruction.data])
                : applyError(state, AuthenticationErrorCommon.nonMinimalPush)
            : state;
};
/**
 * @param number - the number that is pushed to the stack by this operation.
 * @returns an operation that pushes a number to the stack.
 */
export const pushNumberOperation = (number) => {
    const value = bigIntToVmNumber(BigInt(number));
    return (state) => pushToStack(state, [value]);
};
//# sourceMappingURL=push.js.map