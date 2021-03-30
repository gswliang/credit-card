import React, { useEffect, useState } from "react";
import { getCreditCards } from "../Api";
import CreditCard from "./CreditCard";
import Input from "./Input";
import "./creditCardList.css";

const CreditCardList = () => {
  const [cards, setCards] = useState([]);
  const [number, setNumber] = useState(0);
  const [debounce, setDebounce] = useState(number);
  const [isNum, setIsnum] = useState(true);

  useEffect(() => {
    if (0 <= number && number <= 1000) {
      const timerId = setTimeout(() => {
        setDebounce(number);
        setIsnum(true);
      }, 300);

      return () => {
        clearTimeout(timerId);
      };
    } else {
      setIsnum(false);
    }
  }, [number]);

  useEffect(() => {
    getCreditCards(debounce)
      .then((res) => {
        setCards(res.data.data);
      })
      .catch((e) => {})
      .finally(() => {});
  }, [debounce]);

  return (
    <div>
      <Input number={number} setNumber={setNumber} isNum={isNum} />
      <div className="credit-card-list">
        {cards.map((card) => (
          <CreditCard key={card.number} type={card} />
        ))}
      </div>
    </div>
  );
};

export default CreditCardList;
