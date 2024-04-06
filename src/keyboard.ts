import { Calculator } from "./calculator";
import { ResultsScreen } from "./screen";

class CalculatorKeyboard {
  public calculator: Calculator;

  constructor(calculator: Calculator) {
    this.calculator = calculator;
  }

  public pressKey(key: string | number): void {
    const currentValue = this.calculator.currentCalculation;
    if (typeof key === "number") {
      if (key === 0 && currentValue === 0) return;
    }
  }
}

const resultsScreen: ResultsScreen = new ResultsScreen();
const calculator = new Calculator(resultsScreen);
export const keyboard = new CalculatorKeyboard(calculator);
