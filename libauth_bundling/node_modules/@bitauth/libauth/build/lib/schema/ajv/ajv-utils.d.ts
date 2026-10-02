import type { AjvValidator } from './ajv-types.js';
/**
 * Given an untrusted JSON string or object and an AJV validator, verify that
 * the untrusted value is of the expected shape. Note, this method first
 * normalizes all characters in the input using `Normalization Form KC`
 * (Compatibility Decomposition, followed by Canonical Composition).
 */
export declare const ajvStandaloneJsonParse: <T>(untrustedJsonOrObject: unknown, validator: AjvValidator<T>) => string | T;
//# sourceMappingURL=ajv-utils.d.ts.map