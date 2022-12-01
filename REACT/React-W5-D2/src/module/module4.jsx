import React from "react";
import { connect } from 'react-redux'
import { snackUpdate } from "../redux/actions";

function Module4({ snackData, snackUpdateFunc }) {
  return <div>
    {snackData && snackData.map(snack => (
        <>
            <p>{snack.food} - {snack.quantity}</p>
            <button onClick={() => snackUpdateFunc("+", snack.id)}>+</button>
            <button onClick={() => snackUpdateFunc("-", snack.id)}>-</button>
        </>
    ))}
  </div>;
}

const mapStateToProps = (state) => {
  return {
    snackData: state.snackData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    snackUpdateFunc: (operator, id) => dispatch(snackUpdate(operator, id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Module4);
