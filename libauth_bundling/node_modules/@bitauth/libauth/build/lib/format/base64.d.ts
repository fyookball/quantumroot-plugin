/**
 * For use before {@link base64ToBin}. Returns true if the provided string is
 * valid base64 (length is divisible by 4, only uses base64 characters).
 * @param maybeBase64 - a string to test
 */
export declare const isBase64: (maybeBase64: string) => boolean;
/**
 * Convert a base64-encoded string to a Uint8Array.
 *
 * Note, this method always completes. If `validBase64` is not valid base64, an
 * incorrect result will be returned. If `validBase64` is potentially malformed,
 * check it with {@link isBase64} before calling this method.
 *
 * For the reverse, see {@link binToBase64}.
 *
 * @param validBase64 - a valid base64-encoded string to decode
 */
export declare const base64ToBin: (validBase64: string) => Uint8Array;
/**
 * Convert a Uint8Array to a base64-encoded string.
 *
 * For the reverse, see {@link base64ToBin}.
 *
 * @param bytes - the Uint8Array to base64 encode
 */
export declare const binToBase64: (bytes: Uint8Array) => string;
//# sourceMappingURL=base64.d.ts.map