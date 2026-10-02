import { applyError, AuthenticationErrorCommon } from './errors.js';
export const opNop = (state) => state;
export const opNopDisallowed = (state) => applyError(state, AuthenticationErrorCommon.calledUpgradableNop);
/**
 * "Disabled" operations are explicitly forbidden from occurring anywhere in VM
 * bytecode, even within an unexecuted branch.
 */
export const disabledOperation = (state) => applyError(state, AuthenticationErrorCommon.unknownOpcode);
//# sourceMappingURL=nop.js.map