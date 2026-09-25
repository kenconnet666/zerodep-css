import { createApp, defineComponent, h, nextTick } from 'vue';
import createEmotion from '@emotion/css/create-instance';
import Component from './VueMupPerformance.vue';
import { Css, callCount, provideCss } from './vue-mup-performance-context.ts';

type Mode = 'direct' | 'memo' | 'table' | 'variable' | 'native-table' | 'native-var' | 'emotion';
type Control = { step(): void; noise(): void; read(): number };

export async function start(mode: Mode, unique: boolean, rowCount: number, target: HTMLElement) {
  const styles = document.createElement('div');
  document.head.append(styles);
  const emotion =
    mode === 'emotion'
      ? createEmotion({ key: 'emotion-mup', container: styles, speedy: true })
      : undefined;
  let emotionCalls = 0;
  let control: Control | undefined;
  const Root = defineComponent({
    setup() {
      provideCss(new Css());
      return () =>
        h(Component, {
          mode,
          unique,
          rowCount,
          emit(...parts: string[]) {
            emotionCalls++;
            return emotion!.css(...parts);
          },
          expose(value: Control) {
            control = value;
          },
        });
    },
  });
  const app = createApp(Root);
  app.mount(target);
  await nextTick();
  if (!control) throw new Error('Vue performance control is unavailable.');
  return {
    step: control.step,
    noise: control.noise,
    read: control.read,
    flush: nextTick,
    stats: () => ({
      calls: mode === 'emotion' ? emotionCalls : callCount(),
      records:
        mode === 'emotion'
          ? emotion!.sheet.ctr
          : (document.querySelector<HTMLStyleElement>('style[data-zerodep-css]')?.sheet?.cssRules
              .length ?? 0),
    }),
    dispose() {
      app.unmount();
      emotion?.flush();
      styles.remove();
    },
  };
}
