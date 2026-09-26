<script lang="ts">
  import { css, ic } from '@zerodep-css/svelte';
  import { useCss } from './context.js';

  const s = useCss();
  let expanded = $state(false);
  let width = $state(s.initialWidth);
  let runtimeWidth = $state(s.initialWidth);
  let noise = $state(0);
  let overridden = $state(true);
  const base = s.display.block + s.color._text;
  const staticClass = css(base, s.width._initial);
  const sizes = { small: css(base, s.width.px(24)), large: css(base, s.width.px(48)) };
  // 派生值只选择已有类名，不在表达式内注册规则。
  let finiteClass = $derived(expanded ? sizes.large : sizes.small);
  const variableClass = css(base, s.width._live);
  const themeClass = css(base, ic('&:hover', s.color._hover));
  const mediaClass = css(s.padding.px(4), ic('@media (max-width: 600px)', s.padding.px(8)));

  // 开放动态值保留同步运行时路径；无需枚举全部分支。
  function runtimeClass(): string {
    if (expanded) return css(base, s.width.px(runtimeWidth + 10));
    return css(base, s.width.px(runtimeWidth));
  }
</script>

<section data-noise={noise}>
  <button data-action="size" onclick={() => (expanded = !expanded)}>切换尺寸</button>
  <button data-action="width" onclick={() => width++}>增加宽度</button>
  <button data-action="runtime" onclick={() => runtimeWidth++}>运行时新值</button>
  <button data-action="noise" onclick={() => noise++}>无关状态</button>
  <button data-action="subtree" onclick={() => (overridden = !overridden)}>切换子树覆盖</button>
  <div data-sample="static" class={staticClass}>静态样式</div>
  <div data-sample="finite" class={finiteClass}>有限状态</div>
  <div data-sample="runtime" class={runtimeClass()}>运行时分支</div>
  <div data-sample="variable" class={variableClass} style:--demo-width={`${width}px`}>连续值</div>
  <div data-sample="root-theme" class={themeClass}>父级主题</div>
  <div data-sample="variable-other" class={variableClass} style:--demo-width={`${width + 5}px`}>
    另一个元素的连续值
  </div>
  <div
    style:--demo-text={overridden ? '#dc2626' : undefined}
    style:--demo-hover={overridden ? '#7c3aed' : undefined}
  >
    <div data-sample="nested-theme" class={themeClass}>子树覆盖</div>
  </div>
  <div data-sample="sibling-theme" class={themeClass}>兄弟仍继承父级</div>
  <div data-sample="media" class={mediaClass}>响应式条件</div>
</section>
