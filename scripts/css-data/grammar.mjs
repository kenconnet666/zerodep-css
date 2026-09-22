import { definitionSyntax } from 'css-tree';

const primitives = new Set([
  'length',
  'percentage',
  'time',
  'angle',
  'resolution',
  'frequency',
  'flex',
  'number',
  'integer',
  'decibel',
  'semitones',
]);

/** 只证明有限快捷形式的合法性；函数、开放标识符和未知引用不会自动视为匹配。 */
export function createGrammar(data) {
  const parsed = new Map();
  function parse(syntax) {
    if (!parsed.has(syntax)) parsed.set(syntax, definitionSyntax.parse(syntax));
    return parsed.get(syntax);
  }
  function resolve(kind, name, context) {
    const table =
      kind === 'Property' ? data.properties : name.endsWith('()') ? data.functions : data.types;
    const candidates = Object.values(table).filter((f) => f.name === name);
    const scoped = candidates.filter((f) =>
      f.for?.some((s) => context.includes(s.replace(/^<|>$/g, ''))),
    );
    if (scoped.length === 1) return scoped[0];
    if (scoped.length > 1 && new Set(scoped.map((f) => f.syntax)).size === 1) return scoped[0];
    const plain = candidates.filter((f) => !f.for?.length);
    if (plain.length === 1) return plain[0];
    if (candidates.length === 1) return candidates[0];
    return undefined;
  }
  const lookup = new Map();
  function reference(kind, name, context) {
    const key = `${kind}:${name}:${context.join('|')}`;
    if (!lookup.has(key)) lookup.set(key, resolve(kind, name, context));
    return lookup.get(key);
  }
  function bounds(opts) {
    if (!opts) return {};
    const result = {};
    for (const key of ['min', 'max']) {
      const value = opts[key];
      if (value == null) continue;
      const numeric = Number.parseFloat(value);
      if (!Number.isFinite(numeric)) continue;
      // 非零带单位范围需要换算，有限快捷推导明确不处理。
      if (typeof value === 'string' && /[a-z%]/i.test(value) && numeric !== 0) return null;
      result[key] = numeric;
    }
    return result;
  }
  function unique(states) {
    return [...new Map(states.map((s) => [JSON.stringify(s), s])).values()];
  }
  function match(syntax, tokens, context = []) {
    function visit(node, state, trail) {
      if (trail.length > 50) return [];
      const token = tokens[state.end];
      if (node.type === 'Keyword' || node.type === 'Token' || node.type === 'String') {
        const text = node.name ?? node.value;
        return token?.kind === 'keyword' && token.value === text
          ? [{ ...state, end: state.end + 1 }]
          : [];
      }
      if (node.type === 'Comma')
        return token?.kind === 'comma' ? [{ ...state, end: state.end + 1 }] : [];
      if (node.type === 'Type' && primitives.has(node.name)) {
        if (!token) return [];
        const family = node.name === 'integer' ? 'number' : node.name;
        if (token.kind !== family) return [];
        const range = bounds(node.opts);
        if (range === null) return [];
        return [
          {
            end: state.end + 1,
            checks: [
              ...state.checks,
              { index: state.end, ...range, ...(node.name === 'integer' ? { integer: true } : {}) },
            ],
          },
        ];
      }
      if (node.type === 'Type' || node.type === 'Property') {
        const key = `${node.type}:${node.name}:${state.end}`;
        if (trail.includes(key)) return [];
        const ref = reference(node.type, node.name, [
          ...context,
          ...trail.map((v) => v.split(':')[1]),
        ]);
        if (!ref?.syntax) return [];
        const result = visit(parse(ref.syntax), state, [...trail, key]);
        const range = bounds(node.opts);
        if (range === null) return [];
        return result.map((s) => ({
          ...s,
          checks: s.checks.map((check) =>
            check.index >= state.end
              ? {
                  ...check,
                  ...(range.min !== undefined
                    ? { min: Math.max(check.min ?? -Infinity, range.min) }
                    : {}),
                  ...(range.max !== undefined
                    ? { max: Math.min(check.max ?? Infinity, range.max) }
                    : {}),
                }
              : check,
          ),
        }));
      }
      if (node.type === 'Multiplier') {
        let states = [state];
        const result = node.min === 0 ? [state] : [];
        const max = node.max === 0 ? tokens.length + 1 : Math.min(node.max, tokens.length + 1);
        for (let count = 1; count <= max; count++) {
          if (node.comma && count > 1)
            states = states.flatMap((s) => visit({ type: 'Comma' }, s, trail));
          states = unique(
            states.flatMap((s) => visit(node.term, s, trail)).filter((s) => s.end > state.end),
          );
          if (!states.length) break;
          if (count >= node.min) result.push(...states);
        }
        return unique(result);
      }
      if (node.type === 'Group') {
        if (node.combinator === '|')
          return unique(node.terms.flatMap((n) => visit(n, state, trail)));
        if (node.combinator === ' ') {
          return node.terms.reduce(
            (states, n) => unique(states.flatMap((s) => visit(n, s, trail))),
            [state],
          );
        }
        if (node.combinator === '&&' || node.combinator === '||') {
          const result = [];
          function permute(s, remaining, used) {
            if (!remaining.length || (node.combinator === '||' && used)) result.push(s);
            for (let i = 0; i < remaining.length; i++) {
              for (const next of visit(remaining[i], s, trail)) {
                if (next.end === s.end && node.combinator === '||') continue;
                permute(
                  next,
                  remaining.filter((_, j) => j !== i),
                  true,
                );
              }
            }
          }
          permute(state, node.terms, false);
          return unique(result);
        }
      }
      return [];
    }
    return visit(parse(syntax), { end: 0, checks: [] }, []).filter((s) => s.end === tokens.length);
  }
  function keywords(syntax, context = [], seen = new Set()) {
    const result = new Set();
    function visit(node) {
      if (node.type === 'Keyword') result.add(node.name);
      if (node.type === 'Type' || node.type === 'Property') {
        const key = `${node.type}:${node.name}`;
        if (seen.has(key)) return;
        const ref = reference(node.type, node.name, context);
        if (ref?.syntax && !node.name.endsWith('()')) {
          for (const value of keywords(
            ref.syntax,
            [...context, node.name],
            new Set([...seen, key]),
          ))
            result.add(value);
        }
      }
      if (node.type === 'Group') node.terms.forEach(visit);
      if (node.type === 'Multiplier') visit(node.term);
    }
    visit(parse(syntax));
    return [...result].sort();
  }
  return { parse, match, keywords, reference };
}
