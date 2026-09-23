import assert from 'node:assert/strict';
import test from 'node:test';
import { createRuntime, keyframes } from '../../dist/index.js';
import { buildStyleProgram } from '../../dist/builder.js';
import { normalizeStyleProgram } from '../../dist/normalize.js';

const declarations = (nodes) =>
  nodes
    .filter((n) => n.kind === 'declaration')
    .map((n) => [n.property, n.value.value, n.important]);

test('同属性后写直接替换 important 和无效 raw，仍执行原生回调', () => {
  let reads = 0;
  const helper = (s) => {
    reads++;
    s.color.red;
  };
  const program = buildStyleProgram((s) => {
    s.important((i) => helper(i));
    s.color.blue;
    s.width.px(50);
    s.width.raw('red');
  });
  assert.equal(reads, 1);
  assert.deepEqual(declarations(program), [
    ['color', 'blue', false],
    ['width', 'red', false],
  ]);
  assert(Object.isFrozen(program));
});

test('重复嵌套上下文独立覆盖，保留其在其他上下文间的顺序', () => {
  const program = buildStyleProgram((s) => {
    s.color.red;
    s.hover((h) => h.color.red);
    s.media('(width > 400px)', (m) => m.color.green);
    s.hover((h) => h.color.blue);
    s.color.purple;
  });
  assert.equal(program[0].children.length, 0);
  assert.equal(program[1].children[0].value.value, 'green');
  assert.equal(program[2].children[0].value.value, 'blue');
  assert.deepEqual(declarations(program), [['color', 'purple', false]]);
  assert.deepEqual(normalizeStyleProgram(program), program);
});

test('不同属性的简写与长属性保留原生声明顺序，不猜解 raw', () => {
  const program = buildStyleProgram((s) => {
    s.important((i) => i.paddingLeft.px(8));
    s.padding.px(12);
    s.margin.px(4);
    s.marginLeft.px(9);
    s.borderImageSource.raw('none');
    s.border.raw('1px solid red');
  });
  assert.deepEqual(declarations(program), [
    ['padding-left', '8px', true],
    ['padding', '12px', false],
    ['margin', '4px', false],
    ['margin-left', '9px', false],
    ['border-image-source', 'none', false],
    ['border', '1px solid red', false],
  ]);
});

test('补齐长属性不导致早期 important 简写突然消失', () => {
  const build = (last) =>
    buildStyleProgram((s) => {
      s.important((i) => i.margin.px(4));
      s.marginTop.px(1);
      s.marginRight.px(1);
      s.marginBottom.px(1);
      if (last) s.marginLeft.px(1);
    });
  assert.deepEqual(build(false), build(true).slice(0, -1));
  assert.equal(build(true)[0].important, true);
});

test('规范化条件空白与条件选择器交错，并保留有序层边界', () => {
  const program = buildStyleProgram((s) => {
    s.media('(width > 400px)', (m) => m.hover((h) => h.important((i) => i.color.red)));
    s.hover((h) => h.media('(width>400px)', (m) => m.color.blue));
    s.layer('first', (l) => l.color.red);
    s.layer('second', (l) => l.color.blue);
  });
  assert.equal(program[0].children[0].children.length, 0);
  assert.equal(program[1].children[0].children[0].value.value, 'blue');
  assert.equal(program[2].children[0].value.value, 'red');
});

test('规范别名共享覆盖键，自定义属性保留大小写，不读取对象原型', () => {
  const program = buildStyleProgram((s) => {
    s.important((i) => i.appearance.raw('none'));
    s.property.raw('-webkit-appearance', 'auto');
    s.property.raw('constructor', 'red');
    s.property.raw('toString', 'blue');
  });
  assert.deepEqual(
    declarations(program).map((d) => d[0]),
    ['-webkit-appearance', 'constructor', 'toString'],
  );
});

test('选择器列表中的伪元素不会被内部 & 错误覆盖', () => {
  const program = buildStyleProgram((s) =>
    s.selector('&:hover, &::before', (n) => {
      n.color.red;
      n.selector('&', (x) => x.color.blue);
    }),
  );
  assert.equal(program[0].children[0].value.value, 'red');
  assert.equal(program[0].children[1].children[0].value.value, 'blue');
});

test('中性的 & 嵌套仍属于当前上下文', () => {
  const program = buildStyleProgram((s) => {
    s.important((i) => i.color.red);
    s.selector('&', (n) => n.color.blue);
  });
  assert.equal(program.length, 1);
  assert.equal(program[0].children[0].value.value, 'blue');
});

test('all 保留 direction、unicode-bidi 和大小写不同的自定义属性', () => {
  const program = buildStyleProgram((s) => {
    s.color.red;
    s.direction.rtl;
    s.unicodeBidi.isolate;
    s.custom.raw('--Tone', 'red');
    s.custom.raw('--tone', 'blue');
    s.all.unset;
    s.color.blue;
  });
  assert.deepEqual(
    declarations(program).map((d) => d[0]),
    ['direction', 'unicode-bidi', '--Tone', '--tone', 'all', 'color'],
  );
});

test('all 与不同属性间保留原生优先级，不删除早期 important', () => {
  const program = buildStyleProgram((s) => {
    s.important((i) => i.color.red);
    s.all.unset;
  });
  assert.deepEqual(declarations(program), [
    ['color', 'red', true],
    ['all', 'unset', false],
  ]);
});

test('组合重复引用冻结节点时只删除早期出现位置', () => {
  const plain = buildStyleProgram((s) => s.color.blue);
  assert.deepEqual(normalizeStyleProgram([...plain, ...plain]), plain);
  const nested = buildStyleProgram((s) => s.hover((h) => h.color.blue));
  const combined = normalizeStyleProgram([...nested, ...nested]);
  assert.equal(combined[0].children.length, 0);
  assert.deepEqual(combined[1], nested[0]);
});

test('被替换的动画不注册无用资源，最后声明的规则内容稳定', () => {
  const runtime = createRuntime({ target: null });
  try {
    const first = runtime.css((s) => {
      s.important((i) => i.color.red);
      s.color.blue;
    });
    assert.equal(
      first,
      runtime.css((s) => s.color.blue),
    );
    assert.equal(runtime.stats().classes, 1);
    assert.equal(runtime.snapshot().records[0].body, 'color:blue;');
    const fade = keyframes((k) => {
      k.from((s) => s.opacity.raw(0));
      k.to((s) => s.opacity.raw(1));
    });
    runtime.css((s) => {
      s.animationName.raw(fade);
      s.animationName.raw('none');
    });
    assert.equal(runtime.stats().keyframes, 0);
  } finally {
    runtime.dispose();
  }
});
