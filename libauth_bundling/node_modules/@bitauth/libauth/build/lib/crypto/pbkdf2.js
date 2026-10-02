import { formatError, numberToBinUint32BE } from '../format/format.js';
import { hmacSha256, hmacSha512 } from './hmac.js';
export var Pbkdf2Error;
(function (Pbkdf2Error) {
    Pbkdf2Error["invalidIterations"] = "Invalid PBKDF2 parameters: iterations must be a positive integer.";
    Pbkdf2Error["invalidDerivedKeyLength"] = "Invalid PBKDF2 parameters: derived key length must be a positive integer.";
    Pbkdf2Error["invalidHmacLength"] = "Invalid HMAC length: HMAC length must be a positive integer.";
})(Pbkdf2Error || (Pbkdf2Error = {}));
/**
 * Instantiate a PBKDF2 function as specified by RFC 2898.
 *
 * @param hmacFunction - the HMAC function to use
 * @param hmacByteLength - the byte-length of the HMAC function
 */
export const instantiatePbkdf2Function = (hmacFunction, hmacByteLength) => 
// eslint-disable-next-line complexity
(parameters) => {
    /* eslint-disable functional/no-let, functional/no-loop-statements, functional/no-expression-statements, no-bitwise, no-plusplus */
    const { password, salt, iterations, derivedKeyLength } = parameters;
    if (!Number.isInteger(iterations) || iterations <= 0) {
        return formatError(Pbkdf2Error.invalidIterations, `Iterations parameter: ${iterations}.`);
    }
    if (!Number.isInteger(derivedKeyLength) || derivedKeyLength <= 0) {
        return formatError(Pbkdf2Error.invalidDerivedKeyLength, `Derived key length: ${derivedKeyLength}.`);
    }
    if (!Number.isInteger(hmacByteLength) || hmacByteLength <= 0) {
        return formatError(Pbkdf2Error.invalidHmacLength, `HMAC length: ${hmacByteLength}.`);
    }
    const iterationCountByteLength = 4;
    const derivedKey = new Uint8Array(derivedKeyLength);
    const block = new Uint8Array(salt.length + iterationCountByteLength);
    block.set(salt, 0);
    let writePosition = 0;
    const length = Math.ceil(derivedKeyLength / hmacByteLength);
    for (let i = 1; i <= length; i++) {
        const iterationUint32BEEncoded = numberToBinUint32BE(i);
        block.set(iterationUint32BEEncoded, salt.length);
        const accumulatedMac = hmacFunction(password, block);
        let intermediateMac = accumulatedMac;
        for (let j = 1; j < iterations; j++) {
            intermediateMac = hmacFunction(password, intermediateMac);
            for (let k = 0; k < hmacByteLength; k++) {
                accumulatedMac[k] ^= intermediateMac[k]; // eslint-disable-line @typescript-eslint/no-non-null-assertion
            }
        }
        const truncatedResult = accumulatedMac.subarray(0, derivedKeyLength);
        derivedKey.set(truncatedResult, writePosition);
        writePosition += hmacByteLength;
    }
    return derivedKey;
    /* eslint-enable functional/no-let, functional/no-loop-statements, functional/no-expression-statements, no-bitwise, no-plusplus */
};
const hmacSha256ByteLength = 32;
/**
 * Derive a key using PBKDF2 and the HMAC SHA256 function as specified in RFC 2898.
 *
 * Note, if the provided `parameters` are valid, this method will never error.
 *
 * @param parameters - the PBKDF2 parameters to use
 * @param sha256Hmac - the SHA256 HMAC implementation to use (defaults to the
 * internal WASM implementation)
 */
export const pbkdf2HmacSha256 = (parameters, sha256Hmac = hmacSha256) => instantiatePbkdf2Function(sha256Hmac, hmacSha256ByteLength)(parameters);
const hmacSha512ByteLength = 64;
/**
 * Derive a key using PBKDF2 and the HMAC SHA512 function as specified in RFC 2898.
 *
 * Note, if the provided `parameters` are valid, this method will never error.
 *
 * @param parameters - the PBKDF2 parameters to use
 * @param sha512Hmac - the SHA512 HMAC implementation to use (defaults to the
 * internal WASM implementation)
 */
export const pbkdf2HmacSha512 = (parameters, sha512Hmac = hmacSha512) => instantiatePbkdf2Function(sha512Hmac, hmacSha512ByteLength)(parameters);
//# sourceMappingURL=pbkdf2.js.map