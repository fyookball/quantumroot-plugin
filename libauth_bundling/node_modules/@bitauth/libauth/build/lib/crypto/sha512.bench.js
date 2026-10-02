import { instantiateSha512 } from '../lib.js';
import { benchmarkHashingFunction } from './hash.bench.helper.js';
benchmarkHashingFunction('sha512', instantiateSha512(), 'sha512');
//# sourceMappingURL=sha512.bench.js.map