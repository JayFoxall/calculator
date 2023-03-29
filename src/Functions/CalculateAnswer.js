import * as keypad from "../Functions/RenderKeypad";

export function CalculateAnswer(state) {
  let firstOperand = "";
  let secondOperand = "";
  let operator = "";

  if (typeof state[0] === "number") firstOperand = state[0];

  state.forEach((character, index, equation) => {
    if (
      keypad.appendableKeys.includes(character) ||
      character === keypad.decimalKey
    ) {
      if (operator === "") {
        firstOperand += character;
      } else {
        secondOperand += character;
      }
    }

    if (keypad.operatorKeys.includes(character)) {
      if (character === "-" && firstOperand === "") {
        firstOperand += character;
        return;
      } else if (character === "-" && operator !== "" && secondOperand === "") {
        secondOperand += character;
        return;
      } else if (secondOperand !== "") {
        firstOperand = calculate(firstOperand, operator, secondOperand);
        operator = "";
        secondOperand = "";
      }
      operator = character;
    }
  });

  function calculate(firstNum, op, secondNum) {
    firstNum = parseFloat(firstNum);
    secondNum = parseFloat(secondNum);
    switch (op) {
      case "+":
        return firstNum + secondNum;
      case "-":
        return firstNum - secondNum;
      case "*":
        return firstNum * secondNum;
      case "/":
        return firstNum / secondNum;
      default:
        return firstNum;
    }
  }

  let answer = calculate(firstOperand, operator, secondOperand);

  return answer;
}
