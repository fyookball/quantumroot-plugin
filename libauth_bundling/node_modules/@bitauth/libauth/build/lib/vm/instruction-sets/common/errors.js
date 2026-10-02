import { formatError } from '../../../format/format.js';
export var AuthenticationErrorCommon;
(function (AuthenticationErrorCommon) {
    AuthenticationErrorCommon["calledReserved"] = "Program called an unassigned, reserved operation.";
    AuthenticationErrorCommon["calledReturn"] = "Program called an OP_RETURN operation.";
    AuthenticationErrorCommon["calledUpgradableNop"] = "Program called a disallowed upgradable non-operation (OP_NOP1-OP_NOP10).";
    AuthenticationErrorCommon["checkSequenceUnavailable"] = "Program called an OP_CHECKSEQUENCEVERIFY operation, but OP_CHECKSEQUENCEVERIFY requires transaction version 2 or higher.";
    AuthenticationErrorCommon["disabledOpcode"] = "Program contains a disabled opcode.";
    AuthenticationErrorCommon["divisionByZero"] = "Program attempted to divide a number by zero.";
    AuthenticationErrorCommon["emptyAlternateStack"] = "Tried to read from an empty alternate stack.";
    AuthenticationErrorCommon["emptyStack"] = "Tried to read from an empty stack.";
    AuthenticationErrorCommon["exceededMaximumBytecodeLengthLocking"] = "The provided locking bytecode exceeds the maximum bytecode length.";
    AuthenticationErrorCommon["exceededMaximumBytecodeLengthUnlocking"] = "The provided unlocking bytecode exceeds the maximum bytecode length.";
    AuthenticationErrorCommon["exceededMaximumVmNumberByteLength"] = "Program attempted an OP_BIN2NUM operation on a byte sequence that cannot be encoded within the maximum VM Number length.";
    AuthenticationErrorCommon["exceededMaximumControlStackDepth"] = "Program exceeded the maximum control stack depth.";
    AuthenticationErrorCommon["exceededMaximumSignatureCheckCount"] = "Program exceeded the maximum signature check count.";
    AuthenticationErrorCommon["exceededMaximumStackDepth"] = "Program exceeded the maximum stack depth.";
    AuthenticationErrorCommon["exceededMaximumStackItemLength"] = "Program attempted to push a stack item that exceeded the maximum stack item length.";
    AuthenticationErrorCommon["exceededMaximumOperationCount"] = "Program exceeded the maximum operation count (201 operations).";
    AuthenticationErrorCommon["exceedsMaximumMultisigPublicKeyCount"] = "Program called an OP_CHECKMULTISIG that exceeds the maximum public key count (20 public keys).";
    AuthenticationErrorCommon["failedVerify"] = "Program failed an OP_VERIFY operation.";
    AuthenticationErrorCommon["invalidStackIndex"] = "Tried to read from an invalid stack index.";
    AuthenticationErrorCommon["incompatibleLocktimeType"] = "Program called an OP_CHECKLOCKTIMEVERIFY operation with an incompatible locktime type. The transaction locktime and required locktime must both refer to either a block height or a block time.";
    AuthenticationErrorCommon["incompatibleSequenceType"] = "Program called an OP_CHECKSEQUENCEVERIFY operation with an incompatible sequence type flag. The input sequence number and required sequence number must both use the same sequence locktime type.";
    AuthenticationErrorCommon["insufficientLength"] = "Program called an OP_NUM2BIN operation with an insufficient byte length to re-encode the provided number.";
    AuthenticationErrorCommon["insufficientPublicKeys"] = "Program called an OP_CHECKMULTISIG operation that requires signatures from more public keys than are provided.";
    AuthenticationErrorCommon["invalidCheckBitsValue"] = "Program called an OP_CHECKMULTISIG operation with an invalid CheckBits value.";
    AuthenticationErrorCommon["invalidCheckBitsSignatureCount"] = "Program called an OP_CHECKMULTISIG operation with a CheckBits value configuring validation for an incorrect number of signatures.";
    AuthenticationErrorCommon["invalidNaturalNumber"] = "Invalid input: the key/signature count inputs for OP_CHECKMULTISIG require a natural number (n > 0).";
    AuthenticationErrorCommon["invalidPublicKeyEncoding"] = "Encountered an improperly encoded public key.";
    AuthenticationErrorCommon["invalidVmNumber"] = "Invalid input: this operation requires a valid VM Number.";
    AuthenticationErrorCommon["invalidSignatureEncoding"] = "Encountered an improperly encoded signature.";
    AuthenticationErrorCommon["invalidSplitIndex"] = "Program called an OP_SPLIT operation with an invalid index.";
    AuthenticationErrorCommon["invalidTransactionInputIndex"] = "Program attempted to read from an invalid transaction input index.";
    AuthenticationErrorCommon["invalidTransactionOutputIndex"] = "Program attempted to read from an invalid transaction output index.";
    AuthenticationErrorCommon["invalidTransactionUtxoIndex"] = "Program attempted to read from an invalid transaction UTXO index.";
    AuthenticationErrorCommon["locktimeDisabled"] = "Program called an OP_CHECKLOCKTIMEVERIFY operation, but locktime is disabled for this transaction.";
    AuthenticationErrorCommon["mismatchedBitwiseOperandLength"] = "Program attempted a bitwise operation on operands of different lengths.";
    AuthenticationErrorCommon["malformedLockingBytecode"] = "The provided locking bytecode is malformed.";
    AuthenticationErrorCommon["malformedP2shBytecode"] = "Redeem bytecode was malformed prior to P2SH evaluation.";
    AuthenticationErrorCommon["malformedPush"] = "Program must be long enough to push the requested number of bytes.";
    AuthenticationErrorCommon["malformedUnlockingBytecode"] = "The provided unlocking bytecode is malformed.";
    AuthenticationErrorCommon["negativeLocktime"] = "Program called an OP_CHECKLOCKTIMEVERIFY or OP_CHECKSEQUENCEVERIFY operation with a negative locktime.";
    AuthenticationErrorCommon["nonEmptyControlStackLockingBytecode"] = "The locking bytecode completed with a non-empty control stack.";
    AuthenticationErrorCommon["nonEmptyControlStackRedeemBytecode"] = "The redeem bytecode completed with a non-empty control stack.";
    AuthenticationErrorCommon["nonEmptyControlStackUnlockingBytecode"] = "The unlocking bytecode completed with a non-empty control stack.";
    AuthenticationErrorCommon["nonMinimalPush"] = "Push operations must use the smallest possible encoding.";
    AuthenticationErrorCommon["nonNullSignatureFailure"] = "Program failed a signature verification with a non-null signature (violating the \"NULLFAIL\" rule).";
    AuthenticationErrorCommon["nonSchnorrSizedSignatureInSchnorrMultiSig"] = "Program used a non schnorr-sized signature (65 bytes) in a schnorr OP_CHECKMULTISIG operation.";
    AuthenticationErrorCommon["overflowsVmNumberRange"] = "Program attempted an arithmetic operation which exceeds the range of VM Numbers.";
    AuthenticationErrorCommon["requiresCleanStackLockingBytecode"] = "Non-P2SH locking bytecode completed evaluation with an unexpected number of items on the stack (must be exactly 1).";
    AuthenticationErrorCommon["requiresCleanStackRedeemBytecode"] = "P2SH redeem bytecode completed evaluation with an unexpected number of items on the stack (must be exactly 1).";
    AuthenticationErrorCommon["requiresPushOnly"] = "Unlocking bytecode may contain only push operations in version 1 and 2 transactions.";
    AuthenticationErrorCommon["schnorrSizedSignatureInEcdsaMultiSig"] = "Program used a schnorr-sized signature (65 bytes) in a legacy-mode (ECDSA) OP_CHECKMULTISIG operation.";
    AuthenticationErrorCommon["tokenValidationExcessiveCommitmentLength"] = "Transaction violates token validation: excessive token commitment length.";
    AuthenticationErrorCommon["tokenValidationInvalidMintingToken"] = "Transaction violates token validation: the transaction outputs include a minting token that is not substantiated by the transaction inputs.";
    AuthenticationErrorCommon["tokenValidationExcessiveAmount"] = "Transaction violates token validation: the transaction outputs include a sum of fungible tokens for a category exceeding the maximum fungible token amount.";
    AuthenticationErrorCommon["tokenValidationInvalidFungibleMint"] = "Transaction violates token validation: the transaction creates new fungible tokens for a category without a matching genesis input.";
    AuthenticationErrorCommon["tokenValidationOutputsExceedInputs"] = "Transaction violates token validation: the sum of fungible tokens in the transaction outputs exceed that of the transaction inputs for a category.";
    AuthenticationErrorCommon["tokenValidationExcessiveMutableTokens"] = "Transaction violates token validation: the transaction creates more mutable tokens than are available for a category without a matching minting token.";
    AuthenticationErrorCommon["tokenValidationExcessiveImmutableTokens"] = "Transaction violates token validation: the transaction creates an immutable token for a category without a matching minting token or sufficient mutable tokens.";
    AuthenticationErrorCommon["unexpectedElse"] = "Encountered an OP_ELSE outside of an OP_IF ... OP_ENDIF block.";
    AuthenticationErrorCommon["unexpectedEndIf"] = "Encountered an OP_ENDIF that is not following a matching OP_IF.";
    AuthenticationErrorCommon["unknownOpcode"] = "Called an unknown opcode.";
    AuthenticationErrorCommon["unmatchedSequenceDisable"] = "Program called an OP_CHECKSEQUENCEVERIFY operation requiring the disable flag, but the input's sequence number is missing the disable flag.";
    AuthenticationErrorCommon["unmatchedP2shRedeemBytecode"] = "The P2SH redeem bytecode provided in this input does not match the hash required by the locking bytecode.";
    AuthenticationErrorCommon["unsatisfiedLocktime"] = "Program called an OP_CHECKLOCKTIMEVERIFY operation that requires a locktime greater than the transaction's locktime.";
    AuthenticationErrorCommon["unsatisfiedSequenceNumber"] = "Program called an OP_CHECKSEQUENCEVERIFY operation that requires a sequence number greater than the input's sequence number.";
    AuthenticationErrorCommon["unsuccessfulEvaluation"] = "Unsuccessful evaluation: completed with a non-truthy value on top of the stack.";
    AuthenticationErrorCommon["verifyFailedExcessiveLength"] = "Unable to verify transaction: excessive byte length.";
    AuthenticationErrorCommon["verifyFailedInsufficientLength"] = "Unable to verify transaction: insufficient byte length.";
    AuthenticationErrorCommon["verifyFailedMismatchedSourceOutputs"] = "Unable to verify transaction: a single spent output must be provided for each transaction input.";
    AuthenticationErrorCommon["verifyFailedNoInputs"] = "Unable to verify transaction: transactions must have at least one input.";
    AuthenticationErrorCommon["verifyFailedNoOutputs"] = "Unable to verify transaction: transactions must have at least one output.";
    AuthenticationErrorCommon["verifyFailedInputsExceedMaxMoney"] = "Unable to verify transaction: the sum of source output values exceeds the maximum possible satoshi value.";
    AuthenticationErrorCommon["verifyFailedOutputsExceedInputs"] = "Unable to verify transaction: the sum of transaction output values exceeds the sum of transaction inputs.";
    AuthenticationErrorCommon["verifyFailedOutputsExceedMaxMoney"] = "Unable to verify transaction: the sum of transaction output values exceeds the maximum possible satoshi value.";
    AuthenticationErrorCommon["verifyFailedDuplicateSourceOutputs"] = "Unable to verify transaction: the transaction attempts to spend the same outpoint in multiple inputs.";
    AuthenticationErrorCommon["verifyFailedInvalidVersion"] = "Unable to verify transaction: transaction version must be either 1 or 2.";
    AuthenticationErrorCommon["verifyFailedExcessiveSigChecks"] = "Unable to verify transaction: excessive cumulative signature check count.";
    AuthenticationErrorCommon["verifyStandardFailedExcessiveLength"] = "Unable to verify standard transaction: transaction exceeds maximum standard byte length.";
    AuthenticationErrorCommon["verifyStandardFailedNonstandardOutput"] = "Unable to verify standard transaction: standard transactions may only create standard output types.";
    AuthenticationErrorCommon["verifyStandardFailedNonstandardSourceOutput"] = "Unable to verify standard transaction: standard transactions may only spend standard output types.";
    AuthenticationErrorCommon["verifyStandardFailedDustOutput"] = "Unable to verify standard transaction: standard transactions may not have dust outputs.";
    AuthenticationErrorCommon["verifyStandardFailedExcessiveDataCarrierBytes"] = "Unable to verify standard transaction: excessive data carrier bytes.";
    AuthenticationErrorCommon["verifyStandardFailedExcessiveUnlockingBytecodeLength"] = "Unable to verify standard transaction: excessive unlocking bytecode length.";
    AuthenticationErrorCommon["verifyStandardFailedNonPushUnlockingBytecode"] = "Unable to verify standard transaction: unlocking bytecode must only include push operations.";
})(AuthenticationErrorCommon || (AuthenticationErrorCommon = {}));
/**
 * Applies the `error` to a `state`.
 *
 * @remarks
 * If the state already has an error, this method does not override it.
 * (Evaluation should end after the first encountered error, so further errors
 * aren't relevant.)
 */
export const applyError = (state, errorType, errorDetails) => ({
    ...state,
    error: state.error ?? formatError(errorType, errorDetails),
});
//# sourceMappingURL=errors.js.map