import { computed, isReactive, isRef, normalizeClass, type ComputedRef, type VNode } from 'vue';
import { authorInputs } from 'zerodep-css/bindings';

type Guard =
  | readonly [value: unknown]
  | readonly [read: () => unknown, stable: true]
  | readonly [author: unknown, property: string, member: string];
export interface TemplateCacheEntry {
  inputs: unknown[];
  value: ComputedRef<string>;
  trackable: boolean;
}
type Cache = Array<TemplateCacheEntry | undefined>;
export interface Row {
  locals: unknown[];
  cache: Cache;
}
/** 不调用自定义 getter 来判断是否可缓存；覆写方法保持原有逐次执行语义。 */
function inputsFor(guards: readonly Guard[]): unknown[] | undefined {
  const inputs: unknown[] = [];
  for (const guard of guards) {
    // 已确认的响应式读取留在 computed 内，不能把依赖提前订阅到父组件渲染上。
    if (guard.length === 2) continue;
    if (guard.length === 1) {
      const value = guard[0];
      if (value !== null && typeof value === 'object' && !isReactive(value) && !isRef(value))
        return;
      inputs.push(value);
      continue;
    }
    const values = authorInputs(...guard);
    if (!values) return;
    inputs.push(...values);
  }
  return inputs;
}

/** 每个组件独立持有记录；只弱关联 Vue 自己保存的 VNode，不维护历史 key 表。 */
export function createTemplateCache() {
  const rows = new WeakMap<VNode, Row>();
  return {
    template(
      _site: string,
      guards: readonly Guard[],
      run: () => unknown,
      cache?: Cache,
      index = 0,
    ): string {
      const inputs = cache && inputsFor(guards);
      if (!cache || !inputs) {
        if (cache) cache[index] = undefined;
        return normalizeClass(run());
      }
      let cell = cache[index];
      if (
        !cell ||
        cell.inputs.length !== inputs.length ||
        inputs.some((value, i) => !Object.is(value, cell!.inputs[i]))
      ) {
        const entry: TemplateCacheEntry = {
          inputs,
          trackable: true,
          value: computed(() => {
            entry.trackable = guards.every((guard) => {
              if (guard.length !== 2) return true;
              const value = guard[0]();
              return (
                value === null || typeof value !== 'object' || isReactive(value) || isRef(value)
              );
            });
            return normalizeClass(run());
          }),
        };
        cell = cache[index] = entry;
      }
      return cell.trackable ? cell.value.value : normalizeClass(run());
    },
    row(previous: VNode | undefined, key: unknown, locals: unknown[]): Row {
      const record = previous && previous.key === key ? rows.get(previous) : undefined;
      // 普通可变对象没有响应式失效能力；保守地每轮重建，避免改变原模板语义。
      const reusable = locals.every(
        (value) => value === null || typeof value !== 'object' || isReactive(value),
      );
      if (
        reusable &&
        record &&
        record.locals.length === locals.length &&
        locals.every((value, index) => Object.is(value, record.locals[index]))
      )
        return record;
      return { locals, cache: [] };
    },
    keep(vnode: VNode, record: Row): VNode {
      rows.set(vnode, record);
      return vnode;
    },
  };
}
