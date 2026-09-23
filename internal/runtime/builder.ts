import {
  descriptorMetadata,
  functionalPseudos,
  helperGroups,
  keywordGroups,
  propertyMetadata,
  simplePseudos,
  unitFamilies,
} from './generated/metadata.js';
import {
  type NumericAlternatives,
  type PropertyMetadata,
  type CssValue,
  type Declaration,
  type DescriptorBlock,
  type Frame,
  type GlobalNode,
  type KeyframesDefinition,
  type StyleNode,
  type StyleProgram,
  type StylesheetDefinition,
  type DeclarationFactory,
  type FrameBuilder,
  type FrameOffset,
  type GlobalBuilder,
  type GlobalFactory,
  type PageBuilder,
  type StylesheetBuilder,
  type StylesheetFactory,
  type StyleFactory,
  isCssVariable,
  validateCustomName,
  Css,
  type CssConstructor,
  assertValueStructure,
  normalizeCssText,
  validatePropertyName,
  getStyleSource,
  setStyleConfig,
  validateStyleName,
  type StyleMetadata,
} from '@zerodep-css/core/internal';

import { normalizeStyleProgram } from './normalize.js';

import { ident } from './css-parser.js';

type Table = Readonly<Record<string, PropertyMetadata>>;
type Factory = (builder: never) => unknown;
interface Session {
  active: boolean;
  cssType: CssConstructor;
  depth: number;
  metadata?: StyleMetadata;
}
const simpleSet = /* @__PURE__ */ new Set(simplePseudos);
const propertyNames = /* @__PURE__ */ Object.keys(propertyMetadata);
const functionalSet = /* @__PURE__ */ new Set(functionalPseudos);
// 固定元数据的按需索引，不记录业务值、框架状态或构建实例。
const keywordValues: (ReadonlySet<string> | undefined)[] = [];
function keywordSet(group: number): ReadonlySet<string> {
  return (keywordValues[group] ??= new Set(Object.values(keywordGroups[group]!)));
}
const marginBoxes = new Set([
  'top-left-corner',
  'top-left',
  'top-center',
  'top-right',
  'top-right-corner',
  'bottom-left-corner',
  'bottom-left',
  'bottom-center',
  'bottom-right',
  'bottom-right-corner',
  'left-top',
  'left-middle',
  'left-bottom',
  'right-top',
  'right-middle',
  'right-bottom',
]);

