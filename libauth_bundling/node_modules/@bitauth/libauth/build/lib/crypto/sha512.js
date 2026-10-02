import { base64ToBin, instantiateRustWasm, sha512Base64Bytes, } from './dependencies.js';
/**
 * The most performant way to instantiate sha512 functionality. To avoid
 * using Node.js or DOM-specific APIs, you can use {@link instantiateSha512}.
 *
 * @param webassemblyBytes - A buffer containing the sha512 binary.
 */
export const instantiateSha512Bytes = async (webassemblyBytes) => {
    const wasm = await instantiateRustWasm(webassemblyBytes, './sha512', 'sha512', 'sha512_init', 'sha512_update', 'sha512_final');
    return {
        final: wasm.final,
        hash: wasm.hash,
        init: wasm.init,
        update: wasm.update,
    };
};
export const getEmbeddedSha512Binary = () => base64ToBin(sha512Base64Bytes).buffer;
/**
 * An ultimately-portable (but slower) version of {@link instantiateSha512Bytes}
 * that does not require the consumer to provide the sha512 binary buffer.
 */
export const instantiateSha512 = async () => instantiateSha512Bytes(getEmbeddedSha512Binary());
//# sourceMappingURL=sha512.js.map