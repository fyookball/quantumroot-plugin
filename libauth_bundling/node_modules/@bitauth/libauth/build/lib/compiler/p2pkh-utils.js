import { lockingBytecodeToCashAddress } from '../address/address.js';
import { formatError } from '../format/format.js';
import { stringifyErrors } from '../language/language.js';
import { walletTemplateToCompilerBch } from './compiler-bch/compiler-bch.js';
import { walletTemplateP2pkh, walletTemplateP2pkhNonHd, } from './standard/standard.js';
export var P2pkhUtilityError;
(function (P2pkhUtilityError) {
    P2pkhUtilityError["hdPrivateKeyToP2pkhLockingBytecodeCompilation"] = "P2PKH utility error: could not derive P2PKH locking bytecode from the provided HD private key.";
    P2pkhUtilityError["hdPublicKeyToP2pkhLockingBytecodeCompilation"] = "P2PKH utility error: could not derive P2PKH locking bytecode from the provided HD public key.";
    P2pkhUtilityError["privateKeyToP2pkhLockingBytecodeCompilation"] = "P2PKH utility error: could not derive P2PKH locking bytecode from the provided private key.";
    P2pkhUtilityError["publicKeyToP2pkhLockingBytecodeCompilation"] = "P2PKH utility error: could not derive P2PKH locking bytecode from the provided public key.";
})(P2pkhUtilityError || (P2pkhUtilityError = {}));
/**
 * Derive the P2PKH locking bytecode of the provided private key.
 *
 * Note that this function defaults to throwing an error if provided with an
 * invalid private key. To handle errors in a type-safe way, set `throwErrors`
 * to `false`.
 *
 * To derive the resulting CashAddress, use
 * {@link privateKeyToP2pkhCashAddress}. For HD private keys, use
 * {@link hdPrivateKeyToP2pkhLockingBytecode}. For the public key equivalent,
 * see {@link publicKeyToP2pkhLockingBytecode}.
 */
export const privateKeyToP2pkhLockingBytecode = ({ privateKey, throwErrors = true, }) => {
    const compiler = walletTemplateToCompilerBch(walletTemplateP2pkhNonHd);
    const lockingBytecode = compiler.generateBytecode({
        data: { keys: { privateKeys: { key: privateKey } } },
        scriptId: 'lock',
    });
    if (!lockingBytecode.success) {
        return formatError(P2pkhUtilityError.privateKeyToP2pkhLockingBytecodeCompilation, stringifyErrors(lockingBytecode.errors), throwErrors);
    }
    return lockingBytecode.bytecode;
};
/**
 * Derive the P2PKH locking bytecode of the provided public key.
 *
 * Note that this function defaults to throwing an error if provided with an
 * invalid public key. To handle errors in a type-safe way, set `throwErrors`
 * to `false`.
 *
 * To derive the resulting CashAddress, use {@link publicKeyToP2pkhCashAddress}.
 * For HD public keys, use {@link hdPublicKeyToP2pkhLockingBytecode}. For the
 * private key equivalent, see {@link privateKeyToP2pkhLockingBytecode}.
 */
export const publicKeyToP2pkhLockingBytecode = ({ publicKey, throwErrors = true, }) => {
    const compiler = walletTemplateToCompilerBch(walletTemplateP2pkhNonHd);
    const lockingBytecode = compiler.generateBytecode({
        // eslint-disable-next-line @typescript-eslint/naming-convention
        data: { bytecode: { 'key.public_key': publicKey } },
        scriptId: 'lock',
    });
    if (!lockingBytecode.success) {
        return formatError(P2pkhUtilityError.publicKeyToP2pkhLockingBytecodeCompilation, stringifyErrors(lockingBytecode.errors), throwErrors);
    }
    return lockingBytecode.bytecode;
};
/**
 * Derive the P2PKH locking bytecode at the provided path and address index of
 * the provided HD private key.
 *
 * Note that this function defaults to throwing an error if provided with an
 * invalid HD private key or derivation path. To handle errors in a type-safe
 * way, set `throwErrors` to `false`.
 *
 * To derive the resulting CashAddress, use
 * {@link hdPrivateKeyToP2pkhCashAddress}. For non-HD private keys, use
 * {@link privateKeyToP2pkhLockingBytecode}. For the HD public key equivalent,
 * see {@link hdPublicKeyToP2pkhLockingBytecode}.
 */
