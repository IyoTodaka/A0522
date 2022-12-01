import {  combineReducers } from 'redux'
import { drinkReducer } from './drinkReducer'
import { snackReducer } from './snackReducer'

const rootReducer = combineReducers({
    drinksData: drinkReducer,
    snacksData: snackReducer
})

export default rootReducer