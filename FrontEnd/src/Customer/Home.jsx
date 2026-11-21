import { FiShoppingBag } from "react-icons/fi";
import {
  MdBook,
  MdCake,
  MdHotel,
  MdHouse,
  MdLocalPharmacy,
  MdMovie,
  MdRestaurant,
  MdSearch,
  MdStar,
} from "react-icons/md";
import car from "../assets/car.png";
import food from "../assets/food.png";
import oil from "../assets/oil.png";
import shoes from "../assets/shoes.png";
import style from "./Home.module.css";
function Home() {
  return (
    <div className={style.container}>
      <div className={style.productsContainer}>
        <div className={style.searchContainer}>
          <div className={style.search}>
            <MdSearch size={25} color="grey" />{" "}
            <input type="text" placeholder="search" />
          </div>
        </div>
        <div className={style.category}>
          <div>
            <MdCake
              size={25}
              color="#F8BBD0"
              style={{
                background: "#FFF8F0",
                padding: "0.5em 1em",
                borderRadius: "5px",
              }}
            />
            <p>Bakery</p>
          </div>
          <div>
            <MdBook
              size={25}
              color="#2563EB"
              style={{
                background: "#2564eb33",
                padding: "0.5em 1em",
                borderRadius: "5px",
              }}
            />
            <p>Books</p>
          </div>
          <div>
            <MdLocalPharmacy
              size={25}
              color="#16A34A"
              style={{
                background: "#16a34a36",
                padding: "0.5em 1em",
                borderRadius: "5px",
              }}
            />
            <p>Pharmacy</p>
          </div>
          <div>
            <FiShoppingBag
              size={25}
              color="#F8BBD0"
              style={{
                background: "#FFF8F0",
                padding: "0.5em 1em",
                borderRadius: "5px",
              }}
            />
            <p>Shop</p>
          </div>

          <div>
            <MdHotel
              size={25}
              color="#1E3A8A"
              style={{
                background: "#1e3b8a2a",
                padding: "0.5em 1em",
                borderRadius: "5px",
              }}
            />
            <p>Hotel</p>
          </div>
          <div>
            <MdHouse
              size={25}
              color="#0F766E"
              style={{
                background: "#0f766d23",
                padding: "0.5em 1em",
                borderRadius: "5px",
              }}
            />
            <p>House</p>
          </div>
          <div>
            <MdRestaurant
              size={25}
              color="#DC2626"
              style={{
                background: "#dc262634",
                padding: "0.5em 1em",
                borderRadius: "5px",
              }}
            />
            <p>Restaurant</p>
          </div>
          <div>
            <MdMovie
              size={25}
              color="#F8BBD0"
              style={{
                background: "#FFF8F0",
                padding: "0.5em 1em",
                borderRadius: "5px",
              }}
            />
            <p>Movies</p>
          </div>
        </div>
        <div className={style.products}>
          <div className={style.nav}>
            <p>View All</p>
          </div>
          <div className={style.productCon}>
            <div className={style.product}>
              <div
                className={style.productImage}
                style={{ backgroundImage: `url(${food})` }}
              ></div>
              <div className={style.productInfo}>
                <div className={style.seller}>
                  <strong>Mama Restaurant</strong>
                </div>
                <div className={style.productName}>Dorowet</div>
                <div className={style.rateAndAction}>
                  <div>
                    <MdStar color="orange" />
                  </div>
                  <div>
                    <button>Order</button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className={style.product}>
              <div
                className={style.productImage}
                style={{ backgroundImage: `url(${car})` }}
              ></div>
              <div className={style.productInfo}>
                <div className={style.seller}>
                  <strong>Mama Restaurant</strong>
                </div>
                <div className={style.productName}>Dorowet</div>
                <div className={style.rateAndAction}>
                  <div>
                    <MdStar color="orange" />
                  </div>
                  <div>
                    <button>Order</button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className={style.product}>
              <div
                className={style.productImage}
                style={{ backgroundImage: `url(${oil})` }}
              ></div>
              <div className={style.productInfo}>
                <div className={style.seller}>
                  <strong>Mama Restaurant</strong>
                </div>
                <div className={style.productName}>Dorowet</div>
                <div className={style.rateAndAction}>
                  <div>
                    <MdStar color="orange" />
                  </div>
                  <div>
                    <button>Order</button>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className={style.product}>
              <div
                className={style.productImage}
                style={{ backgroundImage: `url(${shoes})` }}
              ></div>
              <div className={style.productInfo}>
                <div className={style.seller}>
                  <strong>Mama Restaurant</strong>
                </div>
                <div className={style.productName}>Dorowet</div>
                <div className={style.rateAndAction}>
                  <div>
                    <MdStar color="orange" />
                  </div>
                  <div>
                    <button>Order</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.promotionContainer}>
        <div className={style.promo}>
          <div className={style.promoInfo}>
            <p>
              {" "}
              <span style={{ color: "red" }}> 5% </span> discount on your first
              delivery!
            </p>
            <button>Order Now!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
