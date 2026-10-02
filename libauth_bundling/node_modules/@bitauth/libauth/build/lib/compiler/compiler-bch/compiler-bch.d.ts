import type { AnyCompilerConfiguration, AuthenticationProgramStateBch, CompilationContextBch, CompilationData, CompilerConfiguration, CompilerOperationResult, Sha256, WalletTemplate } from '../../lib.js';
export type CompilerOperationsKeyBch = 'ecdsa_data_signature' | 'ecdsa_signature' | 'public_key' | 'schnorr_data_signature' | 'schnorr_signature';
export declare enum SigningSerializationAlgorithmIdentifier {
    /**
     * A.K.A. `SIGHASH_ALL|SIGHASH_FORKID`
     */
    allOutputs = "all_outputs",
    /**
     * A.K.A. `SIGHASH_ALL|SIGHASH_UTXOS|SIGHASH_FORKID`
     */
    allOutputsAllUtxos = "all_outputs_all_utxos",
    /**
     * A.K.A. `SIGHASH_ALL|SIGHASH_FORKID|ANYONECANPAY`
     */
    allOutputsSingleInput = "all_outputs_single_input",
    /**
     * A.K.A. `SIGHASH_ALL|SIGHASH_UTXOS|SIGHASH_FORKID|ANYONECANPAY`
     */
    allOutputsSingleInputInvalidAllUtxos = "all_outputs_single_input_INVALID_all_utxos",
    /**
     * A.K.A. `SIGHASH_SINGLE|SIGHASH_FORKID`
     */
    correspondingOutput = "corresponding_output",
    /**
     * A.K.A. `SIGHASH_SINGLE|SIGHASH_UTXOS|SIGHASH_FORKID`
     */
    correspondingOutputAllUtxos = "corresponding_output_all_utxos",
    /**
     * A.K.A. `SIGHASH_SINGLE|SIGHASH_FORKID|ANYONECANPAY`
     */
    correspondingOutputSingleInput = "corresponding_output_single_input",
    /**
     * A.K.A. `SIGHASH_SINGLE|SIGHASH_UTXOS|SIGHASH_FORKID|ANYONECANPAY`
     */
    correspondingOutputSingleInputInvalidAllUtxos = "corresponding_output_single_input_INVALID_all_utxos",
    /**
     * An alias for `all_outputs_all_utxos`
     * (A.K.A. `SIGHASH_ALL|SIGHASH_UTXOS|SIGHASH_FORKID`),
     * the most secure signing serialization algorithm.
     *
     * Note that as of 2022, `all_outputs` (A.K.A. `SIGHASH_ALL|SIGHASH_FORKID`)
     * is more commonly used and is therefore a better choice for privacy in
     * common, existing contract types.
     */
    default = "default",
    /**
     * A.K.A `SIGHASH_NONE|SIGHASH_FORKID`
     */
    noOutputs = "no_outputs",
    /**
     * A.K.A `SIGHASH_NONE|SIGHASH_UTXOS|SIGHASH_FORKID`
     */
    noOutputsAllUtxos = "no_outputs_all_utxos",
    /**
     * A.K.A `SIGHASH_NONE|SIGHASH_FORKID|ANYONECANPAY`
     */
    noOutputsSingleInput = "no_outputs_single_input",
    /**
     * A.K.A. `SIGHASH_NONE|SIGHASH_UTXOS|SIGHASH_FORKID|ANYONECANPAY`
     */
    noOutputsSingleInputInvalidAllUtxos = "no_outputs_single_input_INVALID_all_utxos"
}
export declare const compilerOperationHelperComputeSignatureBch: ({ coveredBytecode, identifier, compilationContext, operationName, privateKey, sha256, sign, }: {
    coveredBytecode: Uint8Array;
    identifier: string;
    privateKey: Uint8Array;
    compilationContext: CompilationContextBch;
    operationName: string;
    sign: (privateKey: Uint8Array, messageHash: Uint8Array) => Uint8Array | string;
    sha256: {
        hash: Sha256["hash"];
    };
}) => CompilerOperationResult;
export declare const compilerOperationHelperHdKeySignatureBch: ({ operationName, secp256k1Method, }: {
    operationName: string;
    secp256k1Method: "addTweakPrivateKey" | "addTweakPublicKeyCompressed" | "derivePublicKeyCompressed" | "signMessageHashDER" | "signMessageHashSchnorr";
}) => import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
export declare const compilerOperationHdKeyEcdsaSignatureBch: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
export declare const compilerOperationHdKeySchnorrSignatureBch: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
export declare const compilerOperationHelperKeySignatureBch: ({ operationName, secp256k1Method, }: {
    operationName: string;
    secp256k1Method: "addTweakPrivateKey" | "addTweakPublicKeyCompressed" | "derivePublicKeyCompressed" | "signMessageHashDER" | "signMessageHashSchnorr";
}) => import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
export declare const compilerOperationKeyEcdsaSignatureBch: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
export declare const compilerOperationKeySchnorrSignatureBch: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
export declare const compilerOperationHelperComputeDataSignatureBch: <Data extends CompilationData, Configuration extends AnyCompilerConfiguration<CompilationContextBch>>({ data, configuration, identifier, operationName, privateKey, sha256, sign, }: {
    data: Data;
    configuration: Configuration;
    identifier: string;
    privateKey: Uint8Array;
    operationName: string;
    sign: (privateKey: Uint8Array, messageHash: Uint8Array) => Uint8Array | string;
    sha256: {
        hash: Sha256["hash"];
    };
}) => CompilerOperationResult;
export declare const compilerOperationHelperKeyDataSignatureBch: ({ operationName, secp256k1Method, }: {
    operationName: string;
    secp256k1Method: "addTweakPrivateKey" | "addTweakPublicKeyCompressed" | "derivePublicKeyCompressed" | "signMessageHashDER" | "signMessageHashSchnorr";
}) => import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
export declare const compilerOperationKeyEcdsaDataSignatureBch: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
export declare const compilerOperationKeySchnorrDataSignatureBch: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
export declare const compilerOperationHelperHdKeyDataSignatureBch: ({ operationName, secp256k1Method, }: {
    operationName: string;
    secp256k1Method: "addTweakPrivateKey" | "addTweakPublicKeyCompressed" | "derivePublicKeyCompressed" | "signMessageHashDER" | "signMessageHashSchnorr";
}) => import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
export declare const compilerOperationHdKeyEcdsaDataSignatureBch: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
export declare const compilerOperationHdKeySchnorrDataSignatureBch: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
export declare const compilerOperationSigningSerializationTokenPrefix: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
export declare const compilerOperationSignatureRenamed: (identifier: string) => {
    error: string;
    status: string;
};
export declare const compilerOperationDataSignatureRenamed: (identifier: string) => {
    error: string;
    status: string;
};
export declare const compilerOperationSigningSerializationFullBch: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
export declare const compilerOperationsBch: {
    hdKey: {
        data_signature: (identifier: string) => {
            error: string;
            status: string;
        };
        ecdsa_data_signature: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        ecdsa_signature: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        public_key: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        schnorr_data_signature: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        schnorr_signature: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        signature: (identifier: string) => {
            error: string;
            status: string;
        };
    };
    key: {
        data_signature: (identifier: string) => {
            error: string;
            status: string;
        };
        ecdsa_data_signature: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        ecdsa_signature: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        public_key: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        schnorr_data_signature: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        schnorr_signature: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        signature: (identifier: string) => {
            error: string;
            status: string;
        };
    };
    signingSerialization: {
        full_all_outputs: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_all_outputs_all_utxos: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_all_outputs_single_input: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_all_outputs_single_input_INVALID_all_utxos: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_corresponding_output: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_corresponding_output_all_utxos: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_corresponding_output_single_input: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_corresponding_output_single_input_INVALID_all_utxos: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_default: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_no_outputs: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_no_outputs_all_utxos: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_no_outputs_single_input: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_no_outputs_single_input_INVALID_all_utxos: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        token_prefix: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        corresponding_output: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        corresponding_output_hash: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        covered_bytecode: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        covered_bytecode_length: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        locktime: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        outpoint_index: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        outpoint_transaction_hash: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        output_value: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        sequence_number: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        transaction_outpoints: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        transaction_outpoints_hash: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        transaction_outputs: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        transaction_outputs_hash: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        transaction_sequence_numbers: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        transaction_sequence_numbers_hash: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        version: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
    };
    addressData: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
    currentBlockHeight: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
    currentBlockTime: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
    walletData: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
};
/**
 * @deprecated Alias of `compilerOperationsBch` for backwards-compatibility.
 */
