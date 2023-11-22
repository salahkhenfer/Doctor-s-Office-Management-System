import React from "react";

import hello from "../../assets/hello.png";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
function ForgetPassword() {
  return (
    <div className="ContainerForm">
      <div className="loginForm">
        <div className="SingUpTitle">
          Forget Password <img src={hello} alt="hello" />
        </div>
        <div className="SignUpDic">
          Enter your email to recover password Enter your email to recover
          password{" "}
        </div>

        <div className="input">
          <div className="TitleOfInput">Email</div>
          <input type="email" id="Email" placeholder="Enter Your Email here" />
        </div>

        <div className="AgreeLogin">
          <div className="checkboxAgree">
            <input type="checkbox" name="checkboxAgree" />
            <div className="textAgree">Remember me</div>
          </div>
          <div className="Forget-passwod">Forget password</div>
        </div>
        <button className="button-signup">Sign Up</button>
      </div>
    </div>
  );
}

export default ForgetPassword;
