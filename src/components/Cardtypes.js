import React from "react";
import "./Input.css";

const Cardtypes = ({ cardOptions, onChange }) => {
  const renderedOptions = cardOptions.map((card) => {
    return <option key={card}>{card}</option>;
  });
  return (
    <div className="input__container">
      <label className="input__label">Card type:</label>
      <select className="input__content selection" onChange={onChange}>
        {renderedOptions}
      </select>
    </div>
  );
};

export default Cardtypes;
