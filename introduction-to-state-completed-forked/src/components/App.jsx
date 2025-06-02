import React from "react";

function strike() {
  document.getElementById("root").style.textDecoration = "line-through";
}
function unStrike() {
  document.getElementById("root").style.textDecoration = null;
}

function App() {
  return (
    <div>
      <p>Buy milk</p>
      <button onClick={strike}>strike through</button>
      <button onClick={unStrike}>unStrike through</button>
    </div>
  );
}

export default App;
