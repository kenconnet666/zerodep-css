// 同进程交替测量 Builder 与有限值运行时；不将独立阶段相加推算占比。
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve, relative, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import { performance } from 'node:perf_hooks';
import { build } from 'esbuild';
import { root } from '../../scripts/lib/environment.mjs';

const revision = process.argv[2] ?? '075b996',
  label = process.argv[3] ?? 'current';
assert.match(revision, /^[a-f0-9]{7,40}$/);
assert.match(label, /^[a-z0-9-]+$/);
const control = process.argv.includes('--control');
const output = resolve(root, 'test-results/builder-paired', label);
await mkdir(output, { recursive: true });
const api = {};
for (const name of ['baseline', 'current']) {
  const file = resolve(output, name + '.mjs');
  await build({
    stdin: {
      contents: "export * from './index.ts';export {buildStyleDefinition} from './builder.ts';",
      resolveDir: resolve(root, 'core/src'),
      loader: 'ts',
    },
    outfile: file,
    bundle: true,
    platform: 'node',
    format: 'esm',
    external: ['css-tree'],
    plugins:
      name === 'baseline' || control
        ? [
            {
              name: 'baseline',
              setup(bundler) {
                bundler.onLoad({ filter: /\.ts$/ }, ({ path }) => ({
                  contents: execFileSync(
                    'git',
                    ['show', `${revision}:${relative(root, path).replaceAll('\\', '/')}`],
                    { cwd: root, encoding: 'utf8', maxBuffer: 16 * 1024 * 1024 },
                  ),
                  loader: 'ts',
                  resolveDir: dirname(path),
                }));
              },
            },
          ]
        : [],
  });
  api[name] = await import(pathToFileURL(file).href);
}
let value = 20;
const factories = {
  empty: () => {},
  width: (s) => {
    s.width.px(value);
  },
  three: (s) => {
    s.display.flex;
    s.padding.px(8, 16);
    s.width.px(value);
  },
  nested: (s) => {
    s.width.px(value);
    s.hover((h) => {
      h.color.red;
    });
  },
};
const iterations = 20000,
  rounds = 7,
  samples = [];
const signatures = {};
for (let round = 0; round < rounds; round++)
  for (const [name, factory] of Object.entries(factories))
    for (const stage of ['builder', 'runtime'])
      for (const implementation of round % 2 ? ['current', 'baseline'] : ['baseline', 'current']) {
        globalThis.gc?.();
        const module = api[implementation],
          runtime = module.createRuntime({ target: null });
        const step = (i) => {
          value = 20 + (i % 16);
          return stage === 'builder' ? module.buildStyleDefinition(factory) : runtime.css(factory);
        };
        try {
          for (let i = 0; i < 2000; i++) step(i);
          const start = performance.now();
          let last;
          for (let i = 0; i < iterations; i++) last = step(i);
          const milliseconds = performance.now() - start;
          assert.notEqual(last, undefined);
          const signature = JSON.stringify(stage === 'builder' ? last : runtime.snapshot());
          const key = name + '/' + stage;
          if (signatures[key]) assert.equal(signature, signatures[key]);
          else signatures[key] = signature;
          samples.push({ round, name, stage, implementation, milliseconds });
        } finally {
          runtime.dispose();
        }
      }
const median = (values) => values.sort((a, b) => a - b)[Math.floor(values.length / 2)];
const results = [];
for (const name of Object.keys(factories))
  for (const stage of ['builder', 'runtime']) {
    const row = { name, stage };
    for (const implementation of ['baseline', 'current'])
      row[implementation] = median(
        samples
          .filter(
            (s) => s.name === name && s.stage === stage && s.implementation === implementation,
          )
          .map((s) => s.milliseconds),
      );
    row.ratio = row.current / row.baseline;
    results.push(row);
  }
const report = {
  status: 'passed',
  revision,
  node: process.version,
  iterations,
  rounds,
  control,
  results,
  samples,
};
await writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
console.log(JSON.stringify(results, null, 2));
