<script setup lang="ts">
import { ref, Teleport } from 'vue';
import { theme, spacing, styles } from './theme';
import ThemeLeaf from './ThemeLeaf.vue';
import ThemeBranch from './ThemeBranch.vue';
const props = defineProps<{ initial: string }>();
const brand = ref(props.initial);
const portal = ref(false);
const gap = ref('4px');
styles.provideTheme(() => ({ color: { brand: brand.value } }));
styles.provideTheme(spacing, () => ({ gap: gap.value }));
const css = styles.useCss();
const current = styles.useTheme();
const currentSpacing = styles.useTheme(spacing);
</script>
<template>
  <button data-theme-spacing @click="gap = '8px'">spacing</button>
  <button data-theme-parent-change @click="brand = brand === 'red' ? 'blue' : 'red'">
    parent theme
  </button>
  <button data-theme-move @click="portal = true">move</button>
  <div
    data-theme-leaf="parent"
    :data-theme-values="JSON.stringify(current())"
    :data-theme-gap="currentSpacing().gap"
    :class="
      css((s) => {
        s.name('themed-content');
        s.color.brand;
        s.backgroundColor.text;
        s.padding.raw(spacing.tokens.gap);
      })
    "
  >
    parent
  </div>
  <ThemeLeaf name="sibling" />
  <ThemeBranch name="child" />
  <ThemeBranch name="inherited" mode="inherit" />
  <ThemeBranch name="reset" mode="defaults" />
  <Teleport to="#theme-portal" :disabled="!portal"><ThemeLeaf name="portal" /></Teleport>
</template>
