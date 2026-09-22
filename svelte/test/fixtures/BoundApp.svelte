<script lang="ts">
  import { untrack } from 'svelte';
  import { provideStyleContext, useStyleRuntime, type StyleContext } from '@zerodep-css/svelte';
  import BoundStyles from './BoundStyles.svelte';
  import ThemeApp from './ThemeApp.svelte';
  import PresetPanel from './PresetPanel.svelte';
  import DifferentialStyles from './DifferentialStyles.svelte';
  let {
    context,
    initialWidth,
    record,
  }: { context: StyleContext; initialWidth: number; record: (kind: string) => void } = $props();
  provideStyleContext(untrack(() => context));
  const { css } = useStyleRuntime();
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
