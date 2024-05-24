import { ScreenType } from './interfaces';

class ResultsScreen implements ScreenType {
  private static instance: ResultsScreen;
  public history: string[] = [];
  public result: string;

  constructor() {
    this.result = '';
  }

  public static getInstance(): ResultsScreen {
    if (!ResultsScreen.instance) {
      ResultsScreen.instance = new ResultsScreen();
    }

    return ResultsScreen.instance;
  }

  public updateHistory(value: string): void {
    this.history = [...this.history, value];
  }

  public update(value: string): void {
    const label = this.result === '0' ? `${value}` : `${this.result}${value}`;
    this.result = this.formatDecimalNumber(label);
  }

  private formatDecimalNumber(label: string) {
    if (this.isDecimal(label)) {
      const numberOfDecimalPlaces = this.numberOfDecimalPlaces(label);
      if (numberOfDecimalPlaces > 6 && numberOfDecimalPlaces < 20) {
        return parseFloat(label).toFixed(10);
      }
    }
    return label;
  }

  private isDecimal(num: string) {
    return parseFloat(num) % 1 != 0;
  }

  private numberOfDecimalPlaces(num: string) {
    return num.slice(num.indexOf('.') + 1, num.length).length;
  }

  public clearCurrentOperation(): void {
    this.result = '';
  }

  public clearHistory(): void {
    this.history = [];
  }
}

export { ResultsScreen };
export const Screen = ResultsScreen.getInstance();
