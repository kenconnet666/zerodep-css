import { hash } from './names.js';

import type { BxValue } from './bx.js';
type Writer = (key: string, body: string | null) => void;
type Schedule = (update: () => void) => () => void;
interface Group {
  key: string;
  name: string;
  readers: Array<() => BxValue>;
  live: boolean;
  body?: string;
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
  let disposed = false;

  function update(group: Group) {
    if (disposed) return;
    const body = group.readers
      .map((read, index) => {
        const value = read();
        return value == null ? '' : `--${group.name}-${index}:${String(value)};`;
      })
      .join('');
    // 空值清空声明但保留关联，恢复值时不必重新登记目标类。
    write(group.key, body);
    group.body = body;
  }

  const api = {
    derived<T>(site: string, source: T): T {
      // 身份属于派生实例。同一 getter 被 computed() 多次使用时也不能串用 previous 值。
      const owner = {};
      const wrap =
        (read: Function) =>
        (...args: unknown[]) =>
          api.frame(site, [owner], () => read(...args));
      if (typeof source === 'function') return wrap(source) as T;
      if (
        source &&
        typeof source === 'object' &&
        'get' in source &&
        typeof source.get === 'function'
      )
        return { ...source, get: wrap(source.get) } as T;
      return source;
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
      if (disposed) throw new Error('CSS binding scope has been disposed.');
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
      if (disposed) throw new Error('CSS binding scope has been disposed.');
      const counts = frame?.counts ?? definitionCounts;
      const count = counts.get(site) ?? 0;
      counts.set(site, count + 1);
      const entries = frame?.groups.get(site) ?? [];
      let group = frame ? entries[count] : undefined;
      const fresh = !group;
      if (!group) {
        const key = `${prefix}:${frame ? `frame:${frame.site}:${frame.id}` : 'setup'}:${site}:${count}`;
        group = { key, name: `zv-${hash(key)}`, readers: [], live: false };
        groups.set(key, group);
        if (frame) {
          entries[count] = group;
          frame.groups.set(site, entries);
        }
      }
      const previousReaders = group.readers,
        previousLive = group.live,
        previousBody = group.body;
      group.readers = [];
      group.live = false;
      const previous = current;
      current = group;
      try {
        const parts = produce();
        // 常量也生成变量，只是无需订阅。模板/派生帧使用框架本次求值的追踪。
        if (group.readers.length || previousBody !== undefined) {
          if (fresh && !frame && group.live) group.stop = schedule(() => update(group!));
          else update(group);
        }
        const cached = reuseResult ? group.cached : undefined;
        if (
          cached?.register === register &&
          parts.length === cached.parts.length &&
          parts.every((part, index) => part === cached.parts[index])
        )
          return cached.result as Result;
        const result = register(...parts);
        // 只缓存平铺字符串，避免数组原地修改误命中；globalCss 必须保留调用顺序。
        group.cached =
          reuseResult && parts.every((part) => typeof part === 'string')
            ? { register, parts: parts.slice(), result }
            : undefined;
        return result;
      } catch (error) {
        // 表达式或宿主登记失败时撤回本次绑定，避免半成品订阅和变量继续存活。
        group.readers = previousReaders;
        group.live = previousLive;
        if (fresh) {
          group.stop?.();
          groups.delete(group.key);
          if (frame) entries.pop();
          counts.set(site, count);
        }
        write(group.key, previousBody ?? null);
        group.body = previousBody;
        throw error;
      } finally {
        current = previous;
      }
    },
    bind(site: string, read: () => BxValue, constant = false): string {
      if (runtimeOnly)
        throw new Error(
          `${locations?.[site] ?? 'bx'}: bx() is not supported in this template scope; bind in setup or use an ordinary CSS value.`,
        );
      if (!current)
        return api.capture(
          site,
          (value: string) => value,
          () => [api.bind(site, read, constant)],
        );
      if (!constant) current.live = true;
      const slot = current.readers.push(read) - 1;
      return `var(--${current.name}-${slot})`;
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      for (const group of groups.values()) {
        group.stop?.();
        // 条件分支可能已清空 readers，曾经登记的值仍需随组件清理。
        write(group.key, null);
      }
      groups.clear();
      frames.clear();
      definitionCounts.clear();
    },
  };
  return api;
}
