//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

import React from "react";
import ReactDOM from "react-dom";
const name = "KHADIJA BINTI YASIN";
const currentDate = new Date();
const year = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <p>
      My favourite person is Irha Ibrahim. I really love her. She is my tiny
      best friend. Created by {name}
    </p>
    <p>copyright {year}</p>
  </div>,
  document.getElementById("root")
);
