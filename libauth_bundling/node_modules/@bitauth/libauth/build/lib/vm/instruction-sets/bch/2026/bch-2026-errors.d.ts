export declare enum AuthenticationErrorBch2026Additions {
    unexpectedUntil = "Encountered an OP_UNTIL that is not preceded by a matching OP_BEGIN.",
    unexpectedUntilMissingEndIf = "Encountered an OP_UNTIL before the previous OP_IF was closed by an OP_ENDIF.",
    excessiveLooping = "Program attempted an OP_UNTIL operation that would exceed the limit of repeated bytes.",
    exceededMaximumMemorySlots = "Program attempted to use an excessive number of memory slots: stack items, alternate stack items, and/or defined functions.",
    functionIdentifierExcessiveLength = "Program attempted to OP_DEFINE a function identifier of excessive length.",
    functionIdentifierPreviouslyDefined = "Program attempted to OP_DEFINE a previously-defined function identifier.",
    functionIdentifierUndefined = "Program attempted to OP_INVOKE an undefined function identifier.",
    malformedFunction = "Program attempted to OP_INVOKE malformed bytecode.",
    invalidShiftBitCount = "Program attempted a bitwise shift with an invalid bit count."
}
/**
 * Errors for the `BCH_SPEC` instruction set.
 */
