import React from "react"
import PhaseButton from "./PhaseButton.js"
export default function PhaseDisplay(props) {
  return (
    <div className="text-center">
      <span>Phase A</span><br />
      <PhaseButton
        colour={props.phase.phaseA}
        phase="A"
      /> <br />
      <span>Phase B</span><br />
      <PhaseButton
        colour={props.phase.phaseB}
        phase="B"
      /> <br />
      <span>Phase C</span> <br />
      <PhaseButton
        colour={props.phase.phaseC}
        phase="C"
      />  
    </div>
  )
}