import React from "react";
import "../assets/css/Homepage.css";
import DatePicker from "./DatePicker";
import EmployeeDropDown from "./EmployeeDropDown";

const Homepage = () => {
 
  return (
    <div className="row">
      <div className="column">
        <EmployeeDropDown />
      </div>

      <div className="column">
        <DatePicker /> 
      </div>
    </div>
  );
};

export default Homepage;
