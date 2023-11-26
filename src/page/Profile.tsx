import "./style/Profile.css";
import background from "../assets/backGroundUser.png";
import Avatar from "../assets/Avatar.png";
import Location from "../assets/Location.png";
import edit from "../assets/Edit.png";
import { useDispatch } from "react-redux";
import { menuHandeler } from "../Redux/reducer";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="Profile">
      <div className="user-informaion">
        <div className="background">
          <img src={background} alt="" />
        </div>
        <div className="user-info-icon">
          <img src={Avatar} alt="" />
        </div>
        <div className="box-info">
          <div className="box-info-text">
            <div className="name-user">dr. Taylor gomez </div>
            <div className="Speciality">
              Specialist of skin surgery in Moustafa bacha
            </div>
            <div className="loction-button">
              <img src={Location} alt="" />
              <div className="loction-text">Alger, Algeria</div>
            </div>
          </div>
          <Link to="/App/Profile/EditPage" style={{ textDecoration: "none" }}>
            <div
              onClick={() => dispatch(menuHandeler())}
              className="edit-button"
            >
              <img src={edit} alt="" />
              <div className="edit-text">Edit profile</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="Profile-description">
        <div className="Profile-description-title">Profile Description</div>
        <div className="Profile-description-text-dic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et aliqua. Ut enim ad minim veniam
        </div>
        <div className="Profile-description-text-dic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed to :
        </div>
        <div className="Profile-description-text">
          {" "}
          . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e
        </div>
        <div className="Profile-description-text">
          {" "}
          . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e
        </div>
        <div className="Profile-description-text">
          {" "}
          . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e
        </div>
        <div className="Profile-description-text">
          {" "}
          . Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do e
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default Profile;
