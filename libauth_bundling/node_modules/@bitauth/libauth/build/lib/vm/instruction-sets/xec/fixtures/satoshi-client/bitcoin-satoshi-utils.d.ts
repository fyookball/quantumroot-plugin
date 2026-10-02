export declare const bitcoinSatoshiOpcodes: {
    [opcode: string]: Uint8Array;
};
/**
 * Convert a string from the Satoshi implementation's `script_tests.json`
 * text-format to bytecode. The string must be valid – this method attempts to
 * convert all unmatched tokens to `BigInt`s.
 *
 * @privateRemarks
 * This method doesn't use {@link compileScript} because of a slight
 * incompatibility in the languages. In CashAssembly, BigIntLiterals are a
 * primitive type, and must be surrounded by a push statement (e.g. `<100>`) to
 * push a number to the stack. In the `script_tests.json` text-format, numbers
 * are assumed to be pushed. We could implement a transformation after the
 * compiler's parse step, but because this format doesn't require any other
 * features of the compiler, we opt to implement this as a simple method.
 * @param satoshiScript - the script in the Satoshi implementation's
 * `script_tests.json` text format
 */
export declare const assembleBitcoinSatoshiScript: (satoshiScript: string) => Uint8Array;
//# sourceMappingURL=bitcoin-satoshi-utils.d.ts.map