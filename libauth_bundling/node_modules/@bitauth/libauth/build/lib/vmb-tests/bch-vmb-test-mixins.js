import { cashAssemblyToBin } from '../compiler/compiler.js';
import { binToHex, range } from '../format/format.js';
export const simpleP2pkhOutput = {
    lockingBytecode: { script: 'lockP2pkh' },
    valueSatoshis: 10_000,
};
export const simpleP2pkhInput = {
    unlockingBytecode: { script: 'unlockP2pkh' },
};
export const emptyP2sh20Output = {
    lockingBytecode: { script: 'lockEmptyP2sh20' },
    valueSatoshis: 10_000,
};
export const emptyP2sh20Input = {
    unlockingBytecode: { script: 'unlockEmptyP2sh20' },
};
export const vmbTestOutput = {
    lockingBytecode: { script: 'vmbTestNullData' },
    valueSatoshis: 0,
};
export const slotOutput = {
    lockingBytecode: ['slot'],
    valueSatoshis: 10_000,
};
export const slotInput = {
    unlockingBytecode: ['slot'],
};
export const slot0Scenario = {
    sourceOutputs: [slotOutput, simpleP2pkhOutput],
    transaction: {
        inputs: [slotInput, simpleP2pkhInput],
        outputs: [vmbTestOutput],
    },
};
export const slot1Scenario = {
    sourceOutputs: [simpleP2pkhOutput, slotOutput],
    transaction: {
        inputs: [simpleP2pkhInput, slotInput],
        outputs: [vmbTestOutput],
    },
};
export const slot2Scenario = {
    sourceOutputs: [simpleP2pkhOutput, simpleP2pkhOutput, slotOutput],
    transaction: {
        inputs: [simpleP2pkhInput, simpleP2pkhInput, slotInput],
        outputs: [vmbTestOutput],
    },
};
export const slot9Scenario = {
    sourceOutputs: [
        simpleP2pkhOutput,
        simpleP2pkhOutput,
        simpleP2pkhOutput,
        simpleP2pkhOutput,
        simpleP2pkhOutput,
        simpleP2pkhOutput,
        simpleP2pkhOutput,
        simpleP2pkhOutput,
        simpleP2pkhOutput,
        slotOutput,
    ],
    transaction: {
        inputs: [
            simpleP2pkhInput,
            simpleP2pkhInput,
            simpleP2pkhInput,
            simpleP2pkhInput,
            simpleP2pkhInput,
            simpleP2pkhInput,
            simpleP2pkhInput,
            simpleP2pkhInput,
            simpleP2pkhInput,
            slotInput,
        ],
        outputs: [vmbTestOutput],
    },
};
export const repeat = (cashAssembly, count) => range(count)
    .map(() => cashAssembly)
    .join(' ');
export const cashAssemblyToHex = (cashAssembly) => binToHex(cashAssemblyToBin(cashAssembly));
/**
 * A scenario for the minimal-possible standard transaction: a single input evaluating the construction under test, and a single, 1-byte output. Because the output is a data-carrier output (A.K.A. "OP_RETURN" output), it's considered valid without including a `valueSatoshis` exceeding the dust threshold.
 *
 * Note that in v1 and v2 transactions, `valueSatoshis` is encoded in a fixed width, so the arbitrary 10,000-satoshi, source output value is chosen here simply for consistency across benchmarks.
 */
export const minimalScenarioStandard = {
    sourceOutputs: [{ lockingBytecode: ['slot'], valueSatoshis: 10_000 }],
    transaction: {
        inputs: [{ unlockingBytecode: ['slot'] }],
        outputs: [
            { lockingBytecode: cashAssemblyToHex('OP_RETURN'), valueSatoshis: 0 },
        ],
    },
};
/**
 * A scenario for padding the size of {@link minimalScenarioStandard} (by appending additional bytes to the OP_RETURN output) to meet the minimum transaction size of 65 bytes.
 * @param bytes - the number of bytes to append
 */
export const minimalScenarioStandardPlusBytes = (bytes) => ({
    sourceOutputs: [{ lockingBytecode: ['slot'], valueSatoshis: 10_000 }],
    transaction: {
        inputs: [{ unlockingBytecode: ['slot'] }],
        outputs: [
            {
                lockingBytecode: cashAssemblyToHex(`OP_RETURN <${repeat('"a"', bytes)}>`),
                valueSatoshis: 0,
            },
        ],
    },
});
const minSats = 10_000;
/**
 * A scenario to pack a full transaction with the contract in question. The last
 * input is marked as the input under test as a convenient indicator of
 * input count.
 * @param using - the locking script type to use (P2SH20 is always more byte
 * efficient than P2SH32, so it's used for packed-transaction P2SH benchmarks)
 * @param repeatCount - the number of inputs across which to repeat the contract
 * under test
 */
export const packedTransactionScenario = (using, repeatCount) => ({
    sourceOutputs: [
        ...range(repeatCount, 1).map((i) => ({
            lockingBytecode: {
                script: using === 'p2s' ? 'lockStandard' : 'lockP2sh20',
            },
            valueSatoshis: i + minSats,
        })),
        { lockingBytecode: ['slot'], valueSatoshis: 10_000 },
    ],
    transaction: {
        inputs: [
            ...range(repeatCount, 1).map(() => ({
                unlockingBytecode: {
                    script: using === 'p2s' ? 'unlockStandard' : 'unlockP2sh20',
                },
            })),
            { unlockingBytecode: ['slot'] },
        ],
        outputs: [
            { lockingBytecode: cashAssemblyToHex('OP_RETURN'), valueSatoshis: 0 },
        ],
    },
});
/**
 * A scenario for the minimal-possible nonstandard transaction: equivalent to {@link minimalScenarioStandard}, but saves one final byte by omitting the `OP_RETURN` (making this transaction fail standard dust limit validation).
 */
export const minimalScenarioNonStandard = {
    sourceOutputs: [{ lockingBytecode: ['slot'], valueSatoshis: 10_000 }],
    transaction: {
        inputs: [{ unlockingBytecode: ['slot'] }],
        outputs: [{ lockingBytecode: '', valueSatoshis: 0 }],
    },
};
//# sourceMappingURL=bch-vmb-test-mixins.js.map