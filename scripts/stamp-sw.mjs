// Stamp the service-worker cache version per build so every deploy forces
// installed service workers to update and purge stale caches.
import { readFileSync, writeFileSync } from 'node:fs';
const p = 'dist/sw.js';
const stamp = new Date().toISOString().replace(/[-:TZ.]/g, '').slice(0, 14);
writeFileSync(p, readFileSync(p, 'utf8').replace('__BUILD__', stamp));
console.log('sw.js stamped farol-' + stamp);
