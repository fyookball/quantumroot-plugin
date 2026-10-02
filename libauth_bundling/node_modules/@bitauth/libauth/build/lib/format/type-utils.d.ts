/**
 * An implementation of the built-in `Partial` utility that allows explicit
 * `undefined` values when
 * [exactOptionalPropertyTypes](https://www.typescriptlang.org/tsconfig#exactOptionalPropertyTypes)
 * is enabled.
 */
export type PartialExactOptional<T> = {
    [P in keyof T]?: T[P] | undefined;
};
type FunctionComparisonEqualsWrapped<T> = T extends (T extends Readonly<{}> ? infer R & Readonly<{}> : infer R) ? {
    [P in keyof R]: R[P];
} : never;
type FunctionComparisonEquals<A, B> = (<T>() => T extends FunctionComparisonEqualsWrapped<A> ? 1 : 2) extends <T>() => T extends FunctionComparisonEqualsWrapped<B> ? 1 : 2 ? true : false;
type IsAny<T> = FunctionComparisonEquals<T, any>;
type InvariantComparisonEqualsWrapped<T> = {
    value: T;
    setValue: (value: T) => never;
};
type InvariantComparisonEquals<Expected, Actual> = InvariantComparisonEqualsWrapped<Expected> extends InvariantComparisonEqualsWrapped<Actual> ? IsAny<Actual | Expected> extends true ? IsAny<Actual> | IsAny<Expected> extends true ? true : false : true : false;
type Equals<Expected, Actual> = InvariantComparisonEquals<Expected, Actual> extends true ? FunctionComparisonEquals<Expected, Actual> : false;
export type AssertTypesEqual<T1, T2> = Equals<T1, T2> extends true ? true : never;
export {};
//# sourceMappingURL=type-utils.d.ts.map