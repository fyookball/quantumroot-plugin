import * as libauth from "@bitauth/libauth";

/**
 * JSON-RPC bridge for libauth.
 *
 * Transport markers:
 *
 *   { "hexbytes": "..." } <-> Uint8Array
 *   { "bigint": "..." }   <-> BigInt
 */

// Libauth

const LIBAUTH_ALLOWLIST = new Set([
    "swapEndianness",
    "hexToBin",
    "binToHex",
    "privateKeyToP2pkhCashAddress",
    "publicKeyToP2pkhCashAddress",
    "decodeCashAddress",
    "decodeTransactionCommon",
    "encodeTransactionCommon",
    "compileCashAssembly",
    "secp256k1.derivePublicKeyCompressed",
    "secp256k1.derivePublicKeyUncompressed",
]);

function resolveLibauthCallable(path) {
    const parts = path.split(".");
    let current = libauth;

    for (const part of parts) {
        if (current == null) {
            return null;
        }
        current = current[part];
    }

    return current;
}


// Transport

function isPlainObject(value) {
    return value !== null &&
        typeof value === "object" &&
        !Array.isArray(value) &&
        !(value instanceof Uint8Array);
}

function reviveMarkers(value) {
    if (value === null || value === undefined) {
        return value;
    }

    if (Array.isArray(value)) {
        return value.map(reviveMarkers);
    }

    if (isPlainObject(value)) {
        const keys = Object.keys(value);

        if (keys.length === 1 && keys[0] === "hexbytes") {
            const hex = value.hexbytes;
            if (typeof hex !== "string") {
                throw new Error("hexbytes marker must be a string");
            }
            return libauth.hexToBin(hex);
        }

        if (keys.length === 1 && keys[0] === "bigint") {
            const decimal = value.bigint;
            if (typeof decimal !== "string") {
                throw new Error("bigint marker must be a string");
            }
            if (!/^-?\d+$/.test(decimal)) {
                throw new Error("bigint marker must be a base-10 integer string");
            }
            return BigInt(decimal);
        }

        const result = {};
        for (const [key, item] of Object.entries(value)) {
            result[key] = reviveMarkers(item);
        }
        return result;
    }

    return value;
}

function toJsonSafe(value) {
    if (value === null || value === undefined) {
        return value;
    }

    if (value instanceof Uint8Array) {
        return {
            hexbytes: libauth.binToHex(value),
        };
    }

    if (typeof value === "bigint") {
        return {
            bigint: value.toString(10),
        };
    }

    if (Array.isArray(value)) {
        return value.map(toJsonSafe);
    }

    if (isPlainObject(value)) {
        const result = {};
        for (const [key, item] of Object.entries(value)) {
            result[key] = toJsonSafe(item);
        }
        return result;
    }

    return value;
}


// RPC output

function writeLine(value) {
    process.stdout.write(JSON.stringify(value) + "\n");
}

function writeOk(id, result) {
    writeLine({
        id,
        ok: true,
        result,
    });
}

function writeErr(id, message, details) {
    writeLine({
        id,
        ok: false,
        error: {
            message,
            details,
        },
    });
}


// RPC methods

async function handleLibauthCall(params) {
    const { fn, args } = params || {};

    if (typeof fn !== "string" || fn.length === 0) {
        throw new Error("fn is required");
    }

    if (!LIBAUTH_ALLOWLIST.has(fn)) {
        throw new Error(`libauth fn not allowed: ${fn}`);
    }

    const target = resolveLibauthCallable(fn);

    if (typeof target !== "function") {
        throw new Error(`libauth export is not a function: ${fn}`);
    }

    const revivedArgs = reviveMarkers(args);
    const result = Array.isArray(revivedArgs) ? target(...revivedArgs) : target(revivedArgs);
    const resolved = result && typeof result.then === "function" ? await result : result;
    return toJsonSafe(resolved);
}

/*
 * handleQuantumrootCompileScript function:
 *
 * Compiles one deterministic Quantumroot locking script from the wallet
 * template, such as receive_address #0 or quantum_lock #N. Given the wallet
 * XPRV, vault token category, script name, and address index, it uses libauth
 * to compile the script and returns its locking bytecode and CashAddress.
 */
