import assert from 'node:assert/strict';
import test from 'node:test';
import { resolve } from 'node:path';
import { parse, compileScript } from 'vue/compiler-sfc';
import { compile } from 'svelte/compiler';
import { transformCss as vue } from '../../../vue/dist/compiler/index.js';
import { transformCss as svelte } from '../../../svelte/dist/compiler/index.js';
import { TraceMap, originalPositionFor } from '@jridgewell/trace-mapping';

function fixture(framework, expression) {
  const script = `import {createStyles} from '@zerodep-css/${framework}';const styles=createStyles();const style=styles.useCss();let width=10;`;
  return framework === 'vue'
    ? `<script setup lang="ts">${script}</script><template><div :class="${expression}"/></template>`
    : `<script lang="ts">${script}</script><div class={${expression}}/>`;
}
test('Vue 静态准备保留模板来源锚点，结束标签留在模板作用域', () => {
  const source = fixture('vue', 'style(s=>{s.width.px(8);})');
  const result = vue(source, resolve('StaticMap.vue'));
  const map = new TraceMap(JSON.parse(result.map.toString()));
  const offset = result.code.indexOf(
    '__zcss_prepare_',
    result.code.indexOf('const __zcss_static_'),
  );
  const before = result.code.slice(0, offset);
  const point = originalPositionFor(map, {
    line: before.split('\n').length,
    column: offset - before.lastIndexOf('\n') - 1,
  });
  assert.equal(point.column, source.indexOf('s=>'));
  for (const debug of [false, true]) {
    const unsafe = fixture('vue', "style(s=>{s.content.raw('&lt;/script&gt;');})");
    const transformed = vue(unsafe, resolve('EndTag.vue'), { debug });
    assert(!transformed.code.includes('const __zcss_static_'));
    const parsed = parse(transformed.code);
    assert.deepEqual(parsed.errors, []);
    compileScript(parsed.descriptor, { id: 'tag', inlineTemplate: true });
  }
});
test('Vue 动态参数中的结束标签留在模板，不注入 script setup', () => {
  const source = `<script setup>import {createStyles} from '@zerodep-css/vue';const styles=createStyles();const css=styles.useCss();const values={};</script><template><div :class="css(s=>{s.width.px(values[&quot;&lt;/script&gt;&quot;])})"/></template>`;
  const result = vue(source, resolve('DynamicEndTag.vue'));
  assert(!result.code.slice(0, result.code.indexOf('</script>')).includes('values["</script>"]'));
  const parsed = parse(result.code);
  assert.deepEqual(parsed.errors, []);
  compileScript(parsed.descriptor, { id: 'dynamic-end', inlineTemplate: true });
});
test('Vue 实体解码的模板局部变量不遮蔽生成 helper', () => {
  const source = `<script setup>import {createStyles} from '@zerodep-css/vue';const styles=createStyles();const css=styles.useCss();const rows=[1];</script><template><div v-for="&#95;&#95;zcss_bind_unit_1 in rows" :key="&#95;&#95;zcss_bind_unit_1" :class="css(s=>{s.width.px(&#95;&#95;zcss_bind_unit_1)})"/></template>`;
  const result = vue(source, resolve('EncodedIdentifier.vue'));
  assert(!result.code.includes('bindUnit as __zcss_bind_unit_1'));
  compileScript(parse(result.code).descriptor, { id: 'encoded', inlineTemplate: true });
});
test('生成的动态 props 不依赖可能被用户遮蔽的 Object 名称', () => {
  for (const [framework, transform] of [
    ['vue', vue],
    ['svelte', svelte],
  ]) {
    const source = fixture(framework, 'style(s=>{s.width.px(width)})').replace(
      'let width=10;',
      'let width=10;const Object={keys(){throw Error("shadow")},entries(){throw Error("shadow")}};',
    );
    const result = transform(source, resolve('ShadowObject.' + framework));
    assert(!/Object\.(?:keys|entries)\(/.test(result.code));
    if (framework === 'vue')
      compileScript(parse(result.code).descriptor, { id: 'shadow-object', inlineTemplate: true });
    else compile(result.code, { filename: 'ShadowObject.svelte', generate: 'client' });
  }
});
for (const [framework, transform] of [
  ['vue', vue],
  ['svelte', svelte],
]) {
  test(`${framework}：单表达式箭头的变量来源仍映射到原属性`, () => {
    const source = fixture(framework, 'style(s=>s.width.px(width))');
    const result = transform(source, resolve('ConciseMap.' + framework));
    const map = new TraceMap(JSON.parse(result.map.toString()));
    assert.deepEqual(map.sourcesContent, [source]);
    const offset = result.code.indexOf('--zcss-');
    assert(offset >= 0);
    const before = result.code.slice(0, offset);
    const point = originalPositionFor(map, {
      line: before.split('\n').length,
      column: offset - before.lastIndexOf('\n') - 1,
    });
    assert.equal(point.line, 1);
    assert.equal(point.column, source.indexOf('s.width'));
  });
  test(`${framework}：css 别名与重复值的源码位置独立保留`, () => {
    const source = fixture(framework, 'style(s=>{s.width.px(width);s.height.px(width)})');
    const result = transform(source, resolve('Sample.' + framework));
    const map = new TraceMap(JSON.parse(result.map.toString()));
    assert.deepEqual(map.sourcesContent, [source]);
    const references = [...result.code.matchAll(/(--zcss-[a-f0-9]{16})/g)];
    assert.equal(references.length, 2);
    for (let index = 0; index < references.length; index++) {
      const offset = references[index].index;
      const before = result.code.slice(0, offset);
      const point = originalPositionFor(map, {
        line: before.split('\n').length,
        column: offset - before.lastIndexOf('\n') - 1,
      });
      assert.equal(point.line, 1);
      assert.equal(point.column, source.indexOf(index ? 's.height' : 's.width'));
    }
  });
  test(`${framework}：根目录迁移不改变变量标识`, () => {
    const source = fixture(framework, 'style(s=>{s.width.px(width)})');
    const first = transform(source, resolve('checkout-a/src/Card.' + framework), {
      root: resolve('checkout-a'),
    });
    const second = transform(source, resolve('checkout-b/src/Card.' + framework), {
      root: resolve('checkout-b'),
    });
    assert.equal(first.code, second.code);
    assert.equal(
      transform(source, resolve('external/Card.' + framework), { root: resolve('app') }),
      null,
    );
  });
  test(`${framework}：回调局部类、变量写入和同名函数保留运行时作用域`, () => {
    for (const body of [
      'class Value{static width=10;}s.width.px(Value.width);',
      'let value=width;s.width.px(value);value++;',
      'const bx=(n:number)=>n*3;s.width.px(bx(width));',
    ])
      assert.equal(
        transform(fixture(framework, `style(s=>{${body}})`), resolve('Scope.' + framework)),
        null,
      );
  });
  test(`${framework}：开发来源不携带绝对目录且正常交给官方编译器`, () => {
    const source = fixture(
      framework,
      `style(s=>{s.name('panel').config({debug:true});s.width.px(width)})`,
    );
    const result = transform(source, resolve('src/Named.' + framework), { debug: true });
    assert(result.code.includes('src/Named.' + framework));
    if (framework === 'vue')
      compileScript(parse(result.code).descriptor, { id: 'named', inlineTemplate: true });
    else compile(result.code, { filename: resolve('src/Named.svelte'), generate: 'client' });
    assert(
      !transform(source, resolve('src/Named.' + framework), { debug: false }).code.includes(
        'withStyleSource',
      ),
    );
  });
}
test('Svelte 模板 const 遮蔽 css 别名时保留局部函数', () => {
  const source = `<script>import {createStyles} from '@zerodep-css/svelte';const styles=createStyles();const style=styles.useCss();let width=10;</script>{#if true}{@const style=()=> 'local'}<div class={style(s=>{s.width.px(width)})}/>{/if}`;
  assert.equal(svelte(source, resolve('Shadow.svelte')), null);
});

test('开发来源尊重 Vue 解构循环与 slot 的局部同名函数', () => {
  const script = `<script setup>import {createStyles} from '@zerodep-css/vue';const styles=createStyles();const css=styles.useCss();const rows=[{css:n=>'local'+n}];</script>`;
  for (const template of [
    `<div v-for="{css} in rows" :class="css(3)"/>`,
    `<Renderer v-slot="{css}"><div :class="css(3)"/></Renderer>`,
    `<template v-for="row in rows"><div v-for="{css} in rows" :class="css(3)"/></template>`,
  ])
    assert.equal(
      vue(script + `<template>${template}</template>`, resolve('Local.vue'), { debug: true }),
      null,
    );
});

test('开发来源尊重 Svelte 解构循环、await 与 legacy let 的词法身份', () => {
  const script = `<script>import {createStyles} from '@zerodep-css/svelte';const styles=createStyles();const css=styles.useCss();const rows=[{css:n=>'local'+n}];const promise=Promise.resolve(rows[0].css);</script>`;
  for (const template of [
    `{#each rows as {css}}<div class={css(3)}/>{/each}`,
    `{#await promise then css}<div class={css(3)}/>{/await}`,
    `{#await promise}<div>pending</div>{:catch css}<div class={css(3)}/>{/await}`,
    `<Renderer let:css><div class={css(3)}/></Renderer>`,
  ])
    assert.equal(svelte(script + template, resolve('Local.svelte'), { debug: true }), null);
});
