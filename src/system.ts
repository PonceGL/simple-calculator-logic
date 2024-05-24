import { Calculator } from './calculator';
import {
  KeyboardKeys,
  Numbers,
  ObserverProps,
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
  private observerFunctions: (({ result, history }: ObserverProps) => void)[];

  constructor(calculator: Calculator, resultsScreen: ResultsScreen) {
    this.resultsScreen = resultsScreen;
    this.calculator = calculator;
    this.observerFunctions = [];
  }

  public setObserver(
    observerFunction: ({ result, history }: ObserverProps) => void
  ) {
    this.observerFunctions.push(observerFunction);
  }

  public input(key: KeyboardKeys) {
    const numberWritten = Number(this.numberWritten);

    if (
      (key === Numbers.ZERO ||
        key === Operator.EQUAL ||
        key === SpecialKeys.DELETE) &&
      numberWritten === Numbers.ZERO
    )
      return;
    if (key === SpecialKeys.DOT && numberWritten === 0) {
      this.resultsScreen.update(`${Numbers.ZERO}`);
      this.resultsScreen.update(SpecialKeys.DOT);
      this.numberWritten = `${Numbers.ZERO}${SpecialKeys.DOT}`;
      this.observerFunctions.forEach(fn =>
        fn({
          result: this.resultsScreen.result,
          history: this.resultsScreen.history,
        })
      );
    }

    if (key === Operator.EQUAL) {
      this.handleEqual(key);
      return;
    }

    if (Object.values(SpecialKeys).includes(key as SpecialKeys)) {
      this.handleSpecialKeys(key);
      return;
    }

    if (!this.isReplaceOperator(key)) {
      this.resultsScreen.update(String(key));
    }

    this.observerFunctions.forEach(fn =>
      fn({
        result: this.resultsScreen.result,
        history: this.resultsScreen.history,
      })
    );

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

    if (currentOperation !== 0) {
      this.calculator.update(Number(this.numberWritten) as ValuesAndOperator);
    }
  }

  private handleOperator(key: KeyboardKeys) {
    if (this.isReplaceOperator(key)) {
      this.observerFunctions.forEach(fn =>
        fn({
          result: this.resultsScreen.result,
          history: this.resultsScreen.history,
        })
      );

      return;
    }
    const numberWritten = Number(this.numberWritten);
    this.calculator.update(numberWritten as ValuesAndOperator);
    this.calculator.update(key as ValuesAndOperator);
    this.numberWritten = '';
  }

  private isReplaceOperator(key: KeyboardKeys) {
    const lastCharacterWritten = this.resultsScreen.result.slice(-1);

    return (
      key !== lastCharacterWritten &&
      Object.values(Operator).includes(key as Operator) &&
      Object.values(Operator).includes(lastCharacterWritten as Operator)
    );
  }

  private handleEqual(key: KeyboardKeys) {
    if (!this.isLastOperation) {
      const currentOperation = this.calculator.currentCalculation;
      this.resultsScreen.updateHistory(
        `${this.resultsScreen.result}${key}${currentOperation}`
      );

      const history = this.resultsScreen.history;
      this.resultsScreen.clearCurrentOperation();
      this.calculator.clear();
      this.calculator.update(currentOperation);
      this.numberWritten = currentOperation.toString();
      this.resultsScreen.update(String(currentOperation));
      this.observerFunctions.forEach(fn =>
        fn({
          result: this.resultsScreen.result,
          history: this.resultsScreen.history,
        })
      );

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

    if (key === SpecialKeys.DELETE) {
      this.handleDelete();
      return;
    }

    if (key === SpecialKeys.CLEAR) {
      this.handleClear();
      return;
    }

    if (key === SpecialKeys.AMBIGUITY) {
      const numAmbiguity = this.calculator.ambiguity(numberWritten);
      this.numberWritten = String(numAmbiguity);
      this.resultsScreen.result = String(numAmbiguity);
      this.calculator.update(numAmbiguity);
      this.observerFunctions.forEach(fn =>
        fn({
          result: this.resultsScreen.result,
          history: this.resultsScreen.history,
        })
      );
      return;
    }

    if (key === SpecialKeys.DOT) {
      // this.numberWritten = newValue;
      // this.resultsScreen.update(newValue);
      this.observerFunctions.forEach(fn =>
        fn({
          result: this.resultsScreen.result,
          history: this.resultsScreen.history,
        })
      );
      // this.calculator.update(Number(newValue) as ValuesAndOperator);
      return;
    }
  }

  private handleClear() {
    this.numberWritten = '';
    this.calculator.clear();
    this.resultsScreen.clearCurrentOperation();
    this.observerFunctions.forEach(fn =>
      fn({
        result: this.resultsScreen.result,
        history: this.resultsScreen.history,
      })
    );
  }

  private handleDelete() {
    const numberWritten = this.numberWritten;
    if (numberWritten.length > 0) {
      const numberWithoutLastDigit = numberWritten.slice(0, -1);
      this.handleClear();
      this.numberWritten = numberWithoutLastDigit;
      this.calculator.update(Number(this.numberWritten) as ValuesAndOperator);
      this.resultsScreen.update(this.numberWritten);
      this.observerFunctions.forEach(fn =>
        fn({
          result: this.resultsScreen.result,
          history: this.resultsScreen.history,
        })
      );
    }
  }
}

const calculator = new Calculator();
const system = new System(calculator, Screen);
export { system, System };
