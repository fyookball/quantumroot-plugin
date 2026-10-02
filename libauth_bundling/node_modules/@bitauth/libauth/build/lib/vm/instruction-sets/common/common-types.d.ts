import type { AuthenticationProgramStateControlStack, AuthenticationProgramStateError, Input, Output, TransactionCommon } from '../../../lib.js';
export declare const undefinedOperation: <State extends AuthenticationProgramStateControlStack<unknown> & AuthenticationProgramStateError>(state: State) => State;
/**
 * A reduced version of {@link AuthenticationProgramCommon} in which some
 * transaction input `unlockingBytecode` values may be undefined. This context
 * is required by the compiler to generate signatures.
 *
 * As of BCH 2022, `sourceOutputs.lockingBytecode` is not required for any
 * signing serialization algorithms. However, this type requires each to be
 * provided in anticipation of a future signing serialization algorithm that
 * supports committing to UTXO bytecode values.
 */
export type CompilationContext<TransactionType extends TransactionCommon<Input<Uint8Array | undefined>>> = {
    inputIndex: number;
    sourceOutputs: Output[];
    transaction: TransactionType;
};
export type CompilationContextCommon = CompilationContext<TransactionCommon<Input<Uint8Array | undefined>>>;
/**
 * This is a meaningless but complete {@link CompilationContextCommon} that uses
 * a default value for each property. This is useful for testing
 * and debugging.
 */
export declare const createCompilationContextCommonTesting: ({ sourceOutputs, inputs, locktime, version, outputs, }?: {
    sourceOutputs?: CompilationContextCommon["sourceOutputs"];
    inputs?: CompilationContextCommon["transaction"]["inputs"];
    locktime?: CompilationContextCommon["transaction"]["locktime"];
    version?: CompilationContextCommon["transaction"]["version"];
    outputs?: CompilationContextCommon["transaction"]["outputs"];
}) => CompilationContextCommon;
//# sourceMappingURL=common-types.d.ts.map