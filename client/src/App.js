import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";
import SearchForm from "./components/searchForm";
import Report from "./components/report";

function App() {
  const [loading, setLoading] = useState(false);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [location, setLocation] = useState(null);
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [water, setWater] = useState(0);

  useEffect(() => {
    const url = "http://localhost:5001";
    const getLocations = async () => {
      const result = await fetch(`${url}/api/locations/${location}`);
      const json = await result.json();
      setLat(json[0].lat);
      setLng(json[0].lng);
      setWater(json[0].waterdepth);
      console.log("fetch result is ", json);
    };
    getLocations();
    console.log("date is", date);
    console.log("time is", time);
    console.log("location is", location);
    console.log("loading is", loading);
  }, [time, date, location, loading]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleLoadingChange = () => {
    date && time && location && setLoading(!loading);
  };

  return (
    <div className="App">
      <Header />
      {/* <SearchBar placeholder="Enter a location" data={LocationData} /> */}
      <SearchForm
        setDate={handleDateChange}
        setTime={handleTimeChange}
        setLocation={handleLocationChange}
        setLoading={handleLoadingChange}
      />
      {loading ? (
        <Report
          location={location}
          lat={lat}
          lng={lng}
          date={date}
          time={time}
          waterDepth={water}
        />
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default App;
