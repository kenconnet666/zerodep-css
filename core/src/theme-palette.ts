/** 语义色只维护一份；元组依次为中文说明、亮色、暗色。 */
export const themePalette = {
  background: ['页面背景', '#ffffff', '#111827'],
  surface: ['容器表面', '#f3f4f6', '#1f2937'],
  surfaceHover: ['表面悬停', '#e5e7eb', '#374151'],
  text: ['主要文字', '#111827', '#f9fafb'],
  muted: ['次要文字', '#4b5563', '#d1d5db'],
  border: ['边框', '#d1d5db', '#4b5563'],
  accent: ['强调色', '#1d4ed8', '#93c5fd'],
  accentHover: ['强调色悬停', '#1e40af', '#bfdbfe'],
  onAccent: ['强调色上的文字', '#ffffff', '#172554'],
  focus: ['焦点标记', '#1d4ed8', '#93c5fd'],
  success: ['成功', '#166534', '#86efac'],
  warning: ['警告', '#92400e', '#fcd34d'],
  error: ['错误', '#b91c1c', '#fca5a5'],
  disabled: ['禁用文字', '#6b7280', '#9ca3af'],
  disabledSurface: ['禁用表面', '#e5e7eb', '#374151'],
} as const;

export function themeVariable(name: string): string {
  return `--z-theme-${name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`;
}