export const hdPrivateKeyToP2pkhLockingBytecode = ({ addressIndex, hdPrivateKey, privateDerivationPath = 'i', throwErrors = true, }) => {
    const template = structuredClone(walletTemplateP2pkh);
    // eslint-disable-next-line functional/no-expression-statements, functional/immutable-data, @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access
    template.entities.owner.variables.key.privateDerivationPath =
        privateDerivationPath;
    const compiler = walletTemplateToCompilerBch(template);
    const lockingBytecode = compiler.generateBytecode({
        data: { hdKeys: { addressIndex, hdPrivateKeys: { owner: hdPrivateKey } } },
        scriptId: 'lock',
    });
    if (!lockingBytecode.success) {
        return formatError(P2pkhUtilityError.hdPrivateKeyToP2pkhLockingBytecodeCompilation, stringifyErrors(lockingBytecode.errors), throwErrors);
    }
    return lockingBytecode.bytecode;
};
/**
 * Derive the P2PKH locking bytecode at the provided index of the provided HD
 * public key.
 *
 * Note that this function defaults to throwing an error if provided with an
 * invalid HD public key. To handle errors in a type-safe way, set `throwErrors`
 * to `false`.
 *
 * To derive the resulting CashAddress, use
 * {@link hdPublicKeyToP2pkhCashAddress}. For non-HD public keys, use
 * {@link publicKeyToP2pkhLockingBytecode}. For the HD private key equivalent,
 * see {@link hdPrivateKeyToP2pkhLockingBytecode}.
 */
export const hdPublicKeyToP2pkhLockingBytecode = ({ addressIndex, hdPublicKey, hdPublicKeyDerivationPath = '', throwErrors = true, publicDerivationPath = 'i', }) => {
    const template = structuredClone(walletTemplateP2pkh);
    /* eslint-disable functional/no-expression-statements, functional/immutable-data, @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */
    template.entities.owner.variables.key.publicDerivationPath =
        publicDerivationPath;
    template.entities.owner.variables.key.hdPublicKeyDerivationPath =
        hdPublicKeyDerivationPath;
    template.entities.owner.variables.key.privateDerivationPath =
        hdPublicKeyDerivationPath === ''
            ? publicDerivationPath
            : `${hdPublicKeyDerivationPath}/${publicDerivationPath}`;
    /* eslint-enable functional/no-expression-statements, functional/immutable-data, @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-member-access */
    const compiler = walletTemplateToCompilerBch(template);
    const lockingBytecode = compiler.generateBytecode({
        data: { hdKeys: { addressIndex, hdPublicKeys: { owner: hdPublicKey } } },
        scriptId: 'lock',
    });
    if (!lockingBytecode.success) {
        return formatError(P2pkhUtilityError.hdPublicKeyToP2pkhLockingBytecodeCompilation, stringifyErrors(lockingBytecode.errors), throwErrors);
    }
    return lockingBytecode.bytecode;
};
/**
 * Derive the P2PKH address of the provided private key.
 *
 * Note that this function defaults to throwing an error if provided with an
 * invalid private key. To handle errors in a type-safe way, set `throwErrors`
 * to `false`.
 *
 * To derive only the locking bytecode, use
 * {@link privateKeyToP2pkhLockingBytecode}. For HD private keys, use
 * {@link hdPrivateKeyToP2pkhCashAddress}. For the public key equivalent,
 * see {@link publicKeyToP2pkhCashAddress}.
 */
