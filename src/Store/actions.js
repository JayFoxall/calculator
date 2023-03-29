import { store } from "./store";

export const APPEND_PRESSED = "Append Pressed";
export function AppendAction(__key) {
  return {
    type: APPEND_PRESSED,
    payload: __key,
  };
}

export const EQUALS_PRESSED = "Equals Pressed";
export function EqualsAction(__key) {
  return {
    type: EQUALS_PRESSED,
    payload: __key,
  };
}

export const OPERATOR_PRESSED = "Operator Pressed";
export const OPERATOR_DUPLICATED = "Operator Duplicated";
export const MINUS_PRESSED = "Minus Pressed";
export const MINUS_TO_DUPLICATION =
  "Minus After Operator Changed To Duplicate ";
export function OperatorAction(__key) {
  let testState = store.getState();

  //TODO: Make if (typeof testState = "array") testState.join("")

  try {
    testState = testState.join("");
  } catch (testState) {}
  testState += __key;

  const minusOperatorDuplicated = /-{3,}|[+*/]{1,}-{2,}|-[*/+]/g;
  const operatorDuplicated = /-[+*/]|[+*/]{2,}/;

  if (__key === "-") {
    if (testState.match(minusOperatorDuplicated)) {
      return {
        type: OPERATOR_DUPLICATED,
        payload: __key,
      };
    } else
      return {
        type: MINUS_PRESSED,
        payload: __key,
      };
  } else if (testState.match(/[*/+]-[*/+]/)) {
    return {
      type: MINUS_TO_DUPLICATION,
      payload: __key,
    };
  } else if (testState.match(operatorDuplicated)) {
    return {
      type: OPERATOR_DUPLICATED,
      payload: __key,
    };
  } else
    return {
      type: OPERATOR_PRESSED,
      payload: __key,
    };
}

export const CLEAR_PRESSED = "Clear Pressed";
export function ClearAction(__key) {
  return {
    type: CLEAR_PRESSED,
    payload: __key,
  };
}

export const DECIMAL_PRESSED = "Decimal Pressed";
export function DecimalAction(__key) {
  let testState = store.getState();

  if (testState.length > 1) {
    try{testState = testState.join("").toString();}
    catch(testState){testState.toString()}
  } else {
    testState = testState.toString();
  }

let regex = /\.\.|[0-9]+\.(?:[0-9]+\.)+|[+*/]\./g;
  testState += ".";

  if (testState.match(regex)) {
    return {
      type: DECIMAL_PRESSED,
    };
  }

  return {
    type: DECIMAL_PRESSED,
    payload: __key,
  };
}
