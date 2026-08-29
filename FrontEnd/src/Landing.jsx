import { useNavigate } from "react-router-dom";
import style from "./Landing.module.css";
import landing from "./assets/landing.png";
function Landing() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.img}>
        <img src={landing} alt="" />
      </div>
      <div className={style.info}>
        <div>
          {" "}
          <div style={{ padding: "0.5em" }}>
            <h2>Everything you need,delivered to you</h2>
            <p>
              Order from Shops or local businesses and get it delivered fast and
              easy
            </p>
          </div>
          <div className={style.btnContainer}>
            <button
              onClick={() => navigate("register")}
              style={{ background: "#8800ff", color: "snow" }}
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("login")}
              style={{ color: "#8800ff" }}
            >
              LogIn
            </button>
          </div>
        </div>
      </div>
      <div className={style.logo}></div>
    </div>
  );
}
export default Landing;
