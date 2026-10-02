import type { AuthenticationProgramBch, AuthenticationProgramStateBch, InstructionSet, ResolvedTransactionBch, Ripemd160, Secp256k1, Sha1, Sha256 } from '../../../../lib.js';
import { ConsensusBch2023 } from './bch-2023-consensus.js';
/**
 * create an instance of the BCH 2023 virtual machine instruction set.
 *
 * @param standard - If `true`, the additional `isStandard` validations will be
 * enabled. Transactions that fail these rules are often called "non-standard"
 * and can technically be included by miners in valid blocks, but most network
 * nodes will refuse to relay them. (Default: `true`)
 */
export declare const createInstructionSetBch2023: <AuthenticationProgramState extends AuthenticationProgramStateBch, Consensus extends typeof ConsensusBch2023 = {
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
    maximumStackItemLength: number;
    maximumStandardLockingBytecodeLength: number;
    maximumStandardTransactionSize: number;
    maximumStandardUnlockingBytecodeLength: number;
    maximumTokenCommitmentLength: number;
    maximumTransactionLengthBytes: number;
    maximumTransactionSignatureChecks: number;
    maximumVmNumberByteLength: number;
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
export declare const createInstructionSetBch: <AuthenticationProgramState extends AuthenticationProgramStateBch, Consensus extends typeof ConsensusBch2023 = {
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
    maximumStackItemLength: number;
    maximumStandardLockingBytecodeLength: number;
    maximumStandardTransactionSize: number;
    maximumStandardUnlockingBytecodeLength: number;
    maximumTokenCommitmentLength: number;
    maximumTransactionLengthBytes: number;
    maximumTransactionSignatureChecks: number;
    maximumVmNumberByteLength: number;
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
//# sourceMappingURL=bch-2023-instruction-set.d.ts.map