import { createCssContext } from '@zerodep-css/vue';
import type { ProjectCss } from '../../core/examples/preset-theme.js';
export const { provideCss, useCss } = createCssContext<ProjectCss>();
