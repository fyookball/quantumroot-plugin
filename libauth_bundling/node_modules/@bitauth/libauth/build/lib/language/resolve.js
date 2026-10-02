import { binStringToBin, hexToBin, utf8ToBin } from '../format/format.js';
import { decodeHdPrivateKey, decodeHdPublicKey, validateSecp256k1PrivateKey, } from '../key/key.js';
import { bigIntToVmNumber } from '../vm/vm.js';
import { IdentifierResolutionErrorType, IdentifierResolutionType, } from './language-types.js';
import { getResolutionErrors, stringifyErrors } from './language-utils.js';
import { parseScript } from './parse.js';
import { reduceScript } from './reduce.js';
const pluckRange = (node) => ({
    endColumn: node.end.column,
    endLineNumber: node.end.line,
    startColumn: node.start.column,
    startLineNumber: node.start.line,
});
const removeNumericSeparators = (numericLiteral) => numericLiteral.replace(/_/gu, '');
export const resolveScriptSegment = (segment, resolveIdentifiers) => {
    // eslint-disable-next-line complexity
    const resolved = segment.value.map((child) => {
        const range = pluckRange(child);
        switch (child.name) {
            case 'Identifier': {
                const identifier = child.value;
                const result = resolveIdentifiers(identifier);
                const ret = result.status
                    ? {
                        range,
                        type: 'bytecode',
                        value: result.bytecode,
                        ...(result.type === IdentifierResolutionType.opcode
                            ? {
                                opcode: identifier,
                            }
                            : result.type === IdentifierResolutionType.variable
                                ? {
                                    ...('debug' in result ? { debug: result.debug } : {}),
                                    ...('signature' in result
                                        ? { signature: result.signature }
                                        : {}),
                                    variable: identifier,
                                }
                                : // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
                                    result.type === IdentifierResolutionType.script
                                        ? { script: identifier, source: result.source }
                                        : { unknown: identifier }),
                    }
                    : {
                        ...('debug' in result ? { debug: result.debug } : {}),
                        ...('recoverable' in result && result.recoverable
                            ? {
                                missingIdentifier: identifier,
                                owningEntity: result.entityOwnership,
                            }
                            : {}),
                        range,
                        type: 'error',
                        value: result.error,
                    };
                return ret;
            }
            case 'Push':
                return {
                    range,
                    type: 'push',
                    value: resolveScriptSegment(child.value, resolveIdentifiers),
                };
            case 'Evaluation':
                return {
                    range,
                    type: 'evaluation',
                    value: resolveScriptSegment(child.value, resolveIdentifiers),
                };
            case 'BigIntLiteral':
                return {
                    literal: child.value,
                    literalType: 'BigIntLiteral',
                    range,
                    type: 'bytecode',
                    value: bigIntToVmNumber(BigInt(removeNumericSeparators(child.value))),
                };
            case 'BinaryLiteral':
                return {
                    literal: child.value,
                    literalType: 'BinaryLiteral',
                    range,
                    type: 'bytecode',
                    value: binStringToBin(removeNumericSeparators(child.value)),
                };
            case 'HexLiteral':
                return {
                    literal: child.value,
                    literalType: 'HexLiteral',
                    range,
                    type: 'bytecode',
                    value: hexToBin(removeNumericSeparators(child.value)),
                };
            case 'UTF8Literal':
                return {
                    literal: child.value,
                    literalType: 'UTF8Literal',
                    range,
                    type: 'bytecode',
                    value: utf8ToBin(child.value),
                };
            case 'Comment':
                return {
                    range,
                    type: 'comment',
                    value: child.value,
                };
            default:
                return {
                    range,
                    type: 'error',
                    value: `Unrecognized segment: ${child.name}`,
                };
        }
    });
    return resolved.length === 0
        ? [{ range: pluckRange(segment), type: 'comment', value: '' }]
        : resolved;
};
export var BuiltInVariables;
(function (BuiltInVariables) {
    BuiltInVariables["currentBlockTime"] = "current_block_time";
    BuiltInVariables["currentBlockHeight"] = "current_block_height";
    BuiltInVariables["signingSerialization"] = "signing_serialization";
})(BuiltInVariables || (BuiltInVariables = {}));
const attemptCompilerOperation = ({ data, configuration, identifier, matchingOperations, operationExample = 'operation_identifier', operationId, variableId, variableType, }) => {
    if (matchingOperations === undefined) {
        return {
            error: `The "${variableId}" variable type can not be resolved because the "${variableType}" operation has not been included in this compiler's configuration.`,
            status: 'error',
        };
    }
    if (typeof matchingOperations === 'function') {
        const operation = matchingOperations;
        return operation(identifier, data, configuration);
    }
    if (operationId === undefined) {
        return {
            error: `This "${variableId}" variable could not be resolved because this compiler's "${variableType}" operations require an operation identifier, e.g. '${variableId}.${operationExample}'.`,
            status: 'error',
        };
    }
    const operation = matchingOperations[operationId];
    if (operation === undefined) {
        return {
            error: `The identifier "${identifier}" could not be resolved because the "${variableId}.${operationId}" operation is not available to this compiler.`,
            status: 'error',
        };
    }
    return operation(identifier, data, configuration);
};
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
export const resolveVariableIdentifier = ({ data, configuration, identifier, }) => {
    const [variableId, operationId] = identifier.split('.');
    switch (variableId) {
        case BuiltInVariables.currentBlockHeight:
            return attemptCompilerOperation({
                configuration,
                data,
                identifier,
                matchingOperations: configuration.operations?.currentBlockHeight,
                operationId,
                variableId,
                variableType: 'currentBlockHeight',
            });
        case BuiltInVariables.currentBlockTime:
            return attemptCompilerOperation({
                configuration,
                data,
                identifier,
                matchingOperations: configuration.operations?.currentBlockTime,
                operationId,
                variableId,
                variableType: 'currentBlockTime',
            });
        case BuiltInVariables.signingSerialization:
            return attemptCompilerOperation({
                configuration,
                data,
                identifier,
                matchingOperations: configuration.operations?.signingSerialization,
                operationExample: 'version',
                operationId,
                variableId,
                variableType: 'signingSerialization',
            });
        default: {
            const expectedVariable = configuration.variables?.[variableId];
            if (expectedVariable === undefined) {
                return { status: 'skip' };
            }
            return attemptCompilerOperation({
                configuration,
                data,
                identifier,
                operationId,
                variableId,
                ...{
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    AddressData: {
                        matchingOperations: configuration.operations?.addressData,
                        variableType: 'addressData',
                    },
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    HdKey: {
                        matchingOperations: configuration.operations?.hdKey,
                        operationExample: 'public_key',
                        variableType: 'hdKey',
                    },
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    Key: {
                        matchingOperations: configuration.operations?.key,
                        operationExample: 'public_key',
                        variableType: 'key',
                    },
                    // eslint-disable-next-line @typescript-eslint/naming-convention
                    WalletData: {
                        matchingOperations: configuration.operations?.walletData,
                        variableType: 'walletData',
                    },
                }[expectedVariable.type],
            });
        }
    }
};
/**
 * A text-formatting method to pretty-print the list of expected inputs
 * (`Encountered unexpected input while parsing script. Expected ...`). If
 * present, the `EOF` expectation is always moved to the end of the list.
 * @param expectedArray - the alphabetized list of expected inputs produced by
 * `parseScript`
 */
