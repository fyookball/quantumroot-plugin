export declare enum CashAddressNetworkPrefix {
    mainnet = "bitcoincash",
    testnet = "bchtest",
    regtest = "bchreg"
}
/**
 * The CashAddress specification standardizes the format of the version byte:
 * - Most significant bit: reserved, must be `0`
 * - next 4 bits: Address Type
 * - 3 least significant bits: Payload Length
 *
 * Two Address Type values are currently standardized:
 * - 0 (`0b0000`): P2PKH
 * - 1 (`0b0001`): P2SH
 *
 * And two are proposed by `CHIP-2022-02-CashTokens`:
 * - 2 (`0b0010`): P2PKH + Token Support
 * - 3 (`0b0011`): P2SH + Token Support
 *
 * The CashAddress specification standardizes expected payload length using
 * {@link CashAddressLengthBits}. Currently, two length bit values are in use by
 * standard CashAddress types:
 * - `0` (`0b000`): 20 bytes (in use by `p2pkh` and `p2sh20`)
 * - `3` (`0b011`): 32 bytes (in use by `p2sh32`)
 */
export declare enum CashAddressVersionByte {
    /**
     * Pay to Public Key Hash (P2PKH): `0b00000000`
     *
     * - Most significant bit: `0` (reserved)
     * - Address Type bits: `0000` (P2PKH)
     * - Length bits: `000` (20 bytes)
     */
    p2pkh = 0,
    /**
     * 20-byte Pay to Script Hash (P2SH20): `0b00001000`
     *
     * - Most significant bit: `0` (reserved)
     * - Address Type bits: `0001` (P2SH)
     * - Length bits: `000` (20 bytes)
     */
    p2sh20 = 8,
    /**
     * 32-byte Pay to Script Hash (P2SH20): `0b00001000`
     *
     * - Most significant bit: `0` (reserved)
     * - Address Type bits: `0001` (P2SH)
     * - Length bits: `011` (32 bytes)
     */
    p2sh32 = 11,
    /**
     * Pay to Public Key Hash (P2PKH) with token support: `0b00010000`
     *
     * - Most significant bit: `0` (reserved)
     * - Address Type bits: `0010` (P2PKH + Tokens)
     * - Length bits: `000` (20 bytes)
     */
    p2pkhWithTokens = 16,
    /**
     * 20-byte Pay to Script Hash (P2SH20) with token support: `0b00011000`
     * - Most significant bit: `0` (reserved)
     * - Address Type bits: `0011` (P2SH + Tokens)
     * - Length bits: `000` (20 bytes)
     */
    p2sh20WithTokens = 24,
    /**
     * 32-byte Pay to Script Hash (P2SH32) with token support: `0b00011011`
     * - Most significant bit: `0` (reserved)
     * - Address Type bits: `0011` (P2SH + Tokens)
     * - Length bits: `011` (32 bytes)
     */
    p2sh32WithTokens = 27
}
/**
 * The address types currently defined in the CashAddress specification. See
 * also: {@link CashAddressVersionByte}.
 */
export declare enum CashAddressType {
    /**
     * Pay to Public Key Hash (P2PKH): `0b0000`
     */
    p2pkh = "p2pkh",
    /**
     * Pay to Script Hash (P2SH): `0b0001`
     *
     * Note, this type is used for both {@link CashAddressVersionByte.p2sh20} and
     * {@link CashAddressVersionByte.p2sh32}.
     */
    p2sh = "p2sh",
    /**
     * Pay to Public Key Hash (P2PKH) with token support: `0b0010`
     */
    p2pkhWithTokens = "p2pkhWithTokens",
    /**
     * Pay to Script Hash (P2SH) with token support: `0b0011`
     *
     * Note, this type is used for both
     * {@link CashAddressVersionByte.p2sh20WithTokens} and
     * {@link CashAddressVersionByte.p2sh32WithTokens}.
     */
    p2shWithTokens = "p2shWithTokens"
}
/**
 * The address type bits currently defined in the CashAddress specification.
 * These map to: {@link CashAddressType}.
 */
