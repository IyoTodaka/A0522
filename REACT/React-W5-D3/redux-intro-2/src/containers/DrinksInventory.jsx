import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addDrinkkQty, removeDrinkQty } from "../redux/actions/drinkAction";

const DrinksInventory = () => {
  const dispatch = useDispatch();
  const drinksData = useSelector((state) => state.drinksData);
  return (
    <>
      <h1>Drinks Department</h1>
      <div className="row">
        <div className="card-group">
          {drinksData &&
            drinksData.map((drink) => (
              <div className="card">
                <div className="card-body">
                  {drink.name} - {drink.quantity}
                </div>
                <div className="card-footer">
                  <button 
                    className="btn btn-success m-1"
                    onClick={() => dispatch(addDrinkkQty(drink.id))}>
                    +
                  </button>
                  <button 
                    className="btn btn-success m-1"
                    onClick={() => dispatch(removeDrinkQty(drink.id))}>
                    -
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default DrinksInventory;
