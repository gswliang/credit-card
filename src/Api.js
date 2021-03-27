import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakerapi.it/api/v1/",
});

export const getCreditCards = (number) => {
  return instance.get(`credit_cards?_quantity=${number}`);
};
