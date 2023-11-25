import search from "../assets/Search.png";
import downlaod from "../assets/Downlaod.png";
import Filter from "../assets/Filter.png";
import "./style/Patients.css";
import PatientsCard from "../components/Patients/PatientsCard";
function Patients() {
  return (
    <div className="Patients">
      <div className="PatientsTitle">Patient List</div>
      <div className="PatientsSearchButtons">
        <div className="PatientsSearch">
          <img src={search} alt="" />
          <input
            placeholder="Search for something"
            className="PatientsSearchInput"
            type="text"
          />
        </div>
        <div className="PatientsSearchButtonsRight">
          <div className=" DownloadButton">
            <img src={downlaod} alt="" />
            <div className="DownloadButtonText">Download Report</div>
          </div>
          <div className="FilterButton">
            <img src={Filter} alt="" />
            <div className="FilterButtonText">Filter</div>
          </div>
        </div>
      </div>
      <div className="PatientsContainerCard">
        {" "}
        <PatientsCard />
        <PatientsCard />
        <PatientsCard />
        <PatientsCard />
        <PatientsCard />
        <PatientsCard />
        <PatientsCard />
        <PatientsCard />
        <PatientsCard />
      </div>
    </div>
  );
}

export default Patients;
