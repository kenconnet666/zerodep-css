import { hydrate, mount, tick, unmount } from 'svelte';
import ProjectHost from '../fixtures/ProjectHost.svelte';
import { styles } from '../fixtures/ProjectStyles.js';

export async function start() {
  const manifest = JSON.parse(document.querySelector('#styles').textContent);
  const host = styles.createHost({ namespace: 'project', hydrate: manifest });
  const target = document.querySelector('#app');
  let component = hydrate(ProjectHost, { target, props: { host } });
  await tick();
  host.completeHydration();
  return {
    snapshot: () => host.snapshot(),
    async secondRootError() {
      const otherTarget = document.createElement('div');
      document.body.append(otherTarget);
      let other;
      try {
        other = mount(ProjectHost, { target: otherTarget, props: { host } });
        await tick();
        return '';
      } catch (error) {
        return error.message;
      } finally {
        if (other) await unmount(other);
        otherTarget.remove();
      }
    },
    async remount() {
      await unmount(component);
      component = mount(ProjectHost, {
        target,
        props: { host, initial: 'blue', mode: 'static' },
      });
      await tick();
    },
    async stop() {
      await unmount(component);
      host.dispose();
    },
  };
}
