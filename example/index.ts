/* eslint-disable no-console */
import {
  Calculator,
  formatNumber,
  Numbers,
  Operator,
  SpecialKeys,
} from '../src';

(function () {
  console.log('====================================');
  Calculator.pressKey(SpecialKeys.CLEAR);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(Numbers.ONE);
  Calculator.pressKey(Numbers.ZERO);
  Calculator.pressKey(Operator.PERCENTAGE);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(Calculator.result);
  console.log('====================================');

  console.log('====================================');
  Calculator.pressKey(SpecialKeys.CLEAR);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Operator.SUBTRACT);
  Calculator.pressKey(Numbers.ONE);
  Calculator.pressKey(Numbers.ZERO);
  Calculator.pressKey(Operator.PERCENTAGE);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(Calculator.result);
  console.log('====================================');

  console.log('====================================');
  Calculator.pressKey(SpecialKeys.CLEAR);
  Calculator.pressKey(Numbers.ONE);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Numbers.ZERO);
  Calculator.pressKey(Operator.MULTIPLY);
  Calculator.pressKey(Numbers.THREE);
  Calculator.pressKey(Numbers.FOUR);
  Calculator.pressKey(Operator.PERCENTAGE);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(Calculator.result);
  console.log('====================================');

  console.log('====================================');
  Calculator.pressKey(SpecialKeys.CLEAR);
  Calculator.pressKey(Numbers.THREE);
  Calculator.pressKey(Numbers.FOUR);
  Calculator.pressKey(Operator.MULTIPLY);
  Calculator.pressKey(Numbers.ONE);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Numbers.ZERO);
  Calculator.pressKey(Operator.PERCENTAGE);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(Calculator.result);
  console.log('====================================');

  console.log('====================================');
  Calculator.pressKey(SpecialKeys.CLEAR);
  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(SpecialKeys.DOT);
  Calculator.pressKey(Numbers.THREE);
  Calculator.pressKey(SpecialKeys.DOT);
  Calculator.pressKey(Numbers.FOUR);
  Calculator.pressKey(SpecialKeys.CLEAR);
  console.log(Calculator.history);
  console.log(Calculator.result);
  console.log('====================================');

  console.log('====================================');
  Calculator.pressKey(Numbers.ONE);
  Calculator.pressKey(SpecialKeys.DOT);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(Numbers.THREE);
  Calculator.pressKey(SpecialKeys.DELETE);
  Calculator.pressKey(SpecialKeys.DELETE);
  Calculator.pressKey(Operator.MULTIPLY);
  Calculator.pressKey(Numbers.FOUR);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.result);
  console.log(Calculator.history);
  console.log('====================================');

  console.log('====================================');
  console.log('====================================');
  console.log('====================================');
  console.log('====================================');
  console.log('====================================');
  console.log('====================================');
  console.log('====================================');
  console.log('====================================');

  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Operator.EQUAL);

  console.log(Calculator.result);
  console.log(Calculator.history);

  Calculator.pressKey(Operator.MULTIPLY);
  Calculator.pressKey(Numbers.TWO);
  Calculator.pressKey(Operator.EQUAL);

  console.log(Calculator.result);
  console.log(Calculator.history);

  Calculator.pressKey(SpecialKeys.CLEAR);
  Calculator.pressKey(Numbers.THREE);
  Calculator.pressKey(Numbers.FOUR);
  Calculator.pressKey(Operator.MULTIPLY);
  Calculator.pressKey(Numbers.ONE);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Numbers.ZERO);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(formatNumber(parseFloat(Calculator.result)));

  Calculator.pressKey(SpecialKeys.CLEAR);
  Calculator.pressKey(Numbers.ZERO);
  Calculator.pressKey(Numbers.ONE);
  Calculator.pressKey(SpecialKeys.DOT);
  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(Numbers.THREE);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(Calculator.result);

  Calculator.pressKey(SpecialKeys.CLEAR);

  Calculator.pressKey(Numbers.ONE);
  Calculator.pressKey(Numbers.ZERO);
  Calculator.pressKey(SpecialKeys.AMBIGUITY);
  Calculator.pressKey(Operator.MULTIPLY);
  Calculator.pressKey(Numbers.TWO);
  Calculator.pressKey(Operator.EQUAL);
  Calculator.pressKey(Operator.MULTIPLY);
  Calculator.pressKey(Numbers.THREE);
  Calculator.pressKey(Operator.EQUAL);
  Calculator.pressKey(SpecialKeys.AMBIGUITY);
  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Operator.EQUAL);
  Calculator.pressKey(Operator.MULTIPLY);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Numbers.EIGHT);
  Calculator.pressKey(Numbers.THREE);
  Calculator.pressKey(Operator.EQUAL);
  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(Numbers.ZERO);
  Calculator.pressKey(SpecialKeys.DOT);
  Calculator.pressKey(Numbers.THREE);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(formatNumber(parseFloat(Calculator.result)));

  Calculator.pressKey(Numbers.FOUR);
  Calculator.pressKey(Numbers.NINE);
  Calculator.pressKey(SpecialKeys.DELETE);
  Calculator.pressKey(SpecialKeys.DELETE);
  Calculator.pressKey(SpecialKeys.DELETE);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Numbers.EIGHT);
  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Numbers.TWO);
  Calculator.pressKey(Operator.MULTIPLY);
  Calculator.pressKey(Numbers.TWO);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(formatNumber(parseFloat(Calculator.result)));

  Calculator.pressKey(SpecialKeys.CLEAR);
  Calculator.pressKey(Numbers.FOUR);
  Calculator.pressKey(Operator.MULTIPLY);
  Calculator.pressKey(Numbers.THREE);
  Calculator.pressKey(SpecialKeys.DELETE);
  Calculator.pressKey(SpecialKeys.DELETE);
  Calculator.pressKey(Operator.EQUAL);
  Calculator.pressKey(Operator.EQUAL);
  Calculator.pressKey(Operator.EQUAL);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(formatNumber(parseFloat(Calculator.result)));

  Calculator.pressKey(SpecialKeys.CLEAR);
  Calculator.pressKey(Numbers.ONE);
  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(Operator.MULTIPLY);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(formatNumber(parseFloat(Calculator.result)));

  Calculator.pressKey(SpecialKeys.CLEAR);
  Calculator.pressKey(Numbers.ONE);
  Calculator.pressKey(Numbers.ZERO);
  Calculator.pressKey(SpecialKeys.DOT);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Operator.MULTIPLY);
  Calculator.pressKey(Numbers.THREE);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(formatNumber(parseFloat(Calculator.result)));

  Calculator.pressKey(SpecialKeys.CLEAR);
  Calculator.pressKey(SpecialKeys.CLEAR);
  Calculator.pressKey(SpecialKeys.CLEAR);
  Calculator.pressKey(Numbers.TWO);
  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(Numbers.THREE);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(Calculator.result);

  Calculator.pressKey(Numbers.FOUR);
  Calculator.pressKey(Numbers.EIGHT);
  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Numbers.TWO);
  Calculator.pressKey(Operator.MULTIPLY);
  Calculator.pressKey(Numbers.TWO);
  Calculator.pressKey(Operator.DIVIDE);
  Calculator.pressKey(Numbers.FOUR);
  Calculator.pressKey(Operator.SUBTRACT);
  Calculator.pressKey(Numbers.TWO);
  Calculator.pressKey(Operator.EQUAL);
  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(Numbers.TWO);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(Calculator.result);

  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Operator.EQUAL);
  Calculator.pressKey(Operator.MULTIPLY);
  Calculator.pressKey(Numbers.TWO);
  Calculator.pressKey(Operator.EQUAL);
  Calculator.pressKey(Operator.DIVIDE);
  Calculator.pressKey(Numbers.THREE);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(Calculator.result);

  Calculator.pressKey(Numbers.FOUR);
  Calculator.pressKey(Numbers.EIGHT);
  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Numbers.TWO);
  Calculator.pressKey(Operator.MULTIPLY);
  Calculator.pressKey(Numbers.TWO);
  Calculator.pressKey(Operator.DIVIDE);
  Calculator.pressKey(Numbers.FOUR);
  Calculator.pressKey(Operator.SUBTRACT);
  Calculator.pressKey(Numbers.TWO);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(Calculator.result);

  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(Numbers.TWO);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(Calculator.result);

  Calculator.pressKey(SpecialKeys.CLEAR);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(Calculator.result);

  Calculator.pressKey(Operator.EQUAL);
  Calculator.pressKey(Operator.EQUAL);
  Calculator.pressKey(Operator.EQUAL);

  Calculator.pressKey(Numbers.ONE);
  Calculator.pressKey(Numbers.ZERO);
  console.log(Calculator.history);
  console.log(Calculator.result);

  Calculator.pressKey(Operator.EQUAL);
  Calculator.pressKey(Operator.DIVIDE);
  Calculator.pressKey(Numbers.THREE);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(formatNumber(parseFloat(Calculator.result)));

  Calculator.pressKey(SpecialKeys.CLEAR);

  Calculator.pressKey(Numbers.FOUR);
  Calculator.pressKey(Numbers.EIGHT);
  Calculator.pressKey(Operator.MULTIPLY);
  Calculator.pressKey(Numbers.ONE);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Numbers.ZERO);
  Calculator.pressKey(Numbers.ZERO);
  Calculator.pressKey(Operator.PERCENTAGE);
  Calculator.pressKey(Operator.EQUAL);
  console.log(Calculator.history);
  console.log(Calculator.result);
})();
