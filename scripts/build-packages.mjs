import { lstat, rm } from 'node:fs/promises';
import { resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
// 只清理由本脚本生成的 dist，避免重命名后旧声明混入发布产物。
for (const name of ['core', 'vue', 'svelte', 'nuxt', 'sveltekit']) {
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
  [
    'core',
    ['index', 'browser', 'server', 'bindings', 'compiler'],
    ['node:*', 'typescript', 'magic-string'],
  ],
  [
    'vue',
    ['index', 'server', 'bindings', 'bindings-server', 'vite'],
    ['node:*', '@zerodep-css/core', '@zerodep-css/core/*', 'vue'],
  ],
  [
    'svelte',
    ['index', 'server', 'bindings', 'bindings-server', 'vite'],
    ['node:*', '@zerodep-css/core', '@zerodep-css/core/*', 'svelte'],
  ],
  [
    'nuxt',
    ['index', 'runtime/server', 'runtime/client'],
    ['@zerodep-css/vue', '@zerodep-css/vue/*', '@nuxt/kit', 'nuxt/app'],
  ],
  ['sveltekit', ['index', 'server'], ['@zerodep-css/svelte', '@zerodep-css/svelte/*']],
]) {
  if (['core', 'vue', 'svelte'].includes(name)) {
    // 多入口共用作者原型与宿主状态，避免 bindings 入口复制另一份类定义。
    await build({
      entryPoints: entries.map((entry) => resolve(root, name, 'src', `${entry}.ts`)),
      outdir: resolve(root, name, 'dist'),
      bundle: true,
      splitting: true,
      minify: true,
      format: 'esm',
      platform: 'neutral',
      target: 'es2023',
      external,
    });
    continue;
  }
  for (const entry of entries) {
    await build({
      entryPoints: [resolve(root, name, 'src', `${entry}.ts`)],
      outfile: resolve(root, name, 'dist', `${entry}.js`),
      bundle: true,
      minify: true,
      format: 'esm',
      platform:
        entry.endsWith('server') || (name === 'nuxt' && entry === 'index') ? 'node' : 'browser',
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
console.log('Built all five package JavaScript entries.');
