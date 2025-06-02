import React from "react";
import ReactDOM from "react-dom";
const name = "Angela";
const number = 12;
const fName = "Irha";
const lName = "Ibrahim";

ReactDOM.render(
  <div>
    <h1>Hello {name}!</h1>
    <h2>My daughter's name is {fName + " " + lName}</h2>
    <p>Rina have {number} mangoes</p>
    <p> My Lucky number is {4 + 9}</p>
    <p>Tina have {Math.floor(Math.random() * 10)} Lichies</p>
  </div>,
  document.getElementById("root")
);
