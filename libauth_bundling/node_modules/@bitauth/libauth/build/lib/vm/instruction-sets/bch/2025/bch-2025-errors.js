import { AuthenticationErrorBch2023 } from '../2023/bch-2023-errors.js';
export var AuthenticationErrorBch2025Additions;
(function (AuthenticationErrorBch2025Additions) {
    AuthenticationErrorBch2025Additions["excessiveHashing"] = "Program attempted a hashing operation that would exceed the hashing density limit.";
    AuthenticationErrorBch2025Additions["excessiveOperationCost"] = "Program attempted an operation that would exceed the operation cost density limit.";
})(AuthenticationErrorBch2025Additions || (AuthenticationErrorBch2025Additions = {}));
/**
 * Errors for the `BCH_SPEC` instruction set.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
export const AuthenticationErrorBch2025 = {
    ...AuthenticationErrorBch2023,
    ...AuthenticationErrorBch2025Additions,
};
//# sourceMappingURL=bch-2025-errors.js.map