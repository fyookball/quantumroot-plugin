import { OpcodesBch2023 } from '../2023/bch-2023-opcodes.js';
/**
 * The opcodes added to the `BCH_2026_05` instruction set beyond those present in
 * `BCH_2023_05`.
 */
export var OpcodesBch2026Additions;
(function (OpcodesBch2026Additions) {
    /**
     * Formerly `OP_VERIF`
     */
    OpcodesBch2026Additions[OpcodesBch2026Additions["OP_BEGIN"] = 101] = "OP_BEGIN";
    /**
     * Formerly `OP_VERNOTIF`
     */
    OpcodesBch2026Additions[OpcodesBch2026Additions["OP_UNTIL"] = 102] = "OP_UNTIL";
    OpcodesBch2026Additions[OpcodesBch2026Additions["OP_INVERT"] = 131] = "OP_INVERT";
    /**
     * Formerly `OP_RESERVED1`
     */
    OpcodesBch2026Additions[OpcodesBch2026Additions["OP_DEFINE"] = 137] = "OP_DEFINE";
    /**
     * Formerly `OP_RESERVED2`
     */
    OpcodesBch2026Additions[OpcodesBch2026Additions["OP_INVOKE"] = 138] = "OP_INVOKE";
    /**
     * Formerly `OP_2MUL`
     */
    OpcodesBch2026Additions[OpcodesBch2026Additions["OP_LSHIFTNUM"] = 141] = "OP_LSHIFTNUM";
    /**
     * Formerly `OP_2DIV`
     */
    OpcodesBch2026Additions[OpcodesBch2026Additions["OP_RSHIFTNUM"] = 142] = "OP_RSHIFTNUM";
    /**
     *Formerly `OP_LSHIFT`
     */
    OpcodesBch2026Additions[OpcodesBch2026Additions["OP_LSHIFTBIN"] = 152] = "OP_LSHIFTBIN";
    /**
     *Formerly `OP_RSHIFT`
     */
    OpcodesBch2026Additions[OpcodesBch2026Additions["OP_RSHIFTBIN"] = 153] = "OP_RSHIFTBIN";
})(OpcodesBch2026Additions || (OpcodesBch2026Additions = {}));
/**
 * The `BCH_SPEC` instruction set.
 *
 * Note: to maximize script compilation compatibility, this instruction set also
 * includes the previous names for new opcodes (e.g. `OP_VERIF` for `OP_BEGIN`).
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const OpcodesBch2026 = { ...OpcodesBch2023, ...OpcodesBch2026Additions };
//# sourceMappingURL=bch-2026-opcodes.js.map