import React from "react"

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