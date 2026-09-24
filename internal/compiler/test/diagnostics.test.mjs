import assert from 'node:assert/strict';
import test from 'node:test';
import { resolve } from 'node:path';
import { transformCss as vue, cssPlugin as vuePlugin } from '../../../vue/dist/compiler/index.js';
import {
  transformCss as svelte,
  cssPlugin as sveltePlugin,
} from '../../../svelte/dist/compiler/index.js';

function fixture(framework, expression, { setup = '', tag = 'div', style = '' } = {}) {
  const script = `import {createStyles,Css} from '@zerodep-css/${framework}';class AppCss extends Css{};const options={};const styles=createStyles();const css=styles.useCss();let gap=10;${setup}`;
  return framework === 'vue'
    ? `<script setup lang="ts">${script}</script><template><${tag} ${style} :class="${expression}"/></template>`
    : `<script lang="ts">${script}</script><${tag} ${style} class={${expression}}/>`;
}

for (const [framework, transform, pluginFactory] of [
  ['vue', vue, vuePlugin],
  ['svelte', svelte, sveltePlugin],
]) {
  const filename = resolve('Diagnostics.' + framework);
  const dynamic = fixture(framework, 'css(s=>{s.width.px(gap);if(gap>0)s.color.red;})');
  test(`${framework}：显式 debug 返回相对位置和粗粒度未命中原因`, () => {
    const cases = [
      ['dynamic-structure', dynamic, {}],
      ['csp-bindings', fixture(framework, 'css(s=>s.width.px(gap))'), { bindings: 'runtime' }],
      [
        'style-attribute',
        fixture(framework, 'css(s=>s.width.px(gap))', { style: 'style="color:red"' }),
        {},
      ],
      ['template-context', fixture(framework, 'css(s=>s.width.px(gap))', { tag: 'Other' }), {}],
      [
        'custom-author',
        fixture(framework, 'css(s=>s.width.px(gap))').replace(
          'const styles=createStyles()',
          'const styles=createStyles({cssType:AppCss})',
        ),
        {},
      ],
      [
        'unknown-project-options',
        fixture(framework, 'css(s=>s.width.px(gap))').replace(
          'const styles=createStyles()',
          'const styles=createStyles({...options})',
        ),
        {},
      ],
      [
        'script-snapshot',
        fixture(framework, 'saved', { setup: 'const saved=css(s=>s.width.px(gap));' }),
        {},
      ],
    ];
    for (const [code, source, options] of cases) {
      const result = transform(source, filename, { ...options, debug: true });
      assert(result, code);
      assert.equal(result.diagnostics?.length, 1, code);
      const diagnostic = result.diagnostics[0];
      assert.equal(diagnostic.code, code);
      assert.equal(diagnostic.file, 'Diagnostics.' + framework);
      assert.equal(diagnostic.line, 1);
      assert.equal(diagnostic.column, source.indexOf('css(s=>') + 1);
      assert(!result.code.includes('bindUnit'), code);
      assert(!result.code.includes('prepareStyle'), code);
    }
  });

  test(`${framework}：只有诊断而无改写时返回原源码和identity map`, () => {
    const source = fixture(framework, 'css(unknown)', {
      setup: 'let unknown=(s)=>s.color.red;',
    });
    const result = transform(source, filename, { debug: true });
    assert(result);
    assert.equal(result.code, source);
    assert.equal(result.diagnostics?.[0]?.code, 'dynamic-structure');
    assert.deepEqual(result.map.sourcesContent, [source]);
  });

  test(`${framework}：默认serve只包来源，详细日志需显式debug`, () => {
    const silent = pluginFactory();
    const messages = [];
    silent.configResolved({
      root: process.cwd(),
      command: 'serve',
      isProduction: false,
      logger: { info: (message) => messages.push(message) },
    });
    const result = silent.transform(dynamic, filename);
    assert(result?.code.includes('withStyleSource'));
    assert.equal(result.diagnostics?.length ?? 0, 0);
    assert.deepEqual(messages, []);

    const verbose = pluginFactory({ debug: true });
    verbose.configResolved({
      root: process.cwd(),
      command: 'serve',
      isProduction: false,
      logger: { info: (message) => messages.push(message) },
    });
    assert.equal(verbose.transform(dynamic, filename)?.diagnostics?.[0]?.code, 'dynamic-structure');
    assert.equal(messages.length, 1);
    assert.match(messages[0], /dynamic-structure/);

    const faultyLogger = pluginFactory({ debug: true });
    faultyLogger.configResolved({
      root: process.cwd(),
      command: 'serve',
      isProduction: false,
      logger: {
        info: () => {
          throw new Error('logger failed');
        },
      },
    });
    assert.doesNotThrow(() => faultyLogger.transform(dynamic, filename));
  });

  test(`${framework}：未证明来源的同名 css 函数不记录诊断`, () => {
    const source = fixture(framework, 'css(s=>s.width.px(gap))').replace(
      'const css=styles.useCss()',
      'const css=(callback)=>"foreign"',
    );
    assert.equal(transform(source, filename, { debug: true }), null);
  });
}
