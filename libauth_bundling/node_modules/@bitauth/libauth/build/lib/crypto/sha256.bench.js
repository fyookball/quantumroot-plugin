import { instantiateSha256 } from '../lib.js';
import { benchmarkHashingFunction } from './hash.bench.helper.js';
benchmarkHashingFunction('sha256', instantiateSha256(), 'sha256');
//# sourceMappingURL=sha256.bench.js.map