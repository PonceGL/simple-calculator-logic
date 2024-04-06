import { Operator, ScreenType, UpdateSreenValues } from "./interfaces";

class ResultsScreen implements ScreenType {
  public history: string[] = [];
  public current: string;
  constructor() {
    this.current = "";
  }

  public init(a: number): string {
    this.current = String(a);
    return this.current;
  }

  public update({ first, second, operator }: UpdateSreenValues): void {
    if (operator === Operator.EQUAL) {
      const finalLabel = `${this.current}${operator}${second}`;
      this.history = [...this.history, finalLabel];
      this.current = String(second);
    } else {
      const label =
        this.current !== ""
          ? `${this.current}${operator}${second}`
          : `${first}${operator}${second}`;
      this.current = label;
    }
  }

  clearCurrentOperation(): void {
    this.current = "";
  }

  clearHistory(): void {
    this.history = [];
  }
}

export { ResultsScreen };
