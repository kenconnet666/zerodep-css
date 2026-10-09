# zerodep-css-zerodep-js

zerodep-js 的 CSS 适配器。作者、CSS 宿主和变量安全检查来自 zerodep-css，状态/上下文/DOM/SSR 由 zerodep-js 提供。适配器不导入框架源码或复制响应式内核。

```ts
import { zerodep } from 'zerodep-js-vite';
import cssCompiler from 'zerodep-css-zerodep-js/compiler';
export default { plugins: [zerodep({ extensions: [cssCompiler()] })] };
```

业务从本包导入 Css、css、createCssContext。命名 css 在组件内自动追踪，安全的直接状态值和主题关键字转换为元素变量。CSS-wide、未知值、自定义作者及跨用途类名保留原声明/字符串语义。

```tsx
import { _component, _state } from 'zerodep-js';
import { Css, css, createCssContext } from 'zerodep-css-zerodep-js';
const { provideCss, useCss } = createCssContext<Css>();
export const Box = _component(() => {
  const s = provideCss(new Css());
  let width = _state(24);
  const box = css(s.width.px(width));
  return <div class={box} onClick={() => (width += 4)} />;
});
```

后代初始化时调用 useCss。普通赋值仍是快照，事件回调捕获已有作者，不重新读取组件上下文。编译入口仅用于构建；浏览器入口不加载 Babel 或 TypeScript。

Node 条件导出自动选择服务端登记；SSR 由应用创建 createServerCssHost、使用 withCssHost 渲染，并用 serializeCssRules 自行拼接 CSS 标签。客户端先 hydrateCss，再执行 _hydrate。此包不代替应用输出页面。

框架至少需要 1.0.0-rc.9。构建器、预扫描和 HMR 使用同一个 extensions 配置。预编译组件库同样使用此扩展，消费者不重复编译其 JS。
