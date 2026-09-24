import { parse, walk, ident, lexer } from './css-parser.js';
import {
  type NumericCheck,
  type NumericAlternatives,
  isCssVariable,
  validateCustomName,
  assertValueStructure,
  normalizeCssText,
} from '@zerodep-css/core/internal';

import { StringCache } from './string-cache.js';
import { portableUnits } from './binding-policy.js';

import type { CssNode } from 'css-tree';

/** 保留单位多参数备选语法的整体约束，不能把位置约束分别取并集。 */
export function validateUnitValues(
  values: readonly unknown[],
  alternatives: NumericAlternatives,
): readonly number[] {
  if (
    !alternatives.some(
      (plan) =>
        plan.length === values.length &&
        plan.every((rule, index) => {
          const value = values[index];
          return (
            typeof value === 'number' &&
            Number.isFinite(value) &&
            (!rule.integer || Number.isInteger(value)) &&
            (rule.min === undefined || value >= rule.min) &&
            (rule.max === undefined || value <= rule.max)
          );
        }),
    )
  )
    throw new TypeError('Invalid CSS binding unit argument combination.');
  return values as readonly number[];
}

/** 编译产物的内部边界：只格式化元素变量，不注册规则、不订阅状态。 */
export interface BindingFormat {
  readonly unit?: string;
  readonly numbers?: readonly NumericCheck[];
  readonly tokens?: readonly string[];
}
export interface DeclarationFormat extends Omit<BindingFormat, 'unit'> {
  readonly property?: string;
}

/** 自动单位绑定以整组为边界，联合参数只求值和校验一次。 */
export function formatUnitValues(
  values: readonly unknown[],
  alternatives: NumericAlternatives,
  unit: string,
  separator: string,
): string | undefined {
  if (!safeUnit(unit) || ![' ', ', '].includes(separator))
    throw new TypeError('Invalid unit binding format.');
  if (!alternatives.some((plan) => plan.length === values.length))
    throw new TypeError('Invalid CSS binding unit argument combination.');
  // 原始参数已按 JS 顺序求值；省略整条声明，不能拼接余下参数改变含义。
  if (values.some((value) => value === null || value === undefined)) return undefined;
  return validateUnitValues(values, alternatives)
    .map((value) => String(value) + unit)
    .join(separator);
}

export function bindUnit(
  bindings: Record<string, string>,
  name: `--${string}`,
  values: readonly unknown[],
  alternatives: NumericAlternatives,
  unit: string,
  separator: string,
): string | undefined {
  const value = formatUnitValues(values, alternatives, unit, separator);
  if (value === undefined) return undefined;
  bindings[name] = value;
  return `var(${name})`;
}

/** 在原声明位置读取一次输入；class 与 style 共用这个快照，不重复读取 getter。 */
export function bindValue(
  bindings: Record<string, string>,
  name: `--${string}`,
  binding: ReturnType<typeof createDeclarationBinding>,
  input: unknown,
): unknown {
  // raw 的引用对象交回原 Builder 校验，避免优化器额外触发 Proxy 的属性描述符读取。
  if (input !== null && typeof input === 'object' && binding.acceptsVariables) return input;
  return binding.apply(bindings, name, input);
}

function checkValue(value: unknown, format: BindingFormat): asserts value is string | number {
  if (typeof value !== 'string' && typeof value !== 'number')
    throw new TypeError('CSS binding expects a CSS string or number.');
  if (format.unit !== undefined && typeof value !== 'number')
    throw new TypeError('CSS binding unit values must be numbers.');
  if (typeof value === 'number') {
    if (
      !Number.isFinite(value) ||
      (format.numbers !== undefined &&
        !format.numbers.some(
          (rule) =>
            (!rule.integer || Number.isInteger(value)) &&
            (rule.min === undefined || value >= rule.min) &&
            (rule.max === undefined || value <= rule.max),
        ))
    )
      throw new TypeError('Invalid CSS binding numeric value.');
  }
  if (format.tokens && (typeof value !== 'string' || !format.tokens.includes(value)))
    throw new TypeError('Invalid CSS binding token.');
}

