// 只比较绑定辅助的计算成本；运行前确保两个源码版本使用同一套依赖。
import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import { root } from '../../scripts/lib/environment.mjs';

const requested = process.argv[2];
const label = process.argv[3];
const control = process.argv.includes('--control');
if (!requested || !label || !/^[a-z0-9-]+$/.test(label))
  throw new Error('Usage: node --expose-gc binding-paired.mjs <baseline-ref> <label> [--control]');
const baseline = execFileSync('git', ['rev-parse', '--verify', requested + '^{commit}'], {
  cwd: root,
})
  .toString()
  .trim();
const output = resolve(root, 'test-results/binding-paired', label);
await mkdir(output, { recursive: true });

async function bundle(name, historical) {
  const outfile = resolve(output, name + '.mjs');
  await build({
    entryPoints: [resolve(root, 'internal/runtime/binding.ts')],
    outfile,
    bundle: true,
    platform: 'node',
    format: 'esm',
    target: 'node24',
    packages: 'external',
    plugins: [
      {
        name: 'historical-binding',
        setup(bundler) {
          if (!historical) return;
          bundler.onLoad({ filter: /[\\/]internal[\\/]runtime[\\/]binding\.ts$/ }, () => ({
            contents: execFileSync('git', ['show', baseline + ':internal/runtime/binding.ts'], {
              cwd: root,
            }).toString(),
            loader: 'ts',
          }));
        },
      },
    ],
  });
  return import(pathToFileURL(outfile).href);
}

const before = await bundle('before', true);
const after = await bundle('after', control);
const cases = {
  'raw-color': {
    format: { property: 'color' },
    values: ['red', 'blue', 'rgb(30 40 50 / .8)', 'initial', 'future-color(1)', null, undefined],
  },
  'raw-width': {
    format: { property: 'width' },
    values: ['20px', '24px', 'calc(1px + 2px)', '-2px', 'var(--external, green)', null],
  },
  'token-display': {
    format: { property: 'display', tokens: ['flex', 'grid', 'initial'] },
    values: ['flex', 'grid', 'initial', null],
  },
  'numeric-opacity': {
    format: { property: 'opacity', numbers: [{}] },
    values: [0, 0.5, 1, 2, null],
  },
};
function sample(engine, name, iterations) {
  const { format, values } = cases[name];
  const binding = engine.createDeclarationBinding('--probe', format);
  const bindings = Object.create(null);
  let checksum = 0,
    inline = 0,
    direct = 0;
  const start = performance.now();
  for (let i = 0; i < iterations; i++) {
    delete bindings['--probe'];
    const result = engine.bindValue(bindings, '--probe', binding, values[i % values.length]);
    checksum += String(result).length + (bindings['--probe']?.length ?? 0);
    if (bindings['--probe'] !== undefined) inline++;
    else direct++;
  }
  return { ms: performance.now() - start, checksum, inline, direct, bindings };
}

const report = {
  baseline,
  control,
  node: process.version,
  iterations: 300_000,
  warmup: 30_000,
  rounds: 9,
  cases: {},
};
for (const name of Object.keys(cases)) {
  sample(before, name, report.warmup);
  sample(after, name, report.warmup);
  const samples = { before: [], after: [] };
  for (let round = 0; round < report.rounds; round++) {
    const pair = {};
    for (const side of round % 2 ? ['after', 'before'] : ['before', 'after']) {
      global.gc?.();
      pair[side] = sample(side === 'before' ? before : after, name, report.iterations);
      samples[side].push(pair[side].ms);
    }
    assert.deepEqual({ ...pair.before, ms: 0 }, { ...pair.after, ms: 0 }, name);
  }
  const median = (values) => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
  const beforeMs = median(samples.before);
  const afterMs = median(samples.after);
  report.cases[name] = { beforeMs, afterMs, ratio: afterMs / beforeMs, samples };
  console.log(name, JSON.stringify({ beforeMs, afterMs, ratio: afterMs / beforeMs }));
}
await writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
