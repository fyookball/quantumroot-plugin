declare const _default: [["Transaction inspection", [["<0>", "OP_INPUTINDEX OP_EQUAL", "OP_INPUTINDEX returns the index of the input currently being evaluated (0)", readonly [], import("../../lib.js").WalletTemplateScenario], ["<0>", "OP_INPUTINDEX OP_EQUAL", "OP_INPUTINDEX returns the index of the input currently being evaluated (1, expects 0)", readonly ["invalid"]], ["<1>", "OP_INPUTINDEX OP_EQUAL", "OP_INPUTINDEX returns the index of the input currently being evaluated (1)"], ["<2>", "OP_INPUTINDEX OP_EQUAL", "OP_INPUTINDEX returns the index of the input currently being evaluated (2)", readonly [], import("../../lib.js").WalletTemplateScenario], ["<9>", "OP_INPUTINDEX OP_EQUAL", "OP_INPUTINDEX returns the index of the input currently being evaluated (9)", readonly [], import("../../lib.js").WalletTemplateScenario], ["<OP_ACTIVEBYTECODE OP_EQUAL>", "OP_ACTIVEBYTECODE OP_EQUAL", "OP_ACTIVEBYTECODE returns the bytecode currently being evaluated"], ["<OP_SIZE <5> OP_EQUALVERIFY OP_ACTIVEBYTECODE OP_EQUAL>", "OP_SIZE <5> OP_EQUALVERIFY OP_ACTIVEBYTECODE OP_EQUAL", "OP_ACTIVEBYTECODE returns the bytecode currently being evaluated (check size)"], ["<OP_DUP OP_SIZE <8> OP_EQUALVERIFY OP_ACTIVEBYTECODE OP_EQUALVERIFY OP_ACTIVEBYTECODE OP_EQUAL>", "OP_DUP OP_SIZE <8> OP_EQUALVERIFY OP_ACTIVEBYTECODE OP_EQUALVERIFY OP_ACTIVEBYTECODE OP_EQUAL", "OP_ACTIVEBYTECODE returns the same bytecode each time (without OP_CODESEPARATOR)"], ["<OP_ACTIVEBYTECODE OP_EQUAL>", "OP_SIZE <2> OP_EQUALVERIFY OP_CODESEPARATOR OP_ACTIVEBYTECODE OP_EQUAL", "OP_ACTIVEBYTECODE respects OP_CODESEPARATOR"], ["<OP_EQUALVERIFY OP_ACTIVEBYTECODE OP_EQUAL>", "OP_SIZE <3> OP_CODESEPARATOR OP_EQUALVERIFY OP_ACTIVEBYTECODE OP_EQUAL", "OP_ACTIVEBYTECODE respects a single OP_CODESEPARATOR (includes the OP_EQUALVERIFY)"], ["<OP_CODESEPARATOR OP_ACTIVEBYTECODE OP_EQUAL>", "OP_SIZE <3> OP_EQUALVERIFY OP_CODESEPARATOR OP_ACTIVEBYTECODE OP_EQUAL", "Active bytecode begins after the last OP_CODESEPARATOR", readonly ["invalid"]], ["<OP_ACTIVEBYTECODE OP_CODESEPARATOR OP_EQUAL>", "OP_SIZE <3> OP_CODESEPARATOR OP_EQUALVERIFY OP_CODESEPARATOR OP_ACTIVEBYTECODE OP_CODESEPARATOR OP_EQUAL", "OP_ACTIVEBYTECODE returns only the bytecode after the last executed OP_CODESEPARATOR"], ["<OP_ACTIVEBYTECODE OP_CODESEPARATOR OP_EQUAL> <OP_ACTIVEBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR OP_ACTIVEBYTECODE OP_CODESEPARATOR OP_EQUAL>", "OP_SIZE <6> OP_CODESEPARATOR OP_EQUALVERIFY OP_CODESEPARATOR OP_ACTIVEBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR OP_ACTIVEBYTECODE OP_CODESEPARATOR OP_EQUAL", "OP_ACTIVEBYTECODE returns only the bytecode after the last executed OP_CODESEPARATOR (two OP_ACTIVEBYTECODEs)"], ["<OP_EQUALVERIFY OP_ACTIVEBYTECODE OP_EQUAL> <OP_ACTIVEBYTECODE OP_CODESEPARATOR OP_EQUALVERIFY OP_ACTIVEBYTECODE OP_EQUAL> <OP_ACTIVEBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR OP_ACTIVEBYTECODE OP_CODESEPARATOR OP_EQUALVERIFY OP_ACTIVEBYTECODE OP_EQUAL> <OP_ACTIVEBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR OP_ACTIVEBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR OP_ACTIVEBYTECODE OP_CODESEPARATOR OP_EQUALVERIFY OP_ACTIVEBYTECODE OP_EQUAL>", "OP_ACTIVEBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR OP_ACTIVEBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR OP_ACTIVEBYTECODE OP_CODESEPARATOR OP_EQUALVERIFY OP_ACTIVEBYTECODE OP_EQUAL", "OP_ACTIVEBYTECODE works before and after multiple OP_CODESEPARATORs"], ["<1>", "OP_INPUTINDEX OP_UTXOBYTECODE OP_ACTIVEBYTECODE OP_EQUALVERIFY", "\"OP_INPUTINDEX OP_UTXOBYTECODE\" and \"OP_ACTIVEBYTECODE\" differ in P2SH contracts (working P2S)", readonly ["p2sh_invalid"]], ["<OP_HASH160 OP_PUSHBYTES_20>", "OP_ACTIVEBYTECODE OP_HASH160 <OP_EQUAL> OP_CAT OP_CAT OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUAL", "\"OP_INPUTINDEX OP_UTXOBYTECODE\" and \"OP_ACTIVEBYTECODE\" differ in P2SH contracts (working P2SH20)", readonly ["invalid", "p2sh20_standard"]], ["<OP_HASH256 OP_PUSHBYTES_32>", "OP_ACTIVEBYTECODE OP_HASH256 <OP_EQUAL> OP_CAT OP_CAT OP_INPUTINDEX OP_UTXOBYTECODE OP_EQUAL", "\"OP_INPUTINDEX OP_UTXOBYTECODE\" and \"OP_ACTIVEBYTECODE\" differ in P2SH contracts (working P2SH32)", readonly ["invalid", "p2sh32_standard"]], ["<0>", "OP_TXVERSION OP_EQUAL", "OP_TXVERSION (version == 0); only versions 1 and 2 are valid", readonly ["invalid"], {
    readonly transaction: {
        readonly version: 0;
    };
}], ["<1>", "OP_TXVERSION OP_EQUAL", "OP_TXVERSION (version == 1)", readonly [], {
    readonly transaction: {
        readonly version: 1;
    };
}], ["<2>", "OP_TXVERSION OP_EQUAL", "OP_TXVERSION (version == 2)"], ["<3>", "OP_TXVERSION OP_EQUAL", "OP_TXVERSION (version == 2, while version 3 is expected)", readonly ["invalid"]], ["<3>", "OP_TXVERSION OP_EQUAL", "OP_TXVERSION (version == 3); only versions 1 and 2 are valid", readonly ["invalid"], {
    readonly transaction: {
        readonly version: 3;
    };
}], ["<123456>", "OP_TXVERSION OP_EQUAL", "OP_TXVERSION (version == 123456)", readonly ["invalid"], {
    readonly transaction: {
        readonly version: 123456;
    };
}], ["<-2>", "OP_TXVERSION OP_EQUAL", "OP_TXVERSION (version 0xfeffffff; 4294967294 unsigned, -2 signed)", readonly ["invalid"], {
    readonly transaction: {
        readonly version: 4294967294;
    };
}], ["<-1>", "OP_TXVERSION OP_EQUAL", "OP_TXVERSION (version 0xffffffff; 4294967295 unsigned, -1 signed)", readonly ["invalid"], {
    readonly transaction: {
        readonly version: 4294967295;
    };
}], ["<2>", "OP_TXINPUTCOUNT OP_EQUAL", "OP_TXINPUTCOUNT (2 inputs)"], ["<1>", "OP_TXINPUTCOUNT OP_EQUAL", "OP_TXINPUTCOUNT (2 inputs, 1 expected)", readonly ["invalid"]], ["<1> <\"100-byte tx size minimum 123456789012345678901234567890\">", "OP_DROP OP_TXINPUTCOUNT OP_EQUAL", "OP_TXINPUTCOUNT (1 input)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
    };
}], ["<3>", "OP_TXINPUTCOUNT OP_EQUAL", "OP_TXINPUTCOUNT (3 inputs)", readonly [], import("../../lib.js").WalletTemplateScenario], ["<10>", "OP_TXINPUTCOUNT OP_EQUAL", "OP_TXINPUTCOUNT (10 inputs)", readonly [], import("../../lib.js").WalletTemplateScenario], ["<101>", "OP_TXINPUTCOUNT OP_EQUAL", "OP_TXINPUTCOUNT (101 inputs)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, ...{
        lockingBytecode: {
            script: string;
        };
        valueSatoshis: number;
    }[]];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, ...{
            unlockingBytecode: {
                script: string;
            };
        }[]];
    };
}], ["<1>", "OP_TXOUTPUTCOUNT OP_EQUAL", "OP_TXOUTPUTCOUNT (1 output)"], ["<2>", "OP_TXOUTPUTCOUNT OP_EQUAL", "OP_TXOUTPUTCOUNT (2 outputs)", readonly [], {
    readonly transaction: {
        readonly outputs: {
            lockingBytecode: {
                script: string;
            };
        }[];
    };
}], ["<3>", "OP_TXOUTPUTCOUNT OP_EQUAL", "OP_TXOUTPUTCOUNT (3 outputs)", readonly [], {
    readonly transaction: {
        readonly outputs: {
            lockingBytecode: {
                script: string;
            };
        }[];
    };
}], ["<20>", "OP_TXOUTPUTCOUNT OP_EQUAL", "OP_TXOUTPUTCOUNT (20 outputs)", readonly [], {
    readonly transaction: {
        readonly outputs: {
            lockingBytecode: {
                script: string;
            };
        }[];
    };
}], ["<100>", "OP_TXOUTPUTCOUNT OP_EQUAL", "OP_TXOUTPUTCOUNT (100 outputs; non-standard beyond per-transaction OP_RETURN data limit)", readonly ["nonstandard"], {
    readonly transaction: {
        readonly outputs: {
            lockingBytecode: {
                script: string;
            };
        }[];
    };
}], ["<0>", "OP_TXLOCKTIME OP_EQUAL", "OP_TXLOCKTIME (locktime == 0)"], ["<1>", "OP_TXLOCKTIME OP_EQUAL", "OP_TXLOCKTIME (locktime == 0, but expects 1)", readonly ["invalid"]], ["<1>", "OP_TXLOCKTIME OP_EQUAL", "OP_TXLOCKTIME (locktime == 1)", readonly [], {
    readonly transaction: {
        readonly locktime: 1;
    };
}], ["<2>", "OP_TXLOCKTIME OP_EQUAL", "OP_TXLOCKTIME (locktime == 2)", readonly [], {
    readonly transaction: {
        readonly locktime: 2;
    };
}], ["<499_999_999>", "OP_TXLOCKTIME OP_EQUAL", "OP_TXLOCKTIME (locktime == 499999999, the maximum block height)", readonly [], {
    readonly transaction: {
        readonly locktime: 499999999;
    };
}], ["<500_000_000>", "OP_TXLOCKTIME OP_EQUAL", "OP_TXLOCKTIME (locktime == 500000000, the minimum UNIX timestamp)", readonly [], {
    readonly transaction: {
        readonly locktime: 500000000;
    };
}], ["<4_294_967_294>", "OP_TXLOCKTIME OP_EQUAL", "OP_TXLOCKTIME (locktime == 4294967294)", readonly [], {
    readonly transaction: {
        readonly locktime: 4294967294;
    };
}], ["<4_294_967_295>", "OP_TXLOCKTIME OP_EQUAL", "OP_TXLOCKTIME (locktime == 4294967295)", readonly [], {
    readonly transaction: {
        readonly locktime: 4294967295;
    };
}], ["<10_000> <0>", "OP_UTXOVALUE OP_EQUAL", "OP_UTXOVALUE (10000)"], ["<10_001> <0>", "OP_UTXOVALUE OP_EQUAL", "OP_UTXOVALUE (10000, expects 10001)", readonly ["invalid"]], ["<1>", "<0> OP_UTXOVALUE OP_DROP", "OP_UTXOVALUE (ignore result)"], ["<1>", "<1> OP_UTXOVALUE OP_DROP", "OP_UTXOVALUE (ignore result, index 1)"], ["<1>", "<-1> OP_UTXOVALUE OP_DROP", "OP_UTXOVALUE (ignore result, negative index)", readonly ["invalid"]], ["<1>", "<0x0100> OP_UTXOVALUE OP_DROP", "OP_UTXOVALUE (ignore result, index 1, non-minimally encoded)", readonly ["invalid"]], ["<1>", "<2> OP_UTXOVALUE OP_DROP", "OP_UTXOVALUE (ignore result, index 2, greater than maximum index)", readonly ["invalid"]], ["<10_000> <1>", "OP_UTXOVALUE OP_EQUAL", "OP_UTXOVALUE (10000; input 1)"], ["<123_456> <100>", "OP_UTXOVALUE OP_EQUAL", "OP_UTXOVALUE (123456; input 101)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, ...{
        lockingBytecode: {
            script: string;
        };
        valueSatoshis: number;
    }[]];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, ...{
            unlockingBytecode: {
                script: string;
            };
        }[]];
    };
}], ["<123_456_789> <0>", "OP_UTXOVALUE OP_EQUAL", "OP_UTXOVALUE (1.23456789 BCH)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 123456789;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly lockingBytecode: string;
        }];
    };
}], ["<2_100_000_000_000_000> <0>", "OP_UTXOVALUE OP_EQUAL", "OP_UTXOVALUE (21,000,000 BCH)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: string;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly lockingBytecode: string;
        }];
    };
}], ["<9223372036854775807> <0>", "OP_UTXOVALUE OP_EQUAL", "OP_UTXOVALUE (maximum 8-byte number satoshis)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: string;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly lockingBytecode: string;
        }];
    };
}], ["<<1> OP_UTXOBYTECODE OP_EQUAL>", "<1> OP_UTXOBYTECODE OP_EQUAL", "OP_UTXOBYTECODE (<<1> OP_UTXOBYTECODE OP_EQUAL>; P2S)", readonly ["p2sh_invalid"]], ["<0xa914baae9f614b7d4cde00a5c2ea454f59b5a3f91a2d87>", "<1> OP_UTXOBYTECODE OP_EQUAL", "OP_UTXOBYTECODE (<<1> OP_UTXOBYTECODE OP_EQUAL>; P2SH20)", readonly ["invalid", "p2sh20_standard"]], ["<0x76a91460011c6bf3f1dd98cff576437b9d85de780f497488ac>", "<0> OP_UTXOBYTECODE OP_EQUAL", "OP_UTXOBYTECODE (<simple p2pkh output>; input 0)"], ["<1>", "<0> OP_UTXOBYTECODE OP_DROP", "OP_UTXOBYTECODE (ignore result, input 0)"], ["<1>", "<1> OP_UTXOBYTECODE OP_DROP", "OP_UTXOBYTECODE (ignore result, input 1)"], ["<1>", "<-1> OP_UTXOBYTECODE OP_DROP", "OP_UTXOBYTECODE (ignore result, negative input)", readonly ["invalid"]], ["<1>", "<0x0100> OP_UTXOBYTECODE OP_DROP", "OP_UTXOBYTECODE (ignore result, input 1, non-minimally encoded)", readonly ["invalid"]], ["<1>", "<2> OP_UTXOBYTECODE OP_DROP", "OP_UTXOBYTECODE (ignore result, input 2, greater than maximum input index)", readonly ["invalid"]], [`<<0x${string}> OP_DROP <1> OP_UTXOBYTECODE OP_EQUAL>`, `<0x${string}> OP_DROP <1> OP_UTXOBYTECODE OP_EQUAL`, "OP_UTXOBYTECODE (maximum size UTXO bytecode)", readonly ["p2s_nonstandard", "p2sh_invalid"]], ["<1>", `<0x${string}> OP_DROP <1> OP_UTXOBYTECODE OP_DROP`, "OP_UTXOBYTECODE (ignore result, not excessive size)", readonly ["p2s_nonstandard"]], ["<1>", `<0x${string}> OP_DROP <1> OP_UTXOBYTECODE OP_DROP`, "OP_UTXOBYTECODE (ignore result, excessive size)", readonly ["nonstandard", "2023_invalid", "p2sh_ignore"]], ["<<0x00 42> OP_EQUAL> <<0x00 13> OP_EQUAL> <<0x00 7> OP_EQUAL> <<0x00 3> OP_EQUAL> <<0x00 2> OP_EQUAL> <<0x00 1> OP_EQUAL> <<0> OP_UTXOBYTECODE OP_EQUALVERIFY <1> OP_CODESEPARATOR OP_UTXOBYTECODE OP_EQUALVERIFY <2> OP_UTXOBYTECODE OP_EQUALVERIFY <3> OP_UTXOBYTECODE OP_CODESEPARATOR OP_EQUALVERIFY <7> OP_UTXOBYTECODE OP_EQUALVERIFY <13> OP_UTXOBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR <42> OP_UTXOBYTECODE OP_EQUAL>", "<0> OP_UTXOBYTECODE OP_EQUALVERIFY <1> OP_CODESEPARATOR OP_UTXOBYTECODE OP_EQUALVERIFY <2> OP_UTXOBYTECODE OP_EQUALVERIFY <3> OP_UTXOBYTECODE OP_CODESEPARATOR OP_EQUALVERIFY <7> OP_UTXOBYTECODE OP_EQUALVERIFY <13> OP_UTXOBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR <42> OP_UTXOBYTECODE OP_EQUAL", "multiple OP_UTXOBYTECODEs, OP_CODESEPARATOR has no effect (50 inputs)", readonly ["p2sh_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, ...{
        lockingBytecode: {
            script: string;
        };
        valueSatoshis: number;
    }[]];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, ...{
            unlockingBytecode: {
                script: string;
            };
        }[]];
    };
}, {}], ["<OP_HASH160 <$(<<0x00 3> OP_EQUAL> OP_HASH160)> OP_EQUAL> <OP_HASH160 <$(<<0x00 2> OP_EQUAL> OP_HASH160)> OP_EQUAL> <OP_HASH160 <$(<<0x00 1> OP_EQUAL> OP_HASH160)> OP_EQUAL> <OP_HASH160 <$(<<0> OP_UTXOBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR <1> OP_UTXOBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR <2> OP_UTXOBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR <3> OP_UTXOBYTECODE OP_EQUAL> OP_HASH160)> OP_EQUAL>", "<0> OP_UTXOBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR <1> OP_UTXOBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR <2> OP_UTXOBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR <3> OP_UTXOBYTECODE OP_EQUAL", "multiple OP_UTXOBYTECODEs, OP_CODESEPARATOR has no effect (50 inputs, P2SH20)", readonly ["invalid", "p2sh20_standard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, ...{
        lockingBytecode: {
            script: string;
        };
        valueSatoshis: number;
    }[]];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, ...{
            unlockingBytecode: {
                script: string;
            };
        }[]];
    };
}, {}], ["<OP_HASH256 <$(<<0x00 3> OP_EQUAL> OP_HASH256)> OP_EQUAL> <OP_HASH256 <$(<<0x00 2> OP_EQUAL> OP_HASH256)> OP_EQUAL> <OP_HASH256 <$(<<0x00 1> OP_EQUAL> OP_HASH256)> OP_EQUAL> <OP_HASH256 <$(<<0> OP_UTXOBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR <1> OP_UTXOBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR <2> OP_UTXOBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR <3> OP_UTXOBYTECODE OP_EQUAL> OP_HASH256)> OP_EQUAL>", "<0> OP_UTXOBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR <1> OP_UTXOBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR <2> OP_UTXOBYTECODE OP_EQUALVERIFY OP_CODESEPARATOR <3> OP_UTXOBYTECODE OP_EQUAL", "multiple OP_UTXOBYTECODEs, OP_CODESEPARATOR has no effect (50 inputs, P2SH32)", readonly ["invalid", "p2sh32_standard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, ...{
        lockingBytecode: {
            script: string;
        };
        valueSatoshis: number;
    }[]];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, ...{
            unlockingBytecode: {
                script: string;
            };
        }[]];
    };
}, {}], ["<0x0100000000000000000000000000000000000000000000000000000000000000>", "<0> OP_OUTPOINTTXHASH OP_EQUAL", "OP_OUTPOINTTXHASH (input 0)"], ["<0x0100000000000000000000000000000000000000000000000000000000000000>", "<1> OP_OUTPOINTTXHASH OP_EQUAL", "OP_OUTPOINTTXHASH (input 1)"], ["<0x6fe28c0ab6f1b372c1a6a246ae63f74f931e8365e15a089c68d6190000000000>", "<1> OP_OUTPOINTTXHASH OP_EQUAL", "OP_OUTPOINTTXHASH returns in OP_HASH256 order (genesis block)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly outpointTransactionHash: string;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
    };
}], ["<0x0000000000000000000000000000000000000000000000000000000000000001>", "<1> OP_OUTPOINTTXHASH OP_EQUAL", "OP_OUTPOINTTXHASH (input 1, expected 0x00...01)", readonly ["invalid"]], ["<0x000000000000000000000000000000000000000000000000000000000000001>", "<1> OP_OUTPOINTTXHASH OP_EQUAL", "OP_OUTPOINTTXHASH (input 1, 0x00...01)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly outpointTransactionHash: "0100000000000000000000000000000000000000000000000000000000000000";
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
    };
}], ["<1>", "<0> OP_OUTPOINTTXHASH OP_DROP", "OP_OUTPOINTTXHASH (ignore result, input 0)"], ["<1>", "<1> OP_OUTPOINTTXHASH OP_DROP", "OP_OUTPOINTTXHASH (ignore result, input 1)"], ["<1>", "<0x0100> OP_OUTPOINTTXHASH OP_DROP", "OP_OUTPOINTTXHASH (ignore result, input 1, non-minimally encoded)", readonly ["invalid"]], ["<1>", "<-1> OP_OUTPOINTTXHASH OP_DROP", "OP_OUTPOINTTXHASH (ignore result, negative input)", readonly ["invalid"]], ["<1>", "<2> OP_OUTPOINTTXHASH OP_DROP", "OP_OUTPOINTTXHASH (ignore result, input 2, greater than maximum input)", readonly ["invalid"]], ["<1>", "<2> OP_OUTPOINTTXHASH OP_DROP", "OP_OUTPOINTTXHASH (ignore result, input 2)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, ...{
        lockingBytecode: {
            script: string;
        };
        valueSatoshis: number;
    }[]];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, ...{
            unlockingBytecode: {
                script: string;
            };
        }[]];
    };
}], ["<42> <13> <3>", "<0> OP_OUTPOINTTXHASH <0> OP_OUTPOINTTXHASH OP_EQUALVERIFY <1> OP_OUTPOINTTXHASH <1> OP_OUTPOINTTXHASH OP_EQUALVERIFY <3> OP_OUTPOINTTXHASH <1> OP_SPLIT OP_DROP OP_EQUALVERIFY <13> OP_OUTPOINTTXHASH <1> OP_SPLIT OP_DROP OP_EQUALVERIFY <42> OP_OUTPOINTTXHASH <1> OP_SPLIT OP_DROP OP_EQUAL", "multiple OP_OUTPOINTTXHASHs (50 inputs)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, ...{
        lockingBytecode: {
            script: string;
        };
        valueSatoshis: number;
    }[]];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, ...{
            outpointTransactionHash: string;
            unlockingBytecode: {
                script: string;
            };
        }[]];
    };
}], ["<0>", "<0> OP_OUTPOINTINDEX OP_EQUAL", "OP_OUTPOINTINDEX (input 0)"], ["<1>", "<1> OP_OUTPOINTINDEX OP_EQUAL", "OP_OUTPOINTINDEX (input 1)"], ["<0>", "<1> OP_OUTPOINTINDEX OP_EQUAL", "OP_OUTPOINTINDEX (input 1, expected 0)", readonly ["invalid"]], ["<1>", "<1> OP_OUTPOINTINDEX OP_EQUAL", "OP_OUTPOINTINDEX (input 1, 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly outpointIndex: 1;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
    };
}], ["<1>", "<0> OP_OUTPOINTINDEX OP_DROP", "OP_OUTPOINTINDEX (ignore result, input 0)"], ["<1>", "<1> OP_OUTPOINTINDEX OP_DROP", "OP_OUTPOINTINDEX (ignore result, input 1)"], ["<1>", "<0x0100> OP_OUTPOINTINDEX OP_DROP", "OP_OUTPOINTINDEX (ignore result, input 1, non-minimally encoded)", readonly ["invalid"]], ["<1>", "<-1> OP_OUTPOINTINDEX OP_DROP", "OP_OUTPOINTINDEX (ignore result, negative input)", readonly ["invalid"]], ["<1>", "<2> OP_OUTPOINTINDEX OP_DROP", "OP_OUTPOINTINDEX (ignore result, input 2, greater than maximum input index)", readonly ["invalid"]], ["<1>", "<2> OP_OUTPOINTINDEX OP_DROP", "OP_OUTPOINTINDEX (ignore result, input 2)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, ...{
        lockingBytecode: {
            script: string;
        };
        valueSatoshis: number;
    }[]];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, ...{
            unlockingBytecode: {
                script: string;
            };
        }[]];
    };
}], ["<42> <13> <3>", "<0> OP_OUTPOINTINDEX <0> OP_EQUALVERIFY <1> OP_OUTPOINTINDEX <1> OP_OUTPOINTINDEX OP_EQUALVERIFY <3> OP_OUTPOINTINDEX OP_EQUALVERIFY <13> OP_OUTPOINTINDEX OP_EQUALVERIFY <42> OP_OUTPOINTINDEX OP_EQUAL", "multiple OP_OUTPOINTINDEXs (50 inputs)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, ...{
        lockingBytecode: {
            script: string;
        };
        valueSatoshis: number;
    }[]];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, ...{
            outpointIndex: number;
            unlockingBytecode: {
                script: string;
            };
        }[]];
    };
}], ["<0>", "OP_INPUTBYTECODE <<0x7dfb529d352908ee0a88a0074c216b09793d6aa8c94c7640bb4ced51eaefc75d0aef61f7685d0307491e2628da3d4f91e86329265a4a58ca27a41ec0b8910779c3> <0x03a524f43d6166ad3567f18b0a5c769c6ab4dc02149f4d5095ccf4e8ffa293e785>> OP_EQUAL", "OP_INPUTBYTECODE (input 0)"], ["<1>", "OP_INPUTBYTECODE <<1>> OP_EQUAL", "OP_INPUTBYTECODE (self, P2S)", readonly ["p2sh_invalid"]], ["", "<1> OP_INPUTBYTECODE <0> OP_EQUAL", "OP_INPUTBYTECODE (self, empty input bytecode, P2S)", readonly ["p2sh_invalid"]], ["<OP_DUP OP_SIZE OP_SWAP OP_CAT OP_CODESEPARATOR OP_NIP OP_DUP OP_CAT OP_CODESEPARATOR <1> OP_INPUTBYTECODE OP_EQUALVERIFY <1>>", "OP_DUP OP_SIZE OP_SWAP OP_CAT OP_CODESEPARATOR OP_NIP OP_DUP OP_CAT OP_CODESEPARATOR <1> OP_INPUTBYTECODE OP_EQUALVERIFY <1>", "OP_INPUTBYTECODE, OP_CODESEPARATOR in redeem bytecode has no effect (self, P2SH)", readonly ["p2s_invalid"]], ["<1>", "OP_INPUTBYTECODE <2> OP_SPLIT OP_CODESEPARATOR OP_HASH160 <OP_HASH160 OP_PUSHBYTES_20> OP_SWAP OP_CAT <OP_EQUAL> OP_CAT OP_CODESEPARATOR <1> OP_UTXOBYTECODE OP_EQUALVERIFY <1> OP_SPLIT OP_DROP <<1>> OP_EQUAL", "OP_INPUTBYTECODE, OP_CODESEPARATOR in redeem bytecode has no effect (self, P2SH20, compare OP_UTXOBYTECODE)", readonly ["invalid", "p2sh20_standard"]], ["<1>", "OP_INPUTBYTECODE <2> OP_SPLIT OP_CODESEPARATOR OP_HASH256 <OP_HASH256 OP_PUSHBYTES_32> OP_SWAP OP_CAT <OP_EQUAL> OP_CAT OP_CODESEPARATOR <1> OP_UTXOBYTECODE OP_EQUALVERIFY <1> OP_SPLIT OP_DROP <<1>> OP_EQUAL", "OP_INPUTBYTECODE, OP_CODESEPARATOR in redeem bytecode has no effect (self, P2SH32, compare OP_UTXOBYTECODE)", readonly ["invalid", "p2sh32_standard"]], ["<1>", "OP_INPUTBYTECODE <1> OP_EQUAL", "OP_INPUTBYTECODE (input 1, expected missing OP_PUSHBYTES_1)", readonly ["invalid"]], ["<1>", "<0> OP_INPUTBYTECODE OP_DROP", "OP_INPUTBYTECODE (ignore result, input 0)"], ["<1>", "<1> OP_INPUTBYTECODE OP_DROP", "OP_INPUTBYTECODE (ignore result, input 1)"], ["<1>", "<0x0100> OP_INPUTBYTECODE OP_DROP", "OP_INPUTBYTECODE (ignore result, input 1, non-minimally encoded)", readonly ["invalid"]], ["<1>", "<-1> OP_INPUTBYTECODE OP_DROP", "OP_INPUTBYTECODE (ignore result, negative input)", readonly ["invalid"]], ["<1>", "<2> OP_INPUTBYTECODE OP_DROP", "OP_INPUTBYTECODE (ignore result, input 2, greater than maximum input index)", readonly ["invalid"]], ["<1>", "<2> OP_INPUTBYTECODE OP_DROP", "OP_INPUTBYTECODE (ignore result, input 2)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, ...{
        lockingBytecode: {
            script: string;
        };
        valueSatoshis: number;
    }[]];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, ...{
            unlockingBytecode: {
                script: string;
            };
        }[]];
    };
}], ["<<0x00 42> <<0x00 42> OP_EQUAL>> <<0x00 13> <<0x00 13> OP_EQUAL>> <<0x00 7> <<0x00 7> OP_EQUAL>> <<0x00 1> <<0x00 1> OP_EQUAL>>", "<0> OP_INPUTBYTECODE <0> OP_INPUTBYTECODE OP_EQUALVERIFY <1> OP_INPUTBYTECODE OP_EQUALVERIFY <7> OP_INPUTBYTECODE OP_EQUALVERIFY <13> OP_INPUTBYTECODE OP_EQUALVERIFY <42> OP_INPUTBYTECODE OP_EQUAL", "multiple OP_INPUTBYTECODEs (50 inputs)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, ...{
        lockingBytecode: {
            script: string;
        };
        valueSatoshis: number;
    }[]];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, ...{
            unlockingBytecode: {
                script: string;
            };
        }[]];
    };
}, {}], [`<0x${string}>`, `<<0x${string}>> <1> OP_INPUTBYTECODE OP_EQUAL OP_NIP`, "OP_INPUTBYTECODE (maximum size)", readonly ["p2s_nonstandard", "p2sh_invalid"]], [`<0x${string}>`, `<<0x${string}>> <1> OP_INPUTBYTECODE OP_EQUAL OP_NIP`, "OP_INPUTBYTECODE (excessive size)", readonly ["p2s_nonstandard", "p2sh_invalid", "2023_invalid"]], [`<1> <0x${string}>`, "OP_DROP <1> OP_INPUTBYTECODE OP_DROP", "OP_INPUTBYTECODE (ignore result, not 2023 excessive size)"], [`<1> <0x${string}>`, "OP_DROP <1> OP_INPUTBYTECODE OP_DROP", "OP_INPUTBYTECODE (ignore result, 2023 excessive size)", readonly ["2023_invalid"]], ["<0>", "<0> OP_INPUTSEQUENCENUMBER OP_EQUAL", "OP_INPUTSEQUENCENUMBER (input 0)"], ["<0>", "<1> OP_INPUTSEQUENCENUMBER OP_EQUAL", "OP_INPUTSEQUENCENUMBER (input 1)"], ["<1>", "<1> OP_INPUTSEQUENCENUMBER OP_EQUAL", "OP_INPUTSEQUENCENUMBER (input 1, expected 1)", readonly ["invalid"]], ["<1>", "<1> OP_INPUTSEQUENCENUMBER OP_EQUAL", "OP_INPUTSEQUENCENUMBER (input 1, 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly sequenceNumber: 1;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
    };
}], ["<4294967295>", "<0> OP_INPUTSEQUENCENUMBER OP_EQUAL", "OP_INPUTSEQUENCENUMBER (input 0 sequence number: 4294967295; disables locktime support)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly sequenceNumber: 4294967295;
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
    };
}], ["<4294967294>", "<1> OP_CHECKLOCKTIMEVERIFY OP_DROP <0> OP_INPUTSEQUENCENUMBER OP_EQUAL", "OP_INPUTSEQUENCENUMBER (input 0 sequence number: 4294967294; locktime not disabled)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly sequenceNumber: 4294967294;
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly locktime: 1;
    };
}], ["<4294967295>", "<1> OP_CHECKLOCKTIMEVERIFY OP_DROP <0> OP_INPUTSEQUENCENUMBER OP_EQUAL", "OP_INPUTSEQUENCENUMBER (input 0 sequence number: 4294967295; while locktime is not disabled for this transaction, it is disabled for input 0, causing a failure)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly sequenceNumber: 4294967295;
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly locktime: 1;
    };
}], ["<4294967295>", "<1> OP_INPUTSEQUENCENUMBER OP_EQUAL", "OP_INPUTSEQUENCENUMBER (input 1 sequence number: 4294967295; disables locktime support)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly sequenceNumber: 4294967295;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
    };
}], ["<4294967294>", "<1> OP_CHECKLOCKTIMEVERIFY OP_DROP <1> OP_INPUTSEQUENCENUMBER OP_EQUAL", "OP_INPUTSEQUENCENUMBER (input 1 sequence number: 4294967294; locktime enabled)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly sequenceNumber: 4294967294;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly locktime: 1;
    };
}], ["<4294967295>", "<1> OP_CHECKLOCKTIMEVERIFY OP_DROP <1> OP_INPUTSEQUENCENUMBER OP_EQUAL", "OP_INPUTSEQUENCENUMBER (input 1 sequence number: 4294967295; locktime is disabled for input 1, but remains enabled for input 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly sequenceNumber: 4294967295;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly locktime: 1;
    };
}], ["<1>", "<0> OP_INPUTSEQUENCENUMBER OP_DROP", "OP_INPUTSEQUENCENUMBER (ignore result, input 0)"], ["<1>", "<1> OP_INPUTSEQUENCENUMBER OP_DROP", "OP_INPUTSEQUENCENUMBER (ignore result, input 1)"], ["<1>", "<0x0100> OP_INPUTSEQUENCENUMBER OP_DROP", "OP_INPUTSEQUENCENUMBER (ignore result, input 1, non-minimally encoded)", readonly ["invalid"]], ["<1>", "<-1> OP_INPUTSEQUENCENUMBER OP_DROP", "OP_INPUTSEQUENCENUMBER (ignore result, negative input)", readonly ["invalid"]], ["<1>", "<2> OP_INPUTSEQUENCENUMBER OP_DROP", "OP_INPUTSEQUENCENUMBER (ignore result, input 2, greater than maximum input index)", readonly ["invalid"]], ["<1>", "<2> OP_INPUTSEQUENCENUMBER OP_DROP", "OP_INPUTSEQUENCENUMBER (ignore result, input 2)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, ...{
        lockingBytecode: {
            script: string;
        };
        valueSatoshis: number;
    }[]];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, ...{
            unlockingBytecode: {
                script: string;
            };
        }[]];
    };
}], ["<42> <13> <3>", "<0> OP_INPUTSEQUENCENUMBER <0> OP_EQUALVERIFY <1> OP_INPUTSEQUENCENUMBER <1> OP_INPUTSEQUENCENUMBER OP_EQUALVERIFY <3> OP_INPUTSEQUENCENUMBER OP_EQUALVERIFY <13> OP_INPUTSEQUENCENUMBER OP_EQUALVERIFY <42> OP_INPUTSEQUENCENUMBER OP_EQUAL", "multiple OP_INPUTSEQUENCENUMBERs (50 inputs)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
    }, ...{
        lockingBytecode: {
            script: string;
        };
        valueSatoshis: number;
    }[]];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, ...{
            sequenceNumber: number;
            unlockingBytecode: {
                script: string;
            };
        }[]];
    };
}], ["<0>", "<0> OP_OUTPUTVALUE OP_EQUAL", "OP_OUTPUTVALUE (output 0)"], ["<10_000>", "<0> OP_OUTPUTVALUE OP_EQUAL", "OP_OUTPUTVALUE (output 0, expected 10_000)", readonly ["invalid"]], ["<10_000>", "<0> OP_OUTPUTVALUE OP_EQUAL", "OP_OUTPUTVALUE (output 0, 10_000)", readonly [], {
    readonly transaction: {
        readonly outputs: [{
            readonly valueSatoshis: 10000;
        }];
    };
}], ["<1>", "<0> OP_OUTPUTVALUE OP_DROP", "OP_OUTPUTVALUE (ignore result, output 0)"], ["<1>", "<0x0000> OP_OUTPUTVALUE OP_DROP", "OP_OUTPUTVALUE (ignore result, output 0, non-minimally encoded)", readonly ["invalid"]], ["<1>", "<-1> OP_OUTPUTVALUE OP_DROP", "OP_OUTPUTVALUE (ignore result, negative output)", readonly ["invalid"], {
    readonly transaction: {
        readonly outputs: [{
            readonly valueSatoshis: 10000;
        }, {
            readonly valueSatoshis: 10001;
        }];
    };
}], ["<1>", "<2> OP_OUTPUTVALUE OP_DROP", "OP_OUTPUTVALUE (ignore result, output 2, greater than maximum output index)", readonly ["invalid"], {
    readonly transaction: {
        readonly outputs: [{
            readonly valueSatoshis: 10000;
        }, {
            readonly valueSatoshis: 10001;
        }];
    };
}], ["<1>", "<2> OP_OUTPUTVALUE OP_DROP", "OP_OUTPUTVALUE (ignore result, output 2)", readonly [], {
    readonly sourceOutputs: [import("../../lib.js").WalletTemplateScenarioSourceOutput, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 100000;
    }];
    readonly transaction: {
        readonly outputs: [{
            readonly valueSatoshis: 10000;
        }, {
            readonly valueSatoshis: 10001;
        }, {
            readonly valueSatoshis: 10002;
        }];
    };
}], ["<10_042> <10_013> <10_007> <10_001>", "<0> OP_OUTPUTVALUE <0> OP_OUTPUTVALUE OP_EQUALVERIFY <1> OP_OUTPUTVALUE OP_EQUALVERIFY <7> OP_OUTPUTVALUE OP_EQUALVERIFY <13> OP_OUTPUTVALUE OP_EQUALVERIFY <42> OP_OUTPUTVALUE OP_EQUAL", "multiple OP_OUTPUTVALUEs (50 inputs)", readonly [], {
    readonly sourceOutputs: [import("../../lib.js").WalletTemplateScenarioSourceOutput, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 1000000;
    }];
    readonly transaction: {
        readonly outputs: {
            valueSatoshis: number;
        }[];
    };
}], ["<123_456_789> <0>", "OP_OUTPUTVALUE OP_EQUAL", "OP_OUTPUTVALUE (1.23456789 BCH)", readonly [], {
    readonly sourceOutputs: [import("../../lib.js").WalletTemplateScenarioSourceOutput, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 1000000000;
    }];
    readonly transaction: {
        readonly outputs: [{
            readonly valueSatoshis: 123456789;
        }];
    };
}], ["<2_100_000_000_000_000> <0>", "OP_OUTPUTVALUE OP_EQUAL", "OP_OUTPUTVALUE (21,000,000 BCH)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 2100000000000000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: string;
        }];
    };
}], ["<9223372036854775807> <0>", "OP_OUTPUTVALUE OP_EQUAL", "OP_OUTPUTVALUE (maximum 8-byte number satoshis)", readonly ["invalid"], {
    readonly sourceOutputs: [import("../../lib.js").WalletTemplateScenarioSourceOutput, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: "ffffffffffffff7f";
    }];
    readonly transaction: {
        readonly outputs: [{
            readonly valueSatoshis: string;
        }];
    };
}], ["<OP_RETURN <\"vmb_test\">>", "<0> OP_OUTPUTBYTECODE OP_EQUAL", "OP_OUTPUTBYTECODE (output 0)"], ["<OP_RETURN>", "<0> OP_OUTPUTBYTECODE OP_EQUAL", "OP_OUTPUTBYTECODE (output 0, expected <OP_RETURN>)", readonly ["invalid"]], ["<OP_RETURN>", "<0> OP_OUTPUTBYTECODE OP_EQUAL", "OP_OUTPUTBYTECODE (output 0, <OP_RETURN>)", readonly [], {
    readonly transaction: {
        readonly outputs: [{
            readonly lockingBytecode: string;
            readonly valueSatoshis: 10000;
        }];
    };
}], ["<OP_DROP OP_CODESEPARATOR <1>>", "<0> OP_CODESEPARATOR OP_OUTPUTBYTECODE OP_EQUAL", "OP_OUTPUTBYTECODE, OP_CODESEPARATOR has no effect (output 0, <OP_DROP OP_CODESEPARATOR <1>>)", readonly ["2023_p2sh_nonstandard", "2025_p2sh_nonstandard"], {
    readonly transaction: {
        readonly outputs: [{
            readonly lockingBytecode: string;
            readonly valueSatoshis: 10000;
        }];
    };
}], ["<1>", "<0> OP_OUTPUTBYTECODE OP_DROP", "OP_OUTPUTBYTECODE (ignore result, output 0)"], ["<1>", "<0x0000> OP_OUTPUTBYTECODE OP_DROP", "OP_OUTPUTBYTECODE (ignore result, output 0, non-minimally encoded)", readonly ["invalid"]], ["<1>", "<-1> OP_OUTPUTBYTECODE OP_DROP", "OP_OUTPUTBYTECODE (ignore result, negative output index)", readonly ["invalid"], {
    readonly transaction: {
        readonly outputs: [{
            readonly valueSatoshis: 10000;
        }, {
            readonly valueSatoshis: 10001;
        }];
    };
}], ["<1>", "<2> OP_OUTPUTBYTECODE OP_DROP", "OP_OUTPUTBYTECODE (ignore result, output 2, greater than maximum output index)", readonly ["invalid"], {
    readonly transaction: {
        readonly outputs: [{
            readonly valueSatoshis: 10000;
        }, {
            readonly valueSatoshis: 10001;
        }];
    };
}], ["<1>", "<2> OP_OUTPUTBYTECODE OP_DROP", "OP_OUTPUTBYTECODE (ignore result, output 2)", readonly [], {
    readonly sourceOutputs: [import("../../lib.js").WalletTemplateScenarioSourceOutput, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 100000;
    }];
    readonly transaction: {
        readonly outputs: [{
            readonly valueSatoshis: 10000;
        }, {
            readonly valueSatoshis: 10001;
        }, {
            readonly valueSatoshis: 10002;
        }];
    };
}], ["<OP_RETURN <42>> <OP_RETURN <13>> <OP_RETURN <7>> <OP_RETURN <1>>", "<0> OP_OUTPUTBYTECODE <0> OP_OUTPUTBYTECODE OP_EQUALVERIFY <1> OP_OUTPUTBYTECODE OP_EQUALVERIFY <7> OP_OUTPUTBYTECODE OP_EQUALVERIFY <13> OP_OUTPUTBYTECODE OP_EQUALVERIFY <42> OP_OUTPUTBYTECODE OP_EQUAL", "multiple OP_OUTPUTBYTECODEs (50 inputs)", readonly [], {
    readonly sourceOutputs: [import("../../lib.js").WalletTemplateScenarioSourceOutput, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 100000000;
    }];
    readonly transaction: {
        readonly outputs: {
            lockingBytecode: string;
            valueSatoshis: number;
        }[];
    };
}], [`<OP_RETURN <0x${string}>>`, "<0> OP_OUTPUTBYTECODE OP_EQUAL", "OP_OUTPUTBYTECODE (maximum size)", readonly ["nonstandard"], {
    readonly transaction: {
        readonly outputs: [{
            readonly lockingBytecode: string;
        }];
    };
}], [`<OP_RETURN <0x${string}>>`, "<0> OP_OUTPUTBYTECODE OP_EQUAL", "OP_OUTPUTBYTECODE (excessive size)", readonly ["nonstandard", "2023_invalid"], {
    readonly transaction: {
        readonly outputs: [{
            readonly lockingBytecode: string;
        }];
    };
}], ["<1>", "<0> OP_OUTPUTBYTECODE OP_DROP", "OP_OUTPUTBYTECODE (ignore result, not 2023 excessive size)", readonly ["nonstandard"], {
    readonly transaction: {
        readonly outputs: [{
            readonly lockingBytecode: string;
        }];
    };
}], ["<1>", "<0> OP_OUTPUTBYTECODE OP_DROP", "OP_OUTPUTBYTECODE (ignore result, 2023 excessive size)", readonly ["nonstandard", "2023_invalid"], {
    readonly transaction: {
        readonly outputs: [{
            readonly lockingBytecode: string;
        }];
    };
}]]]];
export default _default;
//# sourceMappingURL=core.inspection.d.ts.map