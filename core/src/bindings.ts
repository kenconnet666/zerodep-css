import { Css } from './generated/author.js';
import { unitSuffix } from './generated/base.js';
import { hash } from './names.js';

type Value = string | number | undefined;
type Argument = Value | (() => Value);
type Property = { [method: string]: unknown };
type Writer = (key: string, body: string | null) => void;
type Schedule = (update: () => void) => () => void;
interface Group {
  key: string;
  name: string;
  readers: Array<() => string>;
  stop?: () => void;
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
let system: Css | undefined;

/** 编译器内部协议；公开作者方法仍返回字符串，不要求用户传 getter。 */
export function createBindings(prefix: string, write: Writer, schedule: Schedule) {
  const groups = new Map<string, Group>();
  const definitionCounts = new Map<string, number>();
  const frames = new Map<string, FrameNode>();
  let setup = true;
  let runtimeOnly = false;
  let frame: Frame | undefined;
  let current: Group | undefined;
  const effects: Array<() => void> = [];
  const warned = new Set<string>();
  const read = (value: Argument): Value => (typeof value === 'function' ? value() : value);

  function update(group: Group) {
    write(
      group.key,
      group.readers.map((get, index) => `--${group.name}-${index}:${get()};`).join(''),
    );
  }

  const api = {
    runtime<T>(run: () => T): T {
      const previous = runtimeOnly;
      runtimeOnly = true;
      try {
        return run();
      } finally {
        runtimeOnly = previous;
      }
    },
    effect(run: () => void) {
      effects.push(schedule(run));
    },
    finishSetup() {
      setup = false;
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
    capture(
      site: string,
      register: (...parts: string[]) => string,
      produce: () => string[],
    ): string {
      if (runtimeOnly || (!setup && !frame)) return register(...produce());
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
      let parts: string[];
      try {
        parts = produce();
      } finally {
        current = previous;
      }
      if (group.readers.length) {
        if (fresh && !frame) group.stop = schedule(() => update(group!));
        else update(group);
      }
      return register(...parts);
    },
    value(
      site: string,
      propertyName: string,
      property: unknown,
      method: string,
      args: Argument[],
    ): string {
      const target = property as Property;
      const invoke = target[method] as (...values: Value[]) => string;
      if (!current || runtimeOnly) return invoke.apply(property, args.map(read));
      const reference = ((system ??= new Css()) as unknown as Record<string, Property>)[
        propertyName
      ];
      if (!reference || reference[method] !== invoke || target.raw !== reference.raw) {
        if (
          (import.meta as ImportMeta & { env?: { DEV?: boolean } }).env?.DEV &&
          !warned.has(site)
        ) {
          warned.add(site);
          console.warn(
            `[zerodep-css] ${propertyName}.${method} is overridden; implicit binding retains the original runtime evaluation.`,
          );
        }
        return invoke.apply(property, args.map(read));
      }

      const name = Reflect.get(target, 'name') as string;
      const slot = (index: number, format: (value: Value) => string = (value) => String(value)) => {
        const value = args[index];
        if (typeof value !== 'function') return format(value);
        const id = current!.readers.length;
        current!.readers.push(() => format(value()));
        return `var(--${current!.name}-${id})`;
      };
      let value: string;
      if (method === 'raw') value = slot(0);
      else if (unitSuffix[method])
        value = args.map((_, i) => slot(i, (v) => `${v}${unitSuffix[method]}`)).join(' ');
      else if (method === 'rgb' || method === 'hsl') {
        const channels = [0, 1, 2].map((i) =>
          slot(i, (v) => (method === 'hsl' && i > 0 ? `${v}%` : String(v))),
        );
        value = `${method}(${channels.join(' ')}${args.length > 3 ? ` / ${slot(3, (v) => String(v ?? 1))}` : ''})`;
      } else if (['calc', 'min', 'max', 'clamp'].includes(method))
        value = `${method}(${args.map((_, i) => slot(i)).join(', ')})`;
      else return invoke.apply(property, args.map(read));
      return `${name}:${value};`;
    },
    dispose() {
      effects.forEach((stop) => stop());
      for (const group of groups.values()) {
        group.stop?.();
        if (group.readers.length) write(group.key, null);
      }
      groups.clear();
      frames.clear();
    },
  };
  return api;
}