export declare const AuthenticationErrorBch2026: {
    unexpectedUntil: AuthenticationErrorBch2026Additions.unexpectedUntil;
    unexpectedUntilMissingEndIf: AuthenticationErrorBch2026Additions.unexpectedUntilMissingEndIf;
    excessiveLooping: AuthenticationErrorBch2026Additions.excessiveLooping;
    exceededMaximumMemorySlots: AuthenticationErrorBch2026Additions.exceededMaximumMemorySlots;
    functionIdentifierExcessiveLength: AuthenticationErrorBch2026Additions.functionIdentifierExcessiveLength;
    functionIdentifierPreviouslyDefined: AuthenticationErrorBch2026Additions.functionIdentifierPreviouslyDefined;
    functionIdentifierUndefined: AuthenticationErrorBch2026Additions.functionIdentifierUndefined;
    malformedFunction: AuthenticationErrorBch2026Additions.malformedFunction;
    invalidShiftBitCount: AuthenticationErrorBch2026Additions.invalidShiftBitCount;
    excessiveHashing: import("../2025/bch-2025-errors.js").AuthenticationErrorBch2025Additions.excessiveHashing;
    excessiveOperationCost: import("../2025/bch-2025-errors.js").AuthenticationErrorBch2025Additions.excessiveOperationCost;
    calledReserved: import("../../instruction-sets.js").AuthenticationErrorCommon.calledReserved;
    calledReturn: import("../../instruction-sets.js").AuthenticationErrorCommon.calledReturn;
    calledUpgradableNop: import("../../instruction-sets.js").AuthenticationErrorCommon.calledUpgradableNop;
    checkSequenceUnavailable: import("../../instruction-sets.js").AuthenticationErrorCommon.checkSequenceUnavailable;
    disabledOpcode: import("../../instruction-sets.js").AuthenticationErrorCommon.disabledOpcode;
    divisionByZero: import("../../instruction-sets.js").AuthenticationErrorCommon.divisionByZero;
    emptyAlternateStack: import("../../instruction-sets.js").AuthenticationErrorCommon.emptyAlternateStack;
    emptyStack: import("../../instruction-sets.js").AuthenticationErrorCommon.emptyStack;
    exceededMaximumBytecodeLengthLocking: import("../../instruction-sets.js").AuthenticationErrorCommon.exceededMaximumBytecodeLengthLocking;
    exceededMaximumBytecodeLengthUnlocking: import("../../instruction-sets.js").AuthenticationErrorCommon.exceededMaximumBytecodeLengthUnlocking;
    exceededMaximumVmNumberByteLength: import("../../instruction-sets.js").AuthenticationErrorCommon.exceededMaximumVmNumberByteLength;
    exceededMaximumControlStackDepth: import("../../instruction-sets.js").AuthenticationErrorCommon.exceededMaximumControlStackDepth;
    exceededMaximumSignatureCheckCount: import("../../instruction-sets.js").AuthenticationErrorCommon.exceededMaximumSignatureCheckCount;
    exceededMaximumStackDepth: import("../../instruction-sets.js").AuthenticationErrorCommon.exceededMaximumStackDepth;
    exceededMaximumStackItemLength: import("../../instruction-sets.js").AuthenticationErrorCommon.exceededMaximumStackItemLength;
    exceededMaximumOperationCount: import("../../instruction-sets.js").AuthenticationErrorCommon.exceededMaximumOperationCount;
    exceedsMaximumMultisigPublicKeyCount: import("../../instruction-sets.js").AuthenticationErrorCommon.exceedsMaximumMultisigPublicKeyCount;
    failedVerify: import("../../instruction-sets.js").AuthenticationErrorCommon.failedVerify;
    invalidStackIndex: import("../../instruction-sets.js").AuthenticationErrorCommon.invalidStackIndex;
    incompatibleLocktimeType: import("../../instruction-sets.js").AuthenticationErrorCommon.incompatibleLocktimeType;
    incompatibleSequenceType: import("../../instruction-sets.js").AuthenticationErrorCommon.incompatibleSequenceType;
    insufficientLength: import("../../instruction-sets.js").AuthenticationErrorCommon.insufficientLength;
    insufficientPublicKeys: import("../../instruction-sets.js").AuthenticationErrorCommon.insufficientPublicKeys;
    invalidCheckBitsValue: import("../../instruction-sets.js").AuthenticationErrorCommon.invalidCheckBitsValue;
    invalidCheckBitsSignatureCount: import("../../instruction-sets.js").AuthenticationErrorCommon.invalidCheckBitsSignatureCount;
    invalidNaturalNumber: import("../../instruction-sets.js").AuthenticationErrorCommon.invalidNaturalNumber;
    invalidPublicKeyEncoding: import("../../instruction-sets.js").AuthenticationErrorCommon.invalidPublicKeyEncoding;
    invalidVmNumber: import("../../instruction-sets.js").AuthenticationErrorCommon.invalidVmNumber;
    invalidSignatureEncoding: import("../../instruction-sets.js").AuthenticationErrorCommon.invalidSignatureEncoding;
    invalidSplitIndex: import("../../instruction-sets.js").AuthenticationErrorCommon.invalidSplitIndex;
    invalidTransactionInputIndex: import("../../instruction-sets.js").AuthenticationErrorCommon.invalidTransactionInputIndex;
    invalidTransactionOutputIndex: import("../../instruction-sets.js").AuthenticationErrorCommon.invalidTransactionOutputIndex;
    invalidTransactionUtxoIndex: import("../../instruction-sets.js").AuthenticationErrorCommon.invalidTransactionUtxoIndex;
    locktimeDisabled: import("../../instruction-sets.js").AuthenticationErrorCommon.locktimeDisabled;
    mismatchedBitwiseOperandLength: import("../../instruction-sets.js").AuthenticationErrorCommon.mismatchedBitwiseOperandLength;
    malformedLockingBytecode: import("../../instruction-sets.js").AuthenticationErrorCommon.malformedLockingBytecode;
    malformedP2shBytecode: import("../../instruction-sets.js").AuthenticationErrorCommon.malformedP2shBytecode;
    malformedPush: import("../../instruction-sets.js").AuthenticationErrorCommon.malformedPush;
    malformedUnlockingBytecode: import("../../instruction-sets.js").AuthenticationErrorCommon.malformedUnlockingBytecode;
    negativeLocktime: import("../../instruction-sets.js").AuthenticationErrorCommon.negativeLocktime;
    nonEmptyControlStackLockingBytecode: import("../../instruction-sets.js").AuthenticationErrorCommon.nonEmptyControlStackLockingBytecode;
    nonEmptyControlStackRedeemBytecode: import("../../instruction-sets.js").AuthenticationErrorCommon.nonEmptyControlStackRedeemBytecode;
    nonEmptyControlStackUnlockingBytecode: import("../../instruction-sets.js").AuthenticationErrorCommon.nonEmptyControlStackUnlockingBytecode;
    nonMinimalPush: import("../../instruction-sets.js").AuthenticationErrorCommon.nonMinimalPush;
    nonNullSignatureFailure: import("../../instruction-sets.js").AuthenticationErrorCommon.nonNullSignatureFailure;
    nonSchnorrSizedSignatureInSchnorrMultiSig: import("../../instruction-sets.js").AuthenticationErrorCommon.nonSchnorrSizedSignatureInSchnorrMultiSig;
    overflowsVmNumberRange: import("../../instruction-sets.js").AuthenticationErrorCommon.overflowsVmNumberRange;
    requiresCleanStackLockingBytecode: import("../../instruction-sets.js").AuthenticationErrorCommon.requiresCleanStackLockingBytecode;
    requiresCleanStackRedeemBytecode: import("../../instruction-sets.js").AuthenticationErrorCommon.requiresCleanStackRedeemBytecode;
    requiresPushOnly: import("../../instruction-sets.js").AuthenticationErrorCommon.requiresPushOnly;
    schnorrSizedSignatureInEcdsaMultiSig: import("../../instruction-sets.js").AuthenticationErrorCommon.schnorrSizedSignatureInEcdsaMultiSig;
    tokenValidationExcessiveCommitmentLength: import("../../instruction-sets.js").AuthenticationErrorCommon.tokenValidationExcessiveCommitmentLength;
    tokenValidationInvalidMintingToken: import("../../instruction-sets.js").AuthenticationErrorCommon.tokenValidationInvalidMintingToken;
    tokenValidationExcessiveAmount: import("../../instruction-sets.js").AuthenticationErrorCommon.tokenValidationExcessiveAmount;
    tokenValidationInvalidFungibleMint: import("../../instruction-sets.js").AuthenticationErrorCommon.tokenValidationInvalidFungibleMint;
    tokenValidationOutputsExceedInputs: import("../../instruction-sets.js").AuthenticationErrorCommon.tokenValidationOutputsExceedInputs;
    tokenValidationExcessiveMutableTokens: import("../../instruction-sets.js").AuthenticationErrorCommon.tokenValidationExcessiveMutableTokens;
    tokenValidationExcessiveImmutableTokens: import("../../instruction-sets.js").AuthenticationErrorCommon.tokenValidationExcessiveImmutableTokens;
    unexpectedElse: import("../../instruction-sets.js").AuthenticationErrorCommon.unexpectedElse;
    unexpectedEndIf: import("../../instruction-sets.js").AuthenticationErrorCommon.unexpectedEndIf;
    unknownOpcode: import("../../instruction-sets.js").AuthenticationErrorCommon.unknownOpcode;
    unmatchedSequenceDisable: import("../../instruction-sets.js").AuthenticationErrorCommon.unmatchedSequenceDisable;
    unmatchedP2shRedeemBytecode: import("../../instruction-sets.js").AuthenticationErrorCommon.unmatchedP2shRedeemBytecode;
    unsatisfiedLocktime: import("../../instruction-sets.js").AuthenticationErrorCommon.unsatisfiedLocktime;
    unsatisfiedSequenceNumber: import("../../instruction-sets.js").AuthenticationErrorCommon.unsatisfiedSequenceNumber;
    unsuccessfulEvaluation: import("../../instruction-sets.js").AuthenticationErrorCommon.unsuccessfulEvaluation;
    verifyFailedExcessiveLength: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyFailedExcessiveLength;
    verifyFailedInsufficientLength: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyFailedInsufficientLength;
    verifyFailedMismatchedSourceOutputs: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyFailedMismatchedSourceOutputs;
    verifyFailedNoInputs: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyFailedNoInputs;
    verifyFailedNoOutputs: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyFailedNoOutputs;
    verifyFailedInputsExceedMaxMoney: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyFailedInputsExceedMaxMoney;
    verifyFailedOutputsExceedInputs: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyFailedOutputsExceedInputs;
    verifyFailedOutputsExceedMaxMoney: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyFailedOutputsExceedMaxMoney;
    verifyFailedDuplicateSourceOutputs: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyFailedDuplicateSourceOutputs;
    verifyFailedInvalidVersion: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyFailedInvalidVersion;
    verifyFailedExcessiveSigChecks: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyFailedExcessiveSigChecks;
    verifyStandardFailedExcessiveLength: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyStandardFailedExcessiveLength;
    verifyStandardFailedNonstandardOutput: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyStandardFailedNonstandardOutput;
    verifyStandardFailedNonstandardSourceOutput: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyStandardFailedNonstandardSourceOutput;
    verifyStandardFailedDustOutput: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyStandardFailedDustOutput;
    verifyStandardFailedExcessiveDataCarrierBytes: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyStandardFailedExcessiveDataCarrierBytes;
    verifyStandardFailedExcessiveUnlockingBytecodeLength: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyStandardFailedExcessiveUnlockingBytecodeLength;
    verifyStandardFailedNonPushUnlockingBytecode: import("../../instruction-sets.js").AuthenticationErrorCommon.verifyStandardFailedNonPushUnlockingBytecode;
};
//# sourceMappingURL=bch-2026-errors.d.ts.map