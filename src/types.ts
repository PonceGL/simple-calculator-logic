export enum Numbers {
  ZERO = '0',
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
}

export enum Operator {
  ADD = '+',
  SUBTRACT = '-',
  MULTIPLY = '*',
  DIVIDE = '/',
  EQUAL = '=',
  PERCENTAGE = '%',
}

export enum SpecialKeys {
  DOT = '.',
  CLEAR = 'C',
  DELETE = 'Del',
  CLEAR_HISTORY = 'CH',
  AMBIGUITY = '+/-',
}

export type KeyboardKeys = Numbers | Operator | SpecialKeys;
