import { createCssContext } from '@zerodep-css/svelte';
import type { AppCss } from '../../core/examples/theme.js';

export const { provideCss, useCss } = createCssContext<AppCss>();
