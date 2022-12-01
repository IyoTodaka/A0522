import React from 'react'
import { legacy_createStore as createStore } from 'redux'

const initialState = 0;

const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PLUS':
            return state + (action.payload || 0)
        case 'MINUS':
            return state - (action.payload || 0)
        default:
            return state
    }
}

const store = createStore(countReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

//action creators - functions that return an action (object)
const add = (payload) => ({ type: 'PLUS', payload })
const minus = (payload) => ({ type: 'MINUS', payload })

store.dispatch(add(1))
const dispatch_1 = store.getState()
store.dispatch(add(2))
const dispatch_2 = store.getState()
store.dispatch(minus(2))
const dispatch_3 = store.getState()

function Module1() {
  return (
    <>
        <p>Initial State: {store.getState()}</p>
        <p>State after 1st dispatch {dispatch_1}</p>
        <p>State after 2nd dispatch {dispatch_2}</p>
        <p>State after 3rd dispatch {dispatch_3}</p>
        {/* <button onClick={() => store.dispatch({ type: 'PLUS', payload: 1 })}>Add</button> */}
    </>
  )
}

export default Module1