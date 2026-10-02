import type { WalletTemplate, WalletTemplateScenario } from '../lib.js';
/**
 * These are the VM versions for which tests are currently generated.
 *
 * A new 4-digit year should be added to prepare for each annual upgrade in
 * which the VM is modified.
 *
 * Libauth can also support testing of draft proposals by specifying a short
 * identifier for each independent proposal beginning with the prefix `chip_`.
 */
declare const vmVersionsBch: readonly ["2023", "2025", "2026", "spec", "chip_eval", "chip_bitwise", "chip_functions", "chip_loops", "chip_p2s", "chip_pow", "chip_txv5", "unknown", "skip"];
/**
 * These are the VM "modes" for which tests can be generated.
 */
declare const vmModes: readonly ["p2s", "p2sh", "p2sh20", "p2sh32"];
type TestSetType = 'invalid' | 'nonstandard' | 'standard';
type TestSetOverrideType = TestSetType | 'ignore';
type VmVersionBch = (typeof vmVersionsBch)[number];
type VmMode = (typeof vmModes)[number];
type TestSetOverrideLabelBch = 'default' | `${TestSetOverrideType}` | `${VmMode}_${TestSetOverrideType}` | `${VmMode}` | `${VmVersionBch}_${TestSetOverrideType}` | `${VmVersionBch}_${VmMode}_${TestSetOverrideType}` | `${VmVersionBch}`;
export type TestSetIdBch = `${VmVersionBch}_${TestSetType}`;
export type VmbTestMasterBch = [
    shortId: string,
    testDescription: string,
    unlockingScriptAsm: string,
    redeemOrLockingScriptAsm: string,
    testTransactionHex: string,
    sourceOutputsHex: string,
    testSets: TestSetIdBch[],
    /**
     * This isn't required for testing (implementations should always validate the
     * full test transaction), but it can allow downstream applications to
     * identify which source output/transaction input index is the focus of each
     * test. This is sometimes useful for debugging or for VM documentation
     * projects that extract usage examples from vmb tests.
     *
     * This field is left undefined for `inputIndex`s of `0` (the default).
     */
    inputIndex?: number
];
export type VmbTest = [
    shortId: string,
    testDescription: string,
    unlockingScriptAsm: string,
    redeemOrLockingScriptAsm: string,
    testTransactionHex: string,
    sourceOutputsHex: string,
    inputIndex?: number
];
/**
 * Not used currently, but these are the defaults that inform
 * {@link supportedTestSetOverridesBch}.
 */
export declare const vmbTestDefinitionDefaultBehaviorBch: TestSetOverrideLabelBch[];
/**
 * TODO: deterministically produce a `generatedTestSetOverrideListBch` (just a simple exhaustive solver) in tests from `supportedTestSetPlansBch`, compare against `testSetOverrideListBch` and fail if they're not deeply equal. Then produce `generatedSupportedTestSetPlansBch` from `supportedTestSetOverridesBch`, compare against `supportedTestSetPlansBch` and fail if they're not deeply equal.
 *
 * Each top-level key maps to the deepest child key, the boolean value is just
 * an easy way to enable/disable a path. Goal of representing in a tree is to
 * use eslint's `sort-key` enforcement to enforce a deterministic ordering and
 * prevent duplicates.
 *
 * Solver:
 *  - Count the difference between the base sets and requested, e.g.:
 *     - Base set is: `2023_p2s_nonstandard,2023_p2sh20_standard,2023_p2sh32_standard,2025_p2s_nonstandard,2025_p2sh20_standard,2025_p2sh32_standard,p2s_nonstandard,2026_p2sh20_standard,2026_p2sh32_standard`
 *     - Requested: `2023_p2s_invalid,2023_p2sh20_invalid,2023_p2sh32_invalid,2025_p2s_nonstandard,2025_p2sh20_standard,2025_p2sh32_standard`
 *     - Differences are: `2023_p2s_invalid,2023_p2sh20_invalid,2023_p2sh32_invalid`.
 *     - Removals are: `p2s_nonstandard,2026_p2sh20_standard,2026_p2sh32_standard`
 *  - For each entry in `setModifiers`, count the differences after application. Take the first entry of those which minimize the differences. Repeat until no differences.
 *  - For each entry in `setReducers`, count missing removals after application. Take the first entry of those which maximize the matching removals. Repeat until sets are equal.
 */