export const privateKeyToP2pkhCashAddress = ({ privateKey, prefix = 'bitcoincash', throwErrors = true, tokenSupport = false, }) => {
    const bytecode = privateKeyToP2pkhLockingBytecode({
        privateKey,
        throwErrors,
    });
    if (typeof bytecode === 'string') {
        return formatError(bytecode, undefined, throwErrors);
    }
    return lockingBytecodeToCashAddress({
        bytecode,
        prefix,
        tokenSupport,
    });
};
/**
 * Derive the P2PKH address of the provided public key.
 *
 * Note that this function defaults to throwing an error if provided with an
 * invalid public key. To handle errors in a type-safe way, set `throwErrors`
 * to `false`.
 *
 * To derive only the locking bytecode, use
 * {@link publicKeyToP2pkhLockingBytecode}. For HD public keys, use
 * {@link hdPublicKeyToP2pkhCashAddress}. For the private key equivalent,
 * see {@link privateKeyToP2pkhCashAddress}.
 */
export const publicKeyToP2pkhCashAddress = ({ publicKey, prefix = 'bitcoincash', throwErrors = true, tokenSupport = false, }) => {
    const bytecode = publicKeyToP2pkhLockingBytecode({
        publicKey,
        throwErrors,
    });
    if (typeof bytecode === 'string') {
        return formatError(bytecode, undefined, throwErrors);
    }
    return lockingBytecodeToCashAddress({
        bytecode,
        prefix,
        tokenSupport,
    });
};
/**
 * Derive the P2PKH address at the provided index of the provided HD
 * private key.
 *
 * Note that this function defaults to throwing an error if provided with an
 * invalid HD private key or derivation path. To handle errors in a type-safe
 * way, set `throwErrors` to `false`.
 *
 * To derive only the locking bytecode, use
 * {@link hdPrivateKeyToP2pkhLockingBytecode}. For non-HD private keys, use
 * {@link privateKeyToP2pkhCashAddress}. For the HD public key equivalent,
 * see {@link hdPublicKeyToP2pkhCashAddress}.
 */
export const hdPrivateKeyToP2pkhCashAddress = ({ addressIndex, hdPrivateKey, prefix = 'bitcoincash', privateDerivationPath = 'i', throwErrors = true, tokenSupport = false, }) => {
    const bytecode = hdPrivateKeyToP2pkhLockingBytecode({
        addressIndex,
        hdPrivateKey,
        privateDerivationPath,
        throwErrors,
    });
    if (typeof bytecode === 'string') {
        return formatError(bytecode, undefined, throwErrors);
    }
    return lockingBytecodeToCashAddress({
        bytecode,
        prefix,
        tokenSupport,
    });
};
/**
 * Derive the P2PKH address at the provided index of the provided HD
 * public key.
 *
 * Note that this function defaults to throwing an error if provided with an
 * invalid HD public key. To handle errors in a type-safe way, set `throwErrors`
 * to `false`.
 *
 * To derive only the locking bytecode, use
 * {@link hdPublicKeyToP2pkhLockingBytecode}. For non-HD public keys, use
 * {@link publicKeyToP2pkhCashAddress}. For the HD private key equivalent,
 * see {@link hdPrivateKeyToP2pkhCashAddress}.
 */
export const hdPublicKeyToP2pkhCashAddress = ({ addressIndex, hdPublicKey, hdPublicKeyDerivationPath = '', prefix = 'bitcoincash', publicDerivationPath = 'i', throwErrors = true, tokenSupport = false, }) => {
    const bytecode = hdPublicKeyToP2pkhLockingBytecode({
        addressIndex,
        hdPublicKey,
        hdPublicKeyDerivationPath,
        publicDerivationPath,
        throwErrors,
    });
    if (typeof bytecode === 'string') {
        return formatError(bytecode, undefined, throwErrors);
    }
    return lockingBytecodeToCashAddress({
        bytecode,
        prefix,
        tokenSupport,
    });
};
//# sourceMappingURL=p2pkh-utils.js.map