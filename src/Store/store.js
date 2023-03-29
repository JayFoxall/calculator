import { configureStore } from "@reduxjs/toolkit";
import * as actions from "./actions";
import { CalculateAnswer } from "../Functions/CalculateAnswer";

const defaultState = "0";

function equationReducer(state, action) {
  switch (action.type) {
    case actions.APPEND_PRESSED:
    case actions.DECIMAL_PRESSED:
    case actions.MINUS_PRESSED:
    case actions.OPERATOR_PRESSED:
      if (state === "0") {
        return action.payload;
      } else {
        try {
          return [...state, action.payload];
        } catch {
          return [state];
        }
      }
    case actions.OPERATOR_DUPLICATED:
      let newState = [...state];
      let newStateLastCharacter = newState[newState.length - 1];

      if (newStateLastCharacter === action.payload) {
        return state;
      } else if (
        newState[newState.length - 1] === newState[newState.length - 2]
      ) {
        return newState.slice(0, newState[newState.length - 1]);
      } else {
        newState[newState.length - 1] = action.payload;
        return newState;
      }

    case actions.MINUS_TO_DUPLICATION:
      let testState = state.join("");
      testState = testState.slice(0, state.length - 2);
      testState += action.payload;
      return testState;

    case actions.CLEAR_PRESSED:
      return defaultState;
    case actions.EQUALS_PRESSED:
      return [CalculateAnswer(state)];

    default:
      return [state];
  }
}

export const store = configureStore({ reducer: equationReducer });
