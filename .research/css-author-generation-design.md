# CSS 作者链生成与上下文设计（讨论稿）

本文保留早期共享原型方案的讨论与探针背景；当前关键字已试改为直接类字段，见[直接字段试验](direct-keyword-fields-probe.md)。下文的 `Object.assign` 输出示意不是当前生成代码。

生成脚本已从 10 属性试点扩展到 **502 个标准与独有 SVG 属性、12,586 个关键字**。包体积不是筛选关键字的理由，优先保证写法自然。每个属性是一条链，常见用法直接产出声明字符串：

```ts
s.display.flex; // 'display:flex;'
s.width.auto; // 'width:auto;'
s.width.px(24); // 'width:24px;'
s.width.raw('calc(100% - 2rem)'); // 'width:calc(100% - 2rem);'
```

系统关键字、`px(number)` 和 `raw(value)` 是同一属性链上的三种输入。`raw('xx')` 是逃生舱：直接拼成 `width:xx;`，不解析、不校验、不补单位，浏览器决定该声明是否生效。生成代码沿用属性值类型提供已知值提示，任意普通字符串始终可用。主题关键字通过继承属性链添加，例如 `s.width._md`，不需要另一套关键字 API。

## 先看用户实际怎么写

| 用户写法             | 得到的字符串        | 何时使用                                    |
| -------------------- | ------------------- | ------------------------------------------- |
| `s.display.flex`     | `display:flex;`     | 固定 CSS 关键字，无函数调用                 |
| `s.width.px(24)`     | `width:24px;`       | 数字明确表示像素                            |
| `s.width.raw('50%')` | `width:50%;`        | 百分比、`calc()`、`var()` 或任何自写 CSS 值 |
| `s.opacity.raw(0.5)` | `opacity:0.5;`      | CSS 本来就接受无单位数字的属性              |
| `s.width._md`        | 例如 `width:48rem;` | 项目通过继承加的主题关键字                  |

这些都是普通字符串片段，可传给 `css(s.display.flex, s.width.px(24))`。`css(s.color.red, s.color.blue)` 会保留两条声明，由浏览器按原生层叠得到蓝色，不做属性去重。生成 1.25 万个关键字字符串**不意味着向页面插入 1.25 万条 CSS 规则**；只有调用外层 `css(...)` 组合并注册时，宿主才写入用到的规则。

## 已确定的写法，不再作为审核题

