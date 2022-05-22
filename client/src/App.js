import React from "react";
import "./App.css";
import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
import SearchForm from "./components/searchForm";

function App() {
  const url = "http://localhost:5001";
  const getLocations = async () => {
    const result = await fetch(`${url}/api/locations`);
    const json = await result.json();
    return json;
  };

  return (
    <div className="App">
      <Header />
      {/* <SearchBar placeholder="Enter a location" data={LocationData} /> */}
      <SearchForm />
    </div>
  );
}

export default App;
