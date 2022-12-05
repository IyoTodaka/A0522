import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import { legacy_createStore as createStore } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import moodReducer from './mood'
import './index.css'

// const store = createStore(reducer)
const store = configureStore({ reducer: moodReducer })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
