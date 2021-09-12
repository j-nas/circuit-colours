import React from "react"
import "./style/button.css"
export default function Button(props) {
  
  

  return(
    <div
      className={props.classProp}
      id={props.id}
      onClick={props.event}
    >
      {props.label}
      
    </div>
  )
}