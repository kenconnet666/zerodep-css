import assert from 'node:assert/strict';
import test from 'node:test';
import { resolve } from 'node:path';
import { parse, compileScript } from 'vue/compiler-sfc';
import { compile } from 'svelte/compiler';
import { transformCss as vue } from '../../../vue/dist/compiler/index.js';
import { transformCss as svelte } from '../../../svelte/dist/compiler/index.js';

test('Vue 组件值使用 computed，列表值留在 renderList 并共享固定规则', () => {
  const source = `<script setup>
import { ref } from 'vue';
import { createStyles } from '@zerodep-css/vue';
const css = createStyles().useCss();
const width = ref(20);
const rows = ref([{ id: 1, width: 24 }]);
</script>
<template>
  <div :class="css(s => s.width.px(width))" />
  <div v-for="row in rows" :key="row.id" :class="css(s => s.width.px(row.width))" />
</template>`;
  const result = vue(source, resolve('HoistedList.vue'));
  assert(result);
  assert.equal((result.code.match(/createCompiledBinding as/g) ?? []).length, 1);
  assert.match(result.code, /computed as __zcss_computed_/);
  assert.match(result.code, /unref as __zcss_unref_/);
  assert.match(result.code, /__zcss_fast_binding_\d+\(\(\) => \[__zcss_unref_\d+\(width\)\]\)/);
  assert.match(result.code, /v-bind="__zcss_fast_binding_\d+\(\(\) => \[row\.width\]\)"/);
  const template = result.code.slice(result.code.indexOf('<template>'));
  assert(!template.includes('css(s =>'));
  const descriptor = parse(result.code, { filename: 'HoistedList.vue' }).descriptor;
  const compiled = compileScript(descriptor, { id: 'hoisted-list', inlineTemplate: true });
  assert.match(compiled.content, /CLASS, STYLE/);
  assert.match(compiled.content, /FULL_PROPS/);
});

test('Svelte keyed each 使用行内 derived 与原生 style 指令', () => {
  const source = `<script>
import { createStyles } from '@zerodep-css/svelte';
const css = createStyles().useCss();
let width = $state(20);
let rows = $state([{ id: 1, width: 24 }]);
</script>
<div class={css(s => s.width.px(width))}></div>
{#each rows as row (row.id)}
  <div class={css(s => s.width.px(row.width))}></div>
{/each}`;
  const result = svelte(source, resolve('HoistedList.svelte'));
  assert(result);
  assert.match(result.code, /\$derived\(__zcss_fast_binding_\d+\(\(\) => \[width\]\)\)/);
  assert.match(
    result.code,
    /\{@const __zcss_row_binding_\d+ = __zcss_fast_binding_\d+\(\(\) => \[row\.width\]\)\}/,
  );
  assert.match(result.code, /style:--zcss-[a-f0-9]{16}=/);
  assert(!result.code.slice(result.code.indexOf('</script>')).includes('css(s =>'));
  const compiled = compile(result.code, { filename: 'HoistedList.svelte', generate: 'client' });
  assert.match(compiled.js.code, /\$\.each\(/);
  assert.match(compiled.js.code, /\$\.derived\(/);
  assert.match(compiled.js.code, /\$\.set_style\(/);
  assert(!compiled.js.code.includes('$.attribute_effect'));
});

test('只有模板可见的 Vue props 保留原位绑定，不移入 script setup', () => {
  const source = `<script setup lang="ts">
import { createStyles } from '@zerodep-css/vue';
defineProps<{ width: number }>();
const css = createStyles().useCss();
</script><template><div :class="css(s => s.width.px(width))" /></template>`;
  const result = vue(source, resolve('TemplateProp.vue'));
  assert(result);
  assert(!result.code.includes('createCompiledBinding'));
  assert.match(result.code, /bindUnit/);
  compileScript(parse(result.code).descriptor, { id: 'template-prop', inlineTemplate: true });
});

test('单条动态 raw/token 与单位共用提升路径，仍保留原值回退', () => {
  for (const [framework, transform] of [
    ['vue', vue],
    ['svelte', svelte],
  ]) {
    for (const member of ['raw', 'token']) {
      const initial = JSON.stringify(member === 'raw' ? 'red' : 'flex');
      const setup =
        `import { createStyles } from '@zerodep-css/${framework}';` +
        `const css = createStyles().useCss();let value = ${framework === 'svelte' ? `$state(${initial})` : initial};`;
      const expression = `css(s => s.${member === 'raw' ? 'color' : 'display'}.${member}(value))`;
      const source =
        framework === 'vue'
          ? `<script setup>${setup}</script><template><div :class="${expression}"/></template>`
          : `<script>${setup}</script><div class={${expression}}></div>`;
      const result = transform(source, resolve(`SingleValue.${framework}`));
      assert(result?.code.includes('createCompiledBinding'));
      assert(result.code.includes('createDeclarationBinding'));
      assert(result.code.includes('bindValue'));
      if (framework === 'vue')
        compileScript(parse(result.code).descriptor, { id: 'single-value', inlineTemplate: true });
      else compile(result.code, { filename: 'SingleValue.svelte', generate: 'client' });
    }
  }
});
