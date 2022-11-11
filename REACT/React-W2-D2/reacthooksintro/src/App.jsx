import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [aircon, setAircon] = useState({
    tempUnit: "Farenheit",
    temperature: 0,
    isOn: false,
  })
  const [count, setCount] = useState(0)

  useEffect(() => {
    // document.title = "John"
    document.title = `Power is ${aircon.isOn ? 'ON' : 'OFF'}`
    console.log("useEffect updated!")
  })

  useEffect(() => console.log(count), [count]) //calls this useEffect once

  const handlePowerSwitch = () => {
    setAircon(prevState => {
      return {
        ...prevState,
        isOn: !prevState.isOn
      }
    })
  }

  return (
    <div className="App">
      <button onClick={() => setCount(count+1)}>Count</button>
      <br/>
      <button onClick={handlePowerSwitch}>Power Switch</button>
      <p>Power is {`${aircon.isOn ? 'ON' : 'OFF'}`}</p>
      <button 
        onClick={() => setAircon((prevState) => ({ ...prevState, tempUnit: "Celcius"  }) )} //updater function
      >Change Unit</button>
      <p>Temperature is in {aircon.tempUnit}</p>

      <input 
        type="number" 
        value={aircon.temperature} 
        onChange={(e) => setAircon({ temperature: e.target.value, tempUnit: aircon.tempUnit })}
      />
      <p>Temperature: {aircon.temperature} degrees {aircon.tempUnit} </p>
    </div>
  )
}

export default App
