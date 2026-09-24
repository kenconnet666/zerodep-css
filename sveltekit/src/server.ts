import type { Handle, RequestEvent } from '@sveltejs/kit';
import { createStyles, type StyleHostOptions } from '@zerodep-css/svelte';
import { injectPageStyles } from './html.js';
import { requestStyles, type RequestStyles } from './server-context.js';

export interface StyleHandleOptions {
  /** 请求局部的 CSS 命名空间、层及诊断选项；target 始终为 null。 */
  readonly host?: Pick<
    StyleHostOptions,
    'namespace' | 'layers' | 'layer' | 'maxRecords' | 'warnAt' | 'debug'
  >;
  /** 由应用 CSP 策略提供；Kit 不会为 transformPageChunk 后注入的样式生成 nonce。 */
  readonly nonce?: (event: RequestEvent) => string | undefined;
}

/** Node 24 的 Kit handle；完整 SSR 样式收集结束后释放请求宿主。 */
export function createStyleHandle(options: StyleHandleOptions = {}): Handle {
  const project = createStyles();
  return async ({ event, resolve }) => {
    const nonce = options.nonce?.(event);
    if (nonce !== undefined && (typeof nonce !== 'string' || !nonce))
      throw new TypeError('Style nonce must be a non-empty string or undefined.');
    const createHost = () => project.createHost({ ...options.host, target: null, nonce });
    const state: RequestStyles = { host: createHost(), createHost, rootProvided: false };
    return requestStyles.run(state, async () => {
      try {
        const chunks: string[] = [];
        let transformed = false;
        const response = await resolve(event, {
          transformPageChunk({ html, done }) {
            chunks.push(html);
            if (!done) return '';
            if (transformed) throw new Error('SvelteKit produced multiple final HTML chunks.');
            transformed = true;
            const complete = chunks.join('');
            chunks.length = 0;
            return injectPageStyles(
              complete,
              state.host.renderStyles(),
              state.host.renderManifest(),
              nonce,
            );
          },
        });
        // redirect、endpoint 与非页面响应不消费 body；它们不产生页面注入。
        if (!transformed) {
          if (chunks.length) throw new Error('SvelteKit did not finish its HTML transform.');
          return response;
        }
        if (!/^text\/html(?:\s*;|\s*$)/i.test(response.headers.get('content-type') ?? ''))
          throw new Error('SvelteKit transformed a response without an HTML content type.');
        // Kit 已 await 根组件渲染再调用 transform；后续 chunks 只是数据脚本，不再生成 CSS。
        // 原样返回以保留数据流、取消和背压，不能为等待数据而延长样式宿主生命周期。
        return response;
      } finally {
        state.host.dispose();
      }
    });
  };
}
