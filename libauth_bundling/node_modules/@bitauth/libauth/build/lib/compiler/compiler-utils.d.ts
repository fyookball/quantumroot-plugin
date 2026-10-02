import type { AnyCompilerConfiguration, AuthenticationProgramCommon, AuthenticationProgramStateCommon, AuthenticationProgramStateControlStack, AuthenticationProgramStateMinimum, AuthenticationProgramStateStack, BytecodeGenerationResult, CompilationContextBch, CompilationData, CompilationResult, Compiler, CompilerConfiguration, WalletTemplate } from '../lib.js';
/**
 * Create a {@link Compiler.generateBytecode} method given a compiler
 * configuration.
 */
export declare const createCompilerGenerateBytecodeFunction: <CompilationContext extends CompilationContextBch, Configuration extends AnyCompilerConfiguration<CompilationContext>, ProgramState extends AuthenticationProgramStateControlStack & AuthenticationProgramStateMinimum & AuthenticationProgramStateStack>(compilerConfiguration: Configuration) => <Debug extends boolean>({ data, debug, scriptId, }: {
    scriptId: string;
    data: CompilationData<CompilationContext>;
    debug?: boolean;
}) => Debug extends true ? CompilationResult<ProgramState> : BytecodeGenerationResult<ProgramState>;
/**
 * Create a {@link Compiler} from the provided compiler configuration. This
 * method requires a full {@link CompilerConfiguration} and does not provide any
 * crypto or VM implementations.
 *
 * @param configuration - the configuration from which to create the compiler
 */
export declare const compilerConfigurationToCompilerBch: <Configuration extends AnyCompilerConfiguration<CompilationContextBch>, ProgramState extends AuthenticationProgramStateControlStack & AuthenticationProgramStateMinimum & AuthenticationProgramStateStack>(configuration: Configuration) => Compiler<CompilationContextBch, Configuration, ProgramState>;
/**
 * @deprecated Alias of `compilerConfigurationToCompilerBch` for backwards-compatibility.
 */
export declare const compilerConfigurationToCompilerBCH: <Configuration extends AnyCompilerConfiguration<CompilationContextBch>, ProgramState extends AuthenticationProgramStateControlStack & AuthenticationProgramStateMinimum & AuthenticationProgramStateStack>(configuration: Configuration) => Compiler<CompilationContextBch, Configuration, ProgramState>;
export declare const compilerConfigurationToCompiler: <Configuration extends AnyCompilerConfiguration<CompilationContextBch>, ProgramState extends AuthenticationProgramStateControlStack & AuthenticationProgramStateMinimum & AuthenticationProgramStateStack>(configuration: Configuration) => Compiler<CompilationContextBch, Configuration, ProgramState>;
/**
 * A common {@link createAuthenticationProgram} implementation for
 * most compilers.
 *
 * Accepts the compiled contents of an evaluation and produces a
 * {@link AuthenticationProgramCommon} that can be evaluated to produce the
 * resulting program state.
 *
 * The precise shape of the authentication program produced by this method is
 * critical to the determinism of CashAssembly evaluations for the compiler in
 * which it is used, it therefore must be standardized between compiler
 * implementations.
 *
 * @param evaluationBytecode - the compiled bytecode to incorporate in the
 * created authentication program
 */
export declare const createAuthenticationProgramEvaluationCommon: (evaluationBytecode: Uint8Array) => AuthenticationProgramCommon;
/**
 * Create a compiler using the default common compiler configuration. Because
 * this compiler has no access to a VM, it cannot compile evaluations.
 *
 * @param scriptsAndOverrides - a compiler configuration from which properties
 * will be used to override properties of the default common compiler
 * configuration – must include the `scripts` property
 */
export declare const createCompilerCommon: <Configuration extends CompilerConfiguration<CompilationContextBch>, ProgramState extends AuthenticationProgramStateCommon>(scriptsAndOverrides: Configuration) => Compiler<CompilationContextBch, Configuration, ProgramState>;
/**
 * Perform a simplified compilation on a CashAssembly script containing only hex
 * literals, bigint literals, UTF8 literals, and push statements. Scripts may
 * not contain variables/operations, evaluations, or opcode identifiers (use hex
 * literals instead).
 *
 * This is useful for accepting complex user input in advanced interfaces,
 * especially for `AddressData` and `WalletData`.
 *
 * Returns the compiled bytecode as a `Uint8Array`, or throws an error message.
 *
 * @param script - a simple CashAssembly script containing no variables or
 * evaluations
 */
export declare const compileCashAssembly: (script: string) => string | Uint8Array;
/**
 * Compile a CashAssembly script with detailed debugging information.
 *
 * If no VM override is provided, Libauth's default `BCH_SPEC` VM is used.
 *
 * @param script - the CashAssembly script to compile
 * @param scriptsAndOverrides - a compiler configuration from which properties
 * will be used to override properties of the default common compiler
 * configuration
 */
export declare const debugCashAssemblyCompilation: <Configuration extends CompilerConfiguration<CompilationContextBch>, Overrides extends Configuration & {
    vm?: NonNullable<Configuration["vm"]>;
}>(script: string, scriptsAndOverrides?: Overrides) => string | import("./compiler-types.js").ScenarioGenerationDebuggingResult<AuthenticationProgramStateCommon>;
/**
 * A simple, compile-and-evaluate utility for debugging CashAssembly scripts.
 * Returns the full compilation results, program trace, and verification result;
 * to return only the final program state following evaluation,
 * use {@link evaluateCashAssembly}.
 *
 * If no VM override is provided, Libauth's default `BCH_SPEC` VM is used.
 *
 * @param script - the CashAssembly script to debug
 * @param scriptsAndOverrides - a compiler configuration from which properties
 * will be used to override properties of the default common compiler
 * configuration
 */
