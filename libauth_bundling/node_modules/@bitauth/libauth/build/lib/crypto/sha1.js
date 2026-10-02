import { base64ToBin, instantiateRustWasm, sha1Base64Bytes, } from './dependencies.js';
/**
 * The most performant way to instantiate sha1 functionality. To avoid
 * using Node.js or DOM-specific APIs, you can use {@link instantiateSha1}.
 *
 * @param webassemblyBytes - A buffer containing the sha1 binary.
 */
export const instantiateSha1Bytes = async (webassemblyBytes) => {
    const wasm = await instantiateRustWasm(webassemblyBytes, './sha1', 'sha1', 'sha1_init', 'sha1_update', 'sha1_final');
    return {
        final: wasm.final,
        hash: wasm.hash,
        init: wasm.init,
        update: wasm.update,
    };
};
export const getEmbeddedSha1Binary = () => base64ToBin(sha1Base64Bytes).buffer;
/**
 * An ultimately-portable (but slower) version of {@link instantiateSha1Bytes}
 * that does not require the consumer to provide the sha1 binary buffer.
 */
export const instantiateSha1 = async () => instantiateSha1Bytes(getEmbeddedSha1Binary());
//# sourceMappingURL=sha1.js.map