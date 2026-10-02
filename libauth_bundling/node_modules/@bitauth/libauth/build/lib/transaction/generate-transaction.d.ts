import type { AnyCompilerConfiguration, BytecodeGenerationErrorLocking, BytecodeGenerationErrorUnlocking, CompilationContextBch, CompilationData, Compiler, Input, InputTemplate, Output, OutputTemplate, TransactionGenerationAttempt, TransactionGenerationError, TransactionTemplateFixed } from '../lib.js';
export declare const compileOutputTemplate: <CompilerType extends Compiler<unknown, AnyCompilerConfiguration<unknown>, unknown>, ProgramState>({ outputTemplate, index, }: {
    outputTemplate: OutputTemplate<CompilerType>;
    index: number;
}) => BytecodeGenerationErrorLocking<ProgramState> | Output;
export declare const compileInputTemplate: <CompilerType extends Compiler<CompilationContext, AnyCompilerConfiguration<CompilationContext>, unknown>, ProgramState, CompilationContext extends CompilationContextBch = CompilationContextBch>({ inputTemplate, index, template, outputs, }: {
    inputTemplate: InputTemplate<CompilerType>;
    index: number;
    outputs: Output[];
    template: TransactionTemplateFixed<CompilerType>;
}) => BytecodeGenerationErrorUnlocking<ProgramState> | Input;
/**
 * Generate a `Transaction` given a `TransactionTemplate` and any applicable
 * compilers and compilation data.
 *
 * Returns either a `Transaction` or an array of compilation errors.
 *
 * For each `CompilationDirective`, the `compilationContext` property will be
 * automatically provided to the compiler. All other necessary `CompilationData`
 * properties must be specified in the `TransactionTemplate`.
 *
 * @param template - the `TransactionTemplate` from which to create the
 * `Transaction`
 */
export declare const generateTransaction: <CompilerType extends Compiler<any, AnyCompilerConfiguration<any>, any>, ProgramState>(template: TransactionTemplateFixed<CompilerType>) => TransactionGenerationAttempt<ProgramState>;
/**
 * TODO: fundamentally unsound, migrate to PST format
 *
 * Extract a map of successfully resolved variables to their resolved bytecode.
 *
 * @param transactionGenerationError - a transaction generation attempt where
 * `success` is `false`
 */
export declare const extractResolvedVariables: <ProgramState>(transactionGenerationError: TransactionGenerationError<ProgramState>) => {
    [fullIdentifier: string]: Uint8Array;
};
/**
 * TODO: fundamentally unsound, migrate to PST format
 *
 * Given an unsuccessful transaction generation result, extract a map of the
 * identifiers missing from the compilation mapped to the entity that owns each
 * variable.
 *
 * Returns `false` if any errors are fatal (the error either cannot be resolved
 * by providing a variable, or the entity ownership of the required variable was
 * not provided in the compilation data).
 *
 * @param transactionGenerationError - a transaction generation result where
 * `success` is `false`
 */
export declare const extractMissingVariables: <ProgramState>(transactionGenerationError: TransactionGenerationError<ProgramState>) => false | {
    [fullIdentifier: string]: string;
};
/**
 * TODO: fundamentally unsound, migrate to PST format
 *
 * Safely extend a compilation data with resolutions provided by other entities
 * (via `extractResolvedVariables`).
 *
 * It is security-critical that compilation data only be extended with expected
 * identifiers from the proper owning entity of each variable. See
 * `CompilationData.bytecode` for details.
 *
 * Returns `false` if any errors are fatal (the error either cannot be resolved
 * by providing a variable, or the entity ownership of the required variable was
 * not provided in the compilation data).
 *
 * @remarks
 * To determine which identifiers are required by a given compilation, the
 * compilation is first attempted with only trusted variables: variables owned
 * or previously verified (like `WalletData`) by the compiling entity. If this
 * compilation produces a `TransactionGenerationError`, the error can be
 * provided to `safelyExtendCompilationData`, along with the trusted compilation
 * data and a mapping of untrusted resolutions (where the result of
 * `extractResolvedVariables` is assigned to the entity ID of the entity from
 * which they were received).
 *
 * The first compilation must use only trusted compilation data
 */
export declare const safelyExtendCompilationData: <ProgramState, CompilationContext = CompilationContextBch>(transactionGenerationError: TransactionGenerationError<ProgramState>, trustedCompilationData: CompilationData<CompilationContext>, untrustedResolutions: {
    [providedByEntityId: string]: ReturnType<typeof extractResolvedVariables>;
}) => CompilationData<CompilationContext> | false;
//# sourceMappingURL=generate-transaction.d.ts.map