import { Calculator } from "../src/calculator";
import { Numbers, Operator, SpecialKeys } from "../src/interfaces";
import { ResultsScreen } from "../src/screen";
import { System } from "../src/system";

describe("System", () => {
  let calculator: Calculator;
  let resultsScreen: ResultsScreen;
  let system: System;

  calculator = new Calculator();
  resultsScreen = new ResultsScreen();
  system = new System(calculator, resultsScreen);

  it("should update the results screen when a number key is pressed", () => {
    system.input(Numbers.ONE);
    expect(resultsScreen.result).toEqual("1");
  });

  it("should update the calculator when a number key is pressed", () => {
    system.input(Numbers.TWO);
    expect(resultsScreen.result).toEqual("12");
    expect(calculator.currentCalculation).toEqual(0);
  });

  it("should update the calculator when an operator key is pressed", () => {
    system.input(Numbers.TWO);
    system.input(Operator.ADD);
    expect(calculator.currentCalculation).toEqual(122);
  });

  it("should handle the equal key correctly", () => {
    system.input(Numbers.TWO);
    system.input(Operator.ADD);
    system.input(Numbers.THREE);
    system.input(Operator.EQUAL);
    expect(resultsScreen.result).toEqual("127");
  });

  it("should handle the clear key correctly", () => {
    system.input(Numbers.TWO);
    system.input(Operator.ADD);
    system.input(Numbers.THREE);
    system.input(SpecialKeys.CLEAR);
    expect(resultsScreen.result).toEqual("0");
    expect(calculator.currentCalculation).toEqual(0);
  });

  it("should handle the clear key with history correctly", () => {
    system.input(Numbers.TWO);
    system.input(Operator.ADD);
    system.input(Numbers.THREE);
    system.input(SpecialKeys.CLEAR);

    system.input(Numbers.FOUR);
    system.input(Numbers.EIGHT);
    system.input(Operator.ADD);
    system.input(Numbers.FIVE);
    system.input(Numbers.TWO);
    system.input(Operator.MULTIPLY);
    system.input(Numbers.TWO);
    system.input(Operator.DIVIDE);
    system.input(Numbers.FOUR);
    system.input(Operator.SUBTRACT);
    system.input(Numbers.TWO);
    system.input(Operator.EQUAL);
    system.input(Operator.ADD);
    system.input(Numbers.TWO);
    system.input(Operator.EQUAL);

    expect(resultsScreen.result).toEqual("74");
    expect(calculator.currentCalculation).toEqual(74);
  });

  it("calculator clear should be called when the equal key is pressed", () => {
    const clearSpy = jest.spyOn(calculator, "clear");
    system.input(Numbers.TWO);
    system.input(Operator.ADD);
    system.input(Numbers.THREE);
    system.input(SpecialKeys.CLEAR);
    system.input(Numbers.FOUR);
    system.input(Numbers.EIGHT);
    system.input(Operator.ADD);
    system.input(Numbers.FIVE);
    system.input(Numbers.TWO);
    system.input(Operator.MULTIPLY);
    system.input(Numbers.TWO);
    system.input(Operator.DIVIDE);
    system.input(Numbers.FOUR);
    system.input(Operator.SUBTRACT);
    system.input(Numbers.TWO);
    system.input(Operator.EQUAL);
    system.input(Operator.ADD);
    system.input(Numbers.TWO);
    system.input(Operator.EQUAL);
    system.input(Operator.EQUAL);
    expect(clearSpy).toHaveBeenCalled();
  });

  it("should be add simple dot", () => {
    system.input(SpecialKeys.CLEAR);
    system.input(Numbers.ZERO);
    system.input(Numbers.ONE);
    system.input(SpecialKeys.DOT);
    system.input(Numbers.FIVE);
    system.input(Operator.ADD);
    system.input(Numbers.THREE);
    system.input(Operator.EQUAL);
    expect(resultsScreen.result).toEqual("4.5");
  });

  it("should be add simple dot for decimal numbers", () => {
    system.input(SpecialKeys.CLEAR);
    system.input(Numbers.ZERO);
    system.input(SpecialKeys.DOT);
    system.input(Numbers.FIVE);
    system.input(Operator.MULTIPLY);
    system.input(Numbers.THREE);
    system.input(Operator.EQUAL);
    expect(resultsScreen.result).toEqual("1.5");
  });
  it("should be handle ambiguity", () => {
    system.input(SpecialKeys.CLEAR);
    system.input(Numbers.ONE);
    system.input(Numbers.ZERO);
    system.input(SpecialKeys.AMBIGUITY);
    system.input(Operator.MULTIPLY);
    system.input(Numbers.TWO);
    system.input(Operator.EQUAL);

    expect(resultsScreen.result).toEqual("-20");
  });
});
