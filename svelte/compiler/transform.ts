import type {
  CompilerOptions,
  CompilerPlugin,
  TransformResult,
} from '../../internal/compiler/types.js';
import { patternNames } from '../../internal/compiler/scope.js';
function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
function hasRange(
  value: unknown,
): value is Record<string, unknown> & { start: number; end: number } {
  return isRecord(value) && typeof value.start === 'number' && typeof value.end === 'number';
}
import { parse } from 'svelte/compiler';
import { session, ts, vitePlugin } from '../../internal/compiler/transform.js';

/** 保留 rune 与模板局部读取，由官方编译器生成依赖和 style 更新。 */
export function transformCss(
  source: string,
  filename: string,
  options: CompilerOptions = {},
): TransformResult | null {
  const ast = parse(source, { modern: true, filename });
  if (!ast.instance) return null;
  const script = ast.instance.content;
  if (!hasRange(script)) throw new Error('Missing Svelte script source range: ' + filename);
  const ctx = session(source, filename, script.start, script.end, 'svelte', options, ast.fragment);
  if (!ctx.css.size && !options.debug) return null;
  const addPattern = (pattern: unknown, names: Set<string>): void => {
    if (!hasRange(pattern)) return;
    for (const name of patternNames(source.slice(pattern.start, pattern.end))) names.add(name);
  };
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
    node: unknown,
    restricted = false,
    locals = new Set<string>(),
    directEach = false,
  ): void {
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
      for (const child of node) visit(child, restricted, blockLocals, directEach);
      return;
    }
    if (!isRecord(node)) return;
    const outerLocals = locals;
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
      locals = new Set(locals);
      addPattern(context, locals);
      if (typeof node.index === 'string') locals.add(node.index);
    }
    if (node.type === 'SnippetBlock' && Array.isArray(node.parameters)) {
      locals = new Set(locals);
      for (const parameter of node.parameters) addPattern(parameter, locals);
    }
    const attributes = Array.isArray(node.attributes) ? node.attributes.filter(isRecord) : [];
    const letLocals = new Set(locals);
    for (const attribute of attributes)
      if (attribute.type === 'LetDirective') {
        if (attribute.expression) addPattern(attribute.expression, letLocals);
        else if (typeof attribute.name === 'string') letLocals.add(attribute.name);
      }
    if (!['Component', 'SvelteComponent', 'SvelteSelf'].includes(String(node.type)))
      locals = letLocals;
    const attr = attributes.find((a) => a.type === 'Attribute' && a.name === 'class');
    const value: unknown =
      Array.isArray(attr?.value) && attr.value.length === 1 ? attr.value[0] : attr?.value;
    const expression =
      isRecord(value) && value.type === 'ExpressionTag' && hasRange(value.expression)
        ? value.expression
        : undefined;
    if (expression) {
      const text = source.slice(expression.start, expression.end);
      const ownStyle = attributes.some((a) => a.type === 'Attribute' && a.name === 'style');
      const eligible =
        node.type === 'RegularElement' &&
        !blocked &&
        !ownStyle &&
        !attributes.some((a) => a.type === 'SpreadAttribute');
      const result = ctx.expression(
        text,
        expression.start,
        locals,
        eligible,
        eligible ? undefined : ownStyle ? 'style-attribute' : 'template-context',
      );
      if (result.bindingsLocal) {
        if (!hasRange(attr)) return ctx.error(expression.start, 'Missing Svelte attribute range.');
        if (attributes.some((a) => hasRange(a) && source.slice(a.start, a.end).includes('--zcss-')))
          ctx.error(expression.start, '--zcss- 是编译器保留的元素变量前缀。');
        const local = result.bindingsLocal!;
        const className = ctx.fresh('class');
        const styleName = ctx.fresh('style');
        const hasStyle = ctx.fresh('has_style');
        const keyName = ctx.fresh('key');
        const code = `(()=>{const ${local}={__proto__:null};const ${className}=${result.code};let ${styleName}='';let ${hasStyle}=false;for(const ${keyName} in ${local}){${styleName}+=${keyName}+':'+${local}[${keyName}]+';';${hasStyle}=true;}return {class:${className},...(${hasStyle}?{style:${styleName}}:{})}})()`;
        // spread 留在原 class 使用点；有原 style 属性时完整回退，指令仍由 Svelte 管理。
        ctx.output.overwrite(attr.start, attr.end, `{...${code}}`);
      } else if (result.compiledBinding) {
        if (!hasRange(attr)) return ctx.error(expression.start, 'Missing Svelte attribute range.');
        const binding =
          result.compiledBinding.root || !directEach ? result.code : ctx.fresh('row_binding');
        if (binding !== result.code) {
          if (!hasRange(node)) return ctx.error(expression.start, 'Missing Svelte element range.');
          // {@const} 属于 each 行作用域；Svelte 会为该行建立惰性派生值。
          ctx.output.appendLeft(node.start, `{@const ${binding} = ${result.code}}`);
        }
        const name = result.compiledBinding.name;
        ctx.output.overwrite(
          attr.start,
          attr.end,
          result.compiledBinding.root || directEach
            ? `class={${binding}.class} style:${name}={${binding}.style?.[${JSON.stringify(name)}]}`
            : `{...${binding}}`,
        );
      } else if (result.code !== text) {
        ctx.output.overwrite(expression.start, expression.end, result.code);
      }
    }
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
      if (node[key]) {
        let childLocals = node.type === 'EachBlock' && key === 'fallback' ? outerLocals : letLocals;
        if (node.type === 'AwaitBlock' && (key === 'then' || key === 'catch')) {
          childLocals = new Set(childLocals);
          addPattern(key === 'then' ? node.value : node.error, childLocals);
        }
        visit(
          node[key],
          node.type === 'EachBlock' && key === 'fallback' ? restricted : blocked,
          childLocals,
          (node.type === 'EachBlock' && key === 'body') ||
            (node.type === 'Fragment' && directEach && key === 'nodes'),
        );
      }
  }
  visit(ast.fragment);
  return ctx.finish();
}
export function cssPlugin(options: CompilerOptions = {}): CompilerPlugin {
  return vitePlugin('svelte', transformCss, options);
}
