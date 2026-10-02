declare const _default: [["CHIP-2022-02-CashTokens", [["", "<1>", "mint immutable NFT (with genesis input, index 0, 5-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable NFT (with genesis input, index 0, 5-byte commitment: P2SH20 dust, P2SH32 dust)", readonly ["p2sh_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 659;
        }];
    };
}], ["", "<1>", "mint immutable NFT (with genesis input, index 0, 5-byte commitment: P2SH20 non-dust minimum, P2SH32 dust)", readonly ["p2sh32_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 660;
        }];
    };
}], ["", "<1>", "mint immutable NFT (with genesis input, index 0, 5-byte commitment: P2SH32 dust maximum)", readonly ["p2sh32_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 695;
        }];
    };
}], ["", "<1>", "mint immutable NFT (with genesis input, index 0, 6-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "01020304ff00";
                };
            };
            readonly valueSatoshis: 699;
        }];
    };
}], ["", "<1>", "mint immutable NFT (with genesis input, index 0, 6-byte commitment: P2SH20 dust, P2SH32 dust)", readonly ["p2sh_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "01020304ff00";
                };
            };
            readonly valueSatoshis: 662;
        }];
    };
}], ["", "<1>", "mint immutable NFT (with genesis input, index 0, 6-byte commitment: P2SH20 non-dust minimum, P2SH32 dust)", readonly ["p2sh32_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "01020304ff00";
                };
            };
            readonly valueSatoshis: 663;
        }];
    };
}], ["", "<1>", "mint immutable NFT (with genesis input, index 0, 6-byte commitment: P2SH32 dust maximum)", readonly ["p2sh32_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "01020304ff00";
                };
            };
            readonly valueSatoshis: 698;
        }];
    };
}], ["", "<1>", "mint immutable NFT without authorization (pre-activation token forgery)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "010203ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable NFT (without genesis input)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 1;
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable NFT (with genesis input, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 1;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 0;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable NFT (wrong genesis input)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 1;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint multiple immutable NFTs (2 pairs of duplicates)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint mutable NFT (with genesis input, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint mutable NFT without authorization (pre-activation token forgery)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint mutable NFT (without genesis input)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 1;
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint mutable NFT (with genesis input, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 1;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 0;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint mutable NFT (wrong genesis input)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 1;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint multiple mutable NFTs (2 pairs of duplicates)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint minting NFT (with genesis input, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint minting NFT without authorization (pre-activation token forgery)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint minting NFT (without genesis input)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 1;
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint minting NFT (with genesis input, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 1;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 0;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint minting NFT (wrong genesis input)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 1;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint multiple minting NFTs (2 pairs of duplicates)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens (with genesis input, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: "9223372036854775806";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens (with genesis input, index 0, P2SH20 dust, P2SH32 dust)", readonly ["p2sh_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: "9223372036854775806";
            };
            readonly valueSatoshis: 668;
        }];
    };
}], ["", "<1>", "mint fungible tokens (with genesis input, index 0, P2SH20 non-dust minimum, P2SH32 dust)", readonly ["p2sh32_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: "9223372036854775806";
            };
            readonly valueSatoshis: 669;
        }];
    };
}], ["", "<1>", "mint fungible tokens (with genesis input, index 0, P2SH32 dust maximum)", readonly ["p2sh32_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: "9223372036854775806";
            };
            readonly valueSatoshis: 704;
        }];
    };
}], ["", "<1>", "mint fungible tokens (with genesis input, index 0, P2SH32 non-dust minimum)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: "9223372036854775806";
            };
            readonly valueSatoshis: 705;
        }];
    };
}], ["", "<1>", "mint fungible tokens without authorization (pre-activation token forgery)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: "9223372036854775807";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens (without genesis input)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 1;
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: "9223372036854775807";
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens (with genesis input, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 1;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 0;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens (wrong genesis input)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 1;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens to multiple outputs", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
            };
            readonly valueSatoshis: 2000;
        }, {
            readonly token: {
                readonly amount: 1000;
            };
            readonly valueSatoshis: 3000;
        }];
    };
}], ["", "<1>", "mint fungible token supply of 1", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
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
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly lockingBytecode: "ef010000000000000000000000000000000000000000000000000000000000000010016a";
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "attempt to mint fungible token supply of 0", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
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
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly lockingBytecode: "ef010000000000000000000000000000000000000000000000000000000000000010006a";
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible token supply of 253", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 253;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible token supply of 65535", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 65535;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible token supply of 4294967295", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 4294967295;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint maximum fungible token supply (9223372036854775807)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: "9223372036854775807";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint excessive fungible token supply (9223372036854775808)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: "9223372036854775808";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint maximum fungible token supply (4611686018427387903 + 4611686018427387904)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: "4611686018427387903";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "4611686018427387904";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint excessive fungible token supply (4611686018427387904 + 4611686018427387904)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: "4611686018427387904";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "4611686018427387904";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and immutable NFTs (with genesis input, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and immutable NFTs (with genesis input, index 0, P2SH20 dust, P2SH32 dust)", readonly ["p2sh_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 668;
        }];
    };
}], ["", "<1>", "mint fungible tokens and immutable NFTs (with genesis input, index 0, P2SH32 dust maximum)", readonly ["p2sh32_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 704;
        }];
    };
}], ["", "<1>", "mint fungible tokens and immutable NFTs (with genesis input, index 0, P2SH32 non-dust minimum)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 705;
        }];
    };
}], ["", "<1>", "mint fungible tokens and immutable NFT without authorization (pre-activation token forgery)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly commitment: "010203ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and immutable NFT (without genesis input)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 1;
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and immutable NFT (with genesis input, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 1;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 0;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and immutable NFT (wrong genesis input)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 1;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and multiple immutable NFTs (2 pairs of duplicates)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and mutable NFT (with genesis input, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and mutable NFT without authorization (pre-activation token forgery)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and mutable NFT (without genesis input)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 1;
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and mutable NFT (with genesis input, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 1;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 0;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and mutable NFT (wrong genesis input)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 1;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and multiple mutable NFTs (2 pairs of duplicates)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and minting NFT (with genesis input, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and minting NFT without authorization (pre-activation token forgery)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and minting NFT (without genesis input)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 1;
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and minting NFT (with genesis input, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 1;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 0;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and minting NFT (wrong genesis input)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 1;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens and multiple minting NFTs (2 pairs of duplicates)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint fungible tokens with mutable and immutable NFTs", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint all token types", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint all token types (output 0 P2SH32 non-dust minimum)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 699;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint all token types (output 0 P2SH20 dust)", readonly ["p2sh_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 662;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint all token types (output 0 P2S non-dust minimum)", readonly ["p2sh_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 597;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint all token types (output 0 P2S dust)", readonly ["nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 596;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint all token types (output 0 P2SH32 dust)", readonly ["p2sh32_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 663;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint all token types (output 1 P2SH32 non-dust minimum)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 705;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint all token types (output 1 P2SH20 dust)", readonly ["p2sh_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 668;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint all token types (output 1 P2SH32 dust)", readonly ["p2sh32_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 669;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint all token types (output 2 P2SH32 non-dust minimum)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 693;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint all token types (output 2 P2SH20 dust)", readonly ["p2sh_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 656;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint all token types (output 2 P2SH32 dust)", readonly ["p2sh32_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 657;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint all token types (output 3 P2SH32 non-dust minimum)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 705;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint all token types (output 3 P2SH20 dust)", readonly ["p2sh_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 668;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint all token types (output 3 P2SH32 dust)", readonly ["p2sh32_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65536;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
                readonly nft: {
                    readonly capability: "none";
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 669;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint multiple categories (fungible tokens, immutable tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 0;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 2000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint multiple categories (fungible tokens of wrong category, immutable tokens)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 0;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 2000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint maximum fungible supply for multiple categories", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 0;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: "4611686018427387903";
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "4611686018427387904";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "4611686018427387903";
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "4611686018427387904";
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint maximum fungible supply for multiple categories (excessive in one category)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 0;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: "4611686018427387904";
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "4611686018427387904";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "4611686018427387903";
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "4611686018427387904";
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable tokens while moving immutable tokens of another category (duplicate commitments)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
            readonly nft: {
                readonly commitment: "04050607";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
            readonly nft: {
                readonly commitment: "0405060708";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 1;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 2;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 0;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "04050607";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "0405060708";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
                readonly nft: {
                    readonly commitment: "04050607";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
                readonly nft: {
                    readonly commitment: "0405060708";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable tokens while moving immutable tokens of another category (attempt to modify a moved commitment)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
            readonly nft: {
                readonly commitment: "04050607";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
            readonly nft: {
                readonly commitment: "0405060708";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 1;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 2;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly outpointIndex: 0;
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "04050607";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "0405060708";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
                readonly nft: {
                    readonly commitment: "04050607";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
                readonly nft: {
                    readonly commitment: "04050607";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable NFT (0-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly commitment: "";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable NFT (1-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable NFT (2-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly commitment: "0102";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable NFT (3-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly commitment: "010203";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable NFT (4-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly commitment: "01020304";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable NFT (5-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly commitment: "0102030405";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable NFT (10-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly commitment: "01020304050607080900";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable NFT (20-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly commitment: "0102030405060708090001020304050607080900";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable NFT (30-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly commitment: "010203040506070809000102030405060708090001020304050607080900";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable NFT (40-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly commitment: "01020304050607080900010203040506070809000102030405060708090001020304050607080900";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable NFT (41-byte commitment)", readonly ["2023_invalid", "2025_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly commitment: "0102030405060708090001020304050607080900010203040506070809000102030405060708090001";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint immutable NFT (128-byte commitment)", readonly ["2023_invalid", "2025_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly commitment: "0102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708";
                };
            };
            readonly valueSatoshis: 1065;
        }];
    };
}], ["", "<1>", "mint immutable NFT (129-byte commitment)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly commitment: "010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809";
                };
            };
            readonly valueSatoshis: 2000;
        }];
    };
}], ["", "<1>", "mint immutable NFT (253-byte commitment)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 100000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly commitment: string;
                };
            };
            readonly valueSatoshis: 10000;
        }];
    };
}], ["", "<1>", "implicitly destroy fungible tokens", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "implicitly destroy fungible tokens (destroy all but 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "implicitly destroy fungible tokens (0 amount is invalid)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly lockingBytecode: "ef010000000000000000000000000000000000000000000000000000000000000010006a";
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "send fungible token", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "attempt to overspend fungible token amount (1 to 2)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 2;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "attempt to overspend fungible token amount (253 to 254)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 253;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 254;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "attempt to overspend fungible token amount (65535 to 65536)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 65535;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 65536;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "attempt to overspend fungible token amount (4294967295 to 4294967296)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 4294967295;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 4294967296;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "split fungible token outputs (1,000,000 to 2 * 500,000)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 500000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 500000;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "split fungible token outputs (attempt 1,000,000 to 1,000,001)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 500000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 500001;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "split fungible token outputs (1,000,000 to 500,000, implicit burn 500,000)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 500000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "split fungible token outputs (100,000 over 5 outputs)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 100000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 20000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 20000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 20000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 20000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 20000;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "split fungible token outputs (attempt 100,000 to 100,001)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 100000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 20000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 20000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 20000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 20001;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 20000;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "split fungible token outputs (10,000 unevenly)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 10000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 2000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 3000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4000;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "split fungible token outputs (attempt 10,000 to 10,001)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 10000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 2000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 3000;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4001;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge fungible token outputs (1 + 1 == 2)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 2;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge fungible token outputs (1 + 1 == 3)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 3;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge fungible token outputs (252 + 1 == 253)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 252;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 253;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge fungible token outputs (252 + 1 == 254)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 252;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 254;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge fungible token outputs (65535 + 1 == 65536)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 65535;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 65536;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge fungible token outputs (65535 + 1 == 65537)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 65535;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 65537;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge fungible token outputs (4294967295 + 1 == 4294967296)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 4294967295;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 4294967296;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge fungible token outputs (4294967295 + 1 == 4294967297)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 4294967295;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 4294967297;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge fungible token outputs (9223372036854775807 == 1 + 9223372036854775806)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: "9223372036854775807";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "9223372036854775806";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge fungible token outputs (9223372036854775807 == 1 + 9223372036854775807)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: "9223372036854775807";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "9223372036854775807";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge fungible token outputs (2 * 500,000 to 1,000,000)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 500000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 500000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000000;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge fungible token outputs (attempt 1,000,000 to 1,000,001)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 500000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 500000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000001;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge fungible token outputs (2 * 500,000 to 900,000, implicit burn 100,000)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 500000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 500000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 900000;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge fungible token outputs (5 inputs to 100,000)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 20000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 20000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 20000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 20000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 20000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100000;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge fungible token outputs (attempt 100,000 to 100,001)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 20000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 20000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 20000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 20000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 20000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100001;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge fungible token outputs (10,000 unevenly)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 2000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 3000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 4000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 10000;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge fungible token outputs (attempt 10,000 to 10,001)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 2000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 3000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 4000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 10001;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge/split fungible token outputs of multiple categories", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 3000;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 3000;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 3000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 4000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 2000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 2000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 2000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 7000;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "merge/split fungible token outputs of multiple categories (attempt amount increase)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 3000;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 3000;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 3000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 4000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 2000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 2000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 2000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 7001;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "implicitly destroy minting token", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "move minting token", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "duplicate minting token", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "duplicate minting token (from 2 to 3)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint 1 immutable token, destroy minting token", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint 1 immutable token, destroy minting token (attempt with minting token of wrong category)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint 1 immutable token, keep minting token", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint 1 immutable token, keep minting token (with modified commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint 9 immutable tokens, destroy minting token", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "02";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "03";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "04";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "05";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "06";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "07";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint 9 immutable tokens, keep minting token", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "02";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "03";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "04";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "05";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "06";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "07";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint multiple, maximum-sized immutable tokens, destroy minting token (limited by maximum transaction size)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 100000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: {
            token: {
                nft: {
                    commitment: string;
                };
            };
            valueSatoshis: number;
        }[];
    };
}], ["", "<1>", "mint mutable tokens, destroy minting token", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint multiple NFTs, various capabilities", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint multiple NFTs, various capabilities (attempt to mint a fungible token after genesis transaction)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint 2 immutable tokens while moving an mutable token (of the same category, burn minting token)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint 3 immutable tokens while dropping an immutable token (of the same category, burn minting token)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint an immutable token while splitting fungible token outputs (of the same category)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 10;
            readonly nft: {
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 5;
                readonly nft: {
                    readonly commitment: "040506";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 5;
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint an immutable token while minting fungible and minting tokens (genesis transaction) of a new category", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint an immutable token while minting fungible and minting tokens (genesis transaction) of a new category (attempt to add fungible tokens of original category)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000001";
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint an immutable token while modifying a mutable token of another category", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 2;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "050607";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "mint an immutable token while downgrading a mutable token of another category", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 2;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "050607";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "implicitly destroy mutable token", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "move mutable token", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "attempt to duplicate mutable token", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "attempt to duplicate mutable token (from 2 to 3)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "modify mutable token", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "downgrade mutable token to immutable token", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "modify and downgrade mutable token to immutable token", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "modify 2 mutable tokens of the same category", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "050607";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 2;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "modify 1 of 2 mutable tokens of the same category", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "050607";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 2;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "050607";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "downgrade 2 mutable tokens of the same category (modify one)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "050607";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 2;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "040506";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "downgrade 2 mutable tokens of the same category (modify both)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "050607";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 2;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "04050607";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "05060708";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "downgrade and modify 1 mutable token while moving 1 immutable token (of the same category)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "050607";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 2;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "040506";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "05060708";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "downgrade and modify 1 mutable token while moving 1 immutable token (of another category)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "050607";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 2;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "040506";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "05060708";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "attempt to swap commitments of one mutable and one immutable token of the same category", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "050607";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 2;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "040506";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "050607";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "modify 2 mutable tokens while dropping 1 immutable token of the same category", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 5;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "040506";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "040506";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "modify 2 mutable tokens while dropping 1 immutable token of the same category (attempt to only swap commitments)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 5;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "040506";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "040506";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "downgrade 2 mutable tokens while moving 1 immutable token of the same category", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 5;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "040506";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "downgrade 2 mutable tokens while moving 1 immutable token of the same category (attempt to modify immutable token)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 5;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "modify, downgrade, and/or destroy mutable tokens of multiple categories", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 100;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "040506";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "010203";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "modify, downgrade, and/or destroy mutable tokens of multiple categories (attempt with insufficient mutable tokens)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 100;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "040506";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "010203";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "implicitly destroy immutable token (4-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "010203ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "implicitly destroy immutable token (zero-length commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "move immutable token", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "010203ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "010203ff";
                };
            };
            readonly valueSatoshis: 693;
        }];
    };
}], ["", "<1>", "move immutable token (P2SH32 and P2SH20 dust)", readonly ["p2sh_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "010203ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "010203ff";
                };
            };
            readonly valueSatoshis: 656;
        }];
    };
}], ["", "<1>", "move immutable token (P2SH32 dust, 657)", readonly ["p2sh32_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "010203ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "010203ff";
                };
            };
            readonly valueSatoshis: 657;
        }];
    };
}], ["", "<1>", "move immutable token (P2SH32 dust, 692)", readonly ["p2sh32_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "010203ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "010203ff";
                };
            };
            readonly valueSatoshis: 692;
        }];
    };
}], ["", "<1>", "attempt to duplicate immutable token", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "attempt to duplicate immutable token (from 2 to 3)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "attempt to modify immutable token (slice off byte)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "010203ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "010203";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "attempt to modify immutable token (append byte)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "010203ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "010203ff00";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "attempt to upgrade immutable token to mutable", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "010203ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "010203ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "attempt to upgrade immutable token to minting", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "010203ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "move multiple immutable tokens with different commitments", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "02";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "03";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 100;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "03";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "02";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "move multiple immutable tokens with the same commitment", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 100;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "move multiple immutable tokens with the same commitment (attempt to drop a commitment)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 100;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "move 2 immutable tokens, drop 1 of the same category", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "040506";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "050607";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "060708";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 100;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "040506";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "060708";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "move multiple immutable tokens of multiple categories", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "02";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "02";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "02";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "02";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "03";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 100;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "02";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "02";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "02";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "02";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "03";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "move multiple immutable tokens of multiple categories (attempt to swap categories for duplicate commitments)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "02";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "02";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "02";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "02";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "03";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 100;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "02";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "02";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "02";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "02";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "03";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<1>", "move multiple immutable tokens of multiple categories (attempt to swap commitments across categories)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "02";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "02";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "02";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "02";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "03";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointIndex: 100;
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "03";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "02";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "02";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "02";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "02";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY <0x2200000000000000000000000000000000000000000000000000000000000022> OP_EQUAL", "OP_UTXOTOKENCATEGORY accepts an index and returns the category and capability (palindrome category to test without endianness)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly category: "2200000000000000000000000000000000000000000000000000000000000022";
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_UTXOTOKENCATEGORY accepts an index and returns the category and capability (expect correct endianness)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0> <0>", "OP_OUTPOINTTXHASH <0x0200000000000000000000000000000000000000000000000000000000000000> OP_DUP OP_TOALTSTACK OP_EQUALVERIFY OP_UTXOTOKENCATEGORY OP_FROMALTSTACK OP_EQUAL", "OP_UTXOTOKENCATEGORY endianness matches OP_OUTPOINTTXHASH", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "OP_UTXOTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_UTXOTOKENCATEGORY requires an index from the stack", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0x80>", "OP_UTXOTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_UTXOTOKENCATEGORY requires a minimally-encoded index from the stack (attempt negative zero)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_UTXOTOKENCATEGORY (at index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<-1>", "OP_UTXOTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_UTXOTOKENCATEGORY requires a positive index from the stack (attempt negative one)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<2>", "OP_UTXOTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_UTXOTOKENCATEGORY (excessive index)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY <0> OP_EQUAL", "OP_UTXOTOKENCATEGORY (transaction without tokens)", readonly ["p2s_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY <0> OP_EQUAL", "OP_UTXOTOKENCATEGORY (at index without tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_UTXOTOKENCATEGORY (expect category at index without tokens)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1> <0>", "OP_UTXOTOKENCATEGORY <0> OP_EQUALVERIFY OP_UTXOTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_UTXOTOKENCATEGORY (at two indexes)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0> <1>", "OP_UTXOTOKENCATEGORY <0> OP_EQUALVERIFY OP_UTXOTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_UTXOTOKENCATEGORY (at two indexes, expect swapped)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_UTXOTOKENCATEGORY (only fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 100;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY <0> OP_EQUAL", "OP_UTXOTOKENCATEGORY (only fungible tokens, index 0, expect none)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 100;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_UTXOTOKENCATEGORY (only fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCATEGORY <0x0300000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_UTXOTOKENCATEGORY (only fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_UTXOTOKENCATEGORY (immutable and fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 100;
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY <0> OP_EQUAL", "OP_UTXOTOKENCATEGORY (immutable and fungible tokens, index 0, expect none)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 100;
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_UTXOTOKENCATEGORY (immutable and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCATEGORY <0x0300000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_UTXOTOKENCATEGORY (immutable and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY <0x020000000000000000000000000000000000000000000000000000000000000001> OP_EQUAL", "OP_UTXOTOKENCATEGORY (only mutable token, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_UTXOTOKENCATEGORY (only mutable token, index 0, expect no capability)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCATEGORY <0x020000000000000000000000000000000000000000000000000000000000000001> OP_EQUAL", "OP_UTXOTOKENCATEGORY (only mutable token, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCATEGORY <0x03000000000000000000000000000000000000000000000000000000000000001> OP_EQUAL", "OP_UTXOTOKENCATEGORY (only mutable token, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY <0x020000000000000000000000000000000000000000000000000000000000000001> OP_EQUAL", "OP_UTXOTOKENCATEGORY (mutable and fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 100;
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY <0> OP_EQUAL", "OP_UTXOTOKENCATEGORY (mutable and fungible tokens, index 0, expect none)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 100;
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCATEGORY <0x020000000000000000000000000000000000000000000000000000000000000001> OP_EQUAL", "OP_UTXOTOKENCATEGORY (mutable and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCATEGORY <0x030000000000000000000000000000000000000000000000000000000000000001> OP_EQUAL", "OP_UTXOTOKENCATEGORY (mutable and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY <0x020000000000000000000000000000000000000000000000000000000000000002> OP_EQUAL", "OP_UTXOTOKENCATEGORY (only minting token, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY <0x020000000000000000000000000000000000000000000000000000000000000001> OP_EQUAL", "OP_UTXOTOKENCATEGORY (only minting token, index 0, expect mutable capability)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCATEGORY <0x020000000000000000000000000000000000000000000000000000000000000002> OP_EQUAL", "OP_UTXOTOKENCATEGORY (only minting token, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCATEGORY <0x03000000000000000000000000000000000000000000000000000000000000002> OP_EQUAL", "OP_UTXOTOKENCATEGORY (only minting token, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY <0x020000000000000000000000000000000000000000000000000000000000000002> OP_EQUAL", "OP_UTXOTOKENCATEGORY (minting and fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 100;
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY <0> OP_EQUAL", "OP_UTXOTOKENCATEGORY (minting and fungible tokens, index 0, expect none)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 100;
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCATEGORY <0x020000000000000000000000000000000000000000000000000000000000000002> OP_EQUAL", "OP_UTXOTOKENCATEGORY (minting and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCATEGORY <0x030000000000000000000000000000000000000000000000000000000000000002> OP_EQUAL", "OP_UTXOTOKENCATEGORY (minting and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY OP_SIZE <32> OP_EQUAL OP_NIP", "OP_UTXOTOKENCATEGORY (immutable result length is 32)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY OP_SIZE <33> OP_EQUAL OP_NIP", "OP_UTXOTOKENCATEGORY (immutable result length is 32, expect 33)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY OP_SIZE <33> OP_EQUAL OP_NIP", "OP_UTXOTOKENCATEGORY (mutable result length is 33)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY OP_SIZE <32> OP_EQUAL OP_NIP", "OP_UTXOTOKENCATEGORY (mutable result length is 33, expect 32)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY OP_SIZE <33> OP_EQUAL OP_NIP", "OP_UTXOTOKENCATEGORY (minting result length is 33)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCATEGORY OP_SIZE <32> OP_EQUAL OP_NIP", "OP_UTXOTOKENCATEGORY (minting result length is 33, expect 32)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<6> <5> <4> <3> <2> <0> <1>", "OP_UTXOTOKENCATEGORY <0x0300000000000000000000000000000000000000000000000000000000000000> OP_EQUALVERIFY OP_UTXOTOKENCATEGORY <0> OP_EQUALVERIFY OP_UTXOTOKENCATEGORY <0x0400000000000000000000000000000000000000000000000000000000000000> OP_EQUALVERIFY OP_UTXOTOKENCATEGORY <0x0500000000000000000000000000000000000000000000000000000000000000> OP_EQUALVERIFY OP_UTXOTOKENCATEGORY <0x060000000000000000000000000000000000000000000000000000000000000001> OP_EQUALVERIFY OP_UTXOTOKENCATEGORY <0x070000000000000000000000000000000000000000000000000000000000000002> OP_EQUALVERIFY OP_UTXOTOKENCATEGORY <0x080000000000000000000000000000000000000000000000000000000000000002> OP_EQUAL", "OP_UTXOTOKENCATEGORY (at multiple indexes, unordered)", readonly ["p2s_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000005";
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000006";
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000007";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000008";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<6> <5> <4> <3> <2> <0> <1>", "OP_UTXOTOKENCATEGORY <0x0300000000000000000000000000000000000000000000000000000000000000> OP_EQUALVERIFY OP_UTXOTOKENCATEGORY <0> OP_EQUALVERIFY OP_UTXOTOKENCATEGORY <0x0400000000000000000000000000000000000000000000000000000000000000> OP_EQUALVERIFY OP_UTXOTOKENCATEGORY <0x0500000000000000000000000000000000000000000000000000000000000000> OP_EQUALVERIFY OP_UTXOTOKENCATEGORY <0x060000000000000000000000000000000000000000000000000000000000000001> OP_EQUALVERIFY OP_UTXOTOKENCATEGORY <0x070000000000000000000000000000000000000000000000000000000000000002> OP_EQUALVERIFY OP_UTXOTOKENCATEGORY <0x0800000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_UTXOTOKENCATEGORY (at multiple indexes, unordered, expect missing capability)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000005";
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000006";
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000007";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000008";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0x2200000000000000000000000000000000000000000000000000000000000022> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY accepts an index and returns the category and capability (palindrome category to test without endianness)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "2200000000000000000000000000000000000000000000000000000000000022";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly category: "2200000000000000000000000000000000000000000000000000000000000022";
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY accepts an index and returns the category and capability (expect correct endianness)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0> <0>", "OP_OUTPOINTTXHASH <0x0200000000000000000000000000000000000000000000000000000000000000> OP_DUP OP_TOALTSTACK OP_EQUALVERIFY OP_OUTPUTTOKENCATEGORY OP_FROMALTSTACK OP_EQUAL", "OP_OUTPUTTOKENCATEGORY endianness matches OP_OUTPOINTTXHASH (in a genesis transaction)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY requires an index from the stack", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0x80>", "OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY requires a minimally-encoded index from the stack (attempt negative zero)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (at index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<-1>", "OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY requires a positive index from the stack (attempt negative one)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<2>", "OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (excessive index)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (transaction without tokens)", readonly ["p2s_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (at index without tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (expect category at index without tokens)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (non-genesis transaction, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (non-genesis transaction, at index without tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (non-genesis transaction, expect category at index without tokens)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1> <0>", "OP_OUTPUTTOKENCATEGORY <0> OP_EQUALVERIFY OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (at two indexes)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0> <1>", "OP_OUTPUTTOKENCATEGORY <0> OP_EQUALVERIFY OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (at two indexes, expect swapped)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1> <0>", "OP_OUTPUTTOKENCATEGORY <0> OP_EQUALVERIFY OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (non-genesis transaction, at two indexes)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0> <1>", "OP_OUTPUTTOKENCATEGORY <0> OP_EQUALVERIFY OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (non-genesis transaction, at two indexes, expect swapped)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (only fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (only fungible tokens, index 0, expect none)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (non-genesis transaction, only fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCATEGORY <0x0300000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (non-genesis transaction, only fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (immutable and fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (immutable and fungible tokens, index 0, expect none)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (non-genesis transaction, immutable and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCATEGORY <0x0300000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (non-genesis transaction, immutable and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0x020000000000000000000000000000000000000000000000000000000000000001> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (only mutable token, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (only mutable token, index 0, expect no capability)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCATEGORY <0x020000000000000000000000000000000000000000000000000000000000000001> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (non-genesis transaction, only mutable token, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCATEGORY <0x030000000000000000000000000000000000000000000000000000000000000001> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (non-genesis transaction, only mutable token, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0x020000000000000000000000000000000000000000000000000000000000000001> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (mutable and fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (mutable and fungible tokens, index 0, expect none)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCATEGORY <0x020000000000000000000000000000000000000000000000000000000000000001> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (non-genesis transaction, mutable and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCATEGORY <0x030000000000000000000000000000000000000000000000000000000000000001> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (non-genesis transaction, mutable and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0x020000000000000000000000000000000000000000000000000000000000000002> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (only minting token, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0x0200000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (only minting token, index 0, expect no capability)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCATEGORY <0x020000000000000000000000000000000000000000000000000000000000000002> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (non-genesis transaction, only minting token, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCATEGORY <0x030000000000000000000000000000000000000000000000000000000000000002> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (non-genesis transaction, only minting token, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0x020000000000000000000000000000000000000000000000000000000000000002> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (minting and fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY <0> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (minting and fungible tokens, index 0, expect none)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCATEGORY <0x020000000000000000000000000000000000000000000000000000000000000002> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (non-genesis transaction, minting and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCATEGORY <0x030000000000000000000000000000000000000000000000000000000000000002> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (non-genesis transaction, minting and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY OP_SIZE <32> OP_EQUAL OP_NIP", "OP_OUTPUTTOKENCATEGORY (immutable result length is 32)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY OP_SIZE <33> OP_EQUAL OP_NIP", "OP_OUTPUTTOKENCATEGORY (immutable result length is 32, expect 33)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY OP_SIZE <33> OP_EQUAL OP_NIP", "OP_OUTPUTTOKENCATEGORY (mutable result length is 33)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY OP_SIZE <32> OP_EQUAL OP_NIP", "OP_OUTPUTTOKENCATEGORY (mutable result length is 33, expect 32)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY OP_SIZE <33> OP_EQUAL OP_NIP", "OP_OUTPUTTOKENCATEGORY (minting result length is 33)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCATEGORY OP_SIZE <32> OP_EQUAL OP_NIP", "OP_OUTPUTTOKENCATEGORY (minting result length is 33, expect 32)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<6> <5> <4> <3> <2> <0> <1>", "OP_OUTPUTTOKENCATEGORY <0x0300000000000000000000000000000000000000000000000000000000000000> OP_EQUALVERIFY OP_OUTPUTTOKENCATEGORY <0> OP_EQUALVERIFY OP_OUTPUTTOKENCATEGORY <0x0400000000000000000000000000000000000000000000000000000000000000> OP_EQUALVERIFY OP_OUTPUTTOKENCATEGORY <0x0500000000000000000000000000000000000000000000000000000000000000> OP_EQUALVERIFY OP_OUTPUTTOKENCATEGORY <0x060000000000000000000000000000000000000000000000000000000000000001> OP_EQUALVERIFY OP_OUTPUTTOKENCATEGORY <0x070000000000000000000000000000000000000000000000000000000000000002> OP_EQUALVERIFY OP_OUTPUTTOKENCATEGORY <0x080000000000000000000000000000000000000000000000000000000000000002> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (at multiple indexes, unordered)", readonly ["p2s_nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000005";
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000007";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000008";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000006";
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "1";
                readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "1";
                readonly category: "0000000000000000000000000000000000000000000000000000000000000005";
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "1";
                readonly category: "0000000000000000000000000000000000000000000000000000000000000006";
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "1";
                readonly category: "0000000000000000000000000000000000000000000000000000000000000007";
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000008";
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<6> <5> <4> <3> <2> <0> <1>", "OP_OUTPUTTOKENCATEGORY <0x0300000000000000000000000000000000000000000000000000000000000000> OP_EQUALVERIFY OP_OUTPUTTOKENCATEGORY <0> OP_EQUALVERIFY OP_OUTPUTTOKENCATEGORY <0x0400000000000000000000000000000000000000000000000000000000000000> OP_EQUALVERIFY OP_OUTPUTTOKENCATEGORY <0x0500000000000000000000000000000000000000000000000000000000000000> OP_EQUALVERIFY OP_OUTPUTTOKENCATEGORY <0x060000000000000000000000000000000000000000000000000000000000000001> OP_EQUALVERIFY OP_OUTPUTTOKENCATEGORY <0x070000000000000000000000000000000000000000000000000000000000000002> OP_EQUALVERIFY OP_OUTPUTTOKENCATEGORY <0x0800000000000000000000000000000000000000000000000000000000000000> OP_EQUAL", "OP_OUTPUTTOKENCATEGORY (at multiple indexes, unordered, expect missing capability)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000005";
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000007";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000008";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000006";
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "1";
                readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "1";
                readonly category: "0000000000000000000000000000000000000000000000000000000000000005";
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "1";
                readonly category: "0000000000000000000000000000000000000000000000000000000000000006";
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "1";
                readonly category: "0000000000000000000000000000000000000000000000000000000000000007";
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000008";
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT accepts an index and returns the commitment (zero-length commitment)", readonly ["p2s_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0x00> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT accepts an index and returns the commitment (zero-length commitment, expect 0x00)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <1> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT accepts an index and returns the commitment (1-byte commitment)", readonly ["p2s_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "OP_UTXOTOKENCOMMITMENT <1> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT requires an index from the stack", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0x80>", "OP_UTXOTOKENCOMMITMENT <1> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT requires a minimally-encoded index from the stack (attempt negative zero)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0x01020304050607080900> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT accepts an index and returns the commitment (10-byte commitment, tests endianness)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "01020304050607080900";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0x01020304050607080900010203040506070809000102030405060708090001020304050607080900> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT accepts an index and returns the commitment (40-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "01020304050607080900010203040506070809000102030405060708090001020304050607080900";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0x0102030405060708090001020304050607080900010203040506070809000102030405060708090001> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT accepts an index and returns the commitment (41-byte commitment)", readonly ["2023_invalid", "2025_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "0102030405060708090001020304050607080900010203040506070809000102030405060708090001";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0x0102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT accepts an index and returns the commitment (128-byte commitment)", readonly ["2023_invalid", "2025_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "0102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1065;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0x010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT accepts an index and returns the commitment (129-byte commitment: excessive length)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 5000;
        }];
    };
}], ["<0>", `OP_UTXOTOKENCOMMITMENT <0x${string}> OP_EQUAL`, "OP_UTXOTOKENCOMMITMENT accepts an index and returns the commitment (253-byte commitment: must be parsable by all implementations, but disabled by consensus)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: string;
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 5000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (at index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<-1>", "OP_UTXOTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT requires a positive index from the stack (attempt negative one)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<2>", "OP_UTXOTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (excessive index)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (transaction without tokens)", readonly ["p2s_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (at index without tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (expect commitment at index without tokens)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1> <0>", "OP_UTXOTOKENCOMMITMENT <0> OP_EQUALVERIFY OP_UTXOTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (at two indexes)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0> <1>", "OP_UTXOTOKENCOMMITMENT <0> OP_EQUALVERIFY OP_UTXOTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (at two indexes, expect swapped)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (only fungible tokens, index 0)", readonly ["p2s_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 100;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCOMMITMENT <0> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (only fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCOMMITMENT <0> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (only fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (immutable and fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 100;
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (immutable and fungible tokens, index 0, expect zero-length)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 100;
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (immutable and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (immutable and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0xee> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (only mutable token, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ee";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCOMMITMENT <0xee> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (only mutable token, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ee";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCOMMITMENT <0xee> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (only mutable token, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ee";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (mutable and fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 100;
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (mutable and fungible tokens, index 0, expect zero-length)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 100;
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (mutable and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (mutable and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0xee> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (only minting token, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ee";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCOMMITMENT <0xee> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (only minting token, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ee";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCOMMITMENT <0xee> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (only minting token, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ee";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (minting and fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 100;
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENCOMMITMENT <0> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (minting and fungible tokens, index 0, expect zero-length)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 100;
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (minting and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (minting and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<6> <5> <4> <3> <2> <0> <1>", "OP_UTXOTOKENCOMMITMENT <0> OP_EQUALVERIFY OP_UTXOTOKENCOMMITMENT <0> OP_EQUALVERIFY OP_UTXOTOKENCOMMITMENT <0> OP_EQUALVERIFY OP_UTXOTOKENCOMMITMENT <1> OP_EQUALVERIFY OP_UTXOTOKENCOMMITMENT <0x0102> OP_EQUALVERIFY OP_UTXOTOKENCOMMITMENT <0x010203> OP_EQUALVERIFY OP_UTXOTOKENCOMMITMENT <0x01020304> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (at multiple indexes, multiple categories, unordered)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "0102";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "010203";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "01020304";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<6> <5> <4> <3> <2> <0> <1>", "OP_UTXOTOKENCOMMITMENT <0x00> OP_EQUALVERIFY OP_UTXOTOKENCOMMITMENT <0> OP_EQUALVERIFY OP_UTXOTOKENCOMMITMENT <0> OP_EQUALVERIFY OP_UTXOTOKENCOMMITMENT <1> OP_EQUALVERIFY OP_UTXOTOKENCOMMITMENT <0x0102> OP_EQUALVERIFY OP_UTXOTOKENCOMMITMENT <0x010203> OP_EQUALVERIFY OP_UTXOTOKENCOMMITMENT <0x01020304> OP_EQUAL", "OP_UTXOTOKENCOMMITMENT (at multiple indexes, multiple categories, unordered, expect padding for zero-length)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "0102";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "010203";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "01020304";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT accepts an index and returns the commitment (zero-length commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT accepts an index and returns the commitment (non-genesis transaction, zero-length commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0x00> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT accepts an index and returns the commitment (zero-length commitment, expect 0x00)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <1> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT accepts an index and returns the commitment (1-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "OP_OUTPUTTOKENCOMMITMENT <1> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT requires an index from the stack", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0x80>", "OP_OUTPUTTOKENCOMMITMENT <1> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT requires a minimally-encoded index from the stack (attempt negative zero)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0x01020304050607080900> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT accepts an index and returns the commitment (10-byte commitment, tests endianness)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "01020304050607080900";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0x01020304050607080900010203040506070809000102030405060708090001020304050607080900> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT accepts an index and returns the commitment (40-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "01020304050607080900010203040506070809000102030405060708090001020304050607080900";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0x0102030405060708090001020304050607080900010203040506070809000102030405060708090001> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT accepts an index and returns the commitment (41-byte commitment)", readonly ["2023_invalid", "2025_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "0102030405060708090001020304050607080900010203040506070809000102030405060708090001";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0x0102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT accepts an index and returns the commitment (128-byte commitment)", readonly ["2023_invalid", "2025_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "0102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708";
                };
            };
            readonly valueSatoshis: 1362;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0x010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT accepts an index and returns the commitment (129-byte commitment: excessive length)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: "010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809000102030405060708090001020304050607080900010203040506070809";
                };
            };
            readonly valueSatoshis: 5000;
        }];
    };
}], ["<0>", `OP_OUTPUTTOKENCOMMITMENT <0x${string}> OP_EQUAL`, "OP_OUTPUTTOKENCOMMITMENT accepts an index and returns the commitment (253-byte commitment: must be parsable by all implementations, but disabled by consensus)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 100000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly commitment: string;
                };
            };
            readonly valueSatoshis: 10000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (at index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<-1>", "OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT requires a positive index from the stack (attempt negative one)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<2>", "OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (excessive index)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (transaction without tokens)", readonly ["p2s_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (at index without tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (expect commitment at index without tokens)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (non-genesis transaction, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (non-genesis transaction, at index without tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (non-genesis transaction, expect commitment at index without tokens)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1> <0>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (at two indexes)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0> <1>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (at two indexes, expect swapped)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1> <0>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (non-genesis transaction, at two indexes)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0> <1>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (non-genesis transaction, at two indexes, expect swapped)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (only fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (non-genesis transaction, only fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (non-genesis transaction, only fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (immutable and fungible tokens, index 0, zero-length commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (immutable and fungible tokens, index 0, 1-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (immutable and fungible tokens, index 0, 1-byte commitment, expect 0)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (non-genesis transaction, immutable and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (non-genesis transaction, immutable and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (only mutable token, index 0, zero-length commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0x0102> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (only mutable token, index 0, 2-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "0102";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCOMMITMENT <0x0102> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (non-genesis transaction, only mutable token, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "0102";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "0102";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCOMMITMENT <0x0102> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (non-genesis transaction, only mutable token, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "0102";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "0102";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (mutable and fungible tokens, index 0, zero-length commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (mutable and fungible tokens, index 0, 1-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (mutable and fungible tokens, index 0, 1-byte commitment, expect 0)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (non-genesis transaction, mutable and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (non-genesis transaction, mutable and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (only minting token, index 0, zero-length commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0x0102> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (only minting token, index 0, 2-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "0102";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCOMMITMENT <0x0102> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (non-genesis transaction, only minting token, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "0102";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "0102";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCOMMITMENT <0x0102> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (non-genesis transaction, only minting token, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "0102";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "0102";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (minting and fungible tokens, index 0, zero-length commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (minting and fungible tokens, index 0, 1-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (minting and fungible tokens, index 0, 1-byte commitment, expect 0)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 100;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (non-genesis transaction, minting and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENCOMMITMENT <0xff> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (non-genesis transaction, minting and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<7> <6> <5> <4> <3> <2> <0> <1>", "OP_OUTPUTTOKENCOMMITMENT <0x01020304> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0x010203> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0x0102> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0x0102030405> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0x01> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (at multiple indexes, multiple categories, unordered)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "01020304";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "0102";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 2;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
                readonly nft: {
                    readonly commitment: "0102030405";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<7> <6> <5> <4> <3> <2> <0> <1>", "OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0x010203> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0x0102> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0x0102030405> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0x01> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUALVERIFY OP_OUTPUTTOKENCOMMITMENT <0> OP_EQUAL", "OP_OUTPUTTOKENCOMMITMENT (at multiple indexes, multiple categories, unordered, expect zero-length commitment at index 1)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "1";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "01020304";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "010203";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "0102";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 2;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
                readonly nft: {
                    readonly commitment: "0102030405";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <1> OP_EQUAL", "OP_UTXOTOKENAMOUNT accepts an index and returns the token amount (1 fungible token)", readonly ["p2s_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <2> OP_EQUAL", "OP_UTXOTOKENAMOUNT accepts an index and returns the token amount (1 fungible token, expect 2)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <253> OP_EQUAL", "OP_UTXOTOKENAMOUNT accepts an index and returns the token amount (253 fungible tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 253;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <65536> OP_EQUAL", "OP_UTXOTOKENAMOUNT accepts an index and returns the token amount (65536 fungible tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 65536;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <4294967296> OP_EQUAL", "OP_UTXOTOKENAMOUNT accepts an index and returns the token amount (4294967296 fungible tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 4294967296;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <9223372036854775807> OP_EQUAL", "OP_UTXOTOKENAMOUNT accepts an index and returns the token amount (maximum fungible tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: "9223372036854775807";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <9223372036854775808> OP_EQUAL", "OP_UTXOTOKENAMOUNT accepts an index and returns the token amount (excessive fungible tokens)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: "9223372036854775808";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "OP_UTXOTOKENAMOUNT <1> OP_EQUAL", "OP_UTXOTOKENAMOUNT requires an index from the stack", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0x80>", "OP_UTXOTOKENAMOUNT <1> OP_EQUAL", "OP_UTXOTOKENAMOUNT requires a minimally-encoded index from the stack (attempt negative zero)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENAMOUNT <1> OP_EQUAL", "OP_UTXOTOKENAMOUNT (at index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<-1>", "OP_UTXOTOKENAMOUNT <1> OP_EQUAL", "OP_UTXOTOKENAMOUNT requires a positive index from the stack (attempt negative one)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<2>", "OP_UTXOTOKENAMOUNT <1> OP_EQUAL", "OP_UTXOTOKENAMOUNT (excessive index)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <0> OP_EQUAL", "OP_UTXOTOKENAMOUNT (transaction without tokens)", readonly ["p2s_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <0> OP_EQUAL", "OP_UTXOTOKENAMOUNT (at index without tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <1> OP_EQUAL", "OP_UTXOTOKENAMOUNT (expect amount at index without tokens)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1> <0>", "OP_UTXOTOKENAMOUNT <0> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <1> OP_EQUAL", "OP_UTXOTOKENAMOUNT (at two indexes)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0> <1>", "OP_UTXOTOKENAMOUNT <0> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <1> OP_EQUAL", "OP_UTXOTOKENAMOUNT (at two indexes, expect swapped)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <1000> OP_EQUAL", "OP_UTXOTOKENAMOUNT (only fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENAMOUNT <1000> OP_EQUAL", "OP_UTXOTOKENAMOUNT (only fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENAMOUNT <1000> OP_EQUAL", "OP_UTXOTOKENAMOUNT (only fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <1000> OP_EQUAL", "OP_UTXOTOKENAMOUNT (immutable and fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <0> OP_EQUAL", "OP_UTXOTOKENAMOUNT (immutable and fungible tokens, index 0, expect 0)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENAMOUNT <1000> OP_EQUAL", "OP_UTXOTOKENAMOUNT (immutable and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENAMOUNT <1000> OP_EQUAL", "OP_UTXOTOKENAMOUNT (immutable and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <0> OP_EQUAL", "OP_UTXOTOKENAMOUNT (only mutable token, index 0)", readonly ["p2s_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ee";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENAMOUNT <0> OP_EQUAL", "OP_UTXOTOKENAMOUNT (only mutable token, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ee";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENAMOUNT <0> OP_EQUAL", "OP_UTXOTOKENAMOUNT (only mutable token, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ee";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <1000> OP_EQUAL", "OP_UTXOTOKENAMOUNT (mutable and fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <0> OP_EQUAL", "OP_UTXOTOKENAMOUNT (mutable and fungible tokens, index 0, expect 0)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENAMOUNT <1000> OP_EQUAL", "OP_UTXOTOKENAMOUNT (mutable and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENAMOUNT <1000> OP_EQUAL", "OP_UTXOTOKENAMOUNT (mutable and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <0> OP_EQUAL", "OP_UTXOTOKENAMOUNT (only minting token, index 0)", readonly ["p2s_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ee";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENAMOUNT <0> OP_EQUAL", "OP_UTXOTOKENAMOUNT (only minting token, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ee";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENAMOUNT <0> OP_EQUAL", "OP_UTXOTOKENAMOUNT (only minting token, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ee";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <1000> OP_EQUAL", "OP_UTXOTOKENAMOUNT (minting and fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_UTXOTOKENAMOUNT <0> OP_EQUAL", "OP_UTXOTOKENAMOUNT (minting and fungible tokens, index 0, expect amount of 0)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENAMOUNT <1000> OP_EQUAL", "OP_UTXOTOKENAMOUNT (minting and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_UTXOTOKENAMOUNT <1000> OP_EQUAL", "OP_UTXOTOKENAMOUNT (minting and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1000;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<8> <7> <6> <5> <4> <3> <2> <0> <1>", "OP_UTXOTOKENAMOUNT <0> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <0> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <1> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <252> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <253> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <65535> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <4294967295> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <4294967296> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <9223372036854775807> OP_EQUAL", "OP_UTXOTOKENAMOUNT (at multiple indexes, multiple categories, unordered)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 252;
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 253;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 65535;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 4294967295;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 4294967296;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "9223372036854775807";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<8> <7> <6> <5> <4> <3> <2> <0> <1>", "OP_UTXOTOKENAMOUNT <0> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <1> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <1> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <252> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <253> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <65535> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <4294967295> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <4294967296> OP_EQUALVERIFY OP_UTXOTOKENAMOUNT <9223372036854775807> OP_EQUAL", "OP_UTXOTOKENAMOUNT (at multiple indexes, multiple categories, unordered, expect incorrect amount of 1 at index 0)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 252;
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 253;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 65535;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 4294967295;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 4294967296;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "9223372036854775807";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <1> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT accepts an index and returns the token amount (1 fungible token)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <2> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT accepts an index and returns the token amount (1 fungible token, expect 2)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <1> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT accepts an index and returns the token amount (non-genesis transaction, 1 fungible token)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <2> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT accepts an index and returns the token amount (non-genesis transaction, 1 fungible token, expect 2)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <250> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT accepts an index and returns the token amount (250 fungible tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 250;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <65530> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT accepts an index and returns the token amount (65530 fungible tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 65530;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <4294967290> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT accepts an index and returns the token amount (4294967290 fungible tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 4294967290;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <9223372036854775807> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT accepts an index and returns the token amount (maximum fungible tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: "9223372036854775807";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <9223372036854775808> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT accepts an index and returns the token amount (excessive fungible tokens)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: "9223372036854775808";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "OP_OUTPUTTOKENAMOUNT <1> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT requires an index from the stack", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0x80>", "OP_OUTPUTTOKENAMOUNT <1> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT requires a minimally-encoded index from the stack (attempt negative zero)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <1> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (at index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<-1>", "OP_OUTPUTTOKENAMOUNT <1> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT requires a positive index from the stack (attempt negative one)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<2>", "OP_OUTPUTTOKENAMOUNT <1> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (excessive index)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (transaction without tokens)", readonly ["p2s_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (at index without tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <1> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (expect amount at index without tokens)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <1> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (non-genesis transaction, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (non-genesis transaction, at index without tokens)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <1> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (non-genesis transaction, expect commitment at index without tokens)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1> <0>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <1> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (at two indexes)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0> <1>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <1> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (at two indexes, expect swapped)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1> <0>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <1> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (non-genesis transaction, at two indexes)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0> <1>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <1> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (non-genesis transaction, at two indexes, expect swapped)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (only fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (non-genesis transaction, only fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1000;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (non-genesis transaction, only fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1000;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (immutable and fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (immutable and fungible tokens, index 0, expect 0)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <10000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (immutable and fungible tokens, index 0, 1-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 10000;
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (immutable and fungible tokens, index 0, 1-byte commitment, expect 0)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 10000;
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (immutable and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (non-genesis transaction, immutable and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1000;
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (immutable and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (non-genesis transaction, immutable and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1000;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (only mutable token, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (non-genesis transaction, only mutable token, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1000;
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (non-genesis transaction, only mutable token, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1000;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (mutable and fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (mutable and fungible tokens, index 0, expect 0)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <10000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (mutable and fungible tokens, index 0, 1-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 10000;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (mutable and fungible tokens, index 0, 1-byte commitment, expect 0)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 10000;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (mutable and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (non-genesis transaction, mutable and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1000;
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (mutable and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (non-genesis transaction, mutable and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1000;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "mutable";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (only minting token, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (non-genesis transaction, only minting token, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1000;
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (non-genesis transaction, only minting token, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1000;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (minting and fungible tokens, index 0)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (minting and fungible tokens, index 0, expect 0)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <10000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (minting and fungible tokens, index 0, 1-byte commitment)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 10000;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (minting and fungible tokens, index 0, 1-byte commitment, expect 0)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly amount: 10000;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (minting and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (non-genesis transaction, minting and fungible tokens, index 1)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1000;
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (minting and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<1>", "OP_OUTPUTTOKENAMOUNT <1000> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (non-genesis transaction, minting and fungible tokens, index 1, category 0x00...03)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1000;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
                readonly commitment: "ff";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1000;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "minting";
                    readonly commitment: "ff";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<8> <7> <6> <5> <4> <3> <2> <0> <1>", "OP_OUTPUTTOKENAMOUNT <0> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <0> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <1> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <4294967296> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <252> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <253> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <9223372036854775807> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <65535> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <4294967295> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (at multiple indexes, multiple categories, unordered)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 252;
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 253;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 65535;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 4294967295;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 4294967296;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "9223372036854775807";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 252;
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "9223372036854775807";
                readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65535;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967295;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<8> <7> <6> <5> <4> <3> <2> <0> <1>", "OP_OUTPUTTOKENAMOUNT <1> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <0> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <1> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <4294967296> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <252> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <253> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <9223372036854775807> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <65535> OP_EQUALVERIFY OP_OUTPUTTOKENAMOUNT <4294967295> OP_EQUAL", "OP_OUTPUTTOKENAMOUNT (at multiple indexes, multiple categories, unordered, expect incorrect amount at index 1)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 1;
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 252;
            readonly nft: {
                readonly commitment: "01";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 253;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "mutable";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 65535;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 4294967295;
            readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
            readonly nft: {
                readonly capability: "minting";
            };
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: 4294967296;
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly amount: "9223372036854775807";
            readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }];
        readonly outputs: [{
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 1;
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967296;
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 252;
                readonly nft: {
                    readonly commitment: "01";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 253;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "mutable";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: "9223372036854775807";
                readonly category: "0000000000000000000000000000000000000000000000000000000000000004";
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 65535;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly amount: 4294967295;
                readonly category: "0000000000000000000000000000000000000000000000000000000000000003";
                readonly nft: {
                    readonly capability: "minting";
                };
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<0xa914b472a266d0bd89c13706a4132ccfb16f7c3b9fcb87>", "<0> OP_UTXOBYTECODE OP_EQUAL", "OP_UTXOBYTECODE (sibling with token prefix)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: {
            readonly script: "lockEmptyP2sh20";
        };
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }, {
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: {
                readonly script: "unlockEmptyP2sh20";
            };
        }, {
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }, {
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<OP_ACTIVEBYTECODE OP_EQUAL>", "OP_ACTIVEBYTECODE OP_EQUAL", "OP_ACTIVEBYTECODE returns the bytecode currently being evaluated (with token prefix)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["<OP_RETURN <\"vmb_test\">>", "<0> OP_OUTPUTBYTECODE OP_EQUAL", "OP_OUTPUTBYTECODE (sibling with token prefix)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly token: {
            readonly nft: {};
        };
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly lockingBytecode: string;
            readonly token: {
                readonly nft: {};
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<0> OP_OUTPUTBYTECODE OP_SIZE <47> OP_EQUAL OP_NIP", "OP_OUTPUTBYTECODE includes token prefix before upgrade (length 47, expect 47)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly lockingBytecode: string;
            readonly token: {
                readonly amount: 253;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<0> OP_OUTPUTBYTECODE OP_SIZE <46> OP_EQUAL OP_NIP", "OP_OUTPUTBYTECODE includes token prefix before upgrade (length 47, expect 46)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly lockingBytecode: string;
            readonly token: {
                readonly amount: 253;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<0> OP_OUTPUTBYTECODE OP_SIZE <520> OP_EQUAL OP_NIP", "OP_OUTPUTBYTECODE includes token prefix before upgrade (length 520, expect 520)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly lockingBytecode: string;
            readonly token: {
                readonly amount: 253;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<0> OP_OUTPUTBYTECODE OP_SIZE <521> OP_EQUAL OP_NIP", "OP_OUTPUTBYTECODE includes token prefix before upgrade (length 521, expect 521)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly lockingBytecode: string;
            readonly token: {
                readonly amount: 253;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<0> OP_OUTPUTBYTECODE OP_SIZE <10> OP_EQUAL OP_NIP", "OP_OUTPUTBYTECODE excludes token prefix after upgrade (length 10, expect 10)", readonly [], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly lockingBytecode: string;
            readonly token: {
                readonly amount: 253;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<0> OP_OUTPUTBYTECODE OP_SIZE <11> OP_EQUAL OP_NIP", "OP_OUTPUTBYTECODE excludes token prefix after upgrade (length 10, expect 11)", readonly ["invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly lockingBytecode: string;
            readonly token: {
                readonly amount: 253;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<0> OP_OUTPUTBYTECODE OP_SIZE <520> OP_EQUAL OP_NIP", "OP_OUTPUTBYTECODE excludes token prefix after upgrade (length 520, expect 520)", readonly ["nonstandard"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly lockingBytecode: string;
            readonly token: {
                readonly amount: 253;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}], ["", "<0> OP_OUTPUTBYTECODE OP_SIZE <521> OP_EQUAL OP_NIP", "OP_OUTPUTBYTECODE excludes token prefix after upgrade (length 521, expect 521)", readonly ["nonstandard", "2023_invalid"], {
    readonly sourceOutputs: [{
        readonly lockingBytecode: ["slot"];
        readonly valueSatoshis: 10000;
    }];
    readonly transaction: {
        readonly inputs: [{
            readonly outpointTransactionHash: "0000000000000000000000000000000000000000000000000000000000000002";
            readonly unlockingBytecode: ["slot"];
        }];
        readonly outputs: [{
            readonly lockingBytecode: string;
            readonly token: {
                readonly amount: 253;
            };
            readonly valueSatoshis: 1000;
        }];
    };
}]]]];
export default _default;
//# sourceMappingURL=core.cashtokens.d.ts.map