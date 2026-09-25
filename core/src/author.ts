class ColorCss {
  readonly red = 'color:red;';
  readonly blue = 'color:blue;';
  readonly green = 'color:green;';

  raw(value: string): string {
    return `color:${value};`;
  }
}

class WidthCss {
  raw(value: string | number): string {
    return `width:${value};`;
  }
}

class OpacityCss {
  raw(value: string | number): string {
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
