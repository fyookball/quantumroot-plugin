/**
 * Consensus setting overrides for the `BCH_SPEC` instruction set.
 */
export declare const ConsensusBch2026Overrides: {
    baseInstructionCost: number;
    maximumFunctionIdentifierLength: number;
    /**
     * A.K.A. `MAX_MEMORY_SLOTS`
     */
    maximumMemorySlots: number;
    maximumStandardLockingBytecodeLength: number;
    maximumStandardUnlockingBytecodeLength: number;
    maximumTokenCommitmentLength: number;
};
/**
 * Consensus settings for the `BCH_SPEC` instruction set.
 */
export declare const ConsensusBch2026: {
    baseInstructionCost: number;
    maximumFunctionIdentifierLength: number;
    /**
     * A.K.A. `MAX_MEMORY_SLOTS`
     */
    maximumMemorySlots: number;
    maximumStandardLockingBytecodeLength: number;
    maximumStandardUnlockingBytecodeLength: number;
    maximumTokenCommitmentLength: number;
    maximumStackItemLength: number;
    maximumVmNumberByteLength: number;
    densityControlBaseLength: number;
    hashDigestIterationCostConsensus: number;
    hashDigestIterationCostStandard: number;
    hashDigestIterationsPerByteNonstandard: number;
    hashDigestIterationsPerByteStandard: number;
    maximumBytecodeLength: number;
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
//# sourceMappingURL=bch-2026-consensus.d.ts.map