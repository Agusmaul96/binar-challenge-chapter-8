import React from "react";

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map((person) => (
    <div className="data">
      <div key={person.id}>
        <h2>Username : {person.username}</h2>
        <p>Email :{person.email}</p>
        <p>Experience; {person.experience}</p>
        <p>Level : {person.lvl}</p>
      </div>
    </div>
  ));
  return <div>{filtered}</div>;
}

export default SearchList;
