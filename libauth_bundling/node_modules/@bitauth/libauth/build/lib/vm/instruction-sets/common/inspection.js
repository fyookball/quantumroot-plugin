import { int32UnsignedToSigned } from '../../../format/format.js';
import { pushToStack, pushToStackChecked, pushToStackVmNumber, useOneVmNumber, } from './combinators.js';
import { ConsensusCommon } from './consensus.js';
import { applyError, AuthenticationErrorCommon } from './errors.js';
import { encodeAuthenticationInstructions } from './instruction-sets-utils.js';
export const opInputIndex = (state) => pushToStackVmNumber(state, BigInt(state.program.inputIndex));
export const createOpActiveBytecode = ({ maximumStackItemLength = ConsensusCommon.maximumStackItemLength, } = {}) => (state) => pushToStackChecked(state, encodeAuthenticationInstructions(state.instructions.slice(state.lastCodeSeparator + 1)), { maximumStackItemLength });
export const opActiveBytecode = createOpActiveBytecode();
export const opTxVersion = (state) => pushToStackVmNumber(state, BigInt(int32UnsignedToSigned(state.program.transaction.version)));
export const opTxInputCount = (state) => pushToStackVmNumber(state, BigInt(state.program.transaction.inputs.length));
export const opTxOutputCount = (state) => pushToStackVmNumber(state, BigInt(state.program.transaction.outputs.length));
export const opTxLocktime = (state) => pushToStackVmNumber(state, BigInt(state.program.transaction.locktime));
export const useTransactionUtxo = (state, operation) => useOneVmNumber(state, (nextState, [index]) => {
    const utxo = nextState.program.sourceOutputs[Number(index)];
    if (utxo === undefined) {
        return applyError(nextState, AuthenticationErrorCommon.invalidTransactionUtxoIndex, `Transaction UTXO count: ${nextState.program.sourceOutputs.length}; requested index: ${index}.`);
    }
    return operation(state, [utxo]);
});
export const opUtxoValue = (state) => useTransactionUtxo(state, (nextState, [utxo]) => pushToStackVmNumber(nextState, utxo.valueSatoshis));
export const createOpUtxoBytecode = ({ maximumStackItemLength = ConsensusCommon.maximumStackItemLength, } = {}) => (state) => useTransactionUtxo(state, (nextState, [utxo]) => pushToStackChecked(nextState, utxo.lockingBytecode.slice(), {
    maximumStackItemLength,
}));
export const opUtxoBytecode = createOpUtxoBytecode();
export const useTransactionInput = (state, operation) => useOneVmNumber(state, (nextState, [index]) => {
    const input = nextState.program.transaction.inputs[Number(index)];
    if (input === undefined) {
        return applyError(nextState, AuthenticationErrorCommon.invalidTransactionInputIndex, `Transaction input count: ${nextState.program.transaction.inputs.length}; requested index: ${index}.`);
    }
    return operation(state, [input]);
});
export const opOutpointTxHash = (state) => useTransactionInput(state, (nextState, [input]) => pushToStack(nextState, [input.outpointTransactionHash.slice().reverse()]));
export const opOutpointIndex = (state) => useTransactionInput(state, (nextState, [input]) => pushToStackVmNumber(nextState, BigInt(input.outpointIndex)));
export const createOpInputBytecode = ({ maximumStackItemLength = ConsensusCommon.maximumStackItemLength, } = {}) => (state) => useTransactionInput(state, (nextState, [input]) => pushToStackChecked(nextState, input.unlockingBytecode.slice(), {
    maximumStackItemLength,
}));
export const opInputBytecode = createOpInputBytecode();
export const opInputSequenceNumber = (state) => useTransactionInput(state, (nextState, [input]) => pushToStackVmNumber(nextState, BigInt(input.sequenceNumber)));
export const useTransactionOutput = (state, operation) => useOneVmNumber(state, (nextState, [index]) => {
    const input = nextState.program.transaction.outputs[Number(index)];
    if (input === undefined) {
        return applyError(nextState, AuthenticationErrorCommon.invalidTransactionOutputIndex, `Transaction output count: ${nextState.program.transaction.outputs.length}; requested index: ${index}.`);
    }
    return operation(state, [input]);
});
export const opOutputValue = (state) => useTransactionOutput(state, (nextState, [output]) => pushToStackVmNumber(nextState, output.valueSatoshis));
export const createOpOutputBytecode = ({ maximumStackItemLength = ConsensusCommon.maximumStackItemLength, } = {}) => (state) => useTransactionOutput(state, (nextState, [output]) => pushToStackChecked(nextState, output.lockingBytecode.slice(), {
    maximumStackItemLength,
}));
export const opOutputBytecode = createOpOutputBytecode();
//# sourceMappingURL=inspection.js.map