import {
  CalculatorType,
  Operator,
  Token,
  TokenOperator,
  ValuesAndOperator,
} from "./interfaces";

class Calculator implements CalculatorType {
  public currentCalculation: number = 0;
  public currentCalculations: ValuesAndOperator[] = [];

  public init(a: number): void {
    this.currentCalculation = a;
  }

  public update(a: ValuesAndOperator): void {
    if (
      typeof this.currentCalculations[this.currentCalculations.length - 1] ===
        "number" &&
      typeof a === "number"
    ) {
      this.currentCalculations.pop();
    }
    this.currentCalculations = [...this.currentCalculations, a];
    if (this.includesOperator(this.currentCalculations)) {
      this.calculate();
    }
  }
  public clear(): void {
    this.currentCalculation = 0;
  }

  private calculate() {
    const lastValueIsOperator =
      typeof this.currentCalculations[this.currentCalculations.length - 1] ===
      "string";
    if (this.currentCalculations.length >= 3 && !lastValueIsOperator) {
      const postfix = this.infixToPostfix(this.currentCalculations);
      const result = this.evaluatePostfix(postfix);
      this.currentCalculation = result;
      return;
    }
    this.currentCalculation = this.currentCalculations[0] as number;
  }

  private includesOperator(array: ValuesAndOperator[]): boolean {
    return array.some((item) =>
      Object.values(Operator).includes(item as Operator)
    );
  }

  private infixToPostfix(tokens: ValuesAndOperator[]): Token[] {
    const output: Token[] = [];
    const operators: TokenOperator[] = [];
    const precedence: { [key in TokenOperator]: number } = {
      "+": 1,
      "-": 1,
      x: 2,
      "÷": 2,
    };

    for (const token of tokens) {
      if (typeof token === "number") {
        output.push(token);
      } else {
        while (
          operators.length > 0 &&
          precedence[operators[operators.length - 1]] >= precedence[token]
        ) {
          output.push(operators.pop() as TokenOperator);
        }
        operators.push(token as TokenOperator);
      }
    }

    while (operators.length > 0) {
      output.push(operators.pop() as TokenOperator);
    }

    return output;
  }

  private evaluatePostfix(tokens: Token[]): number {
    const stack: number[] = [];

    for (const token of tokens) {
      if (typeof token === "number") {
        stack.push(token);
      } else {
        const right = stack.pop() as number;
        const left = stack.pop() as number;
        switch (token) {
          case "+":
            stack.push(this.add(left, right));
            break;
          case "-":
            stack.push(this.subtract(left, right));
            break;
          case "x":
            stack.push(this.multiply(left, right));
            break;
          case "÷":
            stack.push(this.divide(left, right));
            break;
        }
      }
    }

    return stack.pop() as number;
  }

  public add(a: number, b: number): number {
    return a + b;
  }
  public subtract(a: number, b: number): number {
    return a - b;
  }
  public multiply(a: number, b: number): number {
    return a * b;
  }
  public divide(a: number, b: number): number {
    return a / b;
  }
  public percentage(): void {
    const HUNDRED = 100;
    this.currentCalculation = this.currentCalculation / HUNDRED;
    // this.updateScreenValues(HUNDRED, Operator.PERCENTAGE);
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
