import assert from 'node:assert/strict';
import test from 'node:test';
import { resolve } from 'node:path';
import { parse, compileScript } from 'vue/compiler-sfc';
import { compile, parse as parseSvelte } from 'svelte/compiler';
import { transformCss as vue } from '../../../vue/dist/compiler/index.js';
import { transformCss as svelte } from '../../../svelte/dist/compiler/index.js';
import {
  bindUnit,
  bindValue,
  createDeclarationBinding,
  formatUnitValues,
} from '../../runtime/dist/compiler-runtime.js';
import * as compilerRuntime from '../../runtime/dist/compiler-runtime.js';
import * as adapter from '../../../vue/dist/index.js';
import { createRuntime } from '../../runtime/dist/index.js';
import { createRequire } from 'node:module';
import { transform as compileJs } from 'esbuild';
import { createSSRApp } from 'vue';
import { renderToString } from 'vue/server-renderer';

function fixture(framework, body, { tag = 'div', suffix = '', expression, script = '' } = {}) {
  const setup = `import {createStyles} from '@zerodep-css/${framework}';const styles=createStyles();const css=styles.useCss();let gap=10;${script}`;
  const css = expression ?? `css(s=>{${body}})`;
  return framework === 'vue'
    ? `<script setup lang="ts">${setup}</script><template><${tag} :class="${css}" ${suffix}/></template>`
    : `<script lang="ts">${setup}</script><${tag} class={${css}} ${suffix}/>`;
}
function projectFixture(framework, setup, body = 's.width.px(gap);') {
  const script = `import {createStyles} from '@zerodep-css/${framework}';let gap=10;const theme={};const options={};const key='theme';const rows=[{css:()=>''}];class AppCss{};${setup}`;
  return framework === 'vue'
    ? `<script setup lang="ts">${script}</script><template><div :class="css(s=>{${body}})"/></template>`
    : `<script lang="ts">${script}</script><div class={css(s=>{${body}})}/>`;
}
function propsExpression(framework, result) {
  if (framework === 'vue') {
    const element = parse(result.code).descriptor.template.ast.children[0];
    return element.props.find((prop) => prop.type === 7 && prop.name === 'bind' && !prop.arg).exp
      .content;
  }
  const element = parseSvelte(result.code, { modern: true }).fragment.nodes.find(
    (node) => node.type === 'RegularElement',
  );
  const spread = element.attributes.find((attribute) => attribute.type === 'SpreadAttribute');
  return result.code.slice(spread.expression.start, spread.expression.end);
}
for (const [framework, transform] of [
  ['vue', vue],
  ['svelte', svelte],
]) {
  const filename = resolve('Automatic.' + framework);
  test(`${framework}：同文件 createStyles 三种绑定形态可自动绑定并通过官方编译`, () => {
    for (const setup of [
      'const styles=createStyles();const css=styles.useCss();',
      'const styles=createStyles({theme:theme});const css=styles.useCss();',
      'const {useCss}=createStyles({});const css=useCss();',
      'const {useCss:pick}=createStyles({theme:theme});const css=pick();',
      'const css=createStyles().useCss();',
      'const css=createStyles({theme:theme}).useCss();',
    ]) {
      const result = transform(projectFixture(framework, setup), filename);
      assert(result?.code.includes('bindUnit'), setup);
      assert(!result.code.includes('prepareStyle'), setup);
      if (framework === 'vue') {
        const descriptor = parse(result.code).descriptor;
        compileScript(descriptor, { id: 'new-hook', inlineTemplate: true });
        compileScript(descriptor, {
          id: 'new-hook-ssr',
          inlineTemplate: true,
          templateOptions: { ssr: true },
        });
      } else {
        compile(result.code, { filename, generate: 'client' });
        compile(result.code, { filename, generate: 'server' });
      }
    }
    const staticResult = transform(
      projectFixture(
        framework,
        'const styles=createStyles();const css=styles.useCss();',
        's.display.flex;',
      ),
      filename,
    );
    assert(staticResult.code.includes('prepareStyle'));
    const directStatic = transform(
      projectFixture(framework, 'const css=createStyles().useCss();', 's.display.flex;'),
      filename,
    );
    assert(directStatic.code.includes('prepareStyle'));
  });
  test(`${framework}：createStyles 派生类或未知配置只保留 debug 来源`, () => {
    for (const options of [
      '{cssType:AppCss}',
      '{theme:theme,cssType:AppCss}',
      '{...options}',
      '{get theme(){return theme}}',
      '{[key]:theme}',
      '{other:theme}',
      'options',
      'undefined',
    ]) {
      const source = projectFixture(
        framework,
        `const styles=createStyles(${options});const css=styles.useCss();`,
      );
      assert.equal(transform(source, filename), null, options);
      const debug = transform(source, filename, { debug: true });
      assert(debug?.code.includes('withStyleSource'), options);
      assert(!debug.code.includes('bindUnit'), options);
      assert(!debug.code.includes('prepareStyle'), options);
      const direct = projectFixture(framework, `const css=createStyles(${options}).useCss();`);
      assert.equal(transform(direct, filename), null, options);
      const directDebug = transform(direct, filename, { debug: true });
      assert(directDebug?.code.includes('withStyleSource'), options);
      assert(!directDebug.code.includes('bindUnit'), options);
    }
  });
  test(`${framework}：createStyles 来源、const 和遮蔽限制不猜同名方法`, () => {
    const valid = projectFixture(
      framework,
      'const styles=createStyles();const css=styles.useCss();',
    );
    const alias = valid
      .replace('import {createStyles}', 'import {createStyles as makeStyles}')
      .replace('styles=createStyles()', 'styles=makeStyles()');
    assert(transform(alias, filename)?.code.includes('bindUnit'));
    const directAlias = projectFixture(framework, 'const css=makeStyles().useCss();').replace(
      'import {createStyles}',
      'import {createStyles as makeStyles}',
    );
    assert(transform(directAlias, filename)?.code.includes('bindUnit'));
    for (const source of [
      valid.replace(`@zerodep-css/${framework}`, './styles'),
      valid.replace(
        `@zerodep-css/${framework}`,
        `@zerodep-css/${framework === 'vue' ? 'svelte' : 'vue'}`,
      ),
      valid.replace('const styles=createStyles()', 'let styles=createStyles()'),
      valid.replace('const styles=createStyles()', 'const styles={useCss(){return ()=>"foreign"}}'),
      valid.replace('styles.useCss()', 'styles.useCss(1)'),
      valid.replace(
        'const styles=createStyles()',
        'const styles=createStyles({theme, ...options})',
      ),
      projectFixture(framework, 'const {useCss}=createStyles();const css=useCss(1);'),
      projectFixture(framework, 'const {useCss=other}=createStyles();const css=useCss();'),
      projectFixture(framework, 'const styles=createStyles();const css=styles.other();'),
      projectFixture(framework, 'let css=createStyles().useCss();'),
      projectFixture(framework, 'const css=createStyles().useCss(1);'),
      projectFixture(framework, 'const css=other().useCss();'),
      projectFixture(framework, 'const css=createStyles({cssType:AppCss}).useCss();').replace(
        `@zerodep-css/${framework}`,
        './styles',
      ),
    ])
      assert.equal(transform(source, filename), null, source);
    const shadowed =
      framework === 'vue'
        ? valid.replace('<div :class=', '<div v-for="{css} in rows" :key="css" :class=')
        : valid
            .replace('<div class=', '{#each rows as {css}}<div class=')
            .replace('/>', '/>{/each}');
    assert.equal(transform(shadowed, filename), null);
  });
  test(`${framework}：常用状态快捷方法保留动态绑定`, () => {
    for (const method of ['focus', 'focusWithin', 'active', 'disabled']) {
      const result = transform(fixture(framework, `s.${method}(h=>{h.width.px(gap);});`), filename);
      assert(result.code.includes('bindUnit'));
      assert(result.code.includes(`s.${method}`));
    }
  });
  test(`${framework}：参数初始化和特殊函数不进入静态准备或绑定提升`, () => {
    for (const expression of [
      'css((s, unused = effect()) => {s.color.red;})',
      'css((s, unused = effect()) => {s.width.px(gap);})',
      'css(s => {s.hover((h, unused = effect()) => {h.width.px(gap);});})',
      'css(async s => {s.width.px(gap);})',
      'css(function* (s) {s.width.px(gap);})',
      'css((...s) => {s.color.red;})',
    ]) {
      const source = fixture(framework, '', { expression });
      assert.equal(transform(source, filename), null, expression);
      const debug = transform(source, filename, { debug: true });
      assert(!debug.code.includes('prepareStyle'), expression);
      assert(!debug.code.includes('--zcss-'), expression);
    }
  });
  test(`${framework}：普通动态单位值无需标记，整组单位共享一个绑定`, () => {
    const result = transform(
      fixture(framework, 's.display.flex;s.padding.px(8,gap + 2);'),
      filename,
    );
    assert(result);
    assert.match(result.code, /bindUnit/);
    assert.match(result.code, /padding.raw/);
    assert.equal((result.code.match(/--zcss-[a-f0-9]{16}/g) ?? []).length, 1);
    assert(!result.code.includes('prepareStyle'));
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
      's.constructor.name;s.padding.px(gap);',
      's.toString.call(s);s.padding.px(gap);',
      's.width.dvh(gap);',
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
    assert(!staticResult.code.includes('bindUnit'));
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
  test(`${framework}：严格 CSP 模式保留动态运行时和静态准备`, () => {
    const dynamic = fixture(framework, 's.width.px(gap);');
    assert.equal(transform(dynamic, filename, { bindings: 'runtime' }), null);
    const debug = transform(dynamic, filename, { bindings: 'runtime', debug: true });
    assert(debug.code.includes('withStyleSource'));
    assert(!debug.code.includes('--zcss-'));
    assert(!debug.code.includes('prepareStyle'));
    const fixed = transform(fixture(framework, 's.display.flex;'), filename, {
      bindings: 'runtime',
    });
    assert(fixed.code.includes('prepareStyle'));
    assert.throws(() => transform(dynamic, filename, { bindings: 'invalid' }), /bindings/);
  });
  test(`${framework}：不能把宿主变量提升给兄弟、祖先或其他未知继承目标`, () => {
    for (const selector of [
      '& + .peer',
      '& ~ .peer',
      ':has(> &)',
      '& .child, .outside',
      '&::backdrop',
      '& > .child',
    ]) {
      const source = fixture(framework, `s.selector('${selector}',n=>{n.width.px(gap)});`);
      assert.equal(transform(source, filename), null, selector);
    }
    assert.equal(
      transform(fixture(framework, `s.pseudo('::backdrop',n=>{n.width.px(gap)});`), filename),
      null,
    );
    assert(
      transform(
        fixture(framework, `s.selector('&:hover',n=>{n.width.px(gap)});`),
        filename,
      ).code.includes('bindUnit'),
    );
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
    assert.equal((result.code.match(/\.raw\(__zcss_bind_value_/g) ?? []).length, 3);
    if (framework === 'vue')
      compileScript(parse(result.code).descriptor, { id: 'values', inlineTemplate: true });
    else compile(result.code, { filename, generate: 'client' });
  });
  test(`${framework}：动态单位在回调原位置只读取一次，null 恢复前声明`, () => {
    const result = transform(
      fixture(framework, 's.width.px(50);s.width.px(state.gap);', {
        script: 'const state={gap:12};',
      }),
      filename,
    );
    assert(!result.code.includes('prepareStyle'));
    if (framework === 'vue') assert(!result.code.includes('computed as'));
    const alias = result.code.match(/bindUnit as (\w+)/)[1];
    const evaluate = new Function(
      'css',
      'state',
      alias,
      `return ${propsExpression(framework, result)}`,
    );
    const runtime = createRuntime({ target: null });
    try {
      let reads = 0;
      const absent = evaluate(
        runtime.css,
        {
          get gap() {
            reads++;
            return null;
          },
        },
        bindUnit,
      );
      assert.equal(reads, 1);
      assert.equal(runtime.snapshot().records[0].body, 'width:50px;');
      assert.equal(absent.style, undefined);
      const present = evaluate(
        runtime.css,
        {
          get gap() {
            reads++;
            return 12;
          },
        },
        bindUnit,
      );
      assert.equal(reads, 2);
      assert.notEqual(absent.class, present.class);
      assert(
        framework === 'vue'
          ? Object.values(present.style).includes('12px')
          : present.style.includes('12px'),
      );
      assert.match(runtime.snapshot().records[1].body, /^width:var\(--zcss-/);
    } finally {
      runtime.dispose();
    }
  });
  test(`${framework}：多参数单位空值仍先求值全部参数，动态原 style 回退`, () => {
    const result = transform(
      fixture(framework, 's.padding.px(state.first,state.second);', {
        script: 'const state={first:null,second:0};',
      }),
      filename,
    );
    const alias = result.code.match(/bindUnit as (\w+)/)[1];
    const evaluate = new Function(
      'css',
      'state',
      alias,
      `return ${propsExpression(framework, result)}`,
    );
    const runtime = createRuntime({ target: null });
    const reads = [];
    try {
      const props = evaluate(
        runtime.css,
        {
          get first() {
            reads.push('first');
            return null;
          },
          get second() {
            reads.push('second');
            return 0;
          },
        },
        bindUnit,
      );
      assert.deepEqual(reads, ['first', 'second']);
      assert.equal(props.style, undefined);
      assert.equal(runtime.snapshot().records[0]?.body ?? '', '');
    } finally {
      runtime.dispose();
    }
    assert.equal(
      transform(
        fixture(framework, 's.width.px(gap);', {
          suffix: framework === 'vue' ? ':style="state.inline"' : 'style={state.inline}',
          script: 'const state={inline:"color:red"};',
        }),
        filename,
      ),
      null,
    );
    assert.equal(
      transform(
        fixture(framework, 's.width.px(gap);', { suffix: 'style="color:red/*"' }),
        filename,
      ),
      null,
    );
  });
  test(`${framework}：前面的非法固定声明先抛错，不提前读取后续 getter`, () => {
    const result = transform(
      fixture(framework, "s.color.token('invalid');s.width.px(state.gap);", {
        script: 'const state={gap:12};',
      }),
      filename,
    );
    const alias = result.code.match(/bindUnit as (\w+)/)[1];
    const evaluate = new Function(
      'css',
      'state',
      alias,
      `return ${propsExpression(framework, result)}`,
    );
    const runtime = createRuntime({ target: null });
    let reads = 0;
    try {
      assert.throws(
        () =>
          evaluate(
            runtime.css,
            {
              get gap() {
                reads++;
                return 12;
              },
            },
            bindUnit,
          ),
        /Unknown CSS token/,
      );
      assert.equal(reads, 0);
      assert.equal(runtime.stats().records, 0);
    } finally {
      runtime.dispose();
    }
  });
  test(`${framework}：raw 输入 getter 只读取一次，变量 class 与 inline 值同源`, () => {
    const result = transform(
      fixture(framework, 's.color.raw(state.color);', { script: 'const state={color:"red"};' }),
      filename,
    );
    const alias = result.code.match(/bindValue as (\w+)/)[1];
    const helper = result.code.match(/const (\w+) = \w+\("(--zcss-[a-f0-9]{16})"/);
    const evaluate = new Function(
      'css',
      'state',
      alias,
      helper[1],
      `return ${propsExpression(framework, result)}`,
    );
    const runtime = createRuntime({ target: null });
    let reads = 0;
    try {
      const props = evaluate(
        runtime.css,
        {
          get color() {
            reads++;
            return 'red';
          },
        },
        bindValue,
        createDeclarationBinding(helper[2], { property: 'color' }),
      );
      assert.equal(reads, 1);
      assert(
        framework === 'vue'
          ? Object.values(props.style).includes('red')
          : props.style.includes('red'),
      );
      assert.match(runtime.snapshot().records[0].body, /^color:var\(--zcss-/);
    } finally {
      runtime.dispose();
    }
  });
  test(`${framework}：静态分支与嵌套声明可准备，未选分支不生成绑定`, () => {
    const source = fixture(
      framework,
      `if(false){s.width.px(missing.width)}else{s.hover(h=>{h.padding.px(gap)})}switch('b'){case 'a':s.width.px(missing.width);break;case 'b':s.media('(width > 1px)',m=>{m.width.px(gap)});break;default:s.width.px(missing.width);}`,
    );
    for (const debug of [false, true]) {
      const result = transform(source, filename, { debug });
      assert.equal((result.code.match(/--zcss-[a-f0-9]{16}/g) ?? []).length, 2);
      assert(!result.code.includes('prepareStyle'));
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
  for (const values of [[-1, -2], [1], [1, NaN], ['1', 2], [null]])
    assert.throws(() => formatUnitValues(values, choices, 'px', ' '));
  assert.equal(formatUnitValues([1, null], choices, 'px', ' '), undefined);
  assert.throws(() => formatUnitValues([1, 2], choices, 'px;color:red', ' '));
});

test('自动绑定的 SSR 保留 props、隐藏行守卫与请求隔离', async () => {
  const source = `<script setup lang="ts">import {createStyles} from '@zerodep-css/vue';defineProps<{gap:number}>();const styles=createStyles();const css=styles.useCss();const rows=[{id:'hidden',detail:null},{id:'visible',detail:{width:20}}];</script><template><div :class="css(s=>{s.padding.px(8,gap)})"/><template v-for="row in rows" :key="row.id"><span v-if="row.detail" :class="css(s=>{s.width.px(row.detail.width)})"/></template></template>`;
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
      if (id === '@zerodep-css/vue/compiler-runtime') return compilerRuntime;
      return require(id);
    },
    module,
    module.exports,
  );
  const records = [];
  for (const gap of [12, 24]) {
    const host = adapter.createStyles().createHost({ target: null });
    try {
      const app = createSSRApp(module.exports.default, { gap });
      app.use(host);
      const html = await renderToString(app);
      assert(html.includes(`8px ${gap}px`));
      assert(html.includes('20px'));
      records.push(host.snapshot().runtime.records);
    } finally {
      host.dispose();
    }
  }
  assert.deepEqual(records[0], records[1], '不同请求的动态值不进入规则或哈希');
});

test('Vue 静态准备按组件复用，保留模板守卫、诊断与请求所有权', async () => {
  const source = `<script setup lang="ts">import {createStyles} from '@zerodep-css/vue';defineProps<{show:boolean}>();const styles=createStyles();const css=styles.useCss();const rows=[1,2,3];</script><template><div v-if="show"><span v-for="row in rows" :key="row" :class="css(s=>{s.name('static');s.width.px(8);})"/></div><div v-if="false" :class="css(s=>{s.width.px(-1);})"/></template>`;
  for (const debug of [false, true]) {
    const transformed = vue(source, resolve('StaticReuse.vue'), { debug });
    const compiled = compileScript(parse(transformed.code).descriptor, {
      id: 'static-reuse',
      inlineTemplate: true,
      templateOptions: { ssr: true },
    });
    const js = await compileJs(compiled.content, { loader: 'ts', format: 'cjs', target: 'node24' });
    const module = { exports: {} },
      require = createRequire(import.meta.url);
    let preparations = 0;
    const calls = [];
    new Function('require', 'module', 'exports', js.code)(
      (id) => {
        if (id === '@zerodep-css/vue')
          return {
            ...adapter,
            createStyles(...args) {
              const styles = adapter.createStyles(...args);
              return {
                ...styles,
                useCss() {
                  const css = styles.useCss();
                  return (...inputs) => {
                    if (inputs.length === 1 && typeof inputs[0] === 'function')
                      calls.push(inputs[0]);
                    return css(...inputs);
                  };
                },
              };
            },
          };
        if (id === '@zerodep-css/vue/compiler-runtime')
          return {
            ...compilerRuntime,
            prepareStyle(...args) {
              preparations++;
              return compilerRuntime.prepareStyle(...args);
            },
          };
        return require(id);
      },
      module,
      module.exports,
    );
    const snapshots = [];
    for (const show of [false, true, true]) {
      const host = adapter.createStyles().createHost({ target: null });
      try {
        const app = createSSRApp(module.exports.default, { show });
        app.use(host);
        await renderToString(app);
        assert.equal(host.stats().records, show ? 1 : 0);
        if (show) snapshots.push(host.snapshot().runtime);
      } finally {
        host.dispose();
      }
    }
    assert.equal(preparations, 6, '每组件准备两个函数，不提前执行非法的隐藏样式');
    assert.equal(calls.length, 6);
    assert.equal(calls[0], calls[1]);
    assert.equal(calls[1], calls[2]);
    assert.notEqual(calls[2], calls[3], '不同组件/请求各自拥有准备函数');
    assert.deepEqual(snapshots[0], snapshots[1]);
    if (debug) assert(JSON.stringify(snapshots[0]).includes('StaticReuse.vue'));
    const updated = vue(source.replace('px(8)', 'px(9)'), resolve('StaticReuse.vue'), { debug });
    const keys = (text) => text.match(/[a-f0-9]{64}/g);
    assert.notEqual(keys(transformed.code)[0], keys(updated.code)[0], 'HMR 内容变更更新准备身份');
  }
});

test('Vue 静态准备保留未选分支，不重复改写已提升的回调', () => {
  const source = fixture('vue', 'if(false){css(h=>{h.color.red;});}s.width.px(8);');
  const result = vue(source, resolve('StaticDeadBranch.vue'), { debug: true });
  assert(result.code.includes('if(false){css(h=>{h.color.red;});}'));
  compileScript(parse(result.code).descriptor, { id: 'dead', inlineTemplate: true });
});
