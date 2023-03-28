import { store } from './store';

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
export function OperatorAction(__key) {
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

export const DECIMAL_PRESSED = "Decimal Pressed"
export function DecimalAction(__key){


  let state = store.getState()


  let stateLength = state.length

  if (state.length > 1 ){
    state = state.join("").toString()
  } else {
    state = state.toString()
  }

  let regex = /\.\.|[0-9]+\.(?:[0-9]+\.)+/g

  console.log(state)
  console.log(state.match(regex))
  state += "."
  if (state.match(regex)){
    return{
      type: DECIMAL_PRESSED,
      
    }
  }

  return{
    type: DECIMAL_PRESSED,
    payload: __key,
  }
}

