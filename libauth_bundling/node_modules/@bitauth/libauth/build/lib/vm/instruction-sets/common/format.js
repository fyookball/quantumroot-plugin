import { flattenBinArray } from '../../../format/format.js';
import { pushToStack, pushToStackChecked, useOneStackItem, useOneVmNumber, useTwoStackItems, } from './combinators.js';
import { ConsensusCommon } from './consensus.js';
import { applyError, AuthenticationErrorCommon } from './errors.js';
import { bigIntToVmNumber } from './instruction-sets-utils.js';
export const createOpCat = ({ maximumStackItemLength = ConsensusCommon.maximumStackItemLength, } = {}) => (state) => useTwoStackItems(state, (nextState, [a, b]) => pushToStackChecked(nextState, flattenBinArray([a, b]), {
    maximumStackItemLength,
}));
export const opCat = createOpCat();
export const opSplit = (state) => useOneVmNumber(state, (nextState, value) => {
    const index = Number(value);
    return useOneStackItem(nextState, (finalState, [item]) => index < 0 || index > item.length
        ? applyError(finalState, AuthenticationErrorCommon.invalidSplitIndex, `stack item length: ${item.length}; requested split index: ${index}.`)
        : pushToStack(finalState, [item.slice(0, index), item.slice(index)]));
});
/**
 * Pad a minimally-encoded VM number for `OP_NUM2BIN`.
 */
export const padMinimallyEncodedVmNumber = (vmNumber, length) => {
    if (vmNumber.length === length)
        return vmNumber;
    // eslint-disable-next-line functional/no-let
    let signBit = 0 /* Constants.positiveSign */;
    // eslint-disable-next-line functional/no-conditional-statements
    if (vmNumber.length > 0) {
        // eslint-disable-next-line functional/no-expression-statements, no-bitwise, @typescript-eslint/no-non-null-assertion
        signBit = vmNumber[vmNumber.length - 1] & 128 /* Constants.negativeSign */;
        // eslint-disable-next-line functional/no-expression-statements, no-bitwise, @typescript-eslint/no-non-null-assertion
        vmNumber[vmNumber.length - 1] &= 128 /* Constants.negativeSign */ - 1;
    }
    const result = Array.from(vmNumber);
    // eslint-disable-next-line functional/no-loop-statements
    while (result.length < length - 1) {
        // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
        result.push(0);
    }
    // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
    result.push(signBit);
    return Uint8Array.from(result);
};
export const createOpNum2Bin = ({ maximumStackItemLength = ConsensusCommon.maximumStackItemLength, } = {}) => (state) => useOneVmNumber(state, (nextState, value) => {
    const targetLength = Number(value);
    return targetLength > maximumStackItemLength
        ? applyError(nextState, AuthenticationErrorCommon.exceededMaximumStackItemLength, `Maximum stack item length: ${maximumStackItemLength} bytes. Item length: ${targetLength} bytes.`)
        : useOneVmNumber(nextState, (finalState, [target]) => {
            const minimallyEncoded = bigIntToVmNumber(target);
            return minimallyEncoded.length > targetLength
                ? applyError(finalState, AuthenticationErrorCommon.insufficientLength, `Minimum necessary byte length: ${minimallyEncoded.length}. Requested byte length: ${targetLength}.`)
                : pushToStack(finalState, [
                    padMinimallyEncodedVmNumber(minimallyEncoded, targetLength),
                ]);
        }, {
            maximumVmNumberByteLength: maximumStackItemLength,
            requireMinimalEncoding: false,
        });
});
export const opNum2Bin = createOpNum2Bin();
export const createOpBin2Num = ({ maximumStackItemLength = ConsensusCommon.maximumStackItemLength, maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => (state) => useOneVmNumber(state, (nextState, [target]) => {
    const minimallyEncoded = bigIntToVmNumber(target);
    return minimallyEncoded.length > maximumVmNumberByteLength
        ? applyError(nextState, AuthenticationErrorCommon.exceededMaximumVmNumberByteLength, `Maximum VM number byte length: ${maximumVmNumberByteLength}; required byte length: ${minimallyEncoded.length}.`)
        : pushToStack(nextState, [minimallyEncoded]);
}, {
    maximumVmNumberByteLength: maximumStackItemLength,
    requireMinimalEncoding: false,
});
export const opBin2Num = createOpBin2Num();
//# sourceMappingURL=format.js.map