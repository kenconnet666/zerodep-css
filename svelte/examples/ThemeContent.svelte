<script lang="ts">
  import { css } from '@zerodep-css/svelte';
  import { useCss } from './preset-context.js';
  let { label }: { label: string } = $props();
  const s = useCss();
  const panel = css(
    s.color._text,
    s.backgroundColor._surface,
    s._hover(s.backgroundColor._surfaceHover),
  );
</script>

<div data-theme-sample={label} class={panel}>主题内容</div>
