declare const sha1: import("./dependencies.js").HashFunction & {
    final: (rawState: Uint8Array) => Uint8Array;
    hash: (input: Uint8Array) => Uint8Array;
    init: () => Uint8Array;
    update: (rawState: Uint8Array, input: Uint8Array) => Uint8Array;
}, sha256: import("./dependencies.js").HashFunction & {
    final: (rawState: Uint8Array) => Uint8Array;
    hash: (input: Uint8Array) => Uint8Array;
    init: () => Uint8Array;
    update: (rawState: Uint8Array, input: Uint8Array) => Uint8Array;
}, sha512: import("./dependencies.js").HashFunction & {
    final: (rawState: Uint8Array) => Uint8Array;
    hash: (input: Uint8Array) => Uint8Array;
    init: () => Uint8Array;
    update: (rawState: Uint8Array, input: Uint8Array) => Uint8Array;
}, ripemd160: import("./dependencies.js").HashFunction & {
    final: (rawState: Uint8Array) => Uint8Array;
    hash: (input: Uint8Array) => Uint8Array;
    init: () => Uint8Array;
    update: (rawState: Uint8Array, input: Uint8Array) => Uint8Array;
}, secp256k1: import("./secp256k1-types.js").Secp256k1;
export { ripemd160, secp256k1, sha1, sha256, sha512 };
//# sourceMappingURL=default-crypto-instances.d.ts.map