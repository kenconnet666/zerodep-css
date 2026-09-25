<script lang="ts">
  import { css, ic } from '@zerodep-css/svelte';
  import { useCss, type AppCss } from './svelte-mup-context.ts';

  const props = $props<{
    expose: (author: AppCss, controls: { step(): void; preset(): void }) => void;
    initialWidth: number;
  }>();
  const s = useCss();
  let width = $state(props.initialWidth);
  let usePreset = $state(false);
  props.expose(s, {
    step() {
      width++;
    },
    preset() {
      usePreset = true;
    },
  });
  let className = $derived(
    css(
      s.display.flex,
      usePreset ? s.width._md : s.width.px(width),
      s.color.red,
      ic('&:hover', s.color.blue),
    ),
  );
</script>

<button class={className}>Svelte</button>
