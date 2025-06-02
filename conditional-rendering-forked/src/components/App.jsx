import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date(2020, 11, 23, 11).getHours();
console.log(currentTime);

function App() {
  return (
    <div className="container">
      {/* {isLoggedIn ? <h1>Hello</h1> : <Login />} */}
      {currentTime > 12 ? (
        <h1>Why are you still working?</h1>
      ) : (
        <h1>work hard</h1>
      )}
      {currentTime < 12 && <p> complete your breakfast </p>}
    </div>
  );
}

export default App;
