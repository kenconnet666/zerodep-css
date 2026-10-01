# 注入关键字值的作者

本次实现保留类继承和属性链：SystemKeywords 提供系统原始 CSS 值，用户主题继承它，Css(theme) 将当前主题值转换为声明。组件继续通过 createCssContext/useCss 获得作用域作者。

- new Css() 保留原生行为；new Css(theme) 接受主题对象。new Css(() => currentTheme) 用于框架适配层跟踪主题整体替换，组件不需要重复传递主题。
- 主题的属性组保留完整系统成员；用户通过对象展开或关键字类继承添加 _primary 等成员。亮暗主题实现同一个项目契约，按各 CSS 属性检查实际值。
- 原生作者关键字的返回类型统一为 string，系统默认声明仍可共享；注入主题时按作用域创建只读属性视图。主题数据不写入共享系统实例。
- 关键字 getter 和 raw('_name') 在使用时读取当前值；在 setup 中缓存返回字符串仍是普通快照，应在 Vue computed/模板或 Svelte $derived/模板内使用。
- 注入主题的成员集合在作者属性视图首次创建时确定，切换主题必须遵守相同契约。框架原地修改必须使用相应响应式数据；Svelte 不会深度代理任意 class 实例。
- 属性与原生关键字文档继续由同一元数据生成；自定义关键字通过类型映射保留项目 JSDoc。测试覆盖发布入口的 hover、候选详情和方法签名。
- 模板缓存对注入主题走普通响应式求值，避免固定方法身份导致旧值被缓存；bx 的变量生命周期继续由原框架适配器管理。

实现不依赖 Proxy，不增加组件 token 配置，不修改旧的可选 CSS 变量主题入口。主题对象、作者及 SSR 宿主分别按各自的作用域管理。

## 定义与使用

```ts
import { Css, SystemKeywords, systemKeywords, type KeywordValues } from 'zerodep-css';

interface AppKeywords extends SystemKeywords {
  readonly color: SystemKeywords['color'] & {
    /** 主操作颜色，亮暗主题提供不同色值。 */
    readonly _primary: KeywordValues['color'];
  };
}
class LightKeywords extends SystemKeywords implements AppKeywords {
  override readonly color: AppKeywords['color'] = { ...systemKeywords.color, _primary: '#1d4ed8' };
}
class DarkKeywords extends SystemKeywords implements AppKeywords {
  override readonly color: AppKeywords['color'] = { ...systemKeywords.color, _primary: '#93c5fd' };
}
const s = new Css(new LightKeywords());
s.color._primary; // color:#1d4ed8;
s.color.raw('_primary'); // 与成员读取相同
s.width.px(20); // width:20px;
s.keywords.color._primary; // 原始色值
```

原生字段默认值保持 CSS 原有含义；品牌、状态等差异建议添加下划线关键字。数字仅在对应 CSS 属性本来允许时使用。未知的 _name 传给 raw() 时仍按原始 CSS 字符串处理；已定义关键字的实际值必须是字符串或数值，成员不得占用 raw、px 等方法名。

上下文类型在项目入口写一次：

```ts
import { createCssContext, type Css } from 'zerodep-css-svelte';
export const { provideCss, useCss } = createCssContext<Css<AppKeywords>>();
```

Vue 将包名替换为 zerodep-css-vue。Provider 内创建并提供作者，例如 `provideCss(new Css(() => currentTheme))`；Vue ref 使用 `() => currentTheme.value`。后代只需 `const s = useCss()`，在模板或 computed/$derived 中调用 `css(s.color._primary)`。初始化时缓存字符串不会自动更新。

可执行示例： [Svelte KeywordTheme](../svelte/examples/KeywordTheme.svelte)、[Vue KeywordTheme](../vue/examples/KeywordTheme.vue)，共享主题契约在 [injected-keywords.ts](../core/examples/injected-keywords.ts)。示例通过主题替换保持响应式；子级暗色作用域不受父级切换影响。

## 兼容与验证边界

无参 new Css()、直接属性类、旧的属性类继承、选择器和可选 ThemeCss CSS 变量入口继续可用。显式使用自定义 Css<T> 时必须提供主题；新增成员集合需要重建作者，不使用运行时 Proxy 自动扩展 API。

主题作者采用正常求值以保留依赖跟踪，不套用共享常量作者的缓存假设。bx 仍显式管理高频连续值；此次调整不会自动把所有主题值转成 CSS 变量。浏览器矩阵与跨平台完整验收交 CI，本地以类型、文档和焦点场景验证为准。
