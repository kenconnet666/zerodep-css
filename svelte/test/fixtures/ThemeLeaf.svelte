<script lang="ts">
  import { defineTheme, useTheme, useStyleRuntime } from '@zerodep-css/svelte';
  import { AppCss, theme, spacing } from './theme';
  let { name }: { name: string } = $props();
  const { css } = useStyleRuntime({ cssType: AppCss });
  const current = useTheme(theme);
  const gap = useTheme(spacing);
  const fallback = useTheme(defineTheme('unprovided', { opacity: 0.5 }));
  const values = $derived(current());
</script>

<div
  data-custom-unit={name}
  class={css((s) => {
    s.width.px(10 + 1);
  })}
></div>

<div
  data-theme-leaf={name}
  data-theme-values={JSON.stringify(values)}
  data-theme-gap={gap().gap}
  data-theme-fallback={fallback().opacity}
  class={css((s) => {
    s.name('themed-content');
    s.color.brand;
    s.backgroundColor.text;
    s.padding.raw(spacing.tokens.gap);
  })}
>
  theme
</div>
