import React from "react";
import { useLocation } from "react-router-dom";
function PatientInformationCard() {
  const { state } = useLocation();
  console.log(state.weight);

  return (
    <div className="PatientInformationCard">
      <div className="PatientInformationCardTitle">Patient information</div>
      <div className="PatientInformationCardDetils">
        <div className="PatientInformationCardLeft">Weight:</div>
        <div className="PatientInformationCardRight">{state.weight}</div>
      </div>
      <div className="PatientInformationCardDetils">
        <div className="PatientInformationCardLeft">Height:</div>
        <div className="PatientInformationCardRight">160lb</div>
      </div>
      <div className="PatientInformationCardDetils">
        <div className="PatientInformationCardLeft">Blood Type:</div>
        <div className="PatientInformationCardRight">{state.bloodPressure}</div>
      </div>
      <div className="PatientInformationCardDetils">
        <div className="PatientInformationCardLeft">Blood Glucose:</div>
        <div className="PatientInformationCardRight">{state.bloodGlucose}</div>
      </div>
      <div className="PatientInformationCardDetils">
        <div className="PatientInformationCardLeft">Blood Pressure:</div>
        <div className="PatientInformationCardRight">{state.bloodPressure}</div>
      </div>
      <div className="PatientInformationCardDetils">
        <div className="PatientInformationCardLeft">Disease:</div>
        <div className="PatientInformationCardRight">160lb</div>
      </div>
      <div className="PatientInformationCardDetils">
        <div className="PatientInformationCardLeft">Alergies:</div>
        <div className="PatientInformationCardRight">160lb</div>
      </div>
    </div>
  );
}

export default PatientInformationCard;
