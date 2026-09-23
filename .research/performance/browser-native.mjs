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
    contents: `export {createRuntime} from './internal/runtime/dist/index.js'; export {cssVar} from '@zerodep-css/core'; export {prepareStyle,formatUnitValues} from './internal/runtime/dist/compiler-runtime.js'; export {lightTheme} from '@zerodep-css/core/themes'; export {createThemeScope,createRuntimeView,prepareThemeStyle} from './internal/runtime/dist/style-scope.js';`,
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
      prepareThemeStyle,
    } = window.bench;
    // 对齐框架准备器：只在样本计时外构建一次默认主题样式。
    const preparedTheme = prepareThemeStyle(lightTheme, lightTheme.defaults);
    // 原生主题只序列化共同输入数据，不经 runtime、哈希或样式解析器。
    const nativeThemeRules = [];
    function appendThemeValues(tokens, values) {
      for (const [key, token] of Object.entries(tokens)) {
        const value = values[key];
        if (token && typeof token === 'object' && typeof token.name === 'string') {
          if (typeof value !== 'string' && typeof value !== 'number')
            throw new Error(`Invalid native theme leaf: ${key}`);
          nativeThemeRules.push(`${token.name}:${value}`);
        } else if (token && typeof token === 'object' && value && typeof value === 'object') {
          appendThemeValues(token, value);
        } else {
          throw new Error(`Invalid native theme branch: ${key}`);
        }
      }
    }
    function countThemeLeaves(value) {
      return Object.values(value).reduce(
        (count, child) =>
          count + (child && typeof child === 'object' ? countThemeLeaves(child) : 1),
        0,
      );
    }
    appendThemeValues(lightTheme.tokens, lightTheme.defaults);
    const nativeThemeLeafCount = countThemeLeaves(lightTheme.defaults);
    if (nativeThemeRules.length !== nativeThemeLeafCount)
      throw new Error('Native theme baseline does not include every theme leaf.');
    const nativeThemeStyle = document.createElement('style');
    nativeThemeStyle.textContent = `.native-theme{${nativeThemeRules.join(';')}}`;
    document.head.appendChild(nativeThemeStyle);
    const nativeTheme = 'native-theme';
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
      const runtime = name.startsWith('native')
        ? undefined
        : createRuntime({ namespace: `perf${sequence++}` });
      const view =
        name === 'prepared-themed'
          ? createRuntimeView(
              runtime,
              createThemeScope(
                lightTheme,
                () => lightTheme.defaults,
                undefined,
                () => preparedTheme,
              ),
            )
          : runtime;
      let stage;
      let nodes = [];
      const previous = Array(nodesPerBatch).fill('');
      const dynamic = name.endsWith('vars') || name.endsWith('classes');
      let checksum = 0;
      function update(batch, initial = false) {
        for (let i = 0; i < nodes.length; i++) {
          const value = dynamic && !initial ? 20 + ((batch + i) % 16) : 20;
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
        const mountStart = performance.now();
        stage = document.createElement('div');
        stage.className = 'bench';
        nodes = Array.from({ length: nodesPerBatch }, () =>
          stage.appendChild(document.createElement('div')),
        );
        document.body.appendChild(stage);
        update(0, true);
        const mountMilliseconds = performance.now() - mountStart;
        for (let batch = 0; batch < warmupBatches; batch++) update(batch);
        const start = performance.now();
        for (let batch = 0; batch < batches; batch++) update(batch);
        const updateMilliseconds = performance.now() - start;
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
        return { mountMilliseconds, updateMilliseconds, records, checksum };
      } finally {
        stage?.remove();
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
      nativeThemeLeafCount,
      samples,
      medians: Object.fromEntries(
        ['mount', 'update'].map((phase) => [
          phase,
          Object.fromEntries(
            names.map((name) => {
              const metric = `${phase}Milliseconds`;
              const values = samples[name].map((sample) => sample[metric]).sort((a, b) => a - b);
              return [name, values[Math.floor(rounds / 2)]];
            }),
          ),
        ]),
      ),
    };
    nativeThemeStyle.remove();
  });
  assert.deepEqual(errors, []);
  const report = {
    passed: true,
    status: 'passed',
    browser: browser.version(),
    engine: browserEngine,
    channel: browserChannel,
    note: '纯 DOM 下界；native theme 只用 defaults/tokens 直接序列化相同主题叶，不调用引擎、哈希或解析器。prepared-* 是手工调用内部 prepareStyle 的计算下界，不代表完整编译插件路径；主题样式在计时外按 prepareThemeStyle 预备一次。真实框架编译对照由 frameworks.mjs 负责。不包含 Vue/Svelte 调度、runtime 创建、网络和 JS 首次解析。挂载计时包含节点创建、初始 class/变量写入和首次布局读取；更新计时包含后续差异更新与布局读取。静态原生 CSS 没有引擎计算，基线只保留相同循环/差异检查。',
    ...result,
  };
  await writeFile(resolve(output, 'results.json'), JSON.stringify(report, null, 2) + '\n');
  console.log(JSON.stringify({ browser: report.browser, medians: report.medians }, null, 2));
} finally {
  await browser.close();
}
