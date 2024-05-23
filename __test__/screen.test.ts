import { ResultsScreen } from "../src/screen";

describe("ResultsScreen", () => {
  const resultsScreen = new ResultsScreen();

  it("should initialize with default values", () => {
    expect(resultsScreen.history).toEqual([]);
    expect(resultsScreen.result).toBe("0");
  });

  it("should update the history correctly", () => {
    resultsScreen.updateHistory("1");
    resultsScreen.updateHistory("2");
    resultsScreen.updateHistory("3");

    expect(resultsScreen.history).toEqual(["1", "2", "3"]);
  });

  it("should update the result correctly", () => {
    resultsScreen.update("1");
    expect(resultsScreen.result).toBe("1");

    resultsScreen.update("2");
    expect(resultsScreen.result).toBe("12");

    resultsScreen.update("3");
    expect(resultsScreen.result).toBe("123");
  });

  it("should clear the current operation", () => {
    resultsScreen.update("123");
    resultsScreen.clearCurrentOperation();

    expect(resultsScreen.result).toBe("0");
  });

  it("should clear the history", () => {
    resultsScreen.updateHistory("1");
    resultsScreen.updateHistory("2");
    resultsScreen.clearHistory();

    expect(resultsScreen.history).toEqual([]);
  });
});
