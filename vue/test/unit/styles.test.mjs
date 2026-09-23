import assert from 'node:assert/strict';
import test from 'node:test';
import { createSSRApp, h } from 'vue';
import { renderToString } from 'vue/server-renderer';
import { Css, defineTheme } from '../../../core/dist/index.js';
import { createStyles } from '../../dist/styles.js';

const theme = defineTheme('project', { color: { brand: 'red' }, gap: 4 });
class AppCss extends Css {
  get color() {
    return this.extendProperty(super.color, theme.tokens.color);
  }
  control() {
    this.padding.px(8);
  }
}

test('项目配置不创建隐藏实例，作者类型只配置一次并保持快照', () => {
  let reads = 0;
  const options = {
    get cssType() {
      reads++;
      return AppCss;
    },
    theme,
  };
  const styles = createStyles(options);
  assert.equal(reads, 1);
  assert.throws(() => styles.useCss(), /Provide a style context/);
  const host = styles.createHost({ target: null });
  const app = createSSRApp({ render: () => null });
  try {
    host.install(app);
    host.install(app);
    assert.throws(() => host.install(createSSRApp({ render: () => null })), /one Vue application/);
    const css = app.runWithContext(styles.useCss);
    const name = css((s) => {
      assert(s instanceof AppCss);
      s.control();
      s.color.brand;
    });
    assert.equal(typeof name, 'string');
    assert.equal(reads, 1);
    assert.match(host.renderStyles(), /padding:8px/);
    host.dispose();
    assert.throws(() => css((s) => s.display.flex), /disposed/);
    assert.throws(() => host.install(app), /disposed/);
  } finally {
    host.dispose();
  }
});

test('项目主题快捷与全局作者类型按 SSR 请求隔离，输出后再释放', async () => {
  const styles = createStyles({ cssType: AppCss, theme });
  const extra = defineTheme('extra', { opacity: 0.5 });
  const render = async (brand) => {
    const host = styles.createHost({ target: null, namespace: 'project' });
    const app = createSSRApp({
      setup() {
        styles.provideTheme({ color: { brand } });
        styles.provideTheme(extra, { opacity: 0.8 });
        const current = styles.useTheme();
        const opacity = styles.useTheme(extra);
        const css = styles.useCss();
        styles.useGlobalCss('body', (g) => g.rule('body', (s) => s.control()));
        const base = css((s) => {
          s.important((s) => s.color.red);
        });
        return () =>
          h(
            'div',
            { class: css(base, 'foreign', [false, null, (s) => s.color.blue]) },
            current().color.brand + ':' + opacity().opacity,
          );
      },
    });
    host.install(app);
    try {
      const html = await renderToString(app);
      const snapshot = host.snapshot();
      assert.equal(snapshot.globals.length, 1);
      assert.match(host.renderStyles(), /body\{padding:8px/);
      assert.equal(JSON.parse(host.renderManifest()).globals.length, 1);
      return { html, snapshot };
    } finally {
      host.dispose();
    }
  };
  const [first, second] = await Promise.all([render('orange'), render('purple')]);
  assert.match(first.html, /orange:0\.8/);
  assert.match(second.html, /purple:0\.8/);
  assert.match(first.html, /foreign/);
  assert(!JSON.stringify(first.snapshot).includes('purple'));
  assert(!JSON.stringify(second.snapshot).includes('orange'));
});

test('默认主题缺失时必须明确传定义，静态覆盖与 getter 使用同一 API', async () => {
  const styles = createStyles();
  const host = styles.createHost({ target: null });
  const app = createSSRApp({
    setup() {
      assert.throws(() => styles.useTheme(), /no default theme/);
      assert.throws(() => styles.provideTheme({ color: 'red' }), /no default theme/);
      styles.provideTheme(theme, () => ({ gap: 8 }));
      const current = styles.useTheme(theme);
      return () => h('div', String(current().gap));
    },
  });
  host.install(app);
  try {
    assert.match(await renderToString(app), />8</);
  } finally {
    host.dispose();
  }
});

test('共享宿主时作者预设与 useTheme 一致，实际 provider 优先于预设', () => {
  const blue = theme.extend({ color: { brand: 'blue' } });
  const project = createStyles({ cssType: AppCss, theme: blue });
  for (const root of [createStyles(), createStyles({ theme })]) {
    const host = root.createHost({ target: null });
    const app = createSSRApp({ render: () => null });
    host.install(app);
    try {
      app.runWithContext(() => {
        const current = project.useTheme();
        const css = project.useCss();
        const tokens = css((s) => s.color.brand).split(' ');
        const record = host.snapshot().runtime.records.find((record) => record.id === tokens[0]);
        assert(record.body.includes(':' + current().color.brand + ';'));
      });
    } finally {
      host.dispose();
    }
  }
});
