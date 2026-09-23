import { globalCss, buildStyleDefinition } from './builder.js';
import { browserSheet, renderStyleTag, type BrowserSheet, type StyleTarget } from './sheet.js';
import {
  canonicalSheet,
  compileAnimation,
  compileGlobal,
  compileProgram,
  namedId,
  mergeRecord,
  inspectStylesheet,
  registrations,
  renderRecord,
  validateRecord,
  type CompiledStyle,
  type OutputConfig,
  type PropertyRegistration,
  type StyleRecord,
} from './serialize.js';
import type { KeyframesDefinition, StylesheetDefinition, StyleProgram } from './style-program.js';
import type { StylesheetFactory, StyleFactory } from './builder-types.js';
import { Css, type CssConstructor } from './css.js';
import {
  validateStyleName,
  validateStyleDebug,
  getPreparedKey,
  getStyleSource,
} from './style-metadata.js';

export interface StyleManifest {
  readonly version: 1 | 2;
  readonly config: OutputConfig;
  readonly records: readonly StyleRecord[];
}
export interface RuntimeOptions {
  /** 省略时使用当前 document；Node 中默认为独立的服务端实例。 */
  readonly target?: StyleTarget | null;
  readonly namespace?: string;
  readonly layers?: readonly string[];
  readonly layer?: string;
  readonly nonce?: string;
  readonly insertionPoint?: ChildNode;
  readonly hydrate?: StyleManifest;
  readonly maxRecords?: number;
  /** 收集本次样式诊断元数据，不参与 CSS 内容哈希。 */
  readonly debug?: boolean;
}
export interface GlobalStyleHandle {
  readonly id: string;
  update(value: StylesheetDefinition | StylesheetFactory): void;
  dispose(): void;
}
export interface RuntimeStats {
  readonly records: number;
  readonly classes: number;
  readonly keyframes: number;
  readonly globals: number;
  readonly cssCharacters: number;
}
export interface StyleRuntime<C extends Css = Css> {
  readonly config: OutputConfig;
  css(factory: StyleFactory<C>): string;
  css<T extends Css>(factory: StyleFactory<T>, cssType: CssConstructor<T>): string;
  keyframes(definition: KeyframesDefinition): string;
  mountGlobal(value: StylesheetDefinition | StylesheetFactory): GlobalStyleHandle;
  /** 认领 SSR 恢复的全局槽位，不根据内容猜测组件身份。 */
  claimGlobal(id: string, value?: StylesheetDefinition | StylesheetFactory): GlobalStyleHandle;
  snapshot(): StyleManifest;
  renderStyles(): string;
  renderManifest(): string;
  stats(): RuntimeStats;
  dispose(): void;
}

const owners = new WeakMap<StyleTarget, Map<string, StyleRuntime>>();
interface RegistrationOwner {
  owner: symbol;
  id: string;
  body: string;
}
const documentRegistrations = new WeakMap<Document, Map<string, RegistrationOwner[]>>();

export function assertSameRecord(previous: StyleRecord, next: StyleRecord): void {
  mergeRecord(previous, next);
}
function configFor(options: RuntimeOptions): OutputConfig {
  const requestedNamespace = options.namespace;
  const namespace = requestedNamespace === undefined ? 'z' : requestedNamespace;
  if (typeof namespace !== 'string' || !/^[a-z][a-z0-9-]*$/.test(namespace))
    throw new TypeError(
      'Namespace must use lowercase letters, digits and hyphens, starting with a letter.',
    );
  const requestedLayers = options.layers;
  if (requestedLayers !== undefined && !Array.isArray(requestedLayers))
    throw new TypeError('layers must be an array.');
  const layers = [...(requestedLayers ?? [])];
  const validLayer = (s: string) =>
    /^-?[_a-zA-Z][_a-zA-Z0-9-]*(?:\.-?[_a-zA-Z][_a-zA-Z0-9-]*)*$/.test(s);
  if (
    layers.some((l) => typeof l !== 'string' || !validLayer(l)) ||
    new Set(layers).size !== layers.length
  )
    throw new TypeError('Invalid or duplicate layer names.');
  const layer = options.layer ?? null;
  if (layer !== null && (!validLayer(layer) || !layers.includes(layer)))
    throw new TypeError('Default layer must be declared in layers.');
  return Object.freeze({ namespace, layers: Object.freeze(layers), layer, format: 'native-v1' });
}
function layerRecord(config: OutputConfig): StyleRecord | undefined {
  if (!config.layers.length) return undefined;
  return Object.freeze({
    id: config.namespace + '-layers',
    kind: 'layers',
    body: canonicalSheet('@layer ' + config.layers.join(',') + ';'),
    dependencies: Object.freeze([]),
  });
}

