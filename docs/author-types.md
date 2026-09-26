# 直观的作者类型

属性基类只复用运行逻辑，不接收泛型。各属性类直接声明 `raw` 和数学方法的参数，方法返回普通 `string`；固定关键字继续是 readonly 字符串字段，保留 TypeScript 自然推断的字面量类型。

```ts
class AnimationPlayStateCss extends CssProperty {
  readonly paused = 'animation-play-state:paused;';
  readonly running = 'animation-play-state:running;';
  // 其余系统关键字同样是生成的普通字段。

  constructor() {
    super('animation-play-state');
  }

  raw(value: Property.AnimationPlayState | CssString): string {
    return this.declaration(value);
  }
}
```

`CssString` 是集中定义的 `string & {}`：与关键字联合时保留补全，同时接受任意 CSS 字符串。它不做品牌标记或运行时校验。可从 core 或框架适配器的主入口导入这个类型，用于用户覆写方法签名。

`LengthCssProperty` 同样不带泛型，只提供 px、rem 等公共长度方法。WidthCss 继承它，AnimationPlayStateCss 只继承 CssProperty；简写属性按已有参数数量生成自己的重载。

数学参数直接写 `Property.Width | CssString` 等，不再嵌入 Extract 条件类型。CSS 属性值是字符串或数值，开放字符串已经覆盖关键字，因此保留原数值约束：width 的裸数字只接受 0，opacity 可接受普通数字，时间值仍需单位。clamp 使用普通数组 join 拼接，避免大型关键字联合触发 TypeScript 模板字面量组合膨胀。

`declaration` 是 protected 格式化实现。用户通常继续调用 raw、单位方法或添加自己的 readonly 字段；继承方式没有变化：

```ts
class ThemeWidth extends WidthCss {
  readonly _md = this.rem(48);
}
class AppCss extends Css {
  override readonly width = new ThemeWidth();
}
```

用户覆写 raw 或公共格式化逻辑时仍执行用户方法；显式 bx 的返回值是 var 字符串，不会按方法身份恢复真实值。此轮没有采用 Proxy、关键字类型映射、公共全局关键字抽取或构造时前缀拼接。

生成内容仍只通过 `pnpm css:generate` 更新。手工维护生成规则与少量基础逻辑，查看具体属性时可以直接读出成员及参数，无需追踪泛型继承链。
