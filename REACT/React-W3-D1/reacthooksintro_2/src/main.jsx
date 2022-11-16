import React, { createContext, useReducer } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

//create context object
export const AppContext = createContext()

//legacy, no longer necessary
// export const AppConsumer = AppContext.Consumer;

//reducer function which takes in dispatched action 
//and update the respective state
export const reducer = (state, action) => { // { type: "ADD_TODO", payload: { todo: "eat bread", done: false } }
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state, 
        { id: Math.random(), todoName: action.payload.todoName, completed: false }
      ]
    default:
      return state
  }
}

//Exporting a provider
export const AppProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, [])

  // dispatch({ type: "ADD_TODO", payload: {} })
  // dispatch({ type: "DELETE_TODO", payload: 20 })
  // dispatch({ type: "SET_IS_LOADING" })

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)

// //test memory leak
// function NewPage(){
//   return <div>New Page</div>
// }

// setTimeout(
//   () => ReactDOM.createRoot(document.getElementById('root')).render(<NewPage />),
//   5000
// )