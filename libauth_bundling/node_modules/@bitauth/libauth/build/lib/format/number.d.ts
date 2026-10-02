import type { MaybeReadResult, ReadPosition } from '../lib.js';
/**
 * Encode a positive integer as a little-endian Uint8Array. For values exceeding
 * `Number.MAX_SAFE_INTEGER` (`9007199254740991`),
 * use {@link bigIntToBinUintLE}.
 *
 * Negative values will return the same result as `0`.
 *
 * For the reverse, see {@link binToNumberUintLE}.
 *
 * @param value - the number to encode
 */
export declare const numberToBinUintLE: (value: number) => Uint8Array;
/**
 * Fill a new Uint8Array of a specific byte-length with the contents of a given
 * Uint8Array, truncating or padding the Uint8Array with zeros.
 *
 * @param bin - the Uint8Array to resize
 * @param bytes - the desired byte-length
 */
export declare const binToFixedLength: (bin: Uint8Array, bytes: number) => Uint8Array;
/**
 * Encode a positive integer as a 2-byte Uint16LE Uint8Array, clamping the
 * results – values exceeding `0xffff` (`65535`) return the same result as
 * `0xffff`, negative values will return the same result as `0`.
 *
 * For an alternative overflow behavior, see {@link numberToBinUint16LE}.
 *
 * For the reverse, see {@link binToNumberUint16LE}.
 *
 * @param value - the number to encode
 */
export declare const numberToBinUint16LEClamped: (value: number) => Uint8Array;
/**
 * Encode a positive integer as a 4-byte Uint32LE Uint8Array, clamping the
 * results – values exceeding `0xffffffff` (`4294967295`) return the same result
 * as `0xffffffff`, negative values will return the same result as `0`.
 *
 * For an alternative overflow behavior, see {@link numberToBinUint32LE}.
 *
 * For the reverse, see {@link binToNumberUint32LE}.
 *
 * @param value - the number to encode
 */
export declare const numberToBinUint32LEClamped: (value: number) => Uint8Array;
/**
 * Encode a positive integer as a 2-byte Uint16LE Uint8Array.
 *
 * This method will return an incorrect result for values outside of the range
 * `0` to `0xffff` (`65535`). If applicable, applications should handle such
 * cases prior to calling this method.
 *
 * For an alternative overflow behavior, see {@link numberToBinUint16LEClamped}.
 *
 * For the reverse, see {@link binToNumberUint16LE}.
 *
 * @param value - the number to encode
 */
export declare const numberToBinUint16LE: (value: number) => Uint8Array;
/**
 * Encode an integer as a 2-byte Int16LE Uint8Array.
 *
 * This method will return an incorrect result for values outside of the range
 * `0x0000` to `0xffff` (`65535`). If applicable, applications should handle
 * such cases prior to calling this method.
 *
 * For the reverse, see {@link binToNumberInt16LE}.
 *
 * @param value - the number to encode
 */
export declare const numberToBinInt16LE: (value: number) => Uint8Array;
/**
 * Encode an integer as a 4-byte Uint32LE Uint8Array.
 *
 * This method will return an incorrect result for values outside of the range
 * `0x00000000` to `0xffffffff` (`4294967295`). If applicable, applications
 * should handle such cases prior to calling this method.
 *
 * For the reverse, see {@link binToNumberInt32LE}.
 *
 * @param value - the number to encode
 */
export declare const numberToBinInt32LE: (value: number) => Uint8Array;
/**
 * Decode a 2-byte Int16LE Uint8Array into a number.
 *
 * Throws if `bin` is shorter than 2 bytes.
 *
 * For the reverse, see {@link numberToBinInt16LE}.
 *
 * @param bin - the Uint8Array to decode
 */
export declare const binToNumberInt16LE: (bin: Uint8Array) => number;
/**
 * Decode a 4-byte Int32LE Uint8Array into a number.
 *
 * Throws if `bin` is shorter than 4 bytes.
 *
 * For the reverse, see {@link numberToBinInt32LE}.
 *
 * @param bin - the Uint8Array to decode
 */
