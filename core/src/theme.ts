import { cssVar, type CssVariable } from './values.js';
import { hashText } from './hash.js';
import { validateStyleName } from './style-metadata.js';
import { createDeclarationBinding } from './binding.js';
import type { StyleRuntime } from './runtime.js';
import type { StyleFactory } from './builder-types.js';

const styleKey = Symbol('zerodep.theme-style');
interface ThemeStyle {
  [styleKey](values: ThemeTree): StyleFactory;
}

/** 框架作用域传入已解析的冻结快照，避免每个元素重复解析主题叶值。 */
export function themeStyle<T extends ThemeTree>(
  definition: ThemeDefinition<T>,
  values: ThemeValues<T>,
): StyleFactory {
  const factory = (definition as ThemeDefinition<T> & ThemeStyle)[styleKey];
  if (!factory) throw new TypeError('Expected a theme created by defineTheme.');
  return factory(values);
}

export interface ThemeTree {
  readonly [key: string]: string | number | ThemeTree;
}
export type ThemeValues<T extends ThemeTree> = {
  readonly [K in keyof T]: T[K] extends ThemeTree
    ? ThemeValues<T[K]>
    : T[K] extends number
      ? number
      : string;
};
export type ThemeTokens<T extends ThemeTree> = {
  readonly [K in keyof T]: T[K] extends ThemeTree ? ThemeTokens<T[K]> : CssVariable;
};
export type ThemeOverrides<T extends ThemeTree> = {
  readonly [K in keyof T]?: T[K] extends ThemeTree
    ? ThemeOverrides<T[K]> | null
    : (T[K] extends number ? number : string) | null;
};
export interface ThemeDefinition<T extends ThemeTree> {
  readonly name: string;
  /** 只标识字段结构与叶类型，不包含预设值。 */
  readonly schema: string;
  readonly defaults: ThemeValues<T>;
  readonly tokens: ThemeTokens<T>;
  extend(overrides: ThemeOverrides<T>): ThemeDefinition<T>;
  resolve(overrides?: ThemeOverrides<T> | null, inherited?: ThemeValues<T>): ThemeValues<T>;
  className(runtime: StyleRuntime, values?: ThemeOverrides<T> | null): string;
}

function record(value: unknown): value is Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

/** 定义只拥有冻结数据；有效主题和规则始终由组件/请求的 runtime 拥有。 */
export function defineTheme<const T extends ThemeTree>(
  name: string,
  defaults: T,
): ThemeDefinition<T> {
  validateStyleName(name);
  const paths = new Set<object>();
  function leaf(value: unknown, expected?: string): string | number {
    if (
      (typeof value !== 'string' && typeof value !== 'number') ||
      (expected && typeof value !== expected)
    )
      throw new TypeError('Theme leaves must retain their string or number type.');
    // 校验器不挂到可跨请求复用的定义上，避免缓存各请求的覆盖值。
    if (createDeclarationBinding('--zt-validation').inline(value) === undefined)
      throw new TypeError('CSS-wide keywords cannot be theme variable values.');
    return value;
  }
  function copy(value: unknown): ThemeTree {
    if (!record(value) || paths.has(value))
      throw new TypeError('Theme trees must be acyclic plain objects.');
    paths.add(value);
    try {
      const keys = Reflect.ownKeys(value);
      if (!keys.length || keys.some((key) => typeof key !== 'string' || !key || key.length > 128))
        throw new TypeError('Theme groups need named fields.');
      const result: Record<string, string | number | ThemeTree> = Object.create(null);
      for (const key of (keys as string[]).sort()) {
        const entry = value[key];
        result[key] = typeof entry === 'object' && entry !== null ? copy(entry) : leaf(entry);
      }
      return Object.freeze(result);
    } finally {
      paths.delete(value);
    }
  }
  const baseline = copy(defaults);
  const variables: { path: readonly string[]; name: `--${string}` }[] = [];
  const identities = new Set<string>();
  const shape: [readonly string[], string][] = [];
  function tokens(tree: ThemeTree, path: readonly string[]): Record<string, CssVariable | object> {
    const result: Record<string, CssVariable | object> = Object.create(null);
    for (const [key, value] of Object.entries(tree)) {
      const parts = [...path, key];
      if (typeof value === 'object') result[key] = tokens(value, parts);
      else {
        const variable = `--zt-${hashText(JSON.stringify([name, parts]))}` as const;
        if (identities.has(variable)) throw new Error('Theme variable identity collision.');
        identities.add(variable);
        variables.push({ path: parts, name: variable });
        shape.push([parts, typeof value]);
        result[key] = cssVar(variable, String(value));
      }
    }
    return Object.freeze(result);
  }
  const references = tokens(baseline, []);
  function merge(base: ThemeTree, previous: ThemeTree, override: unknown): ThemeTree {
    if (override === null) return base;
    // 已冻结且验证过的默认/父节点可以直接复用；不缓存外部输入或请求数据。
    if (override === undefined || override === previous) return previous;
    if (!record(override)) throw new TypeError('Theme overrides must match their declared group.');
    for (const key of Reflect.ownKeys(override))
      if (typeof key !== 'string' || !Object.hasOwn(base, key))
        throw new TypeError('Unknown theme field: ' + String(key));
    const result: Record<string, string | number | ThemeTree> = Object.create(null);
    for (const [key, value] of Object.entries(base)) {
      const next = Object.hasOwn(override, key) ? override[key] : undefined;
      const prior = previous[key]!;
      // 同值复用已有验证结果；Object.is 保留 JS 数字叶的负零语义。
      if (next === undefined || Object.is(next, prior)) result[key] = prior;
      else if (next === null || Object.is(next, value)) result[key] = value;
      else
        result[key] =
          typeof value === 'object'
            ? merge(value, prior as ThemeTree, next)
            : leaf(next, typeof value);
    }
    return Object.freeze(result);
  }
  const definition: ThemeDefinition<T> & ThemeStyle = {
    name,
    schema: JSON.stringify(shape),
    defaults: baseline as ThemeValues<T>,
    tokens: references as ThemeTokens<T>,
    extend(overrides) {
      return defineTheme(name, definition.resolve(overrides)) as ThemeDefinition<T>;
    },
    resolve(overrides, inherited) {
      // 父快照也通过当前 schema 验证，不能按相同名字混用不兼容的定义。
      const parent = inherited === undefined ? baseline : merge(baseline, baseline, inherited);
      return merge(baseline, parent, overrides) as ThemeValues<T>;
    },
    className(runtime, values) {
      const resolved = definition.resolve(values);
      return runtime.css(themeStyle(definition, resolved));
    },
    [styleKey](resolved) {
      return (s) => {
        s.name(name);
        for (const variable of variables) {
          let value: string | number | ThemeTree = resolved;
          for (const part of variable.path) value = (value as ThemeTree)[part]!;
          s.custom.raw(variable.name, value as string | number);
        }
      };
    },
  };
  return Object.freeze(definition);
}
