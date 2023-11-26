import { Link, useLocation } from "react-router-dom";
import avatar from "../../assets/Avatar.png";

function PatientDetailsCard() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="PatientDetailsCard">
      <div className="PatientDetailsCardImg">
        <img src={avatar} alt="" />
      </div>
      <div className="PatientDetailsCardName"> {state.name}</div>
      <div className="PatientDetailsCardID">
        {" "}
        Patient ID <span>#DOC6353</span>
      </div>
      <div className="PatientDetailsCardLoction">{state.location}</div>
      <div className="PatientDetailsCardNumber">
        <div className="PatientDetailsCardNumberPart">
          <div>15</div>
          <div>Completed</div>
        </div>
        <div className="PatientDetailsCardNumberPart">
          <div>16</div>
          <div>Appointment</div>
        </div>
      </div>
      <Link to="/App/Messages" style={{ textDecoration: "none" }}>
        <div className="PatientDetailsCardButton">Message patient</div>
      </Link>
    </div>
  );
}

export default PatientDetailsCard;
