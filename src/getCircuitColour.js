export default function getCircuitColour(circuitNumber) {
  let colourOutput = ""
  switch (circuitNumber % 6) {
    case 0:
      colourOutput = "blue"
      break
    case 1:
      colourOutput = "red"
      break
    case 2:
      colourOutput = "red"  
      break
    case 3:
      colourOutput = "black"
      break
    case 4: 
      colourOutput = "black"
      break
    case 5: 
      colourOutput = "blue"
      break
    default:
      break
  }
  return(colourOutput)
}