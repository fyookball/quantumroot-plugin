/**
 * Consensus settings for the `BCH_2023_05` instruction set.
 */
export declare const ConsensusBch2023: {
    baseInstructionCost: number;
    /**
     * The constant added to the unlocking bytecode length to determine a
     * contract's density control length (for operation cost and hashing budgets).
     */
    densityControlBaseLength: number;
    hashDigestIterationCostConsensus: number;
    hashDigestIterationCostStandard: number;
    hashDigestIterationsPerByteNonstandard: number;
    hashDigestIterationsPerByteStandard: number;
    /**
     * A.K.A. `MAX_SCRIPT_SIZE`
     */
    maximumBytecodeLength: number;
    /**
     * A.K.A. `MAX_CONSENSUS_VERSION`
     */
    maximumConsensusVersion: number;
    maximumControlStackDepth: number;
    /**
     * A.K.A. `MAX_OP_RETURN_RELAY`, `nMaxDatacarrierBytes`
     */
    maximumDataCarrierBytes: number;
    maximumFungibleTokenAmount: string;
    /**
     * A.K.A. `MAX_OPS_PER_SCRIPT`
     */
    maximumOperationCount: number;
    /**
     * A.K.A. `MAX_STACK_SIZE`
     */
    maximumStackDepth: number;
    /**
     * A.K.A. `MAX_SCRIPT_ELEMENT_SIZE`
     */
    maximumStackItemLength: number;
    /**
     * When set to `-1`, only BCH_2023_05 standard patterns are accepted.
     */
    maximumStandardLockingBytecodeLength: number;
    /**
     * A.K.A. `MAX_STANDARD_TX_SIZE`
     */
    maximumStandardTransactionSize: number;
    /**
     * A.K.A. `MAX_TX_IN_SCRIPT_SIG_SIZE`
     */
    maximumStandardUnlockingBytecodeLength: number;
    maximumTokenCommitmentLength: number;
    /**
     * A.K.A. `MAX_TX_SIZE`
     */
    maximumTransactionLengthBytes: number;
    /**
     * A.K.A. `MAX_TX_SIGCHECKS`
     */
    maximumTransactionSignatureChecks: number;
    /**
     * A.K.A. `nMaxNumSize`
     */
    maximumVmNumberByteLength: number;
    /**
     * A.K.A. `MIN_CONSENSUS_VERSION`
     */
    minimumConsensusVersion: number;
    /**
     * Transactions smaller than 65 bytes are forbidden to prevent exploits of the
     * transaction Merkle tree design.
     *
     * A.K.A. `MIN_TX_SIZE`
     */
    minimumTransactionLengthBytes: number;
    operationCostBudgetPerByte: number;
    schnorrSignatureLength: number;
    signatureCheckCost: number;
};
/**
 * Calculate the maximum signature check count (A.K.A. "SigChecks") as defined
 * by the `BCH_2020_05` upgrade.
 */
export declare const maximumSignatureCheckCount: (unlockingBytecodeLength: number) => number;
//# sourceMappingURL=bch-2023-consensus.d.ts.map