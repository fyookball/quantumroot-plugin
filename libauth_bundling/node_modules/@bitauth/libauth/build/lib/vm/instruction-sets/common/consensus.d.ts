/**
 * Consensus settings for the `BCH_2023_05` instruction set.
 */
export declare enum ConsensusCommon {
    /**
     * A.K.A. `MAX_SCRIPT_SIZE`
     */
    maximumBytecodeLength = 10000,
    maximumControlStackDepth = 100,
    /**
     * A.K.A. `MAX_OP_RETURN_RELAY`, `nMaxDatacarrierBytes`
     */
    maximumDataCarrierBytes = 223,
    /**
     * A.K.A. `MAX_OPS_PER_SCRIPT`
     */
    maximumOperationCount = 201,
    /**
     * A.K.A. `MAX_STACK_SIZE`
     */
    maximumStackDepth = 1000,
    /**
     * A.K.A. `MAX_SCRIPT_ELEMENT_SIZE`
     */
    maximumStackItemLength = 520,
    /**
     * A.K.A. `MAX_STANDARD_VERSION`
     */
    maximumStandardVersion = 2,
    /**
     * A.K.A. `MAX_TX_IN_SCRIPT_SIG_SIZE`
     */
    maximumStandardUnlockingBytecodeLength = 1650,
    /**
     * A.K.A. `MIN_TX_SIZE`
     */
    minimumTransactionSize = 100,
    /**
     * A.K.A. `MAX_STANDARD_TX_SIZE`
     */
    maximumStandardTransactionSize = 100000,
    /**
     * A.K.A. `MAX_TX_SIZE`
     */
    maximumTransactionSize = 1000000,
    /**
     * A.K.A. `MAXIMUM_ELEMENT_SIZE_64_BIT`
     */
    maximumVmNumberByteLength = 8,
    minVmNumber = "-9223372036854775807",
    maxVmNumber = "9223372036854775807",
    schnorrSignatureLength = 64
}
export declare const SigningSerializationTypesCommon: import("./signing-serialization.js").SigningSerializationType[];
export declare const SigningSerializationTypesBch: import("./signing-serialization.js").SigningSerializationType[];
//# sourceMappingURL=consensus.d.ts.map