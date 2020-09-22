// This file communicates with the backend and fetches the data
import myData from "./test.json";

// This function fetches all the rows from the JSON file
export function getRows() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url = "https://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3"; // site that doesn’t send Access-Control-*
  let data = [];

  fetch(proxyurl + url)
    .then((response) => {
      return response.text();
    })
    .then((contents) => {
      data = contents.results;
      console.log(data);

    })
    .catch((e) => {
      console.log("error", e);
      console.log("Can’t access " + e + " response. Blocked by browser?");
    });

  return data;
}
