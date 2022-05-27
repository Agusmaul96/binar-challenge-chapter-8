import React from "react";
import "./style/Table.css";

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map((person) => (
    <div className="table">
      <thead>
        <tr>
          <td>NO</td>
          <td>Username</td>
          <td>Email</td>
          <td>Experience</td>
          <td>lvl</td>
        </tr>
      </thead>
      <tbody>
        <tr key={person.id}>
          <td>{person.id}</td>
          <td> {person.username}</td>
          <td>{person.email}</td>
          <td>{person.experience}</td>
          <td>{person.lvl}</td>
        </tr>
      </tbody>
    </div>
  ));
  return <div>{filtered}</div>;
}

export default SearchList;
