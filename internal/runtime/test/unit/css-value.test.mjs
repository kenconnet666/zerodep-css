import assert from 'node:assert/strict';
import test from 'node:test';
import { assertValueStructure, normalizeCssText } from '../../../../core/dist/css-value.js';
import { createRuntime, cssVar } from '../../dist/index.js';
import { createDeclarationBinding } from '../../dist/compiler-runtime.js';
import { htmlCss } from '../../dist/sheet.js';
import { tokenize, tokenTypes, ident } from 'css-tree';

test('SSR 结束标签转义保留自定义属性的 token 类型和大小写', () => {
  const tokens = (text) => {
    const result = [];
    tokenize(text, (type, start, end) => {
      const value = text.slice(start, end);
      result.push([type, type === tokenTypes.Ident ? ident.decode(value) : value]);
    });
    return result;
  };
  for (const text of ['</style>', '</STYLE>', 'before </StYlE after']) {
    const encoded = htmlCss(text);
    assert(!/<\/style/i.test(encoded));
    assert.deepEqual(tokens(encoded), tokens(text));
  }
});

test('原始值只检查结构，允许未知值、完整函数和引号内分隔符', () => {
  for (const value of [
    '',
    'red',
    'future(??? [one;two] {nested:tokens})',
    '"a;{}"',
    "'a\\'b'",
    'a\\;b',
    'url(foo)',
    'url("a;{}")',
    'var(--x, future(a;b))',
    'foo/**/bar',
  ])
    assert.doesNotThrow(() => assertValueStructure(value), value);
  assert.doesNotThrow(() => assertValueStructure('{a:b;c:d}', true));
});

test('简单变量快速路径保留复杂形态和结构拒绝边界', () => {
  for (const value of [
    'var(--x)',
    'var(--zcss-a19)',
    'var(--_X)',
    'var(--x)\n',
    'var(--x,red)',
    'var( --x)',
    'var(--x/**/)',
    'var(--\\78)',
  ])
    assert.doesNotThrow(() => assertValueStructure(value));
  for (const value of [
    'var(--x)!important',
    'var(--x);color:red',
    'var(--x',
    'var(--x))',
    ')var(--x)',
    'var(--x)/*',
  ])
    assert.throws(() => assertValueStructure(value));
});

test('原始值拒绝跨声明、未闭合结构、EOF 自动闭合和隐式 important', () => {
  for (const value of [
    'red;color:blue',
    'red}',
    '{color:red}',
    'calc(1px',
    '([)]',
    '"open',
    '"open\\"',
    'url(foo',
    'url(foo\\)',
    'url("foo"',
    '/*open',
    'red\\',
    'red!important',
    'red!/**/ImPoRtAnT',
    'red!\\69 mportant',
  ])
    assert.throws(() => assertValueStructure(value), undefined, value);
  for (const value of ['"!important"', 'foo/*!important*/', 'future(!important)'])
    assert.doesNotThrow(() => assertValueStructure(value));
});

test('未知完整值和自定义 token 流保留到产物，浏览器决定属性有效性', () => {
  const runtime = createRuntime({ target: null });
  try {
    runtime.css((s) => {
      s.width.px(50);
      s.width.raw('future(??? [a;b] {c:d})');
      s.custom.raw('--tokens', '!foo bar');
      s.custom.raw('--block', '{a:b;c:d}');
      s.custom.raw('--comment', 'a/**/b');
    });
    const body = runtime.snapshot().records[0].body;
    assert(!body.includes('50px'));
    assert(body.includes('future(??? [a;b] {c:d})'));
    assert(body.includes('--tokens:!foo bar'));
    assert(body.includes('--block:{a:b;c:d}'));
    assert(body.includes('--comment:a/**/b'));
    runtime.css((s) => s.width.raw(''));
    runtime.css((s) => s.width.raw(cssVar('--future', 'future(??? [a;b])')));
    const binding = createDeclarationBinding('--auto', { property: 'width' });
    assert.equal(binding.value('future(??? [a;b] {c:d})'), 'future(??? [a;b] {c:d})');
    assert.equal(binding.inline('future(??? [a;b] {c:d})'), undefined);
  } finally {
    runtime.dispose();
  }
});

test('被覆盖的非法结构也报错且不注册半成品', () => {
  const runtime = createRuntime({ target: null });
  try {
    for (const value of ['red!important', 'red;color:blue', 'url(foo', '"open', 'red\\'])
      assert.throws(() =>
        runtime.css((s) => {
          s.color.raw(value);
          s.color.blue;
        }),
      );
    assert.throws(() =>
      runtime.css((s) => {
        s.color.raw(cssVar('--x', 'red);color:blue'));
        s.color.blue;
      }),
    );
    assert.equal(runtime.stats().records, 0);
    for (const name of ['color\\', 'c\\\nolor', 'c\\\r\nolor', 'color;position', 'color:red'])
      assert.throws(
        () =>
          runtime.css((s) => {
            s.property.raw(name, 'red');
            s.color.blue;
          }),
        undefined,
        name,
      );
    assert.equal(runtime.stats().records, 0);
  } finally {
    runtime.dispose();
  }
});

test('CSS 输入预处理统一换行和非法码点，保留正常 Unicode', () => {
  assert.equal(normalizeCssText('a\r\nb\rc\fd\0\uD800😊'), 'a\nb\nc\nd\uFFFD\uFFFD😊');
  const runtime = createRuntime({ target: null });
  try {
    const first = runtime.css((s) => {
      s.custom.raw('--x', 'a\r\nb');
      s.content.raw('"a\0\uD800😊"');
    });
    assert.equal(
      first,
      runtime.css((s) => {
        s.custom.raw('--x', 'a\nb');
        s.content.raw('"a\uFFFD\uFFFD😊"');
      }),
    );
    const body = runtime.snapshot().records[0].body;
    assert(!/[\r\f\0\uD800-\uDFFF]/u.test(body));
    assert(body.includes('😊'));
  } finally {
    runtime.dispose();
  }
});
