import { React } from "react";
import { connect } from "react-redux";
import { RenderKeypad } from "./Functions/RenderKeypad";
import { store } from "./Store/store";
import * as actions from "./Store/actions";

export const Display = connect(mapStateToProps)((props) => {
  return <>{props.state}</>;
});

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
  );
}

export function Button(props) {
  function ClickHandler() {

    let character = props.button.character

    switch (props.button.actionAssignment) {
      case actions.APPEND_PRESSED:
        return store.dispatch(actions.AppendAction(character));
      case actions.CLEAR_PRESSED:
        return store.dispatch(actions.ClearAction(character));
      case actions.DECIMAL_PRESSED:
        return store.dispatch(actions.DecimalAction(character));
      case actions.OPERATOR_PRESSED:
        return store.dispatch(actions.OperatorAction(character));
      case actions.EQUALS_PRESSED:
        return store.dispatch(actions.EqualsAction(character));
      default:
        return;
    }
  }

  return (
    <div id={props.button.id} onClick={ClickHandler}>
      <button>{props.button.character}</button>
    </div>
  );
}
