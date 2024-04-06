export interface CalculatorType {
  clear(): void;
  init(a: number): number;
  add(a: number): number;
  subtract(a: number): number;
  multiply(a: number): number;
  divide(a: number): number;
  percentage(): number;
  ambiguity(a: number): number;
}
