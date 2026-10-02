/**
 * Interpret a string as UTF-8 and encode it as a Uint8Array.
 *
 * For the reverse, see {@link binToUtf8}.
 *
 * @param utf8 - the string to encode
 */
export declare const utf8ToBin: (utf8: string) => Uint8Array;
/**
 * Decode a Uint8Array as a UTF-8 string.
 *
 * For the reverse, see {@link utf8ToBin}.
 *
 * @param bytes - the Uint8Array to decode
 */
export declare const binToUtf8: (bytes: Uint8Array) => string;
/**
 * Normalize a string using Unicode Normalization Form KC (NFKC): compatibility
 * decomposition, followed by canonical composition. NFKC is the preferred form
 * for applications in which disambiguation between characters is critical. In
 * Libauth, all message formats designed for transmission between trust centers
 * are NFKC-normalized to hinder exploits in which lookalike characters are used
 * to deceive counterparties.
 *
 * E.g.:
 * ```
 * console.log(lossyNormalize('ﬁt🚀👫👨‍👩‍👧‍👦')); // 'fit🚀👫👨‍👩‍👧‍👦'
 * ```
 */
export declare const lossyNormalize: (utf8: string) => string;
/**
 * Return the user-perceived character segments of the given string, e.g.:
 *
 * ```js
 * const test = 'ﬁt🚀👫👨‍👩‍👧‍👦';
 * console.log([...test]); // '["ﬁ","t","🚀","👫","👨","‍","👩","‍","👧","‍","👦"]'
 * console.log(segment(test)); // '["ﬁ","t","🚀","👫","👨‍👩‍👧‍👦"]'
 * ```
 *
 * Note, this utility segments the string into grapheme clusters using
 * `Intl.Segmenter`, a TC39 proposal which reached stage 4 in 2022, and may not
 * be supported in older environments.
 *
 * @param utf8 - the string for which to segment characters.
 */
export declare const segment: (utf8: string) => string[];
/**
 * Return the user-perceived character length of the given string, e.g.:
 *
 * ```js
 * const test = 'ﬁt🚀👫👨‍👩‍👧‍👦'
 * console.log(test.length); // 17
 * console.log(length(test)); // 5
 * ```
 *
 * Note, this utility segments the string into grapheme clusters using
 * `Intl.Segmenter`, a TC39 proposal which reached stage 4 in 2022, and may not
 * be supported in older environments.
 *
 * @param utf8 - the string for which to count the character length.
 */
export declare const length: (utf8: string) => number;
//# sourceMappingURL=utf8.d.ts.map