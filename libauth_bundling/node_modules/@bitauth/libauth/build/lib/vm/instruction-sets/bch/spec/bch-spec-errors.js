import { AuthenticationErrorBch2026 } from '../2026/bch-2026-errors.js';
export var AuthenticationErrorBchSpecAdditions;
(function (AuthenticationErrorBchSpecAdditions) {
    AuthenticationErrorBchSpecAdditions["excessiveOperationCostOpPow"] = "Program attempted an OP_POW operation that would have exceed the operation cost density limit.";
    AuthenticationErrorBchSpecAdditions["malformedEval"] = "Program attempted to OP_EVAL malformed bytecode.";
})(AuthenticationErrorBchSpecAdditions || (AuthenticationErrorBchSpecAdditions = {}));
/**
 * Errors for the `BCH_SPEC` instruction set.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AuthenticationErrorBchSpec = {
    ...AuthenticationErrorBch2026,
    ...AuthenticationErrorBchSpecAdditions,
};
//# sourceMappingURL=bch-spec-errors.js.map