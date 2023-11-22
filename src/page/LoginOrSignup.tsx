import { useEffect, useState } from "react";

import wink from "../assets/wink.png";
import card from "../assets/card review.png";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";

import "./style/LoginOrSignup.css";
import Login from "../components/LoginAndRegister/Login";
import ForgetPassword from "../components/LoginAndRegister/ForgetPassword";
import Verification from "../components/LoginAndRegister/Verification";
import SignUp from "../components/LoginAndRegister/SignUp";

import { selectUser } from "../Redux/reducer";
import { useSelector } from "react-redux";

function LoginOrSginin() {
  const { registerPage } = useSelector(selectUser);
  const [userState, setUserState] = useState(<SignUp />);
  console.log(registerPage);
  useEffect(() => {
    if (registerPage === "Login") {
      setUserState(<Login />);
    } else if (registerPage === "ForgetPassword") {
      setUserState(<ForgetPassword />);
    } else if (registerPage === "SignUp") {
      setUserState(<SignUp />);
    } else if (registerPage === "Verification") {
      setUserState(<Verification />);
    }
  }, [registerPage]);

  return (
    <div className="page-login">
      <div className="containerLogin ">
        {userState}

        <div className="photo-right">
          <div className="photo-container">
            <div className="title-img">
              <div>We give the best experience</div>
              <img src={wink} alt="" />
            </div>
            <div className="dicOfImage">
              <div>
                Dedicated virtual consulting platform for docotrs and patients
                to help them consult across vatious channels
              </div>
            </div>
            <div className="img-review">
              <div>
                <img className="up" src={card} />
              </div>
              <div>
                <img className="down" src={card} />
              </div>
            </div>
            <div className="persons">
              <img className="person2" src={person2} alt="" />
              <img className="person3" src={person3} alt="" />
              <img className="person1" src={person1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginOrSginin;
