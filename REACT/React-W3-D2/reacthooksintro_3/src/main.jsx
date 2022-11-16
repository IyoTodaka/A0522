import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Demo from './Demo'
import './index.css'

const isDemo = false

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <>
      {isDemo ? <Demo /> : <App />}
    </>
  // </React.StrictMode>
)