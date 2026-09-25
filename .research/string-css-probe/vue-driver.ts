import { createApp, nextTick } from 'vue';
import createEmotion from '@emotion/css/create-instance';
import Component from './VueProbe.vue';
import { createHost, setCurrentHost } from './runtime.ts';

type Mode = 'direct' | 'memo' | 'table' | 'variable' | 'emotion';
type Control = { step(): void; noise(): void; read(): number };

export async function start(mode: Mode, unique: boolean, rowCount: number, target: HTMLElement) {
  const styles = document.createElement('div');
  document.head.append(styles);
  const host = mode === 'emotion' ? undefined : createHost(styles);
  const emotion =
    mode === 'emotion'
      ? createEmotion({ key: 'emotion-probe', container: styles, speedy: true })
      : undefined;
  let emotionCalls = 0;
  let control: Control | undefined;
  setCurrentHost(host);
  const app = createApp(Component, {
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
  app.mount(target);
  await nextTick();
  if (!control) throw new Error('Vue probe did not expose control.');
  return {
    step: control.step,
    noise: control.noise,
    read: control.read,
    flush: nextTick,
    stats: () => host?.stats() ?? { calls: emotionCalls, records: emotion!.sheet.ctr },
    dispose() {
      app.unmount();
      setCurrentHost(undefined);
      host?.dispose();
      emotion?.flush();
      styles.remove();
    },
  };
}
