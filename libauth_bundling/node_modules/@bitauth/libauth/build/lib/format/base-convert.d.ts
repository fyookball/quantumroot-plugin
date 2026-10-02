export declare enum BaseConverterCreationError {
    tooLong = "Base converter creation error: an alphabet may be no longer than 254 characters.",
    ambiguousCharacter = "Base converter creation error: a character code may only appear once in a single alphabet."
}
export declare enum BaseConversionError {
    unknownCharacter = "Base conversion error: encountered an unknown character for this alphabet."
}
export type BaseConverter = {
    decode: (source: string) => Uint8Array | string;
    encode: (input: Uint8Array) => string;
};
/**
 * Create a {@link BaseConverter}, exposing methods for encoding and decoding
 * `Uint8Array`s using bitcoin-style padding: each leading zero in the input is
 * replaced with the zero-index character of the `alphabet`, then the remainder
 * of the input is encoded as a large number in the specified alphabet.
 *
 * For example, using the alphabet `01`, the input `[0, 15]` is encoded `01111`
 * – a single `0` represents the leading padding, followed by the base2 encoded
 * `0x1111` (15). With the same alphabet, the input `[0, 0, 255]` is encoded
 * `0011111111` - only two `0` characters are required to represent both
 * leading zeros, followed by the base2 encoded `0x11111111` (255).
 *
 * **This is not compatible with `RFC 3548`'s `Base16`, `Base32`, or `Base64`.**
 *
 * If the alphabet is malformed, this method returns the error as a `string`.
 *
 * @param alphabet - an ordered string that maps each index to a character,
 * e.g. `0123456789`.
 */
export declare const createBaseConverter: (alphabet: string) => BaseConverter | string;
export declare const bitcoinBase58Alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
/**
 * Convert a bitcoin-style base58-encoded string to a Uint8Array.
 *
 * For the reverse, see {@link binToBase58}.
 *
 * See {@link createBaseConverter} for format details.
 * @param input - a valid base58-encoded string to decode
 */
export declare const base58ToBin: (source: string) => Uint8Array | string;
/**
 * Convert a Uint8Array to a bitcoin-style base58-encoded string.
 *
 * For the reverse, see {@link base58ToBin}.
 *
 * See {@link createBaseConverter} for format details.
 * @param input - the Uint8Array to base58 encode
 */
export declare const binToBase58: (input: Uint8Array) => string;
//# sourceMappingURL=base-convert.d.ts.map