function checkSyntax(result: string, customProperty = false): CssNode | undefined {
  assertValueStructure(result, customProperty);
  try {
    const ast = parse(result, {
      context: 'value',
      parseCustomProperty: true,
      onParseError(error) {
        throw error;
      },
    });
    walk(ast, (node) => {
      if (node.type === 'Raw') throw new Error('Unknown value syntax.');
    });
    return ast;
  } catch {
    // 语法表无法证明能变量化时走原声明，不把优化失败变成作者错误。
    return undefined;
  }
}

const cssWide = new Set(['initial', 'inherit', 'unset', 'revert', 'revert-layer']);
const portableFunctions = new Set([
  'rgb',
  'rgba',
  'hsl',
  'hsla',
  'translate',
  'translatex',
  'translatey',
  'translatez',
  'translate3d',
  'scale',
  'scalex',
  'scaley',
  'scalez',
  'scale3d',
  'rotate',
  'rotatex',
  'rotatey',
  'rotatez',
  'rotate3d',
  'skew',
  'skewx',
  'skewy',
  'matrix',
  'matrix3d',
  'perspective',
]);
const portableDisplay = new Set([
  'none',
  'block',
  'inline',
  'inline-block',
  'flex',
  'inline-flex',
  'grid',
  'inline-grid',
  'contents',
  'flow-root',
  'table',
  'inline-table',
  'table-row',
  'table-cell',
  'table-caption',
  'table-column',
  'table-row-group',
  'table-header-group',
  'table-footer-group',
  'table-column-group',
  'list-item',
]);

/** 语法表未必包含规范正文的限制（如 stroke-width 禁止负数），数字优化只认已核实语义。 */
function portableNumber(property: string, value: number, text = String(value)): boolean {
  const integer = /^[+-]?\d+$/.test(text);
  switch (property) {
    case 'opacity':
      return true;
    case 'z-index':
    case 'order':
      return integer;
    case 'font-weight':
      return value >= 1 && value <= 1000;
    case 'flex-grow':
    case 'flex-shrink':
    case 'line-height':
    case 'animation-iteration-count':
      return value >= 0;
    case 'column-count':
    case 'orphans':
    case 'widows':
      return integer && value >= 1;
    default:
      return false;
  }
}

function portableValue(ast: CssNode, property: string): boolean {
  let safe = true;
  walk(ast, (node) => {
    switch (node.type) {
      case 'Value':
      case 'WhiteSpace':
      case 'Hash':
      case 'Url':
        break;
      case 'Number':
      case 'Percentage':
        if (Number(node.value) < 0) safe = false;
        break;
      case 'Operator':
        if (!['/', ','].includes(node.value) || property === 'content') safe = false;
        break;
      case 'Dimension':
        if (!portableUnits.has(node.unit.toLowerCase()) || Number(node.value) < 0) safe = false;
        break;
      case 'Function':
        if (!portableFunctions.has(node.name.toLowerCase())) safe = false;
        break;
      case 'String':
        if (!['font-family', 'content'].includes(property)) safe = false;
        break;
      case 'Identifier': {
        const name = ident.decode(node.name).toLowerCase();
        if (
          property !== 'font-family' &&
          !(property === 'display' && portableDisplay.has(name)) &&
          !['transparent', 'currentcolor'].includes(name) &&
          !lexer.matchType('named-color', node).matched
        )
          safe = false;
        break;
      }
      default:
        safe = false;
    }
  });
  return safe;
}

/**
 * 普通值走元素变量；空值省略声明，CSS-wide 关键字与显式变量保留直接声明。
 * 后两类决定级联语义，不能把 initial 等值塞进自定义属性后假定语义相同。
 */
