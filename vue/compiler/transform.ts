import type { SFCDescriptor } from 'vue/compiler-sfc';
import type {
  CompilerOptions,
  CompilerPlugin,
  TransformResult,
} from '../../internal/compiler/types.js';
type VueRoot = NonNullable<NonNullable<SFCDescriptor['template']>['ast']>;
type VueNode = VueRoot | VueRoot['children'][number];
type VueElement = Extract<VueNode, { type: 1 }>;
type VueDirective = Extract<VueElement['props'][number], { type: 7 }>;
import { parse } from 'vue/compiler-sfc';
import { patternNames } from '../../internal/compiler/scope.js';
import { session, ts, vitePlugin } from '../../internal/compiler/transform.js';

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
    descriptor.template.ast,
  );
  if (!ctx.css.size && !options.debug) return null;
  const attr = (text: string) =>
    text.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
  // 可追踪的同组件脚本 class；不改变 const/computed 原本的求值时机。
  // 脚本内的 class 保持定义时机；这里只附加开发诊断。
  for (const statement of ctx.ast.statements)
    if (ts.isVariableStatement(statement))
      for (const d of statement.declarationList.declarations)
        if (d.initializer) {
          const offset = ctx.scriptStart + d.initializer.getStart(ctx.ast);
          const result = ctx.expression(
            d.initializer.getText(ctx.ast),
            offset,
            new Set(),
            false,
            'script-snapshot',
          );
          if (result.code !== d.initializer.getText(ctx.ast))
            ctx.output.overwrite(offset, ctx.scriptStart + d.initializer.end, result.code);
        }
  function visit(
    node: VueNode,
    restricted = false,
    inheritedLoop = false,
    inheritedLocals = new Set<string>(),
  ): void {
    const element = node.type === 1 ? node : undefined;
    const props = element?.props ?? [];
    const forProp = props.find((p): p is VueDirective => p.type === 7 && p.name === 'for');
    const locals = new Set(inheritedLocals);
    const add = (pattern: VueDirective['exp']) => {
      if (pattern?.type === 4) for (const name of patternNames(pattern.content)) locals.add(name);
    };
    let loop = inheritedLoop;
    let scoped =
      restricted || element?.tagType === 1 || props.some((p) => p.type === 7 && p.name === 'slot');
    if (forProp) {
      const info = forProp.forParseResult;
      // 即使不能优化循环，也必须保留词法身份，开发诊断不能误包局部同名函数。
      add(info?.value);
      add(info?.key);
      add(info?.index);
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
      else loop = true;
    }
    const classProp = props.find(
      (p): p is VueDirective =>
        p.type === 7 && p.name === 'bind' && p.arg?.type === 4 && p.arg.content === 'class',
    );
    const classExpression = classProp?.exp;
    if (classProp && classExpression?.type === 4) {
      const expression = classExpression.content;
      const existing = props.filter(
        (p) =>
          (p.type === 6 && p.name === 'style') ||
          (p.type === 7 && p.name === 'bind' && p.arg?.type === 4 && p.arg.content === 'style'),
      );
      const eligible =
        !!element &&
        element.tagType === 0 &&
        element.tag !== 'svg' &&
        element.ns === 0 &&
        !scoped &&
        existing.length === 0 &&
        !props.some((p) => p.type === 7 && p.name === 'bind' && !p.arg);
      const result = ctx.expression(
        expression,
        classExpression.loc.start.offset,
        locals,
        eligible,
        eligible ? undefined : existing.length ? 'style-attribute' : 'template-context',
      );
      if (result.bindingsLocal) {
        const local = result.bindingsLocal!;
        const className = ctx.fresh('class');
        const hasStyle = ctx.fresh('has_style');
        const keyName = ctx.fresh('key');
        const body = `let ${hasStyle}=false;for(const ${keyName} in ${local}){${hasStyle}=true;break;}return {class:${className},...(${hasStyle}?{style:${local}}:{})};`;
        const code = `(()=>{const ${local}={__proto__:null};const ${className}=${result.code};${body}})()`;
        // 仅替换原 class 属性；模板守卫和其余动态属性继续按原顺序求值。
        ctx.output.overwrite(
          classProp.loc.start.offset,
          classProp.loc.end.offset,
          `v-bind="${attr(code)}"`,
        );
      } else if (result.code !== expression) {
        ctx.output.overwrite(
          classProp.loc.start.offset,
          classProp.loc.end.offset,
          `:class="${attr(result.code)}"`,
        );
      }
    }
    const childLocals = new Set(locals);
    const slot = props.find((p): p is VueDirective => p.type === 7 && p.name === 'slot');
    if (slot?.exp?.type === 4)
      for (const name of patternNames(slot.exp.content)) childLocals.add(name);
    if (node.type === 0 || node.type === 1)
      for (const child of node.children) visit(child, scoped, loop, childLocals);
  }
  if (descriptor.template.ast) visit(descriptor.template.ast);
  return ctx.finish();
}
export function cssPlugin(options: CompilerOptions = {}): CompilerPlugin {
  return vitePlugin('vue', transformCss, options);
}
