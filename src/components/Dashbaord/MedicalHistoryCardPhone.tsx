/* eslint-disable @typescript-eslint/no-unused-vars */
import user from "../../assets/avatar2.png";

type typeOfStatus = {
  color: string;
  backgroundColor: string;
};
function MedicalHistoryCardPhone(props: {
  Status: typeOfStatus;
  name: string;
}) {
  return (
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
  );
}

export default MedicalHistoryCardPhone;
