import avatar from "../../assets/Avatar.png";

function AppointmentsCard() {
  return (
    <div className="AppointmentsCard">
      <div className="AppointmentsCardUserInfo">
        <img src={avatar} alt="" />
        <div className="AppointmentsCardUserInfoDetils">
          <div className="AppointmentsCardUserInfoName">Mr.John Smith </div>
          <div className="AppointmentsCardUserInfoTime">09AM - 10AM</div>
        </div>
      </div>
      <div className="AppointmentsCardUserInfodec">
        I have been experiencing frequent headaches for the past week. It's
        becoming unbearable, and I'm worried
      </div>
      <div className="AppointmentsCardButtons">
        <div className="AppointmentsCardButtonWhite">Decline Appointment</div>
        <div className="AppointmentsCardButtonBlue">Accept Appointment</div>
      </div>
    </div>
  );
}

export default AppointmentsCard;
