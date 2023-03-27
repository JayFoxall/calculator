import * as actions from "../Store/actions";
import React from "react";
import { Button } from "../components.jsx";

export let appendableKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
export let clearKey = "AC";
export let operatorKeys = ["+", "-", "*", "/"];
export let equalsKey = "=";

export function RenderKeypad(...keysOnKeypad) {
  let buttonsOnKeypad = [];
  
  let requiredKeys = [...keysOnKeypad];

  function createButton(__character, __actionAssignment, __id = "") {
    this.character = __character;
    this.actionAssignment = __actionAssignment;
    this.id = __id;
  }

  for (let key in requiredKeys) {
    let keyCharacter = requiredKeys[key]["character"];
    let keyID = requiredKeys[key]["id"];
    let action = "";

    switch (true) {
      case operatorKeys.includes(keyCharacter):
        action = actions.OPERATOR_PRESSED;
        break;
      case appendableKeys.includes(keyCharacter):
        action = actions.APPEND_PRESSED;
        break;
      case equalsKey === keyCharacter:
        action = actions.EQUALS_PRESSED;
        break;
      case clearKey === keyCharacter:
        action = actions.CLEAR_PRESSED;
        break;
      default:
        break;
    }

    buttonsOnKeypad.push(new createButton(keyCharacter, action, keyID));
  }

  return buttonsOnKeypad.map((button) => <Button button={button} />);
}