export declare const binToNumberInt32LE: (bin: Uint8Array) => number;
/**
 * Encode a positive integer as a 2-byte Uint16LE Uint8Array.
 *
 * This method will return an incorrect result for values outside of the range
 * `0` to `0xffff` (`65535`). If applicable, applications should handle such
 * cases prior to calling this method.
 *
 * For the reverse, reverse the result of {@link binToNumberUint16LE}.
 *
 * @param value - the number to encode
 */
export declare const numberToBinUint16BE: (value: number) => Uint8Array;
/**
 * Encode a positive number as a 4-byte Uint32LE Uint8Array.
 *
 * This method will return an incorrect result for values outside of the range
 * `0` to `0xffffffff` (`4294967295`). If applicable, applications should handle
 * such cases prior to calling this method.
 *
 * For an alternative overflow behavior, see {@link numberToBinUint32LEClamped}.
 *
 * For the reverse, see {@link binToNumberUint32LE}.
 *
 * @param value - the number to encode
 */
export declare const numberToBinUint32LE: (value: number) => Uint8Array;
/**
 * Encode a positive number as a 4-byte Uint32BE Uint8Array.
 *
 * This method will return an incorrect result for values outside of the range
 * `0` to `0xffffffff` (`4294967295`). If applicable, applications should handle
 * such cases prior to calling this method.
 *
 * For the reverse, reverse the result of {@link binToNumberUint32LE}.
 *
 * @param value - the number to encode
 */
export declare const numberToBinUint32BE: (value: number) => Uint8Array;
/**
 * Encode a positive BigInt as little-endian Uint8Array. Negative values will
 * return the same result as `0`.
 *
 * For the reverse, see {@link binToBigIntUintLE}.
 *
 * @param value - the number to encode
 */
export declare const bigIntToBinUintLE: (value: bigint) => Uint8Array;
/**
 * Encode a positive BigInt as an 8-byte Uint64LE Uint8Array, clamping the
 * results – values exceeding `0xffff_ffff_ffff_ffff` (`18446744073709551615`)
 * return the same result as `0xffff_ffff_ffff_ffff`, negative values return the
 * same result as `0`.
 *
 * For an alternative overflow behavior, see {@link bigIntToBinUint64LE}.
 *
 * For the reverse, see {@link binToBigIntUint64LE}.
 *
 * @param value - the number to encode
 */
export declare const bigIntToBinUint64LEClamped: (value: bigint) => Uint8Array;
/**
 * Encode a positive BigInt as an 8-byte Uint64LE Uint8Array.
 *
 * This method will return an incorrect result for values outside of the range
 * `0` to `0xffff_ffff_ffff_ffff` (`18446744073709551615`).
 *
 * For an alternative overflow behavior, see {@link bigIntToBinUint64LEClamped}.
 *
 * For the reverse, see {@link binToBigIntUint64LE}.
 *
 * @param value - the number to encode
 */
export declare const bigIntToBinUint64LE: (value: bigint) => Uint8Array;
/**
 * Encode an integer as a 4-byte, little-endian Uint8Array using the number's
 * two's compliment representation (the format used by JavaScript's bitwise
 * operators).
 *
 * @remarks
 * The C++ bitcoin implementations sometimes represent short vectors using
 * signed 32-bit integers (e.g. `sighashType`). This method can be used to test
 * compatibility with those implementations.
 *
 * @param value - the number to encode
 */
export declare const numberToBinInt32TwosCompliment: (value: number) => Uint8Array;
/**
 * Decode a little-endian Uint8Array of any length into a number. For numbers
 * larger than `Number.MAX_SAFE_INTEGER` (`9007199254740991`), use
 * `binToBigIntUintLE`.
 *
 * The `bytes` parameter can be set to constrain the expected length (default:
 * `bin.length`). This method throws if `bin.length` is not equal to `bytes`.
 *
 * For the reverse, see {@link numberToBinUintLE}.
 *
 * @privateRemarks
 * We avoid a bitwise strategy here because JavaScript uses 32-bit signed
 * integers for bitwise math, so larger numbers are converted incorrectly. E.g.
 * `2147483648 << 8` is `0`, while `2147483648n << 8n` is `549755813888n`.
 *
 * @param bin - the Uint8Array to decode
 * @param bytes - the number of bytes to read (default: `bin.length`)
 */
