import assert from 'node:assert/strict';
import test from 'node:test';
import { Css, createRuntime, defineTheme, globalCss, keyframes } from '../../dist/index.js';
import { createRuntimeView, createThemeScope } from '../../dist/style-scope.js';
import { prepareStyle, withStyleSource } from '../../dist/compiler-runtime.js';

test('本宿主 class 与回调按序组合，foreign class 和空项保留原生边界', () => {
  const runtime = createRuntime({ target: null });
  try {
    const base = runtime.css((s) => {
      s.important((i) => i.color.red);
      s.hover((h) => h.color.red);
    });
    let calls = 0;
    const result = runtime.css([
      false,
      'foreign\u00a0name',
      base,
      [
        null,
        undefined,
        (s) => {
          calls++;
          s.color.blue;
        },
      ],
    ]);
    assert.equal(calls, 1);
    assert.match(result, /^foreign\u00a0name z-c-/);
    const body = runtime
      .snapshot()
      .records.find((record) => record.id === result.split(' ')[1]).body;
    assert.equal(body, '&:hover{color:red;}color:blue;');
    assert.equal(runtime.css(base), base);
    assert.equal(runtime.css('foreign one'), 'foreign one');
    assert.equal(runtime.css(false, null, undefined), '');
  } finally {
    runtime.dispose();
  }
});

test('恢复记录仍可严格反解组合，并保持动画依赖与来源', () => {
  const first = createRuntime({ target: null });
  const source = { file: 'src/Card.vue', line: 1, column: 2 };
  const fade = keyframes((k) => {
    k.from((s) => s.opacity.raw(0));
    k.to((s) => s.opacity.raw(1));
  });
  let original;
  let restored;
  try {
    original = first.css(
      withStyleSource((s) => {
        s.name('card');
        s.animationName.raw(fade);
        s.media('(width > 400px)', (m) => m.color.red);
      }, source),
    );
    restored = createRuntime({ target: null, hydrate: first.snapshot() });
    const composed = restored.css(original, (s) => s.color.blue);
    const record = restored.snapshot().records.find((entry) => entry.id === composed);
    assert(record.body.includes('@media (width>400px){color:red}'));
    assert(record.body.endsWith('color:blue;'));
    assert.equal(record.dependencies.length, 1);
    assert.equal(
      restored.snapshot().records.find((entry) => entry.id === record.dependencies[0]).kind,
      'keyframes',
    );
    assert.deepEqual(record.debug.sources, [source]);
    assert.equal(record.name, 'card');
  } finally {
    first.dispose();
    restored?.dispose();
  }
});

test('组合失败不注册半成品，单回调快速路径保持原身份', () => {
  const runtime = createRuntime({ target: null });
  try {
    const before = runtime.stats().records;
    let calls = 0;
    assert.throws(
      () =>
        runtime.css(
          (s) => {
            calls++;
            s.color.red;
          },
          () => {
            calls++;
            throw new Error('stop');
          },
        ),
      /stop/,
    );
    assert.equal(calls, 2);
    assert.equal(runtime.stats().records, before);
    assert.throws(() => runtime.css(['foreign', 7]), /Expected a CSS class/);
    assert.equal(runtime.stats().records, before);
    const item = [];
    item.push(item);
    assert.throws(() => runtime.css(item), /Cyclic CSS style input/);
    const factory = (s) => s.color.blue;
    assert.equal(runtime.css(factory), runtime.css(factory));
  } finally {
    runtime.dispose();
  }
});

test('组合中后写名称和明确 debug 配置生效，关闭时不泄漏旧来源', () => {
  const runtime = createRuntime({ target: null });
  const source = { file: 'src/First.vue', line: 1, column: 1 };
  try {
    const first = runtime.css(
      withStyleSource((s) => {
        s.name('first');
        s.color.red;
      }, source),
    );
    const last = runtime.css(first, (s) => {
      s.name('last').config({ debug: false });
      s.color.blue;
    });
    const record = runtime.snapshot().records.find((entry) => entry.id === last);
    assert.equal(record.name, 'last');
    assert.equal(record.debug, undefined);
    const renamed = runtime.css(last, (s) => {
      s.name('final').config({ debug: true });
      s.padding.px(4);
    });
    const final = runtime.snapshot().records.find((entry) => entry.id === renamed);
    assert.equal(final.name, 'final');
    assert.deepEqual(final.debug.sources, []);
  } finally {
    runtime.dispose();
  }
});

test('派生作者类型传入整个输入数组，并在全局嵌套规则中继承', () => {
  class AppCss extends Css {
    brand() {
      this.color.blue;
    }
  }
  const runtime = createRuntime({ target: null });
  try {
    const className = runtime.css([(s) => s.brand(), (s) => s.padding.px(4)], AppCss);
    assert.equal(
      runtime.snapshot().records.find((record) => record.id === className).body,
      'color:blue;padding:4px;',
    );
    const sheet = globalCss((g) => {
      g.rule('body', (s) => s.brand());
      g.media('screen', (m) => m.rule('main', (s) => s.brand()));
    }, AppCss);
    const handle = runtime.mountGlobal(sheet);
    assert.match(
      runtime.snapshot().records.find((record) => record.id === handle.id).body,
      /body\{color:blue/,
    );
    assert.match(
      runtime.snapshot().records.find((record) => record.id === handle.id).body,
      /main\{color:blue/,
    );
    handle.dispose();
  } finally {
    runtime.dispose();
  }
});

test('当前主题 class 在组合结果中只出现一次', () => {
  const runtime = createRuntime({ target: null });
  const theme = defineTheme('test', { color: { brand: 'red' } });
  const scope = createThemeScope(theme, () => theme.defaults);
  const view = createRuntimeView(runtime, scope);
  try {
    let builds = 0;
    const prepared = prepareStyle((s) => {
      builds++;
      s.display.flex;
    }, '1'.repeat(64));
    assert.equal(view.css(prepared), view.css(prepared));
    assert.equal(builds, 1, '主题视图中的单回调仍走 prepared 快速路径');
    const base = view.css((s) => s.color.red);
    const currentTheme = base.split(' ')[0];
    const merged = view.css(base, (s) => s.color.blue);
    assert.equal(merged.split(' ').filter((part) => part === currentTheme).length, 1);
  } finally {
    runtime.dispose();
  }
});
