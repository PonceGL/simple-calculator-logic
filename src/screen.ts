import { ScreenType } from "./interfaces";

class ResultsScreen implements ScreenType {
  private static instance: ResultsScreen;
  public history: string[] = [];
  public current: string;

  constructor() {
    this.current = "0";
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
    const label = this.current === "0" ? `${value}` : `${this.current}${value}`;
    this.current = label;
  }

  clearCurrentOperation(): void {
    this.current = "";
  }

  clearHistory(): void {
    this.history = [];
  }
}

export { ResultsScreen };
export const resultsScreen = ResultsScreen.getInstance();
