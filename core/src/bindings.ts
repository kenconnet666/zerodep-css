import { hash } from './names.js';

import type { BxValue } from './bx.js';
type Writer = (key: string, body: string | null) => void;
type Schedule = (update: () => void) => () => void;
interface Group {
  key: string;
  name: string;
  readers: Array<() => BxValue>;
  stop?: () => void;
  cached?: { register: unknown; parts: unknown[]; result: unknown };
}
interface Frame {
  id: number;
  site: string;
  counts: Map<string, number>;
  groups: Map<string, Group[]>;
}
interface FrameNode {
  children: Map<unknown, FrameNode>;
  frame?: Frame;
  next?: number;
}

/** 只管理 bx 的变量值与生命周期，不识别属性、单位或作者方法。 */
export function createBindings(
  prefix: string,
  write: Writer,
  schedule: Schedule,
  locations?: Readonly<Record<string, string>>,
) {
  const groups = new Map<string, Group>();
  const definitionCounts = new Map<string, number>();
  const frames = new Map<string, FrameNode>();
  let runtimeOnly = false;
  let frame: Frame | undefined;
  let current: Group | undefined;

  function update(group: Group) {
    const body = group.readers
      .map((read, index) => {
        const value = read();
        return value == null ? '' : `--${group.name}-${index}:${String(value)};`;
      })
      .join('');
    // 空值清空声明但保留关联，恢复值时不必重新登记目标类。
    write(group.key, body);
  }

  const api = {
    derived<Args extends unknown[], Result>(
      site: string,
      read: (...args: Args) => Result,
    ): (...args: Args) => Result {
      // 同一工厂创建的多个派生值也必须隔离；读取函数身份在派生创建时固定。
      return (...args: Args): Result => api.frame(site, [read], () => read(...args));
    },
    runtime<T>(run: () => T): T {
      const previous = runtimeOnly;
      runtimeOnly = true;
      try {
        return run();
      } finally {
        runtimeOnly = previous;
      }
    },
    frame<T>(site: string, keys: unknown[], run: () => T): T {
      const previous = frame;
      let node: FrameNode = frames.get(site) ?? { children: new Map() };
      if (!frames.has(site)) frames.set(site, node);
      const root = node;
      for (const key of keys) {
        let child: FrameNode | undefined = node.children.get(key);
        if (!child) {
          child = { children: new Map() };
          node.children.set(key, child);
        }
        node = child;
      }
      if (!node.frame) {
        node.frame = { id: root.next ?? 0, site, counts: new Map(), groups: new Map() };
        root.next = (root.next ?? 0) + 1;
      }
      frame = node.frame;
      frame.counts.clear();
      try {
        return run();
      } finally {
        frame = previous;
      }
    },
    capture<Part, Result>(
      site: string,
      register: (...parts: Part[]) => Result,
      produce: () => Part[],
      reuseResult = true,
    ): Result {
      const counts = frame?.counts ?? definitionCounts;
      const count = counts.get(site) ?? 0;
      counts.set(site, count + 1);
      const entries = frame?.groups.get(site) ?? [];
      let group = frame ? entries[count] : undefined;
      const fresh = !group;
      if (!group) {
        const key = `${prefix}:${frame ? `frame:${frame.site}:${frame.id}` : 'setup'}:${site}:${count}`;
        group = { key, name: `zv-${hash(key)}`, readers: [] };
        groups.set(key, group);
        if (frame) {
          entries[count] = group;
          frame.groups.set(site, entries);
        }
      }
      group.readers = [];
      const previous = current;
      current = group;
      let parts: Part[];
      try {
        parts = produce();
      } finally {
        current = previous;
      }
      if (group.readers.length) {
        if (fresh && !frame) group.stop = schedule(() => update(group!));
        else update(group);
      }
      // 值变化时模板字符串通常不变。只缓存平铺字符串，避免可变数组的别名误命中。
      // 命名全局块可被其他调用覆盖，必须再次交给宿主处理覆盖顺序。
      const cached = reuseResult ? group.cached : undefined;
      if (
        cached?.register === register &&
        parts.length === cached.parts.length &&
        parts.every((part, index) => part === cached.parts[index])
      )
        return cached.result as Result;
      const result = register(...parts);
      group.cached =
        reuseResult && parts.every((part) => typeof part === 'string')
          ? { register, parts: parts.slice(), result }
          : undefined;
      return result;
    },
    bind(site: string, read: () => BxValue): string {
      if (runtimeOnly)
        throw new Error(
          `${locations?.[site] ?? 'bx'}: bx() is not supported in this template scope; bind in setup or use an ordinary CSS value.`,
        );
      if (!current)
        return api.capture(
          site,
          (value: string) => value,
          () => [api.bind(site, read)],
        );
      const slot = current.readers.push(read) - 1;
      return `var(--${current.name}-${slot})`;
    },
    dispose() {
      for (const group of groups.values()) {
        group.stop?.();
        // 条件分支可能已清空 readers，曾经登记的值仍需随组件清理。
        write(group.key, null);
      }
      groups.clear();
      frames.clear();
    },
  };
  return api;
}
