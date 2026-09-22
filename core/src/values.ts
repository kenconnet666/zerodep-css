const bindingBrand: unique symbol = Symbol('zerodep.binding');
const variableBrand: unique symbol = Symbol('zerodep.variable');

/** 编译标记，不是当前值，也不是独立的响应式对象。 */
export interface Binding<T extends string | number> {
  readonly [bindingBrand]: T;
}
export interface CssVariable {
  readonly [variableBrand]: true;
  readonly name: `--${string}`;
  readonly fallback?: string;
}
export type Bound<T extends string | number> = T | Binding<T>;
export type Input<T extends string | number> = Bound<T> | null | undefined;
export type CssProperty<Tokens extends string, V extends string | number, K, H, Extra = never> = {
  /** 严格的属性字面量关键字，不放宽为任意字符串。 */
  token(value: Input<Tokens>): void;
  /** 保留属性类型和已知值补全，同时允许任意字符串通过类型检查。 */
  raw(value: Input<V | (string & {})> | CssVariable | Extra): void;
} & K &
  H;

/** 只有框架编译器可转换此标记；未接入编译器时不伪造变量订阅。 */
export function bx<const T extends string | number>(_value: T): Binding<T> {
  throw new TypeError(
    'bx requires the Vue/Svelte compiler integration; it is not a runtime identity function.',
  );
}

/** 显式引用已有 CSS 自定义属性，不建立 JS 绑定。 */
export function cssVar(name: `--${string}`, fallback?: string): CssVariable {
  validateCustomName(name);
  if (fallback !== undefined && typeof fallback !== 'string')
    throw new TypeError('CSS variable fallback must be a string.');
  return Object.freeze({
    [variableBrand]: true as const,
    name,
    ...(fallback !== undefined ? { fallback } : {}),
  });
}
export function isCssVariable(value: unknown): value is CssVariable {
  return typeof value === 'object' && value !== null && Object.hasOwn(value, variableBrand);
}
export function validateCustomName(name: string): asserts name is `--${string}` {
  if (
    typeof name !== 'string' ||
    !/^--(?:[a-zA-Z0-9_\-\u0080-\uFFFF]|\\(?:[0-9a-fA-F]{1,6}[ \t\r\n\f]?|[^\r\n\f0-9a-fA-F]))+$/u.test(
      name,
    )
  )
    throw new TypeError('Invalid custom property name: ' + name);
}
