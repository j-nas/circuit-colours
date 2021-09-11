import React from "react"

export default function Button(props) {
  
  

  return(
    <div
      class="keypadButton"
      id={props.id}
      onClick={props.handleClick}
    >
      <span>
        {props.label}
      </span>
    </div>
  )
}