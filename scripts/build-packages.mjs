import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
for (const [name, entries, external] of [
  ['core', ['index', 'browser', 'server'], []],
  ['vue', ['index', 'server'], ['@zerodep-css/core', '@zerodep-css/core/*', 'vue']],
  ['svelte', ['index', 'server'], ['@zerodep-css/core', '@zerodep-css/core/*', 'svelte']],
]) {
  for (const entry of entries) {
    await build({
      entryPoints: [resolve(root, name, 'src', `${entry}.ts`)],
      outfile: resolve(root, name, 'dist', `${entry}.js`),
      bundle: true,
      minify: true,
      format: 'esm',
      platform: entry === 'server' ? 'node' : 'browser',
      target: 'es2023',
      external,
      define: {
        'process.env.NODE_ENV': '"production"',
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
      },
    });
  }
}
console.log('Built core, vue and svelte JavaScript entries.');
