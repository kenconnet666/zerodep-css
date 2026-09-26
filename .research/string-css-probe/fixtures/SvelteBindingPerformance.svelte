<script lang="ts">
  import { Css, css } from '@zerodep-css/svelte';
  let { mode, count, emit, expose } = $props<{
    mode: string;
    count: number;
    emit: (...parts: string[]) => string;
    expose: (step: () => void) => void;
  }>();
  const s = new Css();
  let iteration = $state(0);
  const rows = Array.from({ length: count }, (_, i) => i);
  const shared = mode === 'manual' ? css(s.color.red, s.width.raw('var(--width)')) : '';
  function classFor(row: number) {
    const value = 20 + iteration * count + row;
    if (mode === 'manual') return shared;
    if (mode === 'emotion') return emit(s.color.red, s.width.px(value));
    return css(s.color.red, s.width.px(value));
  }
  expose(() => {
    iteration++;
  });
</script>

<div class="rows">
  {#each rows as row (row)}<div
      data-row
      class={classFor(row)}
      style:--width={mode === 'manual' ? `${20 + iteration * count + row}px` : undefined}
    ></div>{/each}
</div>
