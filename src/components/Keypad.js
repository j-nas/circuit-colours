import React from "react"
import "./style/keypad.css"
import KeypadButton from "./KeypadButton"
export default function Keypad(props) {


  // const oneToNine = Array(8).fill(1).map(() => oneToNine[0]++)
  const oneToNine = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
  const buttonLayout = oneToNine.map((key) => (
    <KeypadButton
        id={key}
        event={props.keypad.enterNumber}
        label={key}
        key={key}
      />
  ))
      
    
  
  return(
    <div className="grid grid-cols-3 grid-rows-4">
      {buttonLayout}
      
      <KeypadButton
        classProp="col-start-3"
        id="clr"
        event={props.keypad.clear}
        label="CLR"
      />
      
      
    </div>

    
  )
}
