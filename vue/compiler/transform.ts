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
  classInitializer,
  assertNoClassReferences,
} from '../../internal/compiler/transform.js';

/** Vue script setup 的组件源码转换；输出继续交给官方 Vue 插件。 */
export function transformBx(
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
  if (!ctx.macros.size) return null;
  const metadata = compileScript(descriptor, { id: filename }).bindings ?? {};
  const computed = ctx.fresh('computed'),
    unref = ctx.fresh('unref');
  const extra = [`import { computed as ${computed}, unref as ${unref} } from 'vue';`];
  const classes = new Map<
    string,
    { style: string; uses: number; declaration: ts.VariableDeclaration }
  >();
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
      if (
        !ts.isIdentifier(n) ||
        locals.has(n.text) ||
        !['setup-ref', 'setup-maybe-ref', 'setup-let'].includes(metadata[n.text] ?? '') ||
        !unshadowed(n, n.text, ast)
      )
        return;
      if (
        (ts.isPropertyAccessExpression(n.parent) && n.parent.name === n) ||
        (ts.isPropertyAssignment(n.parent) && n.parent.name === n) ||
        ts.isParameter(n.parent)
      )
        return;
      result.overwrite(
        n.getStart(ast) - prefix.length,
        n.end - prefix.length,
        `${ts.isShorthandPropertyAssignment(n.parent) ? n.text + ': ' : ''}${unref}(${n.text})`,
      );
    });
    return result.toString();
  }
  function calculation(expression: string, name: string, loop?: Loop): string {
    const locals = loop ? new Set([loop.value, loop.index]) : new Set<string>();
    const code = scriptExpression(expression, locals);
    extra.push(
      `const ${name} = ${computed}(() => (${loop ? `(${scriptExpression(loop.source)}).map((${loop.value},${loop.index}) => (${code}))` : code}));`,
    );
    return loop ? `${name}[${loop.index}]` : name;
  }
  function style(bindings: ValueBinding[], fromTemplate: boolean, loop?: Loop): string {
    const name = ctx.fresh('style');
    if (fromTemplate)
      for (const b of bindings)
        ctx.mapToOriginal(
          scriptExpression(b.expression, new Set(loop ? [loop.value, loop.index] : [])),
          b.offset,
        );
    const expression = `({${bindings.map((b) => `${JSON.stringify(b.name)}: ${b.expression}`).join(',')}})`;
    if (fromTemplate) return calculation(expression, name, loop);
    extra.push(`const ${name} = ${computed}(() => (${expression}));`);
    return name;
  }
  // 可追踪的同组件脚本 class；不改变 const/computed 原本的求值时机。
  for (const statement of ctx.ast.statements)
    if (ts.isVariableStatement(statement))
      for (const d of statement.declarationList.declarations)
        if (ts.isIdentifier(d.name) && d.initializer) {
          const offset = ctx.scriptStart + d.initializer.getStart(ctx.ast);
          const result = ctx.expression(d.initializer.getText(ctx.ast), offset);
          if (!result.bindings.length) continue;
          if (
            !(statement.declarationList.flags & ts.NodeFlags.Const) ||
            statement.modifiers?.length ||
            !classInitializer(d.initializer, ctx, 'vue')
          )
            ctx.error(
              offset,
              '含 bx 的脚本 class 必须为同组件内未导出的 const/computed 直接 css 调用。',
            );
          ctx.output.overwrite(offset, ctx.scriptStart + d.initializer.end, result.code);
          classes.set(d.name.text, {
            style: style(result.bindings, false),
            uses: 0,
            declaration: d,
          });
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
      const locals = new Set(loop ? [loop.value, loop.index] : []);
      const shared = !locals.has(expression.trim()) && classes.get(expression.trim());
      if (!shared)
        assertNoClassReferences(ctx, expression, classExpression.loc.start.offset, classes, locals);
      const result = shared
        ? { code: '', bindings: [], direct: true }
        : ctx.expression(
            expression,
            classExpression.loc.start.offset,
            new Set(loop ? [loop.value, loop.index] : []),
          );
      if (shared || result?.bindings.length) {
        if (!shared && !result.direct)
          ctx.error(
            classExpression.loc.start.offset,
            '内联 bx 样式必须是直接 css 调用；请将条件移到元素或脚本派生值。',
          );
        if (
          !element ||
          element.tagType !== 0 ||
          element.tag === 'svg' ||
          element.ns !== 0 ||
          scoped
        )
          ctx.error(
            classProp.loc.start.offset,
            'bx 支持静态原生 HTML 元素及单层 keyed 数组循环；暂不支持嵌套循环、解构或 slot 作用域。',
          );
        if (props.some((p) => p.type === 7 && p.name === 'bind' && !p.arg))
          ctx.error(
            node.loc.start.offset,
            '含 bx 的元素暂不支持无参数 v-bind；请显式绑定 class/style。',
          );
        if (shared) {
          shared.uses++;
          styleName = shared.style;
        } else {
          const name = ctx.fresh('class');
          const className = calculation(result.code, name, loop);
          styleName = style(result.bindings, true, loop);
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
          if (p.loc.source.includes('--zbx-'))
            ctx.error(p.loc.start.offset, '--zbx- 是编译器保留的元素变量前缀。');
          ctx.output.remove(p.loc.start.offset, p.loc.end.offset);
        }
        ctx.output.appendLeft(
          classProp.loc.end.offset,
          ` :style="${attr('[' + [...styles, styleName].join(',') + ']')}"`,
        );
      }
    }
    for (const prop of props)
      if (prop !== classProp && prop.type === 7 && prop.exp?.type === 4)
        assertNoClassReferences(ctx, prop.exp.content, prop.exp.loc.start.offset, classes);
    if (node.type === 5 && node.content.type === 4)
      assertNoClassReferences(ctx, node.content.content, node.content.loc.start.offset, classes);
    if (node.type === 0 || node.type === 1)
      for (const child of node.children) visit(child, scoped, loop);
  }
  if (descriptor.template.ast) visit(descriptor.template.ast);
  for (const [name, definition] of classes) {
    if (!definition.uses)
      ctx.error(
        ctx.scriptStart + definition.declaration.getStart(ctx.ast),
        '含 bx 的 class 没有可追踪的原生元素使用点。',
      );
    walk(ctx.ast, (n) => {
      if (
        ts.isIdentifier(n) &&
        n.text === name &&
        n !== definition.declaration.name &&
        unshadowed(n, name, ctx.ast) &&
        !(ts.isPropertyAccessExpression(n.parent) && n.parent.name === n) &&
        !(ts.isPropertyAssignment(n.parent) && n.parent.name === n)
      )
        ctx.error(
          ctx.scriptStart + n.getStart(ctx.ast),
          '含 bx 的 class 暂不支持在脚本中继续转发或别名。',
        );
    });
  }
  return ctx.finish(extra.join('\n'));
}
export function bxPlugin(options: CompilerOptions = {}): CompilerPlugin {
  return vitePlugin('vue', transformBx, options);
}
