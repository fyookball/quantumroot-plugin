import type { AuthenticationProgramStackFrame, AuthenticationProgramStateControlStack, AuthenticationProgramStateError, AuthenticationProgramStateStack } from '../../../lib.js';
export declare const opVerify: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State) => State;
export declare const reservedOperation: <State extends AuthenticationProgramStateError>(state: State) => State;
export declare const opReturn: <State extends AuthenticationProgramStateError>(state: State) => State;
/**
 * Return the provided state with the provided value pushed to its control stack.
 * @param state - the state to update and return
 * @param data - the value to push to the stack
 */
export declare const pushToControlStack: <State extends AuthenticationProgramStateControlStack>(state: State, value: AuthenticationProgramStackFrame | boolean | number) => State;
export declare const opIf: <State extends AuthenticationProgramStateControlStack & AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State) => State;
/**
 * Note, `OP_NOTIF` is not completely equivalent to `OP_NOT OP_IF`. `OP_NOT`
 * operates on a VM Number (as the inverse of `OP_0NOTEQUAL`), while `OP_NOTIF`
 * checks the "truthy-ness" of a stack item like `OP_IF`.
 */
export declare const opNotIf: <State extends AuthenticationProgramStateControlStack & AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State) => State;
export declare const opEndIf: <State extends AuthenticationProgramStateControlStack & AuthenticationProgramStateError>(state: State) => State;
export declare const opElse: <State extends AuthenticationProgramStateControlStack & AuthenticationProgramStateError>(state: State) => State;
//# sourceMappingURL=flow-control.d.ts.map