import { Calculator } from './calculator';
import {
  KeyboardKeys,
  Numbers,
  Operator,
  SpecialKeys,
  ValuesAndOperator,
} from './interfaces';
import { ResultsScreen, Screen } from './screen';

class System {
  public calculator: Calculator;
  public resultsScreen: ResultsScreen;
  private numberWritten: string = '';
  private isLastOperation: boolean = false;

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
      this.handleEqual(key);
      return;
    }

    if (Object.values(SpecialKeys).includes(key as SpecialKeys)) {
      this.handleSpecialKeys(key);
      return;
    }

    this.resultsScreen.update(String(key));

    if (Object.values(Numbers).includes(key)) {
      this.handleNumber(key);
      return;
    }

    if (Object.values(Operator).includes(key as Operator)) {
      this.handleOperator(key);
    }
  }

  private handleNumber(key: KeyboardKeys) {
    this.isLastOperation = false;
    const currentOperation = this.calculator.currentCalculation;
    this.numberWritten = `${this.numberWritten}${key}`;
    if (!Number.isInteger(Number(this.numberWritten))) {
      this.resultsScreen.result = this.numberWritten;
    }

    if (currentOperation !== 0) {
      this.calculator.update(Number(this.numberWritten) as ValuesAndOperator);
    }
  }

  private handleOperator(key: KeyboardKeys) {
    const numberWritten = Number(this.numberWritten);
    this.calculator.update(numberWritten as ValuesAndOperator);
    this.calculator.update(key as ValuesAndOperator);
    this.numberWritten = '';
  }

  private handleEqual(key: KeyboardKeys) {
    if (!this.isLastOperation) {
      const currentOperation = this.calculator.currentCalculation;
      this.resultsScreen.updateHistory(
        `${this.resultsScreen.result}${key}${currentOperation}`
      );

      const history = this.resultsScreen.history;
      this.resultsScreen.clearCurrentOperation();
      this.resultsScreen.update(String(currentOperation));

      const historyList = history.length;
      if (
        historyList > 1 &&
        history[historyList - 1].includes(Operator.EQUAL) &&
        history[historyList - 1] ===
          `${this.resultsScreen.result}${key}${this.resultsScreen.result}`
      ) {
        this.numberWritten = '';
        this.calculator.clear();
        this.resultsScreen.clearCurrentOperation();
        this.isLastOperation = true;
      }
    }
  }

  private handleSpecialKeys(key: KeyboardKeys) {
    const numberWritten = Number(this.numberWritten);

    if (key === SpecialKeys.CLEAR) {
      this.handleClear();
      return;
    }

    if (key === SpecialKeys.AMBIGUITY) {
      const numAmbiguity = this.calculator.ambiguity(numberWritten);
      this.numberWritten = String(numAmbiguity);
      this.resultsScreen.result = String(numAmbiguity);
      this.calculator.update(numAmbiguity);
      return;
    }

    if (key === SpecialKeys.DOT) {
      const newValue = `${this.numberWritten}${SpecialKeys.DOT}`;
      this.numberWritten = newValue;
      this.resultsScreen.update(newValue);
      this.calculator.update(Number(newValue) as ValuesAndOperator);
      return;
    }
  }

  private handleClear() {
    this.numberWritten = '';
    this.calculator.clear();
    this.resultsScreen.clearCurrentOperation();
  }
}

const calculator = new Calculator();
const system = new System(calculator, Screen);
export { system, System };
