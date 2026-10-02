import { type PossibleTestValue, type TestValues } from '../lib.js';
export declare const positiveZeros: PossibleTestValue[];
export declare const zeros: PossibleTestValue[];
export declare const giantZeros: PossibleTestValue[];
export declare const allZeros: PossibleTestValue[];
export declare const ones: PossibleTestValue[];
export declare const giantOnes: PossibleTestValue[];
export declare const smallZerosAndOnes: PossibleTestValue[];
export declare const zerosAndOnes: PossibleTestValue[];
export declare const justZeroAndOne: PossibleTestValue[];
export declare const unaryOpcodes: PossibleTestValue[];
export declare const binaryOpcodes: PossibleTestValue[];
export declare const ternaryOpcodes: PossibleTestValue[];
/**
 * Excludes `10000` because a 10,000 byte number can't be pushed directly given the maximum bytecode length of 10,000. Other tests instead construct a 10,000 byte item on the stack.
 */
export declare const bigintNumberLengths: number[];
export declare const generateBenchmarkNumbers: (fill: [fillDescription: string, fillHex: string], setHighBit?: boolean) => PossibleTestValue[];
export declare const benchmarkNumberPossibilities: {
    allBits: PossibleTestValue[];
    alternatingBits: PossibleTestValue[];
    highestBit: PossibleTestValue[];
    oneBitPerByte: PossibleTestValue[];
};
export declare const benchmarkNumberPossibilitiesAll: PossibleTestValue[][];
export declare const appendNumericResult: (testValues: TestValues[], operation: (...args: bigint[]) => bigint, expectedLength: number) => TestValues[];
export declare const appendUnaryNumericResult: (testValues: TestValues[], operation: (value: bigint) => bigint) => TestValues[];
export declare const appendBinaryNumericResult: (testValues: TestValues[], operation: (value1: bigint, value2: bigint) => bigint) => TestValues[];
export declare const appendTernaryNumericResult: (testValues: TestValues[], operation: (value1: bigint, value2: bigint, value3: bigint) => bigint) => TestValues[];
export declare const add1Tests: TestValues[];
export declare const sub1Tests: TestValues[];
export declare const negateTests: TestValues[];
export declare const absTests: TestValues[];
export declare const notTests: TestValues[];
export declare const zeroNotEqualTests: TestValues[];
/**
 * To reduce the size of the resulting test sets, we only generate combinations from each size of like-filled numbers.
 */
export declare const numberCombinationsAllBits: PossibleTestValue[][];
export declare const numberCombinationsAlternatingBits: PossibleTestValue[][];
export declare const numberCombinationsHighestBit: PossibleTestValue[][];
export declare const numberCombinationsOneBitPerByte: PossibleTestValue[][];
export declare const allBinaryNumberCombinations: PossibleTestValue[][];
export declare const allTernaryNumberCombinations: PossibleTestValue[][];
export declare const addTests: TestValues[];
export declare const subTests: TestValues[];
export declare const boolAndTests: TestValues[];
export declare const boolOrTests: TestValues[];
export declare const numEqualTests: TestValues[];
export declare const numNotEqualTests: TestValues[];
export declare const lessThanTests: TestValues[];
export declare const greaterThanTests: TestValues[];
export declare const lessThanOrEqualTests: TestValues[];
export declare const greaterThanOrEqualTests: TestValues[];
export declare const minTests: TestValues[];
export declare const maxTests: TestValues[];
export declare const withinTests: TestValues[];
export declare const mulTests: TestValues[];
export declare const divTests: TestValues[];
export declare const modTests: TestValues[];
//# sourceMappingURL=bch-vmb-test-mixins.bigint.d.ts.map