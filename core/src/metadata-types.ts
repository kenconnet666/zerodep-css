export interface NumericCheck {
  readonly min?: number;
  readonly max?: number;
  readonly integer?: boolean;
}
export type NumericAlternatives = readonly (readonly NumericCheck[])[];
export interface HelperPlan {
  readonly family: string;
  readonly separator: ' ' | ',';
  readonly suffix: string;
  readonly arities: Readonly<Record<number, NumericAlternatives>>;
}
export type KeywordGroup = Readonly<Record<string, string>>;
export interface PropertyMetadata {
  readonly cssName: string;
  readonly keywords: number;
  readonly helpers: number;
  readonly numbers: NumericAlternatives;
  readonly zero: boolean;
  readonly resource?: 'keyframes';
}
