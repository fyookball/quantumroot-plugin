import type { AuthenticationProgramStateError, AuthenticationProgramStateStack, Operation } from '../../../lib.js';
export declare const createOpCat: ({ maximumStackItemLength, }?: {
    maximumStackItemLength?: number | undefined;
}) => <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State) => State;
export declare const opCat: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State) => State;
export declare const opSplit: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State) => State;
/**
 * Pad a minimally-encoded VM number for `OP_NUM2BIN`.
 */
export declare const padMinimallyEncodedVmNumber: (vmNumber: Uint8Array, length: number) => Uint8Array;
export declare const createOpNum2Bin: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>({ maximumStackItemLength, }?: {
    maximumStackItemLength?: number;
}) => Operation<State>;
export declare const opNum2Bin: Operation<AuthenticationProgramStateError & AuthenticationProgramStateStack>;
export declare const createOpBin2Num: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>({ maximumStackItemLength, maximumVmNumberByteLength, }?: {
    maximumStackItemLength?: number;
    maximumVmNumberByteLength?: number;
}) => Operation<State>;
export declare const opBin2Num: Operation<AuthenticationProgramStateError & AuthenticationProgramStateStack>;
//# sourceMappingURL=format.d.ts.map