import {
  Calculator,
  Numbers,
  ObserverProps,
  Operator,
  SpecialKeys,
} from '../src';

function observerExampleFunction({ history, result }: ObserverProps) {
  console.log('====================================');
  console.log('history');
  console.log(history);
  console.log('result');
  console.log(result);
  console.log('====================================');
}

(function () {
  Calculator.setObserver(observerExampleFunction);

  // Calculator.pressKey(Numbers.TWO);
  // Calculator.pressKey(Operator.ADD);
  // Calculator.pressKey(Numbers.THREE);
  // Calculator.pressKey(SpecialKeys.CLEAR);

  // Calculator.pressKey(Numbers.FOUR);
  // Calculator.pressKey(Numbers.EIGHT);
  // Calculator.pressKey(Operator.ADD);
  // Calculator.pressKey(Numbers.FIVE);
  // Calculator.pressKey(Numbers.TWO);
  // Calculator.pressKey(Operator.MULTIPLY);
  // Calculator.pressKey(Numbers.TWO);
  // Calculator.pressKey(Operator.DIVIDE);
  // Calculator.pressKey(Numbers.FOUR);
  // Calculator.pressKey(Operator.SUBTRACT);
  // Calculator.pressKey(Numbers.TWO);
  // Calculator.pressKey(Operator.EQUAL);
  // Calculator.pressKey(Operator.ADD);
  // Calculator.pressKey(Numbers.TWO);
  // Calculator.pressKey(Operator.EQUAL);

  Calculator.pressKey(SpecialKeys.CLEAR);
  Calculator.pressKey(Numbers.ZERO);
  Calculator.pressKey(Numbers.ONE);
  Calculator.pressKey(SpecialKeys.DOT);
  Calculator.pressKey(Numbers.FIVE);
  Calculator.pressKey(Operator.ADD);
  Calculator.pressKey(Numbers.THREE);
  Calculator.pressKey(Operator.EQUAL);

  // Calculator.pressKey(Numbers.FIVE);
  // Calculator.pressKey(Operator.ADD);
  // Calculator.pressKey(Numbers.FIVE);
  // Calculator.pressKey(Operator.EQUAL);
  // Calculator.pressKey(Operator.MULTIPLY);
  // Calculator.pressKey(Numbers.TWO);
  // Calculator.pressKey(Operator.EQUAL);
  // Calculator.pressKey(Operator.DIVIDE);
  // Calculator.pressKey(Numbers.THREE);
  // Calculator.pressKey(Operator.EQUAL);
  // Calculator.pressKey(SpecialKeys.CLEAR);

  // Calculator.pressKey(Numbers.FOUR);
  // Calculator.pressKey(Numbers.EIGHT);
  // Calculator.pressKey(Operator.ADD);
  // Calculator.pressKey(Numbers.FIVE);
  // Calculator.pressKey(Numbers.TWO);
  // Calculator.pressKey(Operator.MULTIPLY);
  // Calculator.pressKey(Numbers.TWO);
  // Calculator.pressKey(Operator.DIVIDE);
  // Calculator.pressKey(Numbers.FOUR);
  // Calculator.pressKey(Operator.SUBTRACT);
  // Calculator.pressKey(Numbers.TWO);

  // Calculator.pressKey(Operator.EQUAL);

  // Calculator.pressKey(Operator.ADD);
  // Calculator.pressKey(Numbers.TWO);

  // Calculator.pressKey(Operator.EQUAL);

  // Calculator.pressKey(SpecialKeys.CLEAR);
  // Calculator.pressKey(Numbers.FIVE);
  // Calculator.pressKey(Operator.ADD);
  // Calculator.pressKey(Numbers.FIVE);
  // Calculator.pressKey(Operator.EQUAL);

  // Calculator.pressKey(Operator.EQUAL);
  // Calculator.pressKey(Operator.EQUAL);
  // Calculator.pressKey(Operator.EQUAL);

  // Calculator.pressKey(Numbers.ONE);
  // Calculator.pressKey(Numbers.ZERO);

  // Calculator.pressKey(Operator.EQUAL);
  // Calculator.pressKey(Operator.DIVIDE);
  // Calculator.pressKey(Numbers.THREE);

  // Calculator.pressKey(Operator.EQUAL);

  // Calculator.pressKey(SpecialKeys.CLEAR);

  // Calculator.pressKey(Numbers.FOUR);
  // Calculator.pressKey(Numbers.EIGHT);
  // Calculator.pressKey(Operator.MULTIPLY);
  // Calculator.pressKey(Numbers.ONE);
  // Calculator.pressKey(Numbers.FIVE);
  // Calculator.pressKey(Numbers.ZERO);
  // Calculator.pressKey(Numbers.ZERO);
  // Calculator.pressKey(Operator.PERCENTAGE);
  // Calculator.pressKey(Operator.EQUAL);

  // Calculator.pressKey(SpecialKeys.CLEAR);

  // Calculator.pressKey(Numbers.ONE);
  // Calculator.pressKey(Numbers.ZERO);
  // Calculator.pressKey(SpecialKeys.AMBIGUITY);
  // Calculator.pressKey(Operator.MULTIPLY);
  // Calculator.pressKey(Numbers.TWO);
  // Calculator.pressKey(Operator.EQUAL);
  // Calculator.pressKey(Operator.MULTIPLY);
  // Calculator.pressKey(Numbers.THREE);
  // Calculator.pressKey(Operator.EQUAL);
  // Calculator.pressKey(SpecialKeys.AMBIGUITY);
  // Calculator.pressKey(Operator.ADD);
  // Calculator.pressKey(Numbers.FIVE);
  // Calculator.pressKey(Operator.EQUAL);
  // Calculator.pressKey(Operator.MULTIPLY);
  // Calculator.pressKey(Numbers.FIVE);
  // Calculator.pressKey(Numbers.EIGHT);
  // Calculator.pressKey(Numbers.THREE);
  // Calculator.pressKey(Operator.EQUAL);
  // Calculator.pressKey(Operator.ADD);
  // Calculator.pressKey(Numbers.ZERO);
  // Calculator.pressKey(SpecialKeys.DOT);
  // Calculator.pressKey(Numbers.THREE);
  // Calculator.pressKey(Operator.EQUAL);
  // Calculator.pressKey(Operator.EQUAL);
  // Calculator.pressKey(Operator.EQUAL);
  // Calculator.pressKey(Operator.EQUAL);
  // Calculator.pressKey(SpecialKeys.CLEAR);

  // Calculator.pressKey(Numbers.FOUR);
  // Calculator.pressKey(Numbers.NINE);
  // Calculator.pressKey(SpecialKeys.DELETE);
  // Calculator.pressKey(SpecialKeys.DELETE);
  // Calculator.pressKey(SpecialKeys.DELETE);
  // Calculator.pressKey(Numbers.FIVE);
  // Calculator.pressKey(Numbers.EIGHT);
  // Calculator.pressKey(Operator.ADD);
  // Calculator.pressKey(Numbers.FIVE);
  // Calculator.pressKey(Numbers.TWO);
  // Calculator.pressKey(Operator.MULTIPLY);
  // Calculator.pressKey(Numbers.TWO);
  // Calculator.pressKey(Operator.EQUAL);

  // Calculator.pressKey(SpecialKeys.CLEAR);
  // Calculator.pressKey(Numbers.FOUR);
  // Calculator.pressKey(Operator.MULTIPLY);
  // Calculator.pressKey(Numbers.THREE);
  // Calculator.pressKey(SpecialKeys.DELETE);
  // Calculator.pressKey(SpecialKeys.DELETE);
  // Calculator.pressKey(Operator.EQUAL);

  // Calculator.pressKey(SpecialKeys.CLEAR);
  // Calculator.pressKey(Numbers.ONE);
  // Calculator.pressKey(Operator.ADD);
  // Calculator.pressKey(Operator.MULTIPLY);
  // Calculator.pressKey(Numbers.FIVE);
  // Calculator.pressKey(Operator.EQUAL);

  // Calculator.pressKey(SpecialKeys.CLEAR);
  // Calculator.pressKey(Numbers.ONE);
  // Calculator.pressKey(Numbers.ZERO);
  // Calculator.pressKey(SpecialKeys.DOT);
  // Calculator.pressKey(Numbers.FIVE);
  // Calculator.pressKey(Operator.MULTIPLY);
  // Calculator.pressKey(Numbers.THREE);
  // Calculator.pressKey(Operator.EQUAL);
})();