export declare const binToNumberUintLE: (bin: Uint8Array, bytes?: number) => number;
/**
 * Decode a 2-byte Uint16LE Uint8Array into a number.
 *
 * Throws if `bin` is shorter than 2 bytes.
 *
 * For the reverse, see {@link numberToBinUint16LE}.
 *
 * @param bin - the Uint8Array to decode
 */
export declare const binToNumberUint16LE: (bin: Uint8Array) => number;
/**
 * Decode a 4-byte Uint32LE Uint8Array into a number.
 *
 * Throws if `bin` is shorter than 4 bytes.
 *
 * For the reverse, see {@link numberToBinUint32LE}.
 *
 * @param bin - the Uint8Array to decode
 */
export declare const binToNumberUint32LE: (bin: Uint8Array) => number;
/**
 * Decode a big-endian Uint8Array of any length into a BigInt. If starting from
 * a hex value, consider using the BigInt constructor instead:
 * ```
 * BigInt(`0x${hex}`)
 * ```
 *
 * The `bytes` parameter can be set to constrain the expected length (default:
 * `bin.length`). This method throws if `bin.length` is not equal to `bytes`.
 *
 * For the reverse, see {@link bigIntToBinUintBE}.
 *
 * @param bin - the Uint8Array to decode
 * @param bytes - the number of bytes to read (default: `bin.length`)
 */
export declare const binToBigIntUintBE: (bin: Uint8Array, bytes?: number) => bigint;
/**
 * Encode a positive BigInt as big-endian Uint8Array. Negative values will
 * return the same result as `0`.
 *
 * For the reverse, see {@link binToBigIntUintBE}.
 *
 * @param value - the number to encode
 */
export declare const bigIntToBinUintBE: (value: bigint) => Uint8Array;
/**
 * Decode an unsigned, 32-byte big-endian Uint8Array into a BigInt. This can be
 * used to decode Uint8Array-encoded cryptographic primitives like private
 * keys, public keys, curve parameters, and signature points.
 *
 * If starting from a hex value, consider using the BigInt constructor instead:
 * ```
 * BigInt(`0x${hex}`)
 * ```
 *
 * For the reverse, see {@link bigIntToBinUint256BEClamped}.
 *
 * @param bin - the Uint8Array to decode
 */
export declare const binToBigIntUint256BE: (bin: Uint8Array) => bigint;
/**
 * Encode a positive BigInt into an unsigned 32-byte big-endian Uint8Array. This
 * can be used to encoded numbers for cryptographic primitives like private
 * keys, public keys, curve parameters, and signature points.
 *
 * Negative values will return the same result as `0`, values higher than
 * 2^256-1 will return the maximum expressible unsigned 256-bit value
 * (`0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff`).
 *
 * For the reverse, see {@link binToBigIntUint256BE}.
 *
 * @param value - the BigInt to encode
 */
export declare const bigIntToBinUint256BEClamped: (value: bigint) => Uint8Array;
/**
 * Decode a little-endian Uint8Array of any length into a BigInt.
 *
 * The `bytes` parameter can be set to constrain the expected length (default:
 * `bin.length`). This method throws if `bin.length` is not equal to `bytes`.
 *
 * For the reverse, see {@link bigIntToBinUintLE}.
 *
 * @param bin - the Uint8Array to decode
 * @param bytes - the number of bytes to read (default: `bin.length`)
 */
export declare const binToBigIntUintLE: (bin: Uint8Array, bytes?: number) => bigint;
/**
 * Decode an 8-byte Uint64LE Uint8Array into a BigInt.
 *
 * Throws if `bin` is shorter than 8 bytes.
 *
 * For the reverse, see {@link bigIntToBinUint64LE}
 * or {@link bigIntToBinUint64LEClamped}.
 *
 * @param bin - the Uint8Array to decode
 */
export declare const binToBigIntUint64LE: (bin: Uint8Array) => bigint;
/**
 * Decode an {@link Output.valueSatoshis} into a `BigInt`. This is an alias for
 * {@link binToBigIntUint64LE}.
 *
 * Throws if the provided value is shorter than 8 bytes.
 *
 * For the reverse, see {@link valueSatoshisToBin}.
 */
