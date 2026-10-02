import type { AuthenticationProgramStateControlStack, AuthenticationProgramStateError, AuthenticationProgramStateResourceLimits, AuthenticationProgramStateStack, InstructionSetOperationMapping, Operation } from '../../../lib.js';
export declare const incrementOperationCount: <State extends {
    operationCount: number;
}>(operation: Operation<State>) => Operation<State>;
export declare const executionIsActive: <State extends AuthenticationProgramStateControlStack<unknown>>(state: State) => boolean;
export declare const conditionallyEvaluate: <State extends AuthenticationProgramStateControlStack<unknown>>(operation: Operation<State>) => Operation<State>;
/**
 * Map a function over each operation in an {@link InstructionSet.operations}
 * object, assigning the result to the same `opcode` in the resulting object.
 * @param operationMap - an operations map from an {@link InstructionSet}
 * @param combinators - a list of functions to apply (in order) to
 * each operation
 */
export declare const mapOverOperations: <State>(combinators: ((operation: Operation<State>) => Operation<State>)[], operationMap: InstructionSetOperationMapping<State>) => InstructionSetOperationMapping<State>;
/**
 * Pop one stack item off of `state.stack` and provide that item to `operation`.
 */
export declare const useOneStackItem: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State, operation: (nextState: State, [value]: [Uint8Array]) => State) => State;
export declare const useTwoStackItems: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State, operation: (nextState: State, [valueTop, valueTwo]: [Uint8Array, Uint8Array]) => State) => State;
export declare const useThreeStackItems: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State, operation: (nextState: State, [valueTop, valueTwo, valueThree]: [Uint8Array, Uint8Array, Uint8Array]) => State) => State;
export declare const useFourStackItems: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State, operation: (nextState: State, [valueTop, valueTwo, valueThree, valueFour]: [Uint8Array, Uint8Array, Uint8Array, Uint8Array]) => State) => State;
export declare const useSixStackItems: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State, operation: (nextState: State, [valueTop, valueTwo, valueThree, valueFour, valueFive, valueSix]: [Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array, Uint8Array]) => State) => State;
export declare const useOneVmNumber: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State, operation: (nextState: State, [value]: [bigint]) => State, { maximumVmNumberByteLength, requireMinimalEncoding, }?: {
    maximumVmNumberByteLength?: number;
    requireMinimalEncoding?: boolean;
}) => State;
/**
 * Note that returned parameters are in source order,
 * e.g. `<first> <second> OP_CODE`.
 */
export declare const useTwoVmNumbers: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State, operation: (nextState: State, [firstValue, secondValue]: [bigint, bigint]) => State, { maximumVmNumberByteLength, requireMinimalEncoding, }?: {
    maximumVmNumberByteLength?: number;
    requireMinimalEncoding?: boolean;
}) => State;
/**
 * Note that returned parameters are in source order,
 * e.g. `<first> <second> <third> OP_CODE`.
 */
export declare const useThreeVmNumbers: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State, operation: (nextState: State, [firstValue, secondValue, thirdValue]: [bigint, bigint, bigint]) => State, { maximumVmNumberByteLength, requireMinimalEncoding, }?: {
    maximumVmNumberByteLength?: number;
    requireMinimalEncoding?: boolean;
}) => State;
/**
 * Return the provided state with the provided value pushed to its stack.
 * @param state - the state to update and return
 * @param data - the values to push to the stack
 * @param pushedBytes - the number of bytes this operation should add to
 * `state.metrics.stackPushedBytes`; defaults to the sum of all `data` lengths
 */
export declare const pushToStack: <State extends AuthenticationProgramStateStack>(state: State, data: Uint8Array[], { pushedBytes }?: {
    pushedBytes?: number | undefined;
}) => State;
/**
 * If the provided item exceeds the maximum stack item length, apply an error.
 * Otherwise, return the provided state with the item pushed to its stack.
 * @param state - the state to update and return
 * @param item - the value to push to the stack
 */
export declare const pushToStackChecked: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State, item: Uint8Array, { maximumStackItemLength, }?: {
    maximumStackItemLength?: number | undefined;
}) => State;
/**
 * Return the provided state with the VM number pushed to its stack.
 * @param state - the state to update and return
 * @param vmNumber - the number to push to the stack
 */
export declare const pushToStackVmNumber: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: State, vmNumber: bigint) => State;
/**
 * If the provided number is outside the VM number range, apply an error.
 * Otherwise, return the provided state with the VM number pushed to its stack.
 * @param state - the state to update and return
 * @param vmNumber - the VM number to push to the stack
 */
export declare const pushToStackVmNumberChecked: <State extends AuthenticationProgramStateError & AuthenticationProgramStateResourceLimits & AuthenticationProgramStateStack>(state: State, vmNumber: bigint, { maximumVmNumberByteLength, hasEncodingCost, }?: {
    maximumVmNumberByteLength?: number | undefined;
    hasEncodingCost?: boolean | undefined;
}) => State;
export declare const combineOperations: <State>(firstOperation: Operation<State>, secondOperation: Operation<State>) => (state: State) => State;
/**
 * Given a message length, compute and return the number of hash digest
 * iterations required. (See `CHIP-2021-05-vm-limits`)
 */
export declare const lengthToHashDigestIterationCount: (messageLength: number) => number;
/**
 * Given a program state, increment the hash digest iteration count for a
 * message of the provided length. If the total would exceed the maximum, append
 * an error.
 */
export declare const incrementHashDigestIterations: <State extends AuthenticationProgramStateError & AuthenticationProgramStateResourceLimits>(state: State, { messageLength, resultIsHashed, }: {
    /**
     * The length of the message to be hashed.
     */
    messageLength: number;
    /**
     * If `true`, the result of the initial hashing process is to be provided to
     * the hashing function one final time (i.e. for `OP_HASH160`
     * and `OP_HASH256`).
     */
    resultIsHashed: boolean;
}, operation: (nextState: State) => State) => State;
//# sourceMappingURL=combinators.d.ts.map