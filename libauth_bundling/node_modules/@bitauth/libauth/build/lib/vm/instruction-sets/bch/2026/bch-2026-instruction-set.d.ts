import type { AuthenticationProgramBch, InstructionSet, ResolvedTransactionBch, Ripemd160, Secp256k1, Sha1, Sha256 } from '../../../../lib.js';
import { ConsensusBch2026 } from './bch-2026-consensus.js';
import type { AuthenticationProgramStateBch2026 } from './bch-2026-types.js';
/**
 * * Initialize a virtual machine using the `BCH_2026_05` instruction set.
 *
 * @param standard - If `true`, the additional `isStandard` validations will be
 * enabled. Transactions that fail these rules are often called "non-standard"
 * and can technically be included by miners in valid blocks, but most network
 * nodes will refuse to relay them. (Default: `true`)
 */
export declare const createInstructionSetBch2026: <AuthenticationProgramState extends AuthenticationProgramStateBch2026, Consensus extends typeof ConsensusBch2026 = {
    baseInstructionCost: number;
    maximumFunctionIdentifierLength: number;
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
//# sourceMappingURL=bch-2026-instruction-set.d.ts.map