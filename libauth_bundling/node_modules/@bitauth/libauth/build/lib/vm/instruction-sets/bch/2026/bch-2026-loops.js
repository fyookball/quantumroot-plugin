import { applyError, executionIsActive, pushToControlStack, stackItemIsTruthy, useOneStackItem, } from '../../common/common.js';
import { AuthenticationErrorBch2026 } from './bch-2026-errors.js';
export const opBegin = (state) => executionIsActive(state)
    ? pushToControlStack(state, state.ip)
    : pushToControlStack(state, -1 /* Constants.markInactiveOpBegin */);
export const opUntil = (state) => {
    const controlValue = state.controlStack[state.controlStack.length - 1];
    if (typeof controlValue !== 'number') {
        return applyError(state, AuthenticationErrorBch2026.unexpectedUntil);
    }
    if (!executionIsActive(state)) {
        // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
        state.controlStack.pop();
        return controlValue === -1 /* Constants.markInactiveOpBegin */
            ? state
            : applyError(state, AuthenticationErrorBch2026.unexpectedUntilMissingEndIf);
    }
    return useOneStackItem(state, (nextState, [item]) => {
        if (stackItemIsTruthy(item)) {
            // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
            state.controlStack.pop();
            return nextState;
        }
        // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
        nextState.ip = controlValue;
        return nextState;
    });
};
//# sourceMappingURL=bch-2026-loops.js.map