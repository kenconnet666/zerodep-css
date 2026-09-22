import ts from 'typescript';
import MagicString from 'magic-string';
import { encode } from '@jridgewell/sourcemap-codec';
import { createHash } from 'node:crypto';
import { relative, resolve, isAbsolute } from 'node:path';
import {
  propertyMetadata,
  helperGroups,
  unitFamilies,
  keywordGroups,
} from '../../core/src/generated/metadata.ts';

export { ts, MagicString };
export function walk(node, visit) {
  visit(node);
  ts.forEachChild(node, (child) => {
    walk(child, visit);
  });
}
function names(node, target = new Set()) {
  if (ts.isIdentifier(node)) target.add(node.text);
  else if (ts.isObjectBindingPattern(node) || ts.isArrayBindingPattern(node))
    for (const item of node.elements) if (ts.isBindingElement(item)) names(item.name, target);
  return target;
}
function declarations(node) {
  const result = new Set();
  for (const statement of node.statements ?? []) {
    if (ts.isVariableStatement(statement))
      for (const d of statement.declarationList.declarations) names(d.name, result);
    if ((ts.isFunctionDeclaration(statement) || ts.isClassDeclaration(statement)) && statement.name)
      result.add(statement.name.text);
  }
  return result;
}
// 以词法声明辨认宏；同名参数/局部变量不会误当导入宏。
export function unshadowed(node, name, boundary) {
  for (let p = node.parent; p && p !== boundary; p = p.parent) {
    if (ts.isFunctionLike(p) && p.parameters.some((x) => names(x.name).has(name))) return false;
    if (ts.isBlock(p) && declarations(p).has(name)) return false;
  }
  return true;
}
export function session(source, filename, scriptStart, scriptEnd, framework, options = {}) {
  const root = resolve(options.root ?? process.cwd());
  const id = relative(root, resolve(filename)).replaceAll('\\', '/');
  if (id.startsWith('../') || isAbsolute(id))
    throw new Error('bx compiler filename must be inside root.');
  const output = new MagicString(source);
  const text = source.slice(scriptStart, scriptEnd);
  const ast = ts.createSourceFile(
    filename + '.ts',
    text,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const imports = new Map(),
    macros = new Set(),
    css = new Set(),
    runtime = new Set();
  const used = new Set();
  walk(ast, (n) => {
    if (ts.isIdentifier(n)) used.add(n.text);
  });
  for (const n of ast.statements)
    if (ts.isImportDeclaration(n) && ts.isStringLiteral(n.moduleSpecifier)) {
      const module = n.moduleSpecifier.text;
      for (const item of n.importClause?.namedBindings?.elements ?? []) {
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
  const fresh = (kind) => {
    let value;
    do value = `__zbx_${kind}_${counter++}`;
    while (used.has(value) || source.includes(value));
    used.add(value);
    return value;
  };
  const valueName = fresh('value');
  const tupleName = fresh('tuple');
  let hasBindings = false;
  const anchors = [];
  const mapToOriginal = (text, offset) => {
    anchors.push({ text, offset });
    return text;
  };
  const error = (offset, message) => {
    const before = source.slice(0, offset),
      line = before.split('\n').length,
      column = offset - before.lastIndexOf('\n');
    const e = new Error(`[zerodep bx] ${filename}:${line}:${column}: ${message}`);
    e.loc = { file: filename, line, column };
    throw e;
  };
  const macro = (node, file) =>
    ts.isCallExpression(node) &&
    ts.isIdentifier(node.expression) &&
    macros.has(node.expression.text) &&
    unshadowed(node, node.expression.text, file);
  function expression(text, offset, shadowed = new Set()) {
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
    const bindings = [];
    const consumed = new Set();
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
      if (!callback || (!ts.isArrowFunction(callback) && !ts.isFunctionExpression(callback)))
        return;
      const builder = callback.parameters[0]?.name;
      if (!builder || !ts.isIdentifier(builder)) return;
      const local = new Set();
      walk(callback, (n) => {
        if (ts.isVariableDeclaration(n) || ts.isParameter(n)) names(n.name, local);
      });
      function validateRead(arg) {
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
            local.has(n.text) &&
            !(ts.isPropertyAccessExpression(n.parent) && n.parent.name === n)
          )
            error(base + n.getStart(file), 'bx 不能捕获样式回调内部变量。');
        });
      }
      function binding(call, format = {}, valueExpression) {
        if (call.arguments.length !== 1) error(base + call.getStart(file), 'bx 只接受一个标量值。');
        const arg = call.arguments[0];
        validateRead(arg);
        const name =
          '--zbx-' +
          createHash('sha256')
            .update(id + ':' + (base + call.getStart(file)) + ':' + JSON.stringify(format))
            .digest('hex')
            .slice(0, 16);
        const offset = base + call.getStart(file);
        mapToOriginal(name, offset);
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
          propertyNode = methodNode.expression;
        if (propertyNode.expression.getText(file) !== builder.text) return;
        const property = propertyNode.name.text,
          method = methodNode.name.text,
          meta = propertyMetadata[property];
        const hits = [];
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
        let replacement;
        if (method === 'raw' || method === 'token') {
          const arg = declaration.arguments[0];
          if (declaration.arguments.length !== 1)
            error(base + declaration.getStart(file), 'raw/token 只接受一个参数。');
          if (macro(arg, file)) {
            const numbers = meta.numbers.map((x) => x[0]);
            if (meta.zero) numbers.push({ min: 0, max: 0 });
            replacement = JSON.stringify(
              binding(
                arg,
                method === 'token'
                  ? { tokens: Object.values(keywordGroups[meta.keywords]) }
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
          let plan, unit;
          for (const candidate of helperGroups[meta.helpers])
            for (const u of unitFamilies[candidate.family])
              if ((u === '%' ? 'pct' : u) + candidate.suffix === method) {
                plan = candidate;
                unit = u;
              }
          if (!plan || !plan.arities[declaration.arguments.length])
            error(base + declaration.getStart(file), '无效的单位方法或参数数量。');
          const alternatives = plan.arities[declaration.arguments.length];
          let tuple;
          if (alternatives.length > 1 && declaration.arguments.length > 1) {
            const values = declaration.arguments.map((arg) => {
              const value = macro(arg, file) ? arg.arguments[0] : arg;
              if (!value) error(base + arg.getStart(file), 'bx 只接受一个标量值。');
              validateRead(value);
              return value.getText(file);
            });
            tuple = `${tupleName}([${values.join(',')}], ${JSON.stringify(alternatives)})`;
          }
          const parts = declaration.arguments.map((arg, index) => {
            const numbers = plan.arities[declaration.arguments.length].map((x) => x[index]);
            if (macro(arg, file))
              return JSON.stringify(
                binding(arg, { unit, numbers }, tuple ? `${tuple}[${index}]` : undefined),
              );
            if (hits.some((x) => x.pos >= arg.pos && x.end <= arg.end))
              error(base + arg.getStart(file), '单位参数中的 bx 不支持额外运算。');
            return `${valueName}(${arg.getText(file)}, ${JSON.stringify({ unit, numbers })})`;
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
    const initializer = file.statements[0]?.declarationList?.declarations[0]?.initializer;
    const direct =
      initializer &&
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
      if (!hasBindings) return null;
      output.appendLeft(
        scriptStart,
        `\nimport { bxValue as ${valueName}, bxTuple as ${tupleName} } from '@zerodep-css/core/binding';\n`,
      );
      output.appendLeft(scriptEnd, '\n' + extra + '\n');
      const code = output.toString();
      const mapOptions = { source: filename, includeContent: true, hires: true };
      const decoded = output.generateDecodedMap(mapOptions);
      // 新生成/提升的绑定代码映射回原 bx 表达式；未改动代码保留逐字符映射。
      for (const { text, offset } of anchors) {
        const original = source.slice(0, offset),
          sourceLine = original.split('\n').length - 1,
          sourceColumn = offset - original.lastIndexOf('\n') - 1;
        for (
          let index = code.indexOf(text);
          index !== -1;
          index = code.indexOf(text, index + text.length)
        ) {
          const before = code.slice(0, index),
            line = before.split('\n').length - 1,
            column = index - before.lastIndexOf('\n') - 1;
          const entries = (decoded.mappings[line] ??= []);
          const previous = entries.findIndex((e) => e[0] === column);
          if (previous !== -1) entries.splice(previous, 1);
          entries.push([column, 0, sourceLine, sourceColumn]);
          entries.sort((a, b) => a[0] - b[0]);
        }
      }
      const map = output.generateMap(mapOptions);
      map.mappings = encode(decoded.mappings);
      return { code, map };
    },
  };
}

export function classInitializer(node, ctx, framework) {
  if (!ts.isCallExpression(node)) return false;
  const callee = node.expression.getText(ctx.ast);
  if (ctx.css.has(callee)) return true;
  const imported = ctx.imports.get(callee);
  if (framework === 'vue' && imported?.module === 'vue' && imported.original === 'computed') {
    const fn = node.arguments[0];
    return (
      fn &&
      ts.isArrowFunction(fn) &&
      ts.isCallExpression(fn.body) &&
      ctx.css.has(fn.body.expression.getText(ctx.ast))
    );
  }
  return (
    framework === 'svelte' &&
    callee === '$derived' &&
    node.arguments[0] &&
    ts.isCallExpression(node.arguments[0]) &&
    ctx.css.has(node.arguments[0].expression.getText(ctx.ast))
  );
}

export function assertNoClassReferences(ctx, text, offset, classes, locals = new Set()) {
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
export function vitePlugin(framework, transform, options = {}) {
  let root = options.root;
  return {
    name: `zerodep-${framework}-bx`,
    enforce: 'pre',
    configResolved(config) {
      root ??= config.root;
    },
    transform(source, id) {
      if (id.includes('?') || !id.endsWith('.' + framework)) return null;
      return transform(source, id, { ...options, root });
    },
  };
}
