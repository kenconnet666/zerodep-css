// 方法与运行时绑定共用这份单位表；只生成原生单位，不进行数值范围判断。
export const units = Object.fromEntries(
  [
    ...'px cm mm q in pt pc em rem ex rex ch rch cap rcap ic ric lh rlh'.split(' '),
    ...['', 's', 'l', 'd'].flatMap((prefix) =>
      ['vw', 'vh', 'vi', 'vb', 'vmin', 'vmax'].map((unit) => prefix + unit),
    ),
    ...'cqw cqh cqi cqb cqmin cqmax'.split(' '),
  ].map((unit) => [unit, unit]),
);

export const extraUnits = {
  percent: '%',
  ms: 'ms',
  s: 's',
  deg: 'deg',
  grad: 'grad',
  rad: 'rad',
  turn: 'turn',
};

export function unitMethod(name, suffix, min = 1, max = 1, override = false) {
  const doc = `/** 使用 ${suffix} 单位生成声明；数值合法性由浏览器处理。 */`;
  if (max === 1)
    return [
      doc,
      `${name}(value: number): string { return \`\${this.name}:\${value}${suffix};\`; }`,
    ];
  const declarations = [];
  for (let count = min; count <= max; count++)
    declarations.push(
      `${name}(${Array.from({ length: count }, (_, i) => `value${i + 1}: number`).join(', ')}): string;`,
    );
  return [
    doc,
    ...declarations,
    `${override ? 'override ' : ''}${name}(...values: number[]): string { return \`\${this.name}:\${values.map(value => \`\${value}${suffix}\`).join(' ')};\`; }`,
  ];
}

export function valueMethods(type, color, math) {
  const lines = [];
  if (color)
    lines.push(
      '/** RGB 通道与可选 alpha；不隐式截断数值。 */',
      "rgb(red: number, green: number, blue: number, alpha?: number): string { return this.raw(`rgb(${red} ${green} ${blue}${alpha === undefined ? '' : ` / ${alpha}`})`); }",
      '/** 色相用度数，饱和度和明度用百分数。 */',
      "hsl(hue: number, saturation: number, lightness: number, alpha?: number): string { return this.raw(`hsl(${hue} ${saturation}% ${lightness}%${alpha === undefined ? '' : ` / ${alpha}`})`); }",
    );
  if (math) {
    const value = `Extract<Property.${type}, number> | (string & {})`;
    lines.push(
      '/** 数学表达式原样交给浏览器。 */',
      'calc(expression: string): string { return this.raw(`calc(${expression})`); }',
    );
    for (const name of ['min', 'max'])
      lines.push(
        `${name}(value: ${value}, ...others: (${value})[]): string { return this.raw(\`${name}(\${[value, ...others].join(', ')})\`); }`,
      );
    lines.push(
      `clamp(minimum: ${value}, preferred: ${value}, maximum: ${value}): string { return this.raw(\`clamp(\${minimum}, \${preferred}, \${maximum})\`); }`,
    );
  }
  return lines;
}
