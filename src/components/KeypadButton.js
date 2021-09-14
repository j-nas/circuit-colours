import React from "react"
import "./style/button.css"
export default function Button(props) {
  
  

  return(
    <button
      className={`${props.classProp} text-5xl align-middle text-center h-20 border-black-500 border-solid border-2`}
      
      id={props.id}
      onClick={props.event}
    >
      {props.label}
      
    </button>
  )
}