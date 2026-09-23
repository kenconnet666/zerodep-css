<script setup lang="ts">
import { Css, defineTheme } from '@zerodep-css/core';
import { createStyles } from '../../src/styles.js';
class AppCss extends Css {
  control() {
    this.padding.px(8);
  }
}
const theme = defineTheme('project-types', { color: { primary: 'red' }, gap: 8 });
const styles = createStyles({ cssType: AppCss, theme });
const css = styles.useCss();
const name: string = css('foreign', false, [null, (s) => s.control()]);
const values = styles.useTheme();
const gap: number = values().gap;
styles.provideTheme({ color: { primary: 'blue' } });
styles.provideTheme(() => ({ gap: 4 }));
styles.useGlobalCss('typed', (g) =>
  g.media('(width > 10px)', (g) => g.rule('body', (s) => s.control())),
);
// @ts-expect-error 默认主题仍保留完整叶值类型
styles.provideTheme({ gap: '8' });
// @ts-expect-error 主题字段不能凭空新增
values().missing;
const bare = createStyles();
// @ts-expect-error 没有默认主题时须显式指定定义
bare.useTheme();
// @ts-expect-error 系统 Css 不会被项目派生类污染
bare.useCss()((s) => s.control());
void gap;
</script>
<template><div :class="name"></div></template>
