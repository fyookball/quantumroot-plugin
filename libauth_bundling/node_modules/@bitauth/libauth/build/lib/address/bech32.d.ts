/**
 * The list of 32 symbols used in Bech32 encoding.
 */
export declare const bech32CharacterSet = "qpzry9x8gf2tvdw0s3jn54khce6mua7l";
/**
 * An object mapping each of the 32 symbols used in Bech32 encoding to their respective index in the character set.
 */
export declare const bech32CharacterSetIndex: {
    readonly q: 0;
    readonly p: 1;
    readonly z: 2;
    readonly r: 3;
    readonly y: 4;
    readonly '9': 5;
    readonly x: 6;
    readonly '8': 7;
    readonly g: 8;
    readonly f: 9;
    readonly '2': 10;
    readonly t: 11;
    readonly v: 12;
    readonly d: 13;
    readonly w: 14;
    readonly '0': 15;
    readonly s: 16;
    readonly '3': 17;
    readonly j: 18;
    readonly n: 19;
    readonly '5': 20;
    readonly '4': 21;
    readonly k: 22;
    readonly h: 23;
    readonly c: 24;
    readonly e: 25;
    readonly '6': 26;
    readonly m: 27;
    readonly u: 28;
    readonly a: 29;
    readonly '7': 30;
    readonly l: 31;
};
export declare enum BitRegroupingError {
    integerOutOfRange = "An integer provided in the source array is out of the range of the specified source word length.",
    hasDisallowedPadding = "Encountered padding when padding was disallowed.",
    requiresDisallowedPadding = "Encoding requires padding while padding is disallowed."
}
/**
 * Given an array of integers, regroup bits from `sourceWordLength` to
 * `resultWordLength`, returning a new array of integers between 0 and
 * toWordLength^2.
 *
 * Note, if `bin` is within the range of `sourceWordLength` and `padding` is
 * `true`, this method will never error.
 *
 * A.K.A. `convertbits`
 */
export declare const regroupBits: ({ bin, sourceWordLength, resultWordLength, allowPadding, }: {
    /**
     * An array of numbers representing the bits to regroup. Each item must be a
     * number within the range of `sourceWordLength`.
     */
    bin: number[] | Uint8Array;
    /**
     * The bit-length of each number in `bin`, e.g. to regroup bits from a
     * `Uint8Array`, use `8` (must be a positive integer)
     */
    sourceWordLength: number;
    /**
     * The bit-length of each number in the desired result array, e.g. to regroup
     * bits into 4-bit numbers, use `4` (must be a positive integer)
     */
    resultWordLength: number;
    /**
     * Whether to allow the use of padding for `bin` values where the provided
     * number of bits cannot be directly mapped to an equivalent result array
     * (remaining bits are filled with `0`), defaults to `true`
     */
    allowPadding?: boolean;
}) => number[] | BitRegroupingError;
/**
 * Encode an array of numbers as a base32 string using the Bech32 character set.
 *
 * Note, this method always completes. For a valid result, all items in
 * `base32IntegerArray` must be between `0` and `32`. To prepare another array
 * type for encoding, see {@link regroupBits}.
 *
 * For the reverse, see {@link decodeBech32}.
 *
 * @param base32IntegerArray - the array of 5-bit integers to encode
 */
export declare const encodeBech32: (base32IntegerArray: number[]) => string;
/**
 * Decode a Bech32-encoded string into an array of 5-bit integers.
 *
 * Note, this method always completes. If `validBech32` is not valid bech32,
 * an incorrect result will be returned. If `validBech32` is potentially
 * malformed, check it with {@link isBech32CharacterSet} before calling
 * this method.
 *
 * For the reverse, see {@link encodeBech32}.
 *
 * @param validBech32 - the bech32-encoded string to decode
 */
export declare const decodeBech32: (validBech32: string) => (0 | 1 | 4 | 2 | 3 | 15 | 6 | 16 | 8 | 9 | 5 | 28 | 20 | 7 | 10 | 11 | 12 | 13 | 14 | 17 | 18 | 19 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 29 | 30 | 31)[];
/**
 * Validate that a string uses only characters from the bech32 character set.
 *
 * @param maybeBech32 - a string to test for valid Bech32 encoding
 */
export declare const isBech32CharacterSet: (maybeBech32: string) => boolean;
/**
 * Returns an array of the non-Bech32 characters in the provided string; if all
 * characters are valid, an empty array is returned.
 * @param maybeBech32 - the string to test
 */
export declare const extractNonBech32Characters: (maybeBech32: string) => string[];
export declare enum Bech32DecodingError {
    notBech32CharacterSet = "Bech32 decoding error: input contains characters outside of the Bech32 character set."
}
/**
 * Convert a padded bech32-encoded string (without checksum) to a Uint8Array,
 * removing the padding. If the string is not valid Bech32, or if the array of
 * 5-bit integers would require padding to be regrouped into 8-bit bytes, this
 * method returns an error message.
 *
 * For the reverse, see {@link binToBech32Padded}.
 *
 * @param bech32Padded - the padded bech32-encoded string to decode
 */
export declare const bech32PaddedToBin: (bech32Padded: string) => Uint8Array | BitRegroupingError | Bech32DecodingError.notBech32CharacterSet;
/**
 * Convert a Uint8Array to a padded bech32-encoded string (without a checksum),
 * adding padding bits as necessary to convert all bytes to 5-bit integers.
 *
 * For the reverse, see {@link bech32PaddedToBin}.
 *
 * @param bytes - the Uint8Array to bech32 encode
 */
export declare const binToBech32Padded: (bytes: Uint8Array) => string;
//# sourceMappingURL=bech32.d.ts.map