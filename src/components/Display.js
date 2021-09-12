import React from "react"
import "./style/display.css"
export default function Display(props) {
  
  
  return (
    <div 
      
      className="text-red-500"
    >
      {props.appData.display}
      
    </div>
  )
}