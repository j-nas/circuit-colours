import React from "react"

export default function PhaseButton(props) {
  return (
    <button
      className={`bg-${props.colour}-500 w-8/12 h-8`}
      id={`phase${props.phase}`}
    />
  )
}