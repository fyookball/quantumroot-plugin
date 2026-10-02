import type { AnyCompilerConfiguration, CompilationContextBch, CompilationData, CompilerConfiguration, CompilerOperation, CompilerOperationErrorFatal, CompilerOperationResult, WalletTemplateHdKey } from '../lib.js';
/**
 * Attempt a series of compiler operations, skipping to the next operation if
 * the current operation returns a {@link CompilerOperationSkip} (indicating it
 * failed and can be skipped). The `finalOperation` may not be skipped, and must
 * either return {@link CompilerOperationSuccess} or
 * {@link CompilerOperationError}.
 *
 * @param operations - an array of skippable operations to try
 * @param finalOperation - a final, un-skippable operation
 */
export declare const attemptCompilerOperations: <CompilationContext = CompilationContextBch>(operations: CompilerOperation<CompilationContext, true>[], finalOperation: CompilerOperation<CompilationContext>) => CompilerOperation<CompilationContext>;
/**
 * Modify a compiler operation to verify that certain properties exist in the
 * {@link CompilationData} and {@link CompilerConfiguration} before executing
 * the provided operation. If the properties don't exist, an error message
 * is returned.
 *
 * This is useful for eliminating repetitive existence checks.
 */
export declare const compilerOperationRequires: <CanBeSkipped extends boolean, RequiredDataProperties extends keyof CompilationData<unknown>, RequiredConfigurationProperties extends keyof CompilerConfiguration, CompilationContext = CompilationContextBch>({ canBeSkipped, dataProperties, configurationProperties, operation, }: {
    canBeSkipped: CanBeSkipped;
    dataProperties: RequiredDataProperties[];
    configurationProperties: RequiredConfigurationProperties[];
    operation: (identifier: string, data: CompilationData<CompilationContext> & Required<Pick<CompilationData<CompilationContext>, RequiredDataProperties>>, configuration: CompilerConfiguration<CompilationContext> & Required<Pick<CompilerConfiguration<CompilationContext>, RequiredConfigurationProperties>>) => CompilerOperationResult<CanBeSkipped>;
}) => CompilerOperation<CompilationContext, CanBeSkipped>;
export declare const compilerOperationAttemptBytecodeResolution: CompilerOperation<CompilationContextBch, true>;
export declare const compilerOperationHelperDeriveHdPrivateNode: ({ addressIndex, entityId, entityHdPrivateKey, configuration, hdKey, identifier, }: {
    addressIndex: number;
    entityId: string;
    entityHdPrivateKey: string;
    configuration: {
        ripemd160: NonNullable<CompilerConfiguration["ripemd160"]>;
        secp256k1: NonNullable<CompilerConfiguration["secp256k1"]>;
        sha256: NonNullable<CompilerConfiguration["sha256"]>;
        sha512: NonNullable<CompilerConfiguration["sha512"]>;
    };
    hdKey: WalletTemplateHdKey;
    identifier: string;
}) => CompilerOperationResult;
export declare const compilerOperationHelperUnknownEntity: (identifier: string, variableId: string) => {
    error: string;
    status: "error";
};
export declare const compilerOperationHelperAddressIndex: (identifier: string) => {
    error: string;
    status: "error";
};
export declare const compilerOperationHelperDeriveHdKeyPrivate: ({ configuration, hdKeys, identifier, }: {
    configuration: {
        entityOwnership: NonNullable<CompilerConfiguration["entityOwnership"]>;
        ripemd160: NonNullable<CompilerConfiguration["ripemd160"]>;
        secp256k1: NonNullable<CompilerConfiguration["secp256k1"]>;
        sha256: NonNullable<CompilerConfiguration["sha256"]>;
        sha512: NonNullable<CompilerConfiguration["sha512"]>;
        variables: NonNullable<CompilerConfiguration["variables"]>;
    };
    hdKeys: NonNullable<CompilationData["hdKeys"]>;
    identifier: string;
}) => CompilerOperationResult;
/**
 * Returns `false` if the target script ID doesn't exist in the compiler
 * configuration (allows for the caller to generate the error message).
 *
 * If the compilation produced errors, returns a
 * {@link CompilerOperationErrorFatal}.
 *
 * If the compilation was successful, returns the compiled bytecode as a
 * `Uint8Array`.
 */
export declare const compilerOperationHelperCompileScript: <CompilationContext>({ targetScriptId, data, configuration, }: {
    targetScriptId: string;
    data: CompilationData<CompilationContext>;
    configuration: AnyCompilerConfiguration<CompilationContext>;
}) => false | Uint8Array | CompilerOperationErrorFatal;
/**
 * Returns either the properly generated `coveredBytecode` or a
 * {@link CompilerOperationErrorFatal}.
 */
export declare const compilerOperationHelperGenerateCoveredBytecode: <CompilationContext>({ data, configuration, identifier, sourceScriptIds, unlockingScripts, }: {
    data: CompilationData<CompilationContext>;
    configuration: AnyCompilerConfiguration<CompilationContext>;
    identifier: string;
    sourceScriptIds: string[];
    unlockingScripts: {
        [unlockingScriptId: string]: string;
    };
}) => CompilerOperationErrorFatal | Uint8Array;
//# sourceMappingURL=compiler-operation-helpers.d.ts.map