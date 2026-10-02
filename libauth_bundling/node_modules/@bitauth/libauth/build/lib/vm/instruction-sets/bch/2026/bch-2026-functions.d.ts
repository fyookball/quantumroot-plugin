import type { AuthenticationProgramStateControlStack, AuthenticationProgramStateError, AuthenticationProgramStateFunctionTable, AuthenticationProgramStateMinimum, AuthenticationProgramStateStack } from '../../../../lib.js';
export declare const createOpDefine: ({ maximumFunctionIdentifierLength, }?: {
    maximumFunctionIdentifierLength?: number | undefined;
}) => <State extends AuthenticationProgramStateError & AuthenticationProgramStateFunctionTable & AuthenticationProgramStateStack>(state: State) => State;
export declare const opInvoke: <State extends AuthenticationProgramStateControlStack & AuthenticationProgramStateError & AuthenticationProgramStateFunctionTable & AuthenticationProgramStateMinimum & AuthenticationProgramStateStack>(state: State) => State;
//# sourceMappingURL=bch-2026-functions.d.ts.map