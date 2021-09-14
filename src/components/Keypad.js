import React from "react";
import "./style/keypad.css";
import KeypadButton from "./KeypadButton";
export default function Keypad(props) {
  const oneToNine = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const buttonLayout = oneToNine.map((key) => (
    <KeypadButton
      id={key}
      classProp="text-2xl"
      event={props.keypad.enterNumber}
      label={key}
      key={key}
    />
  ));

  return (
    <div className="grid grid-cols-3 grid-rows-4 pt-6">
      {buttonLayout}

      <KeypadButton
        classProp="col-start-1 col-end-3"
        id="0"
        envent={props.keypad.enterNumber}
        label="0"
      />

      <KeypadButton
        classProp="col-start-3"
        id="clr"
        event={props.keypad.clear}
        label="CLR"
      />
    </div>
  );
}
