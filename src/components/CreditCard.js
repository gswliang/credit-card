import "./creditCard.css";

const CreditCard = (props) => {
  const { type, number, owner, expiration } = props.type;
  return (
    <div className="credit-card">
      <div className="credit-card__type">{type}</div>
      <div className="credit-card__number">{number}</div>
      <div className="credit-card__name">{owner}</div>
      <div className="credit-card__expiry-date">{expiration}</div>
    </div>
  );
};
export default CreditCard;
