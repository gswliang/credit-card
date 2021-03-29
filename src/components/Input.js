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
          setNumber(e.target.value);
        }}
      />
      <div className="credit-card__warning">
        {isNum ? "" : "Please enter a value between 1 -1000"}
      </div>
    </div>
  );
};

export default Input;
