<script lang="ts">
  import { css, useCss } from './runtime.ts';

  let { mode, unique, rowCount, emit, expose } = $props<{
    mode: 'direct' | 'memo' | 'table' | 'variable' | 'emotion';
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
      ? Array.from({ length: 16 }, (_, index) => css(s.color.red, s.width.raw(`${index + 20}px`)))
      : [];
  const variableClass =
    mode === 'variable' ? css(s.color.red, s.width.raw('var(--probe-width)')) : '';
  let memo = $derived(
    mode === 'memo' ? rows.map((row) => css(s.color.red, s.width.raw(`${width(row)}px`))) : [],
  );
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
      class={mode === 'direct'
        ? css(s.color.red, s.width.raw(`${width(row)}px`))
        : mode === 'memo'
          ? memo[row]
          : mode === 'table'
            ? table[width(row) - 20]
            : mode === 'variable'
              ? variableClass
              : emit(s.color.red, s.width.raw(`${width(row)}px`))}
      style:--probe-width={mode === 'variable' ? `${width(row)}px` : undefined}
    ></div>
  {/each}
</div>
