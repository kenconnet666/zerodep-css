class ColorCss {
  readonly red = 'color:red;';
}

class WidthCss {
  raw(value: string): string {
    return `width:${value};`;
  }
}

class AuthorCss {
  readonly color = new ColorCss();
  readonly width = new WidthCss();
}

const author = new Proxy(new AuthorCss(), {
  get(target, key, receiver) {
    return Reflect.get(target, key, receiver);
  },
});

export function useCss(): AuthorCss {
  return author;
}

function hash(text: string): string {
  let value = 2166136261;
  for (let index = 0; index < text.length; index++)
    value = Math.imul(value ^ text.charCodeAt(index), 16777619);
  return (value >>> 0).toString(36);
}

export function createHost(container: HTMLElement) {
  const node = document.createElement('style');
  container.append(node);
  const classes = new Map<string, string>();
  const bodies = new Map<string, string>();
  let calls = 0;
  return {
    css(...parts: string[]): string {
      calls++;
      const body = parts.join('');
      const existing = classes.get(body);
      if (existing) return existing;
      const className = `probe-${hash(body)}`;
      if (bodies.has(className) && bodies.get(className) !== body)
        throw new Error('CSS hash collision in probe.');
      node.sheet!.insertRule(`.${className}{${body}}`, node.sheet!.cssRules.length);
      classes.set(body, className);
      bodies.set(className, body);
      return className;
    },
    stats() {
      return { calls, records: classes.size };
    },
    dispose() {
      node.remove();
      classes.clear();
      bodies.clear();
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
