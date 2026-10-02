/**
 * Initialize a virtual machine using the `BCH_2026_05` instruction set.
 *
 * @param standard - If `true`, the additional `isStandard` validations will be
 * enabled. Transactions that fail these rules are often called "non-standard"
 * and can technically be included by miners in valid blocks, but most network
 * nodes will refuse to relay them. (Default: `true`)
 */
export declare const createVirtualMachineBch2026: (standard?: boolean) => import("../../../virtual-machine.js").AuthenticationVirtualMachine<import("../../../vm-types.js").ResolvedTransactionCommon, import("../../../vm-types.js").AuthenticationProgramCommon, import("../../../vm-types.js").AuthenticationProgramStateCommon>;
//# sourceMappingURL=bch-2026-vm.d.ts.map