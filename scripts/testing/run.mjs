import { resolve } from 'node:path';
import { root, run, pnpm } from '../lib/environment.mjs';

const kind = process.argv[2];
const entries = {
  'browser:core': 'browser-core.mjs',
  'browser:frameworks': 'browser-frameworks.mjs',
  types: 'style-types.mjs',
  consumer: 'consumer.mjs',
  bundle: 'bundle.mjs',
};
if (kind !== 'unit' && !entries[kind]) throw new Error('Unknown test suite: ' + kind);
// 本地独立运行会准备构建；CI 在同一 job 构建一次后显式传 --no-build。
if (!process.argv.includes('--no-build')) pnpm(['build']);
if (kind === 'unit') {
  run(process.execPath, [
    '--test',
    'core/test/unit/*.test.mjs',
    'vue/test/unit/*.test.mjs',
    'scripts/css-data/*.test.mjs',
    'scripts/testing/unit/*.test.mjs',
    'internal/compiler/test/*.test.mjs',
  ]);
} else run(process.execPath, [resolve(root, 'scripts/testing', entries[kind])]);
if (kind === 'browser:core')
  run(process.execPath, [resolve(root, 'core/test/browser/host-ownership.mjs')]);
if (kind === 'browser:frameworks')
  run(process.execPath, [resolve(root, 'scripts/testing/browser-bindings.mjs')]);
if (kind === 'browser:frameworks')
  run(process.execPath, [resolve(root, 'scripts/testing/hmr-bindings.mjs')]);
if (kind === 'browser:frameworks')
  for (const framework of ['vue', 'svelte'])
    run(process.execPath, [resolve(root, framework, 'test/browser/project-styles.mjs')]);
