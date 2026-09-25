import { createApp, defineComponent, h, nextTick, ref } from 'vue';
import { Css, WidthCss, createCssContext, css, ic } from '../../vue/src/index.ts';

class ThemeWidthCss extends WidthCss {
  readonly _md = this.px(48);
}
class AppCss extends Css {
  override readonly width = new ThemeWidthCss();
}
const { provideCss, useCss } = createCssContext<AppCss>();

export async function start(target: HTMLElement) {
  const width = ref(24);
  const preset = ref(false);
  let rootAuthor: AppCss;
  let childAuthor: AppCss;
  const Child = defineComponent({
    setup() {
      childAuthor = useCss();
      return () =>
        h(
          'button',
          {
            class: css(
              childAuthor.display.flex,
              preset.value ? childAuthor.width._md : childAuthor.width.px(width.value),
              childAuthor.color.red,
              ic('&:hover', childAuthor.color.blue),
            ),
          },
          'Vue',
        );
    },
  });
  const Root = defineComponent({
    setup() {
      rootAuthor = provideCss(new AppCss());
      return () => h(Child);
    },
  });
  const app = createApp(Root);
  app.mount(target);
  await nextTick();
  if (rootAuthor! !== childAuthor!) throw new Error('Vue CSS context changed identity.');
  return {
    step: async () => {
      width.value++;
      await nextTick();
    },
    preset: async () => {
      preset.value = true;
      await nextTick();
    },
    author: rootAuthor!,
    dispose: () => app.unmount(),
  };
}

export function duplicateClass(): string {
  return css('color:red;', 'color:blue;');
}
