import ts from 'typescript';
import MagicString from 'magic-string';
import { hash } from './names.js';
import { unitSuffix } from './generated/base.js';
import { selectorShortcuts } from './selectors.js';
const selectors = new Set(['_selector', ...Object.keys(selectorShortcuts)]);

// 以下方法表仅用于模板缓存的纯度检查，不再决定变量绑定。
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
  options: { dev?: boolean; scriptOffset?: number } = {},
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
  const vueNamespaces = new Set<string>();
  const dynamic = new Set<string>();
  const stableReactive = new Set<string>();
  const warnings = new Set<string>();
  let scope = '__zc';
  while (reserved.includes(scope)) scope += '_';
  let used = false;
  let valueCount = 0;
  let serial = 0;
  const locations: Record<string, string> = {};
  const offsets = new Map<ts.SourceFile, number>([[source, options.scriptOffset ?? 0]]);
  let lastExpression: { text: string; source: ts.SourceFile } | undefined;
  // 模板绑定和缓存分析读取同一份 AST；只保留最近一次，避免跨文件缓存和失效管理。
  function expressionSource(text: string) {
    if (lastExpression?.text !== text)
      lastExpression = {
        text,
        source: ts.createSourceFile(
          'expression.ts',
          `(${text})`,
          ts.ScriptTarget.Latest,
          true,
          ts.ScriptKind.TS,
        ),
      };
    return lastExpression.source;
  }
  function location(offset: number): string {
    const prefix = reserved.slice(0, offset);
    return `${file.replace(/\\/g, '/')}:${prefix.split('\n').length}:${offset - prefix.lastIndexOf('\n')}`;
  }
  function site(node: ts.Node, sf: ts.SourceFile): string {
    const id = String(serial++);
    if (options.dev) locations[id] = location((offsets.get(sf) ?? 0) + node.getStart(sf));
    return JSON.stringify(id);
  }

  function bindings(node: ts.BindingName, into: Set<string>) {
    if (ts.isIdentifier(node)) into.add(node.text);
    else for (const part of node.elements) if (ts.isBindingElement(part)) bindings(part.name, into);
  }
  function callName(node: ts.Expression): string {
    if (
      ts.isPropertyAccessExpression(node) &&
      ts.isIdentifier(node.expression) &&
      vueNamespaces.has(node.expression.text)
    )
      return node.name.text;
    return ts.isIdentifier(node)
      ? (aliases.get(node.text) ?? node.text)
      : node.getText(source).split('.')[0]!;
  }
  for (const node of source.statements) {
    if (!ts.isImportDeclaration(node) || !ts.isStringLiteral(node.moduleSpecifier)) continue;
    if (node.importClause?.isTypeOnly) continue;
    const cssModule = /^@zerodep-css\/(vue|svelte|core)(\/server|\/browser)?$/.test(
      node.moduleSpecifier.text,
    );
    const imports = node.importClause?.namedBindings;
    if (imports && ts.isNamespaceImport(imports)) {
      if (cssModule) namespaces.add(imports.name.text);
      if (node.moduleSpecifier.text === 'vue') vueNamespaces.add(imports.name.text);
    } else if (imports)
      for (const item of imports.elements) {
        if (item.isTypeOnly) continue;
        const name = item.propertyName?.text ?? item.name.text;
        if (cssModule && ['css', 'keyframes', 'globalCss', 'bx'].includes(name))
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
      const callee = node.initializer.expression;
      const fromVue =
        (ts.isIdentifier(callee) && aliases.has(callee.text)) ||
        (ts.isPropertyAccessExpression(callee) &&
          ts.isIdentifier(callee.expression) &&
          vueNamespaces.has(callee.expression.text));
      if (
        framework === 'vue' &&
        reactive.has(name) &&
        (fromVue || name === 'defineProps' || name === 'withDefaults') &&
        ts.isVariableDeclarationList(node.parent) &&
        node.parent.flags & ts.NodeFlags.Const &&
        ts.isVariableStatement(node.parent.parent) &&
        node.parent.parent.parent === source
      )
        bindings(node.name, stableReactive);
    }
    ts.forEachChild(node, collect);
  }
  collect(source);
  const enabled =
    namespaces.size > 0 ||
    [...aliases.values()].some((name) => ['css', 'keyframes', 'globalCss', 'bx'].includes(name));

  function api(node: ts.Expression, local: Set<string>, sf: ts.SourceFile): string | undefined {
    if (ts.isIdentifier(node) && !local.has(node.text)) {
      const name = aliases.get(node.text);
      return name && ['css', 'keyframes', 'globalCss', 'bx'].includes(name) ? name : undefined;
    }
    if (
      ts.isPropertyAccessExpression(node) &&
      ts.isIdentifier(node.expression) &&
      namespaces.has(node.expression.text) &&
      !local.has(node.expression.text)
    )
      return ['css', 'keyframes', 'globalCss', 'bx'].includes(node.name.text)
        ? node.name.text
        : undefined;
    return undefined;
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

  function render(node: ts.Node, sf: ts.SourceFile, local: Set<string>): string {
    if (ts.isCatchClause(node) && node.variableDeclaration) {
      local = new Set(local);
      bindings(node.variableDeclaration.name, local);
    }
    if (ts.isForStatement(node) || ts.isForOfStatement(node) || ts.isForInStatement(node)) {
      if (node.initializer && ts.isVariableDeclarationList(node.initializer)) {
        local = new Set(local);
        for (const declaration of node.initializer.declarations) bindings(declaration.name, local);
      }
    }
    if (ts.isFunctionLike(node)) {
      local = new Set(local);
      const collectVars = (child: ts.Node) => {
        if (ts.isFunctionLike(child) || ts.isClassLike(child)) return;
        if (ts.isVariableDeclarationList(child) && !(child.flags & ts.NodeFlags.BlockScoped))
          for (const declaration of child.declarations) bindings(declaration.name, local);
        ts.forEachChild(child, collectVars);
      };
      ts.forEachChild(node, collectVars);
      if ('name' in node && node.name && ts.isIdentifier(node.name)) local.add(node.name.text);
      for (const parameter of node.parameters) bindings(parameter.name, local);
    }
    if (ts.isBlock(node) || ts.isCaseBlock(node)) {
      local = new Set(local);
      const statements = ts.isBlock(node)
        ? node.statements
        : node.clauses.flatMap((clause) => [...clause.statements]);
      for (const statement of statements) {
        if (
          (ts.isFunctionDeclaration(statement) || ts.isClassDeclaration(statement)) &&
          statement.name
        )
          local.add(statement.name.text);
        if (ts.isVariableStatement(statement))
          for (const declaration of statement.declarationList.declarations)
            bindings(declaration.name, local);
      }
    }
    if (ts.isCallExpression(node)) {
      const name = api(node.expression, local, sf);
      if (name === 'bx') {
        const value = node.arguments[0];
        if (!value || node.arguments.length !== 1 || ts.isSpreadElement(value))
          throw new Error(
            location((offsets.get(sf) ?? 0) + node.getStart(sf)) +
              ': bx() expects one value expression.',
          );
        const unsupported = (child: ts.Node): boolean =>
          ts.isAwaitExpression(child) ||
          ts.isYieldExpression(child) ||
          (ts.isCallExpression(child) && api(child.expression, local, sf) === 'bx') ||
          Boolean(ts.forEachChild(child, (next) => unsupported(next) || undefined));
        if (unsupported(value))
          throw new Error(
            location((offsets.get(sf) ?? 0) + node.getStart(sf)) +
              ': resolve await/yield or nested bx before binding.',
          );
        used = true;
        valueCount++;
        return scope + '.bind(' + site(node, sf) + ', () => (' + value.getText(sf) + '))';
      }
      if (name === 'css' || name === 'keyframes' || name === 'globalCss') {
        const before = valueCount;
        const args = node.arguments.map((arg) => render(arg, sf, local));
        if (before !== valueCount)
          return (
            scope +
            '.capture(' +
            site(node, sf) +
            ', ' +
            node.expression.getText(sf) +
            ', () => [' +
            args.join(', ') +
            '])'
          );
        return node.expression.getText(sf) + '(' + args.join(', ') + ')';
      }
      const text = node.expression.getText(sf);
      const derived =
        (!local.has(text) &&
          (text === '$derived' || text === '$derived.by' || aliases.get(text) === 'computed')) ||
        (ts.isPropertyAccessExpression(node.expression) &&
          ts.isIdentifier(node.expression.expression) &&
          vueNamespaces.has(node.expression.expression.text) &&
          !local.has(node.expression.expression.text) &&
          node.expression.name.text === 'computed');
      if (derived && node.arguments.length) {
        const args = node.arguments.map((arg, index) => {
          if (index !== 0) return render(arg, sf, local);
          if (text === '$derived')
            return (
              scope + '.derived(' + site(node, sf) + ', () => (' + render(arg, sf, local) + '))'
            );
          if (
            (ts.isArrowFunction(arg) || ts.isFunctionExpression(arg)) &&
            !arg.modifiers?.some((mod) => mod.kind === ts.SyntaxKind.AsyncKeyword) &&
            !('asteriskToken' in arg && arg.asteriskToken)
          )
            return scope + '.derived(' + site(arg, sf) + ', ' + render(arg, sf, local) + ')';
          return render(arg, sf, local);
        });
        return (text === '$derived' ? '$derived.by' : text) + '(' + args.join(', ') + ')';
      }
    }
    let cursor = node.getStart(sf),
      result = '';
    ts.forEachChild(node, (child) => {
      result += sf.text.slice(cursor, child.getStart(sf)) + render(child, sf, local);
      cursor = child.end;
    });
    return result + sf.text.slice(cursor, node.end);
  }

  const transformed = source.statements
    .map((node) => script.slice(node.pos, node.getStart(source)) + render(node, source, new Set()))
    .join('');
  return {
    scope,
    fileId: hash(file.replace(/\\/g, '/')),
    get used() {
      return used;
    },
    warnings,
    locations,
    warnAt(offset: number, message: string) {
      warnings.add(`${location(offset)}: ${message}`);
    },
    enabled,
    /** 仅标记直接可分析的模板 CSS；未知函数和普通可变变量继续逐次执行。 */
    templateGuards(text: string, locals: string[] = []): string | undefined {
      const sf = expressionSource(text);
      const statement = sf.statements[0];
      if (!statement || !ts.isExpressionStatement(statement)) return;
      const local = new Set(locals),
        guards = new Set<string>();
      const guardValue = (name: string) =>
        guards.add(
          stableReactive.has(name) && !local.has(name) ? `[() => ${name}, true]` : `[${name}]`,
        );
      const mutable = new Set<string>();
      for (const entry of source.statements)
        if (ts.isVariableStatement(entry) && !(entry.declarationList.flags & ts.NodeFlags.Const))
          for (const declaration of entry.declarationList.declarations)
            bindings(declaration.name, mutable);
      let found = false;
      function visit(node: ts.Node, part = false): boolean {
        if (
          ts.isAsExpression(node) ||
          ts.isTypeAssertionExpression(node) ||
          ts.isSatisfiesExpression(node) ||
          ts.isNonNullExpression(node) ||
          ts.isParenthesizedExpression(node)
        )
          return visit(node.expression, part);
        if (ts.isPropertyAssignment(node))
          return (
            (!ts.isComputedPropertyName(node.name) || visit(node.name.expression, part)) &&
            visit(node.initializer, part)
          );
        if (
          !safe(node) ||
          ts.isSpreadElement(node) ||
          ts.isSpreadAssignment(node) ||
          ts.isTypeOfExpression(node) ||
          ts.isFunctionLike(node) ||
          ts.isNewExpression(node)
        )
          return false;
        if (ts.isCallExpression(node)) {
          if (api(node.expression, local, sf) === 'bx') return true;
          if (api(node.expression, local, sf) === 'css') {
            found = true;
            return node.arguments.every((arg) => visit(arg, true));
          }
          if (!part || !ts.isPropertyAccessExpression(node.expression)) return false;
          const access = node.expression;
          if (ts.isIdentifier(access.expression) && selectors.has(access.name.text)) {
            guards.add(`[${access.expression.text}, "", ${JSON.stringify(access.name.text)}]`);
            return node.arguments.every((arg) => visit(arg, true));
          }
          if (
            ts.isPropertyAccessExpression(access.expression) &&
            ts.isIdentifier(access.expression.expression) &&
            methods.has(access.name.text)
          ) {
            guards.add(
              `[${access.expression.expression.text}, ${JSON.stringify(access.expression.name.text)}, ${JSON.stringify(access.name.text)}]`,
            );
            return node.arguments.every((arg) => visit(arg));
          }
          return false;
        }
        if (
          part &&
          ts.isPropertyAccessExpression(node) &&
          ts.isPropertyAccessExpression(node.expression) &&
          ts.isIdentifier(node.expression.expression)
        ) {
          guards.add(
            `[${node.expression.expression.text}, ${JSON.stringify(node.expression.name.text)}, ${JSON.stringify(node.name.text)}]`,
          );
          return true;
        }
        if (ts.isConditionalExpression(node))
          return visit(node.condition) && visit(node.whenTrue, part) && visit(node.whenFalse, part);
        if (ts.isPropertyAccessExpression(node) || ts.isElementAccessExpression(node)) {
          let root: ts.Expression = node.expression;
          while (ts.isPropertyAccessExpression(root) || ts.isElementAccessExpression(root))
            root = root.expression;
          if (ts.isIdentifier(root)) guardValue(root.text);
          return (
            visit(node.expression) &&
            (!ts.isElementAccessExpression(node) || visit(node.argumentExpression))
          );
        }
        if (ts.isIdentifier(node)) {
          guardValue(node.text);
          return !mutable.has(node.text) || dynamic.has(node.text) || local.has(node.text);
        }
        return !ts.forEachChild(node, (child) => !visit(child, part) || undefined);
      }
      if (!visit(statement.expression) || !found) return;
      used = true;
      return `[${[...guards].join(', ')}]`;
    },
    script: transformed + script.slice(source.statements.at(-1)?.end ?? 0),
    expression(text: string, locals: string[] = [], offset = 0): string {
      const sf = expressionSource(text);
      const statement = sf.statements[0];
      offsets.set(sf, offset - 1);
      if (!statement || !ts.isExpressionStatement(statement)) return text;
      return render(statement.expression, sf, new Set(locals)).slice(1, -1);
    },
    framework,
  };
}

