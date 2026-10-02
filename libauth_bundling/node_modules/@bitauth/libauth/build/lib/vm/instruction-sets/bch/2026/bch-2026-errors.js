import { AuthenticationErrorBch2025 } from '../2025/bch-2025-errors.js';
export var AuthenticationErrorBch2026Additions;
(function (AuthenticationErrorBch2026Additions) {
    AuthenticationErrorBch2026Additions["unexpectedUntil"] = "Encountered an OP_UNTIL that is not preceded by a matching OP_BEGIN.";
    AuthenticationErrorBch2026Additions["unexpectedUntilMissingEndIf"] = "Encountered an OP_UNTIL before the previous OP_IF was closed by an OP_ENDIF.";
    AuthenticationErrorBch2026Additions["excessiveLooping"] = "Program attempted an OP_UNTIL operation that would exceed the limit of repeated bytes.";
    AuthenticationErrorBch2026Additions["exceededMaximumMemorySlots"] = "Program attempted to use an excessive number of memory slots: stack items, alternate stack items, and/or defined functions.";
    AuthenticationErrorBch2026Additions["functionIdentifierExcessiveLength"] = "Program attempted to OP_DEFINE a function identifier of excessive length.";
    AuthenticationErrorBch2026Additions["functionIdentifierPreviouslyDefined"] = "Program attempted to OP_DEFINE a previously-defined function identifier.";
    AuthenticationErrorBch2026Additions["functionIdentifierUndefined"] = "Program attempted to OP_INVOKE an undefined function identifier.";
    AuthenticationErrorBch2026Additions["malformedFunction"] = "Program attempted to OP_INVOKE malformed bytecode.";
    AuthenticationErrorBch2026Additions["invalidShiftBitCount"] = "Program attempted a bitwise shift with an invalid bit count.";
})(AuthenticationErrorBch2026Additions || (AuthenticationErrorBch2026Additions = {}));
/**
 * Errors for the `BCH_SPEC` instruction set.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AuthenticationErrorBch2026 = {
    ...AuthenticationErrorBch2025,
    ...AuthenticationErrorBch2026Additions,
};
//# sourceMappingURL=bch-2026-errors.js.map