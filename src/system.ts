import { Calculator } from "./calculator";
import {
  KeyboardKeys,
  Numbers,
  Operator,
  SpecialKeys,
  ValuesAndOperator,
} from "./interfaces";
import { ResultsScreen, resultsScreen } from "./screen";

class System {
  public calculator: Calculator;
  public resultsScreen: ResultsScreen;
  private numberWritten: string = "";
  private isLastOperation: Boolean = false;

  constructor(calculator: Calculator, resultsScreen: ResultsScreen) {
    this.resultsScreen = resultsScreen;
    this.calculator = calculator;
  }

  public input(key: KeyboardKeys) {
    const numberWritten = Number(this.numberWritten);

    if (key === 0 && numberWritten === 0) return;
    if (key === SpecialKeys.DOT && numberWritten === 0) {
      this.resultsScreen.update(`${Numbers.ZERO}${SpecialKeys.DOT}`);
    }

    if (key === Operator.EQUAL) {
      if (!this.isLastOperation) {
        const currentOperation = this.calculator.currentCalculation;
        this.resultsScreen.updateHistory(
          `${this.resultsScreen.current}${key}${currentOperation}`
        );

        const history = this.resultsScreen.history;
        this.resultsScreen.clearCurrentOperation();
        this.resultsScreen.update(String(currentOperation));

        if (
          history.length > 1 &&
          history[history.length - 1].includes(Operator.EQUAL) &&
          history[history.length - 1] ===
            `${this.resultsScreen.current}${key}${this.resultsScreen.current}`
        ) {
          this.numberWritten = "";
          this.calculator.clear();
          this.resultsScreen.clearCurrentOperation();
          this.isLastOperation = true;
        }
      }

      return;
    }

    if (Object.values(SpecialKeys).includes(key as SpecialKeys)) {
      if (key === SpecialKeys.CLEAR) {
        this.numberWritten = "";
        this.calculator.clear();
        this.resultsScreen.clearCurrentOperation();
        return;
      }

      if (key === SpecialKeys.AMBIGUITY) {
        const numAmbiguity = this.calculator.ambiguity(numberWritten);
        this.numberWritten = String(numAmbiguity);
        this.resultsScreen.current = String(numAmbiguity);
        this.calculator.update(numAmbiguity);
        return;
      }

      if (key === SpecialKeys.DOT) {
        const numberWritten = Number(this.numberWritten);
        const newValue = `${numberWritten}${SpecialKeys.DOT}`;
        this.numberWritten = newValue;
        this.resultsScreen.update(newValue);
        this.calculator.update(Number(newValue) as ValuesAndOperator);
        return;
      }
    }

    this.resultsScreen.update(String(key));

    if (Object.values(Numbers).includes(key)) {
      this.isLastOperation = false;
      const currentOperation = this.calculator.currentCalculation;
      this.numberWritten = `${this.numberWritten}${key}`;
      if (!Number.isInteger(Number(this.numberWritten))) {
        this.resultsScreen.current = this.numberWritten;
      }

      if (currentOperation !== 0) {
        this.calculator.update(Number(this.numberWritten) as ValuesAndOperator);
      }
      return;
    }

    if (Object.values(Operator).includes(key as Operator)) {
      const numberWritten = Number(this.numberWritten);
      this.calculator.update(numberWritten as ValuesAndOperator);
      this.calculator.update(key as ValuesAndOperator);
      this.numberWritten = "";
    }
  }
}

const calculator = new Calculator();
const system = new System(calculator, resultsScreen);
export { system, System };
