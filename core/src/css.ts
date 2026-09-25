function hash(text: string): string {
  let value = 2166136261;
  for (let index = 0; index < text.length; index++)
    value = Math.imul(value ^ text.charCodeAt(index), 16777619);
  return (value >>> 0).toString(36);
}

/** 规则写入由宿主负责；core 只组合片段、命名并去重。 */
export function createCss(insert: (className: string, body: string) => void) {
  const classes = new Map<string, string>();
  const bodies = new Map<string, string>();

  return {
    css(...parts: string[]): string {
      const body = parts.join('');
      const existing = classes.get(body);
      if (existing) return existing;

      const className = `z-${hash(body)}`;
      if (bodies.has(className) && bodies.get(className) !== body)
        throw new Error('CSS class hash collision.');

      insert(className, body);
      classes.set(body, className);
      bodies.set(className, body);
      return className;
    },
    get size(): number {
      return classes.size;
    },
  };
}
