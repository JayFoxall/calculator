import { configureStore } from "@reduxjs/toolkit";
import * as actions from "./actions";
import { CalculateAnswer } from "../Functions/CalculateAnswer";

const defaultState = "0";

function displayReducer(state, action) {
  switch (action.type) {
    case actions.APPEND_PRESSED:
    case actions.OPERATOR_PRESSED:
      if (state === "0") {
        return action.payload;
      } else {
        return [...state, action.payload];
      }
    case actions.CLEAR_PRESSED:
      return defaultState;
    case actions.EQUALS_PRESSED:
      return CalculateAnswer(state);

    default:
      return defaultState;
  }
}

export const store = configureStore({ reducer: displayReducer });
