import './App.css';
import React, {useState} from 'react';
import getCircuitColour from './getCircuitColour';
function App() {
  const [circuit, setCircuit] = useState(0)
  const [colour, setColour] = useState("red")
  const [display, setDisplay] = useState("")


  const handleChange = (e) =>{
    const value = e.target.value;
    setCircuit(value)
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
       <button onClick={getCircuitColour}>
         Check Colour
       </button>

    </div>
  );
}

export default App;
