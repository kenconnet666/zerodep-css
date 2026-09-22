import assert from 'node:assert/strict';
import { createDeclarationBinding } from '../../../core/dist/binding.js';

const candidates = [];
function add(property, values) {
  const binding = createDeclarationBinding('--support-probe', { property });
  for (const value of values) {
    try {
      if (binding.value(value) !== value) candidates.push({ property, value });
    } catch {
      /* 无效源值不属于变量化的有效结果。 */
    }
  }
}
const channels = ['0', '1', '100', '-1', '10%', '50%', 'none'];
const colors = [];
for (const fn of ['rgb', 'rgba', 'hsl', 'hsla'])
  for (const separator of [',', ' '])
    for (const a of channels)
      for (const b of channels)
        for (const c of channels) colors.push(`${fn}(${a}${separator}${b}${separator}${c})`);
add('color', colors);
add('display', [
  'block',
  'inline',
  'flex',
  'grid',
  'run-in',
  'ruby-base-container',
  'math',
  'contents',
  'flow-root',
  'table-row',
]);
add(
  'width',
  ['px', 'em', 'rem', 'ch', 'vh', 'dvh', 'cap', 'cqw', 'fr', 's'].flatMap((unit) =>
    [-2, -1, 0, 1, 1.25, 100].map((value) => value + unit),
  ),
);
add('transform', [
  'translate(1px,2px)',
  'translate(1px)',
  'translate3d(1px,2px,3px)',
  'rotate(1deg)',
  'scale(-1)',
  'scale(1,2)',
  'matrix(1,0,0,1,0,0)',
  'matrix(1,2)',
  'translate(banana)',
  'translate(calc(1px + 2px))',
  'rotate3d(1,0,0,20deg)',
]);

/** 以实际浏览器作为独立 oracle；语法表与优化策略不能自证所有被提升值均受支持。 */
export async function verifyBindingSupport(page) {
  assert(candidates.length >= 800, 'Support probe must retain meaningful optimized coverage.');
  const unsupported = await page.evaluate(
    (cases) =>
      cases.filter(
        ({ property, value }) =>
          CSS.supports(property, 'initial') && !CSS.supports(property, value),
      ),
    candidates,
  );
  assert.deepEqual(unsupported, [], 'An optimized value is rejected by this browser.');
  return candidates.length;
}
