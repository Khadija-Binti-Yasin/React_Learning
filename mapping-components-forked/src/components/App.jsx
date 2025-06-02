import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function creatCard(Contacts) {
  return (
    <Card
      key={Contacts.id}
      name={Contacts.name}
      img={Contacts.imgURL}
      tel={Contacts.phone}
      email={Contacts.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      {contacts.map(creatCard)}
    </div>
  );
}

export default App;
