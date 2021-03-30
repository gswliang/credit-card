import React from "react";
import "./Input.css";

const Cardtypes = ({ cardOptions, setCardselected }) => {
  const renderedOptions = cardOptions.map((card) => {
    return <option key={card.label}>{card.label}</option>;
  });
  return (
    <div className="input__container">
      <label className="input__label">Card type:</label>
      <select
        className="input__content selection"
        onChange={(e) => {
          setCardselected(e.target.value);
        }}
      >
        {renderedOptions}
      </select>
    </div>
  );
};

export default Cardtypes;
