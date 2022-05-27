import React, { useState } from "react";
import SearchList from "./SearchList";
import "./style/Search.css";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");
  const [searchShow, setSearchShow] = useState(false);

  const filteredPersons = details.filter((person) => {
    return (
      person.username.toLowerCase().includes(searchField.toLowerCase()) ||
      person.email.toLowerCase().includes(searchField.toLowerCase()) ||
      person.experience.toLowerCase().includes(searchField.toLowerCase()) ||
      person.lvl.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };
  const onClick = (event) => {
    event.preventDefault();
    if (searchField) {
      setSearchShow(true);
    }
  };
  function searchList() {
    if (searchShow) {
      return <SearchList filteredPersons={filteredPersons} />;
    }
  }

  function searchList() {
    if (searchShow) {
      return <SearchList filteredPersons={filteredPersons} />;
    }
  }

  return (
    <section className="topnav">
      <div className="search-container">
        <input className="input" type="search" placeholder="Search player ...." onChange={handleChange} />
        <button type="submit" onClick={onClick}>
          <i class="">Search Player</i>
        </button>
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
