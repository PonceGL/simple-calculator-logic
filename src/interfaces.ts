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
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = 'x',
  DIVIDE = '÷',
  PERCENTAGE = '%',
  EQUAL = '=',
}

export type ValuesAndOperator = Numbers | Operator;

export type TokenOperator =
  | Operator.PERCENTAGE
  | Operator.ADD
  | Operator.SUBTRACT
  | Operator.MULTIPLY
  | Operator.DIVIDE;

export type Token = TokenOperator | number;

export enum SpecialKeys {
  CLEAR = 'AC',
  DELETE = 'del',
  TRASH = 'TRASH',
  AMBIGUITY = '+/-',
  DOT = '.',
}

export type KeyboardKeys = Numbers | Operator | SpecialKeys;

export interface UpdateSreenValues {
  first: string;
  second: string;
  operator: Operator;
}

export interface ScreenType {
  updateHistory(value: string): void;
  update(value: string): void;
  clearCurrentOperation(): void;
  clearHistory(): void;
}

export enum OrderOfOperations {
  'PARENTHESES',
  'EXPONENTS',
  'MULTIPLICATIONS_AND_DIVISIONS',
  'ADDITION_AND_SUBTRACTION',
}

export interface ObserverProps {
  result: string;
  history: string[];
}

export type ObserverFunction = (props: ObserverProps) => void;
