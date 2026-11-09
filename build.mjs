import { build } from 'esbuild';
import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('site-assets', { recursive: true });
await build({ entryPoints: ['site-src/main.tsx'], outfile: 'site-assets/site.js', bundle: true, minify: true, format: 'esm', platform: 'browser', target: ['es2020'], jsx: 'automatic', define: { 'process.env.NODE_ENV': '"production"' }, legalComments: 'linked' });
await copyFile('site-src/styles.css', 'site-assets/site.css');
