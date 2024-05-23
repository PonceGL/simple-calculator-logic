import { ScreenType } from "./interfaces";

class ResultsScreen implements ScreenType {
  private static instance: ResultsScreen;
  public history: string[] = [];
  public result: string;

  constructor() {
    this.result = "0";
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
    const label = this.result === "0" ? `${value}` : `${this.result}${value}`;
    this.result = label;
  }

  clearCurrentOperation(): void {
    this.result = "0";
  }

  clearHistory(): void {
    this.history = [];
  }
}

export { ResultsScreen };
export const Screen = ResultsScreen.getInstance();
