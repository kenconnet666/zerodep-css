<script lang="ts">
  import { provideTheme } from '@zerodep-css/svelte';
  import { theme } from './theme';
  import ThemeLeaf from './ThemeLeaf.svelte';
  let { name, mode }: { name: string; mode?: 'inherit' | 'defaults' } = $props();
  let background = $state('lime');
  provideTheme(theme, () =>
    mode === 'inherit'
      ? null
      : mode === 'defaults'
        ? theme.defaults
        : { color: { text: background } },
  );
</script>

{#if !mode}<button
    data-theme-local
    onclick={() => (background = background === 'lime' ? 'yellow' : 'lime')}>local theme</button
  >{/if}
<ThemeLeaf {name} />
