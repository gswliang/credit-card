import React from "react";
import "./Input.css";

const Input = ({ number, setNumber }) => {
  console.log(number);
  return (
    <div className="input__container">
      <label className="input__label">Enter a number:</label>
      <input
        className="input__content"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
