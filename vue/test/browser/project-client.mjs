import { createSSRApp, h, nextTick } from 'vue';
import { ProjectApp, styles } from '../fixtures/ProjectStyles.mjs';

export async function start() {
  const manifest = JSON.parse(document.querySelector('#styles').textContent);
  const host = styles.createHost({ namespace: 'project', hydrate: manifest });
  const app = createSSRApp(ProjectApp, { initial: 'red' });
  app.use(host);

  let secondInstallError = '';
  try {
    host.install(createSSRApp({ render: () => h('div') }));
  } catch (error) {
    secondInstallError = error.message;
  }

  app.mount(document.querySelector('#app'));
  await nextTick();
  host.completeHydration();

  return {
    app,
    host,
    secondInstallError,
    async stop() {
      app.unmount();
      await nextTick();
    },
  };
}
