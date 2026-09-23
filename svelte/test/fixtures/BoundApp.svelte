<script lang="ts">
  import { untrack } from 'svelte';
  import type { StyleHost } from '@zerodep-css/svelte';
  import { styles } from './styles.js';
  import BoundStyles from './BoundStyles.svelte';
  import ThemeApp from './ThemeApp.svelte';
  import PresetPanel from './PresetPanel.svelte';
  import DifferentialStyles from './DifferentialStyles.svelte';
  let {
    host,
    initialWidth,
    record,
  }: { host?: StyleHost; initialWidth: number; record: (kind: string) => void } = $props();
  untrack(() => host)?.provide();
  const css = styles.useCss();
</script>

<DifferentialStyles />

<div
  data-presets
  class={css((s) => {
    s.display.flex;
    s.flexWrap.wrap;
    s.gap.px(24);
    s.padding.px(24);
    s.width.raw('fit-content');
    s.backgroundColor.raw('#e2e8f0');
  })}
>
  <PresetPanel name="light" initialDark={false} /><PresetPanel name="dark" initialDark={true} />
</div>

<div id="theme-portal"></div>
<ThemeApp initial={initialWidth === 20 ? 'red' : 'blue'} />
<section data-instance="a"><BoundStyles {initialWidth} {record} /></section>
<section data-instance="b"><BoundStyles initialWidth={40} {record} /></section>
