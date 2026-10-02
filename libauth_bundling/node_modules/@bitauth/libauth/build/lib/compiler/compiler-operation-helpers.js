import { assertSuccess } from '../format/format.js';
import { decodeHdPrivateKey, deriveHdPath, deriveHdPathRelative, } from '../key/key.js';
import { resolveScriptIdentifier } from '../language/language.js';
import { CompilerDefaults } from './compiler-defaults.js';
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
export const attemptCompilerOperations = (operations, finalOperation) => (identifier, data, configuration) => {
    // eslint-disable-next-line functional/no-loop-statements
    for (const operation of operations) {
        const result = operation(identifier, data, configuration);
        if (result.status !== 'skip')
            return result;
    }
    return finalOperation(identifier, data, configuration);
};
/**
 * Modify a compiler operation to verify that certain properties exist in the
 * {@link CompilationData} and {@link CompilerConfiguration} before executing
 * the provided operation. If the properties don't exist, an error message
 * is returned.
 *
 * This is useful for eliminating repetitive existence checks.
 */
export const compilerOperationRequires = ({ 
/**
 * If `true`, the accepted operation may return `false`, and any missing
 * properties will cause the returned operation to return `false` (meaning
 * the operation should be skipped)
 */
canBeSkipped, 
/**
 * An array of the top-level properties required in the
 * {@link CompilationData}.
 */
dataProperties, 
/**
 * An array of the top-level properties required in the
 * {@link CompilerConfiguration}
 */
configurationProperties, 
/**
 * The operation to run if all required properties exist
 */
operation, }) => 
// eslint-disable-next-line complexity
(identifier, data, configuration) => {
    // eslint-disable-next-line functional/no-loop-statements
    for (const property of configurationProperties) {
        if (configuration[property] === undefined)
            return (canBeSkipped
                ? { status: 'skip' }
                : {
                    error: `Cannot resolve "${identifier}" - the "${property}" property was not provided in the compiler configuration.`,
                    status: 'error',
                });
    }
    // eslint-disable-next-line functional/no-loop-statements
    for (const property of dataProperties) {
        if (data[property] ===
            undefined)
            return (canBeSkipped
                ? { status: 'skip' }
                : {
                    error: `Cannot resolve "${identifier}" - the "${property}" property was not provided in the compilation data.`,
                    status: 'error',
                });
    }
    return operation(identifier, data, configuration);
};
export const compilerOperationAttemptBytecodeResolution = compilerOperationRequires({
    canBeSkipped: true,
    configurationProperties: [],
    dataProperties: ['bytecode'],
    operation: (identifier, data) => {
        const bytecode = data.bytecode[identifier];
        if (bytecode !== undefined) {
            return { bytecode, status: 'success' };
        }
        return { status: 'skip' };
    },
});
// eslint-disable-next-line complexity
export const compilerOperationHelperDeriveHdPrivateNode = ({ addressIndex, entityId, entityHdPrivateKey, configuration, hdKey, identifier, }) => {
    const addressOffset = hdKey.addressOffset ?? CompilerDefaults.hdKeyAddressOffset;
    const privateDerivationPath = hdKey.privateDerivationPath ?? CompilerDefaults.hdKeyPrivateDerivationPath;
    const i = addressIndex + addressOffset;
    const validPrivatePathWithIndex = /^(?:m|i|[0-9]+)'?(?:\/(?:[0-9]+|i)'?)*$/u;
    if (!validPrivatePathWithIndex.test(privateDerivationPath)) {
        return {
            error: `Could not generate "${identifier}" - the path "${privateDerivationPath}" is not a valid "privateDerivationPath".`,
            status: 'error',
        };
    }
    /**
     * Provided keys are already verified by `validateCompilationData`.
     */
    const masterContents = assertSuccess(decodeHdPrivateKey(entityHdPrivateKey, {
        crypto: configuration,
    }));
    const instancePath = privateDerivationPath.replace('i', i.toString());
    const usesAbsoluteDerivation = instancePath.includes('m');
    const instanceNode = (usesAbsoluteDerivation ? deriveHdPath : deriveHdPathRelative)(masterContents.node, instancePath, {
        crypto: configuration,
        throwErrors: false,
    });
    if (typeof instanceNode === 'string') {
        return {
            error: `Could not generate "${identifier}" - the path "${instancePath}" could not be derived for entity "${entityId}": ${instanceNode}`,
            status: 'error',
        };
    }
    return {
        bytecode: instanceNode.privateKey,
        status: 'success',
    };
};
export const compilerOperationHelperUnknownEntity = (identifier, variableId) => ({
    error: `Identifier "${identifier}" refers to an HdKey, but the "entityOwnership" for "${variableId}" is not available in this compiler configuration.`,
    status: 'error',
});
export const compilerOperationHelperAddressIndex = (identifier) => ({
    error: `Identifier "${identifier}" refers to an HdKey, but "hdKeys.addressIndex" was not provided in the compilation data.`,
    status: 'error',
});
export const compilerOperationHelperDeriveHdKeyPrivate = ({ configuration, hdKeys, identifier, }) => {
    const { addressIndex, hdPrivateKeys } = hdKeys;
    const [variableId] = identifier.split('.');
    const entityId = configuration.entityOwnership[variableId];
    if (entityId === undefined) {
        return compilerOperationHelperUnknownEntity(identifier, variableId);
    }
    if (addressIndex === undefined) {
        return compilerOperationHelperAddressIndex(identifier);
    }
    const entityHdPrivateKey = hdPrivateKeys === undefined ? undefined : hdPrivateKeys[entityId];
    if (entityHdPrivateKey === undefined) {
        return {
            error: `Identifier "${identifier}" refers to an HdKey owned by "${entityId}", but an HD private key for this entity (or an existing signature) was not provided in the compilation data.`,
            recoverable: true,
            status: 'error',
        };
    }
    /**
     * Guaranteed to be an `HdKey` if this method is reached in the compiler.
     */
    const hdKey = configuration.variables[variableId];
    return compilerOperationHelperDeriveHdPrivateNode({
        addressIndex,
        configuration,
        entityHdPrivateKey,
        entityId,
        hdKey,
        identifier,
    });
};
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
export const compilerOperationHelperCompileScript = ({ targetScriptId, data, configuration, }) => {
    const signingTarget = configuration.scripts[targetScriptId];
    const compiledTarget = resolveScriptIdentifier({
        configuration,
        data,
        identifier: targetScriptId,
    });
    if (signingTarget === undefined || compiledTarget === false) {
        return false;
    }
    if (typeof compiledTarget === 'string') {
        return {
            error: compiledTarget,
            status: 'error',
        };
    }
    return compiledTarget.bytecode;
};
/**
 * Returns either the properly generated `coveredBytecode` or a
 * {@link CompilerOperationErrorFatal}.
 */
export const compilerOperationHelperGenerateCoveredBytecode = ({ data, configuration, identifier, sourceScriptIds, unlockingScripts, }) => {
    const currentScriptId = sourceScriptIds[sourceScriptIds.length - 1];
    if (currentScriptId === undefined) {
        return {
            error: `Identifier "${identifier}" requires a signing serialization, but "coveredBytecode" cannot be determined because the compiler configuration's "sourceScriptIds" is empty.`,
            status: 'error',
        };
    }
    const targetLockingScriptId = unlockingScripts[currentScriptId];
    if (targetLockingScriptId === undefined) {
        return {
            error: `Identifier "${identifier}" requires a signing serialization, but "coveredBytecode" cannot be determined because "${currentScriptId}" is not present in the compiler configuration's "unlockingScripts".`,
            status: 'error',
        };
    }
    const result = compilerOperationHelperCompileScript({
        configuration,
        data,
        targetScriptId: targetLockingScriptId,
    });
    if (result === false) {
        return {
            error: `Identifier "${identifier}" requires a signing serialization that covers an unknown locking script, "${targetLockingScriptId}".`,
            status: 'error',
        };
    }
    return result;
};
//# sourceMappingURL=compiler-operation-helpers.js.map