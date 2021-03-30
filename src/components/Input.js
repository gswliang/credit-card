import React from "react";
import "./Input.css";

const Input = ({ number, setNumber, isNum }) => {
  return (
    <div className="input__container">
      <label className="input__label">Enter a number:</label>
      <input
        className={`input__content ${isNum ? "" : "warning"}`}
        value={number}
        onChange={(e) => {
          if (isNaN(Number(e.target.value))) {
            return;
          }
          setNumber(Number(e.target.value));
        }}
      />
    </div>
  );
};

export default Input;
