import { _component, _state, _createRoot, _flushSync } from 'zerodep-js';
import { Css, css, createCssContext } from 'zerodep-css-zerodep-js';
const { provideCss, useCss } = createCssContext<Css>();
const Child = _component(() => {
  const s = useCss();
  return <span class={css(s.color.red)}>继承作者</span>;
});
export const App = _component(() => {
  const s = provideCss(new Css());
  let width = _state(24);
  const box = css(s.width.px(width));
  return (
    <section>
      <button onClick={() => (width += 4)}>增加宽度</button>
      <div data-box class={box} style={{ padding: '3px' }}>
        <Child />
      </div>
    </section>
  );
});
export function exercise() {
  return _createRoot((dispose) => {
    try {
      const s = new Css();
      let width = _state(24);
      const box = css(s.width.px(width));
      const view = <div class={box} style={{ '--custom': 'kept' }} />;
      const first = [view.props.class, view.props.style];
      _flushSync(() => (width = 28));
      return [first, [view.props.class, view.props.style]];
    } finally {
      dispose();
    }
  });
}
