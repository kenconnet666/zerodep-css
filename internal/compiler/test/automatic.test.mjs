import assert from 'node:assert/strict';
import test from 'node:test';
import { resolve } from 'node:path';
import { parse, compileScript } from 'vue/compiler-sfc';
import { compile } from 'svelte/compiler';
import { transformCss as vue } from '../../../vue/dist/compiler/index.js';
import { transformCss as svelte } from '../../../svelte/dist/compiler/index.js';
import { formatUnitValues } from '../../../core/dist/compiler-runtime.js';
import * as compilerRuntime from '../../../core/dist/compiler-runtime.js';
import * as adapter from '../../../vue/dist/index.js';
import * as vueCompilerRuntime from '../../../vue/dist/compiler-runtime.js';
import { createStyleContext } from '../../../core/dist/index.js';
import { createRequire } from 'node:module';
import { transform as compileJs } from 'esbuild';
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';

function fixture(framework, body, { tag = 'div', suffix = '', expression, script = '' } = {}) {
  const setup = `import {useStyleRuntime} from '@zerodep-css/${framework}';const {css}=useStyleRuntime();let gap=10;${script}`;
  const css = expression ?? `css(s=>{${body}})`;
  return framework === 'vue'
    ? `<script setup lang="ts">${setup}</script><template><${tag} :class="${css}" ${suffix}/></template>`
    : `<script lang="ts">${setup}</script><${tag} class={${css}} ${suffix}/>`;
}
for (const [framework, transform] of [
  ['vue', vue],
  ['svelte', svelte],
]) {
  const filename = resolve('Automatic.' + framework);
  test(`${framework}：普通动态单位值无需标记，整组单位共享一个绑定`, () => {
    const result = transform(
      fixture(framework, 's.display.flex;s.padding.px(8,gap + 2);'),
      filename,
    );
    assert(result);
    assert.match(result.code, /formatUnitValues/);
    assert.match(result.code, /padding.raw/);
    assert.equal((result.code.match(/var\(--zcss-/g) ?? []).length, 1);
    assert.match(result.code, /s.display.flex/);
    if (framework === 'vue')
      compileScript(parse(result.code).descriptor, { id: 'auto', inlineTemplate: true });
    else compile(result.code, { filename, generate: 'client' });
  });
  test(`${framework}：无法保证等价时保持原运行时源码`, () => {
    for (const body of [
      'if(gap > 0){s.padding.px(gap)}',
      'switch(gap){case 1:s.padding.px(gap);break;}',
      'let local=gap;s.padding.px(local);local++;',
      's.padding.px(getGap());',
      's.padding.px(gap);effect();',
      's.color.raw(getColor());s.padding.px(gap);',
      's.media(query,h=>{h.padding.px(gap)});',
    ])
      assert.equal(transform(fixture(framework, body), filename), null, body);
    assert.equal(
      transform(
        fixture(framework, '', {
          expression: 'gap ? css(s=>{s.padding.px(gap)}) : css(s=>{s.padding.px(0)})',
        }),
        filename,
      ),
      null,
    );
    assert.equal(
      transform(
        fixture(framework, '', { expression: 'css(s=>{s.padding.px(gap)},AppCss)' }),
        filename,
      ),
      null,
    );
    const staticResult = transform(fixture(framework, 's.padding.px(8,10);'), filename);
    assert.match(staticResult.code, /prepareStyle/);
    assert(!staticResult.code.includes('formatUnitValues'));
    assert.equal(
      transform(fixture(framework, 's.padding.px(gap);', { tag: 'Other' }), filename),
      null,
    );
    assert.equal(
      transform(
        fixture(framework, 's.padding.px(gap);', {
          suffix: framework === 'vue' ? 'v-bind="attrs"' : '{...attrs}',
        }),
        filename,
      ),
      null,
    );
  });
  test(`${framework}：脚本 const 样式仍保留定义时快照`, () => {
    const source = fixture(framework, '', {
      script: 'const cls=css(s=>{s.padding.px(gap)});',
      expression: 'cls',
    });
    assert.equal(transform(source, filename), null);
  });
  test(`${framework}：raw、token 和完整模板值自动绑定，保留必要结构重算`, () => {
    const source = fixture(
      framework,
      's.color.raw(color);s.display.token(display);s.transform.raw(`translate(${gap}px, 2px)`);',
      { script: `let color='red';let display='flex';` },
    );
    const result = transform(source, filename);
    assert(result.code.includes('createDeclarationBinding'));
    assert(!result.code.includes('prepareStyle'));
    assert.equal((result.code.match(/\.inline\(/g) ?? []).length, 3);
    if (framework === 'vue')
      compileScript(parse(result.code).descriptor, { id: 'values', inlineTemplate: true });
    else compile(result.code, { filename, generate: 'client' });
  });
  test(`${framework}：静态分支与嵌套声明可准备，未选分支不生成绑定`, () => {
    const source = fixture(
      framework,
      `if(false){s.width.px(missing.width)}else{s.hover(h=>{h.padding.px(gap)})}switch('b'){case 'a':s.width.px(missing.width);break;case 'b':s.media('(width > 1px)',m=>{m.width.px(gap)});break;default:s.width.px(missing.width);}`,
    );
    for (const debug of [false, true]) {
      const result = transform(source, filename, { debug });
      assert.equal((result.code.match(/var\(--zcss-/g) ?? []).length, 2);
      assert.match(result.code, /prepareStyle/);
      if (framework === 'vue')
        compileScript(parse(result.code).descriptor, { id: 'branches', inlineTemplate: true });
      else compile(result.code, { filename, generate: 'client' });
    }
  });
}
test('整组单位格式化保留联合约束、顺序和非法输入拒绝', () => {
  const choices = [
    [{ min: 0 }, {}],
    [{}, { min: 0 }],
  ];
  assert.equal(formatUnitValues([1, -2], choices, 'px', ' '), '1px -2px');
  assert.equal(formatUnitValues([-1, 2], choices, 'ms', ', '), '-1ms, 2ms');
  for (const values of [[-1, -2], [1], [1, NaN], ['1', 2], [1, null]])
    assert.throws(() => formatUnitValues(values, choices, 'px', ' '));
  assert.throws(() => formatUnitValues([1, 2], choices, 'px;color:red', ' '));
});

test('自动绑定的 SSR 保留 props、隐藏行守卫与请求隔离', async () => {
  const source = `<script setup lang="ts">import {useStyleRuntime} from '@zerodep-css/vue';defineProps<{gap:number}>();const {css}=useStyleRuntime();const rows=[{id:'hidden',detail:null},{id:'visible',detail:{width:20}}];</script><template><div :class="css(s=>{s.padding.px(8,gap)})"/><template v-for="row in rows" :key="row.id"><span v-if="row.detail" :class="css(s=>{s.width.px(row.detail.width)})"/></template></template>`;
  const result = vue(source, resolve('AutomaticSSR.vue'));
  const compiled = compileScript(parse(result.code).descriptor, {
    id: 'automatic',
    inlineTemplate: true,
    templateOptions: { ssr: true },
  });
  const js = await compileJs(compiled.content, { loader: 'ts', format: 'cjs', target: 'node24' });
  const module = { exports: {} };
  const require = createRequire(import.meta.url);
  new Function('require', 'module', 'exports', js.code)(
    (id) => {
      if (id === '@zerodep-css/vue') return adapter;
      if (id === '@zerodep-css/vue/compiler-runtime') return vueCompilerRuntime;
      if (id === '@zerodep-css/core/compiler-runtime') return compilerRuntime;
      return require(id);
    },
    module,
    module.exports,
  );
  const records = [];
  for (const gap of [12, 24]) {
    const context = createStyleContext({ target: null });
    try {
      const app = createSSRApp(module.exports.default, { gap });
      adapter.installStyleContext(app, context);
      const html = await renderToString(app);
      assert(html.includes(`8px ${gap}px`));
      assert(html.includes('20px'));
      records.push(context.runtime.snapshot().records);
    } finally {
      context.dispose();
    }
  }
  assert.deepEqual(records[0], records[1], '不同请求的动态值不进入规则或哈希');
});
