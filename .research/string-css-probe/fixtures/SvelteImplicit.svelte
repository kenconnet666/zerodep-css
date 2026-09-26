<script lang="ts">
  import { css, globalCss, keyframes } from '@zerodep-css/svelte';
  import { useCss } from '../../../svelte/examples/context.js';
  import Plain from './SveltePlainClass.svelte';
  let {
    initial,
    expose,
  }: { initial: number; expose: (control: { step(): void; reorder(): void }) => void } = $props();
  const s = useCss();
  let width = $state(initial);
  let side = $state(3);
  let red = $state(10);
  let alpha = $state(0.5);
  const snapshot = width;
  let rows = $state([
    { id: 'a', width: 11 },
    { id: 'b', width: 22 },
  ]);
  const fade = keyframes(
    s._selector('from', s.opacity.raw(alpha / 2)),
    s._selector('to', s.opacity.raw(alpha)),
  );
  const box = css(
    s.width.px(width),
    s.padding.px(side, width),
    s.color.rgb(red, 20, 30, alpha),
    s.transform.raw(`translate(${width}px, ${side}px) rotate(${red}deg)`),
    s._hover(s.opacity.raw(alpha)),
    s._selector('& > .child', [s.display.block, s.height.px(side)]),
  );
  const animated = css(s.animationName.raw(fade), s.animationDuration.ms(1000));
  const combined = css(box, [false, s.backgroundColor.blue]);
  const fixed = css(s.height.px(snapshot));
  const dual = css([null, side > 0 && s.width.px(side), [s.height.rem(side)]]);
  const sibling = css(s._selector('& + [data-bound="sibling"]', s.marginLeft.px(width)));
  function heightClass(value: number) {
    return css(s.height.px(value));
  }
  globalCss(
    `implicit-${initial}`,
    s._selector(`[data-global="${initial}"]`, s.color.rgb(red, 0, 0)),
  );
  expose({
    step() {
      width++;
      side++;
      red++;
      alpha = 0.75;
      // 同 key 替换对象，验证模板 const 不捕获旧行。
      rows[0] = { ...rows[0]!, width: rows[0]!.width + 1 };
    },
    reorder() {
      rows.reverse();
    },
  });
</script>

{#snippet sized(value: { width: number })}
  {@const { width: size } = value}
  <div data-snippet class={css(s.width.px(size), s.padding.px(side, size))}></div>
{/snippet}

<section data-instance={initial}>
  <div data-bound="box" class={combined}><span class="child" data-bound="child"></span></div>
  <div data-bound="animated" class={animated}></div>
  <div data-bound="snapshot" class={fixed}></div>
  <div data-bound="dual" class={dual}></div>
  <div class={sibling}></div>
  <div data-bound="sibling"></div>
  <Plain value={combined} />
  {@render sized({ width })}
  {@render sized({ width: width * 2 })}
  {#if true}
    {@const localClass = heightClass(width)}
    <div data-const-style class={localClass}></div>
  {/if}
  {#await width then resolved}
    <div data-await class={css(s.width.px(resolved))}></div>
  {/await}
  {#each rows as row (row.id)}
    {@const rowWidth = row.width}
    <div data-row={row.id} class={css(s.width.px(rowWidth))}></div>
  {/each}
</section>
