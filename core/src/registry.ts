import { hash } from './names.js';
import { classNames, type ClassNames } from './class-names.js';

export interface CssRule {
  className: string;
  body: string;
  kind?: 'class' | 'keyframes' | 'global';
  key?: string;
}

export function ruleText(rule: CssRule): string {
  if (rule.kind === 'global') return rule.body;
  if (rule.kind === 'keyframes') return `@keyframes ${rule.className}{${rule.body}}`;
  return `.${rule.className}{${rule.body}}`;
}

function ruleName(kind: CssRule['kind'], body: string, key?: string): string {
  return `${kind === 'keyframes' ? 'zk' : kind === 'global' ? 'zg' : 'z'}-${hash(kind === 'global' ? key! : body)}`;
}

/** 普通类与动画内容不可变；全局块按 key 更新，保留 Map 中的原有次序。 */
export function createRuleRegistry(
  insert: (className: string, body: string, rule: CssRule) => void,
  updateGlobal: (key: string, rule?: CssRule) => void = () => {},
) {
  let byContent = { class: new Map<string, string>(), keyframes: new Map<string, string>() };
  let byName = new Map<string, CssRule>();
  let globals = new Map<string, CssRule>();

  function register(body: string, kind: 'class' | 'keyframes'): string {
    const content = byContent[kind];
    const existing = content.get(body);
    if (existing) return existing;
    const name = ruleName(kind, body);
    if (byName.has(name)) throw new Error('CSS class hash collision.');
    const rule: CssRule =
      kind === 'class' ? { className: name, body } : { className: name, body, kind };
    insert(name, body, rule);
    // 已知名字由上面生成；成功写入后直接登记，不再重复计算哈希。
    content.set(body, name);
    byName.set(name, rule);
    return name;
  }

  const css = (...parts: string[]) => {
    const body = parts.join('');
    return register(body, 'class');
  };
  return {
    css,
    keyframes: (...parts: string[]) => register(parts.join(''), 'keyframes'),
    cx(...values: ClassNames[]): string {
      const names = classNames(values);
      const registered: string[] = [];
      const external: string[] = [];
      for (const name of names.split(/\s+/)) {
        if (!name) continue;
        const rule = byName.get(name);
        if (rule && (!rule.kind || rule.kind === 'class')) registered.push(rule.body);
        else external.push(name);
      }
      return registered.length < 2 ? names : [...external, css(...registered)].join(' ');
    },
    globalCss(key: string, ...parts: string[]): void {
      if (!parts.length) {
        if (globals.has(key)) {
          updateGlobal(key);
          globals.delete(key);
        }
        return;
      }
      const body = parts.join('');
      if (globals.get(key)?.body === body) return;
      const rule: CssRule = { kind: 'global', key, className: ruleName('global', body, key), body };
      updateGlobal(key, rule);
      globals.set(key, rule);
    },
    hydrate(rules: readonly CssRule[]): void {
      const nextContent = {
        class: new Map(byContent.class),
        keyframes: new Map(byContent.keyframes),
      };
      const nextNames = new Map(byName);
      const nextGlobals = new Map(globals);
      for (const rule of rules) {
        const kind = rule.kind ?? 'class';
        if (
          !['class', 'keyframes', 'global'].includes(kind) ||
          typeof rule.body !== 'string' ||
          (kind === 'global' && typeof rule.key !== 'string') ||
          rule.className !== ruleName(kind, rule.body, rule.key)
        )
          throw new Error('CSS class does not match its body.');
        if (kind === 'global') {
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
    },
    rules(): CssRule[] {
      return [...globals.values(), ...byName.values()].map((rule) => ({ ...rule }));
    },
    get size() {
      return byName.size + globals.size;
    },
  };
}
