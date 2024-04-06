import { CalculatorType, Operator } from "./interfaces";
import { ResultsScreen } from "./screen";

class Calculator implements CalculatorType {
  public currentCalculation: number = 0;
  public resultsScreen: ResultsScreen;

  constructor(resultsScreen: ResultsScreen) {
    this.resultsScreen = resultsScreen;
  }

  public init(a: number): void {
    this.currentCalculation = a;
    this.resultsScreen.init(a);
  }
  public clear(): void {
    this.currentCalculation = 0;
  }

  public equal(): void {
    this.updateScreenValues(this.currentCalculation, Operator.EQUAL);
  }

  private updateScreenValues(a: number, operator: Operator) {
    this.resultsScreen.update({
      first: this.currentCalculation,
      second: a,
      operator: operator,
    });
  }

  public add(a: number): void {
    this.currentCalculation = this.currentCalculation + a;
    this.updateScreenValues(a, Operator.ADD);
  }
  public subtract(a: number): void {
    this.currentCalculation = this.currentCalculation - a;
    this.updateScreenValues(a, Operator.SUBTRACT);
  }
  public multiply(a: number): void {
    this.currentCalculation = this.currentCalculation * a;
    this.updateScreenValues(a, Operator.MULTIPLY);
  }
  public divide(a: number): void {
    this.currentCalculation = this.currentCalculation / a;
    this.updateScreenValues(a, Operator.DIVIDE);
  }
  public percentage(): void {
    const HUNDRED = 100;
    this.currentCalculation = this.currentCalculation / HUNDRED;
    this.updateScreenValues(HUNDRED, Operator.PERCENTAGE);
  }
  public ambiguity(a: number): number {
    const isPositive = Math.sign(a) === 1;
    const isZero = Math.sign(a) === 0 || Math.sign(a) === -0;
    if (isZero) return 0; // TODO: check if this is correct
    if (isPositive) return -Math.abs(a);
    return Math.abs(a);
  }
}

export { Calculator };