/**
 * The list of test set overrides currently supported. We could implement
 * support for any combination of {@link TestSetOverrideLabelBch}s, but this
 * implementation improves consistency and clarity across test files.
 *
 * Test sets for a particular test definition are found by `join`ing this list
 * and looking up the result in {@link supportedTestSetOverridesBch}.
 */
declare const testSetOverrideListBch: readonly [readonly ["2023_invalid"], readonly ["2023_invalid", "2025_invalid"], readonly ["2023_invalid", "2025_p2sh_nonstandard"], readonly ["2023_invalid", "p2s_ignore"], readonly ["2023_invalid", "p2s_ignore", "p2sh20_ignore"], readonly ["2023_invalid", "p2s_ignore", "p2sh32_ignore"], readonly ["2023_invalid", "p2sh_ignore"], readonly ["2023_p2sh_invalid"], readonly ["2023_p2sh_nonstandard", "2025_p2sh_nonstandard"], readonly ["2025_invalid"], readonly ["chip_bitwise"], readonly ["chip_bitwise", "p2s_invalid"], readonly ["chip_bitwise", "p2s_nonstandard"], readonly ["chip_bitwise", "p2sh_ignore"], readonly ["chip_bitwise_invalid"], readonly ["chip_bitwise_invalid", "p2sh_ignore"], readonly ["chip_eval"], readonly ["chip_eval", "p2s_nonstandard"], readonly ["chip_eval", "p2sh_ignore"], readonly ["chip_eval_invalid"], readonly ["chip_eval_invalid", "p2sh_ignore"], readonly ["chip_functions"], readonly ["chip_functions", "p2sh_invalid"], readonly ["chip_functions_invalid"], readonly ["chip_functions_invalid", "p2sh_ignore"], readonly ["chip_loops_invalid"], readonly ["chip_loops_invalid", "p2sh_ignore"], readonly ["chip_loops"], readonly ["chip_p2s"], readonly ["chip_p2s", "p2sh_ignore"], readonly ["chip_p2s_invalid"], readonly ["chip_pow"], readonly ["chip_pow_invalid"], readonly ["invalid", "2023_nonstandard"], readonly ["invalid", "2023_nonstandard", "p2sh_ignore"], readonly ["invalid", "p2s_ignore"], readonly ["invalid", "p2s_nonstandard"], readonly ["invalid", "p2sh_ignore", "2023_p2s_nonstandard"], readonly ["invalid", "p2sh_ignore"], readonly ["invalid", "p2sh20_standard"], readonly ["invalid", "p2sh32_standard"], readonly ["invalid", "spec_standard"], readonly ["invalid"], readonly ["nonstandard"], readonly ["nonstandard", "2023_invalid"], readonly ["nonstandard", "2023_invalid", "p2sh_ignore"], readonly ["nonstandard", "2023_p2sh_standard", "p2s_ignore"], readonly ["nonstandard", "p2sh_ignore"], readonly ["nonstandard", "p2sh_invalid", "2023_invalid"], readonly ["p2s_ignore"], readonly ["p2s_invalid"], readonly ["p2s_invalid", "2023_p2s_nonstandard", "2023_p2sh_invalid"], readonly ["p2s_invalid", "2023_p2s_nonstandard"], readonly ["p2s_invalid", "2023_invalid"], readonly ["p2s_invalid", "2023_invalid", "2025_p2sh_nonstandard"], readonly ["p2s_nonstandard"], readonly ["p2s_nonstandard", "2023_invalid"], readonly ["p2s_nonstandard", "2023_invalid", "2025_p2sh_nonstandard"], readonly ["p2s_nonstandard", "2023_invalid", "p2sh_ignore"], readonly ["p2s_nonstandard", "2023_p2sh_invalid"], readonly ["p2s_nonstandard", "p2sh_ignore"], readonly ["p2s_nonstandard", "p2sh_invalid"], readonly ["p2s_nonstandard", "p2sh_invalid", "2023_invalid"], readonly ["p2s_standard"], readonly ["p2s_standard", "p2sh_ignore"], readonly ["p2s_standard", "spec_standard", "p2sh_ignore"], readonly ["p2sh32_nonstandard"], readonly ["p2sh_ignore"], readonly ["p2sh_invalid"], readonly ["p2sh_invalid", "2023_invalid"], readonly ["p2sh_nonstandard"], readonly ["p2sh_nonstandard", "p2s_invalid", "2023_invalid"], readonly ["skip"], readonly ["spec"], readonly ["unknown"], readonly []];
type TestSetOverrideListBch = (typeof testSetOverrideListBch)[number];
type TestPlan = {
    mode: 'P2S' | 'P2SH20' | 'P2SH32';
    sets: Readonly<TestSetIdBch[]>;
}[];
/**
 * Given one of these values and the
 * {@link vmbTestDefinitionDefaultBehaviorBch}, return these test plans.
 */
