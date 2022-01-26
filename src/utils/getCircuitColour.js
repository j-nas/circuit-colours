export default function getCircuitColour(circuitNumber) {
  switch (circuitNumber % 6) {
    case 0:
    case 5:
      return "blue"
    case 1:
    case 2:
      return "red"
    case 3:
    case 4:
      return "black"
    default:
      return ""
  }
}
