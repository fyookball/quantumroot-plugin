/**
 * The capability assigned to a particular non-fungible token.
 */
export var NonFungibleTokenCapability;
(function (NonFungibleTokenCapability) {
    /**
     * No capability, i.e. the token is an **immutable token**.
     */
    NonFungibleTokenCapability["none"] = "none";
    /**
     * The mutable capability (`0x01`), i.e. the token is a **mutable token**.
     */
    NonFungibleTokenCapability["mutable"] = "mutable";
    /**
     * The minting capability (`0x02`), i.e. the token is a **minting token**.
     */
    NonFungibleTokenCapability["minting"] = "minting";
})(NonFungibleTokenCapability || (NonFungibleTokenCapability = {}));
/**
 * The maximum uint64 value – an impossibly large, intentionally invalid value
 * for `valueSatoshis`. See {@link Transaction.valueSatoshis} for details.
 */
// prettier-ignore
// eslint-disable-next-line @typescript-eslint/no-magic-numbers
export const excessiveSatoshis = Uint8Array.from([255, 255, 255, 255, 255, 255, 255, 255]);
//# sourceMappingURL=transaction-types.js.map