function cacheable(program: StyleProgram): boolean {
  // 动画定义可带外部资源图，仍走原完整编译与依赖合并路径。
  return program.every((node) =>
    node.kind === 'declaration' ? node.value.kind !== 'animations' : cacheable(node.children),
  );
}
function manifestRecords(manifest: StyleManifest, config: OutputConfig): readonly StyleRecord[] {
  const incoming = manifest?.config;
  if (
    (manifest?.version !== 1 && manifest?.version !== 2) ||
    !incoming ||
    incoming.namespace !== config.namespace ||
    incoming.layer !== config.layer ||
    incoming.format !== config.format ||
    JSON.stringify(incoming.layers) !== JSON.stringify(config.layers) ||
    !Array.isArray(manifest.records)
  )
    throw new Error('Hydration manifest version/config mismatch.');
  const result: StyleRecord[] = [];
  const ids = new Set<string>();
  for (const value of manifest.records) {
    if (
      !value ||
      typeof value.id !== 'string' ||
      typeof value.body !== 'string' ||
      !Array.isArray(value.dependencies) ||
      value.dependencies.some((d: unknown) => typeof d !== 'string')
    )
      throw new TypeError('Invalid manifest record.');
    if (value.name !== undefined) validateStyleName(value.name);
    if (
      (value.name !== undefined || value.debug !== undefined) &&
      (value.kind !== 'class' || manifest.version !== 2)
    )
      throw new TypeError('Named/debug styles require a version 2 class record.');
    const record: StyleRecord = Object.freeze({
      id: value.id,
      kind: value.kind,
      body: value.body,
      dependencies: Object.freeze([...value.dependencies]),
      ...(value.name === undefined ? {} : { name: value.name }),
      ...(value.debug === undefined ? {} : { debug: validateStyleDebug(value.debug) }),
    });
    if (ids.has(record.id)) throw new Error('Duplicate manifest record: ' + record.id);
    ids.add(record.id);
    if (record.kind === 'class' || record.kind === 'keyframes') {
      if (record.id !== namedId(config, record.kind, record.body, record.name))
        throw new Error('Manifest content hash mismatch: ' + record.id);
    } else if (record.kind === 'global') {
      const slot = record.id.slice(config.namespace.length + 3);
      if (
        !record.id.startsWith(config.namespace + '-g-') ||
        !/^[1-9]\d*$/.test(slot) ||
        !Number.isSafeInteger(Number(slot))
      )
        throw new Error('Invalid global slot id.');
    } else if (record.kind === 'layers') {
      const expected = layerRecord(config);
      if (!expected) throw new Error('Unexpected layer header.');
      assertSameRecord(expected, record);
      if (record.dependencies.length)
        throw new Error('Layer header cannot have resource dependencies.');
      if (record.id !== expected.id) throw new Error('Invalid layer header id.');
    } else throw new Error('Unknown manifest record kind.');
    validateRecord(record, config);
    result.push(record);
  }
  const expected = layerRecord(config);
  if (expected && (result[0]?.id !== expected.id || result[0]?.kind !== 'layers'))
    throw new Error('Missing or misplaced layer header.');
  const map = new Map(result.map((r) => [r.id, r]));
  for (const record of result)
    for (const id of record.dependencies) {
      if (map.get(id)?.kind !== 'keyframes' || id === record.id)
        throw new Error('Invalid manifest resource dependency.');
    }
  const visited = new Set<string>(),
    visiting = new Set<string>();
  function visit(id: string) {
    if (visiting.has(id)) throw new Error('Cyclic manifest dependencies.');
    if (visited.has(id)) return;
    visiting.add(id);
    for (const dep of map.get(id)!.dependencies) visit(dep);
    visiting.delete(id);
    visited.add(id);
  }
  for (const id of ids) visit(id);
  return Object.freeze(result);
}

