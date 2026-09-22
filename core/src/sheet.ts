import { renderRecord, splitRules, type OutputConfig, type StyleRecord } from './serialize.js';

export type StyleTarget = Document | ShadowRoot;
export interface BrowserSheet {
  readonly document: Document;
  readonly nonce?: string;
  readonly nodes: Map<string, HTMLStyleElement>;
  verify(id: string): void;
  insert(record: StyleRecord, before?: HTMLStyleElement): HTMLStyleElement;
  remove(node: HTMLStyleElement): void;
  dispose(): void;
}
export function htmlCss(css: string): string {
  // 仅处理 HTML raw-text 的结束标签序列，不改变媒体查询中的 < 运算符。
  return css.replace(/<\/style/gi, (token) => '\\3c ' + token.slice(1));
}
export function attribute(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}
export function renderStyleTag(record: StyleRecord, config: OutputConfig, nonce?: string): string {
  return `<style data-zerodep="${attribute(config.namespace)}" data-zerodep-id="${attribute(record.id)}"${nonce === undefined ? '' : ` nonce="${attribute(nonce)}"`}>${htmlCss(renderRecord(record, config))}</style>`;
}
export function browserSheet(
  target: StyleTarget,
  config: OutputConfig,
  nonce: string | undefined,
  records: readonly StyleRecord[] | undefined,
  insertionPoint?: ChildNode,
): BrowserSheet {
  const doc = target.nodeType === 9 ? (target as Document) : target.ownerDocument!;
  const container = target.nodeType === 9 ? (target as Document).head : target;
  if (!container || (target.nodeType !== 9 && (target.nodeType !== 11 || !('host' in target))))
    throw new TypeError('Styles require a Document with head or a ShadowRoot.');
  if (insertionPoint && insertionPoint.parentNode !== container)
    throw new TypeError('Insertion point must be a direct child of the style container.');
  const view = doc.defaultView;
  if (view) {
    const probe = new (view as Window & typeof globalThis).CSSStyleSheet();
    probe.insertRule('.z{color:red;&:hover{color:blue}color:green}');
    const first = probe.cssRules[0] as CSSStyleRule;
    if (!('cssRules' in first) || first.cssRules.length < 2)
      throw new Error(
        'zerodep-css native-v1 requires CSS nesting with ordered nested declarations.',
      );
  }
  const existing = Array.from(container.children).filter(
    (el) =>
      el.tagName.toLowerCase() === 'style' && el.getAttribute('data-zerodep') === config.namespace,
  ) as HTMLStyleElement[];
  if (!records && existing.length)
    throw new Error('SSR styles already exist; provide their manifest to hydrate this runtime.');
  const nodes = new Map<string, HTMLStyleElement>();
  if (records) {
    if (existing.length !== records.length) throw new Error('Hydration style count mismatch.');
    for (let i = 0; i < records.length; i++) {
      const record = records[i]!;
      const node = existing[i]!;
      if (
        node.getAttribute('data-zerodep-id') !== record.id ||
        node.textContent !== htmlCss(renderRecord(record, config))
      )
        throw new Error('Hydration style content/order mismatch: ' + record.id);
      if (!node.sheet)
        throw new Error('Hydration stylesheet is unavailable (check CSP and attachment).');
      if (node.sheet.cssRules.length !== splitRules(renderRecord(record, config)).length)
        throw new Error('Hydration stylesheet did not accept all root rules: ' + record.id);
      if (nonce !== undefined && node.nonce !== nonce) throw new Error('Hydration nonce mismatch.');
      if (i) {
        let current = existing[i - 1]!.nextSibling;
        while (current !== node) {
          if (
            !current ||
            current.nodeType === 1 ||
            (current.nodeType === 3 && current.textContent?.trim())
          )
            throw new Error('Hydration styles must form one contiguous block.');
          current = current.nextSibling;
        }
      }
      nodes.set(record.id, node);
    }
    nonce ??= existing[0]?.nonce || undefined;
  }
  const start = doc.createComment('zerodep:' + config.namespace);
  const end = doc.createComment('/zerodep:' + config.namespace);
  try {
    if (existing.length) {
      container.insertBefore(start, existing[0]!);
      container.insertBefore(end, existing.at(-1)!.nextSibling);
    } else {
      container.insertBefore(start, insertionPoint ?? null);
      container.insertBefore(end, insertionPoint ?? null);
    }
  } catch (error) {
    start.remove();
    end.remove();
    throw error;
  }
  return {
    document: doc,
    nodes,
    nonce,
    verify(id) {
      const node = nodes.get(id);
      const header = config.layers.length ? nodes.get(config.namespace + '-layers') : undefined;
      if (
        end.parentNode !== container ||
        start.parentNode !== container ||
        !node ||
        node.parentNode !== container ||
        !node.sheet ||
        node.sheet.disabled ||
        (config.layers.length && (!header || header.parentNode !== container))
      )
        throw new Error(
          'A registered stylesheet or its boundary was removed/disabled outside this runtime.',
        );
    },
    insert(record, before) {
      if (end.parentNode !== container || start.parentNode !== container)
        throw new Error('Runtime insertion boundary was removed.');
      if (
        record.kind !== 'layers' &&
        config.layers.length &&
        nodes.get(config.namespace + '-layers')?.parentNode !== container
      )
        throw new Error('Runtime layer header was removed.');
      const node = doc.createElement('style');
      node.setAttribute('data-zerodep', config.namespace);
      node.setAttribute('data-zerodep-id', record.id);
      if (nonce !== undefined) node.nonce = nonce;
      try {
        container.insertBefore(node, before ?? end);
        if (!node.sheet) throw new Error('Stylesheet is unavailable (check CSP and attachment).');
        for (const rule of splitRules(renderRecord(record, config)))
          node.sheet.insertRule(rule, node.sheet.cssRules.length);
        return node;
      } catch (error) {
        node.remove();
        throw error;
      }
    },
    remove(node) {
      node.remove();
    },
    dispose() {
      for (const node of nodes.values()) node.remove();
      nodes.clear();
      start.remove();
      end.remove();
    },
  };
}
