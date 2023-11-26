import { Link } from "react-router-dom";
import avatar from "../../assets/Avatar.png";
interface PatientData {
  name: string;
  location: string;
  weight: string;
  bloodPressure: string;
  bloodGlucose: string;
}
function PatientsCard() {
  const patientData: PatientData = {
    name: "John Smith",
    location: "123 Main St, Anytown, USA",
    weight: "165lb",
    bloodPressure: "120/80mmHg",
    bloodGlucose: "92mg/dL",
  };
  return (
    <div className="PatientsCard">
      <img src={avatar} alt="" />
      <div className="PatientsCardName">{patientData.name}</div>
      <div className="PatientsCardLocaion">{patientData.location}</div>
      <div className="PatientsCardInfo">
        <div className="PatientsCardInfoQu">Weight</div>
        <div className="PatientsCardInfoAnswar">{patientData.weight}</div>
      </div>
      <div className="PatientsCardInfo">
        <div className="PatientsCardInfoQu">Blood Pressure</div>
        <div className="PatientsCardInfoAnswar">
          {patientData.bloodPressure}
        </div>
      </div>
      <div className="PatientsCardInfo">
        <div className="PatientsCardInfoQu">Blood Glucose</div>
        <div className="PatientsCardInfoAnswar">{patientData.bloodGlucose}</div>
      </div>
      <Link
        style={{ textDecoration: "none" }}
        to="/App/PatientDetails"
        state={patientData}
        className="PatientsCardButton"
      >
        View detail patient
      </Link>
    </div>
  );
}

export default PatientsCard;
