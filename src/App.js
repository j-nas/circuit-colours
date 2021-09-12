import './App.css';
import React, { useState, useEffect } from 'react';
import getCircuitColour from './getCircuitColour';

import Display from './components/Display'
import Keypad from './components/Keypad'
import AdSpace from './components/AdSpace'

function App() {
  const [circuit, setCircuit] = useState([])
  const [display, setDisplay] = useState("")
  const [colour, setColour] = useState("")

  const enterNumber = (e) =>{
    setCircuit([...circuit, e.target.id])
  }
 
  const clear = () => {
    setCircuit(circuit.filter(a => !a))
  }
  
  useEffect(() => {
    setColour(getCircuitColour(Number(circuit.join(''))))
    if(circuit.length === 0) {
      setDisplay("Enter a number to begin")
    } else {
      setDisplay(`Circuit ${Number(circuit.join(''))} is ${colour}`)
    }
  }, [display, circuit, colour])


  const appData = { display, circuit, colour }
  const keypad = { enterNumber, clear}
  
  
  return (
    <div className="container mx-auto">
     
     
     <Display appData = {appData}/>
     <Keypad keypad = {keypad}/>
     <AdSpace />
     

    </div>
  );
}

export default App;