async function handleQuantumrootCompileScript(params) {
    const { template, xprv, category, scriptId, addressIndex } = params || {};

    if (template === null || typeof template !== "object" || Array.isArray(template)) {
        throw new Error("template is required");
    }

    if (typeof xprv !== "string" || xprv.length === 0) {
        throw new Error("xprv is required");
    }

    if (typeof category !== "string" || !/^[0-9a-fA-F]{64}$/.test(category)) {
        throw new Error("category must be a 32-byte hex transaction ID");
    }

    if (typeof scriptId !== "string" || scriptId.length === 0) {
        throw new Error("scriptId is required");
    }

    if (!Number.isSafeInteger(addressIndex) || addressIndex < 0) {
        throw new Error("addressIndex must be a non-negative integer");
    }

    // Template

    const quantumrootTemplate = libauth.assertSuccess(libauth.importWalletTemplate(template));

    const combinedTemplate = {
        ...quantumrootTemplate,
        entities: {
            ...quantumrootTemplate.entities,
            p2pkhOwner: libauth.walletTemplateP2pkh.entities["owner"],
        },
        scripts: {
            ...quantumrootTemplate.scripts,
            ...libauth.walletTemplateP2pkh.scripts,
        },
    };

    // Shared compilation data

    const data = {
        bytecode: {
            leaf_spend_index: "1",
            online_quantum_signer: "0",
            quantum_spend_index: "0",
            token_spend_index: "0",
            vault_token_category: `0x${libauth.swapEndianness(category)}`,
        },
        hdKeys: {
            hdPrivateKeys: {
                owner: xprv,
                p2pkhOwner: xprv,
            },
        },
    };

    const compiler = libauth.createCompilerBch(
        libauth.walletTemplateToCompilerConfiguration({
            ...combinedTemplate,
            scenarios: {
                compile_script: {
                    data,
                    sourceOutputs: [
                        {
                            lockingBytecode: ["slot"],
                            valueSatoshis: 1000,
                        },
                    ],
                    transaction: {
                        inputs: [
                            {
                                outpointIndex: 0,
                                outpointTransactionHash:
                                    "0000000000000000000000000000000000000000000000000000000000000000",
                                unlockingBytecode: ["slot"],
                            },
                        ],
                        outputs: [
                            {
                                lockingBytecode: {
                                    script: scriptId,
                                    overrides: {
                                        hdKeys: {
                                            addressIndex,
                                        },
                                    },
                                },
                                valueSatoshis: 1000,
                            },
                        ],
                    },
                },
            },
        })
    );

    const generated = compiler.generateScenario({
        debug: true,
        scenarioId: "compile_script",
        unlockingScriptId: "schnorr_spend",
    });

    if (typeof generated === "string") {
        throw new Error(`Scenario generation failed: ${generated}`);
    }

    if (typeof generated.scenario === "string") {
        throw new Error(`Scenario generation failed: ${generated.scenario}`);
    }

    const lockingBytecode = generated.scenario.program.transaction.outputs[0].lockingBytecode;

    const addressResult = libauth.assertSuccess(
        libauth.lockingBytecodeToCashAddress({
            bytecode: lockingBytecode,
            prefix: "bitcoincash",
        })
    );

    return {
        category,
        scriptId,
        addressIndex,
        lockingBytecode: libauth.binToHex(lockingBytecode),
        address: addressResult.address,
    };
}


// Quantumroot spend

/*
 * function handleQuantumrootCompileSpend
 * 
 * Builds, signs, and verifies a complete Quantumroot vault spend. It describes
 * the transaction to libauth, compiles quantum_unlock with the full transaction
 * context, rotates the authorization NFT to the next Quantum Lock, verifies the
 * completed transaction with CashVM, and returns the signed transaction to Python.
 */

