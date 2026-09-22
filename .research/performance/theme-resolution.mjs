// 同一进程交替测量旧/新 merge，使用相同的当前依赖隔离主题算法差异。
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdir, mkdtemp, realpath, rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { performance } from 'node:perf_hooks';
import { build } from 'esbuild';
import { lightTheme } from '../../core/dist/themes.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const revision = process.argv[2] ?? '0723dd9';
assert.match(revision, /^[a-f0-9]{7,40}$/);
const output = resolve(root, 'test-results/performance-paired');
await mkdir(output, { recursive: true });
const temporary = await mkdtemp(resolve(output, 'baseline-'));
try {
  const source = execFileSync('git', ['show', `${revision}:core/src/theme.ts`], {
    cwd: root,
    encoding: 'utf8',
  });
  const file = resolve(temporary, 'theme.mjs');
  await build({
    stdin: { contents: source, resolveDir: resolve(root, 'core/src'), loader: 'ts' },
    outfile: file,
    bundle: true,
    format: 'esm',
    platform: 'node',
    external: ['css-tree'],
  });
  const { defineTheme } = await import(pathToFileURL(file).href);
  const baseline = defineTheme('system', lightTheme.defaults);
  const iterations = 2000,
    rounds = 5;
  const cases = [];
  for (const [implementation, definition] of [
    ['baseline', baseline],
    ['current', lightTheme],
  ])
    for (const inherited of [false, true])
      cases.push({
        name: `${implementation}-${inherited ? 'inherited' : 'defaults'}`,
        definition,
        parent: inherited
          ? definition.resolve({ color: { primary: '#654321' } })
          : definition.defaults,
        samples: [],
      });
  const override = { color: { primary: '#123456' } };
  const expected = baseline.resolve(override);
  for (let round = 0; round < rounds; round++)
    for (const entry of round % 2 ? [...cases].reverse() : cases) {
      for (let i = 0; i < 100; i++) entry.definition.resolve(override, entry.parent);
      let value;
      const start = performance.now();
      for (let i = 0; i < iterations; i++) value = entry.definition.resolve(override, entry.parent);
      entry.samples.push(performance.now() - start);
      assert.deepEqual(value, expected);
      assert(Object.isFrozen(value.color));
    }
  console.log(
    JSON.stringify(
      {
        revision,
        node: process.version,
        iterations,
        rounds,
        cases: cases.map(({ name, samples }) => ({
          name,
          samples,
          median: [...samples].sort((a, b) => a - b)[2],
        })),
      },
      null,
      2,
    ),
  );
} finally {
  const actual = await realpath(temporary),
    parent = await realpath(output);
  assert.equal(dirname(actual), parent);
  assert(actual.startsWith(resolve(parent, 'baseline-')));
  await rm(actual, { recursive: true });
}
