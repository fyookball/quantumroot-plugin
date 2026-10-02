import { ConsensusCommon } from './consensus.js';
import { applyError, AuthenticationErrorCommon } from './errors.js';
import { bigIntToVmNumber, isVmNumberError, vmNumberToBigInt, } from './instruction-sets-utils.js';
export const incrementOperationCount = (operation) => (state) => {
    const nextState = operation(state);
    // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
    nextState.operationCount += 1;
    return nextState;
};
export const executionIsActive = (state) => state.controlStack.every((item) => item !== false);
export const conditionallyEvaluate = (operation) => (state) => executionIsActive(state) ? operation(state) : state;
/**
 * Map a function over each operation in an {@link InstructionSet.operations}
 * object, assigning the result to the same `opcode` in the resulting object.
 * @param operationMap - an operations map from an {@link InstructionSet}
 * @param combinators - a list of functions to apply (in order) to
 * each operation
 */
export const mapOverOperations = (combinators, operationMap) => Object.keys(operationMap).reduce((result, opcode) => ({
    ...result,
    [opcode]: combinators.reduce((op, combinator) => combinator(op), 
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    operationMap[Number(opcode)]),
}), {});
/**
 * Pop one stack item off of `state.stack` and provide that item to `operation`.
 */
export const useOneStackItem = (state, operation) => {
    // eslint-disable-next-line functional/immutable-data
    const item = state.stack.pop();
    if (item === undefined) {
        return applyError(state, AuthenticationErrorCommon.emptyStack);
    }
    return operation(state, [item]);
};
export const useTwoStackItems = (state, operation) => useOneStackItem(state, (nextState, [valueTwo]) => useOneStackItem(nextState, (lastState, [valueTop]) => operation(lastState, [valueTop, valueTwo])));
export const useThreeStackItems = (state, operation) => useOneStackItem(state, (nextState, [valueThree]) => useTwoStackItems(nextState, (lastState, [valueTop, valueTwo]) => operation(lastState, [valueTop, valueTwo, valueThree])));
export const useFourStackItems = (state, operation) => useTwoStackItems(state, (nextState, [valueThree, valueFour]) => useTwoStackItems(nextState, (lastState, [valueTop, valueTwo]) => operation(lastState, [valueTop, valueTwo, valueThree, valueFour])));
export const useSixStackItems = (state, operation) => useFourStackItems(state, (nextState, [valueThree, valueFour, valueFive, valueSix]) => useTwoStackItems(nextState, (lastState, [valueTop, valueTwo]) => operation(lastState, [
    valueTop,
    valueTwo,
    valueThree,
    valueFour,
    valueFive,
    valueSix,
])));
export const useOneVmNumber = (state, operation, { maximumVmNumberByteLength = 0, requireMinimalEncoding = true, } = {
    maximumVmNumberByteLength: 0,
    requireMinimalEncoding: true,
}) => useOneStackItem(state, (nextState, [item]) => {
    const value = vmNumberToBigInt(item, {
        maximumVmNumberByteLength,
        requireMinimalEncoding,
    });
    if (isVmNumberError(value)) {
        return applyError(state, AuthenticationErrorCommon.invalidVmNumber, value);
    }
    return operation(nextState, [value]);
});
/**
 * Note that returned parameters are in source order,
 * e.g. `<first> <second> OP_CODE`.
 */
export const useTwoVmNumbers = (state, operation, { maximumVmNumberByteLength = 0, requireMinimalEncoding = true, } = {
    maximumVmNumberByteLength: 0,
    requireMinimalEncoding: true,
}) => useOneVmNumber(state, (nextState, [secondValue]) => useOneVmNumber(nextState, (lastState, [firstValue]) => operation(lastState, [firstValue, secondValue]), {
    maximumVmNumberByteLength,
    requireMinimalEncoding,
}), {
    maximumVmNumberByteLength,
    requireMinimalEncoding,
});
/**
 * Note that returned parameters are in source order,
 * e.g. `<first> <second> <third> OP_CODE`.
 */
