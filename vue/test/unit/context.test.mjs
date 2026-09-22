import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createSSRApp, effectScope, ref, nextTick } from 'vue';
import { ThemeCss } from '../../../core/dist/themes.js';
import {
  createStyleContext,
  installStyleContext,
  useStyleRuntime,
  useGlobalCss,
  Css,
} from '../../dist/index.js';

test('Vue 显式上下文、应用注入与缺失上下文诊断', () => {
  const context = createStyleContext({ target: null });
  assert.throws(() => useStyleRuntime(), /Provide a style context/);
  assert.equal(useStyleRuntime(context), context.runtime);
  const app = createSSRApp({ render: () => null });
  installStyleContext(app, context);
  assert.equal(
    app.runWithContext(() => useStyleRuntime()),
    context.runtime,
  );
  assert.throws(() => useGlobalCss('outside', () => {}, context), /active Vue/);
  context.dispose();
});

test('选项视图绑定默认派生类、保留逐次覆盖且捕获初始化选项', () => {
  class AppCss extends Css {
    control() {
      this.padding.px(8);
    }
  }
  const context = createStyleContext({ target: null });
  try {
    const options = { context, cssType: AppCss };
    const view = useStyleRuntime(options);
    options.cssType = Css;
    const id = view.css((s) => {
      assert(s instanceof AppCss);
      s.control();
    });
    assert.equal(
      view.css((s) => {
        assert.equal(s.constructor, Css);
        s.padding.px(8);
      }, Css),
      id,
    );
    assert.equal(context.runtime.stats().classes, 1);
    assert.equal(view.dispose, context.runtime.dispose);
    for (const invalid of [
      { cssType: class {} },
      { cssType: null },
      { theme: null },
      { context: null },
      { debug: true },
      new Date(),
    ])
      assert.throws(() => useStyleRuntime(invalid));
    context.dispose();
    assert.throws(() => view.css((s) => s.control()), /disposed/i);
  } finally {
    context.dispose();
  }
});

test('用户可以继承内置主题继续扩展，系统基类仍保持独立', () => {
  class BrandedCss extends ThemeCss {
    get color() {
      return this.extendProperty(super.color, { brand: '#123456' });
    }
  }
  const context = createStyleContext({ target: null });
  try {
    const { css } = useStyleRuntime({ context, cssType: BrandedCss });
    css((s) => {
      s.color.red;
      s.color.primary;
      s.color.brand;
      s.focus((h) => h.color.brand);
    });
    context.runtime.mountGlobal((g) => g.rule('button', (s) => s.color.brand, BrandedCss));
    assert.match(context.renderStyles(), /color:red;color:var\(--zt-/);
    assert.match(context.renderStyles(), /color:#123456/);
    assert.throws(() => context.runtime.css((s) => s.color.primary), /Unknown keyword/);
  } finally {
    context.dispose();
  }
});
test('Vue 服务端不订阅状态，scope 结束后规则保留到请求输出', async () => {
  const context = createStyleContext({ target: null });
  const color = ref('red');
  const scope = effectScope();
  let count = 0;
  scope.run(() =>
    useGlobalCss(
      'page',
      (g) => {
        count++;
        g.rule('body', (s) => s.color.raw(color.value));
      },
      context,
    ),
  );
  color.value = 'blue';
  await nextTick();
  scope.stop();
  assert.equal(count, 1);
  assert.equal(context.runtime.stats().globals, 1);
  assert.match(context.renderStyles(), /color:red/);
  context.dispose();
});
