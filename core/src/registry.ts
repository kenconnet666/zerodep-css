import { hash } from './names.js';
import { joinFragments, type CssInput } from './fragments.js';
export type { CssInput } from './fragments.js';

export interface CssRule {
  className: string;
  body: string;
  kind?: 'class' | 'keyframes' | 'global' | 'bindings';
  key?: string;
  targets?: string[];
  root?: boolean;
}

export function ruleText(rule: CssRule): string {
  if (rule.kind === 'global') return rule.body;
  if (rule.kind === 'bindings') {
    const selectors = [
      ...(rule.root ? [':root'] : []),
      ...(rule.targets ?? []).map((name) => `.${name}`),
    ];
    return selectors.length ? `${selectors.join(',')}{${rule.body}}` : '';
  }
  if (rule.kind === 'keyframes') return `@keyframes ${rule.className}{${rule.body}}`;
  return `.${rule.className}{${rule.body}}`;
}

function ruleName(kind: CssRule['kind'], body: string, key?: string): string {
  return `${kind === 'keyframes' ? 'zk' : kind === 'global' ? 'zg' : kind === 'bindings' ? 'zv' : 'z'}-${hash(kind === 'global' || kind === 'bindings' ? key! : body)}`;
}

/** 普通类与动画内容不可变；全局块按 key 更新，保留 Map 中的原有次序。 */
export function createRuleRegistry(
  insert: (className: string, body: string, rule: CssRule) => void,
  updateGlobal: (key: string, rule?: CssRule, kind?: 'global' | 'bindings') => void = () => {},
) {
  let byContent = { class: new Map<string, string>(), keyframes: new Map<string, string>() };
  let byName = new Map<string, CssRule>();
  let globals = new Map<string, CssRule>();
  let bindings = new Map<string, CssRule>();
  let bindingNames = new Map<string, string>();
  const references = new Map<string, { ids: string[]; root: boolean }>();
  const owners = new WeakMap<object, number>();
  let ownerCount = 0;

  function referencedBindings(body: string): string[] {
    const result = new Set<string>();
    const scan = (text: string) => {
      for (const match of text.matchAll(/var\(--(zv-[a-z0-9]+)-\d+\)/g)) result.add(match[1]!);
    };
    scan(body);
    for (const match of body.matchAll(/\bzk-[a-z0-9]+\b/g)) {
      const animation = byName.get(match[0]);
      if (animation?.kind === 'keyframes') scan(animation.body);
    }
    return [...result];
  }

  function attachBindings(name: string, refs: readonly string[], root = false) {
    for (const ref of refs) {
      const rule = bindings.get(ref);
      if (rule && ((name && !rule.targets!.includes(name)) || (root && !rule.root))) {
        const next = {
          ...rule,
          targets: name && !rule.targets!.includes(name) ? [...rule.targets!, name] : rule.targets!,
          ...(root ? { root: true } : {}),
        };
        updateGlobal(`bindings:${rule.key}`, next, 'bindings');
        bindings.set(ref, next);
      }
    }
  }

  function register(body: string, kind: 'class' | 'keyframes'): string {
    const content = byContent[kind];
    const existing = content.get(body);
    if (existing) {
      const refs = references.get(existing);
      if (refs) attachBindings(existing, refs.ids, refs.root);
      return existing;
    }
    const name = ruleName(kind, body);
    if (byName.has(name)) throw new Error('CSS class hash collision.');
    const rule: CssRule =
      kind === 'class' ? { className: name, body } : { className: name, body, kind };
    insert(name, body, rule);
    if (kind === 'class') {
      const refs = referencedBindings(body);
      // 兄弟 / 选择器列表可能越过目标元素；私有且实例唯一的变量可扩大到文档根。
      const root = /[+,~|][^{};]*\{/.test(body);
      if (refs.length) {
        attachBindings(name, refs, root);
        references.set(name, { ids: refs, root });
      }
    }
    // 已知名字由上面生成；成功写入后直接登记，不再重复计算哈希。
    content.set(body, name);
    byName.set(name, rule);
    return name;
  }

  function resolvePart(input: CssInput): string {
    if (typeof input === 'string') {
      // 仅本库样式类使用 z- 前缀，仍以登记表精确匹配为准。
      return (input.startsWith('z-') ? byName.get(input)?.body : undefined) ?? input;
    }
    return input ? input.map(resolvePart).join('') : '';
  }

  const css = (...parts: CssInput[]) => {
    // rest 数组归本次调用所有；复用它，普通字符串路径不另建展开数组。
    for (let index = 0; index < parts.length; index++) parts[index] = resolvePart(parts[index]);
    const body = parts.join('');
    return register(body, 'class');
  };
  return {
    bindingId(owner: object): number {
      if (!owners.has(owner)) owners.set(owner, ownerCount++);
      return owners.get(owner)!;
    },
    css,
    keyframes: (...parts: CssInput[]) => register(joinFragments(parts), 'keyframes'),
    globalCss(key: string, ...parts: CssInput[]): void {
      if (!parts.length) {
        if (globals.has(key)) {
          updateGlobal(key);
          globals.delete(key);
        }
        return;
      }
      const body = joinFragments(parts);
      if (globals.get(key)?.body === body) return;
      const rule: CssRule = { kind: 'global', key, className: ruleName('global', body, key), body };
      updateGlobal(key, rule);
      attachBindings('', referencedBindings(body), true);
      globals.set(key, rule);
    },
    /** 编译适配器专用：值与目标类分开更新，不改变普通 css() 的字符串结果。 */
    setBindings(key: string, body: string | null): void {
      const name = bindingNames.get(key) ?? ruleName('bindings', '', key);
      const previous = bindings.get(name);
      if (body === null) {
        if (previous) {
          updateGlobal(`bindings:${key}`, undefined, 'bindings');
          bindings.delete(name);
          bindingNames.delete(key);
        }
        return;
      }
      if (previous?.body === body) return;
      const rule: CssRule = {
        kind: 'bindings',
        key,
        className: name,
        body,
        targets: previous?.targets ?? [],
        ...(previous?.root ? { root: true } : {}),
      };
      if (previous && previous.key !== key) throw new Error('CSS binding hash collision.');
      updateGlobal(`bindings:${key}`, rule, 'bindings');
      bindings.set(name, rule);
      bindingNames.set(key, name);
    },
    hydrate(rules: readonly CssRule[]): void {
      const nextContent = {
        class: new Map(byContent.class),
        keyframes: new Map(byContent.keyframes),
      };
      const nextNames = new Map(byName);
      const nextGlobals = new Map(globals);
      const nextBindings = new Map(bindings);
      for (const rule of rules) {
        const kind = rule.kind ?? 'class';
        if (
          !['class', 'keyframes', 'global', 'bindings'].includes(kind) ||
          typeof rule.body !== 'string' ||
          ((kind === 'global' || kind === 'bindings') && typeof rule.key !== 'string') ||
          rule.className !== ruleName(kind, rule.body, rule.key)
        )
          throw new Error('CSS class does not match its body.');
        if (kind === 'bindings') {
          if (
            (rule.root !== undefined && typeof rule.root !== 'boolean') ||
            !Array.isArray(rule.targets) ||
            !rule.targets.every((name) => typeof name === 'string' && /^z-[a-z0-9]+$/.test(name))
          )
            throw new Error('Invalid CSS binding targets.');
          const previous = nextBindings.get(rule.className);
          if (previous && (previous.body !== rule.body || previous.key !== rule.key))
            throw new Error('CSS binding key has conflicting content.');
          nextBindings.set(rule.className, { ...rule, targets: [...rule.targets] });
        } else if (kind === 'global') {
          if (nextGlobals.has(rule.key!) && nextGlobals.get(rule.key!)?.body !== rule.body)
            throw new Error('CSS global key has conflicting content.');
          nextGlobals.set(rule.key!, { ...rule });
        } else {
          if (nextNames.has(rule.className) && nextNames.get(rule.className)?.body !== rule.body)
            throw new Error('CSS class hash collision.');
          nextContent[kind].set(rule.body, rule.className);
          nextNames.set(rule.className, { ...rule });
        }
      }
      byContent = nextContent;
      byName = nextNames;
      globals = nextGlobals;
      bindings = nextBindings;
      bindingNames = new Map([...bindings.values()].map((rule) => [rule.key!, rule.className]));
      for (const rule of byName.values()) {
        if (!rule.kind || rule.kind === 'class') {
          const refs = referencedBindings(rule.body);
          if (refs.length)
            references.set(rule.className, { ids: refs, root: /[+,~|][^{};]*\{/.test(rule.body) });
        }
      }
    },
    rules(): CssRule[] {
      return [...globals.values(), ...bindings.values(), ...byName.values()].map((rule) => ({
        ...rule,
        ...(rule.targets ? { targets: [...rule.targets] } : {}),
      }));
    },
    get size() {
      return byName.size + globals.size + bindings.size;
    },
    stats() {
      return {
        rules: byName.size + globals.size + bindings.size,
        classes: byContent.class.size,
        animations: byContent.keyframes.size,
        globals: globals.size,
        bindings: bindings.size,
      };
    },
  };
}
