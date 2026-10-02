import type { AnyCompilerConfiguration, AuthenticationProgramStateControlStack, AuthenticationProgramStateMinimum, AuthenticationProgramStateStack, CompilationContextBch, CompilationContextCommon, CompilationData, CompilationResult } from '../lib.js';
/**
 * Parse, resolve, and reduce the selected script using the provided `data` and
 * `configuration`.
 *
 * Note, locktime validation only occurs if `compilationContext` is provided in
 * the configuration.
 */
export declare const compileScript: <ProgramState extends AuthenticationProgramStateControlStack & AuthenticationProgramStateMinimum & AuthenticationProgramStateStack = AuthenticationProgramStateControlStack & import("../lib.js").AuthenticationProgramStackFrame & {
    metrics: {
        evaluatedInstructionCount: number;
    };
} & AuthenticationProgramStateStack, CompilationContext extends CompilationContextCommon = CompilationContextBch>(scriptId: string, data: CompilationData<CompilationContext>, configuration: AnyCompilerConfiguration<CompilationContext>) => CompilationResult<ProgramState>;
//# sourceMappingURL=compile.d.ts.map