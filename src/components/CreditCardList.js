import React, { useEffect, useState } from "react";
import { getCreditCards } from "../Api";
import CreditCard from "./CreditCard";
import "./creditCardList.css";

const CreditCardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCreditCards(5)
      .then((res) => {
        //console.log(res.data.data);
        setCards(res.data.data);
      })
      .catch((e) => {})
      .finally(() => {});
  }, []);

  return (
    <div className="credit-card-list">
      {cards.map((card) => (
        <CreditCard key={card.number} type={card} />
      ))}
    </div>
  );
};

export default CreditCardList;
