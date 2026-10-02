import { instantiateSha1 } from '../lib.js';
import { benchmarkHashingFunction } from './hash.bench.helper.js';
benchmarkHashingFunction('sha1', instantiateSha1(), 'sha1');
//# sourceMappingURL=sha1.bench.js.map