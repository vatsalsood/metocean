// This file communicates with the backend and fetches the data
import myData from "./test.json";


// This function fetches all the rows from the JSON file
export function getRows() {
  return myData.results;
}

// This function fetches all the columns from the JSON file
export function getColumns() {
  return myData.results.columns;
}
