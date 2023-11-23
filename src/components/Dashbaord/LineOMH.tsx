/* eslint-disable @typescript-eslint/no-unused-vars */
import user from "../../assets/avatar2.png";
import hide from "../../assets/Hide.png";
import Delete from "../../assets/Delete.png";
type typeOfStatus = {
  color: string;
  backgroundColor: string;
};
function LineOMH(props: { Status: typeOfStatus; name: string }) {
  return (
    <div className="userLine">
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
  );
}

export default LineOMH;
