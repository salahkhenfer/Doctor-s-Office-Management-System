import { useState } from "react";
import hello from "../../assets/hello.png";

import { useDispatch } from "react-redux";
import { Login, Verification } from "../../Redux/reducer";

function ForgetPassword() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = () => {
    // Simple email validation logic, you can customize this according to your requirements
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSendVerification = () => {
    if (validateEmail()) {
      dispatch(Verification());
    }
  };

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
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="Email"
            placeholder="Enter Your Email here"
          />
          {emailError && <div className="error">{emailError}</div>}
        </div>

        <button onClick={handleSendVerification} className="button-signup">
          Send Message
        </button>
        <div className="accountText">
          You Already have account ?{" "}
          <span onClick={() => dispatch(Login())}>Login</span>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
