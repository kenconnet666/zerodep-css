import { removeOutput } from './remove-output.mjs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
// 只清理由本脚本生成的 dist，避免重命名后旧声明混入发布产物。
for (const name of ['core', 'compiler', 'vue', 'svelte', 'zerodep-js']) {
  const dist = resolve(root, name, 'dist');
  await removeOutput(root, dist);
}
for (const [name, entries, external] of [
  [
    'zerodep-js',
    ['index', 'server', 'internal', 'compiler'],
    [
      'node:*',
      'zerodep-css',
      'zerodep-css/*',
      'zerodep-js',
      'zerodep-js/*',
      'zerodep-js-compiler',
      '@babel/traverse',
      '@babel/types',
    ],
  ],
  [
    'core',
    ['index', 'browser', 'server', 'bindings', 'metadata', 'theme'],
    ['node:*', 'typescript', 'magic-string'],
  ],
  ['compiler', ['index'], ['node:*', 'zerodep-css/*', 'typescript', 'magic-string']],
  [
    'vue',
    [
      'index',
      'server',
      'bindings',
      'bindings-server',
      'vite',
      'nuxt/index',
      'nuxt/runtime/server',
      'nuxt/runtime/client',
    ],
    [
      'node:*',
      'zerodep-css',
      'zerodep-css/*',
      'zerodep-css-compiler',
      'zerodep-css-vue',
      'zerodep-css-vue/*',
      'vue',
      '@vue/compiler-dom',
      '@nuxt/kit',
      'nuxt/app',
    ],
  ],
  [
    'svelte',
    [
      'index',
      'server',
      'bindings',
      'bindings-server',
      'vite',
      'sveltekit/index',
      'sveltekit/server',
    ],
    [
      'node:*',
      'zerodep-css',
      'zerodep-css/*',
      'zerodep-css-compiler',
      'zerodep-css-svelte',
      'zerodep-css-svelte/*',
      'svelte',
    ],
  ],
]) {
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
}
console.log('Built all package JavaScript entries.');
