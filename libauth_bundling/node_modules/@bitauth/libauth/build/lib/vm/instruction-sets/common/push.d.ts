import type { AuthenticationProgramStateControlStack, AuthenticationProgramStateError, AuthenticationProgramStateMinimum, AuthenticationProgramStateStack, Operation } from '../../../lib.js';
/**
 * Returns the minimal bytecode required to push the provided `data` to the
 * stack.
 *
 * @remarks
 * This method conservatively encodes a `Uint8Array` as a data push. For VM
 * Numbers that can be pushed using a single opcode (-1 through 16), the
 * equivalent bytecode value is returned. Other `data` values will be prefixed
 * with the proper opcode and push length bytes (if necessary) to create the
 * minimal push instruction.
 *
 * Note, while some single-byte VM Number pushes will be minimally-encoded by
 * this method, all larger inputs will be encoded as-is (it cannot be assumed
 * that inputs are intended to be used as VM Numbers). To encode the push of a
 * VM Number, minimally-encode the number before passing it to this
 * method, e.g.:
 * `encodeDataPush(bigIntToVmNumber(decodeVmNumber(nonMinimalNumber)))`.
 *
 * The maximum `bytecode` length that can be encoded for a push in the Bitcoin
 * system is `4294967295` (~4GB). This method assumes a smaller input – if
 * `bytecode` has the potential to be longer, it should be checked (and the
 * error handled) prior to calling this method.
 *
 * @param data - the Uint8Array to push to the stack
 */
export declare const encodeDataPush: (data: Uint8Array) => Uint8Array;
/**
 * Returns true if the provided `data` is minimally-encoded by the provided
 * `opcode`.
 * @param opcode - the opcode used to push `data`
 * @param data - the contents of the push
 */
export declare const isMinimalDataPush: (opcode: number, data: Uint8Array) => boolean;
export declare const pushOperation: <State extends AuthenticationProgramStateControlStack<unknown> & AuthenticationProgramStateError & AuthenticationProgramStateMinimum & AuthenticationProgramStateStack>({ maximumStackItemLength, }?: {
    maximumStackItemLength?: number;
}) => Operation<State>;
/**
 * @param number - the number that is pushed to the stack by this operation.
 * @returns an operation that pushes a number to the stack.
 */
export declare const pushNumberOperation: <ProgramState extends AuthenticationProgramStateMinimum & AuthenticationProgramStateStack>(number: number) => (state: ProgramState) => ProgramState;
//# sourceMappingURL=push.d.ts.map