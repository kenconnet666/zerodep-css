// 隔离研究原型：不修改生产源码，不执行任意组件模块或 eval 用户回调。
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import ts from 'typescript';
import { root } from '../../scripts/lib/environment.mjs';

export const bridge = `
const artifacts = new WeakMap();
const inspections = new WeakMap();
export function attach(factory, artifact) { artifacts.set(factory, artifact); return factory; }
export function preheated(factory, standard, config, debug) {
  if (!standard) return;
  const a = artifacts.get(factory);
  if (!a || a.version !== 1) return;
  if (a.kind === 'full' && (JSON.stringify(config) !== JSON.stringify(a.config) ||
    (a.metadata.debug ?? debug ?? !!a.metadata.source) !== a.debug)) return;
  return a;
}
export function inspection(record) { return inspections.get(record); }
export function materialize(a, config, debug, compileProgram, namedId, validateRecord) {
  const metadata = a.metadata;
  const enabled = metadata.debug ?? debug ?? !!metadata.source;
  if (a.kind === 'ir') return compileProgram(a.program, config, {...metadata, debug:enabled});
  if (a.kind === 'full') {
    inspections.set(a.compiled.record, a.inspection);
    return a.compiled;
  }
  const record=Object.freeze({kind:'class',id:namedId(config,'class',a.body,metadata.name),body:a.body,
    dependencies:Object.freeze([]),...(metadata.name===undefined?{}:{name:metadata.name}),
    ...(enabled?{debug:Object.freeze({declarations:a.count,sources:Object.freeze(metadata.source?[metadata.source]:[])})}:{})});
  if (a.kind === 'template') {
    // 只拼接语法已证明的外层结构；不对 CSS 字符串做占位符全局替换。
    const rule='.'+record.id+a.ruleTail;
    inspections.set(record,{rules:[config.layer?'@layer '+config.layer+'{'+rule+'}':rule],registrations:[]});
  } else validateRecord(record,config);
  return {record,dependencies:[]};
}`;

export function prototypePlugin({ patch = true, counts = false } = {}) {
  return {
    name: 'research-preheat',
    setup(bundler) {
      bundler.onResolve({ filter: /^research:preheat$/ }, () => ({
        path: 'bridge',
        namespace: 'research',
      }));
      bundler.onLoad({ filter: /.*/, namespace: 'research' }, () => ({
        contents: bridge,
        loader: 'js',
      }));
      bundler.onLoad(
        { filter: /[\\/]core[\\/]src[\\/](runtime|serialize)\.ts$/ },
        async ({ path }) => {
          let source = await readFile(path, 'utf8');
          if (path === resolve(root, 'core/src/runtime.ts') && patch) {
            source =
              `import {preheated,materialize,inspection} from 'research:preheat';\n` + source;
            const needle = 'const definition = buildStyleDefinition(factory, cssType);';
            assert(source.includes(needle));
            source = source.replace(
              needle,
              `
          const artifact=preheated(factory,cssType===Css,config,collectDebug);
          if(artifact){
            const result=materialize(artifact,config,collectDebug,compileProgram,namedId,validateRecord);
            ensure(result);
            if(cacheKey){if(compiledStyles.size>=256)compiledStyles.delete(compiledStyles.keys().next().value!);compiledStyles.set(cacheKey,result);}
            return result.record.id;
          }
          ${needle}`,
            );
            const inspect = '...inspectStylesheet(renderRecord(record, config))';
            assert(source.includes(inspect));
            source = source.replace(
              inspect,
              '...(inspection(record) ?? inspectStylesheet(renderRecord(record, config)))',
            );
          }
          if (path === resolve(root, 'core/src/serialize.ts') && counts) {
            const needle = 'const ast = parse(text, {';
            assert(source.includes(needle));
            source = source.replace(
              needle,
              'globalThis.__preheatParses[context]=(globalThis.__preheatParses[context]??0)+1; ' +
                needle,
            );
          }
          return { contents: source, loader: 'ts' };
        },
      );
    },
  };
}

export function freeze(value) {
  if (value && typeof value === 'object') {
    Object.values(value).forEach(freeze);
    Object.freeze(value);
  }
  return value;
}

