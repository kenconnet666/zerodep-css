import type { StyleFactory } from './builder-types.js';

export interface StyleConfig {
  readonly debug?: boolean;
}
export interface StyleSource {
  readonly file: string;
  readonly line: number;
  readonly column: number;
}
export interface StyleMetadata {
  name?: string;
  debug?: boolean;
  source?: StyleSource;
}
export interface StyleDebug {
  readonly declarations: number;
  readonly sources: readonly StyleSource[];
}
const sourceKey: unique symbol = Symbol('zerodep.style-source');
const preparedKey: unique symbol = Symbol('zerodep.prepared-style');

export function validateStyleName(value: unknown): asserts value is string {
  if (
    typeof value !== 'string' ||
    !value.length ||
    value.length > 128 ||
    !/^[\p{L}\p{N}_-]+$/u.test(value)
  )
    throw new TypeError('Style names must contain 1–128 letters, digits, underscores or hyphens.');
}
export function validateStyleSource(value: unknown): StyleSource {
  if (!value || typeof value !== 'object') throw new TypeError('Invalid style source.');
  const { file, line, column } = value as StyleSource;
  if (
    typeof file !== 'string' ||
    !file ||
    file.length > 1024 ||
    file.startsWith('/') ||
    /^[a-z][a-z0-9+.-]*:/i.test(file) ||
    file.includes('\\') ||
    /[\u0000-\u001f]/.test(file) ||
    /(?:^|\/)\.\.(?:\/|$)/.test(file) ||
    !Number.isSafeInteger(line) ||
    line < 1 ||
    !Number.isSafeInteger(column) ||
    column < 1
  )
    throw new TypeError('Style source must use a project-relative path and positive positions.');
  return Object.freeze({ file, line, column });
}
export function validateStyleDebug(value: unknown): StyleDebug {
  if (!value || typeof value !== 'object') throw new TypeError('Invalid style debug metadata.');
  const { declarations, sources } = value as StyleDebug;
  if (
    !Number.isSafeInteger(declarations) ||
    declarations < 0 ||
    !Array.isArray(sources) ||
    sources.length > 32
  )
    throw new TypeError('Invalid style debug metadata.');
  return Object.freeze({ declarations, sources: Object.freeze(sources.map(validateStyleSource)) });
}
export function setStyleConfig(metadata: StyleMetadata, config: unknown): void {
  if (!config || typeof config !== 'object' || Array.isArray(config))
    throw new TypeError('Expected local style configuration.');
  for (const key of Object.keys(config))
    if (key !== 'debug') throw new TypeError('Unknown local style option: ' + key);
  const { debug } = config as StyleConfig;
  if (debug === undefined) return;
  if (typeof debug !== 'boolean') throw new TypeError('Style debug must be boolean.');
  if (metadata.debug !== undefined && metadata.debug !== debug)
    throw new Error('Conflicting local style configuration.');
  metadata.debug = debug;
}

/** 生成代码的来源标记；只包装函数，不在模块级保存应用或请求状态。 */
export function withStyleSource<T>(factory: StyleFactory<T>, source: StyleSource): StyleFactory<T> {
  const normalized = validateStyleSource(source);
  const wrapped: StyleFactory<T> = (builder) => factory(builder);
  Object.defineProperty(wrapped, sourceKey, { value: normalized });
  const key = getPreparedKey(factory);
  if (key) Object.defineProperty(wrapped, preparedKey, { value: key });
  return wrapped;
}

/** 仅供生成代码：key 必须覆盖全部静态源码；可变读取已移到元素绑定。 */
export function prepareStyle<T>(factory: StyleFactory<T>, key: string): StyleFactory<T> {
  if (typeof factory !== 'function' || !/^[a-f0-9]{64}$/.test(key))
    throw new TypeError('Invalid prepared style.');
  const wrapped: StyleFactory<T> = (builder) => factory(builder);
  Object.defineProperty(wrapped, preparedKey, { value: key });
  const source = getStyleSource(factory);
  if (source) Object.defineProperty(wrapped, sourceKey, { value: source });
  return wrapped;
}
export function getPreparedKey(factory: unknown): string | undefined {
  return typeof factory === 'function'
    ? (factory as { [preparedKey]?: string })[preparedKey]
    : undefined;
}
export function getStyleSource(factory: unknown): StyleSource | undefined {
  return typeof factory === 'function'
    ? (factory as { [sourceKey]?: StyleSource })[sourceKey]
    : undefined;
}