export declare const compilerOperationsBCH: {
    hdKey: {
        data_signature: (identifier: string) => {
            error: string;
            status: string;
        };
        ecdsa_data_signature: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        ecdsa_signature: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        public_key: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        schnorr_data_signature: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        schnorr_signature: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        signature: (identifier: string) => {
            error: string;
            status: string;
        };
    };
    key: {
        data_signature: (identifier: string) => {
            error: string;
            status: string;
        };
        ecdsa_data_signature: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        ecdsa_signature: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        public_key: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        schnorr_data_signature: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        schnorr_signature: import("../compiler-types.js").CompilerOperation<CompilationContextBch>;
        signature: (identifier: string) => {
            error: string;
            status: string;
        };
    };
    signingSerialization: {
        full_all_outputs: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_all_outputs_all_utxos: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_all_outputs_single_input: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_all_outputs_single_input_INVALID_all_utxos: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_corresponding_output: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_corresponding_output_all_utxos: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_corresponding_output_single_input: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_corresponding_output_single_input_INVALID_all_utxos: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_default: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_no_outputs: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_no_outputs_all_utxos: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_no_outputs_single_input: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        full_no_outputs_single_input_INVALID_all_utxos: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        token_prefix: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        corresponding_output: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        corresponding_output_hash: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        covered_bytecode: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        covered_bytecode_length: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        locktime: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        outpoint_index: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        outpoint_transaction_hash: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        output_value: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        sequence_number: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        transaction_outpoints: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        transaction_outpoints_hash: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        transaction_outputs: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        transaction_outputs_hash: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        transaction_sequence_numbers: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        transaction_sequence_numbers_hash: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
        version: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
    };
    addressData: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
    currentBlockHeight: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
    currentBlockTime: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
    walletData: import("../compiler-types.js").CompilerOperation<CompilationContextBch, false>;
};
export type CompilerConfigurationBch = CompilerConfiguration<CompilationContextBch, CompilerOperationsKeyBch>;
/**
 * @deprecated Alias of `CompilerConfigurationBch` for backwards-compatibility.
 */
