import type { Property } from 'csstype';

export class ColorCss {
  readonly red = 'color:red;';
  readonly blue = 'color:blue;';
  readonly green = 'color:green;';

  raw(value: Property.Color): string {
    return `color:${value};`;
  }
}

export class WidthCss {
  raw(value: Property.Width<number>): string {
    return `width:${value};`;
  }
}

export class OpacityCss {
  raw(value: Property.Opacity): string {
    return `opacity:${value};`;
  }
}

/** 首批作者关键字；用户可通过继承增添自己的成员。 */
export class Css {
  readonly color = new ColorCss();
  readonly width = new WidthCss();
  readonly opacity = new OpacityCss();
}

export function useCss(): Css;
export function useCss<T extends Css>(type: new () => T): T;
export function useCss<T extends Css>(type: new () => T = Css as new () => T): T {
  return new Proxy(new type(), {});
}
