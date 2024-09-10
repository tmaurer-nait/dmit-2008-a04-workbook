const BASE_URL = "https://lldev.thespacedevs.com/2.2.0";

// api functions here.

const getAstronautList = async () => {
  // Return the output of fetching the astronaut API (a Promise<Response> object)
  return fetch(BASE_URL + "/astronaut");
};

export { getAstronautList };
