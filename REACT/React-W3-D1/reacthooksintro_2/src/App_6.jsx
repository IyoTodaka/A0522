import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [mousePositon, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove)

    //componentWillUnmount
    return () => {
      //unmounting
      document.removeEventListener("mousemove", handleMouseMove)
    }
  })

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.pageX, y: e.pageY })
  }

  return (
    <div className="App">
      x : {mousePositon.x}
      <br />
      y : {mousePositon.y}
    </div>
  )
}

export default App
