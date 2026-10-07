import assert from 'node:assert/strict';
import test from 'node:test';
import { Css, WidthCss } from '../../dist/index.js';
import { inlineDeclaration } from '../../dist/bindings.js';

test('系统直接值绑定完整单位，保留特殊值原始层叠', () => {
  const s = new Css();
  assert.deepEqual(inlineDeclaration(s, 'width', 'px', 24, '--zj-test'), {
    declaration: 'width:var(--zj-test);',
    value: '24px',
  });
  assert.deepEqual(inlineDeclaration(s, 'color', 'raw', 'red', '--zj-test'), {
    declaration: 'color:var(--zj-test);',
    value: 'red',
  });
  assert.equal(inlineDeclaration(s, 'color', 'raw', '#abcdef', '--zj-test').value, '#abcdef');
  for (const value of [
    'initial',
    'inherit',
    'unset',
    'revert',
    'revert-layer',
    'red!important',
    'nonsense',
    'var(--external)',
  ]) {
    assert.deepEqual(inlineDeclaration(s, 'color', 'raw', value, '--zj-test'), {
      declaration: s.color.raw(value),
    });
  }
  assert.deepEqual(inlineDeclaration(s, 'width', 'px', -1, '--zj-test'), {
    declaration: 'width:-1px;',
  });
});

test('覆写和主题作者保持方法调用及读取，不猜测实现', () => {
  let calls = 0;
  class Width extends WidthCss {
    px(value) {
      calls++;
      return this.raw(`${value * 2}px`);
    }
  }
  class Custom extends Css {
    width = new Width();
  }
  assert.deepEqual(inlineDeclaration(new Custom(), 'width', 'px', 10, '--zj-test'), {
    declaration: 'width:20px;',
  });
  assert.equal(calls, 1);
  const original = new Css();
  const themed = new Css(() => ({ color: { red: 'blue' } }));
  assert.deepEqual(inlineDeclaration(themed, 'color', 'raw', 'red', '--zj-test'), {
    declaration: original.color.raw('red'),
  });
});
