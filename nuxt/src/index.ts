import { addPlugin, addVitePlugin, createResolver, defineNuxtModule } from '@nuxt/kit';
import cssBindings from '@zerodep-css/vue/vite';

export default defineNuxtModule({
  meta: { name: '@zerodep-css/nuxt', compatibility: { nuxt: '^4.0.0' } },
  defaults: { bindings: true },
  setup(options) {
    if (options.bindings) addVitePlugin(cssBindings());
    const resolver = createResolver(import.meta.url);
    addPlugin({ src: resolver.resolve('./runtime/server.js'), mode: 'server', order: -30 });
    addPlugin({ src: resolver.resolve('./runtime/client.js'), mode: 'client', order: -30 });
  },
});
