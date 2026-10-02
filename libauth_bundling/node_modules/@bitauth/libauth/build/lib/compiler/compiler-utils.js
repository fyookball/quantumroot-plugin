import { ripemd160 as internalRipemd160, secp256k1 as internalSecp256k1, sha256 as internalSha256, sha512 as internalSha512, } from '../crypto/crypto.js';
import { flattenBinArray } from '../format/format.js';
import { compileScript } from '../language/language.js';
import { createVirtualMachineBchSpec, generateBytecodeMap, Opcodes, OpcodesBchSpec, OpcodesBtc, } from '../vm/vm.js';
import { compilerOperationsCommon } from './compiler-operations.js';
import { generateScenarioBch } from './scenarios.js';
/**
 * Create a {@link Compiler.generateBytecode} method given a compiler
 * configuration.
 */
export const createCompilerGenerateBytecodeFunction = (compilerConfiguration) => ({ data, debug, scriptId, }) => {
    const result = compileScript(scriptId, data, compilerConfiguration);
    return (debug === true
        ? result
        : result.success
            ? { bytecode: result.bytecode, success: true }
            : {
                errorType: result.errorType,
                errors: result.errors,
                success: false,
            });
};
/**
 * Create a {@link Compiler} from the provided compiler configuration. This
 * method requires a full {@link CompilerConfiguration} and does not provide any
 * crypto or VM implementations.
 *
 * @param configuration - the configuration from which to create the compiler
 */
export const compilerConfigurationToCompilerBch = (configuration) => {
    const generateBytecode = createCompilerGenerateBytecodeFunction(configuration);
    return {
        configuration,
        generateBytecode,
        generateScenario: ({ lockingScriptId, unlockingScriptId, scenarioId, debug, }) => generateScenarioBch({
            configuration,
            generateBytecode,
            lockingScriptId,
            scenarioId,
            unlockingScriptId,
        }, debug),
    };
};
/**
 * @deprecated Alias of `compilerConfigurationToCompilerBch` for backwards-compatibility.
 */
export const compilerConfigurationToCompilerBCH = compilerConfigurationToCompilerBch;
export const compilerConfigurationToCompiler = compilerConfigurationToCompilerBch;
const nullHashLength = 32;
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
export const createAuthenticationProgramEvaluationCommon = (evaluationBytecode) => ({
    inputIndex: 0,
    sourceOutputs: [
        {
            lockingBytecode: evaluationBytecode,
            valueSatoshis: 0n,
        },
    ],
    transaction: {
        inputs: [
            {
                outpointIndex: 0,
                outpointTransactionHash: new Uint8Array(nullHashLength),
                sequenceNumber: 0,
                unlockingBytecode: Uint8Array.of(),
            },
        ],
        locktime: 0,
        outputs: [
            {
                lockingBytecode: flattenBinArray([Uint8Array.of(Opcodes.OP_RETURN)]),
                valueSatoshis: 0n,
            },
        ],
        version: 0,
    },
});
/**
 * Create a compiler using the default common compiler configuration. Because
 * this compiler has no access to a VM, it cannot compile evaluations.
 *
 * @param scriptsAndOverrides - a compiler configuration from which properties
 * will be used to override properties of the default common compiler
 * configuration – must include the `scripts` property
 */
