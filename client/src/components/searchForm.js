import React from "react";
import { useState } from "react";

const SearchForm = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [location, setLocation] = useState([]);
  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      <form htmlFor="search" action="localhost:5001/api" method="POST">
        <label htmlFor="location">
          Choose Your Location
          <select id="location" name="location" onChange={handleLocationChange}>
            <option value="null">Null</option>
            <option value="Dunedin">Dunedin</option>
            <option value="Auckland">Auckland</option>
            <option value="Christchurch-out">Christchurch</option>
            <option value="Wellington">Wellington</option>
          </select>
        </label>
        <label htmlFor="date">
          Choose your date
          <input
            name="date"
            id="date"
            type="date"
            onChange={handleDateChange}
          />
        </label>
        <label htmlFor="time">
          Set your time
          <input
            name="time"
            id="time"
            type="time"
            onChange={handleTimeChange}
          />
        </label>
        <br />
        <input type="submit" value="Search" />
      </form>
      <div className="display">
        <h2>Water Depth of the Location</h2>
      </div>
    </div>
  );
};

export default SearchForm;
