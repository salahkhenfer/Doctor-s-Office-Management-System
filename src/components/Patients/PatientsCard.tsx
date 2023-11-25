import avatar from "../../assets/Avatar.png";

function PatientsCard() {
  return (
    <div className="PatientsCard">
      <img src={avatar} alt="" />
      <div className="PatientsCardName">John Smith</div>
      <div className="PatientsCardLocaion">123 Main St, Anytown, USA</div>
      <div className="PatientsCardInfo">
        <div className="PatientsCardInfoQu">Weight</div>
        <div className="PatientsCardInfoAnswar">165lb</div>
      </div>
      <div className="PatientsCardInfo">
        <div className="PatientsCardInfoQu">Blood Pressure</div>
        <div className="PatientsCardInfoAnswar">120/80mmHg</div>
      </div>
      <div className="PatientsCardInfo">
        <div className="PatientsCardInfoQu">Blood Glucose</div>
        <div className="PatientsCardInfoAnswar">92mg/dL</div>
      </div>

      <div className="PatientsCardButton">View detail patient</div>
    </div>
  );
}

export default PatientsCard;
