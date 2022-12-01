
const initialState = {
    snackData: [
    {id: 1, food: "Doritos", quantity: 10},
    {id: 2, food: "Cheetos", quantity: 5},
    {id: 3, food: "Chips Ahoy", quantity: 2},
    {id: 4, food: "Kit Kat", quantity: 8},
    {id: 5, food: "Senbei", quantity: 6},
  ]
}

export const snackReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_SNACK_QUANTITY":
        const newSnackState = state.snackData.map(snack => {
            return snack.id !== action.payload.id 
                ? snack
                : action.payload.operator === "+"
                ? { ...snack, quantity: snack.quantity + 1}
                : { ...snack, quantity: snack.quantity - 1}
        })
      
        return { ...state, snackData: newSnackState}
    default:
      return state
  }
}