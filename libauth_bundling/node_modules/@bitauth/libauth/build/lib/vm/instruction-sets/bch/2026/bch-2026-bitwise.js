import { applyError, pushToStack, pushToStackVmNumber, pushToStackVmNumberChecked, useOneStackItem, useOneVmNumber, } from '../../common/common.js';
import { ConsensusBch2026 } from './bch-2026-consensus.js';
import { AuthenticationErrorBch2026 } from './bch-2026-errors.js';
export const opInvert = (state) => useOneStackItem(state, (nextState, [a]) => 
// eslint-disable-next-line no-bitwise
pushToStack(nextState, [a.map((v) => v ^ 255 /* Constants.allBits */)]));
const useOneShiftBitCount = (state, shiftOperation) => useOneVmNumber(state, (nextState, [bitCount]) => {
    if (bitCount < 0n) {
        return applyError(nextState, AuthenticationErrorBch2026.invalidShiftBitCount, `Bit count must be greater than or equal to 0. Provided bit count: ${bitCount}.`);
    }
    return shiftOperation(nextState, [bitCount]);
});
export const createOpLShiftNum = ({ maximumStackItemLength = ConsensusBch2026.maximumStackItemLength } = {}) => (state) => {
    const fastFailBitCount = maximumStackItemLength * 8 /* Constants.bitsPerByte */;
    return useOneShiftBitCount(state, (nextState, [bitCount]) => useOneVmNumber(nextState, (finalState, [numericValue]) => {
        if (numericValue === 0n) {
            return pushToStackVmNumber(finalState, 0n);
        }
        if (bitCount > fastFailBitCount) {
            return applyError(nextState, AuthenticationErrorBch2026.invalidShiftBitCount, `Abandoned excessive OP_LSHIFTNUM. Provided bit count: ${bitCount}.`);
        }
        return pushToStackVmNumberChecked(finalState, 
        // eslint-disable-next-line no-bitwise
        numericValue << bitCount, {
            hasEncodingCost: false,
            maximumVmNumberByteLength: maximumStackItemLength,
        });
    }));
};
export const createOpRShiftNum = ({ maximumStackItemLength = ConsensusBch2026.maximumStackItemLength } = {}) => (state) => useOneShiftBitCount(state, (nextState, [bitCount]) => {
    const nextStackItemLength = nextState.stack[nextState.stack.length - 1]?.length ?? 0;
    const numericValueBits = nextStackItemLength * 8 /* Constants.bitsPerByte */;
    const fastReturnIfValid = bitCount > numericValueBits;
    return useOneVmNumber(nextState, (finalState, [numericValue]) => {
        if (numericValue === 0n) {
            return pushToStackVmNumber(finalState, 0n);
        }
        if (fastReturnIfValid) {
            const isNegative = numericValue < 0;
            return pushToStackVmNumber(finalState, isNegative ? -1n : 0n);
        }
        return pushToStackVmNumberChecked(finalState, 
        // eslint-disable-next-line no-bitwise
        numericValue >> bitCount, {
            hasEncodingCost: false,
            maximumVmNumberByteLength: maximumStackItemLength,
        });
    });
});
// eslint-disable-next-line functional/no-return-void
const copyWholeBytes = (src, dst, byteShift, left) => {
    if (byteShift >= src.length)
        return;
    if (left) {
        // eslint-disable-next-line functional/no-expression-statements
        dst.set(src.subarray(byteShift), 0);
        return;
    }
    // eslint-disable-next-line functional/no-expression-statements
    dst.set(src.subarray(0, src.length - byteShift), byteShift);
};
const residualLeftShift = (buf, bitShift) => {
    // eslint-disable-next-line functional/no-let
    let carry = 0;
    // eslint-disable-next-line functional/no-loop-statements, functional/no-let, no-plusplus
    for (let i = buf.length - 1; i >= 0; i--) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const v = buf[i];
        // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data, no-bitwise
        buf[i] = ((v << bitShift) | carry) & 255 /* Constants.allBits */;
        // eslint-disable-next-line functional/no-expression-statements, no-bitwise
        carry = v >> (8 /* Constants.bitsPerByte */ - bitShift);
    }
    return buf;
};
const residualRightShift = (buf, bitShift) => {
    // eslint-disable-next-line functional/no-let
    let carry = 0;
    // eslint-disable-next-line functional/no-loop-statements, functional/no-let, no-plusplus
    for (let i = 0; i < buf.length; i++) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const v = buf[i];
        // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data, no-bitwise
        buf[i] = ((v >> bitShift) | carry) & 255 /* Constants.allBits */;
        // eslint-disable-next-line functional/no-expression-statements, no-bitwise
        carry = (v << (8 /* Constants.bitsPerByte */ - bitShift)) & 255 /* Constants.allBits */;
    }
    return buf;
};
const shiftFixed = (src, bitCount, isLeftShift) => {
    const s = Number(bitCount);
    if (!s || !src.length)
        return src.slice();
    const len = src.length;
    const dst = new Uint8Array(len);
    const byteShift = Math.floor(s / 8 /* Constants.bitsPerByte */);
    const bitShift = s % 8 /* Constants.bitsPerByte */;
    // eslint-disable-next-line functional/no-expression-statements
    copyWholeBytes(src, dst, byteShift, isLeftShift);
    if (!bitShift)
        return dst;
    return isLeftShift
        ? residualLeftShift(dst, bitShift)
        : residualRightShift(dst, bitShift);
};
/**
 * Perform a fixed-length, logical left shift of `bin` by the `bitCount`,
 * equivalent to `OP_LSHIFTBIN` in the Bitcoin Cash VM.
 * @param bin - the Uint8Array to shift.
 * @param bitCount - the count of bits by which to shift `bin`.
 */
export const binaryShiftLeft = (bin, bitCount) => shiftFixed(bin, bitCount, true);
/**
 * Perform a fixed-length, logical right shift of `bin` by the `bitCount`,
 * equivalent to `OP_RSHIFTBIN` in the Bitcoin Cash VM.
 * @param bin - the Uint8Array to shift.
 * @param bitCount - the count of bits by which to shift `bin`.
 */
export const binaryShiftRight = (bin, bitCount) => shiftFixed(bin, bitCount, false);
export const opLShiftBin = (state) => useOneShiftBitCount(state, (nextState, [bitCount]) => useOneStackItem(nextState, (finalState, [bin]) => pushToStack(finalState, [binaryShiftLeft(bin, bitCount)])));
export const opRShiftBin = (state) => useOneShiftBitCount(state, (nextState, [bitCount]) => useOneStackItem(nextState, (finalState, [bin]) => pushToStack(finalState, [binaryShiftRight(bin, bitCount)])));
//# sourceMappingURL=bch-2026-bitwise.js.map