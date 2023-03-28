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
      let newState = [...state]
      let newStateLastCharacter = newState[newState.length-1]

      if (newStateLastCharacter === action.payload){
        return state
      } else {
        newState[newState.length-1] = action.payload
        return newState
      }
    case actions.CLEAR_PRESSED:
      return defaultState;
    case actions.EQUALS_PRESSED:
      return [CalculateAnswer(state)];

    default:
      return [state];
  }
}

export const store = configureStore({ reducer: equationReducer });
