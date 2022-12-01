import React from 'react'
import ReactPlayer from 'react-player'

function ReactPlayerComponent() {
    const [play,setPlay] = React.useState(false)
  return (
    <>
        <h3>React Player</h3>
        <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing={play} />
        <button className='btn' onClick={() => setPlay(!play)}>Play/Pause</button>
    </>
  )
}

export default ReactPlayerComponent