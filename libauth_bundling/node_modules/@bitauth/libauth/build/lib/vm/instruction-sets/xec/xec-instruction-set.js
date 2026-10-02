import { ripemd160 as internalRipemd160, secp256k1 as internalSecp256k1, sha1 as internalSha1, sha256 as internalSha256, } from '../../../crypto/crypto.js';
import { createInstructionSetBch2023 } from '../bch/2023/bch-2023-instruction-set.js';
import { undefinedOperation } from '../common/common.js';
import { ConsensusXec } from './xec-2020-consensus.js';
import { OpcodesXec } from './xec-opcodes.js';
/**
 * create an instance of the XEC virtual machine instruction set.
 *
 * @param standard - If `true`, the additional `isStandard` validations will be
 * enabled. Transactions that fail these rules are often called "non-standard"
 * and can technically be included by miners in valid blocks, but most network
 * nodes will refuse to relay them. (Default: `true`)
 */
export const createInstructionSetXec = (standard = true, { consensus = ConsensusXec, ripemd160, secp256k1, sha1, sha256, } = {
    ripemd160: internalRipemd160,
    secp256k1: internalSecp256k1,
    sha1: internalSha1,
    sha256: internalSha256,
}) => {
    const instructionSet = createInstructionSetBch2023(standard, {
        consensus,
        ripemd160,
        secp256k1,
        sha1,
        sha256,
    });
    return {
        ...instructionSet,
        operations: {
            ...instructionSet.operations,
            [OpcodesXec.OP_MUL]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN192]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN193]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN194]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN195]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN196]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN197]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN198]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN199]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN200]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN201]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN202]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN203]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN204]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN205]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN206]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN207]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN208]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN209]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN210]: undefinedOperation,
            [OpcodesXec.OP_UNKNOWN211]: undefinedOperation,
        },
    };
};
//# sourceMappingURL=xec-instruction-set.js.map