async function handleQuantumrootCompileSpend(params) {
    const {
        template,
        xprv,
        category,
        quantumLockIndex,
        authorizationInput,
        receiveInputs,
        recipientLockingBytecode,
        recipientSatoshis,
        changeLockingBytecode,
        changeSatoshis,
        nftSatoshis,
        nftCommitment = "7175616e74756d726f6f74",  // "quantumroot" , used as a wallet identifier for recovery.
    } = params || {};

    if (template === null || typeof template !== "object" || Array.isArray(template)) {
        throw new Error("template is required");
    }

    if (typeof xprv !== "string" || !xprv) {
        throw new Error("xprv is required");
    }

    if (typeof category !== "string" || !/^[0-9a-fA-F]{64}$/.test(category)) {
        throw new Error("invalid category");
    }

    if (!Number.isSafeInteger(quantumLockIndex) || quantumLockIndex < 0) {
        throw new Error("invalid quantumLockIndex");
    }

    if (!authorizationInput || typeof authorizationInput !== "object") {
        throw new Error("authorizationInput is required");
    }

    if (!Array.isArray(receiveInputs) || receiveInputs.length === 0) {
        throw new Error("receiveInputs must contain at least one UTXO");
    }

    if (
        typeof recipientLockingBytecode !== "string" ||
        !/^[0-9a-fA-F]*$/.test(recipientLockingBytecode) ||
        recipientLockingBytecode.length % 2 !== 0
    ) {
        throw new Error("invalid recipientLockingBytecode");
    }

    if (!Number.isSafeInteger(recipientSatoshis) || recipientSatoshis <= 0) {
        throw new Error("invalid recipientSatoshis");
    }

    if (!Number.isSafeInteger(nftSatoshis) || nftSatoshis <= 0) {
        throw new Error("invalid nftSatoshis");
    }

    if (
        typeof nftCommitment !== "string" ||
        !/^[0-9a-fA-F]*$/.test(nftCommitment) ||
        nftCommitment.length % 2 !== 0
    ) {
        throw new Error("invalid nftCommitment");
    }

    if (changeSatoshis != null) {
        if (!Number.isSafeInteger(changeSatoshis) || changeSatoshis < 0) {
            throw new Error("invalid changeSatoshis");
        }

        if (
            typeof changeLockingBytecode !== "string" ||
            !/^[0-9a-fA-F]*$/.test(changeLockingBytecode) ||
            changeLockingBytecode.length % 2 !== 0
        ) {
            throw new Error("invalid changeLockingBytecode");
        }
    }

    const validInput = input =>
        input &&
        typeof input.txid === "string" &&
        /^[0-9a-fA-F]{64}$/.test(input.txid) &&
        Number.isSafeInteger(input.vout) &&
        input.vout >= 0 &&
        Number.isSafeInteger(input.satoshis) &&
        input.satoshis > 0 &&
        typeof input.lockingBytecode === "string" &&
        /^[0-9a-fA-F]*$/.test(input.lockingBytecode) &&
        input.lockingBytecode.length % 2 === 0;

    if (!validInput(authorizationInput)) {
        throw new Error("invalid authorizationInput");
    }

    if (!receiveInputs.every(validInput)) {
        throw new Error("invalid receiveInputs");
    }

    const normalizedCategory = category.toLowerCase();
    const normalizedCommitment = nftCommitment.toLowerCase();
    const normalizedRecipientLockingBytecode = recipientLockingBytecode.toLowerCase();
    const normalizedChangeLockingBytecode =
        typeof changeLockingBytecode === "string" ? changeLockingBytecode.toLowerCase() : null;

    const quantumrootTemplate = libauth.assertSuccess(libauth.importWalletTemplate(template));

    const combinedTemplate = {
        ...quantumrootTemplate,
        entities: {
            ...quantumrootTemplate.entities,
            p2pkhOwner: libauth.walletTemplateP2pkh.entities["owner"],
        },
        scripts: {
            ...quantumrootTemplate.scripts,
            ...libauth.walletTemplateP2pkh.scripts,
        },
    };

    const data = {
        bytecode: {
            leaf_spend_index: "1",
            online_quantum_signer: "0",
            quantum_spend_index: "0",
            token_spend_index: "0",
            vault_token_category: `0x${libauth.swapEndianness(category)}`,
        },
        hdKeys: {
            hdPrivateKeys: {
                owner: xprv,
                p2pkhOwner: xprv,
            },
        },
    };

    // Authorization NFT

    const token = {
        category,
        nft: {
            commitment: nftCommitment,
        },
    };

    // Source output 0 is the authorization NFT at quantum_lock #N.
    // It is the only source output using ["slot"].

    const sourceOutputs = [
        {
            lockingBytecode: ["slot"],
            token,
            valueSatoshis: authorizationInput.satoshis,
        },
        ...receiveInputs.map(input => ({
            lockingBytecode: {
                script: "receive_address",
                overrides: {
                    hdKeys: {
                        addressIndex: 0,
                    },
                },
            },
            valueSatoshis: input.satoshis,
        })),
    ];

    // Inputs:
    //   0: authorization NFT / quantum_unlock
    //   1: first receive_address #0 UTXO / token_spend
    //   2+: remaining receive_address #0 UTXOs / introspection_spend

    const inputs = [
        {
            compilationOrder: 1,
            outpointIndex: authorizationInput.vout,
            outpointTransactionHash: authorizationInput.txid,
            unlockingBytecode: ["slot"],
        },
        ...receiveInputs.map((input, index) => ({
            outpointIndex: input.vout,
            outpointTransactionHash: input.txid,
            unlockingBytecode: {
                script: index === 0 ? "token_spend" : "introspection_spend",
                overrides: {
                    hdKeys: {
                        addressIndex: 0,
                    },
                },
            },
        })),
    ];

    // Outputs:
    //   0: same authorization NFT at quantum_lock #(N + 1)
    //   1: requested recipient
    //   2: optional change back to receive_address #0

    const outputs = [
        {
            lockingBytecode: {
                script: "quantum_lock",
                overrides: {
                    hdKeys: {
                        addressIndex: quantumLockIndex + 1,
                    },
                },
            },
            token,
            valueSatoshis: nftSatoshis,
        },
        {
            lockingBytecode: recipientLockingBytecode,
            valueSatoshis: recipientSatoshis,
        },
    ];

    if (changeSatoshis != null && changeSatoshis > 0) {
        outputs.push({
            lockingBytecode: changeLockingBytecode,
            valueSatoshis: changeSatoshis,
        });
    }

    // Scenario

    const scenarioTemplate = {
        ...combinedTemplate,
        scenarios: {
            inherit: {
                data,
            },
            spend: {
                extends: "inherit",
                data: {
                    hdKeys: {
                        addressIndex: quantumLockIndex,
                    },
                },
                sourceOutputs,
                transaction: {
                    inputs,
                    outputs,
                },
            },
        },
    };

    const rawConfiguration = libauth.walletTemplateToCompilerConfiguration(scenarioTemplate);
    const originalCompiler = libauth.createCompilerBch(rawConfiguration);
    const originalConfiguration = originalCompiler.configuration;

    const generateScenarioBchDirect =
        libauth.generateScenarioBch ?? libauth.generateScenarioBCH;

    if (typeof generateScenarioBchDirect !== "function") {
        throw new Error("Could not find generateScenarioBch/generateScenarioBCH");
    }

    let capturedQuantumData;

    const wrappedGenerateBytecode = args => {
        if (args.scriptId === "quantum_unlock") {
            capturedQuantumData = args.data;
        }

        return originalCompiler.generateBytecode(args);
    };

    const generated = generateScenarioBchDirect(
        {
            configuration: originalConfiguration,
            generateBytecode: wrappedGenerateBytecode,
            scenarioId: "spend",
            unlockingScriptId: "quantum_unlock",
        },
        true
    );

    if (typeof generated === "string") {
        throw new Error(`Quantumroot spend scenario generation failed: ${generated}`);
    }

    if (typeof generated.scenario === "string") {
        throw new Error(
            `Quantumroot spend scenario generation failed: ${generated.scenario}`
        );
    }

    if (capturedQuantumData === undefined) {
        throw new Error("Failed to capture quantum_unlock CompilationData");
    }

    const program = generated.scenario.program;
    const context = capturedQuantumData.compilationContext;

    if (!context) {
        throw new Error("quantum_unlock CompilationData has no compilationContext");
    }

    if (context.inputIndex !== 0) {
        throw new Error(`Expected quantum_unlock inputIndex 0, got ${context.inputIndex}`);
    }

    const contextualCreateAuthenticationProgram = evaluationBytecode => {
        const transaction = structuredClone(context.transaction);

        transaction.inputs = transaction.inputs.map(input => ({
            ...input,
            unlockingBytecode: input.unlockingBytecode ?? Uint8Array.of(),
        }));

        const contextualSourceOutputs = structuredClone(context.sourceOutputs);

        contextualSourceOutputs[context.inputIndex] = {
            ...contextualSourceOutputs[context.inputIndex],
            lockingBytecode: evaluationBytecode,
        };

        return {
            inputIndex: context.inputIndex,
            sourceOutputs: contextualSourceOutputs,
            transaction,
        };
    };

    const contextualCompiler = libauth.createCompilerBch({
        ...rawConfiguration,
        createAuthenticationProgram: contextualCreateAuthenticationProgram,
    });

    const fixedUnlockResult = contextualCompiler.generateBytecode({
        data: capturedQuantumData,
        debug: true,
        scriptId: "quantum_unlock",
    });

    if (typeof fixedUnlockResult === "string" || fixedUnlockResult.success !== true) {
        throw new Error(
            `quantum_unlock contextual compilation failed: ${JSON.stringify(
                toJsonSafe(fixedUnlockResult)
            )}`
        );
    }

    /* Replace the authorization input's unlocking bytecode.  This flow
    comes from the quantumroot demo scripts.  Essentially, generate the
    scenario, then compile the quantumlock, replace the bytecode, then
    verify and serialize. */

    const patchedProgram = structuredClone(program);
    patchedProgram.transaction.inputs[0].unlockingBytecode = fixedUnlockResult.bytecode;

    const recipientOutput = patchedProgram.transaction.outputs[1];

    if (libauth.binToHex(recipientOutput.lockingBytecode) !== normalizedRecipientLockingBytecode) {
        throw new Error("Final recipient locking bytecode changed during contextual compilation");
    }

    if (Number(recipientOutput.valueSatoshis) !== recipientSatoshis) {
        throw new Error("Final recipient amount changed during contextual compilation");
    }

    const authorizationOutput = patchedProgram.transaction.outputs[0];
    const outputToken = authorizationOutput.token;

    if (outputToken === undefined) {
        throw new Error("Authorization output lost its token");
    }

    if (libauth.binToHex(outputToken.category) !== normalizedCategory) {
        throw new Error("Authorization NFT category changed");
    }

    if (outputToken.nft === undefined) {
        throw new Error("Authorization output is not an NFT");
    }

    if (outputToken.nft.capability !== "none") {
        throw new Error("Authorization NFT is no longer immutable");
    }

    if (libauth.binToHex(outputToken.nft.commitment) !== normalizedCommitment) {
        throw new Error("Authorization NFT commitment changed");
    }

    if (Number(authorizationOutput.valueSatoshis) !== nftSatoshis) {
        throw new Error(
            `Authorization NFT output amount mismatch: expected ${nftSatoshis}, got ${
                authorizationOutput.valueSatoshis
            }`
        );
    }

    if (changeSatoshis != null && changeSatoshis > 0) {
        const changeOutput = patchedProgram.transaction.outputs[2];

        if (changeOutput === undefined) {
            throw new Error("Expected change output is missing");
        }

        if (libauth.binToHex(changeOutput.lockingBytecode) !== normalizedChangeLockingBytecode) {
            throw new Error("Final change locking bytecode changed during contextual compilation");
        }

        if (Number(changeOutput.valueSatoshis) !== changeSatoshis) {
            throw new Error("Final change amount changed during contextual compilation");
        }
    } else if (patchedProgram.transaction.outputs.length !== 2) {
        throw new Error("Unexpected change output");
    }

    const verification = libauth.createVirtualMachineBch2026(true).verify(patchedProgram);

    if (verification !== true) {
        throw new Error(
            `CashVM verification failed: ${JSON.stringify(toJsonSafe(verification))}`
        );
    }

    const transactionBin = libauth.encodeTransaction(patchedProgram.transaction);

    const sourceSatoshis = patchedProgram.sourceOutputs.reduce(
        (total, output) => total + Number(output.valueSatoshis),
        0
    );

    const outputSatoshis = patchedProgram.transaction.outputs.reduce(
        (total, output) => total + Number(output.valueSatoshis),
        0
    );

    const feeSatoshis = sourceSatoshis - outputSatoshis;

    return {
        verified: true,
        transactionBytes: transactionBin.length,
        sizeBytes: transactionBin.length,
        transactionHex: libauth.binToHex(transactionBin),
        txid: libauth.hashTransaction(transactionBin),
        feeSatoshis,
        sourceSatoshis,
        outputSatoshis,
        quantumLockIndex,
        nextQuantumLockIndex: quantumLockIndex + 1,
        authorizationUnlockingBytecode: libauth.binToHex(
            patchedProgram.transaction.inputs[0].unlockingBytecode
        ),
        receiveUnlockingBytecodes: patchedProgram.transaction.inputs
            .slice(1)
            .map(input => libauth.binToHex(input.unlockingBytecode)),
    };
}


