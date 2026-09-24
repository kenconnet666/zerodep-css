// 编译产物的稳定内部入口；不作为业务作者的样式 API。
import { prepareStyle, type CssFunction, type StyleFactory } from '@zerodep-css/core/internal';

import { compiledCssOwner } from './runtime.js';

export { withStyleSource, prepareStyle } from '@zerodep-css/core/internal';
export { createDeclarationBinding, bindUnit, bindValue } from './binding.js';

export interface CompiledBindingResult {
  readonly class: string;
  readonly style?: Readonly<Record<string, string>>;
}

/** 固定规则每宿主只构建一次；无法变量化时走原回调，不吞掉值校验异常。 */
export function createCompiledBinding(
  css: CssFunction,
  factory: StyleFactory,
  key: string,
  name: `--${string}`,
  format: (bindings: Record<string, string>, value: any) => unknown,
  fallback: (value: any) => StyleFactory,
): (read: () => unknown) => CompiledBindingResult {
  const owner = compiledCssOwner(css);
  const prepared = prepareStyle(factory, key);
  let id: string | undefined;
  const result = (className: string, style?: Readonly<Record<string, string>>) => {
    const tokens = className.includes(' ')
      ? (className.match(/[^ \t\n\f\r]+/gu) ?? [])
      : [className];
    return {
      get class() {
        // Vue computed 命中时仍会读取 class；不能让缓存遮蔽外部删除或禁用样式节点。
        for (const token of tokens) owner.runtime.verifyClass(token);
        return className;
      },
      ...(style === undefined ? {} : { style }),
    };
  };
  return (read) => {
    // css() 原先在读取作者值之前先检查 dispose；惰性绑定保持该顺序。
    owner.runtime.assertActive();
    const value = read();
    const bindings: Record<string, string> = Object.create(null);
    format(bindings, value);
    if (!Object.hasOwn(bindings, name)) return result(css(fallback(value)));
    id ??= owner.runtime.css(prepared);
    return result(owner.className(id), bindings);
  };
}
