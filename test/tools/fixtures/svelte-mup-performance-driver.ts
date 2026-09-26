import { mount, tick, unmount } from 'svelte';
import createEmotion from '@emotion/css/create-instance';
import Component from './SvelteMupPerformanceRoot.svelte';
import { callCount } from './svelte-mup-performance-context.ts';

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
  const component = mount(Component, {
    target,
    props: {
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
    },
  });
  await tick();
  if (!control) throw new Error('Svelte performance control is unavailable.');
  return {
    step: control.step,
    noise: control.noise,
    read: control.read,
    flush: tick,
    stats: () => ({
      calls: mode === 'emotion' ? emotionCalls : callCount(),
      records:
        mode === 'emotion'
          ? emotion!.sheet.ctr
          : (document.querySelector<HTMLStyleElement>('style[data-zerodep-css]')?.sheet?.cssRules
              .length ?? 0),
    }),
    async dispose() {
      await unmount(component);
      emotion?.flush();
      styles.remove();
    },
  };
}
