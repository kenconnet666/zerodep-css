<script lang="ts">
  import { css, useCss } from './svelte-mup-performance-context.ts';

  type Mode = 'direct' | 'memo' | 'table' | 'variable' | 'native-table' | 'native-var' | 'emotion';
  let { mode, unique, rowCount, emit, expose } = $props<{
    mode: Mode;
    unique: boolean;
    rowCount: number;
    emit: (...parts: string[]) => string;
    expose: (control: { step(): void; noise(): void; read(): number }) => void;
  }>();
  const s = useCss();
  const rows = Array.from({ length: rowCount }, (_, index) => index);
  let iteration = $state(0);
  let unrelated = $state(0);
  const width = (row: number) =>
    unique ? 20 + iteration * rowCount + row : 20 + ((iteration + row) % 16);
  const table =
    mode === 'table'
      ? Array.from({ length: 16 }, (_, index) => css(s.color.red, s.width.px(index + 20)))
      : [];
  const variableClass =
    mode === 'variable' ? css(s.color.red, s.width.raw('var(--probe-width)')) : '';
  let memo = $derived(
    mode === 'memo' ? rows.map((row) => css(s.color.red, s.width.px(width(row)))) : [],
  );
  function classFor(row: number): string {
    const value = width(row);
    switch (mode) {
      case 'direct':
        return css(s.color.red, s.width.px(value));
      case 'memo':
        return memo[row];
      case 'table':
        return table[value - 20];
      case 'variable':
        return variableClass;
      case 'native-table':
        return `native-${value}`;
      case 'native-var':
        return 'native-var';
      case 'emotion':
        return emit(s.color.red, s.width.px(value));
    }
  }
  expose({
    step() {
      iteration++;
    },
    noise() {
      unrelated++;
    },
    read() {
      return iteration;
    },
  });
</script>

<div class="rows" data-unrelated={unrelated}>
  {#each rows as row (row)}
    <div
      data-row={row}
      class={classFor(row)}
      style:--probe-width={mode === 'variable' ? `${width(row)}px` : undefined}
      style:--native-width={mode === 'native-var' ? `${width(row)}px` : undefined}
    ></div>
  {/each}
</div>
