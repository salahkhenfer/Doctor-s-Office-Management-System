import hello from "../../assets/hello.png";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { ForgetPassword, SignUp } from "../../Redux/reducer";
function Login() {
  const dispatch = useDispatch();
  return (
    <div className="ContainerForm">
      <div className="loginForm">
        <div className="SingUpTitle">
          Welcome To Healthy 24 <img src={hello} alt="hello" />
        </div>
        <div className="SignUpDic">
          Enter your account to use healthy 24 service
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
        <div className="AgreeLogin">
          <div>
            <input
              type="checkbox"
              name="checkboxAgree"
              className="checkboxAgree"
            />
            <div className="textAgree">Remember me</div>
          </div>
          <div
            onClick={() => dispatch(ForgetPassword())}
            className="Forget-passwod"
          >
            Forget password
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
          You Already have account ?{" "}
          <span onClick={() => dispatch(SignUp())}>Sign in</span>
        </div>
      </div>
    </div>
  );
}

export default Login;