export declare const supportedTestSetOverridesBch: {
    [joinedList: string]: TestPlan;
};
export type VmbTestDefinition = [
    /**
     * This script (defined using CashAssembly) is compiled to `unlockingBytecode`
     * in the test transaction(s) produced by this test definition.
     */
    unlockingScript: string,
    /**
     * This script (defined using CashAssembly) is compiled to the
     * `redeemBytecode` and/or `lockingBytecode` to be satisfied by
     * `unlockingScript`.
     *
     * By default, each test definitions generates two tests, one test uses this
     * value as a simple `lockingBytecode`, the other test encodes this value as
     * the `redeemBytecode` of a P2SH20 UTXO (properly appending it to
     * `unlockingBytecode` in the test transaction).
     *
     * For `standard` test definitions, the P2SH evaluation is tested in standard
     * mode and the non-P2SH evaluation is tested in non-standard mode (marked as
     * only a `valid` test). For `valid` test definitions, both tests are marked
     * as `valid`.
     */
    redeemOrLockingScript: string,
    testDescription: string,
    testSetOverrideLabels?: TestSetOverrideListBch,
    /**
     * A scenario that extends the default scenario for use with this test.
     */
    scenario?: WalletTemplateScenario,
    /**
     * An additional mapping of scripts to make available during scenario
     * generation.
     */
    additionalScripts?: WalletTemplate['scripts']
];
export type VmbTestDefinitionGroup = [
    groupDescription: string,
    tests: VmbTestDefinition[]
];
/**
 * Given a VMB test definition, generate a full VMB test vector. Note, this
 * method throws immediately on the first test vector generation failure.
 */
export declare const vmbTestDefinitionToVmbTests: (testDefinition: VmbTestDefinition, groupName?: string, shortIdLength?: number) => VmbTestMasterBch[];
export declare const vmbTestGroupToVmbTests: (testGroup: VmbTestDefinitionGroup) => VmbTestMasterBch[][];
/**
 * Partition a master test list (produced by {@link vmbTestGroupToVmbTests} or
 * {@link vmbTestDefinitionToVmbTests}) into sets. E.g.:
 * ```ts
 * const definitions: VmbTestDefinitionGroup[] = [...]
 * const master = [
 *   vmbTestDefinitionToVmbTests(...),
 *   vmbTestDefinitionToVmbTests(...),
 * ];
 * const partitioned = vmbTestPartitionMasterTestList(master);
 * ```
 * Or:
 * ```ts
 * const definitions: VmbTestDefinitionGroup[] = [...]
 * const master = definitions.map(vmbTestGroupToVmbTests).flat(2);
 * const partitioned = vmbTestPartitionMasterTestList(master);
 * ```
 * Tests are aggregated by set into a map of test sets (e.g. to export to
 * separate files).
 */
