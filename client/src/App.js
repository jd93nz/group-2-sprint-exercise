import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ChooseDate from "./components/ChooseDate";
import Select from "./components/Select";
import Message from "./components/Message";
import getLocations from "./getLocations";
import checkWaterDepth from "./checkWaterDepth";

function App() {
  const [locations, setLocations] = useState();
  const [locationData, setLocationData] = useState({});
  const [waterDepth, setWaterDepth] = useState();
  const [startDate, setStartDate] = useState(new Date());

  const getLocationInfo = () => {
    const location = document.getElementById("location").value;
    let lData = locations.filter((obj) => {
      if (obj.title === location) {
        return true;
      } else {
        return false;
      }
    });
    setLocationData(lData[0]);
    if (locationData !== undefined) {
      checkWaterDepth(setWaterDepth, locationData, startDate);
    }
  };

  useEffect(() => {
    getLocations(setLocations);
  }, []);

  return (
    <Fragment>
      <Header />
      <div>
        {" "}
        <form>
          <label htmlFor="locations">Choose a location : </label>
          {locations && <Select locations={locations} />}
          <label htmlFor="date">Date</label>
          <ChooseDate startDate={startDate} setStartDate={setStartDate} />
          <input type="button" value="Submit" onClick={getLocationInfo} />
        </form>
      </div>

      {waterDepth && locationData && (
        <Message
          waterDepth={waterDepth}
          locationData={locationData}
          startDate={startDate}
        />
      )}
    </Fragment>
  );
}

export default App;
