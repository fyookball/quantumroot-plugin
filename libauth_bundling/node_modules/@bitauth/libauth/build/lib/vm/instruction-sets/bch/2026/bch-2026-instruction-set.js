import { ripemd160 as internalRipemd160, secp256k1 as internalSecp256k1, sha1 as internalSha1, sha256 as internalSha256, } from '../../../../crypto/crypto.js';
import { applyError, conditionallyEvaluate } from '../../common/common.js';
import { createInstructionSetBch2025 } from '../2025/bch-2025-instruction-set.js';
import { opBegin, opUntil } from '../2026/bch-2026-loops.js';
import { createOpLShiftNum, createOpRShiftNum, opInvert, opLShiftBin, opRShiftBin, } from './bch-2026-bitwise.js';
import { ConsensusBch2026 } from './bch-2026-consensus.js';
import { AuthenticationErrorBch2026 } from './bch-2026-errors.js';
import { createOpDefine, opInvoke } from './bch-2026-functions.js';
import { OpcodesBch2026 } from './bch-2026-opcodes.js';
/**
 * * Initialize a virtual machine using the `BCH_2026_05` instruction set.
 *
 * @param standard - If `true`, the additional `isStandard` validations will be
 * enabled. Transactions that fail these rules are often called "non-standard"
 * and can technically be included by miners in valid blocks, but most network
 * nodes will refuse to relay them. (Default: `true`)
 */
export const createInstructionSetBch2026 = (standard = true, { consensus = ConsensusBch2026, ripemd160, secp256k1, sha1, sha256, } = {
    ripemd160: internalRipemd160,
    secp256k1: internalSecp256k1,
    sha1: internalSha1,
    sha256: internalSha256,
}) => {
    const instructionSet = createInstructionSetBch2025(standard, {
        consensus,
        ripemd160,
        secp256k1,
        sha1,
        sha256,
    });
    return {
        ...instructionSet,
        /* eslint-disable functional/no-loop-statements, functional/immutable-data, functional/no-expression-statements */
        continue: (state) => {
            if (state.error !== undefined)
                return false;
            while (state.ip >= state.instructions.length &&
                state.controlStack.length > 0 &&
                typeof state.controlStack[state.controlStack.length - 1] === 'object') {
                const { instructions, ip } = state.controlStack.pop();
                state.ip = ip;
                state.instructions = instructions;
            }
            return state.ip < state.instructions.length;
        },
        every: (state) => {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const nextState = instructionSet.every(state);
            if (nextState.stack.length +
                nextState.alternateStack.length +
                nextState.functionCount >
                consensus.maximumMemorySlots) {
                return applyError(nextState, AuthenticationErrorBch2026.exceededMaximumMemorySlots, `Maximum memory slots: ${consensus.maximumMemorySlots}.`);
            }
            return nextState;
        },
        /* eslint-enable functional/no-loop-statements, functional/immutable-data, functional/no-expression-statements */
        operations: {
            ...instructionSet.operations,
            [OpcodesBch2026.OP_BEGIN]: opBegin,
            [OpcodesBch2026.OP_UNTIL]: opUntil,
            [OpcodesBch2026.OP_INVERT]: conditionallyEvaluate(opInvert),
            [OpcodesBch2026.OP_DEFINE]: conditionallyEvaluate(createOpDefine(consensus)),
            [OpcodesBch2026.OP_INVOKE]: conditionallyEvaluate(opInvoke),
            [OpcodesBch2026.OP_LSHIFTNUM]: conditionallyEvaluate(createOpLShiftNum(consensus)),
            [OpcodesBch2026.OP_RSHIFTNUM]: conditionallyEvaluate(createOpRShiftNum(consensus)),
            [OpcodesBch2026.OP_LSHIFTBIN]: conditionallyEvaluate(opLShiftBin),
            [OpcodesBch2026.OP_RSHIFTBIN]: conditionallyEvaluate(opRShiftBin),
        },
    };
};
//# sourceMappingURL=bch-2026-instruction-set.js.map