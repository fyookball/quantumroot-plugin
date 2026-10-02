import type { AuthenticationProgramStateControlStack, AuthenticationProgramStateError, AuthenticationProgramStateMinimum, AuthenticationProgramStateStack, AuthenticationVirtualMachine, ResolvedScript, ScriptReductionTraceScriptNode } from '../lib.js';
/**
 * Perform the standard verification of CashAssembly evaluation results. This
 * ensures that evaluations complete as expected: if an error occurs while
 * computing an evaluation, script compilation should fail.
 *
 * Three requirements are enforced:
 * - the evaluation may not produce an `error`
 * - the resulting stack must contain exactly 1 item
 * - the resulting execution stack must be empty (no missing `OP_ENDIF`s)
 *
 * This differs from the virtual machine's built-in `vm.verify` in that it is
 * often more lenient, for example, evaluations can succeed with a non-truthy
 * value on top of the stack.
 *
 * @param state - the final program state to verify
 */
export declare const verifyCashAssemblyEvaluationState: <ProgramState extends AuthenticationProgramStateControlStack & AuthenticationProgramStateError & AuthenticationProgramStateStack>(state: ProgramState) => string | true;
/**
 * Reduce a resolved script, returning the resulting bytecode and a trace of the
 * reduction process.
 *
 * This method will return an error if provided a {@link resolvedScript} with
 * resolution errors. To check for resolution errors, use
 * {@link getResolutionErrors}.
 *
 * @param resolvedScript - the {@link CompiledScript} to reduce
 * @param vm - the {@link AuthenticationVirtualMachine} to use for evaluations
 * @param createEvaluationProgram - a method which accepts the compiled bytecode
 * of an evaluation and returns the authentication program used to evaluate it
 */
export declare const reduceScript: <ProgramState extends AuthenticationProgramStateControlStack & AuthenticationProgramStateError & AuthenticationProgramStateMinimum & AuthenticationProgramStateStack, AuthenticationProgram, ResolvedTransaction>(resolvedScript: ResolvedScript<ProgramState>, vm?: AuthenticationVirtualMachine<ResolvedTransaction, AuthenticationProgram, ProgramState>, createEvaluationProgram?: (instructions: Uint8Array) => AuthenticationProgram) => ScriptReductionTraceScriptNode<ProgramState>;
//# sourceMappingURL=reduce.d.ts.map