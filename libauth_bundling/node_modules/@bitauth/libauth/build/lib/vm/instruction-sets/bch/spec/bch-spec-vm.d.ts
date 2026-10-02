/**
 * Initialize a virtual machine using the BCH `SPEC` instruction set, an
 * informal, speculative instruction set that implements a variety of future
 * Bitcoin Cash Improvement Proposals (CHIPs).
 *
 * @param standard - If `true`, the additional `isStandard` validations will be
 * enabled. Transactions that fail these rules are often called "non-standard"
 * and can technically be included by miners in valid blocks, but most network
 * nodes will refuse to relay them. (Default: `true`)
 */
export declare const createVirtualMachineBchSpec: (standard?: boolean) => import("../../../virtual-machine.js").AuthenticationVirtualMachine<import("../../../vm-types.js").ResolvedTransactionCommon, import("../../../vm-types.js").AuthenticationProgramCommon, import("./bch-spec-types.js").AuthenticationProgramStateBchSpec>;
//# sourceMappingURL=bch-spec-vm.d.ts.map