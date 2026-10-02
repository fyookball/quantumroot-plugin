import { applyError, AuthenticationErrorCommon } from './errors.js';
import { isVmNumberError, vmNumberToBigInt } from './instruction-sets-utils.js';
export const useLocktime = (state, operation) => {
    const item = state.stack[state.stack.length - 1];
    if (item === undefined) {
        return applyError(state, AuthenticationErrorCommon.emptyStack);
    }
    const decodedLocktime = vmNumberToBigInt(item, {
        maximumVmNumberByteLength: 5 /* Constants.locktimeVmNumberByteLength */,
        requireMinimalEncoding: true,
    });
    if (isVmNumberError(decodedLocktime)) {
        return applyError(state, AuthenticationErrorCommon.invalidVmNumber, decodedLocktime);
    }
    const locktime = Number(decodedLocktime);
    if (locktime < 0) {
        return applyError(state, AuthenticationErrorCommon.negativeLocktime, `Locktime: ${locktime}.`);
    }
    return operation(state, locktime);
};
const locktimeTypesAreCompatible = (locktime, requiredLocktime) => (locktime < 500000000 /* Constants.locktimeThreshold */ &&
    requiredLocktime < 500000000 /* Constants.locktimeThreshold */) ||
    (locktime >= 500000000 /* Constants.locktimeThreshold */ &&
        requiredLocktime >= 500000000 /* Constants.locktimeThreshold */);
export const opCheckLockTimeVerify = (state) => useLocktime(state, (nextState, requiredLocktime) => {
    if (!locktimeTypesAreCompatible(nextState.program.transaction.locktime, requiredLocktime)) {
        return applyError(nextState, AuthenticationErrorCommon.incompatibleLocktimeType, `Transaction locktime: ${nextState.program.transaction.locktime}; required locktime: ${requiredLocktime}.`);
    }
    if (requiredLocktime > nextState.program.transaction.locktime) {
        return applyError(nextState, AuthenticationErrorCommon.unsatisfiedLocktime, `Transaction locktime: ${nextState.program.transaction.locktime}; required locktime: ${requiredLocktime}.`);
    }
    const { sequenceNumber } = 
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    nextState.program.transaction.inputs[nextState.program.inputIndex];
    if (sequenceNumber === 4294967295 /* Constants.locktimeDisablingSequenceNumber */) {
        return applyError(nextState, AuthenticationErrorCommon.locktimeDisabled, `Sequence number: ${sequenceNumber}.`);
    }
    return nextState;
});
// eslint-disable-next-line no-bitwise
const includesFlag = (value, flag) => (value & flag) !== 0;
export const opCheckSequenceVerify = (state) => useLocktime(state, 
// eslint-disable-next-line complexity
(nextState, requiredSequence) => {
    const { sequenceNumber } = 
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    nextState.program.transaction.inputs[nextState.program.inputIndex];
    const sequenceLocktimeDisabled = includesFlag(requiredSequence, 2147483648 /* Constants.sequenceLocktimeDisableFlag */);
    if (sequenceLocktimeDisabled) {
        return nextState;
    }
    if (nextState.program.transaction.version <
        2 /* Constants.sequenceLocktimeTransactionVersionMinimum */) {
        return applyError(nextState, AuthenticationErrorCommon.checkSequenceUnavailable, `Transaction version: ${nextState.program.transaction.version}.`);
    }
    if (includesFlag(sequenceNumber, 2147483648 /* Constants.sequenceLocktimeDisableFlag */)) {
        return applyError(nextState, AuthenticationErrorCommon.unmatchedSequenceDisable, `Sequence number: ${sequenceNumber}.`);
    }
    if (includesFlag(requiredSequence, 4194304 /* Constants.sequenceLocktimeTypeFlag */) !==
        includesFlag(sequenceNumber, 4194304 /* Constants.sequenceLocktimeTypeFlag */)) {
        return applyError(nextState, AuthenticationErrorCommon.incompatibleSequenceType, `Sequence number: ${sequenceNumber}; required sequence number: ${requiredSequence}.`);
    }
    if (
    // eslint-disable-next-line no-bitwise
    (requiredSequence & 65535 /* Constants.sequenceLocktimeMask */) >
        // eslint-disable-next-line no-bitwise
        (sequenceNumber & 65535 /* Constants.sequenceLocktimeMask */)) {
        return applyError(nextState, AuthenticationErrorCommon.unsatisfiedSequenceNumber, `Sequence number: ${sequenceNumber}; required sequence number: ${requiredSequence}.`);
    }
    return nextState;
});
//# sourceMappingURL=time.js.map