export declare enum CashAddressTypeBits {
    /**
     * Pay to Public Key Hash (P2PKH)
     */
    p2pkh = 0,
    /**
     * Pay to Script Hash (P2SH)
     */
    p2sh = 1,
    /**
     * Pay to Public Key Hash (P2PKH) with token support
     */
    p2pkhWithTokens = 2,
    /**
     * Pay to Script Hash (P2SH) with token support
     */
    p2shWithTokens = 3
}
export declare const cashAddressTypeToTypeBits: {
    [key in CashAddressType]: CashAddressTypeBits;
};
export declare const cashAddressTypeBitsToType: {
    [key in CashAddressTypeBits]: CashAddressType;
};
export declare const cashAddressLengthBitsToLength: {
    readonly 0: 20;
    readonly 1: 24;
    readonly 2: 28;
    readonly 3: 32;
    readonly 4: 40;
    readonly 5: 48;
    readonly 6: 56;
    readonly 7: 64;
};
export declare const cashAddressLengthToLengthBits: {
    readonly 20: 0;
    readonly 24: 1;
    readonly 28: 2;
    readonly 32: 3;
    readonly 40: 4;
    readonly 48: 5;
    readonly 56: 6;
    readonly 64: 7;
};
export type CashAddressAvailableTypeBits = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15;
export type CashAddressSupportedLength = keyof typeof cashAddressLengthToLengthBits;
export type CashAddressLengthBits = keyof typeof cashAddressLengthBitsToLength;
/**
 * Encode a CashAddress version byte for the given address type and payload
 * length. See {@link CashAddressVersionByte} for more information.
 *
 * The `type` parameter must be a number between `0` and `15`, and `bitLength`
 * must be one of the standardized lengths. To use the contents of a variable,
 * cast it to {@link CashAddressType} or
 * {@link CashAddressSupportedLength} respectively,
 * e.g.:
 * ```ts
 * const type = 3 as CashAddressType;
 * const length = 20 as CashAddressSupportedLength;
 * getCashAddressVersionByte(type, length);
 * ```
 *
 * For the reverse, see {@link decodeCashAddressVersionByte}.
 *
 * @param typeBits - The address type bit of the payload being encoded.
 * @param length - The length of the payload being encoded.
 */
export declare const encodeCashAddressVersionByte: (typeBits: CashAddressAvailableTypeBits, length: CashAddressSupportedLength) => number;
export declare enum CashAddressVersionByteDecodingError {
    reservedBitSet = "Reserved bit is set."
}
/**
 * Decode a CashAddress version byte. For a list of known versions, see
 * {@link CashAddressVersionByte}.
 *
 * For the reverse, see {@link encodeCashAddressVersionByte}.
 *
 * @param version - The version byte to decode.
 */
export declare const decodeCashAddressVersionByte: (version: number) => CashAddressVersionByteDecodingError.reservedBitSet | {
    length: 64 | 32 | 28 | 40 | 20 | 24 | 48 | 56;
    typeBits: number;
};
/**
 * Convert a string into an array of 5-bit numbers, representing the characters
 * in a case-insensitive way.
 *
 * @param prefix - The prefix to mask.
 */
export declare const maskCashAddressPrefix: (prefix: string) => number[];
/**
 * Perform the CashAddress polynomial modulo operation, which is based on the
 * Bech32 polynomial modulo operation, but the returned checksum is 40 bits,
 * rather than 30.
 *
 * A.K.A. `PolyMod`
 *
 * @remarks
 * Notes from C++ implementation:
 * This function will compute what 8 5-bit values to XOR into the last 8 input
 * values, in order to make the checksum 0. These 8 values are packed together
 * in a single 40-bit integer. The higher bits correspond to earlier values.
 *
 * The input is interpreted as a list of coefficients of a polynomial over F
 * = GF(32), with an implicit 1 in front. If the input is [v0,v1,v2,v3,v4],
 * that polynomial is v(x) = 1*x^5 + v0*x^4 + v1*x^3 + v2*x^2 + v3*x + v4.
 * The implicit 1 guarantees that [v0,v1,v2,...] has a distinct checksum
 * from [0,v0,v1,v2,...].
 *
 * The output is a 40-bit integer whose 5-bit groups are the coefficients of
 * the remainder of v(x) mod g(x), where g(x) is the cashaddr generator, x^8
 * + [19]*x^7 + [3]*x^6 + [25]*x^5 + [11]*x^4 + [25]*x^3 + [3]*x^2 + [19]*x
 * + [1]. g(x) is chosen in such a way that the resulting code is a BCH
 * code, guaranteeing detection of up to 4 errors within a window of 1025
 * characters. Among the various possible BCH codes, one was selected to in
 * fact guarantee detection of up to 5 errors within a window of 160
 * characters and 6 errors within a window of 126 characters. In addition,
 * the code guarantee the detection of a burst of up to 8 errors.
 *
 * Note that the coefficients are elements of GF(32), here represented as
 * decimal numbers between []. In this finite field, addition is just XOR of
 * the corresponding numbers. For example, [27] + [13] = [27 ^ 13] = [22].
 * Multiplication is more complicated, and requires treating the bits of
 * values themselves as coefficients of a polynomial over a smaller field,
 * GF(2), and multiplying those polynomials mod a^5 + a^3 + 1. For example,
 * [5] * [26] = (a^2 + 1) * (a^4 + a^3 + a) = (a^4 + a^3 + a) * a^2 + (a^4 +
 * a^3 + a) = a^6 + a^5 + a^4 + a = a^3 + 1 (mod a^5 + a^3 + 1) = [9].
 *
 * During the course of the loop below, `c` contains the bit-packed
 * coefficients of the polynomial constructed from just the values of v that
 * were processed so far, mod g(x). In the above example, `c` initially
 * corresponds to 1 mod (x), and after processing 2 inputs of v, it
 * corresponds to x^2 + v0*x + v1 mod g(x). As 1 mod g(x) = 1, that is the
 * starting value for `c`.
 *
 * @param v - Array of 5-bit integers over which the checksum is to be computed.
 */
