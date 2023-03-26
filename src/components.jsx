import { React } from "react";
import { RenderKeypad } from "./Logic/RenderKeypad";

export function Display(){
    return (
        <>
            Display Goes Here
        </>
    )
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
    { character: "=", id: "divide" },
    { character: "*", id: "multiply" }
  )
}

export function Button(props) {
  return (
    <div id={props.button.id}>
      <button>{props.button.character}</button>
    </div>
  );
}
