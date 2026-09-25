// 由 scripts/generate-css-author.mjs 从 csstype@3.2.3 生成；请勿手改。
// 来源许可见 core/THIRD_PARTY_NOTICES.md。

export class CssProperty<T> {
  protected readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
  raw(value: T | (string & {})): string {
    return `${this.name}:${value};`;
  }
}
export class LengthCssProperty<T> extends CssProperty<T> {
  px(value: number): string {
    return `${this.name}:${value}px;`;
  }
}
