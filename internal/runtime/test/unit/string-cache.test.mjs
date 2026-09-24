import assert from 'node:assert/strict';
import test from 'node:test';
import { StringCache } from '../../dist/string-cache.js';
import { createDeclarationBinding } from '../../dist/binding.js';

test('缓存同时遵守条目与字符预算，更新不会重复计费或保留过期值', () => {
  const cache = new StringCache(3, 8);
  cache.set('aa', true);
  cache.set('bb', false);
  cache.set('ccc', true);
  assert.equal(cache.characters, 7);
  cache.set('ddd', false);
  assert.equal(cache.get('aa'), undefined);
  assert.equal(cache.characters, 8);
  assert.equal(cache.size, 3);
  cache.set('bb', true);
  assert.equal(cache.characters, 8);
  cache.set('bb', 'too-large-to-cache');
  assert.equal(cache.get('bb'), undefined);
  assert.equal(cache.characters, 6);
  cache.set('🟦', false);
  assert.equal(cache.characters, 8);
  assert.equal(cache.get('🟦'), false);
  assert.throws(() => {
    cache.maxCharacters = Infinity;
  });
  for (const budgets of [
    [0, 8],
    [3, 0],
    [NaN, 8],
    [3, Infinity],
  ])
    assert.throws(() => new StringCache(...budgets));
});

test('巨大合法绑定值可处理，连续不同输入不突破缓存预算', () => {
  const cache = new StringCache();
  for (let index = 1; index < 300; index++) {
    const key = String(index).padEnd(index * 300, 'x');
    cache.set(key, false);
    assert(cache.size <= 128);
    assert(cache.characters <= 65536);
  }
  const large = `"${'a'.repeat(70000)}"`;
  const binding = createDeclarationBinding('--large');
  assert.equal(binding.inline(large), large);
  assert.equal(binding.value(large), 'var(--large)');
  assert.equal(binding.inline('initial'), undefined);
  assert.throws(() => binding.value(large + ';color:red'));
});
