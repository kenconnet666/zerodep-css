import ts from 'typescript';
import MagicString from 'magic-string';
import { hash } from './names.js';
import { unitSuffix } from './generated/base.js';

const methods = new Set([
  'raw',
  'rgb',
  'hsl',
  'calc',
  'min',
  'max',
  'clamp',
  ...Object.keys(unitSuffix),
]);
const reactive = new Set([
  'ref',
  'shallowRef',
  'reactive',
  'shallowReactive',
  'computed',
  'toRef',
  'toRefs',
  'defineProps',
  'withDefaults',
  '$state',
  '$derived',
  '$props',
]);
export interface Edit {
  start: number;
  end: number;
  text: string;
}

/** 只变换已导入的库调用；框架适配器提供模板 AST 与循环作用域。 */
export function createBindingTransform(
  script: string,
  file: string,
  framework: 'vue' | 'svelte',
  reserved = script,
) {
  const source = ts.createSourceFile(
    file + '.ts',
    script,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const aliases = new Map<string, string>();
  const namespaces = new Set<string>();
  const dynamic = new Set<string>();
  const warnings = new Set<string>();
  let scope = '__zc';
  while (reserved.includes(scope)) scope += '_';
  let used = false;
  let valueCount = 0;
  let serial = 0;

  function bindings(node: ts.BindingName, into: Set<string>) {
    if (ts.isIdentifier(node)) into.add(node.text);
    else for (const part of node.elements) if (ts.isBindingElement(part)) bindings(part.name, into);
  }
  function callName(node: ts.Expression): string {
    return ts.isIdentifier(node)
      ? (aliases.get(node.text) ?? node.text)
      : node.getText(source).split('.')[0]!;
  }
  for (const node of source.statements) {
    if (!ts.isImportDeclaration(node) || !ts.isStringLiteral(node.moduleSpecifier)) continue;
    const cssModule = /^@zerodep-css\/(vue|svelte|core)(\/server|\/browser)?$/.test(
      node.moduleSpecifier.text,
    );
    const imports = node.importClause?.namedBindings;
    if (imports && ts.isNamespaceImport(imports)) {
      if (cssModule) namespaces.add(imports.name.text);
    } else if (imports)
      for (const item of imports.elements) {
        const name = item.propertyName?.text ?? item.name.text;
        if (cssModule && ['css', 'keyframes', 'globalCss', 'ic'].includes(name))
          aliases.set(item.name.text, name);
        else if (node.moduleSpecifier.text === 'vue') aliases.set(item.name.text, name);
        else if (!item.isTypeOnly) dynamic.add(item.name.text);
      }
  }
  function collect(node: ts.Node) {
    if (
      ts.isVariableDeclaration(node) &&
      node.initializer &&
      ts.isCallExpression(node.initializer)
    ) {
      const name = callName(node.initializer.expression);
      if (reactive.has(name)) bindings(node.name, dynamic);
    }
    ts.forEachChild(node, collect);
  }
  collect(source);
  const enabled =
    namespaces.size > 0 ||
    [...aliases.values()].some((name) => ['css', 'keyframes', 'globalCss'].includes(name));

  function api(node: ts.Expression, local: Set<string>, sf: ts.SourceFile): string | undefined {
    if (ts.isIdentifier(node) && !local.has(node.text)) {
      const name = aliases.get(node.text);
      return name && ['css', 'keyframes', 'globalCss'].includes(name) ? name : undefined;
    }
    if (
      ts.isPropertyAccessExpression(node) &&
      ts.isIdentifier(node.expression) &&
      namespaces.has(node.expression.text) &&
      !local.has(node.expression.text)
    )
      return ['css', 'keyframes', 'globalCss'].includes(node.name.text)
        ? node.name.text
        : undefined;
    return undefined;
  }
  function isDynamic(node: ts.Node, params: Set<string>): boolean {
    if (
      ts.isIdentifier(node) &&
      !(ts.isPropertyAccessExpression(node.parent) && node.parent.name === node) &&
      (dynamic.has(node.text) || params.has(node.text))
    )
      return true;
    if (ts.isPropertyAccessExpression(node) && node.name.text === 'value') return true;
    return Boolean(ts.forEachChild(node, (child) => isDynamic(child, params) || undefined));
  }
  function safe(node: ts.Node): boolean {
    if (
      ts.isAwaitExpression(node) ||
      ts.isYieldExpression(node) ||
      ts.isPostfixUnaryExpression(node)
    )
      return false;
    if (
      ts.isPrefixUnaryExpression(node) &&
      [ts.SyntaxKind.PlusPlusToken, ts.SyntaxKind.MinusMinusToken].includes(node.operator)
    )
      return false;
    if (
      ts.isBinaryExpression(node) &&
      node.operatorToken.kind >= ts.SyntaxKind.FirstAssignment &&
      node.operatorToken.kind <= ts.SyntaxKind.LastAssignment
    )
      return false;
    return !ts.forEachChild(node, (child) => !safe(child) || undefined);
  }

  function render(
    node: ts.Node,
    sf: ts.SourceFile,
    params: Set<string>,
    local: Set<string>,
    disabled = false,
    bindingContext = false,
  ): string {
    if (ts.isFunctionLike(node)) {
      params = new Set(params);
      local = new Set(local);
      for (const parameter of node.parameters) {
        bindings(parameter.name, params);
        bindings(parameter.name, local);
      }
    }
    if (ts.isBlock(node)) {
      local = new Set(local);
      params = new Set(params);
      for (const statement of node.statements)
        if (ts.isVariableStatement(statement))
          for (const declaration of statement.declarationList.declarations) {
            bindings(declaration.name, local);
            // 函数每次调用都会重新求值，局部别名随该次调用绑定；模块 / setup 快照不扩张。
            if (declaration.initializer && isDynamic(declaration.initializer, params))
              bindings(declaration.name, params);
          }
    }
    if (ts.isCallExpression(node)) {
      const name = api(node.expression, local, sf);
      const text = node.expression.getText(sf);
      if (
        ['computed', '$derived', '$derived.by'].includes(text) ||
        aliases.get(text) === 'computed'
      ) {
        const containsCss = (item: ts.Node): boolean =>
          (ts.isCallExpression(item) && Boolean(api(item.expression, local, sf))) ||
          Boolean(ts.forEachChild(item, (child) => containsCss(child) || undefined));
        if (containsCss(node))
          warnings.add(
            'CSS calls inside computed/$derived retain their ordinary runtime evaluation; define a bound css() in setup for implicit value binding.',
          );
        return node.getText(sf);
      }
      if (!disabled && (name === 'css' || name === 'keyframes')) {
        const before = valueCount;
        const args = node.arguments.map((arg) => render(arg, sf, params, local, false, true));
        if (valueCount === before) return node.getText(sf);
        return `${scope}.capture(${JSON.stringify(String(serial++))}, ${text}, () => [${args.join(', ')}])`;
      }
      if (name === 'globalCss') {
        // 全局块按 key 整块更新，不能把值误绑定到局部组件根。
        if (ts.isExpressionStatement(node.parent) && node.parent.parent === sf) {
          used = true;
          valueCount++;
          return `${scope}.effect(() => ${node.getText(sf)})`;
        }
        return node.getText(sf);
      }
      if (
        enabled &&
        bindingContext &&
        !disabled &&
        ts.isPropertyAccessExpression(node.expression) &&
        ts.isPropertyAccessExpression(node.expression.expression)
      ) {
        const property = node.expression.expression;
        const method = node.expression.name.text;
        if (methods.has(method) && node.arguments.some((arg) => isDynamic(arg, params))) {
          if (node.arguments.some((arg) => ts.isSpreadElement(arg) || !safe(arg))) {
            warnings.add(
              `Implicit binding skipped for ${property.name.text}.${method}: spread or side-effecting arguments retain runtime evaluation.`,
            );
            return node.getText(sf);
          }
          used = true;
          valueCount++;
          const args = node.arguments.map((arg) =>
            isDynamic(arg, params) ? `() => (${arg.getText(sf)})` : arg.getText(sf),
          );
          return `${scope}.value(${JSON.stringify(String(serial++))}, ${JSON.stringify(property.name.text)}, ${property.getText(sf)}, ${JSON.stringify(method)}, [${args.join(', ')}])`;
        }
      }
      const safeComposition = ts.isIdentifier(node.expression)
        ? aliases.get(text) === 'ic'
        : ts.isPropertyAccessExpression(node.expression) &&
          ts.isIdentifier(node.expression.expression) &&
          namespaces.has(node.expression.expression.text) &&
          node.expression.name.text === 'ic';
      if (bindingContext && !safeComposition && !name) {
        if (isDynamic(node, params))
          warnings.add(
            `Composition call ${text} retains runtime evaluation; its string manipulation is not rewritten.`,
          );
        return node.getText(sf);
      }
    }
    const start = node.getStart(sf);
    let cursor = start;
    let result = '';
    ts.forEachChild(node, (child) => {
      const childStart = child.getStart(sf);
      const context =
        ts.isConditionalExpression(node) && child === node.condition
          ? false
          : ts.isBinaryExpression(node) && node.operatorToken.kind !== ts.SyntaxKind.PlusToken
            ? false
            : bindingContext;
      result +=
        sf.text.slice(cursor, childStart) + render(child, sf, params, local, disabled, context);
      cursor = child.end;
    });
    return result + sf.text.slice(cursor, node.end);
  }

  const transformed = source.statements
    .map(
      (node) =>
        script.slice(node.pos, node.getStart(source)) + render(node, source, new Set(), new Set()),
    )
    .join('');
  return {
    scope,
    fileId: hash(file.replace(/\\/g, '/')),
    get used() {
      return used;
    },
    warnings,
    enabled,
    script: transformed + script.slice(source.statements.at(-1)?.end ?? 0),
    expression(text: string, locals: string[] = []): string {
      const sf = ts.createSourceFile(
        'expression.ts',
        `(${text})`,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TS,
      );
      const statement = sf.statements[0];
      if (!statement || !ts.isExpressionStatement(statement)) return text;
      return render(statement.expression, sf, new Set(locals), new Set(locals)).slice(1, -1);
    },
    framework,
  };
}

export function bindingNames(pattern: string): string[] {
  const sf = ts.createSourceFile(
    'pattern.ts',
    `let ${pattern} = null;`,
    ts.ScriptTarget.Latest,
    true,
  );
  const statement = sf.statements[0];
  const names: string[] = [];
  function visit(node: ts.BindingName) {
    if (ts.isIdentifier(node)) names.push(node.text);
    else for (const item of node.elements) if (ts.isBindingElement(item)) visit(item.name);
  }
  if (statement && ts.isVariableStatement(statement))
    for (const item of statement.declarationList.declarations) visit(item.name);
  return names;
}

export function applyEdits(source: string, edits: Edit[], file = 'component') {
  const output = new MagicString(source);
  let end = source.length;
  for (const edit of [...edits].sort((a, b) => b.start - a.start || b.end - a.end)) {
    if (edit.end > end) throw new Error('Overlapping CSS binding transforms.');
    if (edit.start === edit.end) output.appendLeft(edit.start, edit.text);
    else output.overwrite(edit.start, edit.end, edit.text);
    end = edit.start;
  }
  return {
    code: output.toString(),
    map: output.generateMap({ source: file, includeContent: true, hires: true }),
  };
}

/** 复用已有的原生组件 ID；只替换调用节点，绝不改字符串或注释。 */
export function replacePropsId(script: string, name: string): string {
  const sf = ts.createSourceFile(
    'script.ts',
    script,
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TS,
  );
  const edits: Edit[] = [];
  function visit(node: ts.Node) {
    if (
      ts.isCallExpression(node) &&
      ts.isPropertyAccessExpression(node.expression) &&
      ts.isIdentifier(node.expression.expression) &&
      node.expression.expression.text === '$props' &&
      node.expression.name.text === 'id' &&
      node.arguments.length === 0
    )
      edits.push({ start: node.getStart(sf), end: node.end, text: name });
    else ts.forEachChild(node, visit);
  }
  visit(sf);
  return applyEdits(script, edits).code;
}