export function bindingNames(pattern: string): string[] {
  // 最常见的循环别名无需再构建一份 TypeScript AST；解构形式仍交给解析器。
  if (/^[A-Za-z_$][\w$]*$/.test(pattern)) return [pattern];
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

/** 逐语句保留未变片段，避免整段 script 覆盖令后续行的 source map 全部指向开头。 */
export function scriptEdits(before: string, after: string, offset: number): Edit[] {
  const parse = (code: string) =>
    ts.createSourceFile('script.ts', code, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
  const original = parse(before),
    next = parse(after);
  if (original.statements.length !== next.statements.length)
    throw new Error('CSS transform changed script statement boundaries.');
  const edits: Edit[] = [];
  original.statements.forEach((node, index) => {
    const oldText = node.getText(original),
      newText = next.statements[index]!.getText(next);
    if (oldText === newText) return;
    let start = 0,
      tail = 0;
    while (start < oldText.length && start < newText.length && oldText[start] === newText[start])
      start++;
    while (
      tail < oldText.length - start &&
      tail < newText.length - start &&
      oldText[oldText.length - tail - 1] === newText[newText.length - tail - 1]
    )
      tail++;
    edits.push({
      start: offset + node.getStart(original) + start,
      end: offset + node.end - tail,
      text: newText.slice(start, newText.length - tail),
    });
  });
  return edits;
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
