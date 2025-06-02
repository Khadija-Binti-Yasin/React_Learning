import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "blue",
  fontSize: "50px",
  border: "2px solid red",
};
customStyle.color = "violet";

ReactDOM.render(
  <h1 style={customStyle}>KHADIJA BINTI YASIN</h1>,
  document.getElementById("root")
);
