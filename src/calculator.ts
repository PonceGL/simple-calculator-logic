import { CalculatorType } from "./interfaces";

class Calculator implements CalculatorType {
  public currentCalculation: number = 0;

  public init(a: number) {
    this.currentCalculation = a;
    return this.currentCalculation;
  }
  public clear() {
    this.currentCalculation = 0;
  }
  public add(a: number): number {
    this.currentCalculation = this.currentCalculation + a;
    return this.currentCalculation;
  }
  public subtract(a: number): number {
    this.currentCalculation = this.currentCalculation - a;
    return this.currentCalculation;
  }
  public multiply(a: number): number {
    this.currentCalculation = this.currentCalculation * a;
    return this.currentCalculation;
  }
  public divide(a: number): number {
    this.currentCalculation = this.currentCalculation / a;
    return this.currentCalculation;
  }
  public percentage(): number {
    this.currentCalculation = this.currentCalculation / 100;
    return this.currentCalculation;
  }
  public ambiguity(a: number): number {
    const isPositive = Math.sign(a) === 1;
    const isZero = Math.sign(a) === 0 || Math.sign(a) === -0;
    if (isZero) return 0; // TODO: check if this is correct
    if (isPositive) return -Math.abs(a);
    return Math.abs(a);
  }
}

export const calculator = new Calculator();
