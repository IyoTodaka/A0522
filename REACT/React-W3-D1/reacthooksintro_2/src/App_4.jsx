import { useState } from 'react'
import './App.css'

function App() {
  const [aircon, setAircon] = useState({
    tempUnit: "Farenheit",
    temperature: 0
  })

  console.log(aircon)

  return (
    <div className="App">
      <button 
        // onClick={() => setAircon({ tempUnit: "Celcius" })}
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
