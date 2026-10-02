/* eslint-disable max-lines */
import { bigIntToBinUint256BEClamped, binToHex, binToValueSatoshis, hexToBin, } from '../format/format.js';
import { deriveHdPrivateNodeFromSeed, encodeHdPrivateKey } from '../key/key.js';
import { compileScriptRaw, stringifyErrors } from '../language/language.js';
import { CompilerDefaults } from './compiler-defaults.js';
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
// eslint-disable-next-line complexity
export const generateDefaultScenarioDefinition = (configuration) => {
    const { variables, entityOwnership } = configuration;
    const keyVariableIds = variables === undefined
        ? []
        : Object.entries(variables)
            .filter((entry) => entry[1].type === 'Key')
            .map(([id]) => id);
    const entityIds = entityOwnership === undefined
        ? []
        : Object.keys(Object.values(entityOwnership).reduce((all, entityId) => ({ ...all, [entityId]: true }), {}));
    const valueMap = [...keyVariableIds, ...entityIds]
        .sort((idA, idB) => idA.localeCompare(idB, 'en'))
        .reduce((all, id, index) => ({
        ...all,
        [id]: bigIntToBinUint256BEClamped(BigInt(index + 1)),
    }), {});
    const privateKeys = variables === undefined
        ? undefined
        : Object.entries(variables).reduce((all, [variableId, variable]) => variable.type === 'Key'
            ? {
                ...all,
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                [variableId]: binToHex(valueMap[variableId]),
            }
            : all, {});
    const defaultScenario = {
        data: {
            currentBlockHeight: CompilerDefaults.defaultScenarioCurrentBlockHeight,
            currentBlockTime: CompilerDefaults.defaultScenarioCurrentBlockTime,
            ...(privateKeys === undefined || Object.keys(privateKeys).length === 0
                ? {}
                : { keys: { privateKeys } }),
        },
        sourceOutputs: [{ lockingBytecode: ['slot'] }],
        transaction: {
            inputs: [{ unlockingBytecode: ['slot'] }],
            locktime: CompilerDefaults.defaultScenarioTransactionLocktime,
            outputs: [
                {
                    lockingBytecode: CompilerDefaults.defaultScenarioOutputLockingBytecode,
                },
            ],
            version: CompilerDefaults.defaultScenarioTransactionVersion,
        },
    };
    const hasHdKeys = variables === undefined
        ? false
        : Object.values(variables).findIndex((variable) => variable.type === 'HdKey') !== -1;
    if (!hasHdKeys) {
        return defaultScenario;
    }
    const { sha256, sha512 } = configuration;
    if (sha256 === undefined) {
        return 'An implementations of "sha256" is required to generate defaults for HD keys, but the "sha256" property is not included in this compiler configuration.';
    }
    if (sha512 === undefined) {
        return 'An implementations of "sha512" is required to generate defaults for HD keys, but the "sha512" property is not included in this compiler configuration.';
    }
    const crypto = { sha256, sha512 };
    const hdPrivateKeys = entityIds.reduce((all, entityId) => {
        /**
         * The first 5,000,000,000 seeds have been tested, scenarios are
         * unlikely to exceed this number of entities.
         */
        const assumeValidity = true;
        const masterNode = deriveHdPrivateNodeFromSeed(
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        valueMap[entityId], { assumeValidity, crypto });
        const { hdPrivateKey } = encodeHdPrivateKey({ network: 'mainnet', node: masterNode }, { crypto });
        return { ...all, [entityId]: hdPrivateKey };
    }, {});
    return {
        ...defaultScenario,
        data: {
            ...defaultScenario.data,
            hdKeys: {
                addressIndex: CompilerDefaults.defaultScenarioAddressIndex,
                hdPrivateKeys,
            },
        },
    };
};
/**
 * Extend the `data` property of a scenario definition with values from a parent
 * scenario definition. Returns the extended value for `data`.
 *
 * @param parentData - the scenario `data` that is extended by the child
 * scenario
 * @param childData - the scenario `data` that may override values from the
 * parent scenario
 */
