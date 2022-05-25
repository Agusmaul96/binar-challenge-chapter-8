import React, { useState } from "react";
import SearchList from "./SearchList";
import "./style/Search.css";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredPersons = details.filter((person) => {
    return person.username.toLowerCase().includes(searchField.toLowerCase()) || person.email.toLowerCase().includes(searchField.toLowerCase());
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
    if (e.target.value === "") {
      setSearchShow(false);
    } else {
      setSearchShow(true);
    }
  };

  function searchList() {
    if (searchShow) {
      return <SearchList filteredPersons={filteredPersons} />;
    }
  }

  return (
    <section className="topnav">
      <div className="search-container">
        <input className="input" type="search" placeholder="Search player ...." onChange={handleChange} />
        <button type="submit">
          <i class="">Search Player</i>
        </button>
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