export declare const cashAddressPolynomialModulo: (v: number[]) => number;
/**
 * Convert the checksum returned by {@link cashAddressPolynomialModulo} to an
 * array of 5-bit positive integers that can be Base32 encoded.
 * @param checksum - A 40 bit checksum returned by
 * {@link cashAddressPolynomialModulo}.
 */
export declare const cashAddressChecksumToUint5Array: (checksum: number) => number[];
export declare enum CashAddressFormatEncodingError {
    excessiveVersion = "CashAddress format encoding error: version must be 255 or less."
}
export declare enum CashAddressEncodingError {
    noTypeBitsValueStandardizedForP2pk = "CashAddress encoding error: no CashAddress type bit has been standardized for P2PK locking bytecode.",
    unsupportedPayloadLength = "CashAddress encoding error: a payload of this length can not be encoded as a valid CashAddress.",
    unknownLockingBytecodeType = "CashAddress encoding error: unknown locking bytecode type."
}
export type DecodedCashAddressFormat = {
    /**
     * The payload of the CashAddress-formatted string.
     */
    payload: Uint8Array;
    /**
     * The prefix before the colon (`:`) indicating the network or protocol to
     * associate with the CashAddress-formatted string (for standard
     * CashAddresses, a {@link CashAddressNetworkPrefix}). Note that the
     * CashAddress Format checksum encodes the prefix in a case-insensitive way.
     */
    prefix: string;
    /**
     * A single byte indicating the version of this CashAddress-formatted string
     * (for standard CashAddresses, a {@link CashAddressVersionByte}).
     */
    version: number;
};
export type CashAddressResult = {
    /**
     * The successfully encoded CashAddress.
     */
    address: string;
};
/**
 * Encode a payload as a CashAddress-like string using the CashAddress format.
 *
 * Note that this function defaults to throwing encoding errors. To handle
 * errors in a type-safe way, set `throwErrors` to `false`.
 *
 * For the reverse, see {@link decodeCashAddressFormat}.
 *
 * To encode a standard CashAddress, use {@link encodeCashAddress}.
 */
export declare const encodeCashAddressFormat: <ThrowErrors extends boolean = true>({ payload, prefix, throwErrors, version, }: DecodedCashAddressFormat & {
    /**
     * If `true`, this function will throw an `Error` if the
     * provided `version` is invalid (greater than `255`) rather than returning
     * the error as a string (defaults to `true`).
     */
    throwErrors?: ThrowErrors;
}) => ThrowErrors extends true ? CashAddressResult : CashAddressResult | string;
export declare const isValidCashAddressPayloadLength: (length: number) => length is CashAddressSupportedLength;
export type DecodedCashAddressNonStandard = {
    /**
     * The payload of the CashAddress. For P2PKH, the public key hash; for
     * P2SH, the redeem bytecode hash.
     */
    payload: Uint8Array;
    /**
     * The prefix before the colon (`:`) indicating the network associated with
     * this CashAddress (usually a {@link CashAddressNetworkPrefix}). Note that
     * the CashAddress checksum encodes the prefix in a case-insensitive way.
     */
    prefix: string;
    /**
     * The type bit of the version byte; an integer between `0` and
     * `15` (inclusive).
     */
    typeBits: CashAddressAvailableTypeBits;
};
/**
 * Encode a payload as a CashAddress. This function is similar to
 * {@link encodeCashAddress} but supports non-standard `prefix`es and `type`s.
 *
 * Note that this function defaults to throwing encoding errors. To handle
 * errors in a type-safe way, set `throwErrors` to `false`.
 *
 * For other address standards that closely follow the CashAddress
 * specification (but have alternative version byte requirements), use
 * {@link encodeCashAddressFormat}.
 *
 * For the reverse, see {@link decodeCashAddressNonStandard}.
 */