export const createCompilerCommon = (scriptsAndOverrides) => compilerConfigurationToCompilerBch({
    ...{
        createAuthenticationProgram: createAuthenticationProgramEvaluationCommon,
        opcodes: generateBytecodeMap(Opcodes),
        operations: compilerOperationsCommon,
        ripemd160: internalRipemd160,
        secp256k1: internalSecp256k1,
        sha256: internalSha256,
        sha512: internalSha512,
    },
    ...scriptsAndOverrides,
});
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
export const compileCashAssembly = (script) => {
    const result = createCompilerCommon({
        opcodes: {},
        operations: {},
        scripts: { script },
    }).generateBytecode({ data: {}, scriptId: 'script' });
    if (result.success) {
        return result.bytecode;
    }
    return `CashAssembly compilation error:${result.errors.reduce((all, { error, range }) => `${all} [${range.startLineNumber}, ${range.startColumn}]: ${error}`, '')}`;
};
const defaultVm = createVirtualMachineBchSpec();
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
export const debugCashAssemblyCompilation = (script, scriptsAndOverrides = { scripts: {}, vm: defaultVm }) => {
    const merged = {
        ...scriptsAndOverrides,
        scripts: {
            script,
            ...scriptsAndOverrides.scripts,
        },
        ...(scriptsAndOverrides.vm ? scriptsAndOverrides.vm : { vm: defaultVm }),
    };
    return createCompilerCommon(merged).generateScenario({
        debug: true,
        lockingScriptId: 'script',
    });
};
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
export const debugCashAssembly = (script, scriptsAndOverrides = { scripts: {}, vm: defaultVm }) => {
    const vm = scriptsAndOverrides.vm ?? defaultVm;
    const result = debugCashAssemblyCompilation(script, { ...scriptsAndOverrides, vm });
    if (typeof result === 'string')
        return {
            error: result,
            success: false,
        };
    if (typeof result.scenario === 'string')
        return {
            error: result.scenario,
            result,
            success: false,
        };
    const trace = vm.debug(result.scenario.program);
    const verify = vm.verify(result.scenario.program);
    return { compilation: result, success: true, trace, verify };
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
export const evaluateCashAssembly = (script, scriptsAndOverrides = { scripts: {}, vm: defaultVm }) => {
    const vm = scriptsAndOverrides.vm ?? defaultVm;
    const debug = debugCashAssembly(script, { ...scriptsAndOverrides, vm });
    if (!debug.success)
        return debug.error;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return debug.trace[debug.trace.length - 1];
};
/**
 * Re-assemble a string of disassembled bytecode
 * (see {@link disassembleBytecode}).
 *
 * @param opcodes - a mapping of opcodes to their respective Uint8Array
 * representation
 * @param disassembledBytecode - the disassembled bytecode to re-assemble
 */
export const assembleBytecode = (opcodes, disassembledBytecode) => {
    const configuration = {
        opcodes,
        scripts: { asm: disassembledBytecode },
    };
    return createCompilerCommon(configuration).generateBytecode({ data: {}, scriptId: 'asm' });
};
/**
 * Re-assemble a string of disassembled BCH bytecode; see
 * {@link disassembleBytecodeBch}.
 *
 * Note, this method performs automatic minimization of push instructions.
 *
 * @param disassembledBytecode - the disassembled BCH bytecode to re-assemble
 */
export const assembleBytecodeBch = (disassembledBytecode) => assembleBytecode(generateBytecodeMap(OpcodesBchSpec), disassembledBytecode);
/**
 * @deprecated Alias of `assembleBytecodeBch` for backwards-compatibility.
 */
export const assembleBytecodeBCH = assembleBytecodeBch;
/**
 * A convenience method to compile CashAssembly (using
 * {@link assembleBytecodeBch}) to bytecode. If compilation fails, errors are
 * returned as a string.
 */
export const cashAssemblyToBin = (cashAssemblyScript) => {
    const result = assembleBytecodeBch(cashAssemblyScript);
    return result.success
        ? result.bytecode
        : `CashAssembly compilation ${result.errorType} error: ${result.errors
            .map((err) => err.error)
            .join(' ')}`;
};
/**
 * Re-assemble a string of disassembled BCH bytecode; see
 * {@link disassembleBytecodeBtc}.
 *
 * Note, this method performs automatic minimization of push instructions.
 *
 * @param disassembledBytecode - the disassembled BTC bytecode to re-assemble
 */
export const assembleBytecodeBtc = (disassembledBytecode) => assembleBytecode(generateBytecodeMap(OpcodesBtc), disassembledBytecode);
/**
 * @deprecated Alias of `assembleBytecodeBtc` for backwards-compatibility.
 */
export const assembleBytecodeBTC = assembleBytecodeBtc;
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
export const walletTemplateToCompilerConfiguration = (template) => {
    /**
     * Template scripts including virtualized test scripts.
     */
    const virtualizedScripts = Object.entries(template.scripts).reduce((all, [scriptId, script]) => {
        if ('tests' in script) {
            return {
                ...all,
                ...Object.entries(script.tests).reduce((tests, [testId, test]) => {
                    const pushTestedScript = script.pushed === true;
                    const checkScriptId = `${scriptId}.${testId}.check`;
                    const virtualizedLockingScriptId = `${scriptId}.${testId}.lock`;
                    const virtualizedUnlockingScriptId = `${scriptId}.${testId}.unlock`;
                    return {
                        ...tests,
                        [checkScriptId]: { script: test.check },
                        [virtualizedLockingScriptId]: {
                            lockingType: 'p2sh20',
                            script: pushTestedScript
                                ? `<${scriptId}> ${checkScriptId}`
                                : `${scriptId} ${checkScriptId}`,
                        },
                        [virtualizedUnlockingScriptId]: {
                            script: test.setup ?? '',
                            unlocks: virtualizedLockingScriptId,
                        },
                    };
                }, {}),
            };
        }
        return all;
    }, {});
    const allScripts = {
        ...template.scripts,
        ...virtualizedScripts,
    };
    const scripts = Object.entries(allScripts).reduce((all, [id, def]) => ({ ...all, [id]: def.script }), {});
    const variables = Object.values(template.entities).reduce((all, entity) => ({ ...all, ...entity.variables }), {});
    const entityOwnership = Object.entries(template.entities).reduce((all, [entityId, entity]) => ({
        ...all,
        ...Object.keys(entity.variables ?? {}).reduce((entityVariables, variableId) => ({
            ...entityVariables,
            [variableId]: entityId,
        }), {}),
    }), {});
    const unlockingScripts = Object.entries(allScripts).reduce((all, [id, def]) => 'unlocks' in def && def.unlocks !== undefined
        ? { ...all, [id]: def.unlocks }
        : all, {});
    const unlockingScriptTimeLockTypes = Object.entries(allScripts).reduce((all, [id, def]) => 'timeLockType' in def && def.timeLockType !== undefined
        ? { ...all, [id]: def.timeLockType }
        : all, {});
    const lockingScriptTypes = Object.entries(allScripts).reduce((all, [id, def]) => 'lockingType' in def &&
        def.lockingType !== undefined
        ? { ...all, [id]: def.lockingType }
        : all, {});
    const scenarios = template.scenarios === undefined
        ? undefined
        : Object.entries(template.scenarios).reduce((all, [id, def]) => ({ ...all, [id]: def }), {});
    return {
        entityOwnership,
        lockingScriptTypes,
        ...(scenarios === undefined ? {} : { scenarios }),
        scripts,
        unlockingScriptTimeLockTypes,
        unlockingScripts,
        variables,
    };
};
//# sourceMappingURL=compiler-utils.js.map