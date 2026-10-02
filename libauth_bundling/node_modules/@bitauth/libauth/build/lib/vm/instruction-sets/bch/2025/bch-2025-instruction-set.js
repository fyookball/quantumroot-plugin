import { ripemd160 as internalRipemd160, secp256k1 as internalSecp256k1, sha1 as internalSha1, sha256 as internalSha256, } from '../../../../crypto/crypto.js';
import { applyError, conditionallyEvaluate, incrementOperationCount, mapOverOperations, opCheckMultiSig, opCheckMultiSigVerify, } from '../../common/common.js';
import { createInstructionSetBch2023 } from '../2023/bch-2023-instruction-set.js';
import { OpcodesBch2023 } from '../2023/bch-2023-opcodes.js';
import { ConsensusBch2025, measureOperationCost, } from './bch-2025-consensus.js';
import { AuthenticationErrorBch2025 } from './bch-2025-errors.js';
/**
 * Initialize a virtual machine using the `BCH_2025_05` instruction set.
 *
 * @param standard - If `true`, the additional `isStandard` validations will be
 * enabled. Transactions that fail these rules are often called "non-standard"
 * and can technically be included by miners in valid blocks, but most network
 * nodes will refuse to relay them. (Default: `true`)
 */
export const createInstructionSetBch2025 = (standard = true, { consensus = ConsensusBch2025, ripemd160, secp256k1, sha1, sha256, } = {
    ripemd160: internalRipemd160,
    secp256k1: internalSecp256k1,
    sha1: internalSha1,
    sha256: internalSha256,
}) => {
    const instructionSet = createInstructionSetBch2023(standard, {
        consensus,
        ripemd160,
        secp256k1,
        sha1,
        sha256,
    });
    return {
        ...instructionSet,
        // eslint-disable-next-line complexity
        every: (state) => {
            // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
            state.metrics.operationCost = measureOperationCost(state.metrics, {
                baseInstructionCost: consensus.baseInstructionCost,
                hashDigestIterationCost: standard
                    ? consensus.hashDigestIterationCostStandard
                    : consensus.hashDigestIterationCostConsensus,
                signatureCheckCost: consensus.signatureCheckCost,
            });
            if (state.metrics.operationCost > state.metrics.maximumOperationCost) {
                return applyError(state, AuthenticationErrorBch2025.excessiveOperationCost, `Maximum operation cost: ${state.metrics.maximumOperationCost} (density control length: ${state.metrics.densityControlLength}); operation cost following operation: ${state.metrics.operationCost}.`);
            }
            if (state.metrics.hashDigestIterations >
                state.metrics.maximumHashDigestIterations) {
                return applyError(state, AuthenticationErrorBch2025.excessiveHashing, `Maximum hash digest iterations: ${state.metrics.maximumHashDigestIterations} (density control length: ${state.metrics.densityControlLength}); hash digest iterations following operation: ${state.metrics.hashDigestIterations}.`);
            }
            if (state.stack.length + state.alternateStack.length >
                consensus.maximumStackDepth) {
                return applyError(state, AuthenticationErrorBch2025.exceededMaximumStackDepth, `Maximum stack depth: ${consensus.maximumStackDepth} items.`);
            }
            if (state.controlStack.length > consensus.maximumControlStackDepth) {
                return applyError(state, AuthenticationErrorBch2025.exceededMaximumControlStackDepth, `Maximum control stack depth: ${consensus.maximumControlStackDepth}.`);
            }
            if (standard &&
                state.metrics.signatureCheckCount >
                    state.metrics.maximumSignatureCheckCount) {
                return applyError(state, AuthenticationErrorBch2025.exceededMaximumSignatureCheckCount, `Maximum signature check count: ${state.metrics.maximumSignatureCheckCount}; signature check count following operation: ${state.metrics.signatureCheckCount}.`);
            }
            return state;
        },
        operations: {
            ...instructionSet.operations,
            ...mapOverOperations(
            /**
             * Note that tracking operation count is no longer required following
             * the `BCH_2025_05` upgrade; this implementation continues to track it
             * correctly for research and debugging.
             */
            [incrementOperationCount, conditionallyEvaluate], {
                [OpcodesBch2023.OP_CHECKMULTISIG]: opCheckMultiSig({
                    enforceOperationLimit: false,
                    secp256k1,
                    sha256,
                }),
                [OpcodesBch2023.OP_CHECKMULTISIGVERIFY]: opCheckMultiSigVerify({
                    enforceOperationLimit: false,
                    secp256k1,
                    sha256,
                }),
            }),
        },
    };
};
//# sourceMappingURL=bch-2025-instruction-set.js.map