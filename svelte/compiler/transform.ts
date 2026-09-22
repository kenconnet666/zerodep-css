import type {
  CompilerOptions,
  CompilerPlugin,
  TransformResult,
  TransformedExpression,
} from '../../internal/compiler/types.js';
import { bindingNames } from '../../internal/compiler/scope.js';
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
function hasRange(
  value: unknown,
): value is Record<string, unknown> & { start: number; end: number } {
  return isRecord(value) && typeof value.start === 'number' && typeof value.end === 'number';
}
import { parse } from 'svelte/compiler';
import {
  session,
  ts,
  walk,
  vitePlugin,
  classInitializer,
  assertNoClassReferences,
  unshadowed,
} from '../../internal/compiler/transform.js';

/** 保留 rune 与模板局部读取，由官方编译器生成依赖和 style 更新。 */
export function transformBx(
  source: string,
  filename: string,
  options: CompilerOptions = {},
): TransformResult | null {
  const ast = parse(source, { modern: true, filename });
  if (!ast.instance) return null;
  const script = ast.instance.content;
  if (!hasRange(script)) throw new Error('Missing Svelte script source range: ' + filename);
  const ctx = session(source, filename, script.start, script.end, 'svelte', options);
  if (!ctx.macros.size) return null;
  const classes = new Map<
    string,
    TransformedExpression & { uses: number; declaration: ts.VariableDeclaration }
  >();
  const extra: string[] = [];
  const addPattern = (pattern: unknown, names: Set<string>): void => {
    if (!hasRange(pattern)) return;
    const file = ts.createSourceFile(
      'template-scope.ts',
      `function scope(${source.slice(pattern.start, pattern.end)}) {}`,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS,
    );
    const declaration = file.statements[0];
    if (declaration && ts.isFunctionDeclaration(declaration))
      for (const parameter of declaration.parameters) bindingNames(parameter.name, names);
  };
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
            !classInitializer(d.initializer, ctx, 'svelte')
          )
            ctx.error(
              offset,
              '含 bx 的脚本 class 必须为同组件内未导出的 const/$derived 直接 css 调用。',
            );
          ctx.output.overwrite(offset, ctx.scriptStart + d.initializer.end, result.code);
          // 脚本 class 的绑定源留在定义作用域，避免 each/snippet 局部同名变量劫持读取。
          result.bindings = result.bindings.map((binding) => {
            const getter = ctx.fresh('get');
            extra.push(`const ${getter} = () => (${binding.expression});`);
            return { ...binding, expression: `${getter}()` };
          });
          classes.set(d.name.text, { ...result, uses: 0, declaration: d });
        }
  function visit(node: unknown, restricted = false, locals = new Set<string>()): void {
    if (!node || typeof node !== 'object') return;
    if (Array.isArray(node)) {
      const blockLocals = new Set(locals);
      // {@const} 的名字属于整个模板块；与脚本导入同名时仍须保留原生词法身份。
      for (const child of node)
        if (
          isRecord(child) &&
          child.type === 'ConstTag' &&
          isRecord(child.declaration) &&
          Array.isArray(child.declaration.declarations)
        )
          for (const declaration of child.declaration.declarations)
            if (isRecord(declaration)) addPattern(declaration.id, blockLocals);
      for (const child of node) visit(child, restricted, blockLocals);
      return;
    }
    if (!isRecord(node)) return;
    const outerLocals = locals;
    const templateNode = node;
    let blocked =
      restricted ||
      ['SnippetBlock', 'AwaitBlock', 'SvelteBoundary', 'Component', 'SvelteComponent'].includes(
        typeof node.type === 'string' ? node.type : '',
      ) ||
      node.name === 'svg' ||
      node.name === 'math';
    if (node.type === 'EachBlock') {
      const context = node.context;
      if (
        locals.size ||
        !node.key ||
        !isRecord(context) ||
        context.type !== 'Identifier' ||
        typeof context.name !== 'string'
      )
        blocked = true;
      else
        locals = new Set([
          ...locals,
          context.name,
          ...(typeof node.index === 'string' ? [node.index] : []),
        ]);
    }
    if (node.type === 'SnippetBlock' && Array.isArray(node.parameters)) {
      locals = new Set(locals);
      for (const parameter of node.parameters) addPattern(parameter, locals);
    }
    const attributes = Array.isArray(node.attributes) ? node.attributes.filter(isRecord) : [];
    const attr = attributes.find((a) => a.type === 'Attribute' && a.name === 'class');
    const value: unknown =
      Array.isArray(attr?.value) && attr.value.length === 1 ? attr.value[0] : attr?.value;
    const expression =
      isRecord(value) && value.type === 'ExpressionTag' && hasRange(value.expression)
        ? value.expression
        : undefined;
    if (expression) {
      const text = source.slice(expression.start, expression.end);
      const shared = !locals.has(text.trim()) && classes.get(text.trim());
      if (!shared) assertNoClassReferences(ctx, text, expression.start, classes, locals);
      const result = shared || ctx.expression(text, expression.start, locals);
      if (result.bindings.length) {
        if (!hasRange(attr)) return ctx.error(expression.start, 'Missing Svelte attribute range.');
        if (!shared && !result.direct)
          ctx.error(
            expression.start,
            '内联 bx 样式必须是直接 css 调用；请将条件移到元素或脚本派生值。',
          );
        if (node.type !== 'RegularElement' || blocked)
          ctx.error(
            expression.start,
            'bx 需要可静态定位的原生 HTML 元素，不支持组件透传或异步边界。',
          );
        if (attributes.some((a) => a.type === 'SpreadAttribute'))
          ctx.error(expression.start, '含 bx 的元素暂不支持属性 spread；请显式绑定 class/style。');
        if (attributes.some((a) => hasRange(a) && source.slice(a.start, a.end).includes('--zbx-')))
          ctx.error(expression.start, '--zbx- 是编译器保留的元素变量前缀。');
        if (shared) shared.uses++;
        else ctx.output.overwrite(expression.start, expression.end, result.code);
        ctx.output.appendLeft(
          attr.end,
          result.bindings.map((b) => ` style:${b.name}={${b.expression}}`).join(''),
        );
      }
    }
    function inspectExpressions(value: unknown): void {
      if (!value || typeof value !== 'object') return;
      if (Array.isArray(value)) {
        for (const child of value) inspectExpressions(child);
        return;
      }
      if (!isRecord(value)) return;
      if (hasRange(value.expression) && value.expression !== expression) {
        const e = value.expression;
        assertNoClassReferences(
          ctx,
          source.slice(e.start, e.end),
          e.start,
          classes,
          templateNode.type === 'EachBlock' && value === templateNode ? outerLocals : locals,
        );
        return;
      }
      for (const key of ['value', 'attributes']) if (value[key]) inspectExpressions(value[key]);
    }
    inspectExpressions(node);
    // 只遍历模板结构，避免把 JS ESTree 节点误当元素。
    for (const key of [
      'nodes',
      'fragment',
      'body',
      'fallback',
      'consequent',
      'alternate',
      'pending',
      'then',
      'catch',
    ])
      if (node[key])
        visit(
          node[key],
          node.type === 'EachBlock' && key === 'fallback' ? restricted : blocked,
          node.type === 'EachBlock' && key === 'fallback' ? outerLocals : locals,
        );
  }
  visit(ast.fragment);
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
        ctx.error(ctx.scriptStart + n.getStart(ctx.ast), '含 bx 的 class 暂不支持脚本转发或别名。');
    });
  }
  return ctx.finish(extra.join('\n'));
}
export function bxPlugin(options: CompilerOptions = {}): CompilerPlugin {
  return vitePlugin('svelte', transformBx, options);
}
