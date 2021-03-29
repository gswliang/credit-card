import React from "react";
import "./Input.css";

const Input = ({ number, setNumber }) => {
  return (
    <div className="input__container">
      <label className="input__label">Enter a number:</label>
      <input
        className="input__content"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