export declare const debugCashAssembly: <Configuration extends CompilerConfiguration<CompilationContextBch>, ProgramState extends AuthenticationProgramStateCommon, Overrides extends Configuration & {
    vm?: NonNullable<Configuration["vm"]>;
}>(script: string, scriptsAndOverrides?: Overrides) => {
    error: string;
    success: false;
} | {
    compilation: import("./compiler-types.js").ScenarioGenerationDebuggingResult<AuthenticationProgramStateCommon>;
    success: true;
    trace: ProgramState[];
    verify: string | true;
};
/**
 * A simple, compile-and-evaluate utility for testing CashAssembly scripts.
 * Returns the final program state following evaluation; for full compilation
 * debugging and a program trace, use {@link debugCashAssembly}.
 *
 * If no VM override is provided, Libauth's default `BCH_SPEC` VM is used.
 *
 * @param script - the CashAssembly script to evaluate
 * @param scriptsAndOverrides - a compiler configuration from which properties
 * will be used to override properties of the default common compiler
 * configuration
 */
export declare const evaluateCashAssembly: <Configuration extends CompilerConfiguration<CompilationContextBch>, ProgramState extends AuthenticationProgramStateCommon, Overrides extends Configuration & {
    vm?: NonNullable<Configuration["vm"]>;
}>(script: string, scriptsAndOverrides?: Overrides) => string | ProgramState;
/**
 * Re-assemble a string of disassembled bytecode
 * (see {@link disassembleBytecode}).
 *
 * @param opcodes - a mapping of opcodes to their respective Uint8Array
 * representation
 * @param disassembledBytecode - the disassembled bytecode to re-assemble
 */
export declare const assembleBytecode: (opcodes: {
    [opcode: string]: Uint8Array;
}, disassembledBytecode: string) => import("../lib.js").CompilationResultParseError | {
    bytecode: Uint8Array;
    success: true;
} | import("../lib.js").CompilationResultReduceError<AuthenticationProgramStateCommon> | import("../lib.js").CompilationResultResolveError<AuthenticationProgramStateCommon> | import("../lib.js").CompilationResultSuccess<AuthenticationProgramStateCommon>;
/**
 * Re-assemble a string of disassembled BCH bytecode; see
 * {@link disassembleBytecodeBch}.
 *
 * Note, this method performs automatic minimization of push instructions.
 *
 * @param disassembledBytecode - the disassembled BCH bytecode to re-assemble
 */
export declare const assembleBytecodeBch: (disassembledBytecode: string) => import("../lib.js").CompilationResultParseError | {
    bytecode: Uint8Array;
    success: true;
} | import("../lib.js").CompilationResultReduceError<AuthenticationProgramStateCommon> | import("../lib.js").CompilationResultResolveError<AuthenticationProgramStateCommon> | import("../lib.js").CompilationResultSuccess<AuthenticationProgramStateCommon>;
/**
 * @deprecated Alias of `assembleBytecodeBch` for backwards-compatibility.
 */
export declare const assembleBytecodeBCH: (disassembledBytecode: string) => import("../lib.js").CompilationResultParseError | {
    bytecode: Uint8Array;
    success: true;
} | import("../lib.js").CompilationResultReduceError<AuthenticationProgramStateCommon> | import("../lib.js").CompilationResultResolveError<AuthenticationProgramStateCommon> | import("../lib.js").CompilationResultSuccess<AuthenticationProgramStateCommon>;
/**
 * A convenience method to compile CashAssembly (using
 * {@link assembleBytecodeBch}) to bytecode. If compilation fails, errors are
 * returned as a string.
 */
export declare const cashAssemblyToBin: (cashAssemblyScript: string) => string | Uint8Array;
/**
 * Re-assemble a string of disassembled BCH bytecode; see
 * {@link disassembleBytecodeBtc}.
 *
 * Note, this method performs automatic minimization of push instructions.
 *
 * @param disassembledBytecode - the disassembled BTC bytecode to re-assemble
 */
export declare const assembleBytecodeBtc: (disassembledBytecode: string) => import("../lib.js").CompilationResultParseError | {
    bytecode: Uint8Array;
    success: true;
} | import("../lib.js").CompilationResultReduceError<AuthenticationProgramStateCommon> | import("../lib.js").CompilationResultResolveError<AuthenticationProgramStateCommon> | import("../lib.js").CompilationResultSuccess<AuthenticationProgramStateCommon>;
/**
 * @deprecated Alias of `assembleBytecodeBtc` for backwards-compatibility.
 */
export declare const assembleBytecodeBTC: (disassembledBytecode: string) => import("../lib.js").CompilationResultParseError | {
    bytecode: Uint8Array;
    success: true;
} | import("../lib.js").CompilationResultReduceError<AuthenticationProgramStateCommon> | import("../lib.js").CompilationResultResolveError<AuthenticationProgramStateCommon> | import("../lib.js").CompilationResultSuccess<AuthenticationProgramStateCommon>;
/**
 * Create a partial {@link CompilerConfiguration} from an
 * {@link WalletTemplate} by extracting and formatting the `scripts` and
 * `variables` properties.
 *
 * Note, if this {@link WalletTemplate} might be malformed, first
 * validate it with {@link importWalletTemplate}.
 *
 * @param template - the {@link WalletTemplate} from which to extract
 * the compiler configuration
 */
export declare const walletTemplateToCompilerConfiguration: (template: WalletTemplate) => Pick<CompilerConfiguration, "entityOwnership" | "lockingScriptTypes" | "scenarios" | "scripts" | "unlockingScripts" | "unlockingScriptTimeLockTypes" | "variables">;
//# sourceMappingURL=compiler-utils.d.ts.map