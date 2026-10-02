/**
 * Consensus setting overrides for the `BCH_SPEC` instruction set.
 */
export declare const ConsensusBchSpecOverrides: {
    /**
     * Because BCH_SPEC is used to compile CashAssembly internal evaluations,
     * setting a per-input overhead value equal to the current (BCH_2025)
     * `maximumBytecodeLength` ensures that any reasonable internal evaluation can
     * be compiled without exceeding operation cost limits.
     */
    densityControlBaseLength: number;
    maximumBytecodeLength: number;
    maximumStackItemLength: number;
    maximumStandardUnlockingBytecodeLength: number;
    maximumVmNumberByteLength: number;
};
/**
 * Consensus settings for the `BCH_SPEC` instruction set.
 */
export declare const ConsensusBchSpec: {
    /**
     * Because BCH_SPEC is used to compile CashAssembly internal evaluations,
     * setting a per-input overhead value equal to the current (BCH_2025)
     * `maximumBytecodeLength` ensures that any reasonable internal evaluation can
     * be compiled without exceeding operation cost limits.
     */
    densityControlBaseLength: number;
    maximumBytecodeLength: number;
    maximumStackItemLength: number;
    maximumStandardUnlockingBytecodeLength: number;
    maximumVmNumberByteLength: number;
    baseInstructionCost: number;
    maximumFunctionIdentifierLength: number;
    maximumMemorySlots: number;
    maximumStandardLockingBytecodeLength: number;
    maximumTokenCommitmentLength: number;
    hashDigestIterationCostConsensus: number;
    hashDigestIterationCostStandard: number;
    hashDigestIterationsPerByteNonstandard: number;
    hashDigestIterationsPerByteStandard: number;
    maximumConsensusVersion: number;
    maximumControlStackDepth: number;
    maximumDataCarrierBytes: number;
    maximumFungibleTokenAmount: string;
    maximumOperationCount: number;
    maximumStackDepth: number;
    maximumStandardTransactionSize: number;
    maximumTransactionLengthBytes: number;
    maximumTransactionSignatureChecks: number;
    minimumConsensusVersion: number;
    minimumTransactionLengthBytes: number;
    operationCostBudgetPerByte: number;
    schnorrSignatureLength: number;
    signatureCheckCost: number;
};
//# sourceMappingURL=bch-spec-consensus.d.ts.map