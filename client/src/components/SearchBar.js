import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ placeholder, location }) {
  const [filteredData, setFilteredData] = useState([]);
  const [focused, setFocused] = useState(false);
  const [wordEntered, setWordEntered] = useState("");
  const onBlur = () => {
    if (focused) {
      setTimeout(() => {
        setFocused(false);
      }, 200);
    }
  };

  const handleFocus = (e) => {
    e.preventDefault();
    setFocused(true);
    setFilteredData(location);
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = location.filter((value) => {
      return value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData(location);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
          onFocus={handleFocus}
          onBlur={onBlur}
        />
      </div>
      {focused && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <button className="dataItem" key={key}>
                {value.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
