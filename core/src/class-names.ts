export type ClassNames =
  | string
  | boolean
  | null
  | undefined
  | { [name: string]: boolean | null | undefined }
  | ClassNames[];

/** 与 cx 的条件输入共用；只整理名字，不改声明或去重外部类。 */
export function classNames(values: readonly ClassNames[]): string {
  const names: string[] = [];
  function add(value: ClassNames): void {
    if (!value || typeof value === 'boolean') return;
    if (typeof value === 'string') names.push(value);
    else if (Array.isArray(value)) value.forEach(add);
    else for (const name of Object.keys(value)) if (value[name]) names.push(name);
  }
  values.forEach(add);
  return names.join(' ');
}
