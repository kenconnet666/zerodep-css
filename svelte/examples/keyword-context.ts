import { createCssContext, type Css } from 'zerodep-css-svelte';
import type { AppKeywords } from '../../core/examples/injected-keywords.js';
export const { provideCss, useCss } = createCssContext<Css<AppKeywords>>();
