import type { AuthenticationProgramStateError, AuthenticationProgramStateStack, AuthenticationProgramStateTransactionContext } from '../../../lib.js';
export declare const useLocktime: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State, operation: (nextState: State, locktime: number) => State) => State;
export declare const opCheckLockTimeVerify: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack & AuthenticationProgramStateTransactionContext>(state: State) => State;
export declare const opCheckSequenceVerify: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack & AuthenticationProgramStateTransactionContext>(state: State) => State;
//# sourceMappingURL=time.d.ts.map