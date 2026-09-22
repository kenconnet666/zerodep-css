<script lang="ts">
  import { provideTheme, useStyleRuntime } from '@zerodep-css/svelte';
  import { lightTheme, ThemeCss } from '@zerodep-css/svelte/themes';
  const scope = provideTheme(lightTheme, () => ({
    color: { primary: '#9333ea', onPrimary: '#ffffff' },
  }));
  const { css } = useStyleRuntime({ theme: scope });
</script>

<div
  data-preset-local
  class={css((s) => {
    s.color.text;
    s.backgroundColor.surface;
  }, ThemeCss)}
>
  <span
    data-preset-custom
    class={css((s) => {
      s.color.onPrimary;
      s.backgroundColor.primary;
      s.padding.xs;
      s.borderRadius.sm;
      s.fontSize.xs;
    }, ThemeCss)}>局部主色</span
  >
</div>
