import type { WalletTemplateScenario, WalletTemplateScenarioInput, WalletTemplateScenarioSourceOutput, WalletTemplateScenarioTransactionOutput } from '../lib.js';
export declare const simpleP2pkhOutput: WalletTemplateScenarioSourceOutput;
export declare const simpleP2pkhInput: WalletTemplateScenarioInput;
export declare const emptyP2sh20Output: WalletTemplateScenarioSourceOutput;
export declare const emptyP2sh20Input: WalletTemplateScenarioInput;
export declare const vmbTestOutput: WalletTemplateScenarioTransactionOutput;
export declare const slotOutput: WalletTemplateScenarioSourceOutput;
export declare const slotInput: WalletTemplateScenarioInput;
export declare const slot0Scenario: WalletTemplateScenario;
export declare const slot1Scenario: WalletTemplateScenario;
export declare const slot2Scenario: WalletTemplateScenario;
export declare const slot9Scenario: WalletTemplateScenario;
export declare const repeat: (cashAssembly: string, count: number) => string;
export declare const cashAssemblyToHex: (cashAssembly: string) => string;
/**
 * A scenario for the minimal-possible standard transaction: a single input evaluating the construction under test, and a single, 1-byte output. Because the output is a data-carrier output (A.K.A. "OP_RETURN" output), it's considered valid without including a `valueSatoshis` exceeding the dust threshold.
 *
 * Note that in v1 and v2 transactions, `valueSatoshis` is encoded in a fixed width, so the arbitrary 10,000-satoshi, source output value is chosen here simply for consistency across benchmarks.
 */
export declare const minimalScenarioStandard: WalletTemplateScenario;
/**
 * A scenario for padding the size of {@link minimalScenarioStandard} (by appending additional bytes to the OP_RETURN output) to meet the minimum transaction size of 65 bytes.
 * @param bytes - the number of bytes to append
 */
export declare const minimalScenarioStandardPlusBytes: (bytes: number) => WalletTemplateScenario;
/**
 * A scenario to pack a full transaction with the contract in question. The last
 * input is marked as the input under test as a convenient indicator of
 * input count.
 * @param using - the locking script type to use (P2SH20 is always more byte
 * efficient than P2SH32, so it's used for packed-transaction P2SH benchmarks)
 * @param repeatCount - the number of inputs across which to repeat the contract
 * under test
 */
export declare const packedTransactionScenario: (using: "p2s" | "p2sh20", repeatCount: number) => WalletTemplateScenario;
/**
 * A scenario for the minimal-possible nonstandard transaction: equivalent to {@link minimalScenarioStandard}, but saves one final byte by omitting the `OP_RETURN` (making this transaction fail standard dust limit validation).
 */
export declare const minimalScenarioNonStandard: WalletTemplateScenario;
//# sourceMappingURL=bch-vmb-test-mixins.d.ts.map