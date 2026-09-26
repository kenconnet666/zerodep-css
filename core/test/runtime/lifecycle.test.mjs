import test from 'node:test';
import assert from 'node:assert/strict';
import { createServerCssHost, withCssHost, css, createBindings } from './runtime.mjs';

test('并发 SSR 与嵌套请求在异步成功和失败后保持宿主隔离', async () => {
  const outer = createServerCssHost(),
    inner = createServerCssHost();
  await withCssHost(outer, async () => {
    css('color:red;');
    await assert.rejects(
      withCssHost(inner, async () => {
        await Promise.resolve();
        css('color:blue;');
        throw new Error('render failed');
      }),
      /render failed/,
    );
    css('width:12px;');
  });
  assert.deepEqual(
    outer.rules().map((r) => r.body),
    ['color:red;', 'width:12px;'],
  );
  assert.deepEqual(
    inner.rules().map((r) => r.body),
    ['color:blue;'],
  );
  assert.throws(() => css('color:black;'), /unavailable/);
  const requests = await Promise.all(
    Array.from({ length: 20 }, (_, i) => {
      const host = createServerCssHost();
      return withCssHost(host, async () => {
        await Promise.resolve();
        css('width:' + i + 'px;');
        return host.rules();
      });
    }),
  );
  requests.forEach((rules, i) =>
    assert.deepEqual(
      rules.map((r) => r.body),
      ['width:' + i + 'px;'],
    ),
  );
});

test('绑定分支清空后重新启用复用身份，卸载清理包括常量与动态订阅', () => {
  const host = createServerCssHost();
  let active = true,
    value = 12,
    stopCount = 0;
  const scope = createBindings('branch', host.setBindings, (run) => {
    run();
    return () => stopCount++;
  });
  scope.bind('setup', () => value);
  const draw = () =>
    scope.frame('row', ['a'], () =>
      scope.capture('style', host.css, () => [
        active ? 'width:' + scope.bind('width', () => value + 'px') + ';' : 'color:red;',
        'opacity:' + scope.bind('constant', () => 0.5, true) + ';',
      ]),
    );
  const first = draw();
  active = false;
  draw();
  assert.ok(host.rules().some((r) => r.kind === 'bindings' && r.body.endsWith(':0.5;')));
  active = true;
  value = 24;
  assert.equal(draw(), first);
  assert.ok(host.rules().some((r) => r.kind === 'bindings' && r.body.includes(':24px;')));
  scope.dispose();
  scope.dispose();
  assert.equal(stopCount, 1);
  assert.equal(host.rules().filter((r) => r.kind === 'bindings').length, 0);
});

test('同一个读取函数建立的派生实例具有独立变量身份', () => {
  const host = createServerCssHost();
  const scope = createBindings('derived', host.setBindings, () => {
    throw new Error('Unexpected effect');
  });
  const read = (n) => host.css('width:' + scope.bind('width', () => n + 'px') + ';');
  const a = scope.frameCallback('factory', read),
    b = scope.frameCallback('factory', read);
  const first = a(12),
    second = b(24);
  assert.notEqual(first, second);
  assert.equal(a(36), first);
  assert.equal(b(48), second);
  assert.deepEqual(
    host
      .rules()
      .filter((r) => r.kind === 'bindings')
      .map((r) => r.body.match(/:(\d+)px/)[1]),
    ['36', '48'],
  );
  scope.dispose();
  assert.throws(() => a(1), /disposed/);
});
