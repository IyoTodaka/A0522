import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSnackQty, removeSnackQty } from "../redux/actions/snackAction";
import fetchData from "../redux/middleware/api";

const SnacksInventory = () => {
  const dispatch = useDispatch();
  const snacksData = useSelector((state) => state.snacksData);

  return (
    <div>
      {snacksData &&
        snacksData.map((snack) => (
          <>
            <p>
              {snack.food} - {snack.quantity}
            </p>
            <button onClick={() => dispatch(addSnackQty(snack.id))}>+</button>
            <button onClick={() => dispatch(removeSnackQty(snack.id))}>
              -
            </button>
          </>
        ))}
    </div>
  );
};

export default SnacksInventory;
