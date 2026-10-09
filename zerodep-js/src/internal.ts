import { implicitCss, type ImplicitCss, type CssProps } from 'zerodep-css/bindings';
import { _memo, _mergeProps, _styleText, type Props } from 'zerodep-js/adapter';

export const cssBinding: ImplicitCss['method'] = implicitCss.method;
export const cssKeyword: ImplicitCss['keyword'] = implicitCss.keyword;
export const cssResult: ImplicitCss['css'] = implicitCss.css;

/** CSS 库算声明和值，框架负责派生、JSX 属性覆盖与 style 序列化。 */
export function cssProps(original: Props, calculate: () => CssProps): Props {
  const result = _memo(calculate);
  return _mergeProps([
    () => original,
    {
      class: () => result.read().class,
      style: () => [_styleText(original.style), result.read().style].filter(Boolean).join(';'),
    },
  ]);
}
