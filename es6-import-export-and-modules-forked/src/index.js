import React from "react";
import ReactDOM from "react-dom";
import pi, { doublePi, triplePi } from "./math";

ReactDOM.render(
  <ul>
    <li>{pi}</li>
    <li>{8 * pi}</li>
    <li>{30 * pi}</li>
    <li>{doublePi()}</li>
    <li>{triplePi()}</li>
  </ul>,
  document.getElementById("root")
);
