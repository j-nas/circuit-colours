import './App.css';
import React, {useState} from 'react';

function App() {
  const [circuit, setCircuit] = useState(1)
  const [colour, setColour] = useState("red")
  
  const handleChange = (e) =>{
    const value = e.target.value;
    setCircuit(value)
  }
  
  const getColour = () => {
    let colourOutput = ""
    switch (circuit % 6) {
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
    setColour(colourOutput)
  }
  
  
  
  
  return (
    <div className="App">
     <div>
       Circuit {circuit} is {colour}
     </div>
     
       <input 
        type="number" 
        name="number" 
        id="number"
        value={circuit} 
        onChange={handleChange}
       />
       <button onClick={getColour}>
         Check Colour
       </button>

    </div>
  );
}

export default App;
