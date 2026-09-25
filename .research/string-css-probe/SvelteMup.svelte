<script lang="ts">
  import Child from './SvelteMupChild.svelte';
  import { AppCss, provideCss } from './svelte-mup-context.ts';

  const props = $props<{
    expose: (author: AppCss) => void;
    childExpose: (author: AppCss, controls: { step(): void; preset(): void }) => void;
  }>();
  const author = provideCss(new AppCss());
  props.expose(author);
</script>

<Child expose={props.childExpose} />
