export interface CssRule {
  className: string;
  body: string;
}

function hash(text: string): string {
  let value = 2166136261;
  for (let index = 0; index < text.length; index++)
    value = Math.imul(value ^ text.charCodeAt(index), 16777619);
  return (value >>> 0).toString(36);
}

/** 规则写入由宿主负责；core 只组合片段、命名并去重。 */
export function createRuleRegistry(insert: (className: string, body: string) => void) {
  let classes = new Map<string, string>();
  let bodies = new Map<string, string>();

  function remember(
    { className, body }: CssRule,
    knownClasses = classes,
    knownBodies = bodies,
  ): void {
    if (className !== `z-${hash(body)}`) throw new Error('CSS class does not match its body.');
    if (knownClasses.has(body) && knownClasses.get(body) !== className)
      throw new Error('CSS body has a conflicting class.');
    if (knownBodies.has(className) && knownBodies.get(className) !== body)
      throw new Error('CSS class hash collision.');
    knownClasses.set(body, className);
    knownBodies.set(className, body);
  }

  return {
    css(...parts: string[]): string {
      const body = parts.join('');
      const existing = classes.get(body);
      if (existing) return existing;

      const className = `z-${hash(body)}`;
      if (bodies.has(className) && bodies.get(className) !== body)
        throw new Error('CSS class hash collision.');

      insert(className, body);
      remember({ className, body });
      return className;
    },
    hydrate(rules: readonly CssRule[]): void {
      const nextClasses = new Map(classes);
      const nextBodies = new Map(bodies);
      for (const rule of rules) remember(rule, nextClasses, nextBodies);
      classes = nextClasses;
      bodies = nextBodies;
    },
    rules(): CssRule[] {
      return [...classes].map(([body, className]) => ({ className, body }));
    },
    get size(): number {
      return classes.size;
    },
  };
}
