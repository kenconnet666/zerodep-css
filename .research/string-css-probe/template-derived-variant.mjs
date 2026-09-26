import assert from 'node:assert/strict';
import vuePlugin from '../../vue/dist/vite.js';
import sveltePlugin from '../../svelte/dist/vite.js';

export const modes = ['runtime', 'derived', 'implicit', 'hoisted'];

/** 固定夹具的四种生成结果；不是识别任意模板的正式编译器。 */
export function templateVariant(framework, mode) {
  assert.ok(modes.includes(mode));
  const plugin = framework === 'vue' ? vuePlugin() : sveltePlugin();
  return (source, id) => {
    const array = '[s.color.red, s.width.px(width)]';
    assert.equal(source.split(array).length, 2);
    const templateCall = 'css(s.color.red, s.width.px(width))';
    const scriptCall =
      framework === 'vue' ? 'css(s.color.red, s.width.px(width.value))' : templateCall;
    const declaration =
      mode === 'derived'
        ? `const derivedClass = ${framework === 'vue' ? `computed(() => ${scriptCall})` : `$derived(${scriptCall})`};`
        : mode === 'hoisted'
          ? `const derivedClass = ${scriptCall};`
          : '';
    let code = source
      .replace('/* DERIVED_DECLARATION */', declaration)
      .replace(array, mode === 'derived' || mode === 'hoisted' ? 'derivedClass' : templateCall);
    if (mode === 'implicit' || mode === 'hoisted') {
      const warnings = [];
      code =
        plugin.transform.call({ warn: (message) => warnings.push(message) }, code, id)?.code ??
        code;
      assert.deepEqual(warnings, []);
      assert.ok(code.includes('/bindings'), 'Expected actual implicit variable conversion');
    }
    return code;
  };
}
