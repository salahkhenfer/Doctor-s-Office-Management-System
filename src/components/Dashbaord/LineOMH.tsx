/* eslint-disable @typescript-eslint/no-unused-vars */
import user from "../../assets/avatar2.png";
import hide from "../../assets/Hide.png";
import Delete from "../../assets/Delete.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openDetilsHandeler, selectInfo } from "../../Redux/reducer";
type typeOfStatus = {
  color: string;
  backgroundColor: string;
};

function LineOMH(props: { Status: typeOfStatus; name: string }) {
  const dispach = useDispatch();
  const Info = useSelector(selectInfo);
  useEffect(() => {
    console.log(Info.openDetils);
  }, [Info.openDetils]);

  return (
    <div
      onClick={() => {
        dispach(openDetilsHandeler());
      }}
    >
      <div className="userLine ">
        <div className="img-container">
          <img src={user} alt="" />
          <div className="userLineInfo">
            <div className="Fullname">Sarah Lee</div>
            <div className="Code"> #DOC6353</div>
          </div>
        </div>
        <div className="Appointment-m">Monthly Medical Check-up</div>
        <div className="date-m">Dec 22,2023</div>
        <div className="time">12:00 Pm</div>
        <div className="Status" style={props.Status}>
          {props.name}
        </div>
        <div className="Action">
          <img className="icon-status" src={hide} alt="" />
          <img className="icon-status" src={Delete} alt="" />
        </div>
      </div>
      <div className=" MedicalHistoryCardPhone">
        <div className="userLine-phone">
          <div className="img-container">
            <img src={user} alt="" />
            <div className="userLineInfo">
              <div className="Fullname">Sarah Lee</div>
              <div className="Code"> #DOC6353</div>
            </div>
          </div>
          <div className="Status" style={props.Status}>
            {props.name}
          </div>
        </div>
        <div className="line-phone">
          <div className="Patient">Patient</div>
          <div className="Appointment-m">Monthly Medical Check-up</div>
        </div>
        <div className="line-phone-re-bg">
          <div className="Patient">Date</div>
          <div className="Appointment-m"> 12:00 Pm</div>
        </div>
        <div className="line-phone-re-bg">
          <div className="Patient">Time</div>
          <div className="Appointment-m"> Dec 22,2023</div>
        </div>
        <div className="line-phone">
          <div className="Patient">Total</div>
          <div className="Appointment-m">$520</div>
        </div>
        <div className="line-phone-re-bg">
          <div className="Patient">Pay with</div>
          <div className="Appointment-m">Oran Bank</div>
        </div>
      </div>
      {Info.openDetils && (
        <div>
          <div className="detils-of-medical"></div>
          <div className="hide-of-medical"></div>
        </div>
      )}
    </div>
  );
}

export default LineOMH;
