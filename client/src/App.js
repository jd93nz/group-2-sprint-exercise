// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import LocationData from "./LocationData.json";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar placeholder="Enter a location" data={LocationData} />
    </div>
  );
}

export default App;
