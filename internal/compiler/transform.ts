import type { BindingFormat } from '../../core/src/binding.js';
import type { HelperPlan } from '../../core/src/metadata-types.js';
import type {
  CompilerOptions,
  CompilerPlugin,
  SourceTransform,
  ValueBinding,
  TransformedExpression,
} from './types.js';
type Framework = 'vue' | 'svelte';
type MacroCall = ts.CallExpression & { expression: ts.Identifier };
import ts from 'typescript';
import MagicString from 'magic-string';
import { sourceMapper } from './source-map.js';
import { automaticDeclarations } from './automatic.js';
import { bindingNames as names, unshadowed, capturedInside } from './scope.js';
export { unshadowed } from './scope.js';
import { createHash } from 'node:crypto';
import { relative, resolve, isAbsolute } from 'node:path';
import {
  propertyMetadata,
  helperGroups,
  unitFamilies,
  keywordGroups,
} from '../../core/src/generated/metadata.js';

export { ts, MagicString };
export function walk(node: ts.Node, visit: (node: ts.Node) => void): void {
  visit(node);
  ts.forEachChild(node, (child) => {
    walk(child, visit);
  });
}
export function session(
  source: string,
  filename: string,
  scriptStart: number,
  scriptEnd: number,
  framework: Framework,
  options: CompilerOptions = {},
) {
  const root = resolve(options.root ?? process.cwd());
  const id = relative(root, resolve(filename)).replaceAll('\\', '/');
  const output = new MagicString(source);
  const text = source.slice(scriptStart, scriptEnd);
  const ast = ts.createSourceFile(
    filename + '.ts',
    text,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const imports = new Map<string, { module: string; original: string }>(),
    macros = new Set<string>(),
    css = new Set<string>(),
    runtime = new Set<string>();
  const used = new Set<string>();
  walk(ast, (n) => {
    if (ts.isIdentifier(n)) used.add(n.text);
  });
  for (const n of ast.statements)
    if (ts.isImportDeclaration(n) && ts.isStringLiteral(n.moduleSpecifier)) {
      const module = n.moduleSpecifier.text;
      const bindings = n.importClause?.namedBindings;
      for (const item of bindings && ts.isNamedImports(bindings) ? bindings.elements : []) {
        const original = item.propertyName?.text ?? item.name.text;
        imports.set(item.name.text, { module, original });
        if (
          ['@zerodep-css/core', `@zerodep-css/${framework}`].includes(module) &&
          original === 'bx'
        )
          macros.add(item.name.text);
        if (module === `@zerodep-css/${framework}` && original === 'useStyleRuntime')
          runtime.add(item.name.text);
      }
    }
  // 不使用 bx 的外部组件交回官方插件，不能被本项目的变量 ID 边界误拦截。
  if (macros.size && (id.startsWith('../') || isAbsolute(id)))
    throw new Error('bx compiler filename must be inside root.');
  for (const statement of ast.statements)
    if (ts.isVariableStatement(statement))
      for (const d of statement.declarationList.declarations)
        if (
          ts.isObjectBindingPattern(d.name) &&
          d.initializer &&
          ts.isCallExpression(d.initializer) &&
          runtime.has(d.initializer.expression.getText(ast))
        )
          for (const e of d.name.elements)
            if (
              (e.propertyName?.getText(ast) ?? e.name.getText(ast)) === 'css' &&
              ts.isIdentifier(e.name)
            )
              css.add(e.name.text);
  let counter = 0;
  const fresh = (kind: string): string => {
    let value;
    do value = `__zbx_${kind}_${counter++}`;
    while (used.has(value) || source.includes(value));
    used.add(value);
    return value;
  };
  const valueName = fresh('value');
  const tupleName = fresh('tuple');
  const sourceName = fresh('source');
  const unitsName = fresh('units');
  let hasBindings = false;
  let hasAutomatic = false;
  let hasSources = false;
  const mapper = sourceMapper(source, filename);
  const mapToOriginal = mapper.expression;
  const error: (offset: number, message: string) => never = (offset, message) => {
    const before = source.slice(0, offset),
      line = before.split('\n').length,
      column = offset - before.lastIndexOf('\n');
    throw Object.assign(new Error(`[zerodep bx] ${filename}:${line}:${column}: ${message}`), {
      loc: { file: filename, line, column },
    });
  };
  const macro = (node: ts.Node | undefined, file: ts.SourceFile): node is MacroCall =>
    !!node &&
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    macros.has(node.expression.text) &&
    unshadowed(node, node.expression.text, file);
  function expression(
    text: string,
    offset: number,
    shadowed = new Set<string>(),
    allowAutomatic = false,
  ): TransformedExpression {
    const prefix = 'const __expression = ';
    const file = ts.createSourceFile(
      'expression.ts',
      prefix + text,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS,
    );
    const base = offset - prefix.length;
    const edits = new MagicString(text);
    const bindings: ValueBinding[] = [];
    const consumed = new Set<ts.CallExpression>();
    walk(file, (node) => {
      if (
        !ts.isCallExpression(node) ||
        !ts.isIdentifier(node.expression) ||
        !css.has(node.expression.text) ||
        shadowed.has(node.expression.text) ||
        !unshadowed(node, node.expression.text, file)
      )
        return;
      const callback = node.arguments[0];
      if (callback && options.debug && !id.startsWith('../') && !isAbsolute(id)) {
        const offset = base + node.getStart(file);
        const before = source.slice(0, offset);
        const location = {
          file: id,
          line: before.split('\n').length,
          column: offset - before.lastIndexOf('\n'),
        };
        edits.appendLeft(callback.getStart(file) - prefix.length, `${sourceName}(`);
        edits.appendLeft(callback.end - prefix.length, `, ${JSON.stringify(location)})`);
        hasSources = true;
      }
      if (!callback || (!ts.isArrowFunction(callback) && !ts.isFunctionExpression(callback)))
        return;
      const styleCallback = callback;
      const builder = callback.parameters[0]?.name;
      if (!builder || !ts.isIdentifier(builder)) return;
      // 目前自动提升限定为直接模板使用点；脚本快照和派生类保留运行时合同。
      if (
        allowAutomatic &&
        !macros.size &&
        node.arguments.length === 1 &&
        ts.isVariableDeclaration(node.parent) &&
        node.parent.initializer === node &&
        !id.startsWith('../') &&
        !isAbsolute(id)
      ) {
        for (const declaration of automaticDeclarations(callback)) {
          const offset = base + declaration.call.getStart(file);
          const name =
            '--zbx-' +
            createHash('sha256')
              .update(id + ':' + offset + ':units')
              .digest('hex')
              .slice(0, 16);
          mapper.reference(name, offset);
          const value = `${unitsName}([${declaration.call.arguments.map((arg) => arg.getText(file)).join(',')}], ${JSON.stringify(declaration.alternatives)}, ${JSON.stringify(declaration.unit)}, ${JSON.stringify(declaration.separator)})`;
          bindings.push({ name, expression: mapToOriginal(value, offset), offset });
          edits.overwrite(
            declaration.call.getStart(file) - prefix.length,
            declaration.call.end - prefix.length,
            `${declaration.property.getText(file)}.raw(${JSON.stringify(`var(${name})`)})`,
          );
          hasBindings = hasAutomatic = true;
        }
      }
      function validateRead(arg: ts.Expression): void {
        walk(arg, (n) => {
          if (
            ts.isCallExpression(n) ||
            ts.isNewExpression(n) ||
            ts.isAwaitExpression(n) ||
            ts.isPostfixUnaryExpression(n) ||
            (ts.isPrefixUnaryExpression(n) &&
              [ts.SyntaxKind.PlusPlusToken, ts.SyntaxKind.MinusMinusToken].includes(n.operator)) ||
            (ts.isBinaryExpression(n) &&
              n.operatorToken.kind >= ts.SyntaxKind.FirstAssignment &&
              n.operatorToken.kind <= ts.SyntaxKind.LastAssignment)
          )
            error(
              base + n.getStart(file),
              '绑定源必须是无副作用的值读取；请在组件作用域先派生该值。',
            );
          if (
            ts.isIdentifier(n) &&
            capturedInside(n, styleCallback) &&
            !(ts.isPropertyAccessExpression(n.parent) && n.parent.name === n)
          )
            error(base + n.getStart(file), 'bx 不能捕获样式回调内部变量。');
        });
      }
      function binding(
        call: MacroCall,
        format: BindingFormat = {},
        valueExpression?: string,
      ): string {
        if (call.arguments.length !== 1) error(base + call.getStart(file), 'bx 只接受一个标量值。');
        const arg = call.arguments[0];
        if (!arg) error(base + call.getStart(file), 'bx 缺少值。');
        validateRead(arg);
        const name =
          '--zbx-' +
          createHash('sha256')
            .update(id + ':' + (base + call.getStart(file)) + ':' + JSON.stringify(format))
            .digest('hex')
            .slice(0, 16);
        const offset = base + call.getStart(file);
        mapper.reference(name, offset);
        const expression = mapToOriginal(
          `${valueName}(${valueExpression ?? arg.getText(file)}, ${JSON.stringify(format)})`,
          offset,
        );
        bindings.push({ name, expression, offset });
        consumed.add(call);
        hasBindings = true;
        return `var(${name})`;
      }
      walk(callback.body, (declaration) => {
        if (
          !ts.isCallExpression(declaration) ||
          !ts.isPropertyAccessExpression(declaration.expression) ||
          !ts.isPropertyAccessExpression(declaration.expression.expression)
        )
          return;
        const methodNode = declaration.expression,
          propertyNode = declaration.expression.expression;
        if (propertyNode.expression.getText(file) !== builder.text) return;
        const property = propertyNode.name.text,
          method = methodNode.name.text,
          meta = propertyMetadata[property];
        const hits: MacroCall[] = [];
        for (const arg of declaration.arguments)
          walk(arg, (n) => {
            if (macro(n, file) && !shadowed.has(n.expression.text)) hits.push(n);
          });
        if (!hits.length) return;
        walk(callback.body, (n) => {
          if (
            ts.isIfStatement(n) ||
            ts.isReturnStatement(n) ||
            ts.isSwitchStatement(n) ||
            ts.isTryStatement(n) ||
            ts.isIterationStatement(n, false)
          )
            error(
              base + n.getStart(file),
              '含 bx 的回调暂不支持提前返回或内部控制流；请在宿主元素或派生值中表达条件。',
            );
        });
        for (let p = declaration.parent; p && p !== callback.body; p = p.parent)
          if (
            ts.isIfStatement(p) ||
            ts.isIterationStatement(p, false) ||
            ts.isConditionalExpression(p) ||
            ts.isFunctionLike(p)
          )
            error(
              base + declaration.getStart(file),
              '含 bx 的声明暂不支持回调内部控制流；请把条件放在宿主元素或派生值中。',
            );
        if (!meta || meta.resource)
          error(base + declaration.getStart(file), '该属性或资源尚不支持 bx。');
        let replacement: string;
        if (method === 'raw' || method === 'token') {
          const arg = declaration.arguments[0];
          if (declaration.arguments.length !== 1 || !arg)
            error(base + declaration.getStart(file), 'raw/token 只接受一个参数。');
          if (macro(arg, file)) {
            const numbers = meta.numbers.map((x) => x[0]!);
            if (meta.zero) numbers.push({ min: 0, max: 0 });
            replacement = JSON.stringify(
              binding(
                arg,
                method === 'token'
                  ? { tokens: Object.values(keywordGroups[meta.keywords]!) }
                  : { numbers },
              ),
            );
          } else if (method === 'raw' && ts.isTemplateExpression(arg)) {
            let value = arg.head.text;
            if (/["'\\]/.test(value))
              error(base + arg.getStart(file), 'bx 模板插值不支持引号或转义上下文。');
            for (const span of arg.templateSpans) {
              if (!macro(span.expression, file))
                error(
                  base + span.expression.getStart(file),
                  'bx 模板只支持明确的独立绑定插值；普通动态片段请改为单独声明。',
                );
              if (/[a-zA-Z0-9_%-]$/.test(value))
                error(base + span.expression.getStart(file), 'bx 不能插入 CSS 标识符片段。');
              const suffix = span.literal.text;
              if (/["'\\]/.test(suffix))
                error(base + span.literal.getStart(file), 'bx 模板插值不支持引号或转义上下文。');
              const unit = /^(%|[a-zA-Z]+)/.exec(suffix)?.[0];
              if (unit && !Object.values(unitFamilies).flat().includes(unit))
                error(base + span.literal.getStart(file), '未知的 bx 单位后缀。');
              const rest = unit ? suffix.slice(unit.length) : suffix;
              if (/^[a-zA-Z0-9_-]/.test(rest))
                error(base + span.literal.getStart(file), 'bx 不能与标识符片段拼接。');
              value += binding(span.expression, unit ? { unit } : {}) + rest;
            }
            replacement = JSON.stringify(value);
          } else error(base + arg.getStart(file), 'bx 必须直接作为属性参数或受支持的模板插值。');
        } else {
          let plan: HelperPlan | undefined, unit: string | undefined;
          for (const candidate of helperGroups[meta.helpers]!)
            for (const u of unitFamilies[candidate.family]!)
              if ((u === '%' ? 'pct' : u) + candidate.suffix === method) {
                plan = candidate;
                unit = u;
              }
          if (!plan || unit === undefined || !plan.arities[declaration.arguments.length])
            error(base + declaration.getStart(file), '无效的单位方法或参数数量。');
          const alternatives = plan.arities[declaration.arguments.length]!;
          const unitName = unit;
          let tuple: string | undefined;
          if (alternatives.length > 1 && declaration.arguments.length > 1) {
            const values = declaration.arguments.map((arg) => {
              if (
                !macro(arg, file) &&
                !ts.isNumericLiteral(arg) &&
                !(
                  ts.isPrefixUnaryExpression(arg) &&
                  [ts.SyntaxKind.PlusToken, ts.SyntaxKind.MinusToken].includes(arg.operator) &&
                  ts.isNumericLiteral(arg.operand)
                )
              )
                error(
                  base + arg.getStart(file),
                  '带联合约束的单位参数首版只允许 bx 和数值常量混用，避免改变 const 样式的普通值快照。',
                );
              const value = macro(arg, file) ? arg.arguments[0] : arg;
              if (!value) error(base + arg.getStart(file), 'bx 只接受一个标量值。');
              validateRead(value);
              return value.getText(file);
            });
            tuple = `${tupleName}([${values.join(',')}], ${JSON.stringify(alternatives)})`;
          }
          const parts = declaration.arguments.map((arg, index) => {
            const numbers = alternatives.map((x) => x[index]!);
            if (macro(arg, file))
              return JSON.stringify(
                binding(arg, { unit: unitName, numbers }, tuple ? `${tuple}[${index}]` : undefined),
              );
            if (hits.some((x) => x.pos >= arg.pos && x.end <= arg.end))
              error(base + arg.getStart(file), '单位参数中的 bx 不支持额外运算。');
            return `${valueName}(${arg.getText(file)}, ${JSON.stringify({ unit: unitName, numbers })})`;
          });
          replacement = `[${parts.join(',')}].join(${JSON.stringify(plan.separator === ',' ? ', ' : ' ')})`;
        }
        edits.overwrite(
          declaration.getStart(file) - prefix.length,
          declaration.end - prefix.length,
          `${propertyNode.getText(file)}.raw(${replacement})`,
        );
      });
    });
    walk(file, (n) => {
      if (macro(n, file) && !shadowed.has(n.expression.text) && !consumed.has(n))
        error(base + n.getStart(file), '无法确定 bx 的样式声明或元素所有权。');
    });
    const first = file.statements[0];
    const initializer =
      first && ts.isVariableStatement(first)
        ? first.declarationList.declarations[0]?.initializer
        : undefined;
    const direct =
      !!initializer &&
      ts.isCallExpression(initializer) &&
      css.has(initializer.expression.getText(file));
    return { code: edits.toString(), bindings, direct };
  }
  return {
    source,
    output,
    ast,
    imports,
    css,
    macros,
    fresh,
    error,
    expression,
    scriptStart,
    scriptEnd,
    mapToOriginal,
    finish(extra = '') {
      if (!hasBindings && !hasSources) return null;
      if (hasBindings)
        output.appendLeft(
          scriptStart,
          `\nimport { bxValue as ${valueName}, bxTuple as ${tupleName} } from '@zerodep-css/core/binding';\n`,
        );
      if (hasSources)
        output.appendLeft(
          scriptStart,
          `\nimport { withStyleSource as ${sourceName} } from '@zerodep-css/core/compiler-runtime';\n`,
        );
      if (hasAutomatic)
        output.appendLeft(
          scriptStart,
          `\nimport { formatUnitValues as ${unitsName} } from '@zerodep-css/core/compiler-runtime';\n`,
        );
      output.appendLeft(scriptEnd, '\n' + extra + '\n');
      return mapper.finish(output);
    },
  };
}

export function classInitializer(
  node: ts.Expression,
  ctx: TransformContext,
  framework: Framework,
): boolean {
  if (!ts.isCallExpression(node)) return false;
  const callee = node.expression.getText(ctx.ast);
  if (ctx.css.has(callee)) return true;
  const imported = ctx.imports.get(callee);
  if (framework === 'vue' && imported?.module === 'vue' && imported.original === 'computed') {
    const fn = node.arguments[0];
    return (
      !!fn &&
      ts.isArrowFunction(fn) &&
      ts.isCallExpression(fn.body) &&
      ctx.css.has(fn.body.expression.getText(ctx.ast))
    );
  }
  return (
    framework === 'svelte' &&
    callee === '$derived' &&
    !!node.arguments[0] &&
    ts.isCallExpression(node.arguments[0]) &&
    ctx.css.has(node.arguments[0].expression.getText(ctx.ast))
  );
}

export function assertNoClassReferences(
  ctx: TransformContext,
  text: string,
  offset: number,
  classes: ReadonlyMap<string, unknown>,
  locals = new Set<string>(),
): void {
  const prefix = 'const __expression = ';
  const ast = ts.createSourceFile(
    'use.ts',
    prefix + text,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  walk(ast, (node) => {
    if (
      !ts.isIdentifier(node) ||
      !classes.has(node.text) ||
      locals.has(node.text) ||
      !unshadowed(node, node.text, ast)
    )
      return;
    if (
      (ts.isPropertyAccessExpression(node.parent) && node.parent.name === node) ||
      (ts.isPropertyAssignment(node.parent) && node.parent.name === node)
    )
      return;
    ctx.error(
      offset + node.getStart(ast) - prefix.length,
      '含 bx 的 class 必须直接用于可追踪的原生元素 class；暂不支持拼接、透传或其他用途。',
    );
  });
}

/** Vite 插件只处理完整 SFC，官方插件负责后续编译、SSR 和 HMR。 */
export function vitePlugin(
  framework: Framework,
  transform: SourceTransform,
  options: CompilerOptions = {},
): CompilerPlugin {
  let root = options.root;
  let debug = options.debug;
  return {
    name: `zerodep-${framework}-bx`,
    enforce: 'pre',
    configResolved(config) {
      root ??= config.root;
      debug ??= config.command === 'serve' && !config.isProduction;
    },
    transform(source, id) {
      if (id.includes('?') || !id.endsWith('.' + framework)) return null;
      return transform(source, id, { ...options, root, debug });
    },
  };
}

export type TransformContext = ReturnType<typeof session>;
