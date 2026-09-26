<script lang="ts">
  import { bx, css, globalCss, keyframes } from '@zerodep-css/svelte';
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
    s._selector('from', s.opacity.raw(bx(alpha / 2))),
    s._selector('to', s.opacity.raw(bx(alpha))),
  );
  const box = css(
    s.width.raw(bx(width + 'px')),
    s.padding.raw(bx(side + 'px') + ' ' + bx(width + 'px')),
    s.color.raw('rgba(' + bx(red) + ',' + bx(20) + ',' + bx(30) + ',' + bx(alpha) + ')'),
    s.transform.raw(
      'translate(' +
        bx(width + 'px') +
        ', ' +
        bx(side + 'px') +
        ') rotate(' +
        bx(red + 'deg') +
        ')',
    ),
    s._hover(s.opacity.raw(bx(alpha))),
    s._selector('& > .child', [s.display.block, s.height.raw(bx(side + 'px'))]),
  );
  const animated = css(s.animationName.raw(fade), s.animationDuration.ms(1000));
  const combined = css(box, [false, s.backgroundColor.blue]);
  const fixed = css(s.height.px(snapshot));
  const dual = css([
    null,
    side > 0 && s.width.raw(bx(side + 'px')),
    [s.height.raw(bx(side + 'rem'))],
  ]);
  const sibling = css(
    s._selector('& + [data-bound="sibling"]', s.marginLeft.raw(bx(width + 'px'))),
  );
  function heightClass(value: number) {
    return css(s.height.raw(bx(value + 'px')));
  }
  globalCss(
    `bx-${initial}`,
    s._selector(
      `[data-global="${initial}"]`,
      s.color.raw('rgba(' + bx(red) + ',' + bx(0) + ',' + bx(0) + ',1)'),
    ),
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
  <div
    data-snippet
    class={css(
      s.width.raw(bx(size + 'px')),
      s.padding.raw(bx(side + 'px') + ' ' + bx(size + 'px')),
    )}
  ></div>
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
    <div data-await class={css(s.width.raw(bx(resolved + 'px')))}></div>
  {/await}
  {#each rows as row (row.id)}
    {@const rowWidth = row.width}
    <div data-row={row.id} class={css(s.width.raw(bx(rowWidth + 'px')))}></div>
  {/each}
</section>
