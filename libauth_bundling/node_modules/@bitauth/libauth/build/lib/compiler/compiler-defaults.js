/* eslint-disable @typescript-eslint/no-duplicate-enum-values */
export var CompilerDefaults;
(function (CompilerDefaults) {
    /**
     * The `addressIndex` used by the default scenario `data`.
     */
    CompilerDefaults[CompilerDefaults["defaultScenarioAddressIndex"] = 0] = "defaultScenarioAddressIndex";
    /**
     * The value used for `["slot"]` and `["copy"]` locking or unlocking bytecode
     * when generating a scenario and no `unlockingScriptId` is provided.
     */
    // eslint-disable-next-line @typescript-eslint/no-mixed-enums
    CompilerDefaults["defaultScenarioBytecode"] = "";
    /**
     *
     * The value of `currentBlockHeight` in the default wallet template
     * scenario. This is the height of the second mined block after the genesis
     * block: `000000006a625f06636b8bb6ac7b960a8d03705d1ace08b1a19da3fdcc99ddbd`.
     *
     * This default value was chosen to be low enough to simplify the debugging of
     * block height offsets while remaining differentiated from `0` and `1`, which
     * are used both as boolean return values and for control flow.
     */
    CompilerDefaults[CompilerDefaults["defaultScenarioCurrentBlockHeight"] = 2] = "defaultScenarioCurrentBlockHeight";
    /**
     * The value of `currentBlockTime` in the default wallet template
     * scenario. This is the Median Time-Past block time (BIP113) of block `2`
     * (the block used in
     * {@link CompilerDefaults.defaultScenarioCurrentBlockHeight}).
     */
    CompilerDefaults[CompilerDefaults["defaultScenarioCurrentBlockTime"] = 1231469665] = "defaultScenarioCurrentBlockTime";
    /**
     * The default `outpointTransactionHash` of inputs in scenarios.
     */
    CompilerDefaults["defaultScenarioInputOutpointTransactionHash"] = "0000000000000000000000000000000000000000000000000000000000000001";
    /**
     * The default `category` of tokens in scenarios.
     */
    CompilerDefaults["defaultScenarioOutputTokenCategory"] = "0000000000000000000000000000000000000000000000000000000000000002";
    /**
     * The default `sequenceNumber` of inputs in scenarios.
     */
    CompilerDefaults[CompilerDefaults["defaultScenarioInputSequenceNumber"] = 0] = "defaultScenarioInputSequenceNumber";
    /**
     * The default `lockingBytecode` value for scenario outputs,
     * `OP_RETURN <"libauth">` (hex: `6a076c696261757468`).
     */
    CompilerDefaults["defaultScenarioOutputLockingBytecode"] = "6a076c696261757468";
    /**
     * The default `valueSatoshis` of outputs in scenarios.
     */
    CompilerDefaults[CompilerDefaults["defaultScenarioOutputValueSatoshis"] = 0] = "defaultScenarioOutputValueSatoshis";
    /**
     * The value of `transaction.locktime` in the default wallet template
     * scenario.
     */
    CompilerDefaults[CompilerDefaults["defaultScenarioTransactionLocktime"] = 0] = "defaultScenarioTransactionLocktime";
    /**
     * The value of `transaction.version` in the default wallet template
     * scenario. Transaction version `2` enables `OP_CHECKSEQUENCEVERIFY` as
     * described in BIP68, BIP112, and BIP113.
     */
    CompilerDefaults[CompilerDefaults["defaultScenarioTransactionVersion"] = 2] = "defaultScenarioTransactionVersion";
    /**
     *s
     * If unset, each `HdKey` uses this `addressOffset`.
     */
    CompilerDefaults[CompilerDefaults["hdKeyAddressOffset"] = 0] = "hdKeyAddressOffset";
    /**
     * If unset, each `HdKey` uses this `hdPublicKeyDerivationPath`.
     */
    CompilerDefaults["hdKeyHdPublicKeyDerivationPath"] = "";
    /**
     * If unset, each `HdKey` uses this `privateDerivationPath`.
     */
    CompilerDefaults["hdKeyPrivateDerivationPath"] = "i";
    /**
     * The prefix used to refer to other scenario bytecode scripts from within a
     * bytecode script. See {@link WalletTemplateScenarioData.bytecode}
     * for details.
     */
    CompilerDefaults["scenarioBytecodeScriptPrefix"] = "_scenario.";
})(CompilerDefaults || (CompilerDefaults = {}));
//# sourceMappingURL=compiler-defaults.js.map