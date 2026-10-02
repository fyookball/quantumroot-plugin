import type { AnyCompilerConfiguration, AuthenticationProgramStateControlStack, AuthenticationProgramStateMinimum, AuthenticationProgramStateStack, CashAssemblyScriptSegment, CompilationData, CompilationResultSuccess, CompilerOperationResult, IdentifierResolutionFunction, ResolvedScript } from '../lib.js';
import type { CompilationError, CompilationResult } from './language-types.js';
export declare const resolveScriptSegment: <ProgramState>(segment: CashAssemblyScriptSegment, resolveIdentifiers: IdentifierResolutionFunction<ProgramState>) => ResolvedScript<ProgramState>;
export declare enum BuiltInVariables {
    currentBlockTime = "current_block_time",
    currentBlockHeight = "current_block_height",
    signingSerialization = "signing_serialization"
}
/**
 * If the identifier can be successfully resolved as a variable, the result is
 * returned as a Uint8Array. If the identifier references a known variable, but
 * an error occurs in resolving it, the error is returned as a string.
 * Otherwise, the identifier is not recognized as a variable, and this method
 * simply returns `false`.
 *
 * @param identifier - The full identifier used to describe this operation, e.g.
 * `owner.schnorr_signature.all_outputs`.
 * @param data - The {@link CompilationData} provided to the compiler
 * @param configuration - The {@link CompilerConfiguration} provided to
 * the compiler
 */
export declare const resolveVariableIdentifier: <CompilationContext, Configuration extends AnyCompilerConfiguration<CompilationContext>>({ data, configuration, identifier, }: {
    data: CompilationData<CompilationContext>;
    configuration: Configuration;
    identifier: string;
}) => CompilerOperationResult<true>;
/**
 * A text-formatting method to pretty-print the list of expected inputs
 * (`Encountered unexpected input while parsing script. Expected ...`). If
 * present, the `EOF` expectation is always moved to the end of the list.
 * @param expectedArray - the alphabetized list of expected inputs produced by
 * `parseScript`
 */
export declare const describeExpectedInput: (expectedArray: string[]) => string;
export declare const createEmptyRange: () => {
    endColumn: number;
    endLineNumber: number;
    startColumn: number;
    startLineNumber: number;
};
/**
 * Validate all compilation data (i.e. validate all public and private keys),
 * returning an array of validation errors. If no validity issues are detected,
 * an empty array is returned.
 *
 * The function ensures that compilation fails whenever invalid compilation data
 * is provided, regardless of whether or not the offending public or private key
 * material is used. This is intended to surface software defects (particularly
 * in the software used by counterparties) as early as possible.
 */
export declare const validateCompilationData: <CompilationContext = unknown>({ configuration, data, }: {
    configuration: AnyCompilerConfiguration<CompilationContext>;
    data: CompilationData<CompilationContext>;
}) => CompilationError[];
/**
 * This method is generally for internal use. The {@link compileScript} method
 * is the recommended API for direct compilation.
 */
export declare const compileScriptRaw: <ProgramState extends AuthenticationProgramStateControlStack & AuthenticationProgramStateMinimum & AuthenticationProgramStateStack = AuthenticationProgramStateControlStack & import("../lib.js").AuthenticationProgramStackFrame & {
    metrics: {
        evaluatedInstructionCount: number;
    };
} & AuthenticationProgramStateStack, CompilationContext = unknown>({ data, configuration, scriptId, }: {
    data: CompilationData<CompilationContext>;
    configuration: AnyCompilerConfiguration<CompilationContext>;
    scriptId: string;
}) => CompilationResult<ProgramState>;
/**
 * Compile an internal script identifier.
 *
 * @remarks
 * If the identifier can be successfully resolved as a script, the script is
 * compiled and returned as a {@link CompilationResultSuccess}. If an error
 * occurs in compiling it, the error is returned as a string.
 *
 * Otherwise, the identifier is not recognized as a script, and this method
 * simply returns `false`.
 */
export declare const resolveScriptIdentifier: <CompilationContext, ProgramState>({ data, configuration, identifier, }: {
    /**
     * The identifier of the script to be resolved
     */
    identifier: string;
    /**
     * The provided {@link CompilationData}
     */
    data: CompilationData<CompilationContext>;
    /**
     * the provided {@link CompilerConfiguration}
     */
    configuration: AnyCompilerConfiguration<CompilationContext>;
}) => CompilationResultSuccess<ProgramState> | string | false;
/**
 * Return an {@link IdentifierResolutionFunction} for use in
 * {@link resolveScriptSegment}.
 *
 * @param scriptId - the `id` of the script for which the resulting
 * `IdentifierResolutionFunction` will be used.
 */
export declare const createIdentifierResolver: <CompilationContext, ProgramState>({ data, configuration, }: {
    /**
     * The actual variable values (private keys, shared wallet data, shared
     * address data, etc.) to use in resolving variables.
     */
    data: CompilationData<CompilationContext>;
    /**
     * A snapshot of the configuration around `scriptId`, see
     * {@link CompilerConfiguration} for details
     */
    configuration: AnyCompilerConfiguration<CompilationContext>;
}) => IdentifierResolutionFunction<ProgramState>;
/**
 * This method is generally for internal use. The {@link compileScript} method
 * is the recommended API for direct compilation.
 */
export declare const compileScriptContents: <ProgramState extends AuthenticationProgramStateControlStack & AuthenticationProgramStateMinimum & AuthenticationProgramStateStack = AuthenticationProgramStateControlStack & import("../lib.js").AuthenticationProgramStackFrame & {
    metrics: {
        evaluatedInstructionCount: number;
    };
} & AuthenticationProgramStateStack, CompilationContext = unknown>({ data, configuration, script, }: {
    script: string;
    data: CompilationData<CompilationContext>;
    configuration: AnyCompilerConfiguration<CompilationContext>;
}) => CompilationResult<ProgramState>;
//# sourceMappingURL=resolve.d.ts.map