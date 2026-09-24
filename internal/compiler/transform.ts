import type {
  CompilerDiagnostic,
  CompilerDiagnosticCode,
  CompilerOptions,
  CompilerPlugin,
  SourceTransform,
  TransformedExpression,
} from './types.js';
import ts from 'typescript';
import MagicString from 'magic-string';
import { createHash } from 'node:crypto';
import { relative, resolve, isAbsolute } from 'node:path';
import { sourceMapper } from './source-map.js';
import { automaticDeclarations } from './automatic.js';
import { unshadowed } from './scope.js';

export { unshadowed } from './scope.js';
export { ts, MagicString };

type Framework = 'vue' | 'svelte';
const detailedDiagnostics = Symbol('zerodep-css detailed diagnostics');
type InternalCompilerOptions = CompilerOptions & { readonly [detailedDiagnostics]?: boolean };
const diagnosticMessages: Readonly<Record<CompilerDiagnosticCode, string>> = {
  'custom-author': 'An explicitly configured Css author type uses the runtime path.',
  'unknown-project-options': 'The createStyles options cannot be proved at compile time.',
  'script-snapshot': 'A script-created CSS class keeps its original snapshot timing.',
  'template-context': 'This template position does not support automatic binding.',
  'style-attribute': 'An existing style attribute keeps its native evaluation order.',
  'dynamic-structure': 'The callback structure or input cannot be proved static.',
  'csp-bindings': 'Runtime binding mode disables dynamic inline variables.',
};
export function walk(node: ts.Node, visit: (node: ts.Node) => void): void {
  visit(node);
  ts.forEachChild(node, (child) => {
    walk(child, visit);
  });
}
function callbackExpression(
  value: ts.Expression,
): ts.ArrowFunction | ts.FunctionExpression | undefined {
  while (
    ts.isParenthesizedExpression(value) ||
    ts.isAsExpression(value) ||
    ts.isTypeAssertionExpression(value) ||
    ts.isNonNullExpression(value) ||
    ts.isSatisfiesExpression(value)
  )
    value = value.expression;
  return ts.isArrowFunction(value) || ts.isFunctionExpression(value) ? value : undefined;
}
/** 框架解析后的模板表达式已完成实体解码，临时名分配必须先避开其中的标识符。 */
function templateIdentifiers(root: unknown): Set<string> {
  const names = new Set<string>();
  const seen = new WeakSet<object>();
  function visit(value: unknown): void {
    if (!value || typeof value !== 'object' || seen.has(value)) return;
    seen.add(value);
    if (Array.isArray(value)) {
      for (const item of value) visit(item);
      return;
    }
    const node = value as Record<string, unknown>;
    if (node.type === 'Identifier' && typeof node.name === 'string') names.add(node.name);
    if (node.type === 4 && typeof node.content === 'string') {
      const file = ts.createSourceFile(
        'template-expression.ts',
        node.content,
        ts.ScriptTarget.Latest,
        true,
        ts.ScriptKind.TS,
      );
      walk(file, (item) => {
        if (ts.isIdentifier(item)) names.add(item.text);
      });
    }
    for (const child of Object.values(node)) visit(child);
  }
  visit(root);
  return names;
}
export function session(
  source: string,
  filename: string,
  scriptStart: number,
  scriptEnd: number,
  framework: Framework,
  options: InternalCompilerOptions = {},
  template?: unknown,
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
  const css = new Set<string>(),
    automaticCss = new Set<string>(),
    projectFactories = new Set<string>();
  // 来源仅包装 const 直接函数值；函数声明可经 for-of/eval 改写，不做脆弱的数据流猜测。
  const knownCallbacks = new Set<string>();
  const used = templateIdentifiers(template);
  walk(ast, (n) => {
    if (ts.isIdentifier(n)) used.add(n.text);
  });
  for (const n of ast.statements) {
    if (ts.isImportDeclaration(n) && ts.isStringLiteral(n.moduleSpecifier)) {
      const module = n.moduleSpecifier.text;
      const bindings = n.importClause?.namedBindings;
      for (const item of bindings && ts.isNamedImports(bindings) ? bindings.elements : []) {
        const original = item.propertyName?.text ?? item.name.text;
        if (module === `@zerodep-css/${framework}` && original === 'createStyles')
          projectFactories.add(item.name.text);
      }
    } else if (ts.isVariableStatement(n) && n.declarationList.flags & ts.NodeFlags.Const) {
      for (const declaration of n.declarationList.declarations) {
        if (!ts.isIdentifier(declaration.name) || !declaration.initializer) continue;
        if (callbackExpression(declaration.initializer)) knownCallbacks.add(declaration.name.text);
      }
    }
  }
  type ProjectProof = { readonly automatic: boolean; readonly reason?: CompilerDiagnosticCode };
  const projects = new Map<string, ProjectProof>();
  const hooks = new Map<string, ProjectProof>();
  const cssReasons = new Map<string, CompilerDiagnosticCode>();
  function projectDefault(initializer: ts.Expression | undefined): ProjectProof | undefined {
    if (
      !initializer ||
      !ts.isCallExpression(initializer) ||
      !ts.isIdentifier(initializer.expression) ||
      !projectFactories.has(initializer.expression.text) ||
      !unshadowed(initializer.expression, initializer.expression.text, ast) ||
      initializer.arguments.length > 1
    )
      return undefined;
    const argument = initializer.arguments[0];
    const automatic =
      !argument ||
      (ts.isObjectLiteralExpression(argument) &&
        argument.properties.every(
          (property) =>
            (ts.isPropertyAssignment(property) || ts.isShorthandPropertyAssignment(property)) &&
            (ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)) &&
            property.name.text === 'theme',
        ));
    if (automatic) return { automatic: true };
    const customAuthor =
      argument &&
      ts.isObjectLiteralExpression(argument) &&
      argument.properties.some(
        (property) =>
          (ts.isPropertyAssignment(property) || ts.isShorthandPropertyAssignment(property)) &&
          (ts.isIdentifier(property.name) || ts.isStringLiteral(property.name)) &&
          property.name.text === 'cssType',
      );
    return { automatic: false, reason: customAuthor ? 'custom-author' : 'unknown-project-options' };
  }
  for (const statement of ast.statements)
    if (ts.isVariableStatement(statement))
      for (const d of statement.declarationList.declarations) {
        // 项目配置只识别当前文件的顶层 const 与对应适配器命名导入；未知配置保留调试来源。
        if (statement.declarationList.flags & ts.NodeFlags.Const) {
          const safe = projectDefault(d.initializer);
          if (safe !== undefined) {
            if (ts.isIdentifier(d.name)) projects.set(d.name.text, safe);
            else if (ts.isObjectBindingPattern(d.name))
              for (const element of d.name.elements) {
                if (
                  !element.dotDotDotToken &&
                  !element.initializer &&
                  ts.isIdentifier(element.name) &&
                  (element.propertyName
                    ? (ts.isIdentifier(element.propertyName) ||
                        ts.isStringLiteral(element.propertyName)) &&
                      element.propertyName.text === 'useCss'
                    : element.name.text === 'useCss')
                )
                  hooks.set(element.name.text, safe);
              }
          } else if (
            ts.isIdentifier(d.name) &&
            d.initializer &&
            ts.isCallExpression(d.initializer)
          ) {
            const call = d.initializer;
            let selected: ProjectProof | undefined;
            if (call.arguments.length === 0) {
              if (ts.isIdentifier(call.expression)) selected = hooks.get(call.expression.text);
              else if (
                ts.isPropertyAccessExpression(call.expression) &&
                call.expression.name.text === 'useCss'
              ) {
                const owner = call.expression.expression;
                selected = ts.isIdentifier(owner)
                  ? projects.get(owner.text)
                  : projectDefault(owner);
              }
            }
            if (selected !== undefined) {
              css.add(d.name.text);
              if (selected.automatic) automaticCss.add(d.name.text);
              else cssReasons.set(d.name.text, selected.reason ?? 'unknown-project-options');
            }
          }
        }
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
  const unitBindingName = fresh('bind_unit');
  const valueBindingName = fresh('bind_value');
  const prepareName = fresh('prepare');
  const declarationName = fresh('declaration');
  const declarationBindings: string[] = [];
  const preparedBindings: string[] = [];
  let hasUnitBindings = false;
  let hasValueBindings = false;
  let hasPrepared = false;
  let hasSources = false;
  const mapper = sourceMapper(source, filename);
  const mapToOriginal = mapper.expression;
  const diagnostics: CompilerDiagnostic[] | undefined =
    (options[detailedDiagnostics] ?? options.debug === true) ? [] : undefined;
  const diagnosed = new Set<number>();
  function diagnose(code: CompilerDiagnosticCode, offset: number): void {
    if (!diagnostics || id.startsWith('../') || isAbsolute(id) || diagnosed.has(offset)) return;
    diagnosed.add(offset);
    const before = source.slice(0, offset);
    diagnostics.push({
      code,
      file: id,
      line: before.split('\n').length,
      column: offset - before.lastIndexOf('\n'),
      message: diagnosticMessages[code],
    });
  }
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
    ineligibleReason?: CompilerDiagnosticCode,
  ): TransformedExpression {
    const prefix = 'const __expression = ';
    const file = ts.createSourceFile(
      'expression.ts',
      prefix + text,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS,
    );
    walk(file, (node) => {
      if (ts.isIdentifier(node)) used.add(node.text);
    });
    const base = offset - prefix.length;
    const edits = new MagicString(text);
    let bindingsLocal: string | undefined;
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
      const callOffset = base + node.getStart(file);
      const callback = node.arguments[0];
      const inlineCallback =
        callback && (ts.isArrowFunction(callback) || ts.isFunctionExpression(callback))
          ? callback
          : undefined;
      const callableCallback = callback ? callbackExpression(callback) : undefined;
      const namedCallback =
        callback &&
        ts.isIdentifier(callback) &&
        knownCallbacks.has(callback.text) &&
        !shadowed.has(callback.text) &&
        unshadowed(callback, callback.text, file);
      const candidates =
        inlineCallback &&
        allowAutomatic &&
        automaticCss.has(node.expression.text) &&
        node.arguments.length === 1 &&
        ts.isVariableDeclaration(node.parent) &&
        node.parent.initializer === node &&
        !id.startsWith('../') &&
        !isAbsolute(id)
          ? automaticDeclarations(inlineCallback)
          : undefined;
      const automatic =
        options.bindings === 'runtime' && candidates?.length ? undefined : candidates;
      if (cssReasons.has(node.expression.text))
        diagnose(cssReasons.get(node.expression.text)!, callOffset);
      else if (!allowAutomatic) diagnose(ineligibleReason ?? 'template-context', callOffset);
      else if (options.bindings === 'runtime' && candidates?.length)
        diagnose('csp-bindings', callOffset);
      else if (!automatic) diagnose('dynamic-structure', callOffset);
      if (automatic?.length) bindingsLocal = fresh('bindings');
      // 动态读取留在回调原操作位置；仅完全静态的回调可提前准备。
      let factorySource = callback?.getText(file);
      // 模板字符串可含 HTML 解码后的结束标签；不能把它直接插入 script setup。
      const reuse =
        framework === 'vue' &&
        inlineCallback &&
        automatic?.length === 0 &&
        !/<\/script/i.test(factorySource ?? '');
      const sourceCallback = callback && (callableCallback || namedCallback) ? callback : undefined;
      if (sourceCallback && options.debug && !id.startsWith('../') && !isAbsolute(id)) {
        const offset = base + node.getStart(file);
        const before = source.slice(0, offset);
        const location = {
          file: id,
          line: before.split('\n').length,
          column: offset - before.lastIndexOf('\n'),
        };
        if (reuse) factorySource = `${sourceName}(${factorySource}, ${JSON.stringify(location)})`;
        else {
          edits.appendLeft(sourceCallback.getStart(file) - prefix.length, `${sourceName}(`);
          edits.appendLeft(sourceCallback.end - prefix.length, `, ${JSON.stringify(location)})`);
        }
        hasSources = true;
      }
      if (!inlineCallback) return;
      const builder = inlineCallback.parameters[0]?.name;
      if (!builder || !ts.isIdentifier(builder)) return;
      // 目前自动提升限定为直接模板使用点；脚本快照和派生类保留运行时合同。
      if (automatic) {
        if (automatic.length === 0) {
          // 静态源码摘要随 HMR 内容改变，不把旧站点缓存当作新样式。
          const key = createHash('sha256')
            .update(
              id +
                ':' +
                (base + inlineCallback.getStart(file)) +
                ':' +
                inlineCallback.getText(file),
            )
            .digest('hex');
          if (reuse) {
            const name = fresh('static');
            reusedCallback = inlineCallback;
            preparedBindings.push(
              `const ${name} = ${mapToOriginal(`${prepareName}(${factorySource}, ${JSON.stringify(key)})`, base + inlineCallback.getStart(file))};`,
            );
            edits.overwrite(
              inlineCallback.getStart(file) - prefix.length,
              inlineCallback.end - prefix.length,
              name,
            );
          } else {
            edits.prependLeft(inlineCallback.getStart(file) - prefix.length, `${prepareName}(`);
            edits.appendLeft(inlineCallback.end - prefix.length, `, ${JSON.stringify(key)})`);
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
            edits.overwrite(
              declaration.call.getStart(file) - prefix.length,
              declaration.call.end - prefix.length,
              `${declaration.property.getText(file)}.raw(${valueBindingName}(${bindingsLocal}, ${JSON.stringify(name)}, ${helper}, ${argument}))`,
            );
            hasValueBindings = true;
            continue;
          }
          const argumentsText = declaration.call.arguments
            .map((arg) => arg.getText(file))
            .join(',');
          const plan = fresh('unit_plan');
          declarationBindings.push(`const ${plan} = ${JSON.stringify(declaration.alternatives)};`);
          edits.overwrite(
            declaration.call.getStart(file) - prefix.length,
            declaration.call.end - prefix.length,
            `${declaration.property.getText(file)}.raw(${unitBindingName}(${bindingsLocal}, ${JSON.stringify(name)}, [${argumentsText}], ${plan}, ${JSON.stringify(declaration.unit)}, ${JSON.stringify(declaration.separator)}))`,
          );
          hasUnitBindings = true;
        }
      }
    });
    return { code: edits.toString(), bindingsLocal };
  }
  return {
    source,
    output,
    ast,
    css,
    fresh,
    error,
    expression,
    scriptStart,
    scriptEnd,
    mapToOriginal,
    finish(extra = '') {
      const changed = hasUnitBindings || hasValueBindings || hasSources || hasPrepared;
      if (!changed && !diagnostics?.length) return null;
      if (!changed)
        return { ...mapper.finish(output), diagnostics: Object.freeze([...diagnostics!]) };
      if (hasSources)
        output.appendLeft(
          scriptStart,
          `\nimport { withStyleSource as ${sourceName} } from '@zerodep-css/${framework}/compiler-runtime';\n`,
        );
      if (hasUnitBindings)
        output.appendLeft(
          scriptStart,
          `\nimport { bindUnit as ${unitBindingName} } from '@zerodep-css/${framework}/compiler-runtime';\n`,
        );
      if (hasValueBindings)
        output.appendLeft(
          scriptStart,
          `\nimport { bindValue as ${valueBindingName} } from '@zerodep-css/${framework}/compiler-runtime';\n`,
        );
      if (hasPrepared)
        output.appendLeft(
          scriptStart,
          `\nimport { prepareStyle as ${prepareName} } from '@zerodep-css/${framework}/compiler-runtime';\n`,
        );
      if (declarationBindings.length)
        output.appendLeft(
          scriptStart,
          `\nimport { createDeclarationBinding as ${declarationName} } from '@zerodep-css/${framework}/compiler-runtime';\n`,
        );
      output.appendLeft(scriptEnd, '\n' + declarationBindings.join('\n') + '\n');
      output.appendLeft(scriptEnd, '\n' + preparedBindings.join('\n') + '\n');
      output.appendLeft(scriptEnd, '\n' + extra + '\n');
      const result = mapper.finish(output);
      return diagnostics?.length
        ? { ...result, diagnostics: Object.freeze([...diagnostics]) }
        : result;
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
  let sourceDebug = options.debug;
  let logger: { info(message: string): void } | undefined;
  const detailed = options.debug === true;
  return {
    name: `zerodep-${framework}-css`,
    enforce: 'pre',
    configResolved(config) {
      root ??= config.root;
      sourceDebug ??= config.command === 'serve' && !config.isProduction;
      logger = config.logger;
    },
    transform(source, id) {
      if (id.includes('?') || !id.endsWith('.' + framework)) return null;
      const internalOptions: InternalCompilerOptions = {
        ...options,
        root,
        debug: sourceDebug,
        [detailedDiagnostics]: detailed,
      };
      const result = transform(source, id, internalOptions);
      if (detailed)
        for (const diagnostic of result?.diagnostics ?? []) {
          try {
            logger?.info(
              `[zerodep css] ${diagnostic.file}:${diagnostic.line}:${diagnostic.column} [${diagnostic.code}] ${diagnostic.message}`,
            );
          } catch {
            // 诊断输出失败不能改变作者样式的正常转换和运行时回退。
          }
        }
      return result;
    },
  };
}

export type TransformContext = ReturnType<typeof session>;