export const useThreeVmNumbers = (state, operation, { maximumVmNumberByteLength = 0, requireMinimalEncoding = true, } = {
    maximumVmNumberByteLength: 0,
    requireMinimalEncoding: true,
}) => useTwoVmNumbers(state, (nextState, [secondValue, thirdValue]) => useOneVmNumber(nextState, (lastState, [firstValue]) => operation(lastState, [firstValue, secondValue, thirdValue]), {
    maximumVmNumberByteLength,
    requireMinimalEncoding,
}), {
    maximumVmNumberByteLength,
    requireMinimalEncoding,
});
/**
 * Return the provided state with the provided value pushed to its stack.
 * @param state - the state to update and return
 * @param data - the values to push to the stack
 * @param pushedBytes - the number of bytes this operation should add to
 * `state.metrics.stackPushedBytes`; defaults to the sum of all `data` lengths
 */
export const pushToStack = (state, data, { pushedBytes = data.reduce((acc, item) => acc + item.length, 0) } = {}) => {
    // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
    state.stack.push(...data);
    // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
    state.metrics.stackPushedBytes += pushedBytes;
    return state;
};
/**
 * If the provided item exceeds the maximum stack item length, apply an error.
 * Otherwise, return the provided state with the item pushed to its stack.
 * @param state - the state to update and return
 * @param item - the value to push to the stack
 */
export const pushToStackChecked = (state, item, { maximumStackItemLength = ConsensusCommon.maximumStackItemLength, } = {}) => {
    if (item.length > maximumStackItemLength) {
        return applyError(state, AuthenticationErrorCommon.exceededMaximumStackItemLength, `Maximum stack item length: ${maximumStackItemLength}; item length: ${item.length} bytes.`);
    }
    // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
    state.stack.push(item);
    // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
    state.metrics.stackPushedBytes += item.length;
    return state;
};
/**
 * Return the provided state with the VM number pushed to its stack.
 * @param state - the state to update and return
 * @param vmNumber - the number to push to the stack
 */
export const pushToStackVmNumber = (state, vmNumber) => pushToStack(state, [bigIntToVmNumber(vmNumber)]);
/**
 * If the provided number is outside the VM number range, apply an error.
 * Otherwise, return the provided state with the VM number pushed to its stack.
 * @param state - the state to update and return
 * @param vmNumber - the VM number to push to the stack
 */
export const pushToStackVmNumberChecked = (state, vmNumber, { maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, hasEncodingCost = true, } = {}) => {
    const encoded = bigIntToVmNumber(vmNumber);
    if (encoded.length > maximumVmNumberByteLength) {
        return applyError(state, AuthenticationErrorCommon.overflowsVmNumberRange, `Maximum VM number byte length: ${maximumVmNumberByteLength}; encoded number length: ${encoded.length}.`);
    }
    // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
    state.metrics.arithmeticCost += hasEncodingCost ? encoded.length : 0;
    return pushToStack(state, [encoded]);
};
export const combineOperations = (firstOperation, secondOperation) => (state) => secondOperation(firstOperation(state));
/**
 * Given a message length, compute and return the number of hash digest
 * iterations required. (See `CHIP-2021-05-vm-limits`)
 */
export const lengthToHashDigestIterationCount = (messageLength) => 
// eslint-disable-next-line no-bitwise, @typescript-eslint/no-magic-numbers
1 + (((messageLength + 8) / 64) | 0);
/**
 * Given a program state, increment the hash digest iteration count for a
 * message of the provided length. If the total would exceed the maximum, append
 * an error.
 */
export const incrementHashDigestIterations = (state, { messageLength, resultIsHashed, }, 
/**
 * The operation to execute if no error occurred
 */
operation) => {
    const newIterations = lengthToHashDigestIterationCount(messageLength);
    const secondRound = resultIsHashed ? 1 : 0;
    const requiredTotalIterations = state.metrics.hashDigestIterations + newIterations + secondRound;
    // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
    state.metrics.hashDigestIterations = requiredTotalIterations;
    return operation(state);
};
//# sourceMappingURL=combinators.js.map