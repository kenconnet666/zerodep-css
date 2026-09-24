import { resolve } from 'node:path';
import { root, run, pnpm } from '../lib/environment.mjs';

const kind = process.argv[2];
const entries = {
  'browser:runtime': 'browser-runtime.mjs',
  'browser:frameworks': 'browser-frameworks.mjs',
  types: 'style-types.mjs',
  consumer: 'consumer.mjs',
  bundle: 'bundle.mjs',
  nuxt: '../../nuxt/test/integration.mjs',
  sveltekit: '../../sveltekit/test/integration.mjs',
};
if (kind !== 'unit' && !entries[kind]) throw new Error('Unknown test suite: ' + kind);
// 本地独立运行会准备构建；CI 在同一 job 构建一次后显式传 --no-build。
if (!process.argv.includes('--no-build')) pnpm(['build']);
if (kind === 'unit') {
  run(process.execPath, [
    '--test',
    'internal/runtime/test/unit/*.test.mjs',
    'vue/test/unit/*.test.mjs',
    'nuxt/test/unit/*.test.mjs',
    'sveltekit/test/*.test.mjs',
    'scripts/css-data/*.test.mjs',
    'scripts/testing/unit/*.test.mjs',
    'internal/compiler/test/*.test.mjs',
  ]);
} else
  run(process.execPath, [
    resolve(root, 'scripts/testing', entries[kind]),
    ...process.argv.slice(3).filter((argument) => argument !== '--no-build'),
  ]);
if (kind === 'browser:runtime')
  run(process.execPath, [resolve(root, 'internal/runtime/test/browser/host-ownership.mjs')]);
if (kind === 'browser:runtime')
  run(process.execPath, [resolve(root, 'internal/runtime/test/browser/diagnostics.mjs')]);
if (kind === 'browser:frameworks')
  run(process.execPath, [resolve(root, 'scripts/testing/browser-bindings.mjs')]);
if (kind === 'browser:frameworks')
  run(process.execPath, [resolve(root, 'scripts/testing/hmr-bindings.mjs')]);
if (kind === 'browser:frameworks')
  for (const framework of ['vue', 'svelte'])
    run(process.execPath, [resolve(root, framework, 'test/browser/project-styles.mjs')]);
