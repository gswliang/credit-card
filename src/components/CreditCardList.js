import React, { useEffect, useState } from "react";
import { getCreditCards } from "../Api";
import CreditCard from "./CreditCard";
import Input from "./Input";
import "./creditCardList.css";

const CreditCardList = () => {
  const [cards, setCards] = useState([]);
  const [number, setNumber] = useState(0);

  useEffect(() => {
    getCreditCards(number)
      .then((res) => {
        setCards(res.data.data);
      })
      .catch((e) => {})
      .finally(() => {});
  }, [number]);

  return (
    <div>
      <Input number={number} setNumber={setNumber} />
      <div className="credit-card-list">
        {cards.map((card) => (
          <CreditCard key={card.number} type={card} />
        ))}
      </div>
    </div>
  );
};

export default CreditCardList;
