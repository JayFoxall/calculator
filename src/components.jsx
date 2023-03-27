import { React } from "react";
import { connect } from "react-redux";
import { RenderKeypad } from "./Functions/RenderKeypad";
import { store } from './Store/store';

export const Display =  connect(mapStateToProps)(props =>
  {  
    return (
        <>
            {props.state}
        </>
    )
})

function mapStateToProps(state) {
  return {
    state: state,
  };
}

export function Keypad() {
  return RenderKeypad(
    { character: "0", id: "zero" },
    { character: "1", id: "one" },
    { character: "2", id: "Two" },
    { character: "3", id: "three" },
    { character: "4", id: "four" },
    { character: "5", id: "five" },
    { character: "6", id: "six" },
    { character: "7", id: "seven" },
    { character: "8", id: "eight" },
    { character: "9", id: "nine" },
    { character: ".", id: "decimal" },
    { character: "AC", id: "clear" },
    { character: "+", id: "add" },
    { character: "-", id: "subtract" },
    { character: "=", id: "equals" },
    { character: "*", id: "multiply" },
    { character: "/", id: "divide" }
  )
}

export function Button(props) {
  return (
    <div id={props.button.id} onClick = {() => store.dispatch({type: props.button.actionAssignment, payload: props.button.character})}>
      <button>{props.button.character}</button>
    </div>
  );
}
