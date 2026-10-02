import type { AuthenticationProgramStateCommon, AuthenticationProgramStateError, AuthenticationProgramStateMinimum, AuthenticationProgramStateResourceLimits, AuthenticationProgramStateSignatureAnalysis, AuthenticationProgramStateStack, Operation, Ripemd160, Secp256k1, Sha1, Sha256 } from '../../../lib.js';
export declare const opRipemd160: <State extends AuthenticationProgramStateError & AuthenticationProgramStateMinimum & AuthenticationProgramStateResourceLimits & AuthenticationProgramStateStack>({ ripemd160 }?: {
    ripemd160: {
        hash: Ripemd160["hash"];
    };
}) => Operation<State>;
export declare const opSha1: <State extends AuthenticationProgramStateError & AuthenticationProgramStateMinimum & AuthenticationProgramStateResourceLimits & AuthenticationProgramStateStack>({ sha1 }?: {
    sha1: {
        hash: Sha1["hash"];
    };
}) => Operation<State>;
export declare const opSha256: <State extends AuthenticationProgramStateError & AuthenticationProgramStateMinimum & AuthenticationProgramStateResourceLimits & AuthenticationProgramStateStack>({ sha256 }?: {
    sha256: {
        hash: Sha256["hash"];
    };
}) => Operation<State>;
export declare const opHash160: <State extends AuthenticationProgramStateError & AuthenticationProgramStateMinimum & AuthenticationProgramStateResourceLimits & AuthenticationProgramStateStack>({ ripemd160, sha256, }?: {
    sha256: {
        hash: Sha256["hash"];
    };
    ripemd160: {
        hash: Ripemd160["hash"];
    };
}) => Operation<State>;
export declare const opHash256: <State extends AuthenticationProgramStateError & AuthenticationProgramStateMinimum & AuthenticationProgramStateResourceLimits & AuthenticationProgramStateStack>({ sha256 }?: {
    sha256: {
        hash: Sha256["hash"];
    };
}) => Operation<State>;
export declare const opCodeSeparator: <State extends AuthenticationProgramStateMinimum & {
    lastCodeSeparator: number;
}>(state: State) => State;
export declare const opCheckSig: <State extends AuthenticationProgramStateCommon>({ secp256k1, sha256, }?: {
    sha256: {
        hash: Sha256["hash"];
    };
    secp256k1: {
        verifySignatureSchnorr: Secp256k1["verifySignatureSchnorr"];
        verifySignatureDERLowS: Secp256k1["verifySignatureDERLowS"];
    };
}) => Operation<State>;
/**
 * Return the number of `1` bits in the number `n`.
 * @param n - the number
 */
export declare const countBits: (n: bigint) => number;
export declare enum BitfieldDecodeError {
    invalidBitfieldSize = "BitfieldDecode error: bitfield exceeds maximum length (32 bits).",
    bitsSetBeyondExpectedRange = "BitfieldDecode error: the decoded bitfield includes bits set beyond the expected range."
}
/**
 * Decode a non-null `OP_CHECKMULTISIG` bitfield (A.K.A. `CheckBits`)
 * representing the positions of public keys against which the provided
 * signatures must be verified.
 * @param bin - the stack item from which to decode the bitfield
 * @param expectedBitLength - the number of bits expected
 */
export declare const decodeBitfield: (bin: Uint8Array, expectedBitLength: number) => string | bigint;
export declare const opCheckMultiSig: <State extends AuthenticationProgramStateCommon>({ secp256k1, sha256, enforceOperationLimit, }?: {
    enforceOperationLimit: boolean;
    sha256: {
        hash: Sha256["hash"];
    };
    secp256k1: {
        verifySignatureSchnorr: Secp256k1["verifySignatureSchnorr"];
        verifySignatureDERLowS: Secp256k1["verifySignatureDERLowS"];
    };
}) => (s: State) => State;
export declare const opCheckSigVerify: <State extends AuthenticationProgramStateCommon>({ secp256k1, sha256, }?: {
    sha256: {
        hash: Sha256["hash"];
    };
    secp256k1: {
        verifySignatureSchnorr: Secp256k1["verifySignatureSchnorr"];
        verifySignatureDERLowS: Secp256k1["verifySignatureDERLowS"];
    };
}) => Operation<State>;
export declare const opCheckMultiSigVerify: <State extends AuthenticationProgramStateCommon>({ enforceOperationLimit, secp256k1, sha256, }: {
    enforceOperationLimit: boolean;
    sha256: {
        hash: Sha256["hash"];
    };
    secp256k1: {
        verifySignatureSchnorr: Secp256k1["verifySignatureSchnorr"];
        verifySignatureDERLowS: Secp256k1["verifySignatureDERLowS"];
    };
}) => Operation<State>;
/**
 * Validate the encoding of a raw signature – a signature without a signing
 * serialization type byte (A.K.A. "sighash" byte).
 *
 * @param signature - the raw signature
 */
export declare const isValidSignatureEncodingBchRaw: (signature: Uint8Array) => boolean;
export declare const opCheckDataSig: <State extends AuthenticationProgramStateError & AuthenticationProgramStateResourceLimits & AuthenticationProgramStateSignatureAnalysis & AuthenticationProgramStateStack>({ secp256k1, sha256, }: {
    sha256: {
        hash: Sha256["hash"];
    };
    secp256k1: {
        verifySignatureSchnorr: Secp256k1["verifySignatureSchnorr"];
        verifySignatureDERLowS: Secp256k1["verifySignatureDERLowS"];
    };
}) => (state: State) => State;
export declare const opCheckDataSigVerify: <State extends AuthenticationProgramStateError & AuthenticationProgramStateResourceLimits & AuthenticationProgramStateSignatureAnalysis & AuthenticationProgramStateStack>({ secp256k1, sha256, }?: {
    sha256: {
        hash: Sha256["hash"];
    };
    secp256k1: {
        verifySignatureSchnorr: Secp256k1["verifySignatureSchnorr"];
        verifySignatureDERLowS: Secp256k1["verifySignatureDERLowS"];
    };
}) => (state: State) => State;
export declare const opReverseBytes: <State extends AuthenticationProgramStateStack>(state: State) => State;
//# sourceMappingURL=crypto.d.ts.map