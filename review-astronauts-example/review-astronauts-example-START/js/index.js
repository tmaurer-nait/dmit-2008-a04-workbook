// js here.
import { getAstronautList } from "./api/astronaut.js";

const main = () => {
  // Call the get astronaut list function (an async function that makes a get request and returns a Promise<Response>)
  getAstronautList()
    .then((response) => {
      // After we get the response convert it to a json object
      return response.json();
    })
    .then((data) => {
      // After we convert it to a json object log the object
      console.log(data);
    });
};

main();
