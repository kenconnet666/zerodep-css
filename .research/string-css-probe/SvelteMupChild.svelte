<script lang="ts">
  import { css, ic } from '../../svelte/src/index.ts';
  import { useCss, type AppCss } from './svelte-mup-context.ts';

  const props = $props<{
    expose: (author: AppCss, controls: { step(): void; preset(): void }) => void;
  }>();
  const s = useCss();
  let width = $state(24);
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
