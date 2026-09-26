import assert from 'node:assert/strict';
import test from 'node:test';
import { createRequire } from 'node:module';
import { transformSync } from 'esbuild';
import * as Vue from 'vue';
import { parse, compileScript, compileTemplate } from 'vue/compiler-sfc';
import { renderToString } from 'vue/server-renderer';
import * as adapter from '../vue/dist/server.js';
import * as bindings from '../vue/dist/bindings-server.js';
import plugin from '../vue/dist/vite.js';
import vuePlugin from '@vitejs/plugin-vue';
import { renderer, element, find } from './helpers/vue-renderer.mjs';

const require = createRequire(import.meta.url);
function compile(template, extra = '', options = {}) {
  const instance = plugin(options);
  const source = `<script setup lang="ts">
import {reactive} from 'vue';
import {Css,css as makeCss,WidthCss} from '@zerodep-css/vue';
const state = reactive({noise:0,width:20,compact:false,show:true,items:[{id:'a',compact:false,width:10,label:'A'},{id:'b',compact:true,width:30,label:'B'}]});
const s = new Css();
${extra}
defineExpose({state});
</script><template><section :data-noise="state.noise">${template}</section></template>`;
  const transformed =
    instance.transform.call({ warn() {} }, source, '/test/Card.vue')?.code ?? source;
  const { descriptor, errors } = parse(transformed, { filename: '/test/Card.vue' });
  assert.deepEqual(errors, []);
  const script = compileScript(descriptor, {
    id: 'cache-test',
    isProd: true,
    inlineTemplate: !options.development,
    templateOptions: { ssr: options.ssr, compilerOptions: instance.api.compilerOptions },
  });
  const code = script.content;
  function evaluate(code) {
    const js = transformSync(code, { loader: 'ts', format: 'cjs' }).code;
    const module = { exports: {} };
    new Function('require', 'module', 'exports', js)(
      (name) =>
        name === 'vue'
          ? Vue
          : name === '@zerodep-css/vue'
            ? adapter
            : name === '@zerodep-css/vue/bindings'
              ? bindings
              : require(name),
      module,
      module.exports,
    );
    return module.exports;
  }
  const output = evaluate(code);
  if (options.development) {
    const template = compileTemplate({
      source: descriptor.template.content,
      filename: '/test/Card.vue',
      id: 'cache-test',
      compilerOptions: { ...instance.api.compilerOptions, bindingMetadata: script.bindings },
    });
    assert.deepEqual(template.errors, []);
    output.default.render = evaluate(template.code).render;
  }
  return { component: output.default, code, transformed };
}
async function run(template, callback, extra = '', options = {}) {
  const compiled = compile(template, extra, options);
  const base = adapter.createServerCssHost();
  let calls = 0,
    renders = 0;
  const host = {
    ...base,
    css(...parts) {
      calls++;
      return base.css(...parts);
    },
  };
  await adapter.withCssHost(host, async () => {
    const component = { ...compiled.component };
    const setup = component.setup;
    component.setup = (props, context) => {
      const result = setup(props, context);
      return typeof result === 'function'
        ? (...args) => {
            renders++;
            return result(...args);
          }
        : result;
    };
    if (component.render) {
      const render = component.render;
      component.render = function (...args) {
        renders++;
        return render.apply(this, args);
      };
    }
    const root = element('root'),
      app = renderer.createApp(component);
    adapter.provideCssHost(app, host);
    const exposed = app.mount(root);
    try {
      await callback({
        state: exposed.state,
        root,
        host,
        compiled,
        calls: () => calls,
        renders: () => renders,
        async update(fn) {
          fn(exposed.state);
          await Vue.nextTick();
        },
      });
    } finally {
      app.unmount();
    }
  });
}

test('普通模板的条件、数组组合自动缓存，其他属性保持更新', async () => {
  await run(
    `<div data-box :class="[state.show && makeCss(s.display.flex, state.compact ? s.padding.px(4) : s.padding.px(16)), 'external']">{{state.noise}}</div>`,
    async (p) => {
      assert.equal(p.calls(), 1);
      assert.match(p.compiled.code, /_cache/);
      await p.update((s) => s.noise++);
      assert.equal(p.calls(), 1);
      assert.equal(find(p.root, 'data-box')[0].text, '1');
      await p.update((s) => (s.compact = true));
      assert.equal(p.calls(), 2);
      await p.update((s) => (s.show = false));
      assert.equal(find(p.root, 'data-box')[0].props.class, 'external');
    },
  );
});

