/** 浏览器宿主的所有权由轻量共享模块协调；SSR 请求只使用局部注册表。 */
const targets = new WeakMap<object, Map<string, unknown>>();

interface Registration {
  readonly name: string;
  readonly body: string;
}

interface RegistrationOwner {
  readonly owner: symbol;
  readonly id: string;
  readonly body: string;
}

const documentRegistrations = new WeakMap<Document, Map<string, RegistrationOwner[]>>();

export function assertTargetAvailable(target: object, namespace: string): void {
  if (targets.get(target)?.has(namespace))
    throw new Error('This target already has a runtime for namespace ' + namespace);
}

export function registerTarget(target: object, namespace: string, runtime: unknown): void {
  assertTargetAvailable(target, namespace);
  let entries = targets.get(target);
  if (!entries) {
    entries = new Map();
    targets.set(target, entries);
  }
  entries.set(namespace, runtime);
}

export function releaseTarget(target: object, namespace: string, runtime: unknown): void {
  const entries = targets.get(target);
  if (!entries || entries.get(namespace) !== runtime) return;
  entries.delete(namespace);
  if (!entries.size) targets.delete(target);
}

export function findTargetRuntime<T>(target: object, namespace: string): T | undefined {
  return targets.get(target)?.get(namespace) as T | undefined;
}

/** @property 在同一 Document 内生效；ShadowRoot 也参与这份冲突检查。 */
export function createRegistrationOwner(document: Document | null, namespace: string) {
  const owner = Symbol(namespace);
  let shared = document && documentRegistrations.get(document);
  if (!shared) {
    shared = new Map();
    if (document) documentRegistrations.set(document, shared);
  }
  return {
    validate(id: string, entries: readonly Registration[], replacing?: string): void {
      for (const entry of entries)
        for (const existing of shared.get(entry.name) ?? []) {
          if (existing.owner === owner && (existing.id === replacing || existing.id === id))
            continue;
          if (existing.body !== entry.body)
            throw new Error('Conflicting @property registration: ' + entry.name);
        }
    },
    claim(id: string, entries: readonly Registration[]): void {
      for (const entry of entries) {
        const list = shared.get(entry.name) ?? [];
        list.push({ owner, id, body: entry.body });
        shared.set(entry.name, list);
      }
    },
    release(id: string, entries: readonly Registration[]): void {
      for (const entry of entries) {
        const remaining = (shared.get(entry.name) ?? []).filter(
          (registration) => registration.owner !== owner || registration.id !== id,
        );
        if (remaining.length) shared.set(entry.name, remaining);
        else shared.delete(entry.name);
      }
    },
  };
}
