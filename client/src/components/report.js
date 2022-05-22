import React from "react";

const Report = ({ location, lat, lng, date, time, waterDepth }) => {
  return (
    <div>
      <h2>Location is {location}</h2>
      <h2>Latitude is {lat}</h2>
      <h2>Longitude is {lng}</h2>
      <h2>Date is {date}</h2>
      <h2>Time is {time}</h2>
      <h2>Water Depth is {waterDepth}</h2>
    </div>
  );
};
export default Report;
