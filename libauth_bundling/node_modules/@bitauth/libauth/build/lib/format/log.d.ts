/**
 * A safe method to `JSON.stringify` a value, useful for debugging and logging
 * purposes.
 *
 * @remarks
 * Without modifications, `JSON.stringify` has several shortcomings in
 * debugging and logging usage:
 * - throws when serializing anything containing a `bigint`
 * - `Uint8Array`s are often encoded in base 10 with newlines between each
 *   index item
 * - `functions` and `symbols` are not clearly marked
 *
 * This method is more helpful in these cases:
 * - `bigint`: `0n` → `<bigint: 0n>`
 * - `Uint8Array`: `Uint8Array.of(0,0)` → `<Uint8Array: 0x0000>`
 * - `function`: `(x) => x * 2` → `<function: (x) => x * 2>`
 * - `symbol`: `Symbol(A)` → `<symbol: Symbol(A)>`
 *
 * @param value - the data to stringify
 * @param spacing - the number of spaces to use in
 */
export declare const stringify: (value: any, spacing?: number) => string;
/**
 * Given a value, recursively sort the keys of all objects it references
 * (without sorting arrays).
 *
 * @param objectOrArray - the object or array in which to sort object keys
 */
export declare const sortObjectKeys: (objectOrArray: unknown) => any;
/**
 * An alternative to {@link stringify} that produces valid JavaScript for use
 * as a test vector in this library. `Uint8Array`s are constructed using
 * {@link hexToBin} and `bigint` values use the `BigInt` constructor. If
 * `alphabetize` is `true`, all objects will be sorted in the output.
 *
 * Note, this assumes all strings that match the expected regular expressions
 * are values of type `Uint8Array` and `bigint` respectively. String values
 * that otherwise happen to match these regular expressions will be converted
 * incorrectly.
 *
 * @param value - the value to stringify
 * @param alphabetize - whether or not to alphabetize object keys, defaults
 * to true
 */
export declare const stringifyTestVector: (value: any, alphabetize?: boolean) => string;
/**
 * Elide words and hex strings in the given `text` at `maxLength`. Max length
 * defaults to `148`, the maximum hex-encoded length (with `0x` prefix) of most
 * ECDSA signatures.
 *
 * Hex strings include a count of total bytes, e.g.
 * `0x01 … (512 total bytes) … 10101`. (Note that the surrounding spacing
 * decreases the incidences of line breaks within the message.)
 *
 * @param text - the text to process
 * @param maxLength - the maximum length of each word in the resulting text
 * @returns
 */
export declare const elideWordsAndHexAtLength: (text: string, maxLength?: number) => string;
//# sourceMappingURL=log.d.ts.map