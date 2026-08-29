import { useNavigate } from "react-router-dom";
import style from "./Login-Registration.module.css";
function Register() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.logo}>
        <div className={style.img} onClick={() => navigate("/")}></div>
      </div>
      <div className={style.formContainer}>
        <form className={style.form}>
          <h2>Register</h2>
          <div className={style.div}>
            <label> Phone Number</label>
            <input type="text" />
          </div>
          <div className={style.div}>
            <label> First Name</label>
            <input type="text" />
          </div>
          <div className={style.div}>
            <label> Middle Name</label>
            <input type="text" />
          </div>
          <div className={style.div}>
            <label> Last Name</label>
            <input type="text" />
          </div>
          <div className={style.div}>
            <label> Password</label>
            <input type="password" />
          </div>
          <div className={style.div}>
            <label style={{ marginBottom: "10px" }}>
              {" "}
              i already have account ? <a href="login">Login</a>
            </label>
            <button>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Register;
