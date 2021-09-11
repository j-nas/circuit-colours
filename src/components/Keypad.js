import React from "react"
import "./style/keypad.css"
import KeypadButton from "./KeypadButton"
export default function Keypad(props) {

  const handleClick = (e) => {
    props.keypress(e.target.id)
  }
  
  const buttonLayout = () => {
    for (let i = 0; i < 9; i++) {
      <KeypadButton
        id={i + 1}
        event={handleClick}
        label={i + 1}
        
      />
    }
  }
  return(
    <div class="keypad">
      {buttonLayout}
      <KeypadButton
        id="clr"
        event={handleClick}
        label="CLR"
      />
      <KeypadButton
        id="0"
        event={handleClick}
        label="0"
      />
      <KeypadButton
        id="backspace"
        event={handleClick}
        label="<=="
      />
    </div>

    
  )
}
