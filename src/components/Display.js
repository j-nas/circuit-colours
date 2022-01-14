import React from "react"
export default function Display(props) {
  
  
  return (
    <div 
      
      className="pt-6 pb-6 text-2xl text-center"
    >
      {props.appData.display}
      
    </div>
  )
}