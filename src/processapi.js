// This file communicates with the backend and fetches the data
import myData from "./test.json";


// This function fetches all the rows from the JSON file
export function getRows() {
  // const proxyurl = "https://cors-anywhere.herokuapp.com/";
  // const url = "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3"; // site that doesn’t send Access-Control-*
  // let data = [];

  // fetch(url, {
  //   method: "GET",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Access-Control-Allow-Origin": null
  //   },
  // }).then((response) => {
  //     console.log("response", response.json());
  //     return response.json();
  //   })
  //   .then((contents) => {
  //     console.log(contents);
  //     data = contents.results;
  //     console.log(data);
  //   })
  //   .catch((e) => {
  //     console.log("error", e);
  //   });

  return myData.results;
}
