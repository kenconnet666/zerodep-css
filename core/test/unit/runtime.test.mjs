import assert from 'node:assert/strict';
import { test } from 'node:test';
import { css, createRuntime, globalCss, keyframes, cssVar } from '../../dist/index.js';
import { assertSameRecord } from '../../dist/runtime.js';
import { namedId } from '../../dist/serialize.js';

const server = (options) => createRuntime({ target: null, ...options });
const fade = () =>
  keyframes((k) => {
    k.from((s) => s.opacity.raw(0));
    k.to((s) => s.opacity.raw(1));
  });
test('css 返回字符串，同内容跨实例同名、同实例去重', () => {
  const a = server(),
    b = server();
  const factory = (s) => {
    s.display.flex;
    s.padding.px(8, 16);
  };
  const name = a.css(factory);
  assert.equal(typeof name, 'string');
  assert.equal(a.css(factory), name);
  assert.equal(b.css(factory), name);
  assert.equal(a.stats().classes, 1);
  assert.notEqual(
    a.css((s) => s.padding.px(9)),
    name,
  );
  assert.notEqual(server({ namespace: 'other' }).css(factory), name);
  assert.throws(() => css(factory), /request-local/);
  a.dispose();
  b.dispose();
});
test('序列化删除已替换声明，保留交错上下文、字面量 & 和原生嵌套', () => {
  const r = server();
  r.css((s) => {
    s.height.vh(100);
    s.height.dvh(100);
    s.color.red;
    s.hover((h) => h.color.blue);
    s.color.green;
    s.selector('&[data-symbol="&"]', (n) => n.content.raw('"a&b;c:d"'));
  });
  const body = r.snapshot().records[0].body;
  assert(!body.includes('100vh'));
  assert(body.includes('height:100dvh'));
  assert(!body.includes('color:red'));
  assert(body.indexOf('color:blue') < body.indexOf('color:green'));
  assert(body.includes('[data-symbol="&"]'));
  assert(body.includes('"a&b;c:d"'));
});
test('完整值和选择器边界拒绝注入，属性字符串中的 & 不算 nesting', () => {
  const r = server();
  for (const f of [
    (s) => s.color.raw('red;position:fixed'),
    (s) => s.selector('[data-x="&"]', (n) => n.color.red),
    (s) => s.color.raw('red!important'),
    (s) => s.property.raw('color;display', 'red'),
    (s) => s.color.raw(cssVar('--x', 'red);color:blue')),
  ])
    assert.throws(() => r.css(f));
  assert.equal(r.stats().records, 0);
  assert.throws(
    () => r.mountGlobal((g) => g.rawRule('body{color:red}@import url(x);')),
    /preamble/,
  );
});
test('animationName 保留资源依赖与顺序，重复使用不重复注册', () => {
  const r = server();
  const f = fade();
  const name = r.css((s) => {
    s.animationName.raw(f);
    s.animationDuration.ms(100);
  });
  assert.equal(r.stats().keyframes, 1);
  assert.equal(r.snapshot().records[0].kind, 'keyframes');
  r.css((s) => {
    s.color.red;
    s.animationName.raw([f, f]);
  });
  assert.equal(r.stats().keyframes, 1);
  assert(r.renderStyles().includes(name));
  r.css((s) => s.animationName.raw([]));
  assert(r.snapshot().records.at(-1).body.includes('animation-name:none'));
});
test('同 CSS 的动画名称和资源引用复用记录并合并依赖', () => {
  const r = server();
  const animation = fade();
  const name = r.keyframes(animation);
  const first = r.css((s) => s.animationName.raw(name));
  const second = r.css((s) => s.animationName.raw(animation));
  assert.equal(first, second);
  assert.equal(r.stats().classes, 1);
  assert.equal(r.stats().keyframes, 1);
  const record = r.snapshot().records.find((v) => v.kind === 'class');
  assert.deepEqual(record.dependencies, [name]);
  assert.equal(
    server({ hydrate: r.snapshot() }).css((s) => s.animationName.raw(name)),
    first,
  );
});
test('显式全局动画保留条件范围，字体和计数器使用描述符上下文', () => {
  const r = server();
  const f = fade();
  r.mountGlobal((g) => {
    g.media('print', (n) => n.animation(f));
    g.fontFace((d) => {
      d.fontFamily.raw('Demo');
      d.src.raw('local("Arial")');
    });
    g.counterStyle('steps', (d) => {
      d.system.cyclic;
      d.symbols.raw('"①" "②"');
    });
  });
  assert.equal(r.stats().keyframes, 0);
  assert(r.renderStyles().includes('@media print{@keyframes'));
  assert.throws(
    () => r.mountGlobal((g) => g.fontFace((d) => d.fontFamily.raw('Demo'))),
    /requires/,
  );
  assert.throws(
    () => r.mountGlobal((g) => g.counterStyle('bad', (d) => d.system.cyclic)),
    /requires symbols/,
  );
});
test('全局槽位不按内容盲目去重，更新保持原位置', () => {
  const r = server();
  const red = (g) => g.rule('body', (s) => s.color.red),
    blue = (g) => g.rule('body', (s) => s.color.blue);
  const a = r.mountGlobal(red),
    b = r.mountGlobal(blue),
    c = r.mountGlobal(red);
  assert.equal(r.stats().globals, 3);
  a.update((g) => g.rule('body', (s) => s.color.green));
  assert.deepEqual(
    r.snapshot().records.map((x) => x.id),
    [a.id, b.id, c.id],
  );
  const before = r.renderStyles();
  assert.throws(() => b.update((g) => g.rawRule('}')), Error);
  assert.equal(r.renderStyles(), before);
  c.dispose();
  c.dispose();
  assert.equal(r.stats().globals, 2);
  assert.throws(() => c.update(red), /active/);
});
test('@property 验证必需字段、初值类型与同名冲突，唯一 owner 可以替换', () => {
  const r = server();
  const property = (syntax, value) => (g) =>
    g.property('--progress', (d) => {
      d.syntax.raw(JSON.stringify(syntax));
      d.inherits.false;
      d.initialValue.raw(value);
    });
  const a = r.mountGlobal(property('<number>', 0));
  const b = r.mountGlobal(property('<number>', 0));
  assert.throws(() => a.update(property('<length>', '1px')), /Conflicting/);
  b.dispose();
  a.update(property('<length>', '1px'));
  assert.throws(() => r.mountGlobal(property('<length>', '1em')), /relative/);
  assert.throws(() => r.mountGlobal(property('<number>', '1px')), /does not match/);
  assert.throws(
    () => r.mountGlobal((g) => g.property('--bad', (d) => d.syntax.raw('"<number>"'))),
    /inherits/,
  );
});
test('SSR 输出同时包含层、动画、全局和 class，恢复后重用并认领槽位', () => {
  const opts = { namespace: 'ssr', layers: ['base', 'components'], layer: 'components' };
  const r = server(opts);
  const f = fade();
  const factory = (s) => {
    s.animationName.raw(f);
    s.color.red;
  };
  const className = r.css(factory);
  const global = r.mountGlobal((g) =>
    g.layer('base', (n) => n.rule('body', (s) => s.margin.px(0))),
  );
  const manifest = JSON.parse(r.renderManifest());
  const restored = server({ ...opts, hydrate: manifest });
  assert.equal(restored.css(factory), className);
  assert.deepEqual(restored.snapshot(), r.snapshot());
  restored.claimGlobal(global.id).update((g) => g.rule('body', (s) => s.color.blue));
  assert.throws(() => restored.claimGlobal(global.id), /already claimed/);
  assert.equal(r.stats().globals, 1);
  assert(!r.renderStyles().includes('color:blue'));
  const reordered = {
    ...manifest,
    config: {
      format: manifest.config.format,
      layer: manifest.config.layer,
      layers: manifest.config.layers,
      namespace: manifest.config.namespace,
    },
  };
  assert.deepEqual(server({ ...opts, hydrate: reordered }).snapshot(), r.snapshot());
});
test('SSR 转义结束标签且不破坏小于比较，nonce/JSON 安全编码', () => {
  const r = server({ nonce: '"<&' });
  r.css((s) => {
    s.content.raw('"</StYlE><script>bad</script>"');
    s.media('(width < 400px)', (n) => n.color.red);
  });
  const html = r.renderStyles();
  assert(!html.includes('</StYlE>'));
  assert(html.includes('\\3c /StYlE'));
  assert(html.includes('width<400px'));
  assert(html.includes('nonce="&quot;&lt;&amp;"'));
  const encoded = r.renderManifest();
  assert(!encoded.includes('<'));
  assert.deepEqual(JSON.parse(encoded), r.snapshot());
});
test('manifest 拒绝篡改、错误依赖、错误配置及命名资源中的额外规则', () => {
  const r = server();
  r.css((s) => s.color.red);
  const valid = r.snapshot();
  const modify = (f) => {
    const m = JSON.parse(JSON.stringify(valid));
    f(m);
    return m;
  };
  assert.throws(() => server({ namespace: 'other', hydrate: valid }), /config/);
  assert.throws(
    () => server({ hydrate: modify((m) => (m.records[0].body = 'color:blue;')) }),
    /hash/,
  );
  assert.throws(
    () => server({ hydrate: modify((m) => (m.records[0].dependencies = ['missing'])) }),
    /dependency/,
  );
  const invalid = modify((m) => {
    const rec = m.records[0];
    rec.body = 'color:red}body{color:blue';
    rec.id = namedId(m.config, 'class', rec.body);
  });
  assert.throws(() => server({ hydrate: invalid }), /one root rule/);
});
test('达到记录上限不修改缓存；碰撞明确报错；释放实例后不可再使用', () => {
  const r = server({ maxRecords: 1 });
  r.css((s) => s.color.red);
  assert.throws(() => r.css((s) => s.color.blue), /limit/);
  assert.equal(r.stats().records, 1);
  const record = r.snapshot().records[0];
  assert.throws(() => assertSameRecord(record, { ...record, body: 'other' }), /collision/);
  r.dispose();
  assert.equal(r.stats().records, 0);
  assert.throws(() => r.css((s) => s.color.red), /disposed/);
});
test('请求实例没有共享可变记录，即使名称与层配置相同', async () => {
  const values = await Promise.all(
    ['red', 'blue'].map(async (color) => {
      const r = server();
      await Promise.resolve();
      const cls = r.css((s) => s.color.raw(color));
      return { cls, manifest: r.snapshot() };
    }),
  );
  assert.notEqual(values[0].cls, values[1].cls);
  assert.equal(values[0].manifest.records.length, 1);
  assert.equal(values[1].manifest.records.length, 1);
});