export type CompilerConfigurationBCH = CompilerConfigurationBch;
/**
 * Create a compiler using the default BCH compiler configuration.
 *
 * Internally instantiates the necessary crypto and VM implementations – use
 * {@link compilerConfigurationToCompilerBch} for more control.
 *
 * @param configuration - a compiler configuration from which properties
 * will be used to override properties of the default BCH configuration – must
 * include the `scripts` property
 */
export declare const createCompilerBch: <Configuration extends CompilerConfiguration<CompilationContextBch>, ProgramState extends AuthenticationProgramStateBch>(configuration: Configuration) => import("../compiler-types.js").Compiler<CompilationContextBch, Configuration, ProgramState>;
export declare const createCompiler: <Configuration extends CompilerConfiguration<CompilationContextBch>, ProgramState extends AuthenticationProgramStateBch>(configuration: Configuration) => import("../compiler-types.js").Compiler<CompilationContextBch, Configuration, ProgramState>;
/**
 * @deprecated Alias of `createCompilerBch` for backwards-compatibility.
 */
export declare const createCompilerBCH: <Configuration extends CompilerConfiguration<CompilationContextBch>, ProgramState extends AuthenticationProgramStateBch>(configuration: Configuration) => import("../compiler-types.js").Compiler<CompilationContextBch, Configuration, ProgramState>;
/**
 * Create a BCH `Compiler` from a `WalletTemplate` and an optional set
 * of overrides.
 * @param template - the `WalletTemplate` from which to create the BCH
 * compiler
 * @param overrides - a compiler configuration from which properties will be
 * used to override properties of the default BCH configuration
 */
export declare const walletTemplateToCompilerBch: <Configuration extends CompilerConfiguration<CompilationContextBch>, ProgramState extends AuthenticationProgramStateBch>(template: WalletTemplate, overrides?: Configuration) => import("../compiler-types.js").Compiler<CompilationContextBch, Configuration, ProgramState>;
/**
 * @deprecated Alias of `walletTemplateToCompilerBch` for backwards-compatibility.
 */
export declare const walletTemplateToCompilerBCH: <Configuration extends CompilerConfiguration<CompilationContextBch>, ProgramState extends AuthenticationProgramStateBch>(template: WalletTemplate, overrides?: Configuration) => import("../compiler-types.js").Compiler<CompilationContextBch, Configuration, ProgramState>;
//# sourceMappingURL=compiler-bch.d.ts.map