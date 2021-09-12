import React from "react"
import "./style/button.css"
export default function Button(props) {
  
  

  return(
    <div
      className="keypadButton"
      id={props.id}
      onClick={props.event}
    >
      {props.label}
      
    </div>
  )
}