// eslint-disable-next-line complexity
export const extendScenarioDefinitionData = (parentData, childData) => ({
    ...parentData,
    ...childData,
    ...(parentData.bytecode === undefined && childData.bytecode === undefined
        ? {}
        : {
            bytecode: {
                ...parentData.bytecode,
                ...childData.bytecode,
            },
        }),
    ...(parentData.hdKeys === undefined && childData.hdKeys === undefined
        ? {}
        : {
            hdKeys: {
                ...parentData.hdKeys,
                ...childData.hdKeys,
                ...(parentData.hdKeys?.hdPrivateKeys === undefined &&
                    childData.hdKeys?.hdPrivateKeys === undefined
                    ? {}
                    : {
                        hdPrivateKeys: {
                            ...parentData.hdKeys?.hdPrivateKeys,
                            ...childData.hdKeys?.hdPrivateKeys,
                        },
                    }),
                ...(parentData.hdKeys?.hdPublicKeys === undefined &&
                    childData.hdKeys?.hdPublicKeys === undefined
                    ? {}
                    : {
                        hdPublicKeys: {
                            ...parentData.hdKeys?.hdPublicKeys,
                            ...childData.hdKeys?.hdPublicKeys,
                        },
                    }),
            },
        }),
    ...(parentData.keys === undefined && childData.keys === undefined
        ? {}
        : {
            keys: {
                privateKeys: {
                    ...parentData.keys?.privateKeys,
                    ...childData.keys?.privateKeys,
                },
            },
        }),
});
/**
 * Extend a child scenario definition with values from a parent scenario
 * definition. Returns the extended values for `data`, `transaction`, and
 * `value`.
 *
 * @param parentScenario - the scenario that is extended by the child scenario
 * @param childScenario - the scenario that may override values from the parent
 * scenario
 */
// eslint-disable-next-line complexity
export const extendScenarioDefinition = (parentScenario, childScenario) => ({
    ...(parentScenario.data === undefined && childScenario.data === undefined
        ? {}
        : {
            data: extendScenarioDefinitionData(parentScenario.data ?? {}, childScenario.data ?? {}),
        }),
    ...(parentScenario.transaction === undefined &&
        childScenario.transaction === undefined
        ? {}
        : {
            transaction: {
                ...parentScenario.transaction,
                ...childScenario.transaction,
            },
        }),
    ...(parentScenario.sourceOutputs === undefined &&
        childScenario.sourceOutputs === undefined
        ? {}
        : {
            sourceOutputs: childScenario.sourceOutputs ?? parentScenario.sourceOutputs,
        }),
});
/**
 * Generate the full scenario that is extended by the provided scenario
 * identifier. Scenarios for which `extends` is `undefined` extend the default
 * scenario for the provided compiler configuration.
 */
// eslint-disable-next-line complexity
export const generateExtendedScenario = ({ configuration, scenarioId, sourceScenarioIds = [], }) => {
    if (scenarioId === undefined) {
        return generateDefaultScenarioDefinition(configuration);
    }
    if (sourceScenarioIds.includes(scenarioId)) {
        return `Cannot extend scenario "${scenarioId}": scenario "${scenarioId}" extends itself. Scenario inheritance path: ${sourceScenarioIds.join(' → ')}`;
    }
    const scenario = configuration.scenarios?.[scenarioId];
    if (scenario === undefined) {
        return `Cannot extend scenario "${scenarioId}": a scenario with the identifier ${scenarioId} is not included in this compiler configuration.`;
    }
    const parentScenario = scenario.extends === undefined
        ? generateDefaultScenarioDefinition(configuration)
        : generateExtendedScenario({
            configuration,
            scenarioId: scenario.extends,
            sourceScenarioIds: [...sourceScenarioIds, scenarioId],
        });
    if (typeof parentScenario === 'string') {
        return parentScenario;
    }
    return extendScenarioDefinition(parentScenario, scenario);
};
/**
 * Derive standard {@link CompilationData} properties from an extended scenario
 * definition.
 *
 * @param definition - a scenario definition that has been extended by the
 * default scenario definition
 */
