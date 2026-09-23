import { createStyles } from '@zerodep-css/svelte';
import { lightTheme, ThemeCss } from '@zerodep-css/svelte/themes';

export const presetStyles = createStyles({ cssType: ThemeCss, theme: lightTheme });
