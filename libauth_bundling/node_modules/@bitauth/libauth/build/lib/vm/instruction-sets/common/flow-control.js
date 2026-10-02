import { executionIsActive, useOneStackItem } from './combinators.js';
import { applyError, AuthenticationErrorCommon } from './errors.js';
import { stackItemIsTruthy } from './instruction-sets-utils.js';
export const opVerify = (state) => useOneStackItem(state, (nextState, [item]) => stackItemIsTruthy(item)
    ? nextState
    : applyError(nextState, AuthenticationErrorCommon.failedVerify));
export const reservedOperation = (state) => applyError(state, AuthenticationErrorCommon.calledReserved);
export const opReturn = (state) => applyError(state, AuthenticationErrorCommon.calledReturn);
/**
 * Return the provided state with the provided value pushed to its control stack.
 * @param state - the state to update and return
 * @param data - the value to push to the stack
 */
export const pushToControlStack = (state, value) => {
    // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
    state.controlStack.push(value);
    return state;
};
export const opIf = (state) => {
    if (executionIsActive(state)) {
        return useOneStackItem(state, (nextState, [item]) => pushToControlStack(nextState, stackItemIsTruthy(item)));
    }
    return pushToControlStack(state, false);
};
/**
 * Note, `OP_NOTIF` is not completely equivalent to `OP_NOT OP_IF`. `OP_NOT`
 * operates on a VM Number (as the inverse of `OP_0NOTEQUAL`), while `OP_NOTIF`
 * checks the "truthy-ness" of a stack item like `OP_IF`.
 */
export const opNotIf = (state) => {
    if (executionIsActive(state)) {
        return useOneStackItem(state, (nextState, [item]) => pushToControlStack(nextState, !stackItemIsTruthy(item)));
    }
    return pushToControlStack(state, false);
};
export const opEndIf = (state) => {
    // eslint-disable-next-line functional/immutable-data
    const element = state.controlStack.pop();
    if (typeof element !== 'boolean') {
        return applyError(state, AuthenticationErrorCommon.unexpectedEndIf);
    }
    return state;
};
export const opElse = (state) => {
    const top = state.controlStack[state.controlStack.length - 1];
    if (typeof top !== 'boolean') {
        return applyError(state, AuthenticationErrorCommon.unexpectedElse);
    }
    // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
    state.controlStack[state.controlStack.length - 1] = !top;
    return state;
};
//# sourceMappingURL=flow-control.js.map