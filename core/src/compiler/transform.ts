import ts from 'typescript';
import { hash } from '../names.js';
import { collectBindings } from './source.js';
import { analyzeTemplate, reactive } from './template-analysis.js';

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
      if (reactive.has(name)) collectBindings(node.name, dynamic);
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
        collectBindings(node.name, stableReactive);
    }
    ts.forEachChild(node, collect);
  }
  collect(source);
  const mutable = new Set<string>();
  for (const entry of source.statements)
    if (ts.isVariableStatement(entry) && !(entry.declarationList.flags & ts.NodeFlags.Const))
      for (const declaration of entry.declarationList.declarations)
        collectBindings(declaration.name, mutable);

  const enabled =
    namespaces.size > 0 ||
    [...aliases.values()].some((name) => ['css', 'keyframes', 'globalCss', 'bx'].includes(name));

  function api(node: ts.Expression, local: Set<string>): string | undefined {
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
  function render(node: ts.Node, sf: ts.SourceFile, local: Set<string>): string {
    if (ts.isCatchClause(node) && node.variableDeclaration) {
      local = new Set(local);
      collectBindings(node.variableDeclaration.name, local);
    }
    if (ts.isForStatement(node) || ts.isForOfStatement(node) || ts.isForInStatement(node)) {
      if (node.initializer && ts.isVariableDeclarationList(node.initializer)) {
        local = new Set(local);
        for (const declaration of node.initializer.declarations)
          collectBindings(declaration.name, local);
      }
    }
    if (ts.isFunctionLike(node)) {
      local = new Set(local);
      const collectVars = (child: ts.Node) => {
        if (ts.isFunctionLike(child) || ts.isClassLike(child)) return;
        if (ts.isVariableDeclarationList(child) && !(child.flags & ts.NodeFlags.BlockScoped))
          for (const declaration of child.declarations) collectBindings(declaration.name, local);
        ts.forEachChild(child, collectVars);
      };
      ts.forEachChild(node, collectVars);
      // 方法名不是词法绑定；只有具名函数会在自身作用域遮蔽同名导入。
      if ((ts.isFunctionDeclaration(node) || ts.isFunctionExpression(node)) && node.name)
        local.add(node.name.text);
      for (const parameter of node.parameters) collectBindings(parameter.name, local);
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
            collectBindings(declaration.name, local);
      }
    }
    if (ts.isCallExpression(node)) {
      const name = api(node.expression, local);
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
          (ts.isCallExpression(child) && api(child.expression, local) === 'bx') ||
          Boolean(ts.forEachChild(child, (next) => unsupported(next) || undefined));
        if (unsupported(value))
          throw new Error(
            location((offsets.get(sf) ?? 0) + node.getStart(sf)) +
              ': resolve await/yield or nested bx before binding.',
          );
        used = true;
        valueCount++;
        const constant = (node: ts.Node): boolean =>
          ts.isStringLiteral(node) ||
          ts.isNumericLiteral(node) ||
          ts.isNoSubstitutionTemplateLiteral(node) ||
          node.kind === ts.SyntaxKind.NullKeyword ||
          (ts.isParenthesizedExpression(node) && constant(node.expression)) ||
          (ts.isPrefixUnaryExpression(node) &&
            [ts.SyntaxKind.PlusToken, ts.SyntaxKind.MinusToken].includes(node.operator) &&
            ts.isNumericLiteral(node.operand));
        return (
          scope +
          '.bind(' +
          site(node, sf) +
          ', () => (' +
          value.getText(sf) +
          ')' +
          (constant(value) ? ', true)' : ')')
        );
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
            (name === 'globalCss' ? '], false)' : '])')
          );
        return node.expression.getText(sf) + '(' + args.join(', ') + ')';
      }
      const text = node.expression.getText(sf);
      const vueCall =
        ts.isIdentifier(node.expression) && !local.has(text)
          ? aliases.get(text)
          : ts.isPropertyAccessExpression(node.expression) &&
              ts.isIdentifier(node.expression.expression) &&
              vueNamespaces.has(node.expression.expression.text) &&
              !local.has(node.expression.expression.text)
            ? node.expression.name.text
            : undefined;
      const rune =
        framework === 'svelte' &&
        !local.has(text.split('.')[0]!) &&
        ['$derived', '$derived.by', '$effect', '$effect.pre', '$effect.root'].includes(text);
      const managed =
        rune ||
        (framework === 'vue' &&
          vueCall !== undefined &&
          ['computed', 'watch', 'watchEffect', 'watchPostEffect', 'watchSyncEffect'].includes(
            vueCall,
          ));
      const callbackIndex = vueCall === 'watch' ? 1 : 0;
      if (managed && node.arguments.length > callbackIndex) {
        const args = node.arguments.map((arg, index) => {
          if (index !== callbackIndex) return render(arg, sf, local);
          if (vueCall === 'computed' && ts.isObjectLiteralExpression(arg)) {
            // 保留 computed 对整个选项对象的上下文类型，只包装 getter，setter 仍可推断参数。
            return (
              '{' +
              arg.properties
                .map((property) => {
                  if (ts.isSpreadAssignment(property))
                    return (
                      '...' +
                      scope +
                      '.frameCallback(' +
                      site(property, sf) +
                      ', ' +
                      render(property.expression, sf, local) +
                      ')'
                    );
                  if (
                    'name' in property &&
                    property.name &&
                    (ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)) &&
                    property.name.text === 'get'
                  ) {
                    let getter: string | undefined;
                    if (ts.isPropertyAssignment(property))
                      getter = render(property.initializer, sf, local);
                    else if (ts.isShorthandPropertyAssignment(property))
                      getter = property.name.text;
                    else if (ts.isMethodDeclaration(property)) {
                      const asyncPrefix = property.modifiers?.some(
                        (mod) => mod.kind === ts.SyntaxKind.AsyncKeyword,
                      )
                        ? 'async '
                        : '';
                      getter =
                        asyncPrefix +
                        'function' +
                        (property.asteriskToken ? '*' : '') +
                        render(property, sf, local).slice(
                          property.name.end - property.getStart(sf),
                        );
                    }
                    if (getter)
                      return (
                        'get: ' +
                        scope +
                        '.frameCallback(' +
                        site(property, sf) +
                        ', ' +
                        getter +
                        ')'
                      );
                  }
                  return render(property, sf, local);
                })
                .join(', ') +
              '}'
            );
          }
          if (text === '$derived')
            return (
              scope +
              '.frameCallback(' +
              site(node, sf) +
              ', () => (' +
              render(arg, sf, local) +
              '))'
            );
          return scope + '.frameCallback(' + site(arg, sf) + ', ' + render(arg, sf, local) + ')';
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
      const guards = analyzeTemplate({
        expression: expressionSource(text),
        locals,
        mutable,
        stableReactive,
        dynamic,
        api,
      });
      if (guards !== undefined) used = true;
      return guards;
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
