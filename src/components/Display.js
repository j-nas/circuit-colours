import React from "react"
import "./style/display.css"
export default function Display(props) {
  
  
  return (
    <div>
      <span>
        {props.prefixText}
      </span>
      <span
        color={props.colour}
      >
        {props.result}
      </span>
    </div>
  )
}