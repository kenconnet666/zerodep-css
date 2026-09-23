import { Css, type CssConstructor } from './css.js';
import type { ThemeDefinition, ThemeOverrides, ThemeTree, ThemeValues } from './theme.js';

/** 项目模块只保存作者类型与主题定义；运行实例由应用/请求宿主另行创建。 */
export interface StylesOptions<C extends Css = Css, T extends ThemeTree = never> {
  readonly cssType?: CssConstructor<C>;
  readonly theme?: ThemeDefinition<T>;
}
export type ThemeInput<T extends ThemeTree> =
  ThemeOverrides<T> | null | undefined | (() => ThemeOverrides<T> | null | undefined);

export interface ProjectThemeHooks<T extends ThemeTree = never> {
  // 未配置默认主题时，类型层不允许省略定义；tuple 避免 never 分布掉整个签名。
  useTheme(...args: [T] extends [never] ? [never] : []): () => ThemeValues<T>;
  useTheme<U extends ThemeTree>(definition: ThemeDefinition<U>): () => ThemeValues<U>;
  provideTheme(...args: [T] extends [never] ? [never] : [overrides?: ThemeInput<T>]): void;
  provideTheme<U extends ThemeTree>(
    definition: ThemeDefinition<U>,
    overrides?: ThemeInput<U>,
  ): void;
}

export function isThemeDefinition(value: unknown): value is ThemeDefinition<ThemeTree> {
  return (
    !!value &&
    typeof value === 'object' &&
    'resolve' in value &&
    typeof value.resolve === 'function' &&
    'defaults' in value &&
    'tokens' in value
  );
}

/** 配置一次性快照，不让调用者后续修改切换现有组件的作者类型。 */
export function normalizeStylesOptions<C extends Css, T extends ThemeTree>(
  input?: StylesOptions<C, T>,
): StylesOptions<C, T> {
  if (input === undefined) return {};
  if (
    !input ||
    typeof input !== 'object' ||
    Array.isArray(input) ||
    ![Object.prototype, null].includes(Object.getPrototypeOf(input))
  )
    throw new TypeError('Style project options must be a plain object.');
  if (Reflect.ownKeys(input).some((key) => key !== 'cssType' && key !== 'theme'))
    throw new TypeError('Style project options only accept cssType and theme.');
  const { cssType, theme } = input;
  if (
    cssType !== undefined &&
    (typeof cssType !== 'function' || (cssType !== Css && !(cssType.prototype instanceof Css)))
  )
    throw new TypeError('The CSS type must extend Css.');
  if (theme !== undefined && !isThemeDefinition(theme))
    throw new TypeError('Expected a theme created by defineTheme.');
  return { cssType, theme };
}

/** 一个参数可使用默认主题；两个参数显式选择额外主题，不增加同义函数。 */
export function projectThemeArguments(
  fallback: ThemeDefinition<ThemeTree> | undefined,
  first?: ThemeDefinition<ThemeTree> | ThemeInput<ThemeTree>,
  second?: ThemeInput<ThemeTree>,
): readonly [ThemeDefinition<ThemeTree>, ThemeInput<ThemeTree>] {
  const explicit = isThemeDefinition(first);
  if (!explicit && second !== undefined)
    throw new TypeError('The first argument must be a theme definition when passing overrides.');
  const definition = explicit ? first : fallback;
  if (!definition)
    throw new Error('This style project has no default theme; pass a theme definition.');
  return [definition, explicit ? second : first];
}