// eslint-disable-next-line complexity
export const extendedScenarioDefinitionToCompilationData = (definition) => ({
    ...(definition.data.currentBlockHeight === undefined
        ? {}
        : {
            currentBlockHeight: definition.data.currentBlockHeight,
        }),
    ...(definition.data.currentBlockTime === undefined
        ? {}
        : {
            currentBlockTime: definition.data.currentBlockTime,
        }),
    ...(definition.data.hdKeys === undefined
        ? {}
        : {
            hdKeys: {
                ...(definition.data.hdKeys.addressIndex === undefined
                    ? {}
                    : {
                        addressIndex: definition.data.hdKeys.addressIndex,
                    }),
                ...(definition.data.hdKeys.hdPrivateKeys !== undefined &&
                    Object.keys(definition.data.hdKeys.hdPrivateKeys).length > 0
                    ? {
                        hdPrivateKeys: definition.data.hdKeys.hdPrivateKeys,
                    }
                    : {}),
                ...(definition.data.hdKeys.hdPublicKeys === undefined
                    ? {}
                    : {
                        hdPublicKeys: definition.data.hdKeys.hdPublicKeys,
                    }),
            },
        }),
    ...(definition.data.keys?.privateKeys !== undefined &&
        Object.keys(definition.data.keys.privateKeys).length > 0
        ? {
            keys: {
                privateKeys: Object.entries(definition.data.keys.privateKeys).reduce((all, [id, hex]) => ({ ...all, [id]: hexToBin(hex) }), {}),
            },
        }
        : {}),
});
/**
 * Extend a {@link CompilationData} object with the compiled result of the
 * bytecode scripts provided by an {@link WalletTemplateScenarioData}.
 */
export const extendCompilationDataWithScenarioBytecode = ({ compilationData, configuration, scenarioDataBytecodeScripts, }) => {
    const prefixBytecodeScriptId = (id) => `${CompilerDefaults.scenarioBytecodeScriptPrefix}${id}`;
    const bytecodeScripts = Object.entries(scenarioDataBytecodeScripts).reduce((all, [id, script]) => ({
        ...all,
        [prefixBytecodeScriptId(id)]: script,
    }), {});
    const bytecodeScriptExtendedConfiguration = {
        ...configuration,
        scripts: {
            ...configuration.scripts,
            ...bytecodeScripts,
        },
    };
    const bytecodeCompilations = Object.keys(scenarioDataBytecodeScripts).map((id) => {
        const result = compileScriptRaw({
            configuration: bytecodeScriptExtendedConfiguration,
            data: compilationData,
            scriptId: prefixBytecodeScriptId(id),
        });
        if (result.success) {
            return {
                bytecode: result.bytecode,
                id,
            };
        }
        return {
            errors: result.errors,
            id,
        };
    });
    const failedResults = bytecodeCompilations.filter((result) => 'errors' in result);
    if (failedResults.length > 0) {
        return failedResults
            .map((result) => `Compilation error while generating bytecode for "${result.id}": ${stringifyErrors(result.errors)}`)
            .join('; ');
    }
    const compiledBytecode = bytecodeCompilations.reduce((all, result) => ({ ...all, [result.id]: result.bytecode }), {});
    return {
        ...(Object.keys(compiledBytecode).length > 0
            ? { bytecode: compiledBytecode }
            : {}),
        ...compilationData,
    };
};
/**
 * Compile a {@link WalletTemplateScenarioOutput.valueSatoshis},
 * returning the `Uint8Array` result.
 */
export const compileWalletTemplateScenarioValueSatoshis = (valueSatoshisDefinition = CompilerDefaults.defaultScenarioOutputValueSatoshis) => typeof valueSatoshisDefinition === 'string'
    ? binToValueSatoshis(hexToBin(valueSatoshisDefinition))
    : BigInt(valueSatoshisDefinition);
/**
 * Compile an {@link WalletTemplateScenarioBytecode} definition for an
 * {@link WalletTemplateScenario}, returning either a
 * simple `Uint8Array` result or a full CashAssembly {@link CompilationResult}.
 */
