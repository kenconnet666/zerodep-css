# 声明、类名与顶层规则

Vue/Svelte 的主入口提供 `css`、`keyframes`、`globalCss`、`className` 和作者类。样式组合统一由 `css` 处理，选择器使用作者对象的下划线方法；原 `cx`、独立 `ic` 及其旧类型已移除。浏览器与 Node 使用相同写法；服务端调用仍需活动宿主。

属性类的 raw / 数学方法直接声明参数类型；`CssString` 集中承接任意字符串与关键字补全。基类只复用方法，不传递值类型泛型，详见[类型结构](author-types.md)。

```ts
const title = className('Card.title');
const base = css(s.color.red, s._selector(`& > .${title}`, s.fontWeight.bold));
const active = css(s.color.blue);
const combined = css(base, enabled && active, [s.padding.rem(1), null]);

const fade = keyframes(s._selector('from', s.opacity.raw(0)), s._selector('to', s.opacity.raw(1)));
const animated = css(s.animationName.raw(fade), s.animationDuration.raw('180ms'));

globalCss('reset', s._selector('html, body', s.margin.px(0)));
globalCss('theme', s._selector(':root', '--brand:red;'));
globalCss('theme', s._selector(':root', '--brand:blue;'));
globalCss('theme');
```

`css` 接受声明字符串、当前宿主已登记的样式类、嵌套只读数组，以及会被跳过的 `false` / `null` / `undefined`。输入类型为 `CssInput`，不接受条件对象、裸数字或 `true`。取回已登记类的声明后按参数顺序拼接，复用同一内容缓存；`css(base)` 返回原类名，相同组合不重复登记，原有类的规则仍保留。

只有与登记表精确匹配的完整字符串参数才作为样式类引用；其他字符串原样拼接，不依据标点猜测含义。`css('color:', 'red', ';')` 仍有效，`css('external')` 不会自动传递外部 class，包含多个类的字符串也不会拆分。服务端样式类需先在当前宿主登记，客户端应先完成 hydration。

`css` 始终返回一个样式类名。`className` 是不注册样式的纯标记，可放模块顶层；标记、外部 class 和条件对象交给模板组合，例如 Vue 的 `:class="[title, combined, { disabled }]"`，Svelte 的 `class={[title, combined, { disabled }]}`。父级选择器引用稳定标记，不引用可能被重新合成的样式类。

声明不做属性去重，important、简写、长属性和无效声明继续服从原生 CSS。条件表达式按普通 JS 的执行时机选择结构；需要随状态变化时在模板或框架派生求值中执行，而不是让一次性的 setup 条件自动订阅。

`s._selector` 使用浏览器原生 CSS 嵌套，不引入 Stylis。需要选择独立子元素时使用上例的 `className` 标记；Emotion 的 `&-child` 字符串后缀展开不属于原生嵌套，不能直接套用。

选择器方法接受声明字符串、嵌套只读数组和 `false/null/undefined` 空项，不查询宿主，不展开已生成的类名。`keyframes`、`globalCss` 的片段参数继续为字符串，登记职责不变。

## 选择器方法

```ts
const button = css(
  s.color.black,
  s._hover(s.color.blue, [enabled && s.opacity.raw(0.9)]),
  s._active(s.opacity.raw(0.8)),
  s._focusVisible(s.outlineWidth.px(2), s.outlineStyle.solid),
  s._selector('&:hover:not(:disabled)', s.cursor.pointer),
  s._selector('@media (width >= 60rem)', s.padding.rem(2)),
);
```

快捷方法为 `_hover`、`_active`、`_focus`、`_focusVisible`、`_focusWithin`、`_disabled`、`_checked`、`_before`、`_after`，分别对应原生伪类 / 伪元素。全部共享原型方法，不提供无前缀别名。`_selector(selector, ...parts)` 用 `CssSelector` 提供常见选择器、@ 规则、from/to 的补全，并允许任意字符串；没有对浏览器语法另做限制。

快捷方法调用 `this._selector`，用户可以通过继承扩展自己的方法。系统方法内部的动态属性值参与隐式绑定；覆写快捷方法或 `_selector` 时，编译运行时会保留整个片段的原始求值并在开发模式提示，避免字符串加工逻辑收到变量占位符。

`s.width.ic(1)` 仍是原生 CSS 的 ic 长度单位；本次移除的是原来的独立 `ic()` 选择器函数，不改变单位 API。

全局块放在普通类样式之前，块之间按创建顺序排列。同名更新保留位置，移除再创建放在全局块末尾。更新全局块不会重写普通类的 CSSOM。动画与普通类按内容命名和复用，采用完整 UTF-16 的更宽哈希，仍保留冲突诊断。

浏览器 `configureCss({ nonce, insertionPoint })` 在首次登记或恢复前调用；位置节点必须位于当前 document.head，库把自身样式放在它之后。SSR 已有样式的 nonce 会沿用到之后创建的标签。`cssStats()` 提供规则数、全局块数与主标签连接状态；`disposeCss()` 只用于整个宿主退出，不能在任意子组件卸载时调用。

`cssStats()` 的 `classes`、`animations`、`globals`、`bindings` 分别表示普通类、动画、命名全局块与私有值规则；`rules` 为总数。统计只在调用时读取现有 Map 大小，不额外扫描 DOM。组件卸载清理私有值规则，普通类可能被外部字符串引用，仍由宿主保留。

若主样式标签意外被移除，下一次调用会根据宿主缓存重建。全局块标签的移除在下次操作该块时重建，不注册全页面 MutationObserver。已有挂载元素需要在宿主销毁前退出；显式 dispose 后不会猜测哪些类还在被外部 DOM 使用。

## 单位与值方法

```ts
s.width.rem(20);
s.height.dvh(100);
s.width.cqw(50);
s.padding.rem(0.5, 1, 2, 3);
s.gap.em(0.5, 1);
s.width.percent(50);
s.animationDuration.ms(180);
s.rotate.turn(0.5);
s.color.rgb(255, 0, 0, 0.5);
s.color.hsl(200, 60, 50);
s.width.clamp('16rem', '50vw', '40rem');
s.opacity.clamp(0, 0.5, 1);
```

长度属性提供绝对、字体、视口（含 s/l/d 家族）、容器单位。百分比、时间、角度按属性的类型和语法生成；数学方法为 calc/min/max/clamp，颜色方法为 rgb/hsl。所有方法仍返回完整声明字符串，没有公开 var 方法，没有 pct/percentage 或 rgba 同义入口。

普通单位方法收一个数字；padding/margin、gap、逻辑边距、背景尺寸等根据元数据提供合适的参数数量。混合单位、斜线分组和特殊值继续使用 raw。类型提示只约束作者入口，不做浏览器值域校验。单位名不会挤掉无关属性的系统关键字，例如 textBox.cap、textBoxEdge.ex 仍是字符串字段。

Vue / Svelte 已提供可选的[隐式绑定转换](implicit-bindings.md)，支持多参数、复杂 raw 表达式、声明 / 类组合与动画，保留原有运行时求值路径。SSR 和宿主 nonce 接入见[元框架说明](metaframeworks.md)。
