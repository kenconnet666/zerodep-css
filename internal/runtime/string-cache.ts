function weight(key: string, value: string | boolean): number {
  return key.length + (typeof value === 'string' && value !== key ? value.length : 0);
}

/** 绑定 owner 的 FIFO 缓存；按 UTF-16 字符数预算，超大合法值正常处理但不驻留。 */
export class StringCache<Value extends string | boolean> {
  readonly #values = new Map<string, Value>();
  #characters = 0;
  constructor(
    readonly maxEntries = 128,
    readonly maxCharacters = 65536,
  ) {
    if (
      !Number.isSafeInteger(maxEntries) ||
      maxEntries < 1 ||
      !Number.isSafeInteger(maxCharacters) ||
      maxCharacters < 1
    )
      throw new TypeError('Cache budgets must be positive safe integers.');
    Object.freeze(this);
  }
  get size(): number {
    return this.#values.size;
  }
  get characters(): number {
    return this.#characters;
  }
  get(key: string): Value | undefined {
    return this.#values.get(key);
  }
  set(key: string, value: Value): void {
    const cost = weight(key, value);
    if (this.#values.has(key)) {
      this.#characters -= weight(key, this.#values.get(key)!);
      this.#values.delete(key);
    }
    if (cost > this.maxCharacters) return;
    while (this.#values.size >= this.maxEntries || this.#characters + cost > this.maxCharacters) {
      const oldest = this.#values.keys().next().value!;
      this.#characters -= weight(oldest, this.#values.get(oldest)!);
      this.#values.delete(oldest);
    }
    this.#values.set(key, value);
    this.#characters += cost;
  }
}