// eslint-disable-next-line complexity
export const compileWalletTemplateScenarioBytecode = ({ bytecodeDefinition, compilationContext, configuration, defaultOverride, extendedScenario, generateBytecode, lockingOrUnlockingScriptIdUnderTest, }) => {
    if (typeof bytecodeDefinition === 'string') {
        return hexToBin(bytecodeDefinition);
    }
    const scriptId = bytecodeDefinition.script === undefined ||
        Array.isArray(bytecodeDefinition.script)
        ? lockingOrUnlockingScriptIdUnderTest
        : bytecodeDefinition.script;
    /**
     * The script ID to compile. If `undefined`, we are attempting to "copy" the
     * script ID in a scenario generation that does not define a locking or
     * unlocking script under test (e.g. the scenario is only used for debugging
     * values in an editor) - in these cases, simply return an empty `Uint8Array`.
     */
    if (scriptId === undefined) {
        return hexToBin('');
    }
    const overrides = bytecodeDefinition.overrides ?? defaultOverride;
    const overriddenDataDefinition = extendScenarioDefinitionData(extendedScenario.data, overrides);
    const data = extendCompilationDataWithScenarioBytecode({
        compilationData: extendedScenarioDefinitionToCompilationData({
            data: overriddenDataDefinition,
        }),
        configuration,
        scenarioDataBytecodeScripts: overriddenDataDefinition.bytecode ?? {},
    });
    if (typeof data === 'string') {
        const error = `Could not compile scenario "data.bytecode": ${data}`;
        return { errors: [{ error }], success: false };
    }
    return generateBytecode({
        data: { ...data, compilationContext },
        debug: true,
        scriptId,
    });
};
/**
 * Compile a {@link WalletTemplateScenarioOutput.token},
 * returning the {@link Output.token} result.
 */
