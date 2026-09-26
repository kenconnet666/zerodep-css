import assert from 'node:assert/strict';

export const conditionalCall = 'css(s.display.flex, compact ? s.padding.px(4) : s.padding.px(16))';

/** 复用实例驱动，只改固定研究夹具；不推导任意用户方法的纯度。 */
export function conditionalVariant(framework, derived, shared = false, instrument = false) {
  return (source) => {
    const vue = framework === 'vue';
    const input = '[s.color.red, s.width.px(width)]';
    assert.equal(source.split(input).length, 2);
    const call = vue ? conditionalCall.replace('compact ?', 'compact.value ?') : conditionalCall;
    const state = vue ? 'const compact = ref(false);' : 'let compact = $state(false);';
    const declaration = derived
      ? `const derivedClass = ${vue ? `computed(() => ${call})` : `$derived(${call})`};`
      : '';
    let code = source
      .replace('/* DERIVED_DECLARATION */', `${state}\n${declaration}`)
      .replace(
        vue ? 'width.value++;' : 'width++;',
        vue ? 'compact.value = !compact.value;' : 'compact = !compact;',
      )
      .replace(input, derived ? 'derivedClass' : conditionalCall);
    if (shared) {
      // 第二个元素有相同表达式，派生模式明确共享一个结果。
      const element = code.match(/<div data-row[^\n]+<\/div>/)?.[0];
      assert.ok(element);
      code = code.replace(element, `${element}\n${element.replace('data-row', 'data-copy')}`);
    }
    if (instrument) {
      // 非响应式计数，仅在独立正确性轮使用，不污染耗时样本。
      code = code.replace('import { Css, css }', 'import { Css, css as originalCss }').replace(
        'const s = new Css();',
        `const s = new Css();
function css(...parts: Parameters<typeof originalCss>) {
  (globalThis as any).__cssCalls = ((globalThis as any).__cssCalls ?? 0) + 1;
  return originalCss(...parts);
}`,
      );
    }
    return code;
  };
}
