import type { AuthenticationProgramStateError, AuthenticationProgramStateStack, AuthenticationProgramStateTransactionContext, Input, Output, Transaction } from '../../../../lib.js';
/**
 * Given a list of transaction inputs, extract a hex-encoded list of all
 * {@link Input.outpointTransactionHash}es from inputs that spend output `0` of
 * that transaction (i.e. where {@link Input.outpointIndex} is `0`).
 * @param inputs - a list of transaction inputs
 * @returns a hex-encoded list of {@link Input.outpointTransactionHash}es
 */
export declare const extractGenesisCategories: (inputs: Input[]) => string[];
type ImmutableToken = {
    categoryHex: string;
    commitmentHex: string;
};
type FungibleTokensByCategory = {
    [categoryHex: string]: bigint;
};
type MutableTokensByCategory = {
    [categoryHex: string]: number;
};
/**
 * Given the resolved list of a transaction's source outputs – the Unspent
 * Transaction Outputs (UTXOs) spent by the transaction, extract all token data
 * for token-aware validation. See CHIP-2022-02-CashTokens for details.
 * @param sourceOutputs - a list of resolved source outputs (UTXOs)
 * @returns an object containing `availableImmutableTokens`,
 * `availableMutableTokensByCategory`, `availableSumsByCategory`, and
 * `inputMintingCategories`. See CHIP-2022-02-CashTokens for details.
 */
export declare const extractSourceOutputTokenData: (sourceOutputs: Output[]) => {
    availableImmutableTokens: ImmutableToken[];
    availableMutableTokensByCategory: MutableTokensByCategory;
    availableSumsByCategory: FungibleTokensByCategory;
    inputMintingCategories: string[];
};
/**
 * Given a transaction's outputs, extract all token data for token-aware
 * validation. See CHIP-2022-02-CashTokens for details.
 * @param outputs - a list of transaction outputs
 * @returns an object containing `outputImmutableTokens`,
 * `outputMintingCategories`, `outputMutableTokensByCategory`, and
 * `outputSumsByCategory`. See CHIP-2022-02-CashTokens for details.
 */
export declare const extractTransactionOutputTokenData: (outputs: Transaction["outputs"]) => {
    outputImmutableTokens: ImmutableToken[];
    outputMintingCategories: string[];
    outputMutableTokensByCategory: MutableTokensByCategory;
    outputSumsByCategory: FungibleTokensByCategory;
};
/**
 * Given a transaction and its resolved source outputs – the Unspent Transaction
 * Outputs (UTXOs) it spends – verify that the transaction passes token-aware
 * validation.
 * @param transaction - the transaction to verify
 * @param sourceOutputs - the resolved list of the transaction's source outputs
 * @returns `true` on success, or an error message (string) on failure.
 */
export declare const verifyTransactionTokens: (transaction: Transaction, sourceOutputs: Output[], { maximumTokenCommitmentLength }: {
    maximumTokenCommitmentLength: number;
}) => string | true;
export declare const pushTokenExtendedCategory: <State extends AuthenticationProgramStateError & AuthenticationProgramStateStack & AuthenticationProgramStateTransactionContext>(state: State, utxo: Output) => State;
type TokenOpState = AuthenticationProgramStateError & AuthenticationProgramStateStack & AuthenticationProgramStateTransactionContext;
export declare const pushTokenCommitment: <State extends TokenOpState>(state: State, utxo: Output) => State;
export declare const pushTokenAmount: <State extends TokenOpState>(state: State, utxo: Output) => State;
export declare const opUtxoTokenCategory: <State extends TokenOpState>(state: State) => State;
export declare const opUtxoTokenCommitment: <State extends TokenOpState>(state: State) => State;
export declare const opUtxoTokenAmount: <State extends TokenOpState>(state: State) => State;
export declare const opOutputTokenCategory: <State extends TokenOpState>(state: State) => State;
export declare const opOutputTokenCommitment: <State extends TokenOpState>(state: State) => State;
export declare const opOutputTokenAmount: <State extends TokenOpState>(state: State) => State;
export {};
//# sourceMappingURL=bch-2023-tokens.d.ts.map