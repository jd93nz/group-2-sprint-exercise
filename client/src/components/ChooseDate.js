import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ChooseDate = ({ startDate, setStartDate }) => {
  return (
    <DatePicker
      selected={startDate}
      id="date"
      minDate={new Date()}
      onChange={(date) => setStartDate(date)}
      showTimeSelect
      dateFormat="MM/dd/yyyy h:mm aa"
      required
    />
  );
};
export default ChooseDate;
