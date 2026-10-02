import type { AuthenticationProgramStateError, AuthenticationProgramStateResourceLimits, AuthenticationProgramStateStack, Operation } from '../../../lib.js';
export declare const opEqual: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State) => State;
export declare const opEqualVerify: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State) => State;
export declare const bitwiseOperation: <State extends AuthenticationProgramStateError & AuthenticationProgramStateResourceLimits & AuthenticationProgramStateStack>(combine: (a: Uint8Array, b: Uint8Array) => Uint8Array) => Operation<State>;
export declare const opAnd: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State) => State;
export declare const opOr: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State) => State;
export declare const opXor: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State) => State;
//# sourceMappingURL=bitwise.d.ts.map