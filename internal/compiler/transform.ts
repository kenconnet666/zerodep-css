import type {
  CompilerOptions,
  CompilerPlugin,
  SourceTransform,
  ValueBinding,
  TransformedExpression,
} from './types.js';
type Framework = 'vue' | 'svelte';
import ts from 'typescript';
import MagicString from 'magic-string';
import { sourceMapper } from './source-map.js';
import { automaticDeclarations } from './automatic.js';
import { unshadowed, capturedInside } from './scope.js';
export { unshadowed } from './scope.js';
import { createHash } from 'node:crypto';
import { relative, resolve, isAbsolute } from 'node:path';
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
  if (options.bindings !== undefined && !['variables', 'runtime'].includes(options.bindings))
    throw new TypeError('Compiler bindings must be variables or runtime.');
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
    css = new Set<string>(),
    automaticCss = new Set<string>(),
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
            ) {
              css.add(e.name.text);
              const argument = d.initializer.arguments[0];
              // 选项可能隐藏派生类。仅证明系统 Css 的初始化才允许属性提升。
              const defaults =
                !argument ||
                (ts.isIdentifier(argument) &&
                  argument.text === 'undefined' &&
                  !imports.has('undefined') &&
                  !capturedInside(argument, ast)) ||
                (ts.isObjectLiteralExpression(argument) &&
                  argument.properties.every(
                    (property) =>
                      (ts.isPropertyAssignment(property) ||
                        ts.isShorthandPropertyAssignment(property)) &&
                      (ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)) &&
                      ['context', 'theme'].includes(property.name.text),
                  ));
              if (defaults && d.initializer.arguments.length <= 1) automaticCss.add(e.name.text);
            }
  let counter = 0;
  const fresh = (kind: string): string => {
    let value;
    do value = `__zcss_${kind}_${counter++}`;
    while (used.has(value) || source.includes(value));
    used.add(value);
    return value;
  };
  const sourceName = fresh('source');
  const unitsName = fresh('units');
  const prepareName = fresh('prepare');
  const declarationName = fresh('declaration');
  const declarationBindings: string[] = [];
  const preparedBindings: string[] = [];
  let hasBindings = false;
  let hasAutomatic = false;
  let hasPrepared = false;
  let hasSources = false;
  const mapper = sourceMapper(source, filename);
  const mapToOriginal = mapper.expression;
  const error: (offset: number, message: string) => never = (offset, message) => {
    const before = source.slice(0, offset),
      line = before.split('\n').length,
      column = offset - before.lastIndexOf('\n');
    throw Object.assign(new Error(`[zerodep css] ${filename}:${line}:${column}: ${message}`), {
      loc: { file: filename, line, column },
    });
  };
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
    let reusedCallback: ts.Node | undefined;
    walk(file, (node) => {
      // 已提升回调的未选静态分支可能含任意代码，不能再对其子树做重叠编辑。
      if (reusedCallback && node.pos >= reusedCallback.pos && node.end <= reusedCallback.end)
        return;
      if (
        !ts.isCallExpression(node) ||
        !ts.isIdentifier(node.expression) ||
        !css.has(node.expression.text) ||
        shadowed.has(node.expression.text) ||
        !unshadowed(node, node.expression.text, file)
      )
        return;
      const callback = node.arguments[0];
      const candidates =
        callback &&
        (ts.isArrowFunction(callback) || ts.isFunctionExpression(callback)) &&
        allowAutomatic &&
        automaticCss.has(node.expression.text) &&
        node.arguments.length === 1 &&
        ts.isVariableDeclaration(node.parent) &&
        node.parent.initializer === node &&
        !id.startsWith('../') &&
        !isAbsolute(id)
          ? automaticDeclarations(callback)
          : undefined;
      const automatic =
        options.bindings === 'runtime' && candidates?.length ? undefined : candidates;
      // 仅复用完全静态的 Vue 回调；动态单位继续交给现有 computed 路径。
      // 这里只创建函数，css 的求值、宿主检查与规则注册仍留在模板使用点。
      let factorySource = callback?.getText(file);
      // 模板字符串可含 HTML 解码后的结束标签；不能把它直接插入 script setup。
      const reuse =
        framework === 'vue' && automatic?.length === 0 && !/<\/script/i.test(factorySource ?? '');
      if (callback && options.debug && !id.startsWith('../') && !isAbsolute(id)) {
        const offset = base + node.getStart(file);
        const before = source.slice(0, offset);
        const location = {
          file: id,
          line: before.split('\n').length,
          column: offset - before.lastIndexOf('\n'),
        };
        if (reuse) factorySource = `${sourceName}(${factorySource}, ${JSON.stringify(location)})`;
        else {
          edits.appendLeft(callback.getStart(file) - prefix.length, `${sourceName}(`);
          edits.appendLeft(callback.end - prefix.length, `, ${JSON.stringify(location)})`);
        }
        hasSources = true;
      }
      if (!callback || (!ts.isArrowFunction(callback) && !ts.isFunctionExpression(callback)))
        return;
      const builder = callback.parameters[0]?.name;
      if (!builder || !ts.isIdentifier(builder)) return;
      // 目前自动提升限定为直接模板使用点；脚本快照和派生类保留运行时合同。
      if (automatic) {
        if (automatic.every((declaration) => declaration.kind === 'unit')) {
          // 静态源码摘要随 HMR 内容改变，不把旧站点缓存当作新样式。
          const key = createHash('sha256')
            .update(id + ':' + (base + callback.getStart(file)) + ':' + callback.getText(file))
            .digest('hex');
          if (reuse) {
            const name = fresh('static');
            reusedCallback = callback;
            preparedBindings.push(
              `const ${name} = ${mapToOriginal(`${prepareName}(${factorySource}, ${JSON.stringify(key)})`, base + callback.getStart(file))};`,
            );
            edits.overwrite(
              callback.getStart(file) - prefix.length,
              callback.end - prefix.length,
              name,
            );
          } else {
            edits.prependLeft(callback.getStart(file) - prefix.length, `${prepareName}(`);
            edits.appendLeft(callback.end - prefix.length, `, ${JSON.stringify(key)})`);
          }
          hasPrepared = true;
        }
        for (const declaration of automatic) {
          const offset = base + declaration.call.getStart(file);
          const name =
            '--zcss-' +
            createHash('sha256')
              .update(
                id +
                  ':' +
                  offset +
                  ':' +
                  JSON.stringify(
                    declaration.kind === 'unit'
                      ? {
                          unit: declaration.unit,
                          alternatives: declaration.alternatives,
                          separator: declaration.separator,
                        }
                      : declaration.format,
                  ),
              )
              .digest('hex')
              .slice(0, 16);
          mapper.reference(name, offset);
          if (declaration.kind === 'value') {
            const helper = fresh('binding');
            const argument = declaration.call.arguments[0]!.getText(file);
            declarationBindings.push(
              `const ${helper} = ${declarationName}(${JSON.stringify(name)}, ${JSON.stringify(declaration.format)});`,
            );
            bindings.push({
              name,
              expression: mapToOriginal(`${helper}.inline(${argument})`, offset),
              offset,
            });
            edits.overwrite(
              declaration.call.getStart(file) - prefix.length,
              declaration.call.end - prefix.length,
              `${declaration.property.getText(file)}.raw(${helper}.value(${argument}))`,
            );
            hasBindings = true;
            continue;
          }
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
    fresh,
    error,
    expression,
    scriptStart,
    scriptEnd,
    mapToOriginal,
    finish(extra = '') {
      if (!hasBindings && !hasSources && !hasPrepared) return null;
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
      if (hasPrepared)
        output.appendLeft(
          scriptStart,
          `\nimport { prepareStyle as ${prepareName} } from '@zerodep-css/core/compiler-runtime';\n`,
        );
      if (declarationBindings.length)
        output.appendLeft(
          scriptStart,
          `\nimport { createDeclarationBinding as ${declarationName} } from '@zerodep-css/core/compiler-runtime';\n`,
        );
      output.appendLeft(scriptEnd, '\n' + declarationBindings.join('\n') + '\n');
      output.appendLeft(scriptEnd, '\n' + preparedBindings.join('\n') + '\n');
      output.appendLeft(scriptEnd, '\n' + extra + '\n');
      return mapper.finish(output);
    },
  };
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
    name: `zerodep-${framework}-css`,
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
