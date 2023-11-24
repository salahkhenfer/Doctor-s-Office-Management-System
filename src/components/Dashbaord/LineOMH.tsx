/* eslint-disable @typescript-eslint/no-unused-vars */
import user from "../../assets/avatar2.png";
import hide from "../../assets/Hide.png";
import blolk from "../../assets/blolk-icon.png";
import Delete from "../../assets/Delete.png";
import download from "../../assets/Downlaod.png";
import doc from "../../assets/doc.png";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openDetilsHandeler, selectInfo } from "../../Redux/reducer";
type typeOfStatus = {
  color: string;
  backgroundColor: string;
};

function LineOMH(props: { Status: typeOfStatus; name: string }) {
  const dispach = useDispatch();
  const Info = useSelector(selectInfo);
  useEffect(() => {
    console.log(Info.openDetils);
  }, [Info.openDetils]);

  return (
    <div>
      <div
        onClick={() => {
          dispach(openDetilsHandeler());
        }}
        className="userLine  "
      >
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
      {/* <div className=" MedicalHistoryCardPhone">
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
      </div> */}
      {!Info.openDetils && (
        <div className=" MedicalHistoryCardPhone">
          <div
            onClick={() => {
              dispach(openDetilsHandeler());
            }}
            className="userLine-phone"
          >
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
      )}
      {Info.openDetils && (
        <div>
          <div className="detils-of-medical">
            <div className="detils-of-medical-first">
              <div className="detils-of-medical-title">Medical History</div>
              <img
                onClick={() => {
                  dispach(openDetilsHandeler());
                }}
                src={blolk}
                alt=""
              />
            </div>
            <div className="Payment-detail-text">Patient information</div>

            <div className="detils-user-info">
              <img src={user} alt="" />
              <div className="detils-user-info-text">
                <div className="detils-user-info-name">Mr.seddik Mounir</div>
                <div className="detils-user-info-location">
                  Oran , es senia 310009
                </div>
              </div>
            </div>
            <div className="Payment-detail-box">
              <div className="Payment-detail-text">Payment Detail</div>
              <div className="Payment-detail-info">
                <div className="text">From</div>
                <div className="text">Pay with</div>
              </div>
              <div className="Payment-detail-answar">
                <div className="answar">Oran Bank</div>
                <div className="answar">Debit Card</div>
              </div>
              <div className="Payment-detail-info">
                <div className="text">Pay on</div>
                <div className="text">Statu payment</div>
              </div>
              <div className="Payment-detail-answar">
                <div className="answar">Jan 12, 2023 At 09:00 aM</div>

                <div className="Status" style={props.Status}>
                  {props.name}
                </div>
              </div>
            </div>
            <div className="Payment-detail-text">INTIAL PAYMENT</div>
            <div className="inital-payment-box">
              <div className="inital-payment-line">
                <div className="inital-payment-title">Medical check-up</div>
                <div className="inital-payment-prix">$500</div>
              </div>

              <div className="inital-payment-line">
                <div className="inital-payment-title">Medicine</div>
                <div className="inital-payment-prix">$500</div>
              </div>
              <div className="inital-payment-sep">
                ------------------------------------------
              </div>
              <div className="inital-payment-line">
                <div className="inital-payment-title">Medical check-up</div>
                <div className="inital-payment-prix">$500</div>
              </div>
              <div className="inital-payment-line">
                <div className="inital-payment-title">Medicine</div>
                <div className="inital-payment-prix">$500</div>
              </div>
              <div className="inital-payment-sep">
                ------------------------------------------
              </div>
            </div>
            <div className="inital-payment-line">
              <div className="inital-payment-title-total">Grandtotal</div>
              <div className="inital-payment-prix-total">$500</div>
            </div>
            <div className="inital-payment-documentation">Documentation</div>
            <div className="upload-doc-box">
              <div className="upload-doc-info">
                <img src={doc} alt="" />
                <div className="upload-doc-text"> Medical-invoice.pdf</div>
              </div>
              <img className="upload-doc-download" src={download} alt="" />
            </div>
          </div>
          <div className="hide-of-medical"></div>
        </div>
      )}
    </div>
  );
}

export default LineOMH;
