import React from 'react'
import './App.css'

function App() {
  const [tempUnit, setTempUnit] =  React.useState("Farenheit")
  const [temperature, setTemperature] =  React.useState(0)

  return (
    <div className="App">
      <button onClick={() => setTempUnit("Celcius")}>Change Unit</button>
      <p>Temperature is in {tempUnit}</p>

      <input 
        type="number" 
        value={temperature} 
        onChange={(e) => setTemperature(e.target.value)}
        // onChange={(e) => handleTempChange(e)}
        // onChange={handleTempChange}
      />
      <p>Temperature: {temperature} degrees {tempUnit} </p>
    </div>
  )
}

export default App
