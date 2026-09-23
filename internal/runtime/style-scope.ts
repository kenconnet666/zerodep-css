import {
  Css,
  type CssConstructor,
  type StyleFactory,
  type StyleInput,
  type ThemeDefinition,
  type ThemeOverrides,
  type ThemeTree,
  type ThemeValues,
  themeStyle,
  prepareThemeStyle,
} from '@zerodep-css/core/internal';

import type { StyleRuntime } from './runtime.js';

export { prepareThemeStyle } from '@zerodep-css/core/internal';
export { normalizeStylesOptions, projectThemeArguments } from '@zerodep-css/core/internal';

export interface ThemeState {
  readonly name: string;
  readonly schema: string;
  readonly values: ThemeTree;
  className(runtime: StyleRuntime): string;
}
/** 作用域只保存原生响应式 getter，不接管共享 runtime 的生命周期。 */
export interface ThemeScope {
  readonly themes: readonly ThemeState[];
}

function findTheme<T extends ThemeTree>(
  definition: ThemeDefinition<T>,
  parent?: ThemeScope,
): ThemeState | undefined {
  const state = parent?.themes.find((theme) => theme.name === definition.name);
  if (state && state.schema !== definition.schema)
    throw new TypeError('Incompatible theme schema: ' + definition.name);
  return state;
}
/** 只读取当前冻结快照；无同名 provider 时使用传入定义的默认值，不注册 CSS。 */
export function readTheme<T extends ThemeTree>(
  definition: ThemeDefinition<T>,
  scope?: ThemeScope,
): ThemeValues<T> {
  return (
    (findTheme(definition, scope)?.values as ThemeValues<T> | undefined) ?? definition.defaults
  );
}
export function resolveTheme<T extends ThemeTree>(
  definition: ThemeDefinition<T>,
  overrides: ThemeOverrides<T> | null | undefined,
  parent?: ThemeScope,
): ThemeValues<T> {
  return definition.resolve(
    overrides,
    findTheme(definition, parent)?.values as ThemeValues<T> | undefined,
  );
}
export function createThemeScope<T extends ThemeTree>(
  definition: ThemeDefinition<T>,
  read: () => ThemeValues<T>,
  parent?: ThemeScope,
  prepared?: () => StyleFactory,
): ThemeScope {
  findTheme(definition, parent);
  const entries = new Map(parent?.themes.map((theme) => [theme.name, theme]));
  entries.set(
    definition.name,
    Object.freeze({
      name: definition.name,
      schema: definition.schema,
      get values() {
        return read();
      },
      className(runtime: StyleRuntime) {
        // 框架读取其原生派生值即能追踪依赖；没有框架准备器时保留逐次求值。
        // 每次仍进入 runtime，不能以字符串缓存绕过宿主校验、dispose 或注册重试。
        return runtime.css(prepared ? prepared() : themeStyle(definition, read()));
      },
    }),
  );
  return Object.freeze({ themes: Object.freeze([...entries.values()]) });
}

/** 共用宿主的作者配置仍有自己的预设；已有同名 provider 始终优先于预设。 */
export function projectThemeScope(
  definition: ThemeDefinition<ThemeTree> | undefined,
  parent?: ThemeScope,
): ThemeScope | undefined {
  if (!definition || findTheme(definition, parent)) return parent;
  const prepared = prepareThemeStyle(definition, definition.defaults);
  return createThemeScope(
    definition,
    () => definition.defaults,
    parent,
    () => prepared,
  );
}

/** 每个元素携带逻辑组件作用域的有效变量类，因此 DOM 移动不改变主题。 */
export function createRuntimeView(runtime: StyleRuntime, scope?: ThemeScope): StyleRuntime;
export function createRuntimeView<T extends Css>(
  runtime: StyleRuntime,
  scope: ThemeScope | undefined,
  cssType: CssConstructor<T>,
): StyleRuntime<T>;
export function createRuntimeView(
  runtime: StyleRuntime,
  scope?: ThemeScope,
  defaultCss: CssConstructor = Css,
): StyleRuntime {
  if (!scope?.themes.length && defaultCss === Css) return runtime;
  function css(...inputs: StyleInput[]): string;
  function css<T extends Css>(input: StyleInput<T>, cssType: CssConstructor<T>): string;
  function css(...arguments_: unknown[]): string {
    const explicit =
      arguments_.length === 2 &&
      typeof arguments_[1] === 'function' &&
      (arguments_[1] === Css || arguments_[1].prototype instanceof Css);
    const cssType = explicit ? (arguments_[1] as CssConstructor) : defaultCss;
    const inputs = explicit ? [arguments_[0]] : arguments_;
    const content =
      inputs.length === 1
        ? runtime.css(inputs[0] as StyleInput, cssType)
        : runtime.css(inputs as StyleInput[], cssType);
    const names = scope?.themes.map((theme) => theme.className(runtime)) ?? [];
    const themed = new Set(names);
    return [
      ...names,
      ...(content.match(/[^ \t\n\f\r]+/gu) ?? []).filter((name) => !themed.has(name)),
    ].join(' ');
  }
  return Object.freeze({ ...runtime, css });
}