test('自动安装 Vue AST 扩展，保留用户转换且重复配置不叠加', () => {
  const original = () => {};
  const vue = vuePlugin({ template: { compilerOptions: { nodeTransforms: [original] } } });
  const css = plugin();
  const config = { root: process.cwd(), plugins: [css, vue] };
  css.configResolved(config);
  css.configResolved(config);
  assert.equal(vue.api.options.template.compilerOptions.nodeTransforms[0], original);
  assert.equal(vue.api.options.template.compilerOptions.nodeTransforms.length, 2);
});

test('静态 class 与对象形式 class 合并不丢失，也不改写普通 class', async () => {
  await run(
    `<div data-box class="fixed" :class="{[makeCss(s.color.red)]:state.show, active:state.compact}"></div>`,
    async (p) => {
      const initial = find(p.root, 'data-box')[0].props.class;
      assert.match(initial, /fixed/);
      assert.match(initial, /z-/);
      await p.update((s) => s.noise++);
      assert.equal(p.calls(), 1);
      await p.update((s) => (s.compact = true));
      assert.match(find(p.root, 'data-box')[0].props.class, /active/);
      await p.update((s) => (s.show = false));
      assert.equal(find(p.root, 'data-box')[0].props.class, 'fixed active');
    },
  );
});

test('v-for 的多元素和嵌套样式分别缓存，重排、同 key 替换、删除正确', async () => {
  await run(
    `<template v-for="(item,index) in state.items" :key="item.id">
<div data-row :class="makeCss(s.display.flex,item.compact?s.padding.px(4):s.padding.px(16))">{{item.label}}</div>
<span data-copy :class="makeCss(index ? s.color.red : s.color.blue)"></span>
</template>`,
    async (p) => {
      assert.equal(p.calls(), 4);
      await p.update((s) => s.noise++);
      assert.equal(p.calls(), 4);
      await p.update((s) => (s.items[0].label = 'changed'));
      assert.equal(p.calls(), 4);
      assert.equal(find(p.root, 'data-row')[0].text, 'changed');
      await p.update((s) => (s.items[0].compact = true));
      assert.equal(p.calls(), 5);
      await p.update((s) => s.items.reverse());
      assert.equal(find(p.root, 'data-row')[0].text, 'B');
      await p.update((s) => (s.items[0] = { id: 'b', compact: false, width: 60, label: 'new' }));
      assert.equal(find(p.root, 'data-row')[0].text, 'new');
      await p.update((s) => (s.items = []));
      assert.equal(find(p.root, 'data-row').length, 0);
    },
  );
});

test('模板 computed 与单行多变量隐式绑定配合，类稳定且变量持续更新', async () => {
  await run(
    `<div data-box :class="[makeCss(s.width.px(state.width),s.padding.px(state.width,2)), 'fixed']"></div>
<div v-for="item in state.items" :key="item.id" data-row :class="makeCss(s.width.px(item.width))">{{item.label}}</div>`,
    async (p) => {
      const initial = find(p.root, 'data-row').map((n) => n.props.class);
      const count = p.calls();
      const renders = p.renders();
      await p.update((s) => {
        s.width = 45;
        s.items[0].width = 11;
      });
      assert.deepEqual(
        find(p.root, 'data-row').map((n) => n.props.class),
        initial,
      );
      assert.equal(p.calls(), count);
      assert.equal(p.renders(), renders, '只有变量值变化时不应重新渲染组件');
      const values = p.host
        .rules()
        .filter((r) => r.kind === 'bindings')
        .map((r) => r.body)
        .join('');
      assert.match(values, /45px/);
      assert.match(values, /11px/);
      await p.update(
        (s) => (s.items[0] = { id: 'a', compact: false, width: 55, label: 'replacement' }),
      );
      assert.match(
        p.host
          .rules()
          .filter((r) => r.kind === 'bindings')
          .map((r) => r.body)
          .join(''),
        /55px/,
      );
    },
  );
});

