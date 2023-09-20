import React from "react";
import ReactDOM from "react-dom";
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.alt} />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}
ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Rounaq"
      img="https://picsum.photos/200"
      alt="lorem"
      tel="123"
      email="rk@gmail.com"
    />
    <Card
      name="Shoruya"
      img="https://picsum.photos/200"
      alt="lorem"
      tel="123"
      email="rk@gmail.com"
    />
  </div>,
  document.getElementById("root")
);
