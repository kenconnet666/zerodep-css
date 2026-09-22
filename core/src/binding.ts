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
export function bxValue(value: unknown, format: BindingFormat = {}): string {
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
  const result = String(value) + (format.unit ?? '');
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
  return result;
}
