import { BASE_URL } from "./base.js";

const getReviews = () => {
  // returning the fetch will make our "getReviews"
  // function a promise, because it is going over the
  // network it needs to be asynchronous.
  return fetch(`${BASE_URL}/reviews`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // using Promise.resolve here will pass the data we have
      // fetched here as the returnedData passed when we use the function.
      // getReviews().then((returnedData)=> { // when used in other places.})
      return Promise.resolve(data);
    });
};

const postReview = ({ title, comment, rating }) => {
  return fetch(`${BASE_URL}/reviews/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // Convert the JS object into JSON
    // Use shorthand for properties
    body: JSON.stringify({ title, comment, rating }),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return Promise.resolve(data);
    });
};

export { getReviews, postReview };
