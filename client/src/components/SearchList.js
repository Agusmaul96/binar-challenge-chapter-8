import React from "react";
import ShowData from "./ShowData";

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map((person) => <ShowData key={person.id} person={person} />);
  return <div>{filtered}</div>;
}

export default SearchList;
