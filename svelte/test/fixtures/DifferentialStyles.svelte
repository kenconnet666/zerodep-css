<script lang="ts">
  import { createStyles } from '@zerodep-css/svelte';
  const { useCss } = createStyles();
  const css = useCss();
  const colors = [
    'red',
    'banana',
    'blue',
    'initial',
    'inherit',
    'unset',
    'revert',
    'revert-layer',
    null,
    undefined,
    'rgb(30 40 50 / .8)',
    'var(--test-color, green)',
    '/* comment */blue',
    '\\72 ed',
  ] as const;
  const cases = colors.map((color, index) => ({
    color,
    display: ['block', 'flex', 'grid', 'run-in', 'ruby-base-container'][index % 5]!,
    widthRaw: [
      undefined,
      'fit-content(10px)',
      '10px',
      'auto',
      'calc(20px * 10px)',
      'calc(20px + 2px)',
    ][index % 6],
    width: [0, 0.5, 17.25, 100][index % 4]!,
    first: index % 5,
    second: index % 7,
    margin: index % 2 ? -2.5 : 0,
    opacity: [0, 0.25, 0.5, 1][index % 4]!,
  }));
  let index = $state(0);
  const current = $derived(cases[index]!);
  // 独立运行时对照保留原生声明顺序，不依赖编译器生成的期望值。
  function reference(value: (typeof cases)[number]) {
    return css((s) => {
      s.name('diff-reference');
      s.color.red;
      s.color.raw(value.color);
      s.width.px(value.width);
      s.width.raw(value.widthRaw);
      s.display.block;
      s.display.raw(value.display);
      s.padding.px(value.first, value.second);
      s.marginLeft.px(value.margin);
      s.opacity.raw(value.opacity);
    });
  }
</script>

<div
  data-differential
  data-count={cases.length}
  class={css((s) => {
    s.color.raw('rgb(80,90,100)');
    s.custom.raw('--test-color', 'rgb(8,9,10)');
  })}
>
  <button data-diff-next onclick={() => (index = (index + 1) % cases.length)}>next {index}</button>
  <div>
    <div
      data-diff-candidate
      class={css((s) => {
        s.name('diff-candidate');
        s.color.red;
        s.color.raw(current.color);
        s.width.px(current.width);
        s.width.raw(current.widthRaw);
        s.display.block;
        s.display.raw(current.display);
        s.padding.px(current.first, current.second);
        s.marginLeft.px(current.margin);
        s.opacity.raw(current.opacity);
      })}
    >
      content
    </div>
  </div>
  <div><div data-diff-reference class={reference(current)}>content</div></div>
</div>
