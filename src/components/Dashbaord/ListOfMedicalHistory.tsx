import LineOMH from "./LineOMH";
import MedicalHistoryCardPhone from "./MedicalHistoryCardPhone";

function ListOfMedicalHistory() {
  type typeOfStatus = {
    color: string;
    backgroundColor: string;
  };

  const success: typeOfStatus = {
    color: "#479b36",
    backgroundColor: "#cffcd4",
  };
  const Pending: typeOfStatus = {
    color: "#8B601D",
    backgroundColor: "#FFF7D0",
  };
  const Cancled: typeOfStatus = {
    color: "#981C19",
    backgroundColor: "#FFE4DB",
  };
  return (
    <div className="ListOfMedicalHistory">
      <div className="titleOfMedicalHistory">Medical History</div>
      <div className="LineOfInfo">
        <div className="theType">Patient</div>
        <div className="theType Appointment-title">Appointment</div>
        <div className="theType">Date</div>
        <div className="theType">Time</div>
        <div className="theType">Status</div>
        <div className="theType">Action</div>
      </div>

      <MedicalHistoryCardPhone name="success" Status={success} />
      <MedicalHistoryCardPhone name="Pending" Status={Pending} />
      <MedicalHistoryCardPhone name="Cancled" Status={Cancled} />
      <MedicalHistoryCardPhone name="success" Status={success} />
      <MedicalHistoryCardPhone name="success" Status={success} />
      <LineOMH name="success" Status={success} />
      <LineOMH name="Pending" Status={Pending} />
      <LineOMH name="Cancled" Status={Cancled} />
      <LineOMH name="success" Status={success} />
      <LineOMH name="success" Status={success} />
    </div>
  );
}

export default ListOfMedicalHistory;
