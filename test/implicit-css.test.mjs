import test from 'node:test';
import assert from 'node:assert/strict';
import { Css, WidthCss } from '../core/dist/index.js';
import { implicitCss } from '../core/dist/bindings.js';
import vue from '../vue/dist/vite.js';
import svelte from '../svelte/dist/vite.js';

test('隐式变量保留安全值、无效值、CSS-wide 与自定义作者的原始声明', () => {
  const s = new Css();
  const run = (value) =>
    implicitCss.css(
      (...parts) => parts.join(''),
      [s.width.px(12), implicitCss.method(s, 'width', 'raw', () => value, '--zj-test-0')],
    );
  assert.deepEqual(run('auto'), {
    class: 'width:12px;width:var(--zj-test-0);',
    style: '--zj-test-0:auto;',
  });
  assert.deepEqual(run('inherit'), { class: 'width:12px;width:inherit;', style: '' });
  assert.deepEqual(run('not-a-width'), { class: 'width:12px;width:not-a-width;', style: '' });
  assert.deepEqual(run('var(--user)'), { class: 'width:12px;width:var(--user);', style: '' });
  class Width extends WidthCss {
    name = 'opacity';
  }
  class Custom extends Css {
    width = new Width();
  }
  const custom = implicitCss.method(new Custom(), 'width', 'raw', () => 'auto', '--zj-test-0');
  assert.deepEqual(
    implicitCss.css((...parts) => parts.join(''), [custom]),
    { class: 'opacity:auto;', style: '' },
  );
});

test('隐式转换保留接收者先于参数读取，作者被替换时不重复调用 getter', () => {
  const s = new Css();
  let calls = 0;
  const result = implicitCss.method(
    s,
    'width',
    'px',
    () => {
      calls++;
      Object.defineProperty(s, 'width', {
        value: { px: () => 'opacity:0.3;' },
        configurable: true,
      });
      return 24;
    },
    '--zj-test-0',
  );
  assert.deepEqual(
    implicitCss.css((...parts) => parts.join(''), [result]),
    { class: 'width:24px;', style: '' },
  );
  assert.equal(calls, 1);
  assert.throws(
    () =>
      implicitCss.method(
        null,
        'width',
        'px',
        () => {
          calls++;
          return 1;
        },
        '--zj-test-1',
      ),
    TypeError,
  );
  assert.equal(calls, 1, '接收者读取失败时不能提前计算参数');
});

for (const [framework, factory] of [
  ['vue', vue],
  ['svelte', svelte],
]) {
  const component = (script, template) =>
    `<script ${framework === 'vue' ? 'setup' : ''} lang="ts">import {Css,css as make} from 'zerodep-css-${framework}';${script}</script>${framework === 'vue' ? `<template>${template}</template>` : template}`;
  test(`${framework} 未初始化变量和 catch 参数不属于命名 css`, () => {
    const source = component(
      'let pending; try { pending = 1; } catch (error) { pending = error; }',
      '<div />',
    );
    assert.equal(
      factory().transform.call({ warn() {} }, source, `/test/plain.${framework}`),
      undefined,
    );
  });
  test(`${framework} 命名 css 用于原生元素时生成一次响应式结果，跨用途回退为字符串`, () => {
    const source = component(
      'const s=new Css();const box=make(s.color._primary);',
      framework === 'vue' ? '<div :class="box" />' : '<div class={box} />',
    );
    const result = factory().transform.call({ warn() {} }, source, `/test/auto.${framework}`);
    assert.match(result.code, /auto\.keyword/);
    assert.match(result.code, framework === 'vue' ? /v-bind="box"/ : /auto\.props\(box/);
    const shared = component(
      'const s=new Css();const box=make(s.color.red);const copy=box;',
      framework === 'vue' ? '<div :class="box" />' : '<div class={box} />',
    );
    const fallback = factory().transform.call(
      { warn() {} },
      shared,
      `/test/shared.${framework}`,
    ).code;
    assert.doesNotMatch(fallback, /auto\.props|v-bind="box"/);
    if (framework === 'vue') assert.match(fallback, /copy=box.value/);
    else assert.match(fallback, /\$derived\(make/);
  });
  test(`${framework} 原生元素有 spread 时不把私有变量传给未知属性覆盖`, () => {
    const source = component(
      'const s=new Css();const box=make(s.color.red);const attrs={};',
      framework === 'vue'
        ? '<div :class="box" v-bind="attrs" />'
        : '<div class={box} {...attrs} />',
    );
    const result = factory().transform.call(
      { warn() {} },
      source,
      `/test/spread.${framework}`,
    ).code;
    assert.doesNotMatch(result, /auto\.css|auto\.props/);
  });
}
