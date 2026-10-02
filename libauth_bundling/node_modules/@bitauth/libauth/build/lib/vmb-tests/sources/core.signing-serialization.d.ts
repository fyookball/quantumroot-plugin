import type { VmbTestDefinition } from '../../lib.js';
declare const _default: [["Signing serializations", (VmbTestDefinition | ["<signing_serialization.full_default> <key1.schnorr_signature.default>", "<key1.public_key> OP_2DUP OP_CHECKSIGVERIFY OP_SWAP OP_SIZE <1> OP_SUB OP_SPLIT OP_DROP OP_ROT OP_SHA256 OP_ROT OP_CHECKDATASIG", "verify algorithm - default (A.K.A. all_outputs_all_utxos, SIGHASH_ALL|SIGHASH_UTXOS|SIGHASH_FORKID)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 11000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly lockingBytecode: {
                readonly script: "vmbTestNullData";
            };
            readonly valueSatoshis: 0;
        }];
    };
}] | ["<signing_serialization.full_default> <0x199d5a593615f64e79b912f310984280dd90482b97d257230bc9d3ce36c09c70d6d47b35a6a3e71471d8cffb705c97208d8cd49621142e696532a6c9cf37ca9061>", "<key1.public_key> OP_2DUP OP_CHECKSIGVERIFY OP_SWAP OP_SIZE <1> OP_SUB OP_SPLIT OP_DROP OP_ROT OP_SHA256 OP_ROT OP_CHECKDATASIG", "verify algorithm - all_outputs_all_utxos test with SIGHASH_FORKID (A.K.A. SIGHASH_ALL|SIGHASH_UTXOS|SIGHASH_FORKID)", readonly ["p2sh_ignore"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 12000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly lockingBytecode: {
                readonly script: "vmbTestNullData";
            };
            readonly valueSatoshis: 0;
        }];
    };
}] | ["<signing_serialization.full_default> <0x199d5a593615f64e79b912f310984280dd90482b97d257230bc9d3ce36c09c70d6d47b35a6a3e71471d8cffb705c97208d8cd49621142e696532a6c9cf37ca9021>", "<key1.public_key> OP_2DUP OP_CHECKSIGVERIFY OP_SWAP OP_SIZE <1> OP_SUB OP_SPLIT OP_DROP OP_ROT OP_SHA256 OP_ROT OP_CHECKDATASIG", "verify algorithm - all_outputs_all_utxos test without SIGHASH_FORKID (invalid) (A.K.A. SIGHASH_ALL|SIGHASH_UTXOS)", readonly ["invalid", "p2sh_ignore"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 12000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly lockingBytecode: {
                readonly script: "vmbTestNullData";
            };
            readonly valueSatoshis: 0;
        }];
    };
}])[]]];
export default _default;
//# sourceMappingURL=core.signing-serialization.d.ts.map