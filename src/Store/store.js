import { configureStore } from '@reduxjs/toolkit';
import * as actions from './actions'

let defaultState = ""

function displayReducer(state = defaultState, action){
  switch(action.type){
    case actions.APPEND_PRESSED:
      return state + 1
    default:
      return defaultState
  }
}

export const store = configureStore({
  reducer: {
    counter: {displayReducer},
  },
});
