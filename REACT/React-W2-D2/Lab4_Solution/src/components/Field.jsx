import React from "react";

export default class Field extends React.Component {

  render() {
    const { label, onChange, type, value, hint } = this.props;
    return (
      <div className="Field">
        <div className="Field__Label">{label}</div>
        {/* ternary operator --> condition ? true : false */}
        {type === "password" ? (
          <input 
            className="Field__Input" 
            name={label} 
            onChange={onChange} 
            type="password" 
            value={value}
            />
        ) : (
          <input 
            className="Field__Input" 
            name={label} 
            onChange={onChange} 
            type="text" 
            value={value}
          />
        )}
        {!!hint && (<div className="Field__HelperMessage">{hint}</div>)}
      </div>
    );
  }
}


// (5 > 0 && 4 < 3) ? 
//   2ndcondition ?
//     true
//     :
//     false 
//   : 
// false