- `px(number)` 只出现在接受 CSS 长度的属性链上。一般属性只接收一个数字：`s.width.px(24)` 得到 `width:24px;`。少数简写按自身语法单独处理，例如 `s.padding.px(8, 16)` 得到 `padding:8px 16px;`，`s.gap.px(8, 12)` 得到 `gap:8px 12px;`。[Padding](https://drafts.csswg.org/css-box/#padding)与 [gap](https://drafts.csswg.org/css-gaps-1/#gap-shorthand)各有自己的参数规则；不做一个可接收任意数字个数的通用简写实现。
- `raw()` 始终是原样拼接的逃生舱。系统值提示若能直接沿用 `csstype`，就保留；无论提示是否齐全，`s.width.raw('anything')` 这种普通字符串必须可写。`_md` 一类用户关键字由用户自己的 `WidthCss` 子类声明，生成器只提供继承基础，不替用户猜补全词。
- 502 个标准与独有 SVG 属性及其可命名系统关键字都生成。体积不用于删减作者写法；生成器另行报告模块启动与 IDE 补全成本。

## `useCss()` 的含义：读取已注入的实例

建议把它理解成一个**有类型的 Context/依赖注入读取函数**，而不是 `new Css()` 的快捷写法。下面是概念 API，名称尚未实现：

```ts
// 项目入口：只创建有类型的上下文，不在模块顶层创建作者实例
class ThemeWidthCss extends WidthCss {
  readonly _md = this.raw('48rem');
}
class AppCss extends Css {
  override readonly width = new ThemeWidthCss();
}
export const { provideCss, useCss } = createCssContext<AppCss>();

// 应用根组件或每次 SSR 请求的根部
provideCss(new AppCss()); // 这里创建并提供一次

// 任意后代组件的初始化阶段
const s = useCss(); // 注入同一个 AppCss 实例；自动得到 AppCss 类型
s.width._md;
```

这样既允许调用方传入自己创建的泛型实例，也只在项目入口写一次 `AppCss` 类型。组件不需要 `useCss<AppCss>()`，否则任意组件都能声称自己拿到另一个类型，运行时注入键却未必匹配。Vue 适配器可用 [带泛型的 `InjectionKey`](https://vuejs.org/guide/typescript/composition-api.html#typing-provide-inject)，Svelte 5 适配器可用 [`createContext<AppCss>()`](https://svelte.dev/docs/svelte/context) 做同样的事。找不到提供者时明确报错，不偷偷创建实例；子树再次提供时由较近的提供者覆盖。模块顶层只保存类型化上下文定义，SSR 中的实例属于各自请求，不跨请求共享。

这也修正了当前原型：`core` 中的 `useCss()` 现在每调用一次就 `new Proxy(new Css(), {})`。正式形态应把作者实例的创建放到根部、把 `useCss()` 放在 Vue/Svelte 适配器作为上下文读取；`core` 保留框架无关的 `Css` 类。当前空 `Proxy` 没有提供能力，不应仅为注入而保留。

**需要另外解决的真正边界：**按已定写法，`css(...strings)` 仍是导入函数。两个并发 SSR 请求都调用 `css('color:red;')` 时，它单看字符串无法判断该把规则收入哪一个请求的样式宿主；作者实例的注入不能自动解决规则写入归属。建议保持用户写法，先探针验证由适配器维护活动宿主：浏览器按文档共享规则表，Node SSR 通过请求异步上下文隔离收集。没有活动宿主时明确报错；模块顶层调用 `css()` 的归属需要另行界定。如果这种内部方案在并发 SSR 或性能上不成立，再讨论是否需要组件初始化时取一次绑定的 `css` 函数，而不是提前改变作者 API。

## 性能与延期项

每个组件调用 `useCss()` 只查一次上下文，**不创建作者类或 Proxy**。系统关键字字符串可以在模块装载时准备，502 条属性链所引用的系统对象可共享；每个应用或 SSR 请求只创建其自己的 `AppCss` 实例。TypeScript 的 `readonly` 不会在运行时冻结共享对象，因此默认系统对象应在初始化时冻结，子类实例仍可增加 `_md`。

之前用 2,000 个作者实例比较过实例字段、共享原型与空 Proxy，探针可在 `test/tools` 用 `pnpm probe:author-storage` 重跑。**按现在的“根部创建一次”生命周期，这个创建次数不代表实际使用**，不再用它决定公开 API；它只提示空 Proxy 的读取成本值得在真实组件中测量。正式生成后更应测模块首次装载、一次请求的构造、常用属性读取、IDE 补全和实际用到的规则注册。

响应式变量绑定的编译优化先记录、不进入当前生成阶段：纯运行时 `css(s.width.px(width))` 仍按值生成并缓存类；以后若做 Vue/Svelte 编译器，再考虑把可识别的值改写成静态 `var(--w)` 规则和元素上的响应式绑定。当前不因这项未来优化限制 `raw()`、`px()` 或运行时回退。

## 数据来源与实测规模

1. **主数据：已固定的 [`csstype` 3.2.3](https://github.com/frenic/csstype)。** 它由 MDN 数据生成，提供标准长属性、简写、SVG、厂商前缀和过时属性的分类、`Property.*` 值类型，以及语法、初始值和 MDN 链接注释。生成脚本用 TypeScript 编译器 API 读取类型声明的 AST 和字面量联合类型；不从排版后的类型文本做正则解析。
2. **注释元数据：当前使用 `csstype` 自带的初始值和 MDN 链接注释，并在 `scripts/css-author-notes.json` 写入 10 条高频属性的中文用途说明。** 后续可加入固定版本的 [MDN CSS 数据](https://github.com/mdn/data/blob/main/css/properties.json)交叉检查语法、初始值、继承性和状态；[维护说明](https://github.com/mdn/data/blob/main/docs/updating_css_json.md)说明这些字段来自规范。MDN 数据不另行决定快捷关键字。
3. **可选审计：[W3C Webref CSS](https://github.com/w3c/webref)。** 它是规范提取数据，可报告 `csstype` 暂缺的新属性；不直接加入首版生成输入，因为规范里的新特性不等同于目标浏览器已支持。

对本机版本用 TypeScript 类型检查器统计：标准长属性 421 个、简写 76 个；SVG 属性 60 个，其中 55 个与标准属性重合，因此本轮生成 **502 个不同属性**。标准属性的字面量值在各属性下出现约 13,139 次；过滤厂商私有关键字和不能作为 JS 成员名的值后，约有 12,544 个快捷成员。按 `readonly x = 'property:value;'` 粗算，单是这些字段的源码文本约 619 KB，**这不是构建后的包体积或运行时内存测量**。

厂商前缀、过时属性和 `--custom-property` 暂不生成直接成员；用户仍可通过原生字符串片段表达。数据快照的 502 个属性不意味着每个目标浏览器均支持它们。

## 生成规则

- 从 `StandardLonghandProperties`、`StandardShorthandProperties` 与 SVG 接口取得属性及 `Property.*` 类型；与对应的 `*PropertiesHyphen` 接口对齐以获取准确的 CSS 属性名。当前版本的三组接口分别是 421/421、76/76、60/60，逐项类型一致。以后若数量、顺序或类型不符，生成失败并报告，不猜测名称。
- 用 TypeScript 类型检查器展开每个属性类型，收集字符串字面量作为候选快捷值。`(string & {})`、数值、函数语法、任意长度和时间值不是固定关键字。每条链的 `raw()` 至少接纳任意字符串，直接拼接；若沿用对应的 `Property.* | (string & {})` 能轻松保留系统值提示，就一并提供。数字输入按属性本身的值类型处理，例如 `opacity.raw(0.5)` 可输出 `opacity:0.5;`；`width` 这类长度属性的数字走 `px(24)`，任意手写值仍可走 `raw('24px')`。不为了补全引入 CSS 解析器。
- 对允许 CSS 长度的属性生成 `px(value: number)`，只执行 `property:${value}px;` 的字符串拼接。当前 `csstype` 中标准属性有 177 个引用 `TLength` 泛型，可作为候选清单；生成器将清单和例外输出供审核，不由字段名猜测。首轮只提供 `px` 这一种单位方法，其他单位和 `calc()` 等组合值可用 `raw()`。
- CSS 值名转成 JS 成员名，例如 `space-between → spaceBetween`、`revert-layer → revertLayer`。跳过厂商私有关键字和不能无歧义映射的值；遇到 `raw`、`constructor`、`then` 等成员冲突，或两种值映射成同一名称，生成失败并在报告中列出，供人决定是否只经 `raw()` 提供。
- 每个系统关键字成员的值是**预先生成的完整声明字符串**，不会在 `s.width.auto` 读取时解析、验证或拼接 CSS。`px()` 和 `raw()` 是薄字符串函数，不共享旧版回调式写入状态。浏览器仍负责值语义；数据更新后由生成差异供人审查。
- 保留现有 `ColorCss`、`WidthCss`、`OpacityCss`、`Css` 命名；新增属性链按同一规则生成，不同时保留另一套同义 API。主题或应用成员写在手工代码里，不进入生成文件。`useCss()` 是 Vue/Svelte 适配器中的上下文读取，当前 `core` 里的每次新建原型需在实施时迁移。

## 输出形态与实例化

一个根部或 SSR 请求只创建一个作者实例，不需要为“每个组件新建 502 条链”设计复杂的惰性机制。仍应避免**每次请求重建约 1.25 万个关键字字符串**：生成的系统属性链对象和关键字可以在模块装载时共享并冻结，`Css` 实例只持有指向这些对象的引用。主题子类覆盖其中一条链时才创建自己的属性链实例。先用 10 个属性的样例验证这种简单形态，若真实请求构造或导入成本明显，再考虑更深的原型优化。

下面只是输出结构示意，不是准备手写的最终文件：

```ts
const widthKeywords = {
  auto: 'width:auto;',
  minContent: 'width:min-content;',
} as const;

type WidthKeywords = Readonly<typeof widthKeywords>;
export interface WidthCss extends WidthKeywords {}
/** 元素宽度；初始值 auto。@see https://developer.mozilla.org/docs/Web/CSS/Reference/Properties/width */
export class WidthCss extends LengthPropertyCss<Property.Width> {
  constructor() {
    super('width');
  }
}
Object.assign(WidthCss.prototype, widthKeywords);
Object.freeze(WidthCss.prototype);

const systemWidth = Object.freeze(new WidthCss());
export class Css {
  readonly width = systemWidth;
}
```

`CssProperty<T>.raw(value: T | (string & {}))` 只拼接原始值；`LengthPropertyCss<T>.px(value: number)` 只拼接 `px`。已用当前 TypeScript 6 的语言服务验证：这种泛型 `raw()` 能提示 `auto`、`min-content`，任意普通字符串也没有诊断；若完整生成时发现少数属性的类型推断复杂，优先保留开放字符串输入。系统关键字对象共享，主题仍可继承 `WidthCss` 增加 `_md`，再继承 `Css` 覆盖 `width`。

## 归档使用例子的借鉴范围

只读查看了旧项目的 README、Vue 类型示例和组件夹具。`s.display.flex`、`s.width.px(width)`、`s.width.raw('fit-content')` 的调用形式验证了关键字、单位和开放值在一条链上比较顺手；`s.padding.px(8, 16)` 说明常见简写的多参数单位写法值得单独考虑。旧项目的 `css((s) => { ... })` 是有状态作者回调，当前方案要求这些表达式直接返回字符串，**不迁移旧回调、`token()` 或内部解析/覆盖机制**。

## 注释与目录

生成结果按稳定的字母区间放在 `core/src/generated/`，`author.ts` 汇总公开类型和系统属性链，`base.ts` 放共享基类。每个属性链至少有简短 JSDoc：CSS 原名、可取得的初始值、MDN 链接。扩展时可给更多高频属性补一句经过审核的中文用途说明；不自动翻译 MDN 文本，也不复制兼容性表格。关键字本身通常不逐个注释，以免生成文件膨胀；含义容易混淆的值可在手工映射中添加短注释。

当前职责边界：`scripts/generate-css-author.mjs` 读取固定依赖并枚举标准与独有 SVG 属性，`scripts/css-author-notes.json` 保存少量中文说明与简写 `px()` 参数上限，`core/src/generated/` 只放生成结果。输出头部标明来源版本和“请勿手改”。

## 生成与审核流程

已提供 `pnpm css:generate` 更新生成结果，以及 `pnpm css:generate:check` 在内存中生成并与仓库文件比较；后者也纳入 `pnpm check`。生成顺序固定，换机安装固定 lockfile 后应得到相同结果。升级来源数据时先看属性增删、关键字增删、跳过和冲突清单，再更新生成文件。

验证分三层：类型检查所有属性链并保留两层主题继承例子；抽样检查长属性、简写、SVG、普通字符串、关键字补全及 `px(number)` 是否只出现在长度属性上；浏览器抽样验证声明、`ic()` 嵌套与样式层叠。继续沿用性能探针观察启动、规则注册和访问成本，但不以“等同原生 CSS”为门槛。生成器不承担浏览器值合法性检查，也不实现响应式变量绑定编译。

核心属性链、Vue/Svelte 类型化上下文、浏览器宿主与 Node 请求宿主已落地并有焦点验收；完整产物的速度数据见[性能记录](minimum-usable-performance.md)。CSS 变量编译优化继续只记录、不实施。
