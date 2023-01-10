import { SET_SNACKS, ADD_SNACK_QTY, REMOVE_SNACK_QTY } from '../constants/actionTypes'

// const initialState = [
//     {id: 1, food: "Doritos", quantity: 10},
//     {id: 2, food: "Cheetos", quantity: 5},
//     {id: 3, food: "Chips Ahoy", quantity: 2},
//     {id: 4, food: "Kit Kat", quantity: 16},
//     {id: 5, food: "Senbei", quantity: 6},
//   ]

export const snackReducer = (snacks = [], action) => {
  switch (action.type) {
    case ADD_SNACK_QTY:
      return snacks.map(snack => {
        if(snack.id === action.payload){
          return {...snack, quantity: snack.quantity + 1}
        }

        return snack
      })

    case REMOVE_SNACK_QTY:
      return snacks.map(snack => {
        if(snack.id === action.payload){
          return {...snack, quantity: snack.quantity - 1}
        }

        return snack
      })
    case SET_SNACKS:
      return action.payload // [{}, {}, {}]
   
  }

  return snacks
}