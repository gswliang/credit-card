import React, { useEffect, useState } from "react";
import { getCreditCards } from "../Api";
import CreditCard from "./CreditCard";
import Input from "./Input";
import "./creditCardList.css";
import useDebounce from "../hooks/useDebounce";
import Cardtypes from "./Cardtypes";

const DEBOUNCE_DELAY = 500;

const CreditCardList = () => {
  const [cards, setCards] = useState([]);
  const [number, setNumber] = useState(0);
  const [isNum, setIsNum] = useState(true);
  const [cardSelected, setCardSelected] = useState("All");
  const debounceInput = useDebounce(number, DEBOUNCE_DELAY);
  const [cardTypes, setCardTypes] = useState([]);

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
        setCardTypes(getCardTypes(res.data.data));
      })
      .catch((e) => {})
      .finally(() => {});
  }, [debounceInput]);

  const filteredCard = cards.filter((card) => {
    return cardSelected === "All" ? card : card.type === cardSelected;
  });

  const getCardTypes = (cards) => {
    const cardTypes = cards.map((card) => {
      return card.type;
    });
    return ["All", ...new Set(cardTypes)];
  };

  return (
    <div>
      <Input number={number} setNumber={setNumber} isNum={isNum} />
      <Cardtypes
        cardOptions={cardTypes}
        onChange={(e) => {
          setCardSelected(e.target.value);
        }}
      />
      <div className="credit-card__warning">{isNum ? " " : "Please enter a value between 1 - 1000"}</div>
      <div className="credit-card-list">
        {filteredCard.map((card) => (
          <CreditCard key={card.number} type={card} />
        ))}
      </div>
    </div>
  );
};

export default CreditCardList;
