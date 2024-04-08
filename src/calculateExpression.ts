import { Operator as GlobalOperators } from "./interfaces";

type TokenOperator =
  | GlobalOperators.ADD
  | GlobalOperators.SUBTRACT
  | GlobalOperators.MULTIPLY
  | GlobalOperators.DIVIDE;
type Token = TokenOperator | number;

function tokenize(expression: string): Token[] {
  return expression
    .split(/(\D+)/)
    .map((token) =>
      isNaN(Number(token)) ? (token as TokenOperator) : Number(token)
    );
}

function infixToPostfix(tokens: Token[]): Token[] {
  const output: Token[] = [];
  const operators: TokenOperator[] = [];
  const precedence: { [key in TokenOperator]: number } = {
    "+": 1,
    "-": 1,
    x: 2,
    "÷": 2,
  };

  console.log("====================================");
  console.log("precedence");
  console.log(precedence);
  console.log("====================================");

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
      operators.push(token);
    }
  }

  while (operators.length > 0) {
    output.push(operators.pop() as TokenOperator);
  }

  return output;
}

function evaluatePostfix(tokens: Token[]): number {
  const stack: number[] = [];

  for (const token of tokens) {
    if (typeof token === "number") {
      stack.push(token);
    } else {
      const right = stack.pop() as number;
      const left = stack.pop() as number;
      switch (token) {
        case "+":
          stack.push(left + right);
          break;
        case "-":
          stack.push(left - right);
          break;
        case "x":
          stack.push(left * right);
          break;
        case "÷":
          stack.push(left / right);
          break;
      }
    }
  }

  return stack.pop() as number;
}

function calculateExpression(expression: string): number | null {
  try {
    const tokens = tokenize(expression);
    const postfix = infixToPostfix(tokens);
    const result = evaluatePostfix(postfix);
    console.log("====================================");
    console.log("result");
    console.log(result);
    console.log("====================================");
    return parseFloat(result.toFixed(2));
  } catch (error) {
    console.error(`Error al calcular la expresión: ${error}`);
    return null;
  }
}

console.log("====================================");
console.log("48+52x2÷4");
console.log(calculateExpression("48+52x2÷4"));
console.log("====================================");
console.log("====================================");
console.log("48+5+52x2÷3");
console.log(calculateExpression("48+5+52x2÷3"));
console.log("====================================");
console.log("====================================");
console.log("2000÷2x3-100");
console.log(calculateExpression("2000÷2x3-100"));
console.log("====================================");
console.log("====================================");
console.log("48+52+");
console.log(calculateExpression("48+52+"));
console.log("====================================");
console.log("====================================");
console.log("48+52x2");
console.log(calculateExpression("48+52x2"));
console.log("====================================");

// 48+52
// 48+52x2
// 48+52x2÷4
