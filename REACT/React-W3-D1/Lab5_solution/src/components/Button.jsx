import React from "react";

export default function Button({ isDisabled, onClick, label }){
    return (
      <button className="Button" disabled={isDisabled} onClick={onClick}>
        <div className="Button__Label">{label}</div>
      </button>
    );
}