// eslint-disable-next-line complexity
export const compileScenarioOutputTokenData = (output) => output.token === undefined
    ? {}
    : {
        token: {
            amount: BigInt(output.token.amount ?? 0),
            // TODO: doesn't verify length
            category: hexToBin(output.token.category ??
                CompilerDefaults.defaultScenarioOutputTokenCategory),
            ...(output.token.nft === undefined
                ? {}
                : {
                    nft: {
                        capability: output.token.nft.capability ?? 'none',
                        commitment: hexToBin(output.token.nft.commitment ?? ''),
                    },
                }),
        },
    };
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
// eslint-disable-next-line complexity
export const generateScenarioBch = ({ configuration, generateBytecode, scenarioId, unlockingScriptId, lockingScriptId: providedLockingScriptId, }, debug) => {
    const { scenarioDefinition, scenarioName } = scenarioId === undefined
        ? { scenarioDefinition: {}, scenarioName: `the default scenario` }
        : {
            scenarioDefinition: configuration.scenarios?.[scenarioId],
            scenarioName: `scenario "${scenarioId}"`,
        };
    if (scenarioDefinition === undefined) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return `Cannot generate ${scenarioName}: a scenario definition with the identifier ${scenarioId} is not included in this compiler configuration.`;
    }
    const parentScenario = generateExtendedScenario({ configuration, scenarioId });
    if (typeof parentScenario === 'string') {
        return `Cannot generate ${scenarioName}: ${parentScenario}`;
    }
    const extendedScenario = extendScenarioDefinition(parentScenario, scenarioDefinition);
    const partialCompilationData = extendedScenarioDefinitionToCompilationData(extendedScenario);
    const fullCompilationData = extendCompilationDataWithScenarioBytecode({
        compilationData: partialCompilationData,
        configuration,
        scenarioDataBytecodeScripts: extendedScenario.data.bytecode ?? {},
    });
    if (typeof fullCompilationData === 'string') {
        return `Cannot generate ${scenarioName}. ${fullCompilationData}`;
    }
    if (extendedScenario.transaction.inputs.length !==
        extendedScenario.sourceOutputs.length) {
        return `Cannot generate ${scenarioName}: could not match source outputs with inputs - "sourceOutputs" must be the same length as "transaction.inputs".`;
    }
    const testedInputs = extendedScenario.transaction.inputs.filter((input) => Array.isArray(input.unlockingBytecode));
    if (testedInputs.length !== 1) {
        return `Cannot generate ${scenarioName}: the specific input under test in this scenario is ambiguous - "transaction.inputs" must include exactly one input that has "unlockingBytecode" set to ["slot"].`;
    }
    const testedInputIndex = extendedScenario.transaction.inputs.findIndex((input) => Array.isArray(input.unlockingBytecode));
    const testedSourceOutputs = extendedScenario.sourceOutputs.filter((output) => Array.isArray(output.lockingBytecode));
    if (testedSourceOutputs.length !== 1) {
        return `Cannot generate ${scenarioName}: the source output unlocked by the input under test in this scenario is ambiguous - "sourceOutputs" must include exactly one output that has "lockingBytecode" set to ["slot"].`;
    }
    if (!Array.isArray(extendedScenario.sourceOutputs[testedInputIndex]?.lockingBytecode)) {
        return `Cannot generate ${scenarioName}: the source output unlocked by the input under test in this scenario is ambiguous - the ["slot"] in "transaction.inputs" and "sourceOutputs" must be at the same index.`;
    }
    if (unlockingScriptId !== undefined &&
        providedLockingScriptId !== undefined) {
        return `Cannot generate ${scenarioName}: a scenario cannot be generated with both unlocking and locking script IDs defined. If an unlocking script is provided, the associated locking script ID must be read from the template.`;
    }
    const lockingScriptId = providedLockingScriptId ??
        (unlockingScriptId === undefined
            ? undefined
            : configuration.unlockingScripts?.[unlockingScriptId]);
    if (unlockingScriptId !== undefined && lockingScriptId === undefined) {
        return `Cannot generate ${scenarioName} using unlocking script "${unlockingScriptId}": the locking script unlocked by "${unlockingScriptId}" is not provided in this compiler configuration.`;
    }
    const sourceOutputCompilations = extendedScenario.sourceOutputs.map((sourceOutput, index) => {
        const slot = Array.isArray(sourceOutput.lockingBytecode);
        const bytecodeDefinition = slot
            ? lockingScriptId === undefined
                ? CompilerDefaults.defaultScenarioBytecode
                : { script: lockingScriptId }
            : sourceOutput.lockingBytecode ?? {};
        const defaultOverride = {};
        return {
            compiled: {
                lockingBytecode: compileWalletTemplateScenarioBytecode({
                    bytecodeDefinition,
                    configuration,
                    defaultOverride,
                    extendedScenario,
                    generateBytecode,
                    lockingOrUnlockingScriptIdUnderTest: lockingScriptId,
                }),
                valueSatoshis: compileWalletTemplateScenarioValueSatoshis(sourceOutput.valueSatoshis),
                ...compileScenarioOutputTokenData(sourceOutput),
            },
            index,
            slot,
            type: 'source output',
        };
    });
    const lockingCompilation = sourceOutputCompilations.find((compilation) => compilation.slot)?.compiled.lockingBytecode;
    const transactionOutputCompilations = extendedScenario.transaction.outputs.map((transactionOutput, index) => {
        const defaultOverride = { hdKeys: { addressIndex: 1 } };
        return {
            compiled: {
                lockingBytecode: compileWalletTemplateScenarioBytecode({
                    bytecodeDefinition: transactionOutput.lockingBytecode ?? {},
                    configuration,
                    defaultOverride,
                    extendedScenario,
                    generateBytecode,
                    lockingOrUnlockingScriptIdUnderTest: lockingScriptId,
                }),
                valueSatoshis: compileWalletTemplateScenarioValueSatoshis(transactionOutput.valueSatoshis),
                ...compileScenarioOutputTokenData(transactionOutput),
            },
            index,
            type: 'transaction output',
        };
    });
    const outputCompilationErrors = [
        ...sourceOutputCompilations,
        ...transactionOutputCompilations,
    ].reduce((accumulated, result) => {
        if ('errors' in result.compiled.lockingBytecode) {
            return [
                ...accumulated,
                ...result.compiled.lockingBytecode.errors.map((errorObject) => `Failed compilation of ${result.type} at index ${result.index}: ${errorObject.error}`),
            ];
        }
        return accumulated;
    }, []);
    if (outputCompilationErrors.length > 0) {
        const error = `Cannot generate ${scenarioName}: ${outputCompilationErrors.join(' ')}`;
        if (debug === true) {
            return {
                lockingCompilation,
                scenario: error,
            };
        }
        return error;
    }
    const sourceOutputCompilationsSuccess = sourceOutputCompilations;
    const transactionOutputCompilationsSuccess = transactionOutputCompilations;
    const extractOutput = (compilation) => {
        const { lockingBytecode, valueSatoshis, token } = compilation.compiled;
        return {
            lockingBytecode: 'bytecode' in lockingBytecode
                ? lockingBytecode.bytecode
                : lockingBytecode,
            valueSatoshis,
            ...(token === undefined ? {} : { token }),
        };
    };
    const sourceOutputs = sourceOutputCompilationsSuccess.map(extractOutput);
    const outputs = transactionOutputCompilationsSuccess.map(extractOutput);
    const inputsContext = extendedScenario.transaction.inputs.map((input, inputIndex) => ({
        outpointIndex: input.outpointIndex ?? inputIndex,
        // TODO: doesn't verify length
        outpointTransactionHash: hexToBin(input.outpointTransactionHash ??
            CompilerDefaults.defaultScenarioInputOutpointTransactionHash),
        sequenceNumber: input.sequenceNumber ??
            CompilerDefaults.defaultScenarioInputSequenceNumber,
        unlockingBytecode: undefined,
    }));
    const transactionInputCompilations = extendedScenario.transaction.inputs.map((input, index) => {
        const slot = Array.isArray(input.unlockingBytecode);
        const bytecodeDefinition = Array.isArray(input.unlockingBytecode)
            ? unlockingScriptId === undefined
                ? CompilerDefaults.defaultScenarioBytecode
                : { script: unlockingScriptId }
            : input.unlockingBytecode ?? {};
        const defaultOverride = {};
        return {
            compiled: {
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                outpointIndex: inputsContext[index].outpointIndex,
                outpointTransactionHash: 
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                inputsContext[index].outpointTransactionHash,
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                sequenceNumber: inputsContext[index].sequenceNumber,
                unlockingBytecode: compileWalletTemplateScenarioBytecode({
                    bytecodeDefinition,
                    compilationContext: {
                        inputIndex: index,
                        sourceOutputs,
                        transaction: {
                            inputs: inputsContext,
                            locktime: extendedScenario.transaction.locktime,
                            outputs,
                            version: extendedScenario.transaction.version,
                        },
                    },
                    configuration,
                    defaultOverride,
                    extendedScenario,
                    generateBytecode,
                    lockingOrUnlockingScriptIdUnderTest: unlockingScriptId,
                }),
            },
            index,
            slot,
        };
    });
    const unlockingCompilation = transactionInputCompilations.find((compilation) => compilation.slot)?.compiled.unlockingBytecode;
    const inputCompilationErrors = transactionInputCompilations.reduce((accumulated, result) => {
        if ('errors' in result.compiled.unlockingBytecode) {
            return [
                ...accumulated,
                ...result.compiled.unlockingBytecode.errors.map((errorObject) => `Failed compilation of input at index ${result.index}: ${errorObject.error}`),
            ];
        }
        return accumulated;
    }, []);
    if (inputCompilationErrors.length > 0) {
        const error = `Cannot generate ${scenarioName}: ${inputCompilationErrors.join(' ')}`;
        if (debug === true) {
            return {
                lockingCompilation,
                scenario: error,
                unlockingCompilation,
            };
        }
        return error;
    }
    const transactionInputCompilationsSuccess = transactionInputCompilations;
    const inputs = transactionInputCompilationsSuccess.map((compilation) => {
        const { outpointIndex, outpointTransactionHash, sequenceNumber, unlockingBytecode, } = compilation.compiled;
        return {
            outpointIndex,
            outpointTransactionHash,
            sequenceNumber,
            unlockingBytecode: 'bytecode' in unlockingBytecode
                ? unlockingBytecode.bytecode
                : unlockingBytecode,
        };
    });
    const scenario = {
        data: fullCompilationData,
        program: {
            inputIndex: testedInputIndex,
            sourceOutputs,
            transaction: {
                inputs,
                locktime: extendedScenario.transaction.locktime,
                outputs,
                version: extendedScenario.transaction.version,
            },
        },
    };
    return (debug === true
        ? { lockingCompilation, scenario, unlockingCompilation }
        : scenario);
};
/**
 * @deprecated Alias of `generateScenarioBch` for backwards-compatibility.
 */
export const generateScenarioBCH = generateScenarioBch;
//# sourceMappingURL=scenarios.js.map