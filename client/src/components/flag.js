import React from "react";

const Flag = ({ handleFlagChange }) => {
  return (
    <label htmlFor="flag">
      Type in your flag name
      <input type="text" id="flag" name="flag" onChange={handleFlagChange} />
    </label>
  );
};

export default Flag;