export declare const binToValueSatoshis: (bin: Uint8Array) => bigint;
/**
 * Encode a `BigInt` into an {@link Output.valueSatoshis}. This is an alias for
 * {@link bigIntToBinUint64LE}.
 *
 * This method will return an incorrect result for values outside of the range 0
 * to 0xffff_ffff_ffff_ffff (`18446744073709551615`).
 *
 * For the reverse, see {@link binToValueSatoshis}.
 */
export declare const valueSatoshisToBin: (value: bigint) => Uint8Array;
/**
 * Get the expected byte length of a CompactUint given a first byte.
 *
 * @param firstByte - the first byte of the CompactUint
 */
export declare const compactUintPrefixToLength: (firstByte: number) => number;
export declare enum CompactUintError {
    noPrefix = "Error reading CompactUint: requires at least one byte.",
    insufficientBytes = "Error reading CompactUint: insufficient bytes.",
    nonMinimal = "Error reading CompactUint: CompactUint is not minimally encoded.",
    excessiveBytes = "Error decoding CompactUint: unexpected bytes after CompactUint."
}
/**
 * Read a non-minimally-encoded `CompactUint` (see {@link bigIntToCompactUint})
 * from the provided {@link ReadPosition}, returning either an error message (as
 * a string) or an object containing the value and the
 * next {@link ReadPosition}.
 *
 * Rather than this function, most applications should
 * use {@link readCompactUintMinimal}.
 *
 * @param position - the {@link ReadPosition} at which to start reading the
 * `CompactUint`
 */
export declare const readCompactUint: (position: ReadPosition) => MaybeReadResult<bigint>;
/**
 * Encode a positive BigInt as a `CompactUint` (Satoshi's variable-length,
 * positive integer format).
 *
 * Note: the maximum value of a CompactUint is `0xffff_ffff_ffff_ffff`
 * (`18446744073709551615`). This method will return an incorrect result for
 * values outside of the range `0` to `0xffff_ffff_ffff_ffff`. If applicable,
 * applications should handle such cases prior to calling this method.
 *
 * For the reverse, see {@link compactUintToBigInt}.
 *
 * @param value - the BigInt to encode (must be no larger than
 * `0xffff_ffff_ffff_ffff`)
 */
export declare const bigIntToCompactUint: (value: bigint) => Uint8Array;
/**
 * Read a minimally-encoded `CompactUint` from the provided
 * {@link ReadPosition}, returning either an error message (as a string) or an
 * object containing the value and the next {@link ReadPosition}.
 *
 * @param position - the {@link ReadPosition} at which to start reading the
 * `CompactUint`
 */
export declare const readCompactUintMinimal: (position: ReadPosition) => MaybeReadResult<bigint>;
/**
 * Decode a minimally-encoded `CompactUint` (Satoshi's variable-length, positive
 * integer format) from a Uint8Array, returning the value as a BigInt. This
 * function returns an error if the entire input is not consumed – to read a
 * `CompactUint` from a position within a larger `Uint8Array`,
 * use {@link readCompactUintMinimal} or {@link readCompactUint}.
 *
 * For the reverse, see {@link bigIntToCompactUint}.
 *
 * @param bin - the Uint8Array from which to read the CompactUint
 */
export declare const compactUintToBigInt: (bin: Uint8Array) => string | bigint;
/**
 * Convert a signed integer into it's two's compliment unsigned equivalent, e.g.
 * `0b11111111111111111111111111111110` is `-2` as a signed integer or
 * `4294967294` as an unsigned integer.
 *
 * For the reverse, see {@link int32UnsignedToSigned}.
 *
 * @param int32 - the number to convert
 */
export declare const int32SignedToUnsigned: (int32: number) => number;
/**
 * Convert an unsigned integer into it's two's compliment signed equivalent,
 * e.g. `0b11111111111111111111111111111110` is `4294967294` as an unsigned
 * integer or `-2` as a signed integer.
 *
 * For the reverse, see {@link int32SignedToUnsigned}.
 *
 * @param int32 - the number to convert
 */
export declare const int32UnsignedToSigned: (int32: number) => number;
//# sourceMappingURL=number.d.ts.map