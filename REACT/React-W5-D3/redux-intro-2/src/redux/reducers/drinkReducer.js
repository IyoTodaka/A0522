import {
  SET_DRINKS,
  ADD_DRINK_QTY,
  REMOVE_DRINK_QTY,
} from "../constants/actionTypes";

const initialState = [
  { id: 1, name: "Gatorade", quantity: 5 },
  { id: 2, name: "Coke", quantity: 2 },
  { id: 3, name: "Pokka", quantity: 11 },
  { id: 4, name: "Poccari", quantity: 8 },
  { id: 5, name: "Schweppes", quantity: 9 }
];

export const drinkReducer = (drinks = [], action) => {
  switch (action.type) {
    case ADD_DRINK_QTY:
      return drinks.map((drink) => {
        if (drink.id === action.payload) {
          return { ...drink, quantity: drink.quantity + 1 };
        }

        return drink;
      });

    case REMOVE_DRINK_QTY:
      return drinks.map((drink) => {
        if (drink.id === action.payload) {
          return { ...drink, quantity: drink.quantity - 1 };
        }

        return drink;
      });
    case SET_DRINKS:
      return action.payload; // [{}, {}, {}]
  }

  return drinks;
};
