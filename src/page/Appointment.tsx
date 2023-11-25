import TableOfAppointment from "../components/Appointment/TableOfAppointment";
import "./style/Appointment.css";
import arrwo from "./../assets/Arrow - Down.png";
import calendar from "./../assets/Calendarblack.png";
import more from "./../assets/more.png";
import { useState } from "react";
function Appointment() {
  const [whoOpen, setWhoOpen] = useState(true);
  const HandelOpenttrue = () => {
    setWhoOpen(true);
  };
  const HandelOpenFalse = () => {
    setWhoOpen(false);
  };
  return (
    <div className="Appointment">
      <div className="AppointmentsTitle">Appointments</div>
      <div className="AppointmentIcons">
        <div className="AppointmentDate">
          <div className="AppointmentDateText">Jan 16, 2023</div>
          <img src={arrwo} alt="" />
        </div>

        <div className="AppointmentDate-right">
          <div
            onClick={HandelOpenttrue}
            className={`${
              whoOpen
                ? "AppointmentCalendar"
                : "AppointmentCalendar acitveBackground"
            }`}
          >
            <img src={calendar} alt="" />
          </div>
          <div
            onClick={HandelOpenFalse}
            className={`${
              whoOpen ? "Appointmentmore" : "Appointmentmore acitveBackground"
            }`}
          >
            <img src={more} alt="" />
          </div>
        </div>
      </div>
      {whoOpen ? <TableOfAppointment /> : ""}
    </div>
  );
}

export default Appointment;
