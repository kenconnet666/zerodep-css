import assert from 'node:assert/strict';
import { test } from 'node:test';
import * as core from '../../../core/dist/index.js';
import * as vue from '../../../vue/dist/index.js';
import * as svelte from '../../../svelte/dist/index.js';

test('适配器仅接受初始化选项，拒绝旧位置参数而不是静默丢失主题', () => {
  const context = core.createStyleContext({ target: null });
  try {
    for (const adapter of [vue, svelte]) {
      assert.equal(adapter.useStyleRuntime({ context }), context.runtime);
      assert.throws(() => adapter.useStyleRuntime(context), /Unknown style runtime option/);
      assert.throws(() => adapter.useStyleRuntime(undefined, { themes: [] }), /one options object/);
    }
  } finally {
    context.dispose();
  }
});

test('作者入口保持 css 字符串合同，适配器不再暴露默认浏览器实例', () => {
  assert.equal(typeof core.css, 'function');
  assert.equal(typeof core.readTheme, 'function');
  for (const adapter of [vue, svelte]) {
    assert(!('css' in adapter));
    assert.equal(typeof adapter.useStyleRuntime, 'function');
    assert.equal(typeof adapter.useTheme, 'function');
  }
  assert(!('useCss' in core));
  assert(!('buildStyleProgram' in core));
  // 目录/符号迁移前已记录的输出，防止纯重构意外改变 class 标识。
  const runtime = core.createRuntime({ target: null });
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
  const runtime = core.createRuntime({ target: null });
  runtime.css((s) => s.containerQuery('(width > 10px)', (s) => s.display.flex));
  runtime.mountGlobal((g) =>
    g.containerQuery('(width > 10px)', (g) => g.rule('body', (s) => s.display.flex)),
  );
  const records = runtime.snapshot().records;
  assert.equal(records[0].body, '@container (width>10px){display:flex}');
  assert.equal(records[1].body, '@container (width>10px){body{display:flex}}');
  runtime.dispose();
});
