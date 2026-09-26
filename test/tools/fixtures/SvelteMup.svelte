<script lang="ts">
  import Child from './SvelteMupChild.svelte';
  import { AppCss, provideCss } from './svelte-mup-context.ts';

  const props = $props<{
    expose: (author: AppCss) => void;
    childExpose: (author: AppCss, controls: { step(): void; preset(): void }) => void;
    initialWidth?: number;
  }>();
  const author = provideCss(new AppCss());
  props.expose(author);
</script>

<Child expose={props.childExpose} initialWidth={props.initialWidth ?? 24} />
