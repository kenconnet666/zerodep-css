<script lang="ts">
  import { AppCss } from '../../../core/examples/theme.js';
  import { provideCss } from '../../../svelte/examples/context.js';
  import Component from './SvelteImplicit.svelte';
  let { expose } = $props<{
    expose: (index: number, control: { step(): void; reorder(): void }) => void;
  }>();
  provideCss(new AppCss());
</script>

<Component initial={24} expose={(value) => expose(0, value)} />
<Component initial={40} expose={(value) => expose(1, value)} />
