import { SigningSerializationTypeBch } from './signing-serialization.js';
/**
 * Consensus settings for the `BCH_2023_05` instruction set.
 */
export var ConsensusCommon;
(function (ConsensusCommon) {
    /**
     * A.K.A. `MAX_SCRIPT_SIZE`
     */
    ConsensusCommon[ConsensusCommon["maximumBytecodeLength"] = 10000] = "maximumBytecodeLength";
    ConsensusCommon[ConsensusCommon["maximumControlStackDepth"] = 100] = "maximumControlStackDepth";
    /**
     * A.K.A. `MAX_OP_RETURN_RELAY`, `nMaxDatacarrierBytes`
     */
    ConsensusCommon[ConsensusCommon["maximumDataCarrierBytes"] = 223] = "maximumDataCarrierBytes";
    /**
     * A.K.A. `MAX_OPS_PER_SCRIPT`
     */
    ConsensusCommon[ConsensusCommon["maximumOperationCount"] = 201] = "maximumOperationCount";
    /**
     * A.K.A. `MAX_STACK_SIZE`
     */
    ConsensusCommon[ConsensusCommon["maximumStackDepth"] = 1000] = "maximumStackDepth";
    /**
     * A.K.A. `MAX_SCRIPT_ELEMENT_SIZE`
     */
    ConsensusCommon[ConsensusCommon["maximumStackItemLength"] = 520] = "maximumStackItemLength";
    /**
     * A.K.A. `MAX_STANDARD_VERSION`
     */
    ConsensusCommon[ConsensusCommon["maximumStandardVersion"] = 2] = "maximumStandardVersion";
    /**
     * A.K.A. `MAX_TX_IN_SCRIPT_SIG_SIZE`
     */
    ConsensusCommon[ConsensusCommon["maximumStandardUnlockingBytecodeLength"] = 1650] = "maximumStandardUnlockingBytecodeLength";
    /**
     * A.K.A. `MIN_TX_SIZE`
     */
    // eslint-disable-next-line @typescript-eslint/no-duplicate-enum-values
    ConsensusCommon[ConsensusCommon["minimumTransactionSize"] = 100] = "minimumTransactionSize";
    /**
     * A.K.A. `MAX_STANDARD_TX_SIZE`
     */
    ConsensusCommon[ConsensusCommon["maximumStandardTransactionSize"] = 100000] = "maximumStandardTransactionSize";
    /**
     * A.K.A. `MAX_TX_SIZE`
     */
    ConsensusCommon[ConsensusCommon["maximumTransactionSize"] = 1000000] = "maximumTransactionSize";
    /**
     * A.K.A. `MAXIMUM_ELEMENT_SIZE_64_BIT`
     */
    ConsensusCommon[ConsensusCommon["maximumVmNumberByteLength"] = 8] = "maximumVmNumberByteLength";
    // eslint-disable-next-line @typescript-eslint/no-mixed-enums
    ConsensusCommon["minVmNumber"] = "-9223372036854775807";
    ConsensusCommon["maxVmNumber"] = "9223372036854775807";
    ConsensusCommon[ConsensusCommon["schnorrSignatureLength"] = 64] = "schnorrSignatureLength";
})(ConsensusCommon || (ConsensusCommon = {}));
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SigningSerializationTypesCommon = [
    SigningSerializationTypeBch.allOutputs,
    SigningSerializationTypeBch.allOutputsSingleInput,
    SigningSerializationTypeBch.correspondingOutput,
    SigningSerializationTypeBch.correspondingOutputSingleInput,
    SigningSerializationTypeBch.noOutputs,
    SigningSerializationTypeBch.noOutputsSingleInput,
];
// eslint-disable-next-line @typescript-eslint/naming-convention
export const SigningSerializationTypesBch = [
    ...SigningSerializationTypesCommon,
    SigningSerializationTypeBch.allOutputsAllUtxos,
    SigningSerializationTypeBch.correspondingOutputAllUtxos,
    SigningSerializationTypeBch.noOutputsAllUtxos,
];
//# sourceMappingURL=consensus.js.map