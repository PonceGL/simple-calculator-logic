export enum Numbers {
  ZERO = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  NINE = 9,
}

export enum Operator {
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "×",
  DIVIDE = "÷",
  PERCENTAGE = "%",
  AMBIGUITY = "+/-",
  EQUAL = "=",
  //   AMBIGUITY = "±",
}

export interface CalculatorType {
  clear(): void;
  init(a: number): void;
  add(a: number): void;
  subtract(a: number): void;
  multiply(a: number): void;
  divide(a: number): void;
  percentage(): void;
  ambiguity(a: number): number;
  equal(): void;
}

export interface UpdateSreenValues {
  first: number;
  second: number;
  operator: Operator;
}

export interface ScreenType {
  init(a: number): void;
  update({ first, second, operator }: UpdateSreenValues): void;
  clearCurrentOperation(): void;
  clearHistory(): void;
}
