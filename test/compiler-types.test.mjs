import test from 'node:test';
import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import ts from 'typescript';
import { createBindingTransform } from '../core/dist/compiler.js';

for (const framework of ['vue', 'svelte']) {
  test(`${framework} 转换后的 TS 保留片段参数和框架回调的上下文类型`, () => {
    const source = `import {Css,css,bx,globalCss,keyframes} from '@zerodep-css/${framework}';
const s=new Css(), size=12;
const frames=keyframes([false,s._selector('to',s.width.raw(bx(size+'px')))]);
css([false,s.width.raw(bx(size+'px'))],s.animationName.raw(frames));
globalCss('theme',[false,s._selector('body',s.width.raw(bx(size+'px')))]);
${
  framework === 'vue'
    ? `import {ref,computed,watch,watchEffect} from 'vue';const width=ref(12);
const box=computed(()=>css(s.width.raw(bx(width.value+'px'))));
const writable=computed({get:()=>css(s.width.raw(bx(width.value+'px'))),set(value){const text:string=value;width.value=text.length}});
const method=computed({get(){return css(s.width.raw(bx(width.value+'px')))},set(value){const text:string=value;width.value=text.length}});
const getter={get:()=>css(s.width.raw(bx(width.value+'px')))};const spread=computed({...getter,set(value){const text:string=value;width.value=text.length}});
watch(width,(next,previous,onCleanup)=>{const numeric:number=next;onCleanup(()=>{});css(s.width.raw(bx(numeric+'px')))});
watchEffect(onCleanup=>{onCleanup(()=>{});css(s.width.raw(bx(width.value+'px')))});`
    : ''
}`;
    const model = createBindingTransform(source, 'typed.' + framework, framework);
    const file = resolve(framework, 'compiled-types-probe.ts');
    const code =
      `import {useBindings} from '@zerodep-css/${framework}/bindings';
const ${model.scope}=useBindings(${framework === 'vue' ? "'probe'" : "'probe','id',run=>{run();return()=>{}}"});\n` +
      model.script;
    const options = {
      module: ts.ModuleKind.ESNext,
      moduleResolution: ts.ModuleResolutionKind.Bundler,
      target: ts.ScriptTarget.ES2023,
      strict: true,
      skipLibCheck: true,
      noEmit: true,
    };
    const host = ts.createCompilerHost(options),
      read = host.getSourceFile;
    // 虚拟输入文件，不写临时源码或改消费端配置；其余依赖按真实包导出解析。
    host.getSourceFile = (name, ...args) =>
      resolve(name) === file
        ? ts.createSourceFile(file, code, ts.ScriptTarget.Latest, true)
        : read(name, ...args);
    const program = ts.createProgram([file], options, host),
      errors = ts.getPreEmitDiagnostics(program);
    assert.equal(
      errors.length,
      0,
      ts.formatDiagnostics(errors, {
        getCurrentDirectory: () => process.cwd(),
        getNewLine: () => '\n',
        getCanonicalFileName: (x) => x,
      }),
    );
    if (framework === 'vue') {
      const checker = program.getTypeChecker();
      let found = false;
      function visit(node) {
        if (ts.isParameter(node) && node.name.getText() === 'next') {
          found = true;
          assert.equal(checker.typeToString(checker.getTypeAtLocation(node)), 'number');
        }
        ts.forEachChild(node, visit);
      }
      visit(program.getSourceFile(file));
      assert.equal(found, true);
    }
  });
}
