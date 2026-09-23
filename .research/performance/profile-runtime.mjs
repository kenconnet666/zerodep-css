// 采样只用于定位 JS 热点；时间比例不作为 Vue/Svelte 或页面速度承诺。
import assert from 'node:assert/strict';
import { Session } from 'node:inspector';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { promisify } from 'node:util';
import { createRuntime } from '../../internal/runtime/dist/index.js';
import { bindUnit, prepareStyle } from '../../internal/runtime/dist/compiler-runtime.js';
import {
  createRuntimeView,
  createThemeScope,
  prepareThemeStyle,
} from '../../internal/runtime/dist/style-scope.js';
import { lightTheme, ThemeCss } from '../../core/dist/themes.js';
import { root } from '../../scripts/lib/environment.mjs';

const label = process.argv[2] ?? 'current';
if (!/^[a-z0-9-]+$/.test(label)) throw new Error('Use a plain profile label.');
const output = resolve(root, 'test-results/runtime-profile', label);
await mkdir(output, { recursive: true });
const session = new Session();
session.connect();
const post = promisify(session.post).bind(session);
const report = {
  revision: execFileSync('git', ['rev-parse', 'HEAD'], { cwd: root }).toString().trim(),
  node: process.version,
  iterations: 100_000,
  warmup: 5_000,
  note: 'Node CSS 计算采样，不包含 DOM/框架/网络；准备和首次注册在采样前完成。',
  cases: {},
};

function source(url) {
  return url.startsWith('file:') ? relative(root, fileURLToPath(url)).replaceAll('\\', '/') : url;
}
function category(frame) {
  const url = source(frame.url);
  if (frame.functionName === '(garbage collector)') return 'gc';
  if (url.includes('css-tree/lib/tokenizer/')) return 'value-tokenizer';
  if (url.includes('css-tree/dist/')) return 'full-css-parser';
  if (url.endsWith('core/dist/css-value.js')) return 'value-boundary';
  if (url.endsWith('core/dist/css.js')) return 'author-proxy';
  if (url.endsWith('/builder.js')) return 'builder';
  if (url.endsWith('/normalize.js')) return 'normalize';
  if (url.endsWith('/runtime.js')) return 'runtime-cache';
  if (url.includes('internal/runtime/')) return 'other-runtime';
  return url.includes('profile-runtime') ? 'harness' : 'other';
}

try {
  await post('Profiler.enable');
  for (const name of [
    'keyword',
    'unit',
    'three-properties',
    'nested',
    'raw-variable',
    'automatic-unit',
    'prepared',
    'themed-unit',
  ]) {
    const runtime = createRuntime({ target: null });
    const prepared = prepareStyle((s) => s.width.raw('var(--profile-width)'), 'a'.repeat(64));
    const preparedTheme = prepareThemeStyle(lightTheme, lightTheme.defaults);
    const scope = createThemeScope(
      lightTheme,
      () => lightTheme.defaults,
      undefined,
      () => preparedTheme,
    );
    const view = createRuntimeView(runtime, scope, ThemeCss);
    const run = (index) => {
      if (name === 'keyword')
        return runtime.css((s) => {
          s.color.red;
        });
      if (name === 'unit') return runtime.css((s) => s.width.px(20 + (index % 16)));
      if (name === 'three-properties')
        return runtime.css((s) => {
          s.display.flex;
          s.width.px(20 + (index % 16));
          s.color.red;
        });
      if (name === 'nested')
        return runtime.css((s) => {
          s.color.red;
          s.width.px(20 + (index % 16));
          s.hover((h) => h.color.blue);
        });
      if (name === 'raw-variable') return runtime.css((s) => s.width.raw('var(--profile-width)'));
      if (name === 'prepared') return runtime.css(prepared);
      if (name === 'themed-unit') return view.css((s) => s.width.px(20 + (index % 16)));
      const bindings = Object.create(null);
      return runtime.css((s) =>
        s.width.raw(
          bindUnit(bindings, '--profile-width', [20 + (index % 16)], [[{ min: 0 }]], 'px', ' '),
        ),
      );
    };
    try {
      for (let i = 0; i < report.warmup; i++) run(i);
      const before = runtime.snapshot();
      await post('Profiler.start');
      for (let i = 0; i < report.iterations; i++) run(i);
      const { profile } = await post('Profiler.stop');
      assert.deepEqual(runtime.snapshot(), before);
      const nodes = new Map(profile.nodes.map((node) => [node.id, node]));
      const categories = {},
        functions = new Map();
      let activeMicros = 0;
      for (let i = 0; i < profile.samples.length; i++) {
        const frame = nodes.get(profile.samples[i]).callFrame;
        if (frame.functionName === '(idle)' || frame.url === 'node:inspector') continue;
        const micros = profile.timeDeltas[i];
        activeMicros += micros;
        const group = category(frame);
        categories[group] = (categories[group] ?? 0) + micros;
        const key = source(frame.url) + ':' + frame.functionName;
        functions.set(key, (functions.get(key) ?? 0) + micros);
      }
      report.cases[name] = {
        activeSampleMs: activeMicros / 1000,
        percent: Object.fromEntries(
          Object.entries(categories).map(([key, value]) => [
            key,
            Math.round((1000 * value) / activeMicros) / 10,
          ]),
        ),
        top: [...functions]
          .sort((a, b) => b[1] - a[1])
          .slice(0, 12)
          .map(([functionName, micros]) => ({ functionName, sampleMs: micros / 1000 })),
        records: runtime.stats().records,
      };
      await writeFile(resolve(output, name + '.cpuprofile'), JSON.stringify(profile));
      console.log(name, JSON.stringify(report.cases[name].percent));
    } finally {
      runtime.dispose();
    }
  }
  await writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
} finally {
  session.disconnect();
}
