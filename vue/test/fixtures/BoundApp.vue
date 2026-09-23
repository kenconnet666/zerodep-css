<script setup lang="ts">
import BoundStyles from './BoundStyles.vue';
import ThemeApp from './ThemeApp.vue';
import PresetPanel from './PresetPanel.vue';
import DifferentialStyles from './DifferentialStyles.vue';
import { createStyles } from '@zerodep-css/vue';
const css = createStyles().useCss();
defineProps<{ initialWidth: number; record: (kind: string) => void }>();
</script>
<template>
  <DifferentialStyles />
  <div
    data-presets
    :class="
      css((s) => {
        s.display.flex;
        s.flexWrap.wrap;
        s.gap.px(24);
        s.padding.px(24);
        s.width.raw('fit-content');
        s.backgroundColor.raw('#e2e8f0');
      })
    "
  >
    <PresetPanel name="light" :initial-dark="false" /><PresetPanel
      name="dark"
      :initial-dark="true"
    />
  </div>
  <div id="theme-portal"></div>
  <ThemeApp :initial="initialWidth === 20 ? 'red' : 'blue'" />
  <section data-instance="a">
    <BoundStyles :initial-width="initialWidth" :record="record" />
  </section>
  <section data-instance="b"><BoundStyles :initial-width="40" :record="record" /></section>
</template>
