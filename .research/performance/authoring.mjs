// Node 计算探针：交替轮次、相同输出校验，不把结果外推为浏览器帧率。
import assert from 'node:assert/strict';
import { performance } from 'node:perf_hooks';
import { createRuntime, readTheme, Css } from '../../core/dist/index.js';
import { lightTheme, darkTheme, ThemeCss } from '../../core/dist/themes.js';
import { createThemeScope, createRuntimeView } from '../../core/dist/style-scope.js';

const iterations = 2000;
const rounds = 5;
class AppCss extends Css {}
const basic = (s) => {
  s.display.flex;
  s.padding.px(8, 16);
};
const themeTokens = (s) => {
  s.color.primary;
  s.color.text;
  s.color.textMuted;
  s.padding.sm;
  s.padding.md;
  s.padding.lg;
};
const themeValues = (s) => {
  s.color.raw(lightTheme.tokens.color.primary);
  s.color.raw(lightTheme.tokens.color.text);
  s.color.raw(lightTheme.tokens.color.textMuted);
  s.padding.raw(lightTheme.tokens.space.sm);
  s.padding.raw(lightTheme.tokens.space.md);
  s.padding.raw(lightTheme.tokens.space.lg);
};
const cases = [
  'runtime',
  'configured',
  'themed',
  'themeSwitch',
  'keywords',
  'rawTokens',
  'resolve',
  'resolveInherited',
  'read',
];
function sample(name) {
  const runtime = createRuntime({ target: null });
  let current = lightTheme.defaults;
  const scope = createThemeScope(lightTheme, () => current);
  const configured = createRuntimeView(runtime, undefined, AppCss);
  const preset = createRuntimeView(runtime, undefined, ThemeCss);
  const inherited = lightTheme.resolve({ color: { primary: '#654321' } });
  const themed = createRuntimeView(runtime, scope);
  let last;
  const step = (i) => {
    if (name === 'runtime') return runtime.css(basic);
    if (name === 'configured') return configured.css(basic);
    if (name === 'themed') return themed.css(basic);
    if (name === 'themeSwitch') {
      current = i % 2 ? lightTheme.defaults : darkTheme.defaults;
      return themed.css(basic);
    }
    if (name === 'keywords') return preset.css(themeTokens);
    if (name === 'rawTokens') return runtime.css(themeValues);
    if (name === 'resolve')
      return lightTheme.resolve({ color: { primary: '#123456' } }, lightTheme.defaults);
    if (name === 'resolveInherited')
      return lightTheme.resolve({ color: { primary: '#123456' } }, inherited);
    return readTheme(lightTheme, scope);
  };
  try {
    for (let i = 0; i < 100; i++) step(i);
    const start = performance.now();
    for (let i = 0; i < iterations; i++) last = step(i);
    const milliseconds = performance.now() - start;
    const records = runtime.stats().records;
    if (name.startsWith('resolve')) assert.equal(last.color.primary, '#123456');
    else if (name === 'read') assert.equal(last, lightTheme.defaults);
    else assert.equal(typeof last, 'string');
    if (name === 'keywords' || name === 'rawTokens')
      assert.equal(preset.css(themeTokens), runtime.css(themeValues));
    assert.equal(
      records,
      name === 'themed'
        ? 2
        : name === 'themeSwitch'
          ? 3
          : ['resolve', 'resolveInherited', 'read'].includes(name)
            ? 0
            : 1,
    );
    return { milliseconds, records };
  } finally {
    runtime.dispose();
  }
}
const samples = Object.fromEntries(cases.map((name) => [name, []]));
for (let round = 0; round < rounds; round++)
  for (const name of round % 2 ? [...cases].reverse() : cases) samples[name].push(sample(name));
const medians = Object.fromEntries(
  cases.map((name) => [
    name,
    [...samples[name]].map((v) => v.milliseconds).sort((a, b) => a - b)[Math.floor(rounds / 2)],
  ]),
);
console.log(
  JSON.stringify({ node: process.version, iterations, rounds, medians, samples }, null, 2),
);
