import type { AuthenticationProgramStateError, AuthenticationProgramStateResourceLimits, AuthenticationProgramStateStack } from '../../../../lib.js';
export declare const createOpPow: <State extends AuthenticationProgramStateError & AuthenticationProgramStateResourceLimits & AuthenticationProgramStateStack>({ maximumVmNumberByteLength, }?: {
    maximumVmNumberByteLength?: number | undefined;
}) => (state: State) => State;
export declare const opPow: (state: AuthenticationProgramStateError & AuthenticationProgramStateResourceLimits & AuthenticationProgramStateStack) => AuthenticationProgramStateError & AuthenticationProgramStateResourceLimits & AuthenticationProgramStateStack;
//# sourceMappingURL=bch-spec-pow.d.ts.map