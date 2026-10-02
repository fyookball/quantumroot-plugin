import type { WalletTemplate } from '../../lib.js';
/**
 * A standard single-factor wallet template that uses
 * Pay-to-Public-Key-Hash (P2PKH), the most common authentication scheme in use
 * on the network.
 *
 * This P2PKH template uses BCH Schnorr signatures, reducing the size of
 * transactions.
 *
 * Note, this wallet template uses only a single `Key`. For HD key
 * support, see {@link walletTemplateP2pkhHd}.
 */
export declare const walletTemplateP2pkhNonHd: WalletTemplate;
/**
 * A standard single-factor wallet template that uses
 * Pay-to-Public-Key-Hash (P2PKH), the most common authentication scheme in use
 * on the network.
 *
 * This P2PKH template uses BCH Schnorr signatures, reducing the size of
 * transactions.
 *
 * Because the template uses a Hierarchical Deterministic (HD) key, it also
 * supports watch-only clients.
 */
export declare const walletTemplateP2pkh: WalletTemplate;
//# sourceMappingURL=p2pkh.d.ts.map