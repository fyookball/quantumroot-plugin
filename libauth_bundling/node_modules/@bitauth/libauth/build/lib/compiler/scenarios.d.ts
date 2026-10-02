import type { AnyCompilerConfigurationIgnoreOperations, CompilationContextBch, CompilationData, CompilationResult, Compiler, Output, Scenario, ScenarioGenerationDebuggingResult, WalletTemplateScenario, WalletTemplateScenarioBytecode, WalletTemplateScenarioData, WalletTemplateScenarioOutput } from '../lib.js';
/**
 * The contents of an {@link WalletTemplateScenario} without the `name`
 * and `description`.
 */
export type ScenarioDefinition = Pick<WalletTemplateScenario, 'data' | 'sourceOutputs' | 'transaction'>;
type RequiredTwoLevels<T> = {
    [P in keyof T]-?: Required<T[P]>;
};
/**
 * A scenario definition produced when a child scenario `extends` a parent
 * scenario; this "extended" scenario definition is the same as the parent
 * scenario definition, but any properties defined in the child scenario
 * definition replace those found in the parent scenario definition.
 *
 * All scenarios extend the default scenario, so the `data`, `transaction` (and
 * all `transaction` properties), and `sourceOutputs` properties are guaranteed
 * to be defined in any extended scenario definition.
 */
export type ExtendedScenarioDefinition = Required<Pick<ScenarioDefinition, 'data'>> & Required<Pick<ScenarioDefinition, 'sourceOutputs'>> & RequiredTwoLevels<Pick<ScenarioDefinition, 'transaction'>>;
/**
 * Given a compiler configuration, generate the default scenario that is
 * extended by all the configuration's scenarios.
 *
 * For details on default scenario generation, see
 * {@link WalletTemplateScenario.extends}.
 *
 * @param configuration - the compiler configuration from which to generate the
 * default scenario
 */
export declare const generateDefaultScenarioDefinition: <Configuration extends AnyCompilerConfigurationIgnoreOperations<CompilationContext>, CompilationContext>(configuration: Configuration) => ExtendedScenarioDefinition | string;
/**
 * Extend the `data` property of a scenario definition with values from a parent
 * scenario definition. Returns the extended value for `data`.
 *
 * @param parentData - the scenario `data` that is extended by the child
 * scenario
 * @param childData - the scenario `data` that may override values from the
 * parent scenario
 */
export declare const extendScenarioDefinitionData: (parentData: NonNullable<WalletTemplateScenario["data"]>, childData: NonNullable<WalletTemplateScenario["data"]>) => {
    keys?: {
        privateKeys?: {
            [variableId: string]: string;
        };
    };
    hdKeys?: {
        addressIndex?: number;
        hdPublicKeys?: {
            [entityId: string]: string;
        };
        hdPrivateKeys?: {
            [entityId: string]: string;
        };
    };
    bytecode?: {
        [fullIdentifier: string]: string;
    };
    currentBlockHeight?: number;
    currentBlockTime?: number;
};
/**
 * Extend a child scenario definition with values from a parent scenario
 * definition. Returns the extended values for `data`, `transaction`, and
 * `value`.
 *
 * @param parentScenario - the scenario that is extended by the child scenario
 * @param childScenario - the scenario that may override values from the parent
 * scenario
 */
export declare const extendScenarioDefinition: <ParentScenarioType extends WalletTemplateScenario>(parentScenario: ParentScenarioType, childScenario: WalletTemplateScenario) => ParentScenarioType extends ExtendedScenarioDefinition ? ExtendedScenarioDefinition : ScenarioDefinition;
/**
 * Generate the full scenario that is extended by the provided scenario
 * identifier. Scenarios for which `extends` is `undefined` extend the default
 * scenario for the provided compiler configuration.
 */
export declare const generateExtendedScenario: <Configuration extends AnyCompilerConfigurationIgnoreOperations<CompilationContext>, CompilationContext>({ configuration, scenarioId, sourceScenarioIds, }: {
    /**
     * The compiler configuration from which to generate the extended scenario
     */
    configuration: Configuration;
    /**
     * The identifier of the scenario from which to generate the extended scenario
     */
    scenarioId?: string | undefined;
    /**
     * an array of scenario identifiers indicating the path taken to arrive at the
     * current scenario - used to detect and prevent cycles in extending scenarios
     * (defaults to `[]`)
     */
    sourceScenarioIds?: string[];
}) => ExtendedScenarioDefinition | string;
/**
 * Derive standard {@link CompilationData} properties from an extended scenario
 * definition.
 *
 * @param definition - a scenario definition that has been extended by the
 * default scenario definition
 */
export declare const extendedScenarioDefinitionToCompilationData: (definition: Required<Pick<ScenarioDefinition, "data">> & ScenarioDefinition) => CompilationData;
/**
 * Extend a {@link CompilationData} object with the compiled result of the
 * bytecode scripts provided by an {@link WalletTemplateScenarioData}.
 */
