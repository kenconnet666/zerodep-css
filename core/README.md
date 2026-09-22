# @zerodep-css/core

`Css` 是可继承的作者基类。`runtime.css(factory, AppCss)`（浏览器默认入口同形）在每次构建中创建指定派生类型，保留 getter、方法、super、私有字段与嵌套回调类型。使用 `extendProperty(super.color, { brand: value })` 可在派生 getter 中增加类型化关键字；不能覆盖已有属性操作。实例由运行时拥有，不在多个构建之间共享，构建结束后不能继续操作。

运行时 CSS 工具。公开入口 `css(factory): string` 直接返回哈希类名，可以写在浏览器模板表达式里，也可以先赋值为字符串再绑定。内部纯 Builder 已收为实现细节，不再从包入口导出 `useCss`。

## css：模板内或外部使用

```ts
import { css } from '@zerodep-css/core';

const panelClass = css((s) => {
  s.display.flex;
  s.padding.px(8, 16);
  s.width.raw('50%');
  s.hover((h) => {
    h.color.blue;
  });
  s.containerQuery('card (width > 20rem)', (c) => {
    c.display.grid;
  });
});
// panelClass 是 string。也可以直接写 class={css(s => { ... })}。
```

每次调用同步执行回调，读取普通变量的当前值，构建、序列化、计算哈希并保证规则已注册。同内容同配置复用 class 和规则。外部 const 字符串不会自己更新；框架依赖跟踪、SSR 上下文和生命周期由 Vue/Svelte 适配器提供。

- CSS 属性是不可调用对象：固定值用 `s.display.flex`，动态字面量用 `s.display.token(value)`，开放值用 `s.width.raw('50%')`，单位值用 `s.width.px(50)`。不支持 `s.width(...)`。
- `token` 严格限制为该属性的已知字面量并提供补全；`raw` 保留属性值类型、数字约束和已知值补全，同时允许任意字符串通过类型检查。实际序列化仍校验 CSS 语法边界，字符串开放不代表浏览器一定支持该值。
- 根层可调用的是 selector/media/hover 等结构或辅助入口；自定义/未知属性的写值入口也使用第二层方法：`s.custom.raw('--name', value)`、`s.property.raw('future-property', value)`。
- 重复声明、fallback、简写/长属性和嵌套交错保持顺序。
- `container` 是 CSS 属性，容器查询使用 `containerQuery`。
- `cssVar('--name', fallback)` 只引用已有 CSS 变量，不建立 JS 订阅；只有显式 `bx` 经 Vue/Svelte 编译插件转换后才创建元素绑定。
- `animationName.raw` 接受动画定义/数组，空数组输出 `animation-name:none`。token/raw 的 null/undefined 省略声明；单位方法不接受空值。
- 普通值每次变化可产生新 class，旧规则保留至所属 runtime.dispose；不自动改为 CSS 变量。

## keyframes：保留资源依赖

```ts
import { css, keyframes } from '@zerodep-css/core';

const fade = keyframes((k) => {
  k.from((s) => {
    s.opacity.raw(0);
  });
  k.at(50, (s) => {
    s.opacity.raw(0.5);
  });
  k.to((s) => {
    s.opacity.raw(1);
  });
});

const animated = css((s) => {
  s.animationName.raw(fade);
  s.animationDuration.ms(180);
  s.animationFillMode.forwards;
});
```

keyframes 创建可复用的冻结定义；`animationName.raw` 接受定义或定义数组，编译时记录依赖，注册 class 前注册所需动画。同一动画不会因多个 class 引用而重复注册。重复帧偏移和命名时间线范围保留。通过已注册名称和通过动画定义产生同一段 CSS 时复用规则并合并依赖，不因此误报哈希碰撞。

不要把动画定义对象直接插入普通字符串。需要动画名称时使用同一实例的 `runtime.keyframes(fade)`，它会先注册并返回名称。显式 `globalCss` 中的 `g.animation(fade)` 保留所在条件/层的作用范围，不跨这些位置盲目去重。

## 全局样式：定义、挂载和更新

```ts
import { globalCss, injectGlobal } from '@zerodep-css/core';

const base = globalCss((g) => {
  g.rule('html, body', (s) => {
    s.margin.px(0);
  });
  g.fontFace((d) => {
    d.fontFamily.raw('Demo');
    d.src.raw('local("Arial")');
    d.fontDisplay.swap;
  });
});
const mounted = injectGlobal(base);
mounted.update((g) =>
  g.rule('body', (s) => {
    s.color.blue;
  }),
);
// 所有者退出时：mounted.dispose();
```

`globalCss` 只创建定义；`injectGlobal` 挂到浏览器默认 runtime，返回可更新和释放的句柄。也可使用 `runtime.mountGlobal(factoryOrDefinition)`。

每次挂载拥有固定顺序槽位。更新在原位置替换，失败保留原规则；A 红、B 蓝、C 红这种相同内容的不同位置不会合并。普通 class/动画不按组件回收，防止其他 DOM 仍持有字符串而失去样式。

