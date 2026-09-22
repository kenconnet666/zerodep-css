<script lang="ts">
  import { provideTheme } from '@zerodep-css/svelte';
  import { theme } from './theme';
  import ThemeLeaf from './ThemeLeaf.svelte';
  let { name, reset = false }: { name: string; reset?: boolean } = $props();
  let background = $state('lime');
  provideTheme(theme, () => (reset ? null : { color: { text: background } }));
</script>

{#if !reset}<button
    data-theme-local
    onclick={() => (background = background === 'lime' ? 'yellow' : 'lime')}>local theme</button
  >{/if}
<ThemeLeaf {name} />