export declare const extendCompilationDataWithScenarioBytecode: <Configuration extends AnyCompilerConfigurationIgnoreOperations<CompilationContext>, CompilationContext>({ compilationData, configuration, scenarioDataBytecodeScripts, }: {
    /**
     * The compilation data to extend.
     */
    compilationData: CompilationData<CompilationContext>;
    /**
     * The compiler configuration in which to compile the scripts.
     */
    configuration: Configuration;
    /**
     * The {@link WalletTemplateScenarioData.bytecode} property.
     */
    scenarioDataBytecodeScripts: NonNullable<WalletTemplateScenarioData["bytecode"]>;
}) => string | CompilationData<CompilationContext>;
/**
 * Compile a {@link WalletTemplateScenarioOutput.valueSatoshis},
 * returning the `Uint8Array` result.
 */
export declare const compileWalletTemplateScenarioValueSatoshis: (valueSatoshisDefinition?: WalletTemplateScenarioOutput<boolean>["valueSatoshis"]) => bigint;
/**
 * Compile an {@link WalletTemplateScenarioBytecode} definition for an
 * {@link WalletTemplateScenario}, returning either a
 * simple `Uint8Array` result or a full CashAssembly {@link CompilationResult}.
 */
export declare const compileWalletTemplateScenarioBytecode: <Configuration extends AnyCompilerConfigurationIgnoreOperations, GenerateBytecode extends Compiler<CompilationContextBch, Configuration, ProgramState>["generateBytecode"], ProgramState>({ bytecodeDefinition, compilationContext, configuration, defaultOverride, extendedScenario, generateBytecode, lockingOrUnlockingScriptIdUnderTest, }: {
    bytecodeDefinition: WalletTemplateScenarioBytecode;
    compilationContext?: CompilationContextBch;
    configuration: Configuration;
    extendedScenario: ExtendedScenarioDefinition;
    defaultOverride: WalletTemplateScenarioData;
    generateBytecode: GenerateBytecode;
    lockingOrUnlockingScriptIdUnderTest?: string;
}) => CompilationResult<ProgramState> | Uint8Array | {
    errors: [{
        error: string;
    }];
    success: false;
};
/**
 * Compile a {@link WalletTemplateScenarioOutput.token},
 * returning the {@link Output.token} result.
 */
export declare const compileScenarioOutputTokenData: (output: WalletTemplateScenarioOutput<boolean>) => Pick<Output, "token">;
/**
 * Generate a scenario given a compiler configuration. If neither `scenarioId`
 * or `unlockingScriptId` are provided, the default scenario for the compiler
 * configuration will be generated.
 *
 * Returns either the full `CompilationData` for the selected scenario or an
 * error message (as a `string`).
 *
 * Note, this method should typically not be used directly, use
 * {@link Compiler.generateScenario} instead.
 */
export declare const generateScenarioBch: <Configuration extends AnyCompilerConfigurationIgnoreOperations, GenerateBytecode extends Compiler<CompilationContextBch, Configuration, ProgramState>["generateBytecode"], ProgramState, Debug extends boolean>({ configuration, generateBytecode, scenarioId, unlockingScriptId, lockingScriptId: providedLockingScriptId, }: {
    /**
     * The compiler configuration from which to generate the scenario.
     */
    configuration: Configuration;
    generateBytecode: GenerateBytecode;
    /**
     * The ID of the scenario to generate. If `undefined`, the default scenario.
     */
    scenarioId?: string | undefined;
    /**
     * The ID of the unlocking script under test by this scenario. If
     * `undefined` but required by the scenario, an error will be produced.
     */
    unlockingScriptId?: string | undefined;
    /**
     * If this scenario does not require an `unlockingScriptId` (an "isolated"
     * locking script with no defined unlocking scripts), the ID of the locking
     * script to generate for this scenario.
     *
     * If `unlockingScriptId` is defined, the locking script ID will be read
     * from `configuration`, and an error will be produced if `lockingScriptId`
     * is also defined.
     */
    lockingScriptId?: string | undefined;
}, debug?: Debug) => string | (Debug extends true ? ScenarioGenerationDebuggingResult<ProgramState> : Scenario);
/**
 * @deprecated Alias of `generateScenarioBch` for backwards-compatibility.
 */
export declare const generateScenarioBCH: <Configuration extends AnyCompilerConfigurationIgnoreOperations, GenerateBytecode extends Compiler<CompilationContextBch, Configuration, ProgramState>["generateBytecode"], ProgramState, Debug extends boolean>({ configuration, generateBytecode, scenarioId, unlockingScriptId, lockingScriptId: providedLockingScriptId, }: {
    /**
     * The compiler configuration from which to generate the scenario.
     */
    configuration: Configuration;
    generateBytecode: GenerateBytecode;
    /**
     * The ID of the scenario to generate. If `undefined`, the default scenario.
     */
    scenarioId?: string | undefined;
    /**
     * The ID of the unlocking script under test by this scenario. If
     * `undefined` but required by the scenario, an error will be produced.
     */
    unlockingScriptId?: string | undefined;
    /**
     * If this scenario does not require an `unlockingScriptId` (an "isolated"
     * locking script with no defined unlocking scripts), the ID of the locking
     * script to generate for this scenario.
     *
     * If `unlockingScriptId` is defined, the locking script ID will be read
     * from `configuration`, and an error will be produced if `lockingScriptId`
     * is also defined.
     */
    lockingScriptId?: string | undefined;
}, debug?: Debug) => string | (Debug extends true ? ScenarioGenerationDebuggingResult<ProgramState> : Scenario);
export {};
//# sourceMappingURL=scenarios.d.ts.map