function alive(session: Session) {
  if (!session.active)
    throw new TypeError('Style builders may only be used inside their synchronous callback.');
}
function text(value: unknown, name: string, allowEmpty = false): asserts value is string {
  if (typeof value !== 'string' || (!allowEmpty && !value.trim()))
    throw new TypeError(name + ' must be a nonempty string.');
}
function invoke(factory: Factory, builder: unknown) {
  if (typeof factory !== 'function') throw new TypeError('Expected a synchronous style callback.');
  const result = factory(builder as never);
  if (result !== undefined) {
    if (result instanceof Promise) void result.catch(() => {});
    throw new TypeError('Style callbacks must return void and must not be async.');
  }
}
function withSession<T>(
  action: (session: Session) => T,
  cssType: CssConstructor = Css,
  metadata?: StyleMetadata,
): T {
  const session = { active: true, cssType, depth: 0, metadata };
  try {
    return action(session);
  } finally {
    session.active = false;
  }
}
function numeric(values: readonly number[], alternatives: NumericAlternatives) {
  return alternatives.some(
    (plan) =>
      plan.length === values.length &&
      plan.every((rule, index) => {
        const value = values[index]!;
        return (
          Number.isFinite(value) &&
          (!rule.integer || Number.isInteger(value)) &&
          (rule.min === undefined || value >= rule.min) &&
          (rule.max === undefined || value <= rule.max)
        );
      }),
  );
}
function valueNode(value: unknown, raw: boolean): CssValue {
  if (!raw && isAnimation(value))
    return Object.freeze({ kind: 'animations', definitions: Object.freeze([value]) });
  if (!raw && Array.isArray(value) && value.length && value.every(isAnimation))
    return Object.freeze({ kind: 'animations', definitions: Object.freeze([...value]) });
  if (isCssVariable(value))
    return Object.freeze({
      kind: 'variable',
      name: value.name,
      ...(value.fallback !== undefined ? { fallback: normalizeCssText(value.fallback) } : {}),
    });
  if (typeof value !== 'string' && typeof value !== 'number')
    throw new TypeError('Expected a CSS string, number or explicit cssVar reference.');
  if (typeof value === 'number' && !Number.isFinite(value))
    throw new TypeError('CSS numbers must be finite.');
  return Object.freeze({ kind: raw ? 'raw' : 'literal', value });
}
function isAnimation(value: unknown): value is KeyframesDefinition {
  return (
    typeof value === 'object' &&
    value !== null &&
    'kind' in value &&
    value.kind === 'keyframes' &&
    'frames' in value &&
    Array.isArray(value.frames)
  );
}
function declarations(
  table: Table,
  target: StyleNode[] | Declaration[],
  session: Session,
  important: boolean,
  extra: Record<string, unknown> | (() => Record<string, unknown>) = {},
  custom = true,
): unknown {
  const cache = new Map<string, unknown>();
  const append = (property: string, value: unknown, raw = false) => {
    alive(session);
    if (value === undefined || value === null) return;
    // 即使后续同属性写入覆盖它，也不能吞掉原调用中的结构错误。
    if (raw && typeof value === 'string') {
      const normalized = normalizeCssText(value);
      assertValueStructure(normalized, ident.decode(property).startsWith('--'));
      value = normalized;
    }
    if (isCssVariable(value)) {
      validateCustomName(value.name);
      assertValueStructure(
        `var(${value.name}${value.fallback === undefined ? '' : ',' + value.fallback})`,
      );
    }
    target.push(
      Object.freeze({ kind: 'declaration', property, value: valueNode(value, raw), important }),
    );
  };
  let helpers = typeof extra === 'function' ? undefined : extra;
  for (const name of helpers ? Object.keys(helpers) : [])
    if (Object.hasOwn(table, name))
      throw new TypeError('Builder helper shadows a CSS property: ' + name);
  return new Proxy(Object.create(null) as object, {
    get(_target, key) {
      if (typeof key !== 'string' || key === 'then') return undefined;
      alive(session);
      if (!Object.hasOwn(table, key)) {
        // 普通属性不分配结构/自定义属性 helper；每个构建器仍独立拥有其闭包。
        if (custom && (key === 'custom' || key === 'property')) {
          if (!cache.has(key))
            cache.set(
              key,
              Object.freeze({
                raw(name: string, value: unknown) {
                  if (key === 'custom') validateCustomName(name);
                  else text(name, 'Raw property name');
                  append(validatePropertyName(name), value, true);
                },
              }),
            );
          return cache.get(key);
        }
        helpers ??= (extra as () => Record<string, unknown>)();
        if (Object.hasOwn(helpers, key)) return helpers[key];
        throw new TypeError('Unknown CSS property in this context: ' + key);
      }
      if (cache.has(key)) return cache.get(key);
      const meta = table[key]!;
      const keywords = keywordGroups[meta.keywords]!;
      const plans = helperGroups[meta.helpers]!;
      const raw = (value: unknown) => {
        alive(session);
        if (value === undefined || value === null) return;
        if (
          meta.resource === 'keyframes' &&
          (isAnimation(value) || (Array.isArray(value) && value.every(isAnimation)))
        ) {
          append(meta.cssName, Array.isArray(value) && !value.length ? 'none' : value);
          return;
        }
        if (isCssVariable(value)) {
          append(meta.cssName, value);
          return;
        }
        if (typeof value === 'number') {
          // raw 只检查 JavaScript 数字边界；属性值是否有效由浏览器决定。
          if (!Number.isFinite(value)) throw new TypeError('CSS numbers must be finite.');
        } else if (typeof value !== 'string') throw new TypeError('Invalid CSS value: ' + key);
        append(meta.cssName, value, true);
      };
      const token = (value: unknown) => {
        alive(session);
        if (value === undefined || value === null) return;
        if (typeof value !== 'string' || !keywordSet(meta.keywords).has(value))
          throw new TypeError('Unknown CSS token for ' + key + ': ' + String(value));
        append(meta.cssName, value);
      };
      const property = new Proxy(Object.create(null) as object, {
        has(_object, member) {
          if (typeof member !== 'string') return false;
          return (
            member === 'raw' ||
            member === 'token' ||
            Object.hasOwn(keywords, member) ||
            plans.some((plan) =>
              unitFamilies[plan.family]!.some(
                (unit) => member === (unit === '%' ? 'pct' : unit) + plan.suffix,
              ),
            )
          );
        },
        get(_object, member) {
          if (typeof member !== 'string' || member === 'then') return undefined;
          alive(session);
          if (member === 'raw') return raw;
          if (member === 'token') return token;
          if (Object.hasOwn(keywords, member)) {
            append(meta.cssName, keywords[member]);
            return undefined;
          }
          for (const plan of plans)
            for (const unit of unitFamilies[plan.family]!) {
              if (member !== (unit === '%' ? 'pct' : unit) + plan.suffix) continue;
              return (...values: unknown[]) => {
                alive(session);
                const alternatives = plan.arities[values.length];
                if (!alternatives)
                  throw new TypeError('Invalid unit argument count: ' + key + '.' + member);
                if (values.some((value) => value === null || value === undefined)) return;
                if (
                  !values.every((v) => typeof v === 'number') ||
                  !numeric(values as number[], alternatives)
                )
                  throw new TypeError(
                    'Invalid unit arguments or numeric range: ' + key + '.' + member,
                  );
                append(
                  meta.cssName,
                  values
                    .map((value) => String(value) + unit)
                    .join(plan.separator === ',' ? ', ' : ' '),
                );
              };
            }
          throw new TypeError('Unknown keyword or unit: ' + key + '.' + member);
        },
      });
      cache.set(key, property);
      return property;
    },
  });
}
let styleHelpersValidated = false;
function style(factory: Factory, session: Session, important = false): StyleProgram {
  const nodes: StyleNode[] = [];
  const isRoot = session.depth === 0;
  const createHelpers = () => {
    const metadata = (): StyleMetadata => {
      alive(session);
      if (!isRoot || !session.metadata)
        throw new Error('name/config are only available on the root local style.');
      return session.metadata;
    };
    const nest = (selector: string, child: Factory) => {
      alive(session);
      text(selector, 'Selector');
      if (!selector.includes('&')) throw new TypeError('Relative selectors must contain &.');
      nodes.push(
        Object.freeze({
          kind: 'style-rule',
          selector,
          relative: true,
          children: style(child, session, important),
        }),
      );
    };
    const group = (
      name: '@media' | '@supports' | '@container' | '@layer' | '@scope' | '@starting-style',
      prelude: string,
      child: Factory,
    ) => {
      alive(session);
      text(prelude, name, name === '@starting-style');
      nodes.push(
        Object.freeze({
          kind: 'style-group',
          name,
          prelude,
          children: style(child, session, important),
        }),
      );
    };
    const helpers = {
      name(value: unknown) {
        const target = metadata();
        validateStyleName(value);
        if (target.name !== undefined && target.name !== value)
          throw new Error('A style cannot have conflicting names.');
        target.name = value;
      },
      config(value: unknown) {
        setStyleConfig(metadata(), value);
      },
      selector: nest,
      pseudo(name: string, child: Factory) {
        if (!simpleSet.has(name)) throw new TypeError('Unknown simple pseudo: ' + name);
        nest('&' + name, child);
      },
      pseudoFunction(name: string, args: string, child: Factory) {
        if (!functionalSet.has(name)) throw new TypeError('Unknown functional pseudo: ' + name);
        text(args, 'Pseudo arguments');
        nest('&' + name + '(' + args + ')', child);
      },
      hover: (child: Factory) => nest('&:hover', child),
      focusVisible: (child: Factory) => nest('&:focus-visible', child),
      focus: (child: Factory) => nest('&:focus', child),
      focusWithin: (child: Factory) => nest('&:focus-within', child),
      active: (child: Factory) => nest('&:active', child),
      disabled: (child: Factory) => nest('&:disabled', child),
      before: (child: Factory) => nest('&::before', child),
      after: (child: Factory) => nest('&::after', child),
      media: (query: string, child: Factory) => group('@media', query, child),
      supports: (query: string, child: Factory) => group('@supports', query, child),
      containerQuery: (query: string, child: Factory) => group('@container', query, child),
      layer: (name: string, child: Factory) => group('@layer', name, child),
      scope: (prelude: string, child: Factory) => group('@scope', prelude, child),
      startingStyle: (child: Factory) => group('@starting-style', '', child),
      important(child: Factory) {
        alive(session);
        nodes.push(...style(child, session, true));
      },
    };
    // helper 名字与生成元数据固定；只验证一次，不保存任何构建器或业务状态。
    if (!styleHelpersValidated) {
      for (const name of [...Object.keys(helpers), 'custom', 'property'])
        if (Object.hasOwn(propertyMetadata, name))
          throw new TypeError('Builder helper shadows a CSS property: ' + name);
      styleHelpersValidated = true;
    }
    return helpers;
  };
  session.depth++;
  try {
    const properties = declarations(
      propertyMetadata,
      nodes,
      session,
      important,
      createHelpers,
    ) as object;
    const builder = new session.cssType({
      properties: propertyNames,
      read: (key) => Reflect.get(properties, key),
      assertActive: () => alive(session),
    });
    if (!(builder instanceof Css)) throw new TypeError('The CSS type must extend Css.');
    invoke(factory, builder);
    return Object.freeze(nodes);
  } finally {
    session.depth--;
  }
}

