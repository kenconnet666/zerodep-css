export const headMarker = '<!--zerodep-css:head-->';
export const manifestAttribute = 'data-zerodep-css-manifest';

function attribute(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

/** 标记由应用模板显式放在 head 内；保留注释避免扰动 Svelte hydration 标记。 */
export function injectPageStyles(
  html: string,
  styles: string,
  manifest: string,
  nonce?: string,
): string {
  const offset = html.indexOf(headMarker);
  if (offset < 0 || html.indexOf(headMarker, offset + headMarker.length) >= 0)
    throw new Error('app.html must contain exactly one <!--zerodep-css:head--> marker in <head>.');
  const script = `<script type="application/json" ${manifestAttribute}${nonce === undefined ? '' : ` nonce="${attribute(nonce)}"`}>${manifest}</script>`;
  return html.slice(0, offset) + styles + script + html.slice(offset);
}
