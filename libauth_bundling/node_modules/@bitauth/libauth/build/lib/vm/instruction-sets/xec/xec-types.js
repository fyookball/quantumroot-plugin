import { hexToBin } from '../../../format/format.js';
import { encodeTransactionCommon, hashTransactionP2pOrder, } from '../../../message/message.js';
export const createTestAuthenticationProgramBch = ({ lockingBytecode, valueSatoshis, unlockingBytecode, }) => {
    const testFundingTransaction = {
        inputs: [
            {
                outpointIndex: 0xffffffff,
                outpointTransactionHash: hexToBin('0000000000000000000000000000000000000000000000000000000000000000'),
                sequenceNumber: 0xffffffff,
                unlockingBytecode: Uint8Array.of(0, 0),
            },
        ],
        locktime: 0,
        outputs: [{ lockingBytecode, valueSatoshis }],
        version: 1,
    };
    const testSpendingTransaction = {
        inputs: [
            {
                outpointIndex: 0,
                outpointTransactionHash: hashTransactionP2pOrder(encodeTransactionCommon(testFundingTransaction)),
                sequenceNumber: 0xffffffff,
                unlockingBytecode,
            },
        ],
        locktime: 0,
        outputs: [{ lockingBytecode: Uint8Array.of(), valueSatoshis }],
        version: 1,
    };
    return {
        inputIndex: 0,
        sourceOutputs: testFundingTransaction.outputs,
        transaction: testSpendingTransaction,
    };
};
//# sourceMappingURL=xec-types.js.map