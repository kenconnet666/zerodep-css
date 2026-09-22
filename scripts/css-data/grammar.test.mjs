import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createGrammar } from './grammar.mjs';
const grammar = createGrammar({
  properties: { width: { name: 'width', syntax: '<length [0,∞]>' } },
  types: { 'length-percentage': { name: 'length-percentage', syntax: '<length> | <percentage>' } },
  functions: {},
});
const matches = (syntax, tokens) => grammar.match(syntax, tokens).length > 0;
const length = { kind: 'length' },
  time = { kind: 'time' },
  comma = { kind: 'comma' };
test('数字维度不能从函数内部或不完整的值结构中提升', () => {
  assert(!matches('translate( <length> )', [length]));
  assert(!matches('<length> <custom-ident>', [length]));
  assert(matches('<length> || auto', [length]));
  assert(!matches('<length> && auto', [length]));
});
test('乘数、逗号和引用保持语法含义', () => {
  assert(matches("<'width'>{1,4}", [length, length]));
  assert(!matches("<'width'>{1,4}", Array(5).fill(length)));
  assert(matches('<time>#', [time, comma, time]));
  assert(!matches('<time>#', [time, time]));
  assert(matches('<length-percentage>', [{ kind: 'percentage' }]));
});
test('范围规则沿引用传递，未知语法引用不放宽', () => {
  assert.equal(grammar.match("<'width'>", [length])[0].checks[0].min, 0);
  assert(!matches('<unknown>', [length]));
  assert(!matches('<unknown>', [{ kind: 'keyword', value: 'anything' }]));
});
