import assert from 'node:assert/strict';
import { bundle } from './mup-bundle.mjs';

for (const framework of ['vue', 'svelte']) {
  const source = await bundle(framework, 'node');
  const module = await import(
    `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`
  );
  assert.throws(() => module.withoutHost(), /CSS server host is unavailable/);

  const [first, second] = await Promise.all([module.renderPage(24, 10), module.renderPage(48, 0)]);
  assert.equal(first.rules.length, 1);
  assert.equal(second.rules.length, 1);
  assert.notEqual(first.rules[0].className, second.rules[0].className);
  assert.match(first.rules[0].body, /width:24px;/);
  assert.match(second.rules[0].body, /width:48px;/);
  assert.ok(first.html.includes(first.rules[0].className));
  assert.ok(second.html.includes(second.rules[0].className));
  assert.ok(first.cssText.includes(first.rules[0].className));
  assert.equal(first.cssText.includes(second.rules[0].className), false);
  assert.equal(second.cssText.includes(first.rules[0].className), false);
  const repeated = await module.renderPage(24);
  assert.equal(repeated.rules[0].className, first.rules[0].className);
  console.log(JSON.stringify({ framework, status: 'passed', rulesPerRequest: 1 }));
}
