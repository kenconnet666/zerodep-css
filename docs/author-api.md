# 声明、类名与顶层规则

Vue/Svelte 的主入口提供 `css`、`cx`、`keyframes`、`globalCss`，并继续导出 `ic` 和作者类。浏览器与 Node 使用相同写法；服务端调用仍需活动宿主。

```ts
const title = className('Card.title');
const base = css(s.color.red, ic(`& > .${title}`, s.fontWeight.bold));
const active = css(s.color.blue);
const combined = cx(title, base, enabled && active, ['external', { disabled }]);

const fade = keyframes(ic('from', s.opacity.raw(0)), ic('to', s.opacity.raw(1)));
const animated = css(s.animationName.raw(fade), s.animationDuration.raw('180ms'));

globalCss('reset', ic('html, body', s.margin.px(0)));
globalCss('theme', ic(':root', '--brand:red;'));
globalCss('theme', ic(':root', '--brand:blue;'));
globalCss('theme');
```

`className` 是不注册样式的纯标记，可放模块顶层。`cx` 保留标记和外部类，只对当前宿主的已登记样式类按参数顺序重组声明；少于两个已登记类时不另建规则。声明不做属性去重，important、简写与长属性继续服从原生 CSS。

全局块放在普通类样式之前，块之间按创建顺序排列。同名更新保留位置，移除再创建放在全局块末尾。更新全局块不会重写普通类的 CSSOM。动画与普通类按内容命名和复用，采用完整 UTF-16 的更宽哈希，仍保留冲突诊断。

浏览器 `configureCss({ nonce, insertionPoint })` 在首次登记或恢复前调用；位置节点必须位于当前 document.head，库把自身样式放在它之后。SSR 已有样式的 nonce 会沿用到之后创建的标签。`cssStats()` 提供规则数、全局块数与主标签连接状态；`disposeCss()` 只用于整个宿主退出，不能在任意子组件卸载时调用。

若主样式标签意外被移除，下一次调用会根据宿主缓存重建。全局块标签的移除在下次操作该块时重建，不注册全页面 MutationObserver。已有挂载元素需要在宿主销毁前退出；显式 dispose 后不会猜测哪些类还在被外部 DOM 使用。

单位、颜色 / 数学方法以及隐式绑定仍按[阶段计划](../.research/next-phase-authoring-and-bindings.md)继续实现。本文记录当前已落地的登记基础和 API。
