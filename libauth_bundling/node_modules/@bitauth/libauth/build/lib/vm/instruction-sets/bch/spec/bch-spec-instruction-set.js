import { ripemd160 as internalRipemd160, secp256k1 as internalSecp256k1, sha1 as internalSha1, sha256 as internalSha256, } from '../../../../crypto/crypto.js';
import { conditionallyEvaluate, incrementOperationCount, } from '../../common/common.js';
import { createInstructionSetBch2026 } from '../2026/bch-2026-instruction-set.js';
import { ConsensusBchSpec } from './bch-spec-consensus.js';
import { opEval } from './bch-spec-eval.js';
import { OpcodesBchSpec } from './bch-spec-opcodes.js';
import { createOpPow } from './bch-spec-pow.js';
/**
 * create an instance of the `BCH_SPEC` virtual machine instruction set, an
 * informal, speculative instruction set that implements a variety of future
 * Bitcoin Cash Improvement Proposals (CHIPs).
 *
 * @param standard - If `true`, the additional `isStandard` validations will be
 * enabled. Transactions that fail these rules are often called "non-standard"
 * and can technically be included by miners in valid blocks, but most network
 * nodes will refuse to relay them. (Default: `true`)
 */
export const createInstructionSetBchSpec = (standard = true, { consensus = ConsensusBchSpec, ripemd160, secp256k1, sha1, sha256, } = {
    ripemd160: internalRipemd160,
    secp256k1: internalSecp256k1,
    sha1: internalSha1,
    sha256: internalSha256,
}) => {
    const instructionSet = createInstructionSetBch2026(standard, {
        consensus,
        ripemd160,
        secp256k1,
        sha1,
        sha256,
    });
    const stackSize = (stack) => stack.reduce((sum, item) => sum + item.length, 0);
    return {
        ...instructionSet,
        every: (state) => {
            const nextState = instructionSet.every?.(state) ?? state;
            /**
             * For benchmarking/research purposes only, not required by the protocol.
             */
            const memoryUsage = stackSize(nextState.stack) + stackSize(nextState.alternateStack);
            // eslint-disable-next-line functional/no-conditional-statements
            if (nextState.metrics.maxMemoryUsage < memoryUsage) {
                // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data
                nextState.metrics.maxMemoryUsage = memoryUsage;
            }
            return nextState;
        },
        operations: {
            ...instructionSet.operations,
            [OpcodesBchSpec.OP_EVAL]: opEval,
            [OpcodesBchSpec.OP_POW]: incrementOperationCount(conditionallyEvaluate(createOpPow(consensus))),
        },
    };
};
//# sourceMappingURL=bch-spec-instruction-set.js.map