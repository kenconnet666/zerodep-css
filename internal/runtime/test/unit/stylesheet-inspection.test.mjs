import assert from 'node:assert/strict';
import test from 'node:test';
import { compileProgram, inspectStylesheet, namedId, renderRecord } from '../../dist/serialize.js';
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

test('新 class 的一次性检查结果与完整样式解析一致，恢复仍单独验证', () => {
  const config = {
    namespace: 'z',
    layers: ['components'],
    layer: 'components',
    format: 'native-v1',
  };
  const program = [
    {
      kind: 'declaration',
      property: 'color',
      value: { kind: 'raw', value: 'red' },
      important: false,
    },
  ];
  const compiled = compileProgram(program, config, {}, () => true);
  const inspection = compiled.inspection;
  assert.deepEqual(inspection, inspectStylesheet(renderRecord(compiled.record, config)));
  assert.equal(inspection.rules.length, 1);
  assert.equal(compileProgram(program, config).inspection, undefined);
  assert.equal(compileProgram(program, config, {}, () => false).inspection, undefined);

  const runtime = createRuntime({ target: null, ...config });
  const factory = (s) => s.color.red;
  try {
    const id = runtime.css(factory);
    const manifest = runtime.snapshot();
    const restored = createRuntime({ target: null, ...config, hydrate: manifest });
    try {
      assert.equal(restored.css(factory), id);
      assert.deepEqual(restored.snapshot(), manifest);
    } finally {
      restored.dispose();
    }
    const invalid = JSON.parse(JSON.stringify(manifest));
    invalid.records[1].body = 'color:red}body{color:blue';
    invalid.records[1].id = namedId(config, 'class', invalid.records[1].body);
    assert.throws(
      () => createRuntime({ target: null, ...config, hydrate: invalid }),
      /one root rule/,
    );
  } finally {
    runtime.dispose();
  }
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
  const className = runtime.css((s) => s.color.red);
  assert.equal(runtime.snapshot().records.find((record) => record.id === className)?.kind, 'class');
  assert.equal(
    runtime.snapshot().records.find((record) => record.id === second.id)?.body,
    previous.records.find((record) => record.id === second.id)?.body,
  );
  first.dispose();
  second.update((g) => definition(g, 2));
  assert.equal(runtime.stats().globals, 1);
  assert.equal(runtime.snapshot().records[0].id, second.id);
  runtime.dispose();
});