font-face、property、counter-style、page 等保留独立上下文。运行时检查所支持资源的必需字段和明显不合法的组合；`@property` 同名不同定义会拒绝，单个 owner 释放不会删除其他 owner 的登记。

## runtime：配置、ShadowRoot 和 SSR

```ts
import { createRuntime } from '@zerodep-css/core';

const runtime = createRuntime({
  namespace: 'app',
  layers: ['base', 'components'],
  layer: 'components',
  nonce: 'request-nonce',
});
const { css } = runtime;
const className = css((s) => {
  s.display.flex;
});
```

配置项：

- `target`：Document / ShadowRoot；省略时使用当前 document，Node 中为独立服务器实例。显式 null 始终选择服务器模式。
- `namespace`：同一目标中一个 namespace 由一个 runtime 管理。默认 `z`，浏览器顶层 css 自动复用该实例。
- `layers` / `layer`：显式原生层序及默认层；默认无 layer、无 reset。
- `nonce`：新 style 元素的 CSP nonce；SSR 恢复可从已有标签继承。
- `insertionPoint`：新 runtime 样式块之前的直接子节点；恢复时保留服务器既有位置。
- `maxRecords`：可选记录上限，超限明确失败，不通过 LRU 删除活跃规则。

SSR 每次请求独立创建实例，并使用它提供的 css：

```ts
const runtime = createRuntime({ target: null, namespace: 'app' });
const { css } = runtime;
const className = css((s) => {
  s.padding.px(8, 16);
});
const stylesHtml = runtime.renderStyles();
const manifest = runtime.snapshot();
const manifestJson = runtime.renderManifest();
// 将 stylesHtml 放到 head；manifestJson 可放在 application/json script 中。
runtime.dispose();
```

浏览器接管：

```ts
const runtime = createRuntime({ namespace: 'app', hydrate: manifest });
const { css } = runtime;
```

恢复会核对版本、配置、内容摘要、资源依赖、style 数量/顺序/内容及 CSSOM 接受的根规则数，不重复插入服务器规则。全局槽位用 `runtime.claimGlobal(id)` 显式认领，供适配器建立生命周期；不根据内容猜组件身份。非全局资源持续驻留到 runtime.dispose。

顶层 css 在 Node 中明确报错，避免偷偷使用跨请求全局缓存。SSR 应从请求实例取得同形态的 css 函数；Vue/Svelte 适配器通过应用/组件 context 提供它。

框架集成使用 `createStyleContext(options)`，由它持有 runtime，并通过 `mountGlobal(key, factory)` 维护稳定 key 到全局槽位的映射。`snapshot()` 返回带 runtime manifest 的上下文 manifest，`renderManifest()` 提供 HTML 安全 JSON；客户端传入相同配置与 `hydrate`，在框架完成恢复后调用 `completeHydration()` 检查遗漏的全局槽位。key 在同一上下文的活跃挂载中必须唯一。使用 context 时不要绕过它调用 runtime.mountGlobal/claimGlobal，否则 snapshot 会拒绝不完整的映射。直接 keyframes/css 不受此限制。

宿主拥有 context：每个 SSR 请求独立创建并在输出结束/失败时 finally dispose，浏览器应用完全卸载后 dispose。组件清理自己的全局挂载，不清理共享 class。`claimGlobal(id, definition)` 支持先事务更新再认领，更新失败不消耗认领资格。

renderStyles 保留独立 style 块，正确处理 @import/@namespace 的每张样式表边界。HTML 的 style 结束标签、nonce 属性和 manifest JSON 已做对应编码。不要用客户端 style.outerHTML 抽取 CSS：动态规则通过 CSSOM 插入，应从 runtime.snapshot/renderStyles 获取。

## 支持范围与实现选择

- 使用原生 CSS nesting，要求支持交错声明的现代浏览器；当前真实浏览器验收基于 Chrome 153。没有自动展开为旧浏览器 CSS，也没有自动加厂商前缀。
- CSSTree 3.2.1 是固定的运行时解析依赖，处理选择器、值、规则边界及所需描述符检查。生成工具仍使用固定数据版本。
- 原始值/规则必须通过语法解析，但语法成功不等于所有浏览器实现了该属性或值。目录中的规范条目依然可能是浏览器尚未支持的特征。
- 每个逻辑记录目前拥有可定位的 style 节点，便于独立插入、原位替换、回滚与 SSR 恢复；后续依据测量优化分组。`stats()` 提供记录数量与 CSS 字符数。
- `bx` 是编译标记，Vue/Svelte compiler 插件负责转换；未编译时明确报错；没有隐式变量提升或主题预设。Vue/Svelte 的监听与生命周期由各自适配器实现，core 不依赖框架。

## 验收命令

```powershell
pnpm generate:check
pnpm build
pnpm check
pnpm test
pnpm test:types
pnpm test:browser:core
```

浏览器验收默认使用已安装的 Chrome；也可通过 ZERODEP_BROWSER_CHANNEL 指定已具备的 Playwright Chromium channel。报告在 test-results/browser，类型/LSP 报告在 test-results/types。许可见 THIRD_PARTY_NOTICES.md。
