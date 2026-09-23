<script lang="ts">
  import { presetStyles } from './preset.js';
  presetStyles.provideTheme(() => ({
    color: { primary: '#9333ea', onPrimary: '#ffffff' },
  }));
  const css = presetStyles.useCss();
</script>

<div
  data-preset-local
  class={css((s) => {
    s.color.text;
    s.backgroundColor.surface;
  })}
>
  <span
    data-preset-custom
    class={css((s) => {
      s.color.onPrimary;
      s.backgroundColor.primary;
      s.padding.xs;
      s.borderRadius.sm;
      s.fontSize.xs;
    })}>局部主色</span
  >
</div>
