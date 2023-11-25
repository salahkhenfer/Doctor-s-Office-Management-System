import { useDispatch } from "react-redux";
import { AppointmentDetailHandeler } from "../../Redux/reducer";

function TableTime(props: {
  exist: boolean;
  borderLeft: string;
  height: string;
}) {
  const shouldExist = props.exist !== undefined ? props.exist : false;

  const dispach = useDispatch();

  return (
    <div className="dr-table">
      {shouldExist && (
        <div
          onClick={() => {
            dispach(AppointmentDetailHandeler());
          }}
          className="CardOnTable"
          style={{ borderLeft: props.borderLeft, height: props.height }}
        >
          <div className="CardOnTableName">Cameron Williamson</div>
          <div className="CardOnTableStatus">Checked in</div>
        </div>
      )}
    </div>
  );
}

export default TableTime;
