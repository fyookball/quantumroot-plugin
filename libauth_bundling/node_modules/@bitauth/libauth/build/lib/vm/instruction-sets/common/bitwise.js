import { binsAreEqual } from '../../../format/format.js';
import { combineOperations, pushToStack, useTwoStackItems, } from './combinators.js';
import { applyError, AuthenticationErrorCommon } from './errors.js';
import { opVerify } from './flow-control.js';
import { booleanToVmNumber } from './instruction-sets-utils.js';
export const opEqual = (state) => useTwoStackItems(state, (nextState, [element1, element2]) => pushToStack(nextState, [
    booleanToVmNumber(binsAreEqual(element1, element2)),
]));
export const opEqualVerify = combineOperations(opEqual, opVerify);
export const bitwiseOperation = (combine) => (state) => useTwoStackItems(state, (nextState, [a, b]) => a.length === b.length
    ? pushToStack(nextState, [combine(a, b)])
    : applyError(nextState, AuthenticationErrorCommon.mismatchedBitwiseOperandLength, `First item length: ${a.length} bytes. Second item length: ${b.length} bytes.`));
// eslint-disable-next-line no-bitwise, @typescript-eslint/no-non-null-assertion
export const opAnd = bitwiseOperation((a, b) => a.map((v, i) => v & b[i]));
// eslint-disable-next-line no-bitwise, @typescript-eslint/no-non-null-assertion
export const opOr = bitwiseOperation((a, b) => a.map((v, i) => v | b[i]));
// eslint-disable-next-line no-bitwise, @typescript-eslint/no-non-null-assertion
export const opXor = bitwiseOperation((a, b) => a.map((v, i) => v ^ b[i]));
//# sourceMappingURL=bitwise.js.map