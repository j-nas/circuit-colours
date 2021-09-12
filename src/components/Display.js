import React from "react"
import "./style/display.css"
export default function Display(props) {
  
  
  return (
    <div 
      color="red"
      className="display"
    >
      {props.appData.display}
      
    </div>
  )
}