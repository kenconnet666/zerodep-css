import { generate, ident, lexer, parse, walk, type CssNode, type StyleSheet } from 'css-tree';
import { hashText } from './hash.js';
import { validateStyleName, type StyleDebug, type StyleMetadata } from './style-metadata.js';
import type {
  CssValue,
  Declaration,
  Frame,
  GlobalNode,
  KeyframesDefinition,
  StyleProgram,
  StylesheetDefinition,
} from './style-program.js';

export interface OutputConfig {
  readonly namespace: string;
  readonly layers: readonly string[];
  readonly layer: string | null;
  readonly format: 'native-v1';
}
export type RecordKind = 'class' | 'keyframes' | 'global' | 'layers';
export interface StyleRecord {
  readonly id: string;
  readonly kind: RecordKind;
  readonly body: string;
  readonly dependencies: readonly string[];
  readonly name?: string;
  readonly debug?: StyleDebug;
}
export interface PropertyRegistration {
  readonly name: string;
  readonly body: string;
}
export interface StylesheetInspection {
  readonly rules: readonly string[];
  readonly registrations: readonly PropertyRegistration[];
}
export interface CompiledStyle {
  readonly record: StyleRecord;
  readonly dependencies: readonly StyleRecord[];
}
/** 相同 CSS 的引用路径可能不同；依赖做并集，不把它误判为哈希碰撞。 */
export function mergeRecord(previous: StyleRecord, next: StyleRecord): StyleRecord {
  if (
    previous.id !== next.id ||
    previous.kind !== next.kind ||
    previous.body !== next.body ||
    previous.name !== next.name
  )
    throw new Error('CSS hash/record collision: ' + next.id);
  let debug = previous.debug;
  if (next.debug) {
    const sources = new Map(
      [...(previous.debug?.sources ?? []), ...next.debug.sources].map((source) => [
        JSON.stringify(source),
        source,
      ]),
    );
    debug = Object.freeze({
      declarations: Math.max(previous.debug?.declarations ?? 0, next.debug.declarations),
      sources: Object.freeze([...sources.values()].slice(0, 32)),
    });
  }
  if (
    next.dependencies.every((id) => previous.dependencies.includes(id)) &&
    JSON.stringify(debug) === JSON.stringify(previous.debug)
  )
    return previous;
  return Object.freeze({
    ...previous,
    ...(debug ? { debug } : {}),
    dependencies: Object.freeze(
      [...new Set([...previous.dependencies, ...next.dependencies])].sort(),
    ),
  });
}

