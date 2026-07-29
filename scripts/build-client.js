import { build } from 'esbuild';

await build({
  entryPoints: ['public/app.js'],
  outfile: 'public/dist/app.js',
  bundle: true,
  format: 'iife',
  target: ['safari13'],
  sourcemap: false,
  minify: false,
  legalComments: 'none',
  logLevel: 'info',
});
