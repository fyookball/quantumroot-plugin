import type { MetadataRegistry } from '../lib.js';
/**
 * Safely parse and validate a Bitcoin Cash Metadata Registry (BCMR), returning
 * either an error message as a string or a valid {@link MetadataRegistry}. The
 * registry may be provided either as an untrusted JSON string or as a
 * pre-parsed object.
 *
 * This method validates both the structure and the contents of a registry:
 * - All properties and sub-properties are verified to be of the expected type.
 * - The registry contains no unknown properties.
 *
 * @param untrustedJsonOrObject - the JSON string or object to validate as
 * metadata registry
 */
export declare const importMetadataRegistry: (untrustedJsonOrObject: unknown) => MetadataRegistry | string;
//# sourceMappingURL=bcmr.d.ts.map