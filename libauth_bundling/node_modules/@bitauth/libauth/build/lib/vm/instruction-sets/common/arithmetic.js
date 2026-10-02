import { combineOperations, pushToStackVmNumberChecked, useOneVmNumber, useThreeVmNumbers, useTwoVmNumbers, } from './combinators.js';
import { ConsensusCommon } from './consensus.js';
import { applyError, AuthenticationErrorCommon } from './errors.js';
import { opVerify } from './flow-control.js';
const createNumericOperation = (useVmNumbers) => (operate, { hasEncodingCost, maximumVmNumberByteLength, }) => (state) => useVmNumbers(state, (nextState, values) => {
    const result = operate(values);
    return pushToStackVmNumberChecked(nextState, result, {
        hasEncodingCost,
        maximumVmNumberByteLength,
    });
}, { maximumVmNumberByteLength });
export const numericOperationUnary = createNumericOperation(useOneVmNumber);
export const numericOperationBinary = createNumericOperation(useTwoVmNumbers);
export const numericOperationTernary = createNumericOperation(useThreeVmNumbers);
export const createOp1Add = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationUnary(([value]) => value + 1n, {
    hasEncodingCost: true,
    maximumVmNumberByteLength,
});
export const op1Add = createOp1Add();
export const createOp1Sub = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationUnary(([value]) => value - 1n, {
    hasEncodingCost: true,
    maximumVmNumberByteLength,
});
export const op1Sub = createOp1Sub();
export const createOpNegate = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationUnary(([value]) => -value, {
    hasEncodingCost: true,
    maximumVmNumberByteLength,
});
export const opNegate = createOpNegate();
export const createOpAbs = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationUnary(([value]) => (value < 0 ? -value : value), {
    hasEncodingCost: true,
    maximumVmNumberByteLength,
});
export const opAbs = createOpAbs();
export const createOpNot = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationUnary(([value]) => (value === 0n ? 1n : 0n), {
    hasEncodingCost: false,
    maximumVmNumberByteLength,
});
export const opNot = createOpNot();
export const createOp0NotEqual = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationUnary(([value]) => (value === 0n ? 0n : 1n), {
    hasEncodingCost: false,
    maximumVmNumberByteLength,
});
export const op0NotEqual = createOp0NotEqual();
export const createOpAdd = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationBinary(([a, b]) => a + b, {
    hasEncodingCost: true,
    maximumVmNumberByteLength,
});
export const opAdd = createOpAdd();
export const createOpSub = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationBinary(([a, b]) => a - b, {
    hasEncodingCost: true,
    maximumVmNumberByteLength,
});
export const opSub = createOpSub();
export const createOpBoolAnd = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationBinary(([a, b]) => (a !== 0n && b !== 0n ? 1n : 0n), {
    hasEncodingCost: false,
    maximumVmNumberByteLength,
});
export const opBoolAnd = createOpBoolAnd();
export const createOpBoolOr = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationBinary(([a, b]) => (a !== 0n || b !== 0n ? 1n : 0n), {
    hasEncodingCost: false,
    maximumVmNumberByteLength,
});
export const opBoolOr = createOpBoolOr();
export const createOpNumEqual = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationBinary(([a, b]) => (a === b ? 1n : 0n), {
    hasEncodingCost: false,
    maximumVmNumberByteLength,
});
export const opNumEqual = createOpNumEqual();
export const createOpNumEqualVerify = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => combineOperations(createOpNumEqual({ maximumVmNumberByteLength }), opVerify);
export const opNumEqualVerify = createOpNumEqualVerify();
export const createOpNumNotEqual = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationBinary(([a, b]) => (a === b ? 0n : 1n), {
    hasEncodingCost: false,
    maximumVmNumberByteLength,
});
export const opNumNotEqual = createOpNumNotEqual();
export const createOpLessThan = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationBinary(([a, b]) => (a < b ? 1n : 0n), {
    hasEncodingCost: false,
    maximumVmNumberByteLength,
});
export const opLessThan = createOpLessThan();
export const createOpLessThanOrEqual = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationBinary(([a, b]) => (a <= b ? 1n : 0n), {
    hasEncodingCost: false,
    maximumVmNumberByteLength,
});
export const opLessThanOrEqual = createOpLessThan();
export const createOpGreaterThan = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationBinary(([a, b]) => (a > b ? 1n : 0n), {
    hasEncodingCost: false,
    maximumVmNumberByteLength,
});
export const opGreaterThan = createOpGreaterThan();
export const createOpGreaterThanOrEqual = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationBinary(([a, b]) => (a >= b ? 1n : 0n), {
    hasEncodingCost: false,
    maximumVmNumberByteLength,
});
export const opGreaterThanOrEqual = createOpGreaterThanOrEqual();
export const createOpMin = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationBinary(([a, b]) => (a < b ? a : b), {
    hasEncodingCost: true,
    maximumVmNumberByteLength,
});
export const opMin = createOpMin();
export const createOpMax = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationBinary(([a, b]) => (a > b ? a : b), {
    hasEncodingCost: true,
    maximumVmNumberByteLength,
});
export const opMax = createOpMax();
export const createOpWithin = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => numericOperationTernary(([a, b, c]) => (b <= a && a < c ? 1n : 0n), {
    hasEncodingCost: false,
    maximumVmNumberByteLength,
});
export const opWithin = createOpWithin();
export const measureArithmeticCost = (state, operation) => {
    const [firstInput, secondInput] = state.stack.slice(-2 /* Constants.lastTwoItems */);
    const firstLength = firstInput?.length ?? 0;
    const secondLength = secondInput?.length ?? 0;
    // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
    state.metrics.arithmeticCost += firstLength * secondLength;
    return operation(state);
};
export const createOpMul = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => (state) => measureArithmeticCost(state, numericOperationBinary(([a, b]) => a * b, {
    hasEncodingCost: true,
    maximumVmNumberByteLength,
}));
export const opMul = createOpMul();
export const createOpDiv = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => (state) => measureArithmeticCost(state, () => useTwoVmNumbers(state, (nextState, [a, b]) => b === 0n
    ? applyError(nextState, AuthenticationErrorCommon.divisionByZero)
    : pushToStackVmNumberChecked(nextState, a / b, {
        hasEncodingCost: true,
        maximumVmNumberByteLength,
    }), { maximumVmNumberByteLength }));
export const opDiv = createOpDiv();
export const createOpMod = ({ maximumVmNumberByteLength = ConsensusCommon.maximumVmNumberByteLength, } = {}) => (state) => measureArithmeticCost(state, () => useTwoVmNumbers(state, (nextState, [a, b]) => b === 0n
    ? applyError(nextState, AuthenticationErrorCommon.divisionByZero)
    : pushToStackVmNumberChecked(nextState, a % b, {
        hasEncodingCost: true,
        maximumVmNumberByteLength,
    }), { maximumVmNumberByteLength }));
export const opMod = createOpDiv();
//# sourceMappingURL=arithmetic.js.map