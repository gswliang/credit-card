import React, { useEffect, useState } from "react";
import { getCreditCards } from "../Api";
import CreditCard from "./CreditCard";
import Input from "./Input";
import "./creditCardList.css";
import useDebounce from "../hooks/useDebounce";

const DEBOUNCE_DELAY = 500;

const CreditCardList = () => {
  const [cards, setCards] = useState([]);
  const [number, setNumber] = useState(0);
  const [isNum, setIsNum] = useState(true);

  const debounceInput = useDebounce(number, DEBOUNCE_DELAY);

  const isValidInput = (number) => {
    if (0 <= number && number <= 1000) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    setIsNum(isValidInput(number));
  }, [number]);

  useEffect(() => {
    getCreditCards(debounceInput)
      .then((res) => {
        setCards(res.data.data);
      })
      .catch((e) => {})
      .finally(() => {});
  }, [debounceInput]);

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
