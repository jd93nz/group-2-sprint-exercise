import React, { useState, useEffect } from "react";
import api from "../api";
import SearchBar from "./SearchBar";

const LocationPage = () => {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getLocations();
      setLocation(data);
    };
    fetchData();
  }, []);

  console.log(location);

  return (
    <div>
      <SearchBar placeholder="Enter a location" location={location} />
    </div>
  );
};

export default LocationPage;
