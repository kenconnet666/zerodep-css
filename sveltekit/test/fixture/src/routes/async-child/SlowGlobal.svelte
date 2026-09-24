<script lang="ts">
  import { onMount } from 'svelte';
  import { styles } from '$lib/styles';

  await new Promise<void>((resolve) => setTimeout(resolve, 80));
  styles.useGlobalCss('late-child', (g) =>
    g.rule('[data-async-child]', (s) => s.color.raw('#7c3aed')),
  );
  let clicks = $state(0);
  onMount(() => {
    document.documentElement.dataset.asyncHydrated = 'true';
  });
</script>

<div data-async-child>
  <button data-async-click onclick={() => clicks++}>{clicks}</button>
</div>
