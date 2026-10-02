import type { AuthenticationProgramStateBch2025 } from './bch-2025-types.js';
/**
 * Consensus setting overrides for the `BCH_2025_05` instruction set.
 */
export declare const ConsensusBch2025Overrides: {
    maximumStackItemLength: number;
    maximumVmNumberByteLength: number;
};
export declare const bigIntRange: {
    maxVmNumber: bigint;
    minVmNumber: bigint;
};
/**
 * Consensus settings for the `BCH_2025_05` instruction set.
 */
export declare const ConsensusBch2025: {
    maximumStackItemLength: number;
    maximumVmNumberByteLength: number;
    baseInstructionCost: number;
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
    maximumStandardLockingBytecodeLength: number;
    maximumStandardTransactionSize: number;
    maximumStandardUnlockingBytecodeLength: number;
    maximumTokenCommitmentLength: number;
    maximumTransactionLengthBytes: number;
    maximumTransactionSignatureChecks: number;
    minimumConsensusVersion: number;
    minimumTransactionLengthBytes: number;
    operationCostBudgetPerByte: number;
    schnorrSignatureLength: number;
    signatureCheckCost: number;
};
export declare const measureOperationCost: <Metrics extends Pick<AuthenticationProgramStateBch2025["metrics"], "arithmeticCost" | "evaluatedInstructionCount" | "hashDigestIterations" | "signatureCheckCount" | "stackPushedBytes">>(metrics: Metrics, { baseInstructionCost, hashDigestIterationCost, signatureCheckCost, }?: {
    baseInstructionCost?: number | undefined;
    hashDigestIterationCost?: number | undefined;
    signatureCheckCost?: number | undefined;
}) => number;
//# sourceMappingURL=bch-2025-consensus.d.ts.map