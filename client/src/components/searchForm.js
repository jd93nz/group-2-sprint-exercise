import React from "react";
// import { useState } from "react";

const SearchForm = ({ setDate, setTime, setLocation, setLoading }) => {
  return (
    <div>
      <form htmlFor="search" action="localhost:5001/api" method="POST">
        <label htmlFor="location">
          Choose Your Location
          <select id="location" name="location" onChange={setLocation}>
            <option value="null">Null</option>
            <option value="Dunedin">Dunedin</option>
            <option value="Auckland">Auckland</option>
            <option value="Christchurch">Christchurch</option>
            <option value="Wellington">Wellington</option>
          </select>
        </label>
        <label htmlFor="date">
          Choose your date
          <input name="date" id="date" type="date" onChange={setDate} />
        </label>
        <label htmlFor="time">
          Set your time
          <input name="time" id="time" type="time" onChange={setTime} />
        </label>
        <br />
        <input type="submit" value="Search" onClick={setLoading} />
      </form>
      <div className="display"></div>
    </div>
  );
};

export default SearchForm;
