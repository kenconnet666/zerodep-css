import { Css, type CssConstructor } from './css.js';
import type { StyleFactory } from './builder-types.js';
import type { StyleRuntime } from './runtime.js';
import type { ThemeDefinition, ThemeOverrides, ThemeTree, ThemeValues } from './theme.js';
import { themeStyle } from './theme.js';
import type { StyleContext } from './context.js';

/** 组件选择视图，不改变宿主 runtime 的配置或所有权。 */
export interface UseStyleRuntimeOptions<T extends Css = Css> {
  readonly context?: StyleContext;
  readonly theme?: ThemeScope;
  readonly cssType?: CssConstructor<T>;
}

/** 选项只在初始化时读取一次，避免调用方后续修改改变视图。 */
export function normalizeStyleOptions(input?: UseStyleRuntimeOptions): UseStyleRuntimeOptions {
  if (input === undefined) return {};
  if (!input || typeof input !== 'object' || Array.isArray(input))
    throw new TypeError('Expected style runtime options.');
  const prototype = Object.getPrototypeOf(input);
  if (prototype !== Object.prototype && prototype !== null)
    throw new TypeError('Style runtime options must be a plain object.');
  for (const key of Reflect.ownKeys(input))
    if (!['context', 'theme', 'cssType'].includes(String(key)) || typeof key !== 'string')
      throw new TypeError('Unknown style runtime option: ' + String(key));
  const { context, theme: scope, cssType } = input as UseStyleRuntimeOptions;
  if (context !== undefined && (!context || typeof context !== 'object' || !context.runtime))
    throw new TypeError('Expected a style context.');
  if (scope !== undefined && (!scope || !Array.isArray(scope.themes)))
    throw new TypeError('Expected a theme scope.');
  if (
    cssType !== undefined &&
    (typeof cssType !== 'function' || (cssType !== Css && !(cssType.prototype instanceof Css)))
  )
    throw new TypeError('The CSS type must extend Css.');
  return { context, theme: scope, cssType };
}

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
        return runtime.css(themeStyle(definition, read()));
      },
    }),
  );
  return Object.freeze({ themes: Object.freeze([...entries.values()]) });
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
  function css(factory: StyleFactory): string;
  function css<T extends Css>(factory: StyleFactory<T>, cssType: CssConstructor<T>): string;
  function css(factory: StyleFactory<never>, cssType: CssConstructor = defaultCss): string {
    const content = runtime.css(factory as StyleFactory, cssType);
    const names = scope?.themes.map((theme) => theme.className(runtime)) ?? [];
    return [...names, content].join(' ');
  }
  return Object.freeze({ ...runtime, css });
}
