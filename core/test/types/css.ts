import { Css, createRuntime } from '../../src/index.js';

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
runtime.css((s) => {
  s.name('typed').config({ debug: true });
  // @ts-expect-error 局部配置不能切换共享 runtime 身份
  s.config({ namespace: 'other' });
  // @ts-expect-error 名称必须是字符串
  s.name(1);
});
