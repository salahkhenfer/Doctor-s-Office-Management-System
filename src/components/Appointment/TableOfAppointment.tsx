import { useDispatch, useSelector } from "react-redux";
import DocterTableDetils from "./DocterTableDetils";
import TableTIme from "./TableTIme";
import user from "../../assets/avatar2.png";
import blolk from "../../assets/blolk-icon.png";
import download from "../../assets/Downlaod.png";
import doc from "../../assets/doc.png";
import { AppointmentDetailHandeler, selectInfo } from "../../Redux/reducer";
import { useEffect } from "react";
function TableOfAppointment() {
  const dispach = useDispatch();
  const Info = useSelector(selectInfo);

  useEffect(() => {
    console.log(Info.AppointmentDetail);
  }, [Info.AppointmentDetail]);
  return (
    <div className="TableOfAppointment-container">
      <div className="TableOfAppointmentPhone">
        <div className="the-first-line-table">
          <div className="all-day">all day</div>
          <DocterTableDetils />
          <DocterTableDetils />
          <DocterTableDetils />
        </div>
        <div className="the-line-table">
          <div className="table-sep"></div>
          <div className="PST-time">09 AM</div>

          <TableTIme
            exist={true}
            height="100%"
            borderLeft="4px solid #54A0CA"
          />

          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #54A0CA"
          />
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #54A0CA"
          />
        </div>
        <div className="the-line-table">
          <div className="table-sep"></div>
          <div className="PST-time">10 AM</div>
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #54A0CA"
          />
          <TableTIme exist={true} height="90%" borderLeft="4px solid #FBB500" />
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #54A0CA"
          />
        </div>
        <div className="the-line-table">
          <div className="table-sep"></div>
          <div className="PST-time">11 AM</div>

          <TableTIme
            exist={false}
            height="100%"
            borderLeft="4px solid #8239BC"
          />

          <TableTIme exist={true} height="90%" borderLeft="4px solid #54A0CA" />
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #54A0CA"
          />
        </div>
        <div className="the-line-table">
          <div className="table-sep"></div>
          <div className="PST-time">12 AM</div>
          <TableTIme
            exist={false}
            height="100%"
            borderLeft="4px solid #12BDB2"
          />
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #8239BC"
          />
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #8239BC"
          />
        </div>
        <div className="the-line-table">
          <div className="table-sep"></div>
          <div className="PST-time">13 PM</div>

          <TableTIme exist={true} height="50%" borderLeft="4px solid #54A0CA" />
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #54A0CA"
          />
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #12BDB2"
          />
        </div>
        <div className="the-line-table">
          <div className="table-sep"></div>
          <div className="PST-time">14 PM</div>

          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #54A0CA"
          />
          <TableTIme exist={true} height="50%" borderLeft="4px solid #54A0CA" />
          <TableTIme exist={true} height="50%" borderLeft="4px solid #12BDB2" />
        </div>
      </div>
      {Info.AppointmentDetail && (
        <div>
          <div className="detils-of-medical">
            <div className="detils-of-medical-first">
              <div className="detils-of-medical-title">Medical History</div>
              <img
                onClick={() => {
                  dispach(AppointmentDetailHandeler());
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
      <div className="TableOfAppointment">
        <div className="the-first-line-table">
          <div className="PST">PST</div>
          <DocterTableDetils />
          <DocterTableDetils />
          <DocterTableDetils />
          <DocterTableDetils />
        </div>
        <div className="the-line-table">
          <div className="table-sep"></div>
          <div className="PST-time">09:00</div>
          <TableTIme exist={true} height="50%" borderLeft="4px solid #54A0CA" />
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #54A0CA"
          />
          <TableTIme exist={true} height="50%" borderLeft="4px solid #54A0CA" />
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #54A0CA"
          />
        </div>
        <div className="the-line-table">
          <div className="table-sep"></div>
          <div className="PST-time">10:00</div>
          <TableTIme exist={true} height="50%" borderLeft="4px solid #FBB500" />
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #54A0CA"
          />
          <TableTIme exist={true} height="90%" borderLeft="4px solid #FBB500" />
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #54A0CA"
          />
        </div>
        <div className="the-line-table">
          <div className="table-sep"></div>
          <div className="PST-time">11:00</div>
          <TableTIme exist={true} height="50%" borderLeft="4px solid #54A0CA" />
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #8239BC"
          />
          <TableTIme exist={true} height="90%" borderLeft="4px solid #54A0CA" />
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #54A0CA"
          />
        </div>
        <div className="the-line-table">
          <div className="table-sep"></div>
          <div className="PST-time">12:00</div>
          <TableTIme exist={true} height="50%" borderLeft="4px solid #54A0CA" />
          <TableTIme
            exist={false}
            height="100%"
            borderLeft="4px solid #12BDB2"
          />
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #8239BC"
          />
          <TableTIme exist={true} height="50%" borderLeft="4px solid #54A0CA" />
        </div>
        <div className="the-line-table">
          <div className="table-sep"></div>
          <div className="PST-time">13:00</div>
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #8239BC"
          />
          <TableTIme exist={true} height="50%" borderLeft="4px solid #54A0CA" />
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #54A0CA"
          />
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #12BDB2"
          />
        </div>
        <div className="the-line-table">
          <div className="table-sep"></div>
          <div className="PST-time">14:00</div>

          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #8239BC"
          />
          <TableTIme
            exist={false}
            height="50%"
            borderLeft="4px solid #54A0CA"
          />
          <TableTIme exist={true} height="50%" borderLeft="4px solid #54A0CA" />
          <TableTIme exist={true} height="50%" borderLeft="4px solid #12BDB2" />
        </div>
      </div>
    </div>
  );
}

export default TableOfAppointment;
