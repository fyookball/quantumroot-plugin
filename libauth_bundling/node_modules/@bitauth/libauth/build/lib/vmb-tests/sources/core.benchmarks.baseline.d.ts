declare const _default: [["Transaction validation benchmarks", [["<key1.schnorr_signature.all_outputs> <key1.public_key>", "OP_DUP OP_HASH160 <$(<key1.public_key> OP_HASH160)> OP_EQUALVERIFY OP_CHECKSIG", "[baseline] 2 P2PKH inputs, 2 P2PKH outputs (one Schnorr signature, one ECDSA signature)", readonly ["p2s_standard", "spec_standard", "p2sh_ignore"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockP2pkh";
        };
        readonly valueSatoshis: 100000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 100000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockP2pkhStandardEcdsa";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly lockingBytecode: {
                readonly script: "lockP2pkh";
            };
            readonly valueSatoshis: 100000;
        }, {
            readonly lockingBytecode: {
                readonly script: "lockP2pkh";
            };
            readonly valueSatoshis: 99634;
        }];
    };
}]]]];
export default _default;
//# sourceMappingURL=core.benchmarks.baseline.d.ts.map