export declare const encodeCashAddressNonStandard: <ThrowErrors extends boolean = true>({ payload, prefix, throwErrors, typeBits, }: DecodedCashAddressNonStandard & {
    /**
     * If `true`, this function will throw an `Error` if the provided `payload`
     * length is invalid rather than returning the error as a string (defaults
     * to `true`).
     */
    throwErrors?: ThrowErrors;
}) => ThrowErrors extends true ? CashAddressResult : CashAddressResult | string;
export type DecodedCashAddress = {
    /**
     * The payload of the CashAddress. For P2PKH, the public key hash; for
     * P2SH, the redeem bytecode hash.
     */
    payload: Uint8Array;
    /**
     * The {@link CashAddressNetworkPrefix} before the colon (`:`) indicating the
     * network associated with this CashAddress.
     */
    prefix: `${CashAddressNetworkPrefix}`;
    /**
     * The {@link CashAddressType} of the CashAddress.
     */
    type: `${CashAddressType}`;
};
/**
 * Encode a payload as a CashAddress.
 *
 * Note that this function defaults to throwing encoding errors. To handle
 * errors in a type-safe way, set `throwErrors` to `false`.
 *
 * To encode a CashAddress with a custom/unknown prefix or type bit, see
 * {@link encodeCashAddressNonStandard}. For other address standards that
 * closely follow the CashAddress specification (but have alternative version
 * byte requirements), use {@link encodeCashAddressFormat}.
 *
 * To decode a CashAddress, use {@link decodeCashAddress}.
 *
 * @returns If `throwErrors` is `true`, the CashAddress as a `string`. If
 * `throwErrors` is `false`, a {@link CashAddressResult} on successful encoding
 * or an error message as a `string`.
 */
export declare const encodeCashAddress: <ThrowErrors extends boolean = true>({ payload, prefix, throwErrors, type, }: Omit<DecodedCashAddress, "prefix"> & {
    /**
     * The {@link CashAddressNetworkPrefix} before the colon (`:`) indicating the
     * network to associate with this CashAddress. Defaults to `bitcoincash`
     * (A.K.A. mainnet).
     */
    prefix?: `${CashAddressNetworkPrefix}`;
    /**
     * If `true`, this function will throw an `Error` when the
     * provided `payload` length is invalid rather than returning the error as a
     * string (defaults to `true`).
     */
    throwErrors?: ThrowErrors;
}) => ThrowErrors extends true ? CashAddressResult : CashAddressResult | string;
export declare enum CashAddressDecodingError {
    improperPadding = "CashAddress decoding error: the payload is improperly padded.",
    invalidCharacters = "CashAddress decoding error: the payload contains unexpected characters.",
    invalidChecksum = "CashAddress decoding error: invalid checksum - please review the address for errors.",
    invalidFormat = "CashAddress decoding error: CashAddresses should be of the form \"prefix:payload\".",
    mismatchedPayloadLength = "CashAddress decoding error: mismatched payload length for specified address version.",
    reservedBit = "CashAddress decoding error: unknown CashAddress version, reserved bit set.",
    unknownAddressType = "CashAddress decoding error: unknown CashAddress type."
}
/**
 * Decode and validate a string using the CashAddress format. This is more
 * lenient than {@link decodeCashAddress}, which also validates the contents of
 * the version byte.
 *
 * Note, this method requires `address` to include a network prefix. To
 * decode a string with an unknown prefix, try
 * {@link decodeCashAddressFormatWithoutPrefix}.
 *
 * For the reverse, see {@link encodeCashAddressFormat}.
 *
 * @param address - The CashAddress-like string to decode.
 */
export declare const decodeCashAddressFormat: (address: string) => string | DecodedCashAddressFormat;
/**
 * Decode and validate a CashAddress, strictly checking the version byte
 * according to the CashAddress specification. This is important for error
 * detection in CashAddresses.
 *
 * This function is similar to {@link decodeCashAddress} but supports
 * non-standard `type`s.
 *
 * For other address-like standards that closely follow the CashAddress
 * specification (but have alternative version byte requirements), use
 * {@link decodeCashAddressFormat}.
 *
 * Note, this method requires that CashAddresses include a network prefix. To
 * decode an address with an unknown prefix, try
 * {@link decodeCashAddressFormatWithoutPrefix}.
 *
 * For the reverse, see {@link encodeCashAddressNonStandard}.
 *
 * @param address - The CashAddress to decode.
 */
