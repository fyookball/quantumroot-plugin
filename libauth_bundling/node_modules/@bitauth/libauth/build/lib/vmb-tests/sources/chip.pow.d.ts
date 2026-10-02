/**
 * Note that OP_POW is not from an active CHIP proposed for network activation.
 * This OP_POW implementation is just a convenience utility for use in
 * CashAssembly compilations.
 */
declare const _default: [["OP_POW", [["<2>", "<0> OP_POW <1> OP_EQUAL", "2 ** 0 === 1", readonly ["chip_pow"]], ["<2>", "<0> OP_POW", "2 ** 0", readonly ["chip_pow"]], ["", "OP_POW", "No stack items", readonly ["chip_pow_invalid"]], ["<2>", "OP_POW", "1 stack item", readonly ["chip_pow_invalid"]], ["<2>", "<32> OP_POW <4_294_967_296> OP_EQUAL", "2 ** 32", readonly ["chip_pow"]], ["<3>", "<32> OP_POW <1_853_020_188_851_841> OP_EQUAL", "3 ** 32", readonly ["chip_pow"]]]]];
export default _default;
//# sourceMappingURL=chip.pow.d.ts.map