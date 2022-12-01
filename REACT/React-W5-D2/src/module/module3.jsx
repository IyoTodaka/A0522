import React from "react";

function Module3() {
  const [snackData, setSnackData] = React.useState([
    {id: 1, food: "Doritos", quantity: 10},
    {id: 2, food: "Cheetos", quantity: 5},
    {id: 3, food: "Chips Ahoy", quantity: 2},
    {id: 4, food: "Kit Kat", quantity: 8},
    {id: 5, food: "Senbei", quantity: 6},
  ]);

  const handleQuantity = (operator, id) => {
    setSnackData(prevSnackData => {
        return prevSnackData.map(snack => {
            return snack.id !== id 
                ? snack
                : operator === "+"
                ? { ...snack, quantity: snack.quantity + 1}
                : { ...snack, quantity: snack.quantity - 1}
        })
    })
  }

  return <div>
    {snackData && snackData.map(snack => (
        <>
            <p>{snack.food} - {snack.quantity}</p>
            <button onClick={() => handleQuantity("+", snack.id)}>+</button>
            <button onClick={() => handleQuantity("-", snack.id)}>-</button>
        </>
    ))}
  </div>;
}

export default Module3;
