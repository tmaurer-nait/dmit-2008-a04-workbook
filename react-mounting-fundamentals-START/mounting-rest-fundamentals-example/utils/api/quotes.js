import { BASE_QUOTE_URL } from "./base";

const getQuote = () => {
  return fetch(BASE_QUOTE_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return Promise.resolve(data);
    });
};

export { getQuote };
