import { Css, createRuntime, type StyleRuntime } from '../../src/index.js';
import { ThemeCss } from '../../src/themes.js';
import { createRuntimeView } from '../../src/style-scope.js';

class AppCss extends Css {
  get color() {
    return this.extendProperty(super.color, { brand: '#2463eb' });
  }
  control(size: 'small' | 'large') {
    this.padding.px(size === 'small' ? 4 : 8);
  }
}
class InvalidCss extends Css {
  get color() {
    // @ts-expect-error 扩展关键字不能覆盖 raw 等已有操作
    return this.extendProperty(super.color, { raw: 'red' });
  }
}

const runtime = createRuntime({ target: null });
// @ts-expect-error 类型标注不能把系统 runtime 变成派生类 runtime
const invalidRuntime: StyleRuntime<AppCss> = runtime;
void invalidRuntime;
class BrandedCss extends ThemeCss {
  get color() {
    return this.extendProperty(super.color, { brand: '#123456' });
  }
}
const branded = createRuntimeView(runtime, undefined, BrandedCss);
branded.css((s) => {
  s.color.red;
  s.color.primary;
  s.color.brand;
  s.focus((h) => h.color.brand);
});
runtime.mountGlobal((g) =>
  g.rule(
    'button',
    (s) => {
      s.color.primary;
      s.color.brand;
    },
    BrandedCss,
  ),
);
createRuntimeView(runtime, undefined, AppCss).css((s) => {
  s.color.brand;
  // @ts-expect-error 直接继承系统类不会隐式得到预设主题关键字
  s.color.primary;
});
const name: string = runtime.css((s) => {
  s.control('small');
  s.color.brand;
  s.hover((h) => h.control('large'));
  // @ts-expect-error 用户方法保留参数类型
  s.control('other');
  // @ts-expect-error 扩展不放宽系统属性为可调用对象
  s.color('red');
}, AppCss);
runtime.css((s) => {
  // @ts-expect-error 默认 Css 不包含用户方法
  s.control('small');
});
// @ts-expect-error 自定义类型必须传入对应构造器
runtime.css<AppCss>((s) => s.control('small'));
void name;
runtime.mountGlobal((g) => {
  g.rule(
    'button',
    (s) => {
      s.control('small');
      s.focus((h) => h.control('large'));
      s.focusWithin((h) => h.color.brand);
      s.active((h) => h.color.brand);
      s.disabled((h) => h.color.brand);
      // @ts-expect-error 全局派生类仍保留参数限制
      s.control('other');
    },
    AppCss,
  );
  g.rule('input', (s) => {
    // @ts-expect-error 相邻规则不继承上条规则的自定义类型
    s.control('small');
  });
  // @ts-expect-error 未传构造器不能使用用户类型
  g.rule<AppCss>('a', (s) => s.control('small'));
});
runtime.css((s) => {
  s.name('typed').config({ debug: true });
  // @ts-expect-error 局部配置不能切换共享 runtime 身份
  s.config({ namespace: 'other' });
  // @ts-expect-error 名称必须是字符串
  s.name(1);
});
