import assert from 'node:assert/strict';
import test from 'node:test';
import { inspectStylesheet } from '../../dist/serialize.js';
import { createRuntime } from '../../dist/index.js';

test('事务准备区分字符串与实际注册规则，并保持规则顺序', () => {
  const result = inspectStylesheet(
    '.card{--text:"@property --fake;{}";color:red}@property --size{syntax:"<length>";inherits:false;initial-value:0px}',
  );
  assert.deepEqual(result.rules, [
    '.card{--text:"@property --fake;{}";color:red}',
    '@property --size{syntax:"<length>";inherits:false;initial-value:0px}',
  ]);
  assert.deepEqual(result.registrations, [
    { name: '--size', body: '{syntax:"<length>";inherits:false;initial-value:0px}' },
  ]);
  assert.deepEqual(inspectStylesheet(''), { rules: [], registrations: [] });
  assert.throws(
    () => inspectStylesheet('@property --size{syntax:"<length>";inherits:false}'),
    /initial-value/,
  );
});

test('全局更新的准备与注册冲突失败不会替换已生效的槽位', () => {
  const runtime = createRuntime({ target: null });
  const definition = (g, value) =>
    g.property('--size', (d) => {
      d.syntax.raw('"<length>"');
      d.inherits.false;
      d.initialValue.raw(value + 'px');
    });
  const first = runtime.mountGlobal((g) => definition(g, 1));
  const second = runtime.mountGlobal((g) => definition(g, 1));
  const previous = runtime.snapshot();
  assert.throws(
    () =>
      second.update((g) => {
        g.rule('body', (s) => s.color.blue);
        definition(g, 2);
      }),
    /Conflicting/,
  );
  assert.deepEqual(runtime.snapshot(), previous);
  first.dispose();
  second.update((g) => definition(g, 2));
  assert.equal(runtime.stats().globals, 1);
  assert.equal(runtime.snapshot().records[0].id, second.id);
  runtime.dispose();
});
