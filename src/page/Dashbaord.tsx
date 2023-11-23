import React, { useEffect } from "react";
import Chart from "../components/Dashbaord/Chart";
import "./style/Dashbaord.css";
import Calendar from "../components/Dashbaord/Calendar";
import ListOfMedicalHistory from "../components/Dashbaord/ListOfMedicalHistory";
import { FaDAndD } from "react-icons/fa";
function Dashbaord() {
  return (
    <div>
      <div className="first-Container">
        <div className="left">
          <div className="title-Dashboard">Welcome back Dr. Taylor!</div>
          <Chart />
        </div>
        <Calendar />
      </div>
      <ListOfMedicalHistory />
    </div>
  );
}

export default Dashbaord;
