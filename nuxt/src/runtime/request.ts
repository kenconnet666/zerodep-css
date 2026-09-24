import type { H3Event } from 'h3';
import type { StyleHost } from '@zerodep-css/vue';

// Nuxt app 与 Nitro 插件会走不同打包链；只共享键身份，状态始终留在请求 event 上。
const requestKey = Symbol.for('@zerodep-css/nuxt@0.2/request-v2');
const nonceKey = Symbol.for('@zerodep-css/nuxt@0.2/style-nonce');
export const manifestId = '__zerodep_css_manifest__';

interface RenderedOutput {
  readonly styles: string;
  readonly manifest: string;
  readonly nonce?: string;
}
interface RequestState {
  nonce?: string;
  host?: StyleHost;
  removeListener?: () => void;
  output?: RenderedOutput;
}

type RequestStates = WeakMap<H3Event, RequestState>;

function current(event: H3Event): RequestState | undefined {
  return (
    (event.context as Record<PropertyKey, unknown>)[requestKey] as RequestStates | undefined
  )?.get(event);
}
function state(event: H3Event): RequestState {
  const existing = current(event);
  if (existing) return existing;
  // 框架可复制或共享 context；真正的 event 才是宿主/输出的所有权边界。
  const context = event.context as Record<PropertyKey, unknown>;
  const states = (context[requestKey] ??= new WeakMap<H3Event, RequestState>()) as RequestStates;
  const created: RequestState = { nonce: context[nonceKey] as string | undefined };
  states.set(event, created);
  return created;
}

/** CSP 中间件显式提交本请求的 nonce；不读取其他模块的私有字段。 */
export function setStyleNonce(event: H3Event, nonce: string): void {
  if (typeof nonce !== 'string' || !nonce) throw new TypeError('nonce must be non-empty.');
  const request = state(event);
  if (request.host || request.output)
    throw new Error('Style nonce must be set before the Nuxt app plugin runs.');
  request.nonce = nonce;
  // nonce 是可继承配置：Nitro 缓存代理在 middleware 后创建内部 event。
  // 每个已建宿主保留自己的快照，代理不能共享或释放另一个 event 的 host。
  (event.context as Record<PropertyKey, unknown>)[nonceKey] = nonce;
}
export function styleNonce(event: H3Event): string | undefined {
  const request = current(event);
  return request
    ? request.nonce
    : ((event.context as Record<PropertyKey, unknown>)[nonceKey] as string | undefined);
}

export function attachHost(event: H3Event, host: StyleHost): void {
  releaseHost(event);
  const request = state(event);
  // 错误页等可能重建同一 event 的 Nuxt app；绝不能复用上一次的 HTML 输出。
  request.output = undefined;
  request.host = host;
}
export function onHostRelease(event: H3Event, removeListener: () => void): void {
  const request = state(event);
  if (!request.host) throw new Error('No style host is attached to this request.');
  request.removeListener?.();
  request.removeListener = removeListener;
}
export function releaseHost(event: H3Event): void {
  const request = current(event);
  if (!request) return;
  const host = request.host;
  const removeListener = request.removeListener;
  request.host = undefined;
  request.removeListener = undefined;
  removeListener?.();
  host?.dispose();
}
export function releaseHostQuietly(event: H3Event): void {
  try {
    releaseHost(event);
  } catch (error) {
    // 响应关闭或原异常路径不能再抛出清理异常；保留可见诊断。
    console.error('[zerodep-css/nuxt] Failed to release style host.', error);
  }
}
export function collectRendered(event: H3Event): void {
  const request = current(event);
  const host = request?.host;
  if (!host) return;
  try {
    request.output = {
      styles: host.renderStyles(),
      manifest: host.renderManifest(),
      nonce: request.nonce,
    };
  } finally {
    releaseHost(event);
  }
}

function attribute(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}
/** Nitro 的 render:html 只消费成功完成渲染的完整字符串。 */
export function takeHead(event: H3Event): string[] {
  const request = current(event);
  const output = request?.output;
  if (!output) return [];
  request.output = undefined;
  const nonce = output.nonce === undefined ? '' : ` nonce="${attribute(output.nonce)}"`;
  return [
    output.styles,
    `<script id="${manifestId}" type="application/json"${nonce}>${output.manifest}</script>`,
  ];
}
