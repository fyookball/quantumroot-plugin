import type { AuthenticationProgramBch, AuthenticationProgramStateBch2025, InstructionSet, ResolvedTransactionBch, Ripemd160, Secp256k1, Sha1, Sha256 } from '../../../../lib.js';
import { ConsensusBch2025 } from './bch-2025-consensus.js';
/**
 * Initialize a virtual machine using the `BCH_2025_05` instruction set.
 *
 * @param standard - If `true`, the additional `isStandard` validations will be
 * enabled. Transactions that fail these rules are often called "non-standard"
 * and can technically be included by miners in valid blocks, but most network
 * nodes will refuse to relay them. (Default: `true`)
 */
export declare const createInstructionSetBch2025: <AuthenticationProgramState extends AuthenticationProgramStateBch2025, Consensus extends typeof ConsensusBch2025 = {
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
}>(standard?: boolean, { consensus, ripemd160, secp256k1, sha1, sha256, }?: {
    consensus?: Consensus;
    /**
     * a Ripemd160 implementation
     */
    ripemd160: {
        hash: Ripemd160["hash"];
    };
    /**
     * a Secp256k1 implementation
     */
    secp256k1: {
        verifySignatureSchnorr: Secp256k1["verifySignatureSchnorr"];
        verifySignatureDERLowS: Secp256k1["verifySignatureDERLowS"];
    };
    /**
     * a Sha1 implementation
     */
    sha1: {
        hash: Sha1["hash"];
    };
    /**
     * a Sha256 implementation
     */
    sha256: {
        hash: Sha256["hash"];
    };
}) => InstructionSet<ResolvedTransactionBch, AuthenticationProgramBch, AuthenticationProgramState>;
//# sourceMappingURL=bch-2025-instruction-set.d.ts.map