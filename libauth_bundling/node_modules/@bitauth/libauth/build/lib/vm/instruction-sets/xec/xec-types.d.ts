import type { Input, Output, TransactionBch } from '../../../lib.js';
export declare const createTestAuthenticationProgramBch: ({ lockingBytecode, valueSatoshis, unlockingBytecode, }: Output & Pick<Input, "unlockingBytecode">) => {
    inputIndex: number;
    sourceOutputs: Output[];
    transaction: TransactionBch;
};
//# sourceMappingURL=xec-types.d.ts.map