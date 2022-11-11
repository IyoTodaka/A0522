import React from 'react'
import './App.css'

function App() {
  const inputStateArray =  React.useState("")
  console.log(inputStateArray)

  const setInputValue = inputStateArray[1]

  // let somevar = "default";

  function handleInputChange(event){
    // somevar = event.target.value
    // console.log(somevar)
    setInputValue(event.target.value)
  }

  return (
    <div className="App">
      <input onChange={handleInputChange} /><br/>
      {/* {somevar} */}
      {inputStateArray[0]}
    </div>
  )
}

export default App