// 先由现有分析器证明安全，再由更窄的 AST 解释器生成操作；未知语法立即回退。
// 不支持 switch 等现有分析器的全部能力；原型只用于评估成本，不扩大产品支持范围。
export function staticDefinition(source, api, automaticDeclarations) {
  try {
    const ast = ts.createSourceFile(
      'probe.ts',
      'const factory=' + source,
      ts.ScriptTarget.Latest,
      true,
      ts.ScriptKind.TS,
    );
    if (ast.parseDiagnostics.length) return;
    const fn = ast.statements[0]?.declarationList?.declarations[0]?.initializer;
    if (!fn || automaticDeclarations(fn)?.length !== 0) return;
    let unsafe = false,
      count = 0;
    function audit(n) {
      if (
        ++count > 4000 ||
        ts.isVariableStatement(n) ||
        ts.isFunctionDeclaration(n) ||
        ts.isClassDeclaration(n)
      )
        unsafe = true;
      ts.forEachChild(n, audit);
    }
    audit(fn);
    if (unsafe) return;
    function literal(n) {
      if (
        ts.isParenthesizedExpression(n) ||
        ts.isAsExpression(n) ||
        ts.isSatisfiesExpression(n) ||
        ts.isNonNullExpression(n)
      )
        return literal(n.expression);
      if (ts.isStringLiteralLike(n)) return n.text;
      if (ts.isNumericLiteral(n)) return Number(n.text);
      if (n.kind === ts.SyntaxKind.TrueKeyword) return true;
      if (n.kind === ts.SyntaxKind.FalseKeyword) return false;
      if (n.kind === ts.SyntaxKind.NullKeyword) return null;
      if (ts.isPrefixUnaryExpression(n)) {
        const v = literal(n.operand);
        if (n.operator === ts.SyntaxKind.MinusToken) return -v;
        if (n.operator === ts.SyntaxKind.PlusToken) return +v;
        if (n.operator === ts.SyntaxKind.ExclamationToken) return !v;
      }
      if (ts.isObjectLiteralExpression(n))
        return Object.fromEntries(
          n.properties.map((p) => {
            if (!ts.isPropertyAssignment(p) || p.name.getText(ast) !== 'debug')
              throw Error('unsupported object');
            return ['debug', literal(p.initializer)];
          }),
        );
      throw Error('not a literal');
    }
    function callback(f) {
      const name = f.parameters[0].name.text;
      return (builder) => {
        function expr(n) {
          if (ts.isIdentifier(n) && n.text === name) return builder;
          if (ts.isPropertyAccessExpression(n)) return expr(n.expression)[n.name.text];
          if (ts.isCallExpression(n) && ts.isPropertyAccessExpression(n.expression)) {
            const receiver = expr(n.expression.expression);
            return receiver[n.expression.name.text](
              ...n.arguments.map((a) =>
                ts.isArrowFunction(a) || ts.isFunctionExpression(a) ? callback(a) : literal(a),
              ),
            );
          }
          throw Error('unsupported expression');
        }
        function visit(n) {
          if (ts.isBlock(n)) {
            n.statements.forEach(visit);
            return;
          }
          if (ts.isEmptyStatement(n)) return;
          if (ts.isIfStatement(n)) {
            const selected = literal(n.expression) ? n.thenStatement : n.elseStatement;
            if (selected) visit(selected);
            return;
          }
          if (ts.isExpressionStatement(n)) {
            expr(n.expression);
            return;
          }
          throw Error('unsupported statement');
        }
        visit(f.body);
      };
    }
    const factory = callback(fn);
    return { factory, definition: api.buildStyleDefinition(factory) };
  } catch {
    return;
  }
}

export function artifactFor(kind, definition, api, config) {
  const metadata = definition.metadata;
  const count = (nodes) =>
    nodes.reduce((sum, n) => sum + (n.kind === 'declaration' ? 1 : count(n.children)), 0);
  if (kind === 'ir') return freeze({ version: 1, kind, program: definition.program, metadata });
  const debug = metadata.debug ?? !!metadata.source;
  const compiled = api.compileProgram(definition.program, config, { ...metadata, debug });
  assert.equal(compiled.dependencies.length, 0);
  if (kind === 'template') {
    const inspected = api.inspectStylesheet('.preheat' + '{' + compiled.record.body + '}');
    assert.equal(inspected.rules.length, 1);
    assert.equal(inspected.registrations.length, 0);
    assert(inspected.rules[0].startsWith('.preheat{'));
    return freeze({
      version: 1,
      kind,
      metadata,
      body: compiled.record.body,
      count: count(definition.program),
      ruleTail: inspected.rules[0].slice('.preheat'.length),
    });
  }
  if (kind === 'body')
    return freeze({
      version: 1,
      kind,
      metadata,
      body: compiled.record.body,
      count: count(definition.program),
    });
  return freeze({
    version: 1,
    kind,
    metadata,
    config,
    debug,
    compiled,
    inspection: api.inspectStylesheet(api.renderRecord(compiled.record, config)),
  });
}
