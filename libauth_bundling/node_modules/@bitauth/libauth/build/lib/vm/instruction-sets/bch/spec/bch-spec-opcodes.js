import { OpcodesBch2026 } from '../2026/bch-2026-opcodes.js';
/**
 * The opcodes added to the `BCH_SPEC` instruction set beyond those present in
 * `BCH_2026_05`.
 *
 * These opcodes are exposed for testing and not currently expected to become
 * part of a known upgrade. `BCH_SPEC` opcodes may be removed or modified by
 * future versions of Libauth.
 */
export var OpcodesBchSpecAdditions;
(function (OpcodesBchSpecAdditions) {
    /**
     * Overrides `OP_VER`
     */
    OpcodesBchSpecAdditions[OpcodesBchSpecAdditions["OP_EVAL"] = 98] = "OP_EVAL";
    /**
     * Overrides `OP_NOP1`
     */
    OpcodesBchSpecAdditions[OpcodesBchSpecAdditions["OP_POW"] = 176] = "OP_POW";
})(OpcodesBchSpecAdditions || (OpcodesBchSpecAdditions = {}));
/**
 * The `BCH_SPEC` instruction set.
 *
 * Note: to maximize script compilation compatibility, this instruction set also
 * includes the previous names for new opcodes (e.g. `OP_VERIF` for `OP_BEGIN`).
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const OpcodesBchSpec = { ...OpcodesBch2026, ...OpcodesBchSpecAdditions };
//# sourceMappingURL=bch-spec-opcodes.js.map