export function createDeclarationBinding(name: `--${string}`, format: DeclarationFormat = {}) {
  validateCustomName(name);
  const variable = `var(${name})`;
  const cache = new StringCache<boolean>();
  const options = {
    ...format,
    numbers: format.numbers?.map((rule) => ({ ...rule })),
    tokens: format.tokens && [...format.tokens],
  };
  function direct(value: unknown): boolean {
    if (value === null || value === undefined) return true;
    if (!options.tokens && isCssVariable(value)) return true;
    if (typeof value === 'number') {
      if (!Number.isFinite(value)) throw new TypeError('Invalid CSS binding numeric value.');
      if (options.tokens) throw new TypeError('Invalid CSS binding token.');
      // 未被证明可变量化的 raw 数字保留直接声明；var 会延后失效时机。
      if (options.property && !portableNumber(options.property, value)) return true;
      return !options.numbers?.some(
        (rule) =>
          (!rule.integer || Number.isInteger(value)) &&
          (rule.min === undefined || value >= rule.min) &&
          (rule.max === undefined || value <= rule.max),
      );
    }
    checkValue(value, options);
    if (typeof value !== 'string') throw new TypeError('CSS binding expects a CSS string.');
    const cached = cache.get(value);
    if (cached !== undefined) return cached;
    const ast = checkSyntax(value, options.property?.startsWith('--'));
    if (!value.trim() || (!ast && options.property)) {
      cache.set(value, true);
      return true;
    }
    const first = ast?.type === 'Value' && ast.children.size === 1 ? ast.children.first : undefined;
    let result =
      first?.type === 'Identifier' && cssWide.has(ident.decode(first.name).toLowerCase());
    if (first?.type === 'Number' && options.property)
      result = !portableNumber(options.property, Number(first.value), first.value);
    if (!result && options.property && ast) {
      // 非法属性值原本会在解析声明时被忽略；变成 var 后会改变 fallback 语义。
      // 未来语法或无法证明的 var/env 表达式保留直接声明，不以优化器拒绝 raw。
      try {
        result =
          !lexer.matchProperty(options.property, ast).matched ||
          !portableValue(ast, options.property);
      } catch {
        result = true;
      }
    }
    cache.set(value, result);
    return result;
  }
  return Object.freeze({
    acceptsVariables: !options.tokens,
    /** 同一个输入只做一次规范化与变量化判定；元素值和声明值共用该结果。 */
    apply(bindings: Record<string, string>, bindingName: `--${string}`, value: unknown): unknown {
      if (typeof value === 'string') value = normalizeCssText(value);
      if (direct(value)) return value;
      bindings[bindingName] = String(value);
      return variable;
    },
    value(value: unknown): unknown {
      if (typeof value === 'string') value = normalizeCssText(value);
      return direct(value) ? value : variable;
    },
    inline(value: unknown): string | undefined {
      if (typeof value === 'string') value = normalizeCssText(value);
      return direct(value) ? undefined : String(value);
    },
  });
}

function safeUnit(unit: string | undefined): boolean {
  // 数字与固定 CSS 单位组合不会生成其他 token；未知原始字符串仍交给完整解析器。
  return unit === undefined || unit === '' || unit === '%' || /^[a-z]+$/i.test(unit);
}

/** 兼容迁移前的生成代码；不创建跨请求的全局可变缓存。 */
export function formatValue(value: unknown, format: BindingFormat = {}): string {
  checkValue(value, format);
  const result = String(value) + (format.unit ?? '');
  if (typeof value !== 'number' || !safeUnit(format.unit)) checkSyntax(result);
  return result;
}

/**
 * 按绑定格式初始化一次，缓存仅由该格式化器的组件/请求 owner 持有。
 * 数值不积累缓存；固定 token 预先校验；raw 只保存有限个成功结果。
 */
export function createValueFormatter(format: BindingFormat = {}): (value: unknown) => string {
  const snapshot: BindingFormat = Object.freeze({
    ...format,
    ...(format.numbers && {
      numbers: Object.freeze(format.numbers.map((rule) => Object.freeze({ ...rule }))),
    }),
    ...(format.tokens && { tokens: Object.freeze([...format.tokens]) }),
  });
  if (!safeUnit(snapshot.unit)) throw new TypeError('Invalid CSS unit.');
  const tokens = snapshot.tokens ? new Set(snapshot.tokens) : undefined;
  if (tokens) for (const token of tokens) checkSyntax(token);
  const valueFormat: BindingFormat = { unit: snapshot.unit, numbers: snapshot.numbers };
  const cache = new StringCache<string>();
  return (value) => {
    checkValue(value, valueFormat);
    if (tokens) {
      if (typeof value !== 'string' || !tokens.has(value))
        throw new TypeError('Invalid CSS binding token.');
      return value;
    }
    if (typeof value === 'number') return String(value) + (snapshot.unit ?? '');
    const cached = cache.get(value);
    if (cached !== undefined) return cached;
    checkSyntax(value);
    // 淘汰只释放校验结果；不影响 DOM 或已注册规则。
    cache.set(value, value);
    return value;
  };
}
