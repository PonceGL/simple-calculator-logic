import { Numbers, Operator, SpecialKeys } from '../src';
import { calculator } from '../src/calculator';

describe('Calculator', () => {
  it('you should write the entire operation', () => {
    calculator.pressKey(Numbers.FIVE);
    calculator.pressKey(Operator.ADD);
    calculator.pressKey(Numbers.SEVEN);
    expect(calculator.result).toEqual('5+7');
  });

  it('should add two numbers correctly', () => {
    calculator.pressKey(SpecialKeys.CLEAR);
    calculator.pressKey(Numbers.FIVE);
    calculator.pressKey(Operator.ADD);
    calculator.pressKey(Numbers.SEVEN);
    calculator.pressKey(Operator.EQUAL);
    expect(calculator.result).toEqual('12');
  });

  it('history should be empty', () => {
    calculator.pressKey(SpecialKeys.CLEAR);
    calculator.pressKey(SpecialKeys.CLEAR_HISTORY);
    expect(calculator.history).toEqual([]);
  });

  it('5+10% should be 5.5', () => {
    calculator.pressKey(SpecialKeys.CLEAR);
    calculator.pressKey(Numbers.FIVE);
    calculator.pressKey(Operator.ADD);
    calculator.pressKey(Numbers.ONE);
    calculator.pressKey(Numbers.ZERO);
    calculator.pressKey(Operator.PERCENTAGE);
    calculator.pressKey(Operator.EQUAL);
    expect(calculator.result).toEqual('5.5');
  });

  it('5-10% should be 4.5', () => {
    calculator.pressKey(SpecialKeys.CLEAR);
    calculator.pressKey(Numbers.FIVE);
    calculator.pressKey(Operator.SUBTRACT);
    calculator.pressKey(Numbers.ONE);
    calculator.pressKey(Numbers.ZERO);
    calculator.pressKey(Operator.PERCENTAGE);
    calculator.pressKey(Operator.EQUAL);
    expect(calculator.result).toEqual('4.5');
    expect(calculator.history).toEqual(['5+10%=5.5', '5-10%=4.5']);
  });

  it('if the operation starts with an operator and there is a previous result, it should take that number for the new operation', () => {
    calculator.pressKey(SpecialKeys.CLEAR);
    calculator.pressKey(Numbers.FIVE);
    calculator.pressKey(Operator.ADD);
    calculator.pressKey(Numbers.FIVE);
    calculator.pressKey(Operator.EQUAL);
    calculator.pressKey(Operator.MULTIPLY);
    calculator.pressKey(Numbers.TWO);
    calculator.pressKey(Operator.EQUAL);
    expect(calculator.result).toEqual('20');
  });

  it('should handle decimals correctly', () => {
    calculator.pressKey(SpecialKeys.CLEAR);
    calculator.pressKey(Numbers.ZERO);
    calculator.pressKey(Numbers.ONE);
    calculator.pressKey(SpecialKeys.DOT);
    calculator.pressKey(Operator.ADD);
    calculator.pressKey(Numbers.FIVE);
    calculator.pressKey(Operator.ADD);
    calculator.pressKey(Numbers.THREE);
    calculator.pressKey(Operator.EQUAL);
    expect(calculator.result).toEqual('4.5');
  });

  it('A new operation should start with number', () => {
    calculator.pressKey(SpecialKeys.CLEAR);
    calculator.pressKey(Numbers.ZERO);
    calculator.pressKey(Operator.MULTIPLY);
    calculator.pressKey(Operator.ADD);
    calculator.pressKey(Operator.EQUAL);
    expect(calculator.result).toEqual('');
  });

  it('should delete correctly', () => {
    calculator.pressKey(SpecialKeys.CLEAR);
    calculator.pressKey(Numbers.FOUR);
    calculator.pressKey(Operator.MULTIPLY);
    calculator.pressKey(Numbers.THREE);
    calculator.pressKey(SpecialKeys.DELETE);
    calculator.pressKey(SpecialKeys.DELETE);
    calculator.pressKey(Operator.EQUAL);
    expect(calculator.result).toEqual('4');
  });

  it('a number should not have two decimal points', () => {
    calculator.pressKey(SpecialKeys.CLEAR);
    calculator.pressKey(Operator.ADD);
    calculator.pressKey(SpecialKeys.DOT);
    calculator.pressKey(Numbers.THREE);
    calculator.pressKey(SpecialKeys.DOT);
    calculator.pressKey(Numbers.FOUR);
    expect(calculator.result).toEqual('0.34');
  });

  it('It should convert positive number to negative and vice versa.', () => {
    calculator.pressKey(SpecialKeys.CLEAR);
    calculator.pressKey(Numbers.ONE);
    calculator.pressKey(Numbers.ZERO);
    calculator.pressKey(SpecialKeys.AMBIGUITY);
    expect(calculator.result).toEqual('-10');
    calculator.pressKey(Operator.MULTIPLY);
    calculator.pressKey(Numbers.TWO);
    calculator.pressKey(Operator.EQUAL);
    expect(calculator.result).toEqual('-20');
    calculator.pressKey(Operator.MULTIPLY);
    calculator.pressKey(Numbers.THREE);
    calculator.pressKey(Operator.EQUAL);
    calculator.pressKey(SpecialKeys.AMBIGUITY);
    expect(calculator.result).toEqual('60');
  });

  it('After finishing an operation if a number is written, you should start a new operation completely different from the previous one', () => {
    calculator.pressKey(SpecialKeys.CLEAR);
    calculator.pressKey(Numbers.FIVE);
    calculator.pressKey(Operator.ADD);
    calculator.pressKey(Numbers.FIVE);
    calculator.pressKey(Operator.EQUAL);
    calculator.pressKey(Numbers.TWO);
    calculator.pressKey(Operator.MULTIPLY);
    calculator.pressKey(Numbers.THREE);
    expect(calculator.result).toEqual('2*3');
  });

  it('If the last character is an operator and a new operator is pressed, it should replace the last one', () => {
    calculator.pressKey(SpecialKeys.CLEAR);
    calculator.pressKey(Numbers.ONE);
    calculator.pressKey(Operator.ADD);
    expect(calculator.result).toEqual('1+');
    calculator.pressKey(Operator.MULTIPLY);
    calculator.pressKey(Numbers.FIVE);
    expect(calculator.result).toEqual('1*5');
  });

  it('It should calculate the percentage if the user types in the complete operation', () => {
    calculator.pressKey(SpecialKeys.CLEAR);
    calculator.pressKey(Numbers.ONE);
    calculator.pressKey(Numbers.FIVE);
    calculator.pressKey(Numbers.ZERO);
    calculator.pressKey(Operator.MULTIPLY);
    calculator.pressKey(Numbers.THREE);
    calculator.pressKey(Numbers.FOUR);
    calculator.pressKey(Operator.PERCENTAGE);
    calculator.pressKey(Operator.EQUAL);
    expect(calculator.result).toEqual('51');
  });

  // it('', () => {});
});
