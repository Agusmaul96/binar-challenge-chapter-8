import React from "react";
import "./style/Search.css";

function Card({ person }) {
  return (
    <div className="data">
      <div>
        <h2>Username : {person.username}</h2>
        <p>Email :{person.email}</p>
        <p>Experience; {person.experience}</p>
        <p>Level : {person.lvl}</p>
      </div>
    </div>
  );
}

export default Card;
