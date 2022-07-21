import "./shops.styles.scss";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ComputerIcon from "@mui/icons-material/Computer";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { shops } from "../../data/shopList";
import { useNavigate } from "react-router";
import { useState } from "react";
import { useRef } from "react";

function Shops() {
  const navigate = useNavigate();
  const [dist, setDist] = useState(0);
  const carousel = useRef();
  var val = 0;
  const next = () => {
    val -= 230;
    if (val < -210 * 4) val = 0;
    carousel.current.style.transform = `translateX(${val}px)`;
  };
  const back = () => {
    val += 230;
    if (val > 0) val = 0;
    carousel.current.style.transform = `translateX(${val}px)`;
  };
  return (
    <div className="shops">
      <div className="shops__header">
        <p
          className="back_button"
          onClick={() => navigate(-1)}
          style={{ paddingRight: 20 }}
        >
          <ArrowBackIcon />
        </p>
        <div className="shops__header-name">
          <h3>Hello Sarang</h3>
          {/* <p>Happy New Year 🎉</p> */}
        </div>
        <div className="shops__header-img">
          <img
            src="https://images.unsplash.com/photo-1450133064473-71024230f91b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3V5JTIwaW4lMjBibGFjayUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
            alt=""
          />
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div className="shops__coupons" ref={carousel}>
          {shops.slice(0, 4).map((shop, idx) => (
            <div className="shops__coupon" key={idx}>
              <img src={shop.src} alt={shop.name} className="coupon-logo" />
              <p className="coupon-name">{shop.name}</p>
              <p className="coupon-location">{shop.add}</p>
              <p className="coupon-code">{shop.code}</p>
              <div className="coupon_bottom">
                <p className="coupon-value">$ {shop.points}</p>
                <p className="coupon-expiry">Exp. 06/26</p>
              </div>
            </div>
          ))}
        </div>
        <button className="shops__coupons-back" onClick={back}>
          <ChevronLeftIcon />
        </button>
        <button className="shops__coupons-next" onClick={next}>
          <ChevronRightIcon />
        </button>
      </div>
      {/* <div className="shops__buttons">
        <div className="shops__button">
          <p className="button-icon">
            <FastfoodIcon height={36} />
          </p>
          <p className="button-name">Food</p>
        </div>
        <div className="shops__button">
          <p className="button-icon">
            <CardGiftcardIcon />
          </p>
          <p className="button-name">Gifts</p>
        </div>
        <div className="shops__button">
          <p className="button-icon">
            <CheckroomIcon />
          </p>
          <p className="button-name">Clothes</p>
        </div>
        <div className="shops__button">
          <p className="button-icon">
            <ComputerIcon />
          </p>
          <p className="button-name">Tech</p>
        </div>
      </div> */}
      <div className="shops__transactions">
        <div className="shops__transactions-header">
          <h3>Your Coupons</h3>
          {/* <ChevronRightIcon /> */}
        </div>
        <div className="shops__transactions-list">
          {shops.map((shop, idx) => (
            <div className="shops__transactions-list-item" key={idx}>
              <div className="img">
                <img src={shop.src} alt="" />
              </div>
              <div className="details">
                <p className="name">{shop.name}</p>
                <p className="expiry">Expires 02 Jan, 2002</p>
              </div>
              <p className="value">₹ {shop.points}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shops;