test('未知辅助函数与覆写方法保持逐次求值，可关闭自动缓存', async () => {
  await run(
    `<div :class="makeCss(s.width.raw(read()))"></div>`,
    async (p) => {
      assert.doesNotMatch(p.compiled.transformed, /\.template\(/);
      const before = p.calls();
      await p.update((s) => s.noise++);
      assert.equal(p.calls(), before + 1);
    },
    `let n=0; function read(){ return (++n)+'px'; }`,
  );
  await run(
    `<div :class="makeCss(custom.width.px(4))"></div>`,
    async (p) => {
      const before = p.calls();
      await p.update((s) => s.noise++);
      assert.equal(p.calls(), before + 1);
    },
    `class Width extends WidthCss { px(n:number){ return super.px(n+1); } }
class AppCss extends Css { override readonly width = new Width(); } const custom=new AppCss();`,
  );
  await run(
    `<div :class="makeCss(s.display.flex)"></div>`,
    async (p) => {
      await p.update((s) => s.noise++);
      assert.equal(p.calls(), 2);
    },
    '',
    { templateCache: false },
  );
});

test('SSR 使用相同声明与变量绑定协议，不创建客户端列表缓存', async () => {
  const result = compile(
    `<div v-for="item in state.items" :key="item.id" :class="makeCss(s.width.px(item.width))"></div>`,
    '',
    { ssr: true },
  );
  const host = adapter.createServerCssHost();
  const html = await adapter.withCssHost(host, () =>
    renderToString(Vue.createSSRApp(result.component)),
  );
  assert.match(html, /class="z-/);
  assert.equal(host.rules().filter((r) => r.kind === 'bindings').length, 2);
  assert.doesNotMatch(result.code, /\.row\(/);
});

test('开发模式分离 render、无 key 列表与解构循环也能自动缓存', async () => {
  await run(
    `<div v-for="({compact,label},index) in state.items" data-row :class="makeCss(compact?s.color.red:s.color.blue)">{{label}}-{{index}}</div>`,
    async (p) => {
      assert.equal(p.calls(), 2);
      await p.update((s) => s.noise++);
      assert.equal(p.calls(), 2);
      await p.update((s) => (s.items[0].label = 'updated'));
      assert.match(find(p.root, 'data-row')[0].text, /updated/);
      const before = p.calls();
      await p.update((s) => (s.items[0].compact = true));
      assert.equal(p.calls(), before + 1);
    },
    '',
    { development: true },
  );
});

test('纯 CSS 字符串可缓存，普通对象读取与自定义 getter 保持运行时行为', async () => {
  await run(`<div :class="makeCss('display:flex;')"></div>`, async (p) => {
    await p.update((s) => s.noise++);
    assert.equal(p.calls(), 1);
  });
  await run(
    `<div :class="makeCss(s.width.px(plain.width))"></div>`,
    async (p) => {
      await p.update((s) => s.noise++);
      assert.equal(p.calls(), 2);
    },
    'const plain={width:20};',
  );
  await run(
    `<div :class="makeCss(custom.width.px(4))"></div>`,
    async (p) => {
      await p.update((s) => s.noise++);
      assert.equal(p.calls(), 2);
    },
    `class AppCss extends Css { get width(){ return new WidthCss(); } } const custom=new AppCss();`,
  );
});

test('浅 ref 内普通对象及内联 getter 不会被错误冻结', async () => {
  await run(
    `<div :class="makeCss(s.width.px(plain.width))"></div>`,
    async (p) => {
      await p.update((s) => {
        s.plain.width = 33;
        s.noise++;
      });
      assert.match(
        p.host
          .rules()
          .filter((r) => r.kind === 'bindings')
          .map((r) => r.body)
          .join(''),
        /33px/,
      );
    },
    `import {shallowRef} from 'vue'; const plain=shallowRef({width:12}); Object.assign(state,{plain:plain.value});`,
  );
  await run(
    `<div data-box :class="{[makeCss(s.color.red)]:true,get active(){return state.compact}}"></div>`,
    async (p) => {
      await p.update((s) => (s.compact = true));
      assert.match(find(p.root, 'data-box')[0].props.class, /active/);
      assert.doesNotMatch(p.compiled.transformed, /\.template\(/);
    },
  );
});

test('嵌套循环与分支保持各自局部变量，同 key 不串行', async () => {
  await run(
    `<div v-if="state.show"><section v-for="outer in state.items" :key="outer.id">
<div v-for="inner in state.items" :key="inner.id" data-row :class="makeCss(outer.compact?s.color.red:s.color.blue,inner.compact?s.padding.px(4):s.padding.px(16))">{{outer.label}}-{{inner.label}}</div>
</section></div>`,
    async (p) => {
      assert.equal(find(p.root, 'data-row').length, 4);
      await p.update((s) => s.items.reverse());
      assert.equal(find(p.root, 'data-row')[0].text, 'B-B');
      await p.update((s) => (s.show = false));
      assert.equal(find(p.root, 'data-row').length, 0);
      await p.update((s) => (s.show = true));
      assert.equal(find(p.root, 'data-row').length, 4);
    },
  );
});
