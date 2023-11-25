import avatar from "../../assets/Avatar.png";
function DocterTableDetils() {
  return (
    <div className="dr-table">
      <img src={avatar} alt="" />
      <div className="dr-table-info">
        <div className="name-of-dr">Bianca Heath </div>
        <div className="specilty-of-dr">Nurse practitioner </div>
      </div>
      <div className="dr-tablePhone">tue 1/12</div>
    </div>
  );
}

export default DocterTableDetils;
