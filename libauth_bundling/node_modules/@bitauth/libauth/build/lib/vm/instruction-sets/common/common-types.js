import { conditionallyEvaluate } from './combinators.js';
import { applyError, AuthenticationErrorCommon } from './errors.js';
export const undefinedOperation = conditionallyEvaluate((state) => applyError(state, AuthenticationErrorCommon.unknownOpcode));
const sha256HashLength = 32;
/**
 * This is a meaningless but complete {@link CompilationContextCommon} that uses
 * a default value for each property. This is useful for testing
 * and debugging.
 */
// eslint-disable-next-line complexity
export const createCompilationContextCommonTesting = ({ sourceOutputs, inputs, locktime, version, outputs, } = {}) => ({
    inputIndex: 0,
    sourceOutputs: sourceOutputs
        ? sourceOutputs
        : [
            {
                lockingBytecode: Uint8Array.from([]),
                valueSatoshis: 0xffffffffffffffffn,
            },
        ],
    transaction: {
        inputs: inputs
            ? inputs
            : [
                {
                    outpointIndex: 0,
                    outpointTransactionHash: new Uint8Array(sha256HashLength).fill(1),
                    sequenceNumber: 0,
                    unlockingBytecode: undefined,
                },
            ],
        locktime: locktime ?? 0,
        outputs: outputs ?? [
            {
                lockingBytecode: Uint8Array.from([]),
                valueSatoshis: 0xffffffffffffffffn,
            },
        ],
        version: version ?? 0,
    },
});
//# sourceMappingURL=common-types.js.map