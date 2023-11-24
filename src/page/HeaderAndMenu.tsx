import "./style/HeaderAndMenu.css";
import Notification from "../assets/Notification.png";
import Setting from "../assets/Setting.png";
import Avatar from "../assets/Avatar.png";
import plus from "../assets/plus.png";

import dashboard from "../assets/dashboard.png";
import Users from "../assets/3User.png";
import Chat from "../assets/Chat.png";
import Activity from "../assets/Activity.png";
import Calendar from "../assets/Calendar.png";
import Frame from "../assets/Frame.png";
import menoOpen from "../assets/menoOpen.png";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function HeaderAndMenu() {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    console.log(location.pathname);
  }, [location.pathname]);
  const handelMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <div className="header-menu">
        <div className="header-menu-container">
          <div className="header">
            <div className="header-Logo">
              Healthy 24.{" "}
              <span>
                <img src={plus} alt="" />
              </span>
            </div>
            <div className="header-user">
              <img className="Notification" src={Notification} alt="" />
              <img className="Setting" src={Setting} alt="" />
              <Link to="/Profile">
                <img className="Avatar" src={Avatar} alt="" />
              </Link>
            </div>
          </div>
          <div className="After-header">
            <div className="menu">
              <Link to="/" style={{ textDecoration: "none" }}>
                <div
                  className={` ${
                    location.pathname == "/" ? "menu-Item active" : "menu-Item"
                  }`}
                >
                  <img src={dashboard} alt="" />
                  <div className=" text-item "> Dashboard</div>
                </div>
              </Link>
              <Link to="/Patients" style={{ textDecoration: "none" }}>
                <div
                  className={` ${
                    location.pathname == "/Patients"
                      ? "menu-Item active"
                      : "menu-Item"
                  }`}
                >
                  <img src={Users} alt="" />
                  <div className="text-item"> Patients list</div>
                </div>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div
                  className={` ${
                    location.pathname == "/" ? "menu-Item active" : "menu-Item"
                  }`}
                >
                  <img src={Chat} alt="" />
                  <div className="text-item "> Messages</div>
                </div>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div
                  className={` ${
                    location.pathname == "/" ? "menu-Item active" : "menu-Item"
                  }`}
                >
                  <img src={Activity} alt="" />
                  <div className="text-item"> Appointment</div>
                </div>
              </Link>
              <Link to="/" style={{ textDecoration: "none" }}>
                <div
                  className={` ${
                    location.pathname == "/" ? "menu-Item active" : "menu-Item"
                  }`}
                >
                  <img src={Calendar} alt="" />
                  <div className="text-item"> Medical History </div>
                </div>
              </Link>
            </div>
            <div className="header-children">
              {" "}
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <div className="header-phone">
        <div className="header-menu-container">
          <div className="header">
            <img
              onClick={handelMenu}
              className="menu-icon"
              src={Frame}
              alt=""
            />
            <div className="title-phone"> Dashboard</div>
            <div className="Notification-contaianer">
              <img className="Notification" src={Notification} alt="" />
            </div>
          </div>

          <div className={`${openMenu ? "menu" : "menu-open"}`}>
            <div className="logoMenu">
              <img
                className="menoOpen"
                onClick={handelMenu}
                src={menoOpen}
                alt=""
              />
              <div className="header-Logo">
                Healthy 24.{" "}
                <span>
                  <img src={plus} alt="" />
                </span>
              </div>
            </div>

            <Link to="/Profile" style={{ textDecoration: "none" }}>
              <div
                className={` ${
                  location.pathname == "/Profile"
                    ? "menu-Item  active"
                    : "menu-Item"
                }`}
              >
                <img className="Img-user" src={Avatar} alt="" />
                <div className=" text-item "> Edit My Profile</div>
              </div>
            </Link>

            <Link to="/Profile" style={{ textDecoration: "none" }}>
              <div
                className={` ${
                  location.pathname == "/Notification"
                    ? "menu-Item active"
                    : "menu-Item"
                }`}
              >
                <img src={Notification} alt="" />
                <div className=" text-item Notification-menu ">
                  {" "}
                  Notifications
                </div>
              </div>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div
                className={` ${
                  location.pathname == "/Settings"
                    ? "menu-Item active"
                    : "menu-Item"
                }`}
              >
                <img src={Setting} alt="" />
                <div className=" text-item "> Settings</div>
              </div>
            </Link>
            <div className="space"></div>

            <Link to="/" style={{ textDecoration: "none" }}>
              <div
                className={` ${
                  location.pathname == "/" ? "menu-Item active" : "menu-Item"
                }`}
              >
                <img src={dashboard} alt="" />
                <div className=" text-item "> Dashboard</div>
              </div>
            </Link>

            <Link to="/Patients" style={{ textDecoration: "none" }}>
              <div
                className={` ${
                  location.pathname == "/Patients"
                    ? "menu-Item active"
                    : "menu-Item"
                }`}
              >
                <img src={Users} alt="" />
                <div className="text-item"> Patients list</div>
              </div>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div
                className={` ${
                  location.pathname == "/Messages"
                    ? "menu-Item active"
                    : "menu-Item"
                }`}
              >
                <img src={Chat} alt="" />
                <div className="text-item "> Messages</div>
              </div>
            </Link>
            <Link to="" style={{ textDecoration: "none" }}>
              <div
                className={` ${
                  location.pathname == "/Appointment"
                    ? "menu-Item active"
                    : "menu-Item"
                }`}
              >
                <img src={Activity} alt="" />
                <div className="text-item"> Appointment</div>
              </div>
            </Link>
            <Link to="" style={{ textDecoration: "none" }}>
              <div
                className={` ${
                  location.pathname == "/Medical"
                    ? "menu-Item active"
                    : "menu-Item"
                }`}
              >
                <img src={Calendar} alt="" />
                <div className="text-item"> Medical History </div>
              </div>
            </Link>
          </div>

          <div className="After-header">
            <div className="header-children">
              {" "}
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderAndMenu;
