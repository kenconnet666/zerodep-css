import {
  computed,
  getCurrentInstance,
  getCurrentScope,
  onBeforeUpdate,
  onScopeDispose,
  onUpdated,
  type ComputedRef,
} from 'vue';

/**
 * 编译后的列表计算留在原模板求值点，只为实际渲染的项建立派生值。
 * 缓存归组件 scope 所有，不能把隐藏行或旧行的值提前读取到全数组 map 中。
 */
export function useStyleMemo<Value, Result>(
  factory: (value: Value, index: number) => Result,
): (value: Value, index: number) => Result {
  if (!getCurrentScope() || !getCurrentInstance())
    throw new Error('Compiled style memo requires a Vue component scope.');
  const entries = new Map<Value, Map<number, { value: ComputedRef<Result>; epoch: number }>>();
  let epoch = 0;
  let closed = false;
  onBeforeUpdate(() => {
    epoch++;
  });
  onUpdated(() => {
    for (const [key, indexed] of entries) {
      for (const [index, entry] of indexed) if (entry.epoch !== epoch) indexed.delete(index);
      if (!indexed.size) entries.delete(key);
    }
  });
  onScopeDispose(() => {
    closed = true;
    entries.clear();
  });
  return (value, index) => {
    if (closed) throw new Error('Compiled style memo has been disposed.');
    let indexed = entries.get(value);
    if (!indexed) {
      indexed = new Map();
      entries.set(value, indexed);
    }
    let entry = indexed.get(index);
    if (!entry) {
      entry = { value: computed(() => factory(value, index)), epoch };
      indexed.set(index, entry);
    }
    entry.epoch = epoch;
    return entry.value.value;
  };
}
