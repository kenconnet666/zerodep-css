import type {
  DescriptorBuilders,
  DescriptorRule,
  StyleProperties,
} from './generated/properties.js';
import type { CssVariable, Input } from './values.js';
import type { KeyframesDefinition } from './style-program.js';
import type { Css, CssConstructor } from './css.js';

export interface DeclarationHelpers {
  readonly custom: { raw(name: `--${string}`, value: Input<string | number> | CssVariable): void };
  /** 新属性的显式出口，同样使用第二层方法写值。 */
  readonly property: { raw(property: string, value: Input<string | number> | CssVariable): void };
}
export type DeclarationBuilder = StyleProperties & DeclarationHelpers;
export type DeclarationFactory = (s: DeclarationBuilder) => void;
export type StyleFactory<T = Css> = (s: T) => void;
export type StyleInput<T extends Css = Css> =
  string | StyleFactory<T> | false | null | undefined | readonly StyleInput<T>[];
export type CssFunction<T extends Css = Css> = (...inputs: StyleInput<T>[]) => string;
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
export interface GlobalBuilder<T extends Css = Css> {
  rule(selector: string, factory: StyleFactory<T>): void;
  rule<U extends Css>(selector: string, factory: StyleFactory<U>, cssType: CssConstructor<U>): void;
  media(query: string, factory: GlobalFactory<T>): void;
  supports(query: string, factory: GlobalFactory<T>): void;
  containerQuery(query: string, factory: GlobalFactory<T>): void;
  layer(name: string, factory: GlobalFactory<T>): void;
  scope(prelude: string, factory: GlobalFactory<T>): void;
  startingStyle(factory: GlobalFactory<T>): void;
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
export interface StylesheetBuilder<T extends Css = Css> extends GlobalBuilder<T> {
  layerOrder(...names: string[]): void;
  statement(name: '@import' | '@namespace', prelude: string): void;
}
export type GlobalFactory<T extends Css = Css> = (g: GlobalBuilder<T>) => void;
export type StylesheetFactory<T extends Css = Css> = (g: StylesheetBuilder<T>) => void;
