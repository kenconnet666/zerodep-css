import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createSSRApp, effectScope, ref, nextTick } from 'vue';
import { ThemeCss } from '../../dist/themes.js';
import { createStyles, Css } from '../../dist/index.js';

test('项目配置拒绝旧位置参数和错误配置，宿主以原生应用上下文安装', () => {
  const project = createStyles();
  assert.throws(() => project.useCss(), /Provide a style context/);
  for (const invalid of [
    { cssType: class {} },
    { cssType: null },
    { theme: null },
    { context: null },
    { debug: true },
    new Date(),
  ])
    assert.throws(() => createStyles(invalid));
  const host = project.createHost({ target: null });
  const app = createSSRApp({ render: () => null });
  app.use(host);
  try {
    assert.equal(typeof app.runWithContext(project.useCss), 'function');
    assert.throws(
      () => app.runWithContext(() => project.useGlobalCss('outside', () => {})),
      /active Vue/,
    );
  } finally {
    host.dispose();
  }
});

test('用户可以继承内置主题继续扩展，系统基类仍保持独立', () => {
  class BrandedCss extends ThemeCss {
    get color() {
      return this.extendProperty(super.color, { brand: '#123456' });
    }
  }
  const project = createStyles({ cssType: BrandedCss });
  const plain = createStyles({ cssType: Css });
  const host = project.createHost({ target: null });
  const app = createSSRApp({ render: () => null });
  app.use(host);
  const scope = effectScope();
  try {
    scope.run(() =>
      app.runWithContext(() => {
        const css = project.useCss();
        css((s) => {
          s.color.red;
          s.color.primary;
          s.color.brand;
          s.focus((h) => h.color.brand);
        });
        project.useGlobalCss('brand', (g) => g.rule('button', (s) => s.color.brand));
        assert.throws(() => plain.useCss()((s) => s.color.primary), /Unknown keyword/);
      }),
    );
    assert.doesNotMatch(host.renderStyles(), /color:red|color:var\(--zt-/);
    assert.match(host.renderStyles(), /color:#123456/);
  } finally {
    scope.stop();
    host.dispose();
  }
});

test('Vue 服务端不订阅状态，scope 结束后规则保留到请求输出', async () => {
  const project = createStyles();
  const host = project.createHost({ target: null });
  const app = createSSRApp({ render: () => null });
  app.use(host);
  const color = ref('red');
  const scope = effectScope();
  let count = 0;
  try {
    scope.run(() =>
      app.runWithContext(() =>
        project.useGlobalCss('page', (g) => {
          count++;
          g.rule('body', (s) => s.color.raw(color.value));
        }),
      ),
    );
    color.value = 'blue';
    await nextTick();
    scope.stop();
    assert.equal(count, 1);
    assert.equal(host.stats().globals, 1);
    assert.match(host.renderStyles(), /color:red/);
  } finally {
    scope.stop();
    host.dispose();
  }
});

test('已释放的宿主在创建新 hook 时就拒绝，不提前执行业务工厂', () => {
  const project = createStyles();
  const host = project.createHost({ target: null });
  const app = createSSRApp({ render: () => null });
  app.use(host);
  const css = app.runWithContext(project.useCss);
  host.dispose();
  let calls = 0;
  assert.throws(() => css(() => calls++), /disposed/);
  const scope = effectScope();
  try {
    scope.run(() =>
      app.runWithContext(() => {
        assert.throws(() => project.useCss(), /disposed/);
        assert.throws(() => project.useGlobalCss('late', () => calls++), /disposed/);
      }),
    );
    assert.equal(calls, 0);
  } finally {
    scope.stop();
  }
});
