<script setup lang="ts">
import { ref } from 'vue';
import { provideTheme, useStyleRuntime } from '@zerodep-css/vue';
import { lightTheme, darkTheme, ThemeCss } from '@zerodep-css/vue/themes';
import PresetOverride from './PresetOverride.vue';
const props = defineProps<{ name: string; initialDark: boolean }>();
const dark = ref(props.initialDark);
const scope = provideTheme(lightTheme, () =>
  dark.value ? darkTheme.defaults : lightTheme.defaults,
);
const { css } = useStyleRuntime(undefined, scope);
const tones = [
  ['success', 'onSuccess'],
  ['warning', 'onWarning'],
  ['danger', 'onDanger'],
  ['info', 'onInfo'],
] as const;
</script>
<template>
  <section
    :data-preset="name"
    :data-mode="dark ? 'dark' : 'light'"
    :class="
      css((s) => {
        s.name('preset-panel');
        s.display.flex;
        s.flexDirection.column;
        s.gap.md;
        s.padding.xl;
        s.width.px(300);
        s.boxSizing.borderBox;
        s.color.text;
        s.backgroundColor.surface;
        s.colorScheme.theme;
        s.fontFamily.body;
        s.fontSize.md;
        s.borderStyle.solid;
        s.borderWidth.px(1);
        s.borderColor.border;
        s.borderRadius.lg;
        s.boxShadow.md;
      }, ThemeCss)
    "
  >
    <h2
      :class="
        css((s) => {
          s.fontSize.lg;
          s.margin.zero;
        }, ThemeCss)
      "
    >
      {{ dark ? '暗色主题' : '亮色主题' }}
    </h2>
    <p
      data-preset-muted
      :class="
        css((s) => {
          s.color.textMuted;
          s.fontSize.sm;
          s.margin.zero;
        }, ThemeCss)
      "
    >
      语义颜色、共享尺度与独立作用域
    </p>
    <button
      data-preset-toggle
      :aria-pressed="dark"
      @click="dark = !dark"
      :class="
        css((s) => {
          s.name('preset-action');
          s.backgroundColor.primary;
          s.color.onPrimary;
          s.padding.md;
          s.borderRadius.md;
          s.borderWidth.px(0);
          s.cursor.pointer;
          s.fontFamily.body;
          s.fontSize.sm;
          s.focusVisible((h) => {
            h.outlineStyle.solid;
            h.outlineWidth.px(2);
            h.outlineOffset.px(2);
            h.outlineColor.focusRing;
          });
        }, ThemeCss)
      "
    >
      切换亮暗
    </button>
    <input
      data-preset-input
      aria-label="主题预览输入"
      value="默认输入样式"
      readonly
      :class="
        css((s) => {
          s.color.text;
          s.backgroundColor.canvas;
          s.borderColor.border;
          s.borderStyle.solid;
          s.borderWidth.px(1);
          s.padding.sm;
          s.borderRadius.sm;
          s.fontFamily.body;
          s.fontSize.sm;
          s.focusVisible((h) => {
            h.outlineStyle.solid;
            h.outlineWidth.px(2);
            h.outlineColor.focusRing;
          });
        }, ThemeCss)
      "
    />
    <div
      :class="
        css((s) => {
          s.display.flex;
          s.flexWrap.wrap;
          s.gap.sm;
        }, ThemeCss)
      "
    >
      <span
        v-for="tone in tones"
        :key="tone[0]"
        :data-preset-tone="tone[0]"
        :class="
          css((s) => {
            s.backgroundColor[tone[0]];
            s.color[tone[1]];
            s.padding.xs;
            s.borderRadius.sm;
            s.fontSize.xs;
          }, ThemeCss)
        "
        >{{ tone[0] }}</span
      >
    </div>
    <PresetOverride />
  </section>
</template>
