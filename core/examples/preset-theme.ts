import { ThemeCss, ThemeColorCss } from '@zerodep-css/core/theme';

class ProjectColor extends ThemeColorCss {
  readonly _brand = this.raw('#c026d3');
}

/** 第二层继承保留系统和预设关键字，再添加项目自己的成员。 */
export class ProjectCss extends ThemeCss {
  override readonly color = new ProjectColor();
}