export const describeExpectedInput = (expectedArray) => {
    /**
     * The constant used by the parser to denote the end of the input
     */
    const EOF = 'EOF';
    const newArray = expectedArray.filter((value) => value !== EOF);
    // eslint-disable-next-line functional/no-conditional-statements
    if (newArray.length !== expectedArray.length) {
        // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
        newArray.push('the end of the script');
    }
    const withoutLastElement = newArray.slice(0, newArray.length - 1);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const lastElement = newArray[newArray.length - 1];
    const arrayRequiresCommas = 3;
    const arrayRequiresOr = 2;
    return `Encountered unexpected input while parsing script. Expected ${newArray.length >= arrayRequiresCommas
        ? withoutLastElement.join(', ').concat(`, or ${lastElement}`)
        : newArray.length === arrayRequiresOr
            ? newArray.join(' or ')
            : lastElement}.`;
};
export const createEmptyRange = () => ({
    endColumn: 0,
    endLineNumber: 0,
    startColumn: 0,
    startLineNumber: 0,
});
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
export const validateCompilationData = ({ configuration, data, }) => [
    ...(data.bytecode === undefined
        ? []
        : Object.entries(data.bytecode)
            .filter(([identifier]) => identifier.endsWith('.public_key'))
            .reduce((all, [identifier, publicKey]) => all.concat(configuration.secp256k1?.validatePublicKey(publicKey) === true
            ? []
            : [
                configuration.secp256k1 === undefined
                    ? {
                        error: `Could not validate compilation data: the public key provided for "${identifier}" could not be validated because the "secp256k1" property was not provided in the compiler configuration.`,
                        range: createEmptyRange(),
                    }
                    : {
                        error: `Invalid compilation data detected: the public key provided for "${identifier}" is not a valid Secp256k1 public key.`,
                        range: createEmptyRange(),
                    },
            ]), [])),
    ...(data.keys?.privateKeys === undefined
        ? []
        : Object.entries(data.keys.privateKeys).reduce((all, [variableId, privateKey]) => all.concat(validateSecp256k1PrivateKey(privateKey)
            ? []
            : [
                {
                    error: `Invalid compilation data detected: the private key provided for the "${variableId}" variable is not a valid Secp256k1 private key.`,
                    range: createEmptyRange(),
                },
            ]), [])),
    ...(data.hdKeys?.hdPrivateKeys === undefined
        ? []
        : Object.entries(data.hdKeys.hdPrivateKeys).reduce((all, [entityId, hdPrivateKey]) => {
            const decoded = decodeHdPrivateKey(hdPrivateKey);
            return all.concat(typeof decoded === 'string'
                ? [
                    {
                        error: `Invalid compilation data detected: the HD private key provided for the "${entityId}" entity is not a valid HD private key. ${decoded}`,
                        range: createEmptyRange(),
                    },
                ]
                : []);
        }, [])),
    ...(data.hdKeys?.hdPublicKeys === undefined
        ? []
        : Object.entries(data.hdKeys.hdPublicKeys).reduce((all, [entityId, hdPublicKey]) => {
            const decoded = decodeHdPublicKey(hdPublicKey);
            return all.concat(typeof decoded === 'string'
                ? [
                    {
                        error: `Invalid compilation data detected: the HD public key provided for the "${entityId}" entity is not a valid HD public key. ${decoded}`,
                        range: createEmptyRange(),
                    },
                ]
                : []);
        }, [])),
];
/**
 * This method is generally for internal use. The {@link compileScript} method
 * is the recommended API for direct compilation.
 */
