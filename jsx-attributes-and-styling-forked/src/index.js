import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="true">
      My Favourite Foods
    </h1>
    <ul>
      <li>Pulaw</li>
      <img
        className="food-img"
        alt="Pulaw"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_HQX3sRzo1qaV1YgsryQM0ciIykzhCPImhw&s"
      />
      <li>Roast</li>
      <img
        className="food-img"
        alt="Roast"
        src="https://assets.epicurious.com/photos/62f16ed5fe4be95d5a460eed/1:1/w_4318,h_4318,c_limit/RoastChicken_RECIPE_080420_37993.jpg"
      />
      <li>Mishti Doi</li>
      <img
        className="food-img"
        alt="Mishti Doi"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVtb7T7kHkA_qobyRxoc8jyLEVo4x9fPU2VQ&s"
      />
      <li>Rasmalai</li>
      <img
        className="food-img"
        alt="Rasmalai"
        src="https://spicesnflavors.com/wp-content/uploads/2020/10/rasmalai-1.jpg"
      />
    </ul>
  </div>,
  document.getElementById("root")
);
