import { instantiateRipemd160 } from '../lib.js';
import { benchmarkHashingFunction } from './hash.bench.helper.js';
benchmarkHashingFunction('ripemd160', instantiateRipemd160(), 'ripemd160');
//# sourceMappingURL=ripemd160.bench.js.map