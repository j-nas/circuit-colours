
# 3-Phase Circuit Colours

```javascript
function getCircuitColour(circuitNumber) {
  switch (circuitNumber % 6) {
    case 0:
      return "blue"
    case 1:
      return "red"
    case 2:
      return "red"  
    case 3:
      return "black"
    case 4: 
      return "black"
    case 5: 
      return "blue"
    default:
      return ""
  }
}
```