import { createCss } from '../../core/src/css.ts';

export { useCss } from '../../core/src/author.ts';

export function createHost(container: HTMLElement) {
  const node = document.createElement('style');
  container.append(node);
  const registry = createCss((className, body) => {
    node.sheet!.insertRule(`.${className}{${body}}`, node.sheet!.cssRules.length);
  });
  let calls = 0;
  return {
    css(...parts: string[]): string {
      calls++;
      return registry.css(...parts);
    },
    stats() {
      return { calls, records: registry.size };
    },
    dispose() {
      node.remove();
    },
  };
}

type Host = ReturnType<typeof createHost>;
let currentHost: Host | undefined;

/** 此探针只测试浏览器单宿主；正式 API 的 SSR/多宿主归属另行设计。 */
export function setCurrentHost(host: Host | undefined): void {
  currentHost = host;
}

export function css(...parts: string[]): string {
  if (!currentHost) throw new Error('No active probe host.');
  return currentHost.css(...parts);
}
