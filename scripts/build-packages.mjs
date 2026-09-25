import { lstat, rm } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
// 只清理由本脚本生成的三个 dist，避免重命名后旧声明混入发布产物。
for (const name of ['core', 'vue', 'svelte']) {
  const dist = resolve(root, name, 'dist');
  if (!dist.startsWith(root + sep)) throw new Error(`Unsafe build path: ${dist}`);
  const current = await lstat(dist).catch((error) => {
    if (error.code === 'ENOENT') return null;
    throw error;
  });
  if (current) {
    if (!current.isDirectory() || current.isSymbolicLink())
      throw new Error(`Build output is not a directory: ${dist}`);
    await rm(dist, { recursive: true });
  }
}
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
