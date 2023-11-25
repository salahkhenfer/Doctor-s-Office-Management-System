import DocterTableDetils from "./DocterTableDetils";
import TableTIme from "./TableTIme";

function TableOfAppointment() {
  return (
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
        <TableTIme exist={false} height="50%" borderLeft="4px solid #54A0CA" />
        <TableTIme exist={true} height="50%" borderLeft="4px solid #54A0CA" />
        <TableTIme exist={false} height="50%" borderLeft="4px solid #54A0CA" />
      </div>
      <div className="the-line-table">
        <div className="table-sep"></div>
        <div className="PST-time">10:00</div>
        <TableTIme exist={true} height="50%" borderLeft="4px solid #FBB500" />
        <TableTIme exist={false} height="50%" borderLeft="4px solid #54A0CA" />
        <TableTIme exist={true} height="90%" borderLeft="4px solid #FBB500" />
        <TableTIme exist={false} height="50%" borderLeft="4px solid #54A0CA" />
      </div>
      <div className="the-line-table">
        <div className="table-sep"></div>
        <div className="PST-time">11:00</div>
        <TableTIme exist={true} height="50%" borderLeft="4px solid #54A0CA" />
        <TableTIme exist={false} height="50%" borderLeft="4px solid #8239BC" />
        <TableTIme exist={true} height="90%" borderLeft="4px solid #54A0CA" />
        <TableTIme exist={false} height="50%" borderLeft="4px solid #54A0CA" />
      </div>
      <div className="the-line-table">
        <div className="table-sep"></div>
        <div className="PST-time">12:00</div>
        <TableTIme exist={true} height="50%" borderLeft="4px solid #54A0CA" />
        <TableTIme exist={false} height="100%" borderLeft="4px solid #12BDB2" />
        <TableTIme exist={false} height="50%" borderLeft="4px solid #8239BC" />
        <TableTIme exist={true} height="50%" borderLeft="4px solid #54A0CA" />
      </div>
      <div className="the-line-table">
        <div className="table-sep"></div>
        <div className="PST-time">13:00</div>
        <TableTIme exist={false} height="50%" borderLeft="4px solid #8239BC" />
        <TableTIme exist={true} height="50%" borderLeft="4px solid #54A0CA" />
        <TableTIme exist={false} height="50%" borderLeft="4px solid #54A0CA" />
        <TableTIme exist={false} height="50%" borderLeft="4px solid #12BDB2" />
      </div>
      <div className="the-line-table">
        <div className="table-sep"></div>
        <div className="PST-time">14:00</div>

        <TableTIme exist={false} height="50%" borderLeft="4px solid #8239BC" />
        <TableTIme exist={false} height="50%" borderLeft="4px solid #54A0CA" />
        <TableTIme exist={true} height="50%" borderLeft="4px solid #54A0CA" />
        <TableTIme exist={true} height="50%" borderLeft="4px solid #12BDB2" />
      </div>
    </div>
  );
}

export default TableOfAppointment;