export declare const decodeCashAddressNonStandard: (address: string) => string | DecodedCashAddressNonStandard;
/**
 * Decode and validate a CashAddress, strictly checking the version byte
 * according to the CashAddress specification. This is important for error
 * detection in CashAddresses.
 *
 * To decode CashAddresses with non-standard `type`s,
 * see {@link decodeCashAddressNonStandard}.
 *
 * For other address-like standards that closely follow the CashAddress
 * specification (but have alternative version byte requirements), use
 * {@link decodeCashAddressFormat}.
 *
 * Note, this method requires that CashAddresses include a network prefix. To
 * decode an address with an unknown prefix, try
 * {@link decodeCashAddressFormatWithoutPrefix}.
 *
 * To encode a CashAddress, use {@link encodeCashAddress}.
 *
 * @param address - The CashAddress to decode.
 */
export declare const decodeCashAddress: (address: string) => string | DecodedCashAddress;
/**
 * Attempt to decode and validate a CashAddress against a list of possible
 * prefixes. If the correct prefix is known, use {@link decodeCashAddress}.
 *
 * @param address - The CashAddress to decode.
 * @param possiblePrefixes - The network prefixes to try.
 */
export declare const decodeCashAddressFormatWithoutPrefix: (address: string, possiblePrefixes?: string[]) => string | DecodedCashAddressFormat;
/**
 * Convert a CashAddress polynomial to CashAddress string format.
 *
 * @remarks
 * CashAddress polynomials take the form:
 *
 * `[lowest 5 bits of each prefix character] 0 [payload + checksum]`
 *
 * This method remaps the 5-bit integers in the prefix location to the matching
 * ASCII lowercase characters, replaces the separator with `:`, and then Bech32
 * encodes the remaining payload and checksum.
 *
 * @param polynomial - An array of 5-bit integers representing the terms of a
 * CashAddress polynomial.
 */
export declare const cashAddressPolynomialToCashAddress: (polynomial: number[]) => string;
export declare enum CashAddressFormatCorrectionError {
    tooManyErrors = "CashAddress format correction error: this address cannot be corrected as it contains more than 2 errors."
}
export type CashAddressFormatCorrection = {
    /**
     * The corrected address in CashAddressFormat (including the prefix).
     */
    address: string;
    /**
     * An array of up to two numbers (in ascending order) indicating the index of
     * each corrected character within the corrected address.
     */
    corrections: [] | [number, number] | [number];
};
/**
 * Attempt to correct up to 2 errors in a CashAddress-formatted string. The
 * string must include the prefix and only contain Bech32 characters.
 *
 * ## **CAUTION: improper use of this function can lead to lost funds.**
 *
 * Using error correction of CashAddress-like formats degrades error detection,
 * i.e. if the payload contains more than 2 errors, it is possible that error
 * correction will "correct" the payload to a plausible but incorrect payload.
 *
 * For applications which proceed to take irreversible actions – like sending a
 * payment – **naive usage of CashAddress Format error correction can lead to
 * vulnerabilities and lost funds**.
 *
 * It is strongly advised that this method only be used in fail-safe
 * applications (e.g. automatic correction of CashAddress-formatted private key
 * material during wallet recovery) or under explicit user control (e.g. "The
 * address you entered is invalid, please review the highlighted characters and
 * try again.").
 *
 * Only 2 substitution errors can be corrected (or a single swap) – deletions
 * and insertions (errors that shift many other characters and change the
 * length of the payload) can never be safely corrected and will produce an
 * error.
 *
 * Errors can be corrected in both the prefix and the payload, but attempting to
 * correct errors in the prefix prior to this method can improve results, e.g.
 * for `bchtest:qq2azmyyv6dtgczexyalqar70q036yund53jvfde0x`, the string
 * `bchtest:qq2azmyyv6dtgczexyalqar70q036yund53jvfdecc` can be corrected, while
 * `typo:qq2azmyyv6dtgczexyalqar70q036yund53jvfdecc` can not.
 *
 * @param address - The address or formatted data to correct.
 */
export declare const attemptCashAddressFormatErrorCorrection: (address: string) => string | CashAddressFormatCorrection;
//# sourceMappingURL=cash-address.d.ts.map