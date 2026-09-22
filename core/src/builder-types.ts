import type {
  DescriptorBuilders,
  DescriptorRule,
  FunctionalPseudo,
  SimplePseudo,
  StyleProperties,
} from './generated/properties.js';
import type { CssVariable, Input } from './values.js';
import type { KeyframesDefinition } from './style-program.js';
import type { Css } from './css.js';

export interface DeclarationHelpers {
  readonly custom: { raw(name: `--${string}`, value: Input<string | number> | CssVariable): void };
  /** 新属性的显式出口，同样使用第二层方法写值。 */
  readonly property: { raw(property: string, value: Input<string | number> | CssVariable): void };
}
export type DeclarationBuilder = StyleProperties & DeclarationHelpers;
export type DeclarationFactory = (s: DeclarationBuilder) => void;
export interface StyleHelpers extends DeclarationHelpers {
  /** 任意相对选择器，要求包含 &；由序列化阶段完整解析。 */
  selector(selector: string, factory: StyleFactory): void;
  pseudo(name: SimplePseudo, factory: StyleFactory): void;
  pseudoFunction(name: FunctionalPseudo, arguments_: string, factory: StyleFactory): void;
  hover(factory: StyleFactory): void;
  focusVisible(factory: StyleFactory): void;
  before(factory: StyleFactory): void;
  after(factory: StyleFactory): void;
  media(query: string, factory: StyleFactory): void;
  supports(query: string, factory: StyleFactory): void;
  /** 与 CSS 的 container 属性区分，避免覆盖其属性调用与补全。 */
  containerQuery(query: string, factory: StyleFactory): void;
  layer(name: string, factory: StyleFactory): void;
  scope(prelude: string, factory: StyleFactory): void;
  startingStyle(factory: StyleFactory): void;
  important(factory: StyleFactory): void;
}
export type StyleBuilder = StyleProperties & StyleHelpers;
export type StyleFactory<T = Css> = (s: T) => void;
export type FrameOffset =
  | number
  | 'from'
  | 'to'
  | `${number}%`
  | `${'cover' | 'contain' | 'entry' | 'exit' | 'entry-crossing' | 'exit-crossing'} ${number}%`;
export interface FrameBuilder {
  from(factory: DeclarationFactory): void;
  to(factory: DeclarationFactory): void;
  at(offset: FrameOffset | readonly FrameOffset[], factory: DeclarationFactory): void;
}
export type PageMarginBox =
  | 'top-left-corner'
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'top-right-corner'
  | 'bottom-left-corner'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'bottom-right-corner'
  | 'left-top'
  | 'left-middle'
  | 'left-bottom'
  | 'right-top'
  | 'right-middle'
  | 'right-bottom';
export type PageBuilder = Omit<DeclarationBuilder, keyof DescriptorBuilders['@page']> &
  DescriptorBuilders['@page'] & {
    marginBox(name: PageMarginBox, factory: DeclarationFactory): void;
  };
export interface GlobalBuilder {
  rule(selector: string, factory: StyleFactory): void;
  media(query: string, factory: GlobalFactory): void;
  supports(query: string, factory: GlobalFactory): void;
  containerQuery(query: string, factory: GlobalFactory): void;
  layer(name: string, factory: GlobalFactory): void;
  scope(prelude: string, factory: GlobalFactory): void;
  startingStyle(factory: GlobalFactory): void;
  descriptors<R extends DescriptorRule>(
    name: R,
    prelude: string,
    factory: (d: DescriptorBuilders[R]) => void,
  ): void;
  fontFace(factory: (d: DescriptorBuilders['@font-face']) => void): void;
  property(name: `--${string}`, factory: (d: DescriptorBuilders['@property']) => void): void;
  counterStyle(name: string, factory: (d: DescriptorBuilders['@counter-style']) => void): void;
  page(selector: string, factory: (p: PageBuilder) => void): void;
  animation(definition: KeyframesDefinition): void;
  /** 明确的未类型化规则，不隐式重写或改变作用域。 */
  rawRule(css: string): void;
}
export interface StylesheetBuilder extends GlobalBuilder {
  layerOrder(...names: string[]): void;
  statement(name: '@import' | '@namespace', prelude: string): void;
}
export type GlobalFactory = (g: GlobalBuilder) => void;
export type StylesheetFactory = (g: StylesheetBuilder) => void;
