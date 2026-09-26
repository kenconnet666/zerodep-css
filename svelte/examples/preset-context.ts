import { createCssContext } from '@zerodep-css/svelte';
import type { ProjectCss } from '../../core/examples/preset-theme.js';
export const { provideCss, useCss } = createCssContext<ProjectCss>();
