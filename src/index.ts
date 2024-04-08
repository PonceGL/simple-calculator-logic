import { Numbers, Operator } from "./interfaces";
import { keyboard } from "./keyboard";
import { resultsScreen } from "./screen";

(function () {
  keyboard.pressKey(Numbers.FOUR);
  keyboard.pressKey(Numbers.EIGHT);
  keyboard.pressKey(Operator.ADD);
  keyboard.pressKey(Numbers.FIVE);
  keyboard.pressKey(Numbers.TWO);
  keyboard.pressKey(Operator.MULTIPLY);
  keyboard.pressKey(Numbers.TWO);
  keyboard.pressKey(Operator.DIVIDE);
  keyboard.pressKey(Numbers.FOUR);
  keyboard.pressKey(Operator.SUBTRACT);
  keyboard.pressKey(Numbers.TWO);
  console.log("Calculator");
  console.log(resultsScreen.current);
  keyboard.pressKey(Operator.EQUAL);
  console.log(resultsScreen.current);
  console.log(resultsScreen.history);
  keyboard.pressKey(Operator.ADD);
  keyboard.pressKey(Numbers.TWO);
  console.log("Calculator");
  console.log(resultsScreen.current);
  keyboard.pressKey(Operator.EQUAL);
  console.log(resultsScreen.current);
  console.log(resultsScreen.history);

  // Percentage
  //   calculator.init(48);
  //   calculator.multiply(1500);
  //   console.log("multiply => ", calculator.currentCalculation);
  //   calculator.percentage();
  //   console.log("====================================");
  //   console.log("Calculator");
  //   console.log("result => ", calculator.currentCalculation);
  //   console.log("====================================");
  //   calculator.clear();
})();
