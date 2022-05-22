import React, { useState } from "react";

const Select = ({ locations }) => {
  return (
    <div>
      {" "}
      <select name="locations" id="location">
        {locations.map((location) => {
          return (
            <option key={location.id} value={location.title}>
              {location.title}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default Select;
