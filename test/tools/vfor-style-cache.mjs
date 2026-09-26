import { computed } from 'vue';

// 只随 Vue 已有 VNode 缓存保留，不另建长期 key 表。研究原型，不是公开 API。
const records = new WeakMap();

export function readRowStyle(previous, key, locals, evaluate) {
  const record = previous?.key === key ? records.get(previous) : undefined;
  if (
    record &&
    record.locals.length === locals.length &&
    locals.every((value, index) => Object.is(value, record.locals[index]))
  )
    return record;
  // 同 key 替换对象或索引改变时重建，避免 getter 捕获旧的循环变量。
  return { locals, className: computed(evaluate) };
}

export function rememberRowStyle(vnode, record) {
  records.set(vnode, record);
  return vnode;
}
