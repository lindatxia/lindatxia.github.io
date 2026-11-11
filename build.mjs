import { build } from 'esbuild';
import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('site-assets', { recursive: true });
await build({ entryPoints: ['site-src/main.tsx'], outfile: 'site-assets/site.js', bundle: true, minify: true, format: 'esm', platform: 'browser', target: ['es2020'], jsx: 'automatic', define: { 'process.env.NODE_ENV': '"production"' }, legalComments: 'linked' });
await copyFile('site-src/styles.css', 'site-assets/site.css');
// Version browser assets so a deployment cannot reuse stale scripts or styles.
const { readFile, writeFile } = await import('node:fs/promises');
const { createHash } = await import('node:crypto');
let html = await readFile('index.html', 'utf8');
for (const file of ['site.css', 'site.js']) {
  const hash = createHash('sha256').update(await readFile('site-assets/' + file)).digest('hex').slice(0, 12);
  html = html.replace(new RegExp('site-assets/' + file.replace('.', '\\.') + '(?:\\?v=[a-f0-9]+)?', 'g'), 'site-assets/' + file + '?v=' + hash);
}
await writeFile('index.html', html);
