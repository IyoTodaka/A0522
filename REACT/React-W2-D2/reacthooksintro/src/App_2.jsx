import React from 'react'
import './App.css'

function App() {
  const [someString, setSomeString] =  React.useState("this is a string")

  function handleInputChange(event){
    setSomeString(event.target.value)
  }

  return (
    <div className="App">
      <input onChange={handleInputChange} /><br/>
      {someString}
    </div>
  )
}

export default App
