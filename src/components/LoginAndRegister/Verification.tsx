import React, { useState, useRef } from "react";
import message from "../../assets/message.png";

import { useDispatch } from "react-redux";
import { ForgetPassword } from "../../Redux/reducer";

function Verification() {
  const dispatch = useDispatch();

  const [inputValues, setInputValues] = useState(Array(6).fill(""));
  const inputRefs = useRef(Array(6).fill(null));

  const handleInputChange = (index: number, value: string) => {
    const newInputValues = [...inputValues];
    newInputValues[index] = value;
    setInputValues(newInputValues);

    // Move to the next input if there is a value
    if (value && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    // Move to the previous input on backspace
    if (e.key === "Backspace" && index > 0 && !inputValues[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div className="ContainerForm">
      <div className="loginForm">
        <div className="SingUpTitle">
          OTP Verification <img src={message} alt="hello" />
        </div>
        <div className="SignUpDic">
          Our team already sent you an email in your inbox{" "}
          <span> seddikwalid@gamil.com </span>
          to Access back your account
        </div>
        <form action="#">
          <div className="inputs">
            {inputValues.map((value, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="tel"
                pattern="[0-9]"
                className="form-control"
                value={value}
                onChange={(e) => handleInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
              />
            ))}
          </div>
        </form>

        <button className="button-signup">Sign Up</button>
        <div className="accountText">
          Didn’t receive verification code?{" "}
          <span onClick={() => dispatch(ForgetPassword())}>Resend</span>
        </div>
      </div>
    </div>
  );
}

export default Verification;
