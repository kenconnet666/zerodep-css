import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import cssBindings from 'zerodep-css-svelte/vite';
// 本夹具只许可固定内联样式哈希，动态变量继续通过带 nonce 的样式表传输。
export default defineConfig({ plugins: [cssBindings({ inlineBindings: false }), sveltekit()] });