function parsed(
  text: string,
  context: 'value' | 'selectorList' | 'declaration' | 'stylesheet' | 'atrule',
): CssNode {
  const ast = parse(text, {
    context,
    parseCustomProperty: true,
    onParseError(error) {
      throw error;
    },
  });
  walk(ast, (node) => {
    if (node.type === 'Raw') throw new TypeError('Unsupported or invalid CSS syntax: ' + text);
  });
  return ast;
}
function sheet(text: string): StyleSheet {
  const ast = parsed(text, 'stylesheet');
  if (ast.type !== 'StyleSheet') throw new TypeError('Expected a stylesheet.');
  let state: 'imports' | 'namespaces' | 'body' = 'imports';
  ast.children.forEach((node) => {
    if (node.type === 'Comment') return;
    if (node.type === 'Atrule') {
      const name = ident.decode(node.name).toLowerCase();
      if (name === 'charset')
        throw new TypeError('@charset is not supported in CSSOM/style elements.');
      if (name === 'import' || name === 'namespace') {
        if (state === 'body' || (name === 'import' && state === 'namespaces'))
          throw new TypeError('Invalid stylesheet preamble order.');
        if (name === 'namespace') state = 'namespaces';
        return;
      }
      if (name === 'layer' && !node.block) return;
    }
    state = 'body';
  });
  walk(ast, {
    visit: 'Atrule',
    enter(node) {
      const name = ident.decode(node.name).toLowerCase();
      if ((name === 'import' || name === 'namespace' || name === 'charset') && this.block)
        throw new TypeError('Preamble statements cannot be nested.');
      if (name === 'font-face' || name === 'property' || name === 'counter-style')
        validateDescriptors(name, node);
    },
  });
  return ast;
}
function validateDescriptors(name: string, node: Extract<CssNode, { type: 'Atrule' }>) {
  const declarations = new Map<string, Extract<CssNode, { type: 'Declaration' }>>();
  node.block?.children.forEach((child) => {
    if (child.type !== 'Declaration')
      throw new TypeError('@' + name + ' only accepts descriptors.');
    if (child.important) throw new TypeError('Descriptors do not accept !important.');
    declarations.set(ident.decode(child.property).toLowerCase(), child);
  });
  if (name === 'font-face' && (!declarations.has('font-family') || !declarations.has('src')))
    throw new TypeError('@font-face requires font-family and src.');
  if (name === 'counter-style') {
    const system = declarations.get('system');
    const systemText = system ? generate(system.value).toLowerCase() : 'symbolic';
    if (systemText.startsWith('extends')) {
      if (declarations.has('symbols') || declarations.has('additive-symbols'))
        throw new TypeError('An extends counter style cannot define symbols.');
    } else if (systemText === 'additive') {
      if (!declarations.has('additive-symbols'))
        throw new TypeError('An additive counter style requires additive-symbols.');
    } else if (!declarations.has('symbols')) throw new TypeError('Counter style requires symbols.');
  }
  if (name !== 'property') return;
  const syntaxNode = declarations.get('syntax')?.value;
  const syntaxItems = syntaxNode?.type === 'Value' ? syntaxNode.children.toArray() : [];
  if (syntaxItems.length !== 1 || syntaxItems[0]?.type !== 'String')
    throw new TypeError('@property requires a quoted syntax descriptor.');
  const syntax = syntaxItems[0].value;
  const inherited = declarations.get('inherits');
  if (!inherited || !['true', 'false'].includes(generate(inherited.value).toLowerCase()))
    throw new TypeError('@property requires inherits:true or inherits:false.');
  const initial = declarations.get('initial-value');
  if (syntax !== '*' && !initial) throw new TypeError('Typed @property requires an initial-value.');
  if (syntax !== '*' && initial) {
    const result = lexer.match(syntax, initial.value);
    if (result.error)
      throw new TypeError(
        '@property initial-value does not match its syntax: ' + result.error.message,
      );
    walk(initial.value, (child) => {
      if (child.type === 'Function' && ['var', 'env', 'attr'].includes(child.name.toLowerCase()))
        throw new TypeError('@property initial-value must be computationally independent.');
      if (
        child.type === 'Dimension' &&
        ['em', 'rem', 'ex', 'rex', 'ch', 'rch', 'cap', 'rcap', 'ic', 'ric', 'lh', 'rlh'].includes(
          child.unit.toLowerCase(),
        )
      )
        throw new TypeError('@property initial-value cannot use font-relative units.');
      if (
        child.type === 'Identifier' &&
        ['currentcolor', 'inherit', 'initial', 'unset', 'revert', 'revert-layer'].includes(
          child.name.toLowerCase(),
        )
      )
        throw new TypeError('@property initial-value must be computationally independent.');
    });
  }
}
function selector(text: string, relative: boolean): string {
  const ast = parsed(text, 'selectorList');
  let nesting = false;
  walk(ast, (node) => {
    if (node.type === 'NestingSelector') nesting = true;
  });
  if (relative && !nesting)
    throw new TypeError(
      'Relative selector must contain an actual & selector, not just a string containing &.',
    );
  if (!relative && nesting)
    throw new TypeError('Global selectors cannot contain a nesting selector.');
  return generate(ast);
}
function group(name: string, prelude: string, body: string, nested = false): string {
  const text = `${name}${prelude ? ' ' + prelude : ''}{${body}}`;
  let ast: CssNode;
  if (nested) {
    const wrapper = parsed(`.z{${text}}`, 'stylesheet');
    if (wrapper.type !== 'StyleSheet' || wrapper.children.size !== 1)
      throw new TypeError('Invalid nested group.');
    const parent = wrapper.children.first;
    if (parent?.type !== 'Rule' || parent.block.children.size !== 1)
      throw new TypeError('Invalid nested group boundary.');
    ast = parent.block.children.first!;
  } else ast = parsed(text, 'atrule');
  if (ast.type !== 'Atrule' || '@' + ast.name !== name)
    throw new TypeError('Invalid at-rule header.');
  return generate(ast);
}
function literal(value: CssValue, animation: (definition: KeyframesDefinition) => string): string {
  if (value.kind === 'animations') return value.definitions.map(animation).join(',');
  const text =
    value.kind === 'variable'
      ? `var(${value.name}${value.fallback === undefined ? '' : ',' + value.fallback})`
      : String(value.value);
  return generate(parsed(text, 'value'));
}
function declaration(
  node: Declaration,
  animation: (definition: KeyframesDefinition) => string,
): string {
  const value = literal(node.value, animation);
  const ast = parsed(
    `${node.property}:${value}${node.important ? '!important' : ''}`,
    'declaration',
  );
  if (ast.type !== 'Declaration' || ident.decode(ast.property) !== ident.decode(node.property))
    throw new TypeError('Invalid CSS property name.');
  if (Boolean(ast.important) !== node.important)
    throw new TypeError('Use important() rather than adding !important to a value.');
  if (!value && !node.property.startsWith('--'))
    throw new TypeError('Empty CSS declaration value.');
  return generate(ast) + ';';
}
function styleBody(
  nodes: StyleProgram,
  animation: (definition: KeyframesDefinition) => string,
): string {
  return nodes
    .map((node) => {
      switch (node.kind) {
        case 'declaration':
          return declaration(node, animation);
        case 'style-rule':
          return `${selector(node.selector, node.relative)}{${styleBody(node.children, animation)}}`;
        case 'style-group':
          return group(node.name, node.prelude, styleBody(node.children, animation), true);
        default:
          throw new TypeError('Unknown style node.');
      }
    })
    .join('');
}
export function namedId(
  config: OutputConfig,
  kind: 'class' | 'keyframes',
  body: string,
  name?: string,
): string {
  if (name !== undefined) validateStyleName(name);
  return (
    config.namespace +
    (kind === 'keyframes' ? '-k-' : '-c-') +
    (name === undefined ? '' : name + '-') +
    hashText(JSON.stringify([config, kind, body]))
  );
}
export function renderRecord(record: StyleRecord, config: OutputConfig): string {
  let css: string;
  switch (record.kind) {
    case 'class':
      css = `.${record.id}{${record.body}}`;
      break;
    case 'keyframes':
      css = `@keyframes ${record.id}{${record.body}}`;
      break;
    case 'global':
      return record.body;
    case 'layers':
      return record.body;
    default:
      throw new TypeError('Unknown record kind.');
  }
  return config.layer ? `@layer ${config.layer}{${css}}` : css;
}
export function validateRecord(record: StyleRecord, config: OutputConfig): void {
  const ast = sheet(renderRecord(record, config));
  if (record.kind !== 'class' && record.kind !== 'keyframes') return;
  let nodes = ast.children.toArray();
  if (config.layer) {
    const wrapper = nodes[0];
    if (
      nodes.length !== 1 ||
      wrapper?.type !== 'Atrule' ||
      wrapper.name !== 'layer' ||
      !wrapper.block
    )
      throw new TypeError('Invalid named rule layer wrapper.');
    nodes = wrapper.block.children.toArray();
  }
  if (nodes.length !== 1)
    throw new TypeError('A named resource must contain exactly one root rule.');
  const node = nodes[0]!;
  if (record.kind === 'class') {
    if (node.type !== 'Rule' || !node.prelude || generate(node.prelude) !== '.' + record.id)
      throw new TypeError('Invalid class resource selector.');
  } else {
    if (node.type !== 'Atrule' || node.name !== 'keyframes' || !node.block)
      throw new TypeError('Invalid keyframe resource.');
    walk(node.block, (child) => {
      if (child.type === 'Declaration' && child.important)
        throw new TypeError('Keyframes cannot contain !important.');
    });
  }
}
export function splitRules(css: string): readonly string[] {
  return sheet(css)
    .children.toArray()
    .map((node) => generate(node));
}
export function canonicalSheet(css: string): string {
  return generate(sheet(css));
}
function propertyRegistrations(ast: StyleSheet): readonly PropertyRegistration[] {
  const definitions = new Map<string, string>();
  walk(ast, {
    visit: 'Atrule',
    enter(node) {
      if (ident.decode(node.name).toLowerCase() !== 'property') return;
      if (node.prelude?.type !== 'AtrulePrelude') throw new TypeError('Missing @property name.');
      const parts = node.prelude.children.toArray();
      if (parts.length !== 1 || parts[0]?.type !== 'Identifier')
        throw new TypeError('Invalid @property name.');
      const name = ident.decode(parts[0].name);
      if (!name.startsWith('--') || name.length === 2)
        throw new TypeError('Invalid @property custom name.');
      const body = generate(node.block!);
      if (definitions.has(name) && definitions.get(name) !== body)
        throw new TypeError('Conflicting @property definitions: ' + name);
      definitions.set(name, body);
    },
  });
  return [...definitions].map(([name, body]) => ({ name, body }));
}
/** 同一写入事务的一次解析同时产出规则和注册声明，不建立额外缓存。 */
export function inspectStylesheet(css: string): StylesheetInspection {
  const ast = sheet(css);
  const registrations = propertyRegistrations(ast);
  return { rules: ast.children.toArray().map((node) => generate(node)), registrations };
}
/** 恢复记录已有 DOM/规则，不为只读注册检查生成用不到的规则字符串。 */
export function registrations(css: string): readonly PropertyRegistration[] {
  return propertyRegistrations(sheet(css));
}
export function compileProgram(
  program: StyleProgram,
  config: OutputConfig,
  metadata: Readonly<StyleMetadata> = {},
): CompiledStyle {
  const context = compiler(config);
  const body = styleBody(program, context.animation);
  const base = context.named('class', body, [...context.resources.keys()]);
  const count = (nodes: StyleProgram): number =>
    nodes.reduce(
      (total, node) => total + (node.kind === 'declaration' ? 1 : count(node.children)),
      0,
    );
  const record: StyleRecord = Object.freeze({
    ...base,
    ...(metadata.name === undefined
      ? {}
      : { id: namedId(config, 'class', body, metadata.name), name: metadata.name }),
    ...(metadata.debug
      ? {
          debug: Object.freeze({
            declarations: count(program),
            sources: Object.freeze(metadata.source ? [metadata.source] : []),
          }),
        }
      : {}),
  });
  validateRecord(record, config);
  return { record, dependencies: [...context.resources.values()] };
}
function compiler(config: OutputConfig) {
  const resources = new Map<string, StyleRecord>();
  const visiting = new Set<KeyframesDefinition>();
  const named = (
    kind: 'class' | 'keyframes',
    body: string,
    dependencies: readonly string[],
  ): StyleRecord =>
    Object.freeze({
      id: namedId(config, kind, body),
      kind,
      body,
      dependencies: Object.freeze([...dependencies]),
    });
  const animation = (definition: KeyframesDefinition): string => {
    if (
      !definition ||
      definition.kind !== 'keyframes' ||
      !Array.isArray(definition.frames) ||
      !definition.frames.length
    )
      throw new TypeError('Expected a nonempty keyframes definition.');
    if (visiting.has(definition)) throw new TypeError('Cyclic animation resource dependency.');
    visiting.add(definition);
    try {
      const dependencies = new Set<string>();
      const resolve = (value: KeyframesDefinition) => {
        const id = animation(value);
        dependencies.add(id);
        return id;
      };
      const body = (definition.frames as readonly Frame[])
        .map(
          (frame) =>
            `${frame.offsets.join(',')}{${frame.declarations.map((d) => declaration(d, resolve)).join('')}}`,
        )
        .join('');
      const record = named('keyframes', body, [...dependencies]);
      const previous = resources.get(record.id);
      if (previous && previous.body !== record.body) throw new Error('Animation hash collision.');
      validateRecord(record, config);
      resources.set(record.id, previous ? mergeRecord(previous, record) : record);
      return record.id;
    } finally {
      visiting.delete(definition);
    }
  };
  return { resources, named, animation };
}
export function compileAnimation(
  definition: KeyframesDefinition,
  config: OutputConfig,
): CompiledStyle {
  const context = compiler(config);
  const id = context.animation(definition);
  const record = context.resources.get(id)!;
  return { record, dependencies: [...context.resources.values()].filter((r) => r.id !== id) };
}
export function compileGlobal(
  definition: StylesheetDefinition,
  id: string,
  config: OutputConfig,
): CompiledStyle {
  const context = compiler(config);
  const nodes = (items: readonly GlobalNode[]): string =>
    items
      .map((node) => {
        switch (node.kind) {
          case 'style-rule':
            return `${selector(node.selector, false)}{${styleBody(node.children, context.animation)}}`;
          case 'global-group':
            return group(node.name, node.prelude, nodes(node.children));
          case 'descriptor-block':
            return group(
              node.name,
              node.prelude,
              node.declarations.map((d) => declaration(d, context.animation)).join(''),
            );
          case 'page-rule':
            return group(
              '@page',
              node.selector,
              node.children
                .map((c) =>
                  c.kind === 'declaration'
                    ? declaration(c, context.animation)
                    : group(
                        c.name,
                        c.prelude,
                        c.declarations.map((d) => declaration(d, context.animation)).join(''),
                      ),
                )
                .join(''),
            );
          case 'statement':
            return generate(parsed(`${node.name} ${node.prelude};`, 'atrule'));
          case 'keyframes': {
            const compiled = compileAnimation(node, config);
            for (const dependency of compiled.dependencies) {
              const previous = context.resources.get(dependency.id);
              context.resources.set(
                dependency.id,
                previous ? mergeRecord(previous, dependency) : dependency,
              );
            }
            return renderRecord(compiled.record, { ...config, layer: null });
          }
          case 'raw-rule':
            return canonicalSheet(node.css);
          default:
            throw new TypeError('Unknown global node.');
        }
      })
      .join('');
  const body = canonicalSheet(nodes(definition.rules));
  return {
    record: Object.freeze({
      id,
      kind: 'global',
      body,
      dependencies: Object.freeze([...context.resources.keys()]),
    }),
    dependencies: [...context.resources.values()],
  };
}
