import { computed, isReactive, isRef, type ComputedRef, type VNode } from 'vue';
import { Css } from '@zerodep-css/core';

type Guard =
  | readonly [value: unknown]
  | readonly [reactiveValue: unknown, stable: true]
  | readonly [author: unknown, property: string, member: string];
export interface TemplateCacheEntry {
  inputs: unknown[];
  value: ComputedRef<unknown>;
}
type Cache = Array<TemplateCacheEntry | undefined>;
export interface Row {
  locals: unknown[];
  cache: Cache;
}
let system: Css | undefined;

function descriptor(value: object, name: string): PropertyDescriptor | undefined {
  for (let current: object | null = value; current; current = Object.getPrototypeOf(current)) {
    const found = Object.getOwnPropertyDescriptor(current, name);
    if (found) return found;
  }
}

/** 不调用自定义 getter 来判断是否可缓存；覆写方法保持原有逐次执行语义。 */
function inputsFor(guards: readonly Guard[]): unknown[] | undefined {
  const inputs: unknown[] = [];
  for (const guard of guards) {
    if (guard.length !== 3) {
      const value = guard[0];
      if (value !== null && typeof value === 'object' && !isReactive(value) && !isRef(value))
        return;
      // const ref/computed 的标量交给 computed 自己失效，不因值变化重新创建 computed。
      if (guard.length === 1 || (value !== null && typeof value === 'object')) inputs.push(value);
      continue;
    }
    const [author, property, member] = guard;
    if (!(author instanceof Css)) return;
    if (!property) {
      if (
        descriptor(author, member)?.value !== descriptor(Css.prototype, member)?.value ||
        descriptor(author, '_selector')?.value !== descriptor(Css.prototype, '_selector')?.value
      )
        return;
      inputs.push(author);
      continue;
    }
    const entry = descriptor(author, property);
    if (!entry || (entry.get && entry.get !== descriptor(Css.prototype, property)?.get)) return;
    const target = Reflect.get(author, property) as object;
    if (!target || typeof target !== 'object') return;
    const own = descriptor(target, member);
    if (!own || !('value' in own)) return;
    inputs.push(author, target, own.value);
    if (typeof own.value === 'string') continue;
    const reference = Reflect.get((system ??= new Css()), property);
    if (
      typeof own.value !== 'function' ||
      own.value !== reference?.[member] ||
      descriptor(target, 'raw')?.value !== reference.raw ||
      descriptor(target, 'declaration')?.value !== reference.declaration
    )
      return;
  }
  return inputs;
}

/** 每个组件独立持有记录；只弱关联 Vue 自己保存的 VNode，不维护历史 key 表。 */
export function createTemplateCache() {
  const rows = new WeakMap<VNode, Row>();
  return {
    template<T>(
      _site: string,
      guards: readonly Guard[],
      run: () => T,
      cache?: Cache,
      index = 0,
    ): T {
      const inputs = cache && inputsFor(guards);
      if (!cache || !inputs) {
        if (cache) cache[index] = undefined;
        return run();
      }
      let cell = cache[index];
      if (
        !cell ||
        cell.inputs.length !== inputs.length ||
        inputs.some((value, i) => !Object.is(value, cell!.inputs[i]))
      ) {
        cell = cache[index] = { inputs, value: computed(run) };
      }
      return cell.value.value as T;
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