export declare const vmbTestPartitionMasterTestList: (masterTestList: VmbTestMasterBch[]) => {
    unknown_standard?: VmbTest[] | undefined;
    unknown_invalid?: VmbTest[] | undefined;
    unknown_nonstandard?: VmbTest[] | undefined;
    skip_standard?: VmbTest[] | undefined;
    skip_invalid?: VmbTest[] | undefined;
    skip_nonstandard?: VmbTest[] | undefined;
    "2023_standard"?: VmbTest[] | undefined;
    "2023_invalid"?: VmbTest[] | undefined;
    "2023_nonstandard"?: VmbTest[] | undefined;
    "2025_standard"?: VmbTest[] | undefined;
    "2025_invalid"?: VmbTest[] | undefined;
    "2025_nonstandard"?: VmbTest[] | undefined;
    "2026_standard"?: VmbTest[] | undefined;
    "2026_invalid"?: VmbTest[] | undefined;
    "2026_nonstandard"?: VmbTest[] | undefined;
    spec_standard?: VmbTest[] | undefined;
    spec_invalid?: VmbTest[] | undefined;
    spec_nonstandard?: VmbTest[] | undefined;
    chip_eval_standard?: VmbTest[] | undefined;
    chip_eval_invalid?: VmbTest[] | undefined;
    chip_eval_nonstandard?: VmbTest[] | undefined;
    chip_bitwise_standard?: VmbTest[] | undefined;
    chip_bitwise_invalid?: VmbTest[] | undefined;
    chip_bitwise_nonstandard?: VmbTest[] | undefined;
    chip_functions_standard?: VmbTest[] | undefined;
    chip_functions_invalid?: VmbTest[] | undefined;
    chip_functions_nonstandard?: VmbTest[] | undefined;
    chip_loops_standard?: VmbTest[] | undefined;
    chip_loops_invalid?: VmbTest[] | undefined;
    chip_loops_nonstandard?: VmbTest[] | undefined;
    chip_p2s_standard?: VmbTest[] | undefined;
    chip_p2s_invalid?: VmbTest[] | undefined;
    chip_p2s_nonstandard?: VmbTest[] | undefined;
    chip_pow_standard?: VmbTest[] | undefined;
    chip_pow_invalid?: VmbTest[] | undefined;
    chip_pow_nonstandard?: VmbTest[] | undefined;
    chip_txv5_standard?: VmbTest[] | undefined;
    chip_txv5_invalid?: VmbTest[] | undefined;
    chip_txv5_nonstandard?: VmbTest[] | undefined;
};
export type PossibleTestValue = [description: string, value: string];
export type TestValues = PossibleTestValue[];
/**
 * Given an array of arrays, produce an array of all possible combinations.
 * E.g.: `[['a', 'b'], [1, 2], ['x']]` produces:
 * `[ [ 'a', 1, 'x' ], [ 'a', 2, 'x' ], [ 'b', 1, 'x' ], [ 'b', 2, 'x' ] ]`.
 * @param arrays - an array of arrays
 */
export declare const generateCombinations: <T>(arrays: T[][]) => T[][];
/**
 * Map an array of value arrays onto a a template test case.
 * @param templates - templates for unlockingScript, lockingScript, and
 * test description.
 * @param possibleValues - an array of arrays of `PossibleValue`s
 */
export declare const mapTestCases: (templates: [unlockingScript: string, lockingScript: string, description: string], combinations: TestValues[], { additionalScripts, prefixAsHexLiterals, scenario, }?: {
    additionalScripts?: WalletTemplate["scripts"];
    prefixAsHexLiterals?: boolean;
    scenario?: WalletTemplateScenario;
}) => VmbTestDefinition[];
/**
 * Given a template test case and an array of possible-value arrays, produce a
 * combinatorial set of test cases.
 * @param templates - templates for unlockingScript, lockingScript, and
 * test description.
 * @param possibleValues - an array of arrays of `PossibleValue`s
 */
export declare const generateTestCases: (templates: [unlockingScript: string, lockingScript: string, description: string], possibleValues: PossibleTestValue[][], { additionalScripts, scenario, }?: {
    additionalScripts?: WalletTemplate["scripts"];
    scenario?: WalletTemplateScenario;
}) => VmbTestDefinition[];
type TestSetOverrideListBchIndex = 3;
/**
 * Given a generated set of tests, set expected results using a dictionary of
 * descriptions.
 *
 * To make updating tests easier, the test definitions include tests that aren't
 * included in the dictionary, this function logs the new dictionary and throws
 * (to exit early).
 *
 * To exclude a particular case from the resulting set, mark it as `['skip']`,
 * (e.g. if that particular test is already manually defined elsewhere.)
 */
export declare const setExpectedResults: (generatedDefinitions: VmbTestDefinition[], resultDictionary: {
    [description: string]: VmbTestDefinition[TestSetOverrideListBchIndex] | ["skip"];
}, macroEdit?: (description: string, currentSets: VmbTestDefinition[TestSetOverrideListBchIndex]) => VmbTestDefinition[TestSetOverrideListBchIndex]) => VmbTestDefinition[];
export {};
//# sourceMappingURL=bch-vmb-test-utils.d.ts.map