export function createRuntime(options: RuntimeOptions = {}): StyleRuntime {
  if (!options || typeof options !== 'object' || Array.isArray(options))
    throw new TypeError('Expected runtime options.');
  const collectDebug = options.debug;
  if (collectDebug !== undefined && typeof collectDebug !== 'boolean')
    throw new TypeError('Runtime debug must be boolean.');
  const config = configFor(options);
  const requestedTarget = options.target;
  const target =
    requestedTarget === undefined
      ? typeof document === 'undefined'
        ? null
        : document
      : requestedTarget;
  if (
    target !== null &&
    (typeof target !== 'object' ||
      !(target.nodeType === 9 || (target.nodeType === 11 && 'host' in target)))
  )
    throw new TypeError('target must be a Document, ShadowRoot or null.');
  const requestedLimit = options.maxRecords;
  const maxRecords = requestedLimit === undefined ? Infinity : requestedLimit;
  if (maxRecords !== Infinity && (!Number.isSafeInteger(maxRecords) || maxRecords < 1))
    throw new TypeError('maxRecords must be a positive integer.');
  const nonce = options.nonce;
  if (nonce !== undefined && typeof nonce !== 'string')
    throw new TypeError('nonce must be a string.');
  if (target && owners.get(target)?.has(config.namespace))
    throw new Error('This target already has a runtime for namespace ' + config.namespace);
  const owner = Symbol(config.namespace);
  const doc = target
    ? target.nodeType === 9
      ? (target as Document)
      : target.ownerDocument!
    : null;
  let shared = doc ? documentRegistrations.get(doc) : undefined;
  if (doc && !shared) {
    shared = new Map();
    documentRegistrations.set(doc, shared);
  }
  shared ??= new Map();
  const records = new Map<string, StyleRecord>();
  const recordRegistrations = new Map<string, readonly PropertyRegistration[]>();
  const claimed = new Set<string>();
  let host: BrowserSheet | undefined;
  let disposed = false,
    busy = false,
    globalIndex = 0;
  const alive = () => {
    if (disposed) throw new Error('Style runtime has been disposed.');
  };
  function prepareRecords(batch: readonly StyleRecord[]) {
    return batch.map((record) => ({
      record,
      ...inspectStylesheet(renderRecord(record, config)),
    }));
  }
  function validateClaims(
    batch: readonly { record: StyleRecord; registrations: readonly PropertyRegistration[] }[],
    replacing?: string,
  ) {
    const claims = new Map<string, readonly PropertyRegistration[]>();
    const planned = new Map<string, string>();
    for (const { record, registrations: entries } of batch) {
      claims.set(record.id, entries);
      for (const entry of entries) {
        if (planned.has(entry.name) && planned.get(entry.name) !== entry.body)
          throw new Error('Conflicting @property registration: ' + entry.name);
        planned.set(entry.name, entry.body);
        for (const existing of shared!.get(entry.name) ?? []) {
          if (existing.owner === owner && (existing.id === replacing || existing.id === record.id))
            continue;
          if (existing.body !== entry.body)
            throw new Error('Conflicting @property registration: ' + entry.name);
        }
      }
    }
    return claims;
  }
  function releaseClaims(id: string) {
    for (const entry of recordRegistrations.get(id) ?? []) {
      const remaining = (shared!.get(entry.name) ?? []).filter(
        (r) => r.owner !== owner || r.id !== id,
      );
      if (remaining.length) shared!.set(entry.name, remaining);
      else shared!.delete(entry.name);
    }
    recordRegistrations.delete(id);
  }
  function claim(record: StyleRecord, entries: readonly PropertyRegistration[]) {
    releaseClaims(record.id);
    recordRegistrations.set(record.id, entries);
    for (const entry of entries) {
      const list = shared!.get(entry.name) ?? [];
      list.push({ owner, id: record.id, body: entry.body });
      shared!.set(entry.name, list);
    }
  }
  function commit(batch: readonly StyleRecord[], replacing?: string) {
    alive();
    if (busy) throw new Error('Reentrant stylesheet mutation.');
    busy = true;
    const inserted: HTMLStyleElement[] = [];
    try {
      const distinct = new Map<string, StyleRecord>();
      const metadataUpdates = new Map<string, StyleRecord>();
      for (const record of batch) {
        const previous = distinct.get(record.id);
        distinct.set(record.id, previous ? mergeRecord(previous, record) : record);
      }
      const pending = [...distinct.values()].filter((record) => {
        const previous = records.get(record.id);
        if (previous) host?.verify(record.id);
        if (previous && record.id !== replacing) {
          const merged = mergeRecord(previous, record);
          if (merged !== previous) metadataUpdates.set(record.id, merged);
          return false;
        }
        return !previous || JSON.stringify(previous) !== JSON.stringify(record);
      });
      if (records.size + pending.filter((r) => !records.has(r.id)).length > maxRecords)
        throw new Error('Style record limit exceeded.');
      // 只准备本次待写入记录；缓存命中仍走原来的宿主检查，不增加结果缓存。
      const prepared = prepareRecords(pending);
      const claims = validateClaims(prepared, replacing);
      const nodes = new Map<string, HTMLStyleElement>();
      for (const { record, rules } of prepared) {
        if (host) {
          const node = host.insert(
            record,
            rules,
            record.id === replacing ? host.nodes.get(record.id) : undefined,
          );
          inserted.push(node);
          nodes.set(record.id, node);
        }
      }
      // 所有插入成功后才更新缓存；失败时只移除本事务创建的节点。
      for (const record of pending) {
        const old = host?.nodes.get(record.id);
        if (old) host!.remove(old);
        if (nodes.has(record.id)) host!.nodes.set(record.id, nodes.get(record.id)!);
        records.set(record.id, record);
        claim(record, claims.get(record.id)!);
      }
      for (const [id, record] of metadataUpdates) records.set(id, record);
      for (const record of metadataUpdates.values()) host?.updateMetadata(record);
    } catch (error) {
      for (const node of inserted) node.remove();
      throw error;
    } finally {
      busy = false;
    }
  }
  function ensure(compiled: CompiledStyle, replacing?: string) {
    if (
      !replacing &&
      records.get(compiled.record.id) === compiled.record &&
      compiled.dependencies.every((record) => records.get(record.id) === record)
    ) {
      alive();
      if (busy) throw new Error('Reentrant stylesheet mutation.');
      // 缓存命中仍验证 DOM 所有权；只跳过重复构造事务，不吞掉外部删除或禁用。
      for (const record of compiled.dependencies) host?.verify(record.id);
      host?.verify(compiled.record.id);
      return;
    }
    commit([...compiled.dependencies, compiled.record], replacing);
  }
  function definition(input: StylesheetDefinition | StylesheetFactory): StylesheetDefinition {
    return typeof input === 'function' ? globalCss(input) : input;
  }
  function handle(id: string): GlobalStyleHandle {
    let closed = false;
    return Object.freeze({
      id,
      update(input: StylesheetDefinition | StylesheetFactory) {
        alive();
        if (closed || !records.has(id)) throw new Error('Global style slot is no longer active.');
        ensure(compileGlobal(definition(input), id, config), id);
      },
      dispose() {
        if (closed) return;
        closed = true;
        if (disposed) return;
        const node = host?.nodes.get(id);
        if (node) host!.remove(node);
        host?.nodes.delete(id);
        records.delete(id);
        claimed.delete(id);
        releaseClaims(id);
      },
    });
  }
  // 编译站点缓存属于当前 runtime；驱逐只丢计算结果，绝不删除仍被 DOM 使用的规则。
  const compiledStyles = new Map<string, CompiledStyle>();
  const runtime: StyleRuntime = {
    config,
    css(factory: StyleFactory<never>, cssType: CssConstructor = Css) {
      alive();
      const prepared = cssType === Css ? getPreparedKey(factory) : undefined;
      let cacheKey = prepared
        ? 'p:' + prepared + JSON.stringify(getStyleSource(factory) ?? null)
        : undefined;
      if (cacheKey && cacheKey.length > 65536) cacheKey = undefined;
      const cached = cacheKey ? compiledStyles.get(cacheKey) : undefined;
      if (cached) {
        ensure(cached);
        return cached.record.id;
      }
      const definition = buildStyleDefinition(factory, cssType);
      if (!cacheKey && cacheable(definition.program)) {
        const key = 'd:' + JSON.stringify(definition);
        // 同时限制键大小，避免少量巨大样式让计算缓存占用不可控内存。
        if (key.length <= 65536) cacheKey = key;
        const previous = cacheKey ? compiledStyles.get(cacheKey) : undefined;
        if (previous) {
          ensure(previous);
          return previous.record.id;
        }
      }
      const compiled = compileProgram(definition.program, config, {
        ...definition.metadata,
        debug: definition.metadata.debug ?? collectDebug ?? !!definition.metadata.source,
      });
      ensure(compiled);
      // 完整注册成功后才缓存，失败仍允许原位重试。
      if (cacheKey) {
        if (compiledStyles.size >= 256) compiledStyles.delete(compiledStyles.keys().next().value!);
        compiledStyles.set(cacheKey, compiled);
      }
      return compiled.record.id;
    },
    keyframes(value) {
      alive();
      const compiled = compileAnimation(value, config);
      ensure(compiled);
      return compiled.record.id;
    },
    mountGlobal(input) {
      alive();
      if (!Number.isSafeInteger(globalIndex + 1)) throw new Error('Global slot counter exhausted.');
      const id = config.namespace + '-g-' + (globalIndex + 1);
      ensure(compileGlobal(definition(input), id, config));
      globalIndex++;
      claimed.add(id);
      return handle(id);
    },
    claimGlobal(id, value) {
      alive();
      if (records.get(id)?.kind !== 'global' || claimed.has(id))
        throw new Error('Global slot is unavailable or already claimed.');
      // 更新成功后才认领；失败保留服务端记录，允许重试。
      if (value !== undefined) ensure(compileGlobal(definition(value), id, config), id);
      claimed.add(id);
      return handle(id);
    },
    snapshot() {
      alive();
      return Object.freeze({ version: 2, config, records: Object.freeze([...records.values()]) });
    },
    renderStyles() {
      alive();
      return [...records.values()]
        .map((record) => renderStyleTag(record, config, host?.nonce ?? nonce))
        .join('');
    },
    renderManifest() {
      return JSON.stringify(runtime.snapshot())
        .replaceAll('<', '\\u003c')
        .replaceAll('\u2028', '\\u2028')
        .replaceAll('\u2029', '\\u2029');
    },
    stats() {
      const values = [...records.values()];
      return {
        records: values.length,
        classes: values.filter((r) => r.kind === 'class').length,
        keyframes: values.filter((r) => r.kind === 'keyframes').length,
        globals: values.filter((r) => r.kind === 'global').length,
        cssCharacters: values.reduce((n, r) => n + renderRecord(r, config).length, 0),
      };
    },
    dispose() {
      if (disposed) return;
      disposed = true;
      host?.dispose();
      for (const id of records.keys()) releaseClaims(id);
      records.clear();
      compiledStyles.clear();
      claimed.clear();
      if (target) owners.get(target)?.delete(config.namespace);
    },
  };
  try {
    if (options.hydrate) {
      const restored = manifestRecords(options.hydrate, config);
      if (restored.length > maxRecords) throw new Error('Hydration exceeds style record limit.');
      const claims = validateClaims(
        restored.map((record) => ({
          record,
          registrations: registrations(renderRecord(record, config)),
        })),
      );
      if (target) host = browserSheet(target, config, nonce, restored, options.insertionPoint);
      for (const record of restored) {
        records.set(record.id, record);
        claim(record, claims.get(record.id)!);
        if (record.kind === 'global')
          globalIndex = Math.max(globalIndex, Number(record.id.slice(config.namespace.length + 3)));
      }
    } else {
      if (target) host = browserSheet(target, config, nonce, undefined, options.insertionPoint);
      const header = layerRecord(config);
      if (header) commit([header]);
    }
    if (target) {
      let map = owners.get(target);
      if (!map) {
        map = new Map();
        owners.set(target, map);
      }
      map.set(config.namespace, runtime);
    }
    return Object.freeze(runtime);
  } catch (error) {
    host?.dispose();
    for (const id of records.keys()) releaseClaims(id);
    throw error;
  }
}
function defaultRuntime(): StyleRuntime {
  if (typeof document === 'undefined')
    throw new Error('Server css() requires a request-local createRuntime(); use its css function.');
  return owners.get(document)?.get('z') ?? createRuntime({ target: document });
}
/** 浏览器中直接返回字符串类名；普通变量在每次调用时重新求值。 */
export function css(factory: StyleFactory): string;
export function css<T extends Css>(factory: StyleFactory<T>, cssType: CssConstructor<T>): string;
export function css(factory: StyleFactory<never>, cssType: CssConstructor = Css): string {
  return defaultRuntime().css(factory as StyleFactory, cssType);
}
/** 应用级全局样式便捷入口，返回可更新/释放的挂载。 */
export function injectGlobal(value: StylesheetDefinition | StylesheetFactory): GlobalStyleHandle {
  return defaultRuntime().mountGlobal(value);
}