export const compileScriptRaw = ({ data, configuration, scriptId, }) => {
    const script = configuration.scripts[scriptId];
    if (script === undefined) {
        return {
            errorType: 'parse',
            errors: [
                {
                    error: `No script with an ID of "${scriptId}" was provided in the compiler configuration.`,
                    range: createEmptyRange(),
                },
            ],
            success: false,
        };
    }
    if (configuration.sourceScriptIds?.includes(scriptId) === true) {
        return {
            errorType: 'parse',
            errors: [
                {
                    error: `A circular dependency was encountered: script "${scriptId}" relies on itself to be generated. (Source scripts: ${configuration.sourceScriptIds.join(' → ')})`,
                    range: createEmptyRange(),
                },
            ],
            success: false,
        };
    }
    const sourceScriptIds = configuration.sourceScriptIds === undefined
        ? [scriptId]
        : [...configuration.sourceScriptIds, scriptId];
    const dataErrors = validateCompilationData({ configuration, data });
    if (dataErrors.length !== 0) {
        return {
            errorType: 'parse',
            errors: dataErrors,
            success: false,
        };
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    return compileScriptContents({
        configuration: { ...configuration, sourceScriptIds },
        data,
        script,
    });
};
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
export const resolveScriptIdentifier = ({ data, configuration, identifier, }) => {
    if (configuration.scripts[identifier] === undefined) {
        return false;
    }
    const result = compileScriptRaw({
        configuration,
        data,
        scriptId: identifier,
    });
    if (result.success) {
        return result;
    }
    return `Compilation error in resolved script "${identifier}": ${stringifyErrors(result.errors)}`;
};
/**
 * Return an {@link IdentifierResolutionFunction} for use in
 * {@link resolveScriptSegment}.
 *
 * @param scriptId - the `id` of the script for which the resulting
 * `IdentifierResolutionFunction` will be used.
 */
export const createIdentifierResolver = ({ data, configuration, }) => 
// eslint-disable-next-line complexity
(identifier) => {
    const opcodeResult = configuration.opcodes?.[identifier];
    if (opcodeResult !== undefined) {
        return {
            bytecode: opcodeResult,
            status: true,
            type: IdentifierResolutionType.opcode,
        };
    }
    const variableResult = resolveVariableIdentifier({
        configuration,
        data,
        identifier,
    });
    if (variableResult.status !== 'skip') {
        return variableResult.status === 'error'
            ? {
                ...('debug' in variableResult
                    ? { debug: variableResult.debug }
                    : {}),
                error: variableResult.error,
                ...(configuration.entityOwnership === undefined
                    ? {}
                    : {
                        entityOwnership: 
                        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                        configuration.entityOwnership[identifier.split('.')[0]],
                    }),
                recoverable: 'recoverable' in variableResult,
                status: false,
                type: IdentifierResolutionErrorType.variable,
            }
            : {
                ...('debug' in variableResult
                    ? { debug: variableResult.debug }
                    : {}),
                bytecode: variableResult.bytecode,
                ...('signature' in variableResult
                    ? {
                        signature: variableResult.signature,
                    }
                    : {}),
                status: true,
                type: IdentifierResolutionType.variable,
            };
    }
    const scriptResult = resolveScriptIdentifier({
        configuration,
        data,
        identifier,
    });
    if (scriptResult !== false) {
        return typeof scriptResult === 'string'
            ? {
                error: scriptResult,
                scriptId: identifier,
                status: false,
                type: IdentifierResolutionErrorType.script,
            }
            : {
                bytecode: scriptResult.bytecode,
                source: scriptResult,
                status: true,
                type: IdentifierResolutionType.script,
            };
    }
    return {
        error: `Unknown identifier "${identifier}".`,
        status: false,
        type: IdentifierResolutionErrorType.unknown,
    };
};
/**
 * This method is generally for internal use. The {@link compileScript} method
 * is the recommended API for direct compilation.
 */
export const compileScriptContents = ({ data, configuration, script, }) => {
    const parseResult = parseScript(script);
    if (!parseResult.status) {
        return {
            errorType: 'parse',
            errors: [
                {
                    error: describeExpectedInput(parseResult.expected),
                    range: {
                        endColumn: parseResult.index.column,
                        endLineNumber: parseResult.index.line,
                        startColumn: parseResult.index.column,
                        startLineNumber: parseResult.index.line,
                    },
                },
            ],
            success: false,
        };
    }
    const resolver = createIdentifierResolver({ configuration, data });
    const resolvedScript = resolveScriptSegment(parseResult.value, resolver);
    const resolutionErrors = getResolutionErrors(resolvedScript);
    if (resolutionErrors.length !== 0) {
        return {
            errorType: 'resolve',
            errors: resolutionErrors,
            parse: parseResult.value,
            resolve: resolvedScript,
            success: false,
        };
    }
    const reduction = reduceScript(resolvedScript, configuration.vm, configuration.createAuthenticationProgram);
    return {
        ...(reduction.errors === undefined
            ? { bytecode: reduction.bytecode, success: true }
            : { errorType: 'reduce', errors: reduction.errors, success: false }),
        parse: parseResult.value,
        reduce: reduction,
        resolve: resolvedScript,
    };
};
//# sourceMappingURL=resolve.js.map