import PatientDetailsCard from "../components/Patients/PatientDetailsCard";
import PatientDetailsRight from "../components/Patients/PatientDetailsRight";
import PatientInformationCard from "../components/Patients/PatientInformationCard";

function PatientDetails() {
  return (
    <div className="PatientDetails">
      <div className="PatientDetailsLeft">
        <PatientDetailsCard />
        <PatientInformationCard />
      </div>
      <div className="PatientDetailsRight">
        <PatientDetailsRight />
      </div>
    </div>
  );
}

export default PatientDetails;
