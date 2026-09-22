import { parse, walk } from 'css-tree';
import type { NumericCheck, NumericAlternatives } from './metadata-types.js';

/** 保留单位多参数备选语法的整体约束，不能把位置约束分别取并集。 */
export function bxTuple(
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
    throw new TypeError('Invalid bx unit argument combination.');
  return values as readonly number[];
}

/** 编译产物的内部边界：只格式化元素变量，不注册规则、不订阅状态。 */
export interface BindingFormat {
  readonly unit?: string;
  readonly numbers?: readonly NumericCheck[];
  readonly tokens?: readonly string[];
}

/** 自动单位绑定以整组为边界，联合参数只求值和校验一次。 */
export function formatUnitValues(
  values: readonly unknown[],
  alternatives: NumericAlternatives,
  unit: string,
  separator: string,
): string {
  if (!safeUnit(unit) || ![' ', ', '].includes(separator))
    throw new TypeError('Invalid unit binding format.');
  return bxTuple(values, alternatives)
    .map((value) => String(value) + unit)
    .join(separator);
}

function checkValue(value: unknown, format: BindingFormat): asserts value is string | number {
  if (typeof value !== 'string' && typeof value !== 'number')
    throw new TypeError('bx expects a CSS string or number.');
  if (format.unit !== undefined && typeof value !== 'number')
    throw new TypeError('bx unit values must be numbers.');
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
      throw new TypeError('Invalid bx numeric value.');
  }
  if (format.tokens && (typeof value !== 'string' || !format.tokens.includes(value)))
    throw new TypeError('Invalid bx token.');
}

function checkSyntax(result: string): void {
  if (!result.trim()) throw new TypeError('bx values must not be empty.');
  const ast = parse(result, {
    context: 'value',
    onParseError(error) {
      throw error;
    },
  });
  walk(ast, (node) => {
    if (node.type === 'Raw') throw new TypeError('Invalid bx CSS value.');
  });
}

function safeUnit(unit: string | undefined): boolean {
  // 数字与固定 CSS 单位组合不会生成其他 token；未知原始字符串仍交给完整解析器。
  return unit === undefined || unit === '' || unit === '%' || /^[a-z]+$/i.test(unit);
}

/** 兼容迁移前的生成代码；不创建跨请求的全局可变缓存。 */
export function bxValue(value: unknown, format: BindingFormat = {}): string {
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
  const cache = new Map<string, string>();
  return (value) => {
    checkValue(value, valueFormat);
    if (tokens) {
      if (typeof value !== 'string' || !tokens.has(value)) throw new TypeError('Invalid bx token.');
      return value;
    }
    if (typeof value === 'number') return String(value) + (snapshot.unit ?? '');
    const cached = cache.get(value);
    if (cached !== undefined) return cached;
    checkSyntax(value);
    // FIFO 足以约束校验结果内存；淘汰结果不会删除仍被 DOM 使用的样式规则。
    if (cache.size >= 128) cache.delete(cache.keys().next().value!);
    cache.set(value, value);
    return value;
  };
}
