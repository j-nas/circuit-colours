import React from "react"
import "./style/display.css"
export default function Display(props) {
  
  
  return (
    <div 
      color={props.appData.colour}
      className="display"
    >
      {props.appData.display}
    </div>
  )
}