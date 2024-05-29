import { Numbers, Operator, SpecialKeys } from './types';

class Calculator {
  private _result: string = '';
  private _history: string[] = [];
  private currentOperation: string = '';
  private lastResult: number | null = null;
  private awaitingNextOperation: boolean = false;
  private lastKey: Numbers | Operator | SpecialKeys | null = null;

  get result(): string {
    return this._result;
  }

  get history(): string[] {
    return this._history;
  }

  public pressKey(key: Numbers | Operator | SpecialKeys): void {
    if (
      (this.currentOperation === '' && key === Numbers.ZERO) ||
      (this.currentOperation === '' &&
        !Object.values(Numbers).includes(key as Numbers) &&
        key !== SpecialKeys.DOT &&
        key !== SpecialKeys.CLEAR_HISTORY)
    ) {
      return;
    }

    if (this.currentOperation === '' && key === SpecialKeys.DOT) {
      this.currentOperation = `${Numbers.ZERO}${SpecialKeys.DOT}`;
      this._result = this.currentOperation;
      this.lastKey = key;
      return;
    }

    if (
      this.lastKey === SpecialKeys.DOT &&
      !Object.values(Numbers).includes(key as Numbers)
    ) {
      return;
    }

    if (key === SpecialKeys.DOT) {
      const lastSegment = this.currentOperation.split(/[\+\-\*\/]/).pop();
      if (lastSegment && lastSegment.includes(SpecialKeys.DOT)) {
        return;
      }
    }

    if (key === Operator.EQUAL) {
      this.handleEqualOperator();
    } else if (key === SpecialKeys.CLEAR) {
      this.handleClearOperator();
    } else if (key === SpecialKeys.CLEAR_HISTORY) {
      this._history = [];
    } else if (key === SpecialKeys.DELETE) {
      if (this.currentOperation.length > 0) {
        this.currentOperation = this.currentOperation.slice(0, -1);
        this._result = this.currentOperation;
      }
    } else if (key === SpecialKeys.AMBIGUITY) {
      this.handleAmbiguityOperator();
    } else if (key === Operator.PERCENTAGE) {
      this.currentOperation = `${this.currentOperation}${key}`;
    } else {
      if (this.lastResult !== null && this.awaitingNextOperation) {
        if (this.isOperator(key)) {
          this.handleOperators(key as Operator);
          return;
        } else if (
          Object.values(Numbers).includes(key as Numbers) ||
          key === SpecialKeys.DOT
        ) {
          this.currentOperation = '';
          this.lastResult = null;
          this.awaitingNextOperation = false;
        }
      }

      if (this.isOperator(key)) {
        this.handleOperators(key as Operator);
        return;
      }
      this.currentOperation += key;
      this._result = this.currentOperation;
    }

    this.lastKey = key;
  }

  private isOperator(key: Numbers | Operator | SpecialKeys): key is Operator {
    return Object.values(Operator).includes(key as Operator);
  }

  private handleOperators(key: Operator) {
    const lastChar = this.currentOperation.slice(-1);
    if (Object.values(Operator).includes(lastChar as Operator)) {
      this.currentOperation = `${this.currentOperation.slice(0, -1)}${key}`;
    } else {
      this.currentOperation += key;
    }

    this._result = this.currentOperation;
    this.awaitingNextOperation = false;
    this.lastKey = key;
  }
  private handleEqualOperator() {
    const lastOperator = this.getLastOperator();
    let evaluation: number;

    if (lastOperator === Operator.PERCENTAGE) {
      evaluation = this.handlePercentageOperator();
      if (this.currentOperation !== evaluation.toString()) {
        this._history.push(
          `${this.currentOperation}${Operator.PERCENTAGE}=${evaluation}`
        );
      }
    } else {
      evaluation = this.evaluateOperation(this.currentOperation);
      if (this.currentOperation !== evaluation.toString()) {
        this._history.push(`${this.currentOperation}=${evaluation}`);
      }
    }
    this.lastResult = evaluation;
    this._result = `${evaluation}`;
    this.currentOperation = `${evaluation}`;
    this.awaitingNextOperation = true;
  }

  private handleClearOperator() {
    this._result = '';
    this.currentOperation = '';
    this.lastResult = null;
    this.awaitingNextOperation = false;
  }

  private handlePercentageOperator() {
    const lastOperatorBefore = this.getLastOperator();
    if (lastOperatorBefore === Operator.PERCENTAGE) {
      this.currentOperation = this.currentOperation.slice(0, -1);
    }
    const lastOperator = this.getLastOperator();
    const evaluation = eval(this.currentOperation);
    const operationDivided = this.currentOperation.split(
      new RegExp(`[${Object.values(Operator).join('\\')}]`)
    );

    const firstNumber = operationDivided[0];
    const lastNumber = operationDivided[1];

    if (lastOperator === Operator.ADD || lastOperator === Operator.SUBTRACT) {
      const p = (parseFloat(lastNumber) / 100) * parseFloat(firstNumber);
      return this.evaluateOperation(`${firstNumber}${lastOperator}${p}`);
    }
    return evaluation / 100;
  }

  private handleAmbiguityOperator() {
    const result = parseFloat(this.result);
    if (!isNaN(result)) {
      const newNumber = result !== 0 ? -result : result;
      this._result = newNumber.toString();
      this.currentOperation = this._result;
      this.lastResult = newNumber;
    }
  }

  private getLastOperator() {
    const lastOperatorIndex = this.currentOperation
      .split('')
      .reverse()
      .findIndex(char => Object.values(Operator).includes(char as Operator));
    const lastOperator =
      lastOperatorIndex !== -1
        ? this.currentOperation[
            this.currentOperation.length - 1 - lastOperatorIndex
          ]
        : null;

    return lastOperator;
  }

  private evaluateOperation(operation: string) {
    try {
      return eval(operation) as number;
    } catch (error) {
      this._result = 'Error de formato';
      this.currentOperation = '';
      this.lastResult = null;
      throw new Error(JSON.stringify(error));
    }
  }
}

export const calculator = new Calculator();
