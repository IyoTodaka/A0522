import React from "react";

export default function Field({ label, onChange, type, value, hint }) {
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
      {!!hint && <div className="Field__HelperMessage">{hint}</div>}
    </div>
  );
}

// (5 > 0 && 4 < 3) ?
//   true
//   :
//   2ndcondition ?
//     true
//     :
//     false
