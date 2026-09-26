import { addPlugin, createResolver, defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
  meta: { name: '@zerodep-css/nuxt', compatibility: { nuxt: '^4.0.0' } },
  setup() {
    const resolver = createResolver(import.meta.url);
    addPlugin({ src: resolver.resolve('./runtime/server.js'), mode: 'server', order: -30 });
    addPlugin({ src: resolver.resolve('./runtime/client.js'), mode: 'client', order: -30 });
  },
});
