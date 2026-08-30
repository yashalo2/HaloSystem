import { useNavigate } from "react-router-dom";
import style from "./Login-Registration.module.css";
function Login() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <div className={style.img} onClick={() => navigate("/")}></div>
      </div>
      <div className={style.formContainer}>
        <form className={style.form}>
          <h2>Login</h2>
          <div className={style.div}>
            <label> Phone Number</label>
            <input type="text" />
          </div>

          <div className={style.div}>
            <label> Password</label>
            <input type="password" />
          </div>
          <div className={style.div}>
            <label style={{ marginBottom: "10px" }}>
              {" "}
              don't have account ? <a href="register">Register</a>
            </label>
            <button
              style={{ background: "#8e2de2" }}
              onClick={() => navigate("/customer/home")}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
