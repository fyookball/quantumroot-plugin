import { base64ToBin, instantiateRustWasm, ripemd160Base64Bytes, } from './dependencies.js';
/**
 * The most performant way to instantiate ripemd160 functionality. To avoid
 * using Node.js or DOM-specific APIs, you can use {@link instantiateRipemd160}.
 *
 * @param webassemblyBytes - A buffer containing the ripemd160 binary.
 */
export const instantiateRipemd160Bytes = async (webassemblyBytes) => {
    const wasm = await instantiateRustWasm(webassemblyBytes, './ripemd160', 'ripemd160', 'ripemd160_init', 'ripemd160_update', 'ripemd160_final');
    return {
        final: wasm.final,
        hash: wasm.hash,
        init: wasm.init,
        update: wasm.update,
    };
};
export const getEmbeddedRipemd160Binary = () => base64ToBin(ripemd160Base64Bytes).buffer;
/**
 * An ultimately-portable (but slower) version of
 * {@link instantiateRipemd160Bytes} that does not require the consumer to
 * provide the ripemd160 binary buffer.
 */
export const instantiateRipemd160 = async () => instantiateRipemd160Bytes(getEmbeddedRipemd160Binary());
//# sourceMappingURL=ripemd160.js.map