/** 内部纯构建入口；不返回 class、不写样式表、不建立订阅。 */
export function buildStyleProgram(factory: Factory, cssType: CssConstructor = Css): StyleProgram {
  return buildStyleDefinition(factory, cssType).program;
}
export function buildStyleDefinition(
  factory: Factory,
  cssType: CssConstructor = Css,
  normalize: (program: StyleProgram) => StyleProgram = normalizeStyleProgram,
): { readonly program: StyleProgram; readonly metadata: Readonly<StyleMetadata> } {
  const source = getStyleSource(factory);
  const metadata: StyleMetadata = source ? { source } : {};
  const program = normalize(withSession((session) => style(factory, session), cssType, metadata));
  return Object.freeze({ program, metadata: Object.freeze(metadata) });
}
function frameDeclarations(factory: Factory, session: Session): readonly Declaration[] {
  const nodes: Declaration[] = [];
  invoke(factory, declarations(propertyMetadata, nodes, session, false));
  return Object.freeze(nodes);
}
function offset(value: FrameOffset): string {
  if (value === 'from' || value === 'to') return value;
  if (typeof value === 'number') {
    if (!Number.isFinite(value) || value < 0 || value > 100)
      throw new TypeError('Keyframe offset must be between 0 and 100.');
    return `${value}%`;
  }
  if (typeof value !== 'string') throw new TypeError('Invalid keyframe offset.');
  const match =
    /^(?:(cover|contain|entry|exit|entry-crossing|exit-crossing) )?([+-]?(?:\d+(?:\.\d*)?|\.\d+))%$/u.exec(
      value,
    );
  if (!match || (!match[1] && (Number(match[2]) < 0 || Number(match[2]) > 100)))
    throw new TypeError('Invalid keyframe offset: ' + value);
  return value;
}
/** 创建有序、不可变的动画定义；名称和注册在后续运行时层处理。 */
export function keyframes(factory: (k: FrameBuilder) => void): KeyframesDefinition {
  return withSession((session) => {
    const frames: Frame[] = [];
    const at = (positions: FrameOffset | readonly FrameOffset[], child: DeclarationFactory) => {
      alive(session);
      const values = Array.isArray(positions) ? positions : [positions];
      if (!values.length) throw new TypeError('Expected at least one keyframe offset.');
      frames.push(
        Object.freeze({
          offsets: Object.freeze(values.map((v) => offset(v))),
          declarations: frameDeclarations(child, session),
        }),
      );
    };
    invoke(factory, {
      at,
      from: (child: DeclarationFactory) => at('from', child),
      to: (child: DeclarationFactory) => at('to', child),
    });
    if (!frames.length) throw new TypeError('Expected at least one keyframe.');
    return Object.freeze({ kind: 'keyframes', frames: Object.freeze(frames) });
  });
}
function globals(factory: Factory, session: Session, root: boolean): readonly GlobalNode[] {
  const rules: GlobalNode[] = [];
  let preamble: 'imports' | 'namespaces' | 'body' = 'imports';
  const append = (rule: GlobalNode) => {
    alive(session);
    preamble = 'body';
    rules.push(Object.freeze(rule));
  };
  const group = (
    name: '@media' | '@supports' | '@container' | '@layer' | '@scope' | '@starting-style',
    prelude: string,
    child: GlobalFactory,
  ) => {
    alive(session);
    text(prelude, name, name === '@starting-style');
    append({ kind: 'global-group', name, prelude, children: globals(child, session, false) });
  };
  const descriptors = (name: string, prelude: string, child: Factory): DescriptorBlock => {
    alive(session);
    text(prelude, 'At-rule prelude', true);
    if (!Object.hasOwn(descriptorMetadata, name))
      throw new TypeError('Unknown declaration descriptor context: ' + name);
    const nodes: Declaration[] = [];
    invoke(child, declarations(descriptorMetadata[name]!, nodes, session, false, {}, false));
    return Object.freeze({
      kind: 'descriptor-block',
      name,
      prelude,
      declarations: Object.freeze(nodes),
    });
  };
  const builder: GlobalBuilder = {
    rule(selector: string, child: Factory, cssType: CssConstructor = session.cssType) {
      alive(session);
      text(selector, 'Global selector');
      // 每条规则独立构建会话，派生类不会泄漏到相邻规则，捕获实例也及时失效。
      const children = normalizeStyleProgram(withSession((local) => style(child, local), cssType));
      append({ kind: 'style-rule', selector, relative: false, children });
    },
    media: (query, child) => group('@media', query, child),
    supports: (query, child) => group('@supports', query, child),
    containerQuery: (query, child) => group('@container', query, child),
    layer: (name, child) => group('@layer', name, child),
    scope: (prelude, child) => group('@scope', prelude, child),
    startingStyle: (child) => group('@starting-style', '', child),
    descriptors(name, prelude, child) {
      append(descriptors(name, prelude, child));
    },
    fontFace: (child) => append(descriptors('@font-face', '', child)),
    property(name, child) {
      validateCustomName(name);
      append(descriptors('@property', name, child));
    },
    counterStyle(name, child) {
      text(name, 'Counter style name');
      append(descriptors('@counter-style', name, child));
    },
    page(selector, child) {
      alive(session);
      text(selector, 'Page selector', true);
      const children: (Declaration | DescriptorBlock)[] = [];
      // @page 同时允许普通页面声明和专用描述符，专用定义优先。
      const table = { ...propertyMetadata, ...descriptorMetadata['@page'] };
      const b = declarations(table, children as Declaration[], session, false, {
        marginBox(name: string, fn: DeclarationFactory) {
          alive(session);
          if (!marginBoxes.has(name)) throw new TypeError('Unknown page margin box: ' + name);
          children.push(
            Object.freeze({
              kind: 'descriptor-block',
              name: '@' + name,
              prelude: '',
              declarations: frameDeclarations(fn, session),
            }),
          );
        },
      });
      invoke(child, b as PageBuilder);
      append({ kind: 'page-rule', selector, children: Object.freeze(children) });
    },
    animation(definition) {
      if (definition?.kind !== 'keyframes' || !Object.isFrozen(definition))
        throw new TypeError('Expected a keyframes() definition.');
      append(definition);
    },
    rawRule(css) {
      text(css, 'Raw CSS rule');
      append({ kind: 'raw-rule', css });
    },
  };
  if (root) {
    const r = builder as StylesheetBuilder;
    r.layerOrder = (...names) => {
      alive(session);
      if (!names.length) throw new TypeError('Expected layer names.');
      names.forEach((n) => text(n, 'Layer name'));
      rules.push(Object.freeze({ kind: 'statement', name: '@layer', prelude: names.join(', ') }));
    };
    r.statement = (name, prelude) => {
      alive(session);
      text(prelude, 'Statement prelude');
      if (!['@import', '@namespace'].includes(name))
        throw new TypeError('Unsupported preamble statement.');
      if (preamble === 'body' || (name === '@import' && preamble === 'namespaces'))
        throw new TypeError(
          'Stylesheet preamble statements must precede rules and respect import/namespace order.',
        );
      if (name === '@namespace') preamble = 'namespaces';
      rules.push(Object.freeze({ kind: 'statement', name, prelude }));
    };
  }
  invoke(factory, builder);
  return Object.freeze(rules);
}
/** 创建全局样式定义；挂载、更新和释放由运行时及适配器负责。 */
export function globalCss(factory: StylesheetFactory): StylesheetDefinition;
export function globalCss<T extends Css>(
  factory: StylesheetFactory<T>,
  cssType: CssConstructor<T>,
): StylesheetDefinition;
export function globalCss(
  factory: StylesheetFactory<never>,
  cssType: CssConstructor = Css,
): StylesheetDefinition {
  return withSession(
    (session) => Object.freeze({ kind: 'stylesheet', rules: globals(factory, session, true) }),
    cssType,
  );
}
