import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as core from '../../../core/dist/index.js';
import { createRuntime } from '../../../internal/runtime/dist/index.js';
import * as vue from '../../../vue/dist/index.js';
import * as svelte from '../../../svelte/dist/index.js';
import { createRuntime as vueRuntime } from '../../../vue/dist/runtime/index.js';
import { createRuntime as svelteRuntime } from '../../../svelte/dist/runtime/index.js';

test('适配器仅公开项目入口，宿主不暴露内部运行引擎', () => {
  for (const adapter of [vue, svelte]) {
    assert.deepEqual(Object.keys(adapter).sort(), [
      'Css',
      'createStyles',
      'cssVar',
      'defineTheme',
      'keyframes',
    ]);
    const styles = adapter.createStyles();
    const host = styles.createHost({ target: null });
    try {
      assert.equal(typeof styles.useCss, 'function');
      assert.equal(host.stats().records, 0);
      assert(!('runtime' in host));
      assert.throws(() => adapter.createStyles({ context: host }), /only accept/);
    } finally {
      host.dispose();
    }
    assert.throws(() => host.snapshot(), /disposed/);
  }
});

test('core 只公开作者模型，完整运行能力由适配器提供', () => {
  assert.deepEqual(Object.keys(core).sort(), ['Css', 'cssVar', 'defineTheme']);
  for (const adapter of [vue, svelte]) {
    assert(!('css' in adapter));
    assert(!('useStyleRuntime' in adapter));
    assert(!('useTheme' in adapter));
  }
  assert(!('useCss' in core));
  assert(!('buildStyleProgram' in core));
  // 目录/符号迁移前已记录的输出，防止纯重构意外改变 class 标识。
  const runtime = createRuntime({ target: null });
  assert.equal(
    runtime.css((s) => {
      s.display.flex;
      s.padding.px(8, 16);
    }),
    'z-c-gvofef-1b0pkte',
  );
  runtime.dispose();
});
test('局部与全局 containerQuery 的规则内容和旧命名无关', () => {
  const runtime = createRuntime({ target: null });
  runtime.css((s) => s.containerQuery('(width > 10px)', (s) => s.display.flex));
  runtime.mountGlobal((g) =>
    g.containerQuery('(width > 10px)', (g) => g.rule('body', (s) => s.display.flex)),
  );
  const records = runtime.snapshot().records;
  assert.equal(records[0].body, '@container (width>10px){display:flex}');
  assert.equal(records[1].body, '@container (width>10px){body{display:flex}}');
  runtime.dispose();
});

test('两适配包携带独立引擎并共享作者类、变量与主题身份', () => {
  assert.notEqual(vueRuntime, svelteRuntime);
  assert.equal(vue.Css, core.Css);
  assert.equal(svelte.Css, core.Css);
  const theme = core.defineTheme('identity', { color: { brand: 'red' } });
  class AppCss extends core.Css {
    get color() {
      return this.extendProperty(super.color, theme.tokens.color);
    }
  }
  const a = vueRuntime({ target: null }),
    b = svelteRuntime({ target: null });
  try {
    const style = (s) => {
      s.color.brand;
      s.width.raw(core.cssVar('--width', '1px'));
    };
    assert.equal(a.css(style, AppCss), b.css(style, AppCss));
    assert.equal(theme.className(a), theme.className(b));
    assert.deepEqual(a.snapshot(), b.snapshot());
  } finally {
    a.dispose();
    b.dispose();
  }
});
