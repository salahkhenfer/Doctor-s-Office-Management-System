import TableOfAppointment from "../components/Appointment/TableOfAppointment";
import "./style/Appointment.css";
import arrwo from "./../assets/Arrow - Down.png";
import calendar from "./../assets/Calendarblack.png";
import more from "./../assets/more.png";
function Appointment() {
  return (
    <div className="Appointment">
      <div className="AppointmentsTitle">Appointments</div>
      <div className="AppointmentIcons">
        <div className="AppointmentDate">
          <div className="AppointmentDateText">Jan 16, 2023</div>
          <img src={arrwo} alt="" />
        </div>
        <div className="AppointmentCalendar">
          <img src={calendar} alt="" />
        </div>
        <div className="Appointmentmore">
          <img src={more} alt="" />
        </div>
      </div>
      <TableOfAppointment />
    </div>
  );
}

export default Appointment;
