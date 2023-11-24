import bacground from "../assets/backGroundUser.png";
import user from "../assets/Avatar.png";
import "./style/EditPage.css";
import { useDispatch, useSelector } from "react-redux";
import { menuOpen, selectInfo } from "../Redux/reducer";
import { Link } from "react-router-dom";

function EditPage() {
  const Info = useSelector(selectInfo);
  const dispatch = useDispatch();
  const handelarChange = () => {
    dispatch(menuOpen());
  };
  console.log(window.innerWidth);

  return (
    <div className={`${Info.menu ? "EditPage  " : "EditPage-move "}`}>
      <div className="EditPage-title">Edit profile</div>
      <div className="EditPage-dec">
        Your profile will be displayed publicly so be careful what you share
      </div>
      <div className="cover-tect">Cover</div>
      <div className="background-edit">
        <img src={bacground} alt="" />
      </div>
      <div className="Profile-picture">Profile picture</div>
      <div className="handel-edit">
        <img src={user} alt="" />
        <div className="Change-photo"> Change photo</div>
        <div className="Remove-photo"> Remove </div>
      </div>
      <div className="inputs-edit">
        <div className="labal-edit"> Speciality</div>
        <input
          className="input-edit"
          type="text"
          placeholder="Inpute your speciality here"
        />
      </div>
      <div className="inputs-edit">
        <div className="labal-edit"> Full Name</div>
        <input
          className="input-edit"
          type="text"
          placeholder="Inpute your Fullname here"
        />
      </div>
      <div className="inputs-edit">
        <div className="labal-edit"> Full Name</div>
        <textarea
          className="input-edit-textarea"
          type="textarea"
          placeholder=" Inpute your Profile Desciption here"
        />
      </div>

      <div className=" save-change">
        <Link to="/Profile" style={{ textDecoration: "none" }}>
          <div onClick={handelarChange} className="Remove-photo">
            {" "}
            Cancel{" "}
          </div>
        </Link>

        <Link to="/Profile" style={{ textDecoration: "none" }}>
          <div onClick={handelarChange} className="Change-photo">
            Save Changes
          </div>
        </Link>
      </div>
    </div>
  );
}

export default EditPage;
