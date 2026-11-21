import { FiPackage, FiShoppingCart } from "react-icons/fi";
import { MdHome, MdMessage, MdPersonOutline } from "react-icons/md";
import { Outlet, useNavigate } from "react-router-dom";
import style from "./CustomerOutLet.module.css";
function CustomerLayout() {
  const navigate = useNavigate();
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.logoCon}>
          <div className={style.logo}></div>
        </div>
        <div className={style.user}>
          <strong>Locora</strong>
        </div>
      </div>
      <div className={style.left}>
        <div className={style.buttons}>
          <button onClick={() => navigate("home")}>
            <MdHome /> Home
          </button>
          <button>
            <FiPackage /> Orders
          </button>
          <button>
            <FiShoppingCart /> Cart
          </button>
          <button>
            <MdMessage /> Messages
          </button>
          <button>
            <MdPersonOutline /> Profile
          </button>
        </div>
      </div>
      <main className={style.content}>
        <Outlet />
      </main>
      <div className={style.mobileNav}>
        <div onClick={() => navigate("home")} style={{ color: "#8e2de2" }}>
          <MdHome size={25} />
          <p style={{ marginBottom: "-5px" }}>Home</p>
        </div>
        <div onClick={() => navigate("orders")}>
          <FiPackage size={25} />
          <p style={{ marginBottom: "-5px" }}>Orders</p>
        </div>
        <div>
          <FiShoppingCart size={25} />
          <p style={{ marginBottom: "-5px" }}>Cart</p>
        </div>
        <div>
          <MdMessage size={25} />
          <p style={{ marginBottom: "-5px" }}>Message</p>
        </div>
        <div>
          <MdPersonOutline size={25} />
          <p style={{ marginBottom: "-5px" }}>Profile</p>
        </div>
      </div>
    </div>
  );
}
export default CustomerLayout;
