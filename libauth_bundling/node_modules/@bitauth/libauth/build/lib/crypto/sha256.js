import { base64ToBin, instantiateRustWasm, sha256Base64Bytes, } from './dependencies.js';
/**
 * The most performant way to instantiate sha256 functionality. To avoid
 * using Node.js or DOM-specific APIs, you can use {@link instantiateSha256}.
 *
 * @param webassemblyBytes - A buffer containing the sha256 binary.
 */
export const instantiateSha256Bytes = async (webassemblyBytes) => {
    const wasm = await instantiateRustWasm(webassemblyBytes, './sha256', 'sha256', 'sha256_init', 'sha256_update', 'sha256_final');
    return {
        final: wasm.final,
        hash: wasm.hash,
        init: wasm.init,
        update: wasm.update,
    };
};
export const getEmbeddedSha256Binary = () => base64ToBin(sha256Base64Bytes).buffer;
/**
 * An ultimately-portable (but possibly slower) version of
 * {@link instantiateSha256Bytes} which does not require the consumer to provide
 * the sha256 binary buffer.
 */
export const instantiateSha256 = async () => instantiateSha256Bytes(getEmbeddedSha256Binary());
//# sourceMappingURL=sha256.js.map