# 待选择的 API 扩展

本页全部是候选，尚未实现。保留普通声明字符串、类继承、原生 if/switch、运行时 css 与显式 bx；不追加 recipes/variants、通用 var 方法或另一套样式对象协议。

当前已具备完整属性链、长度/百分比/时间/角度单位、rgb/hsl/oklch/oklab、calc/min/max/clamp、选择器、动画、类组合与主题。因此下面只讨论仍有使用收益的增量。

## A：条件规则快捷方法（推荐）

```ts
css(
  s.display.grid,
  s._media('(width >= 48rem)', s.gap.rem(2)),
  s._supports('(grid-template-columns: subgrid)', s.gridTemplateColumns.raw('subgrid')),
  s._container('(width >= 24rem)', s.padding.rem(2)),
);
```

当前等价写法是 `s._selector('@media (width >= 48rem)', ...)`。候选方法只拼接标准 @ 规则并返回声明字符串，不解析查询、不增加断点管理器。命名沿用选择器下划线约定，任意原生写法仍用 `_selector`。

收益：少写前缀，并让编译器更容易确认变量仍落在当前元素/后代范围。成本较低，但生成器、类型提示、框架转换和嵌套测试要一起接入。命名容器可以先写在完整查询字符串中，不另造重载族。

## B：预设主题的类型化局部覆盖（推荐）

```ts
const nested = css(
  themes.override({
    text: '#7c3aed',
    surface: '#faf5ff',
  }),
);
```

返回原生变量声明字符串，例如 `--z-theme-text:#7c3aed;...`。挂到子树边界即可覆盖，移除类后恢复继承。当前需要手写变量名，这个方法补上既有 15 个主题键的补全。

收益：减少主题变量的手写拼错，不增加响应式容器、注册器或宿主状态。成本低。它只服务内置预设；用户自定义主题关键字仍由属性子类安排，不假装能从任意 class 自动提取 token。与 `themes.light/dark` 放在同一可选入口。

## C：少量复杂值方法

```ts
s.gridTemplateColumns.repeat(3, 'minmax(0, 1fr)');
s.gridAutoColumns.minmax('12rem', '1fr');
```

继续输出完整声明，不引入链式值对象；现在可以用 raw 写出相同 CSS。优先补难记、常用的函数，不批量给每个属性挂全部 CSS 函数。成本中等，主要在适用属性、参数补全和生成器元数据维护。

这些方法无法相互嵌套作为值，例如不能把另一个属性方法返回的完整声明传给 repeat。复杂嵌套仍用原生字符串；若要完全类型化值组合，会增加第二层 API，暂不推荐。

## D：带诊断标签的样式登记

```ts
const root = css.named('Card.root', s.display.flex, s.gap.rem(1));
// 候选结果：z-Card-root-<hash>
```

收益：开发工具里直接看出样式来源。当前 `className('Card.root')` 只是独立选择器标记，不会给 css 生成的类命名，二者作用不同。

成本中等：登记缓存、组合、冲突检查、SSR/hydration 和生产命名策略必须一致。不能只修改返回字符串。此前讨论的 `s.name(...).config(...)` 没有定案；普通字符串不会携带作者对象元数据，因此优先考虑在登记入口显式命名，或只增加编译器自动调试标签。两种命名方向择一，避免并行维护同义 API。

## E：为同一个 css 增加标签模板调用

```ts
css`
  ${s.display.flex}
  color: ${color};
  width: ${bx(width + 'px')};
`;
```

收益：原生 CSS 和属性链可以在多行中混用。成本中等偏高：需要完整处理模板段与插值交错、类型重载、bx 分组与模板缓存，不能当普通数组直接 join。

已有 `css(s.display.flex, 'color:' + color + ';')` 和 raw 足以表达这些样式；目前不优先增加第二种调用语法。若多行原生 CSS 是主要用法，再选择此方向。

建议先选 A + B；C 根据实际高频属性补充；D 适合确有诊断困难时做；E 暂缓。它们可以独立选择，不要求同时实施，也不附带新的编译时框架路线。
