import type { AuthenticationProgramStateError, AuthenticationProgramStateResourceLimits, AuthenticationProgramStateStack } from '../../../../lib.js';
export declare const opInvert: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State) => State;
export declare const createOpLShiftNum: ({ maximumStackItemLength }?: {
    maximumStackItemLength?: number | undefined;
}) => <State extends AuthenticationProgramStateError & AuthenticationProgramStateResourceLimits & AuthenticationProgramStateStack>(state: State) => State;
export declare const createOpRShiftNum: ({ maximumStackItemLength }?: {
    maximumStackItemLength?: number | undefined;
}) => <State extends AuthenticationProgramStateError & AuthenticationProgramStateResourceLimits & AuthenticationProgramStateStack>(state: State) => State;
/**
 * Perform a fixed-length, logical left shift of `bin` by the `bitCount`,
 * equivalent to `OP_LSHIFTBIN` in the Bitcoin Cash VM.
 * @param bin - the Uint8Array to shift.
 * @param bitCount - the count of bits by which to shift `bin`.
 */
export declare const binaryShiftLeft: (bin: Uint8Array, bitCount: bigint) => Uint8Array;
/**
 * Perform a fixed-length, logical right shift of `bin` by the `bitCount`,
 * equivalent to `OP_RSHIFTBIN` in the Bitcoin Cash VM.
 * @param bin - the Uint8Array to shift.
 * @param bitCount - the count of bits by which to shift `bin`.
 */
export declare const binaryShiftRight: (bin: Uint8Array, bitCount: bigint) => Uint8Array;
export declare const opLShiftBin: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State) => State;
export declare const opRShiftBin: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State) => State;
//# sourceMappingURL=bch-2026-bitwise.d.ts.map