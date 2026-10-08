/** 从唯一的原始值表建立自有声明字段；保留枚举、子类覆盖和固定属性名的既有行为。 */
export function initializeKeywordDeclarations(
  target: object,
  property: string,
  values: Readonly<Record<string, string>>,
): void {
  for (const key of Object.keys(values))
    Object.defineProperty(target, key, {
      value: `${property}:${values[key]};`,
      enumerable: true,
      configurable: true,
      writable: true,
    });
}

/** 公共导出仍是原构造器，保留 instanceof、继承及调试名称，不额外包装实例。 */
export function keywordConstructor<T extends new () => object>(constructor: T, name: string): T {
  Object.defineProperty(constructor, 'name', { value: name, configurable: true });
  return constructor;
}
