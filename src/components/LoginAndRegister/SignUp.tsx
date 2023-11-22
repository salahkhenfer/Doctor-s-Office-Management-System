import React from "react";
import hello from "../../assets/hello.png";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import "../../page/LoginOrSignup";
function SignUp() {
  return (
    <div className="ContainerForm">
      <div className="loginForm">
        <div className="SingUpTitle">
          Sing up your account <img src={hello} alt="hello" />
        </div>
        <div className="SignUpDic">
          Let’s Enter your data to continue use healthy 24 services
        </div>
        <div className="input">
          <div className="TitleOfInput">fullname</div>
          <input type="text" id="username" placeholder="Enter Your name here" />
        </div>
        <div className="input">
          <div className="TitleOfInput">Email</div>
          <input type="email" id="Email" placeholder="Enter Your Email here" />
        </div>
        <div className="input">
          <div className="TitleOfInput">password</div>
          <input
            type="password"
            id="Password"
            placeholder="Enter Your Password here"
          />
        </div>
        <div className="Agree">
          <input
            type="checkbox"
            name="checkboxAgree"
            className="checkboxAgree"
          />
          <div className="textAgree">
            by sign up to healthy 24 you agree all <span> term </span> and
            <span> condition</span>
          </div>
        </div>
        <button className="button-signup">Sign Up</button>
        <div className="or">or</div>
        <button className="SinInButton">
          <FaGoogle className="sinIn-icon" /> <div>Sign Up with google</div>
        </button>
        <button className="SinInButton">
          <FaFacebookF className="sinIn-icon" />{" "}
          <div>Sign Up with facebook</div>
        </button>
        <div className="accountText">
          You Already have account ? <span>Sign in</span>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
