import './App.css';
import React, { useState, useEffect } from 'react';
import getCircuitColour from './getCircuitColour';

import Display from './components/Display'
import Keypad from './components/Keypad'
import AdSpace from './components/AdSpace'
import PhaseDisplay from './components/PhaseDisplay';

function App() {
  const [circuit, setCircuit] = useState([])
  const [display, setDisplay] = useState("")
  const [colour, setColour] = useState("")
  const [phaseA, setPhaseA] = useState("red")
  const [phaseB, setPhaseB] = useState("gray")
  const [phaseC, setPhaseC] = useState("blue")

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
  const phase = { phaseA, phaseB, phaseC}
  
  return (
    <div className="container mx-auto flex flex-col h-screen justify-between">
     
    <header className="h-10">
      <Display appData = {appData}/>
    </header >
    <main className="mb-auto h-auto">
      <Keypad keypad = {keypad}/>
      <PhaseDisplay phase={phase}/>
      
    </main>  
    <footer className="h-10 bg-blue-500">
      <AdSpace />
    </footer>
     

    </div>
  );
}

export default App;
