// 热更新对照：相同 DOM、数值和布局刷新，不含框架调度、网络及 JS 首次加载。
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { build } from 'esbuild';
import { root } from '../../scripts/lib/environment.mjs';
import {
  launchBrowser,
  browserEngine,
  browserChannel,
} from '../../scripts/testing/browser-launch.mjs';

const output = resolve(root, 'test-results/native-css-performance');
await mkdir(output, { recursive: true });
await writeFile(
  resolve(output, 'results.json'),
  JSON.stringify({ passed: false, status: 'running' }),
);
const bundle = await build({
  stdin: {
    contents: `export {createRuntime,cssVar} from './core/dist/index.js'; export {prepareStyle,formatUnitValues} from './core/dist/compiler-runtime.js'; export {lightTheme} from './core/dist/themes.js'; export {createThemeScope,createRuntimeView} from './core/dist/style-scope.js';`,
    resolveDir: root,
  },
  bundle: true,
  format: 'iife',
  globalName: 'bench',
  platform: 'browser',
  target: 'es2023',
  minify: true,
  write: false,
});
const browser = await launchBrowser();
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.setContent(`<style>
    .bench{display:flex;flex-wrap:wrap;width:800px;contain:layout}
    .bench>div{height:2px;flex:none;padding:0;border:0;margin:0}
    .native-static{width:20px}.native-vars{width:var(--bench-width,20px)}
    ${Array.from({ length: 16 }, (_, i) => `.native-w${i + 20}{width:${i + 20}px}`).join('')}
  </style>`);
  await page.addScriptTag({ content: bundle.outputFiles[0].text });
  const result = await page.evaluate(async () => {
    const {
      createRuntime,
      cssVar,
      prepareStyle,
      formatUnitValues,
      lightTheme,
      createThemeScope,
      createRuntimeView,
    } = window.bench;
    // 原生主题基线直接使用预先生成的同一份 CSS，不把生成耗时放入原生更新。
    const reference = createRuntime({ target: null, namespace: 'native-theme' });
    let nativeTheme;
    try {
      nativeTheme = lightTheme.className(reference);
      document.head.insertAdjacentHTML('beforeend', reference.renderStyles());
    } finally {
      reference.dispose();
    }
    const nodesPerBatch = 200,
      batches = 50,
      rounds = 7,
      warmupBatches = 10;
    const names = [
      'native-static',
      'prepared-static',
      'runtime-static',
      'native-vars',
      'prepared-vars',
      'native-classes',
      'runtime-classes',
      'native-themed',
      'prepared-themed',
    ];
    const samples = Object.fromEntries(names.map((name) => [name, []]));
    const staticKey = 'a'.repeat(64),
      variableKey = 'b'.repeat(64),
      alternatives = [[{ min: 0 }]];
    let sequence = 0;
    function sample(name) {
      const stage = document.createElement('div');
      stage.className = 'bench';
      const nodes = Array.from({ length: nodesPerBatch }, () =>
        stage.appendChild(document.createElement('div')),
      );
      document.body.appendChild(stage);
      const runtime = name.startsWith('native')
        ? undefined
        : createRuntime({ namespace: `perf${sequence++}` });
      const view =
        name === 'prepared-themed'
          ? createRuntimeView(
              runtime,
              createThemeScope(lightTheme, () => lightTheme.defaults),
            )
          : runtime;
      const previous = Array(nodesPerBatch).fill('');
      const dynamic = name.endsWith('vars') || name.endsWith('classes');
      let checksum = 0;
      function update(batch) {
        for (let i = 0; i < nodes.length; i++) {
          const value = dynamic ? 20 + ((batch + i) % 16) : 20;
          let className;
          if (name === 'native-static') className = 'native-static';
          else if (name === 'native-themed') className = `native-static ${nativeTheme}`;
          else if (name === 'native-vars') className = 'native-vars';
          else if (name === 'native-classes') className = `native-w${value}`;
          else if (name === 'prepared-vars')
            className = runtime.css(
              prepareStyle((s) => {
                s.width.raw(cssVar('--bench-width', '20px'));
              }, variableKey),
            );
          else if (name === 'prepared-static' || name === 'prepared-themed')
            className = view.css(
              prepareStyle((s) => {
                s.width.px(20);
              }, staticKey),
            );
          else
            className = runtime.css((s) => {
              s.width.px(value);
            });
          // 模拟相同 class 的差异更新，静态路径不人为重复写 DOM。
          if (previous[i] !== className) {
            nodes[i].className = className;
            previous[i] = className;
          }
          if (name.endsWith('vars'))
            nodes[i].style.setProperty(
              '--bench-width',
              name === 'native-vars'
                ? `${value}px`
                : formatUnitValues([value], alternatives, 'px', ' '),
            );
        }
        // 每批读取布局，避免把数千次写入全部合并后误称渲染成本。
        checksum += stage.offsetHeight;
      }
      try {
        for (let batch = 0; batch < warmupBatches; batch++) update(batch);
        const start = performance.now();
        for (let batch = 0; batch < batches; batch++) update(batch);
        const milliseconds = performance.now() - start;
        for (let i = 0; i < nodes.length; i++) {
          const expected = dynamic ? 20 + ((batches - 1 + i) % 16) : 20;
          if (getComputedStyle(nodes[i]).width !== `${expected}px`)
            throw new Error(`Incorrect output: ${name}, element ${i}`);
        }
        const records = runtime?.stats().records ?? 0;
        if (
          name.endsWith('themed') &&
          getComputedStyle(nodes[0])
            .getPropertyValue(lightTheme.tokens.color.primary.name)
            .trim() !== lightTheme.defaults.color.primary
        )
          throw new Error(`Incorrect theme value: ${name}`);
        if (
          records !==
          (name.startsWith('native')
            ? 0
            : name === 'runtime-classes'
              ? 16
              : name === 'prepared-themed'
                ? 2
                : 1)
        )
          throw new Error(`Unexpected rule growth: ${name}`);
        return { milliseconds, records, checksum };
      } finally {
        stage.remove();
        runtime?.dispose();
      }
    }
    for (let round = 0; round < rounds; round++) {
      const order = [...names.slice(round), ...names.slice(0, round)];
      if (round % 2) order.reverse();
      for (const name of order) {
        await new Promise((resolve) => requestAnimationFrame(resolve));
        samples[name].push(sample(name));
      }
    }
    return {
      nodesPerBatch,
      batches,
      rounds,
      warmupBatches,
      samples,
      medians: Object.fromEntries(
        names.map((name) => [
          name,
          samples[name].map((v) => v.milliseconds).sort((a, b) => a - b)[Math.floor(rounds / 2)],
        ]),
      ),
    };
  });
  assert.deepEqual(errors, []);
  const report = {
    passed: true,
    status: 'passed',
    browser: browser.version(),
    engine: browserEngine,
    channel: browserChannel,
    note: '已加载引擎的核心热路径；不包含 Vue/Svelte 调度、网络和 JS 首次解析。静态原生 CSS 没有引擎计算，基线只保留相同循环/差异检查。',
    ...result,
  };
  await writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ browser: report.browser, medians: report.medians }, null, 2));
} finally {
  await browser.close();
}
