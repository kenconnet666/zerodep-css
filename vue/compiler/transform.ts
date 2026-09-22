import type { SFCDescriptor } from 'vue/compiler-sfc';
import type {
  CompilerOptions,
  CompilerPlugin,
  TransformResult,
  ValueBinding,
} from '../../internal/compiler/types.js';
type VueRoot = NonNullable<NonNullable<SFCDescriptor['template']>['ast']>;
type VueNode = VueRoot | VueRoot['children'][number];
type VueElement = Extract<VueNode, { type: 1 }>;
type VueDirective = Extract<VueElement['props'][number], { type: 7 }>;
interface Loop {
  value: string;
  index: string;
  source: string;
  prop: VueDirective;
  needsIndex: boolean;
  patched: boolean;
}
import { parse, compileScript } from 'vue/compiler-sfc';
import {
  session,
  walk,
  ts,
  MagicString,
  unshadowed,
  vitePlugin,
} from '../../internal/compiler/transform.js';

/** Vue script setup 的组件源码转换；输出继续交给官方 Vue 插件。 */
export function transformCss(
  source: string,
  filename: string,
  options: CompilerOptions = {},
): TransformResult | null {
  const { descriptor, errors } = parse(source, { filename });
  if (errors.length) throw errors[0];
  const script = descriptor.scriptSetup;
  if (!script || !descriptor.template) return null;
  const ctx = session(
    source,
    filename,
    script.loc.start.offset,
    script.loc.end.offset,
    'vue',
    options,
  );
  if (!ctx.css.size && !options.debug) return null;
  const metadata = compileScript(descriptor, { id: filename }).bindings ?? {};
  const computed = ctx.fresh('computed'),
    unref = ctx.fresh('unref'),
    instance = ctx.fresh('instance'),
    propsView = ctx.fresh('props'),
    memo = ctx.fresh('memo');
  let needsProps = false;
  let needsMemo = false;
  const extra = [
    `import { computed as ${computed}, unref as ${unref}, getCurrentInstance as ${instance} } from 'vue';`,
  ];
  const attr = (text: string) => text.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
  function scriptExpression(expression: string, locals = new Set<string>()): string {
    const prefix = 'const __expression = ';
    const ast = ts.createSourceFile(
      'template.ts',
      prefix + expression,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS,
    );
    const result = new MagicString(expression);
    walk(ast, (n) => {
      if (!ts.isIdentifier(n) || locals.has(n.text) || !unshadowed(n, n.text, ast)) return;
      if (
        (ts.isPropertyAccessExpression(n.parent) && n.parent.name === n) ||
        (ts.isPropertyAssignment(n.parent) && n.parent.name === n) ||
        ts.isParameter(n.parent)
      )
        return;
      const bindingType = metadata[n.text];
      let replacement: string;
      if (bindingType === 'props' || bindingType === 'props-aliased') {
        needsProps = true;
        replacement = `${propsView}[${JSON.stringify(metadata.__propsAliases?.[n.text] ?? n.text)}]`;
      } else if (['setup-ref', 'setup-maybe-ref', 'setup-let'].includes(bindingType ?? '')) {
        replacement = `${unref}(${n.text})`;
      } else return;
      result.overwrite(
        n.getStart(ast) - prefix.length,
        n.end - prefix.length,
        `${ts.isShorthandPropertyAssignment(n.parent) ? n.text + ': ' : ''}${replacement}`,
      );
    });
    return result.toString();
  }
  function calculation(expression: string, name: string, loop?: Loop): string {
    const locals = loop ? new Set([loop.value, loop.index]) : new Set<string>();
    const code = scriptExpression(expression, locals);
    if (loop) {
      needsMemo = true;
      extra.push(`const ${name} = ${memo}((${loop.value}, ${loop.index}) => (${code}));`);
      return `${name}(${loop.value}, ${loop.index})`;
    }
    extra.push(`const ${name} = ${computed}(() => (${code}));`);
    return name;
  }
  function style(bindings: ValueBinding[], loop?: Loop): string {
    const name = ctx.fresh('style');
    const expression = `({${bindings.map((b) => `${JSON.stringify(b.name)}: ${b.expression}`).join(',')}})`;
    return calculation(expression, name, loop);
  }
  // 可追踪的同组件脚本 class；不改变 const/computed 原本的求值时机。
  // 脚本内的 class 保持定义时机；这里只附加开发诊断。
  for (const statement of ctx.ast.statements)
    if (ts.isVariableStatement(statement))
      for (const d of statement.declarationList.declarations)
        if (d.initializer) {
          const offset = ctx.scriptStart + d.initializer.getStart(ctx.ast);
          const result = ctx.expression(d.initializer.getText(ctx.ast), offset);
          if (result.code !== d.initializer.getText(ctx.ast))
            ctx.output.overwrite(offset, ctx.scriptStart + d.initializer.end, result.code);
        }
  function visit(node: VueNode, restricted = false, inheritedLoop?: Loop): void {
    const element = node.type === 1 ? node : undefined;
    const props = element?.props ?? [];
    const forProp = props.find((p): p is VueDirective => p.type === 7 && p.name === 'for');
    let loop = inheritedLoop;
    let scoped =
      restricted || element?.tagType === 1 || props.some((p) => p.type === 7 && p.name === 'slot');
    if (forProp) {
      const info = forProp.forParseResult;
      const simple = (exp: VueDirective['exp']) => (exp?.type === 4 ? exp : undefined);
      const source = simple(info?.source);
      const value = simple(info?.value)?.content,
        index = simple(info?.key)?.content ?? ctx.fresh('index');
      if (
        inheritedLoop ||
        !value ||
        !source ||
        !/^[A-Za-z_$][\w$]*$/.test(value) ||
        !/^[A-Za-z_$][\w$]*$/.test(index) ||
        info?.index ||
        !props.some(
          (p) => p.type === 7 && p.name === 'bind' && p.arg?.type === 4 && p.arg.content === 'key',
        )
      )
        scoped = true;
      else
        loop = {
          value,
          index,
          source: source.content,
          prop: forProp,
          needsIndex: !info?.key,
          patched: false,
        };
    }
    const classProp = props.find(
      (p): p is VueDirective =>
        p.type === 7 && p.name === 'bind' && p.arg?.type === 4 && p.arg.content === 'class',
    );
    const classExpression = classProp?.exp;
    if (classProp && classExpression?.type === 4) {
      const expression = classExpression.content;
      let styleName;
      const result = ctx.expression(
        expression,
        classExpression.loc.start.offset,
        new Set(loop ? [loop.value, loop.index] : []),
        !!element &&
          element.tagType === 0 &&
          element.tag !== 'svg' &&
          element.ns === 0 &&
          !scoped &&
          !props.some((p) => p.type === 7 && p.name === 'bind' && !p.arg),
      );
      if (result.bindings.length) {
        const name = ctx.fresh('class');
        const className = calculation(result.code, name, loop);
        styleName = style(result.bindings, loop);
        ctx.output.overwrite(
          classProp.loc.start.offset,
          classProp.loc.end.offset,
          `:class="${className}"`,
        );
        if (loop?.needsIndex && !loop.patched) {
          ctx.output.overwrite(
            loop.prop.loc.start.offset,
            loop.prop.loc.end.offset,
            `v-for="${attr(`(${loop.value}, ${loop.index}) in ${loop.source}`)}"`,
          );
          loop.patched = true;
        }
        const existing = props.filter(
          (p) =>
            (p.type === 6 && p.name === 'style') ||
            (p.type === 7 && p.name === 'bind' && p.arg?.type === 4 && p.arg.content === 'style'),
        );
        const styles = existing.map((p) =>
          p.type === 6
            ? JSON.stringify(p.value?.content ?? '')
            : `(${p.exp?.type === 4 ? p.exp.content : '{}'})`,
        );
        for (const p of existing) {
          if (p.loc.source.includes('--zcss-'))
            ctx.error(p.loc.start.offset, '--zcss- 是编译器保留的元素变量前缀。');
          ctx.output.remove(p.loc.start.offset, p.loc.end.offset);
        }
        ctx.output.appendLeft(
          classProp.loc.end.offset,
          ` :style="${attr('[' + [...styles, styleName].join(',') + ']')}"`,
        );
      } else if (result.code !== expression) {
        ctx.output.overwrite(
          classProp.loc.start.offset,
          classProp.loc.end.offset,
          `:class="${attr(result.code)}"`,
        );
      }
    }
    if (node.type === 0 || node.type === 1)
      for (const child of node.children) visit(child, scoped, loop);
  }
  if (descriptor.template.ast) visit(descriptor.template.ast);
  // 提升后的模板表达式通过当前组件的 props 视图读取，不能遗留自由变量。
  // 不改写 defineProps/解构语法，让官方编译器继续处理其原生响应式转换。
  if (needsProps) extra.splice(1, 0, `const ${propsView} = ${instance}().props;`);
  if (needsMemo)
    extra.unshift(`import { useStyleMemo as ${memo} } from '@zerodep-css/vue/compiler-runtime';`);
  return ctx.finish(extra.join('\n'));
}
export function cssPlugin(options: CompilerOptions = {}): CompilerPlugin {
  return vitePlugin('vue', transformCss, options);
}