// Dispatch

async function dispatchRpc(method, params) {
    switch (method) {
        case "libauthCall":
            return handleLibauthCall(params);

        case "quantumrootCompileScript":
            return handleQuantumrootCompileScript(params);

        case "quantumrootCompileSpend":
            return handleQuantumrootCompileSpend(params);

        default:
            throw new Error(`Unknown method: ${method}`);
    }
}


// Message loop

let buffer = "";

process.stdin.setEncoding("utf8");

process.stdin.on("data", chunk => {
    buffer += chunk;

    while (true) {
        const newline = buffer.indexOf("\n");

        if (newline === -1) {
            break;
        }

        const line = buffer.slice(0, newline).trim();
        buffer = buffer.slice(newline + 1);

        if (!line) {
            continue;
        }

        let message;

        try {
            message = JSON.parse(line);
        } catch {
            writeErr(null, "Invalid JSON", {
                line,
            });
            continue;
        }

        const id = Object.prototype.hasOwnProperty.call(message, "id") ? message.id : null;

        (async () => {
            try {
                const result = await dispatchRpc(message.method, message.params);
                writeOk(id, result);
            } catch (error) {
                writeErr(id, "Exception", {
                    name: error?.name,
                    message: error?.message ?? String(error),
                    stack: error?.stack,
                });
            }
        })();
    }
});

process.stdin.on("end", () => process.exit(0));
