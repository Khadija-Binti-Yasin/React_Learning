import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

var numbers = [3, 56, 2, 48, 5];

////Map -Create a new array by doing something with each item in an array.
const newMap = numbers.map((x) => x * x);
console.log(newMap);

//////Filter - Create a new array by keeping the items that return true.

const newFilter = numbers.filter((num) => num > 10);
console.log(newFilter);

//Reduce - Accumulate a value by doing something to each item in an array.
var newReduce = numbers.reduce(
  (accumulator, currentNumber) => accumulator + currentNumber
);
console.log(newReduce);

////Find - find the first item that matches from an array.
const newFind = numbers.find((num) => num > 10);
console.log(newFind);

////FindIndex - find the index of the first item that matches.
const newFindindex = numbers.findIndex((num) => num > 10);
console.log(newFindindex);
