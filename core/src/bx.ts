export type BxValue = string | number | null | undefined;

/** 将值表达式（包括常量）绑定为 CSS 变量；不添加或推断单位。需要框架编译插件。 */
export function bx(_value: BxValue): string {
  throw new Error(
    'bx() requires the zerodep-css Vue/Svelte compiler plugin and a supported component scope.',
  );
}
