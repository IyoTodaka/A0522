import { useState } from 'react'

import './App.css'

import People from './containers/People';

function App() {
  return (
    <div className="App">
     <ol>
      <li>Turn this app into one which does NOT use local state (in components) but instead uses Redux</li>
     </ol>
     <People />
    </div>
  )
}

export default App
