import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import Link from "@mui/joy/Link";
import "./wallet.styles.scss";
import { useState } from "react";
import { shops } from "../../data/shopList";

function Wallet() {
  const [id, setId] = useState("primary");
  return (
    <div className="wallet">
      <div className="wallet__header">
        <p>
          <ArrowBackIcon />
        </p>
        <h3>Sarang's Wallet</h3>
        <p>
          <MoreVertIcon />
        </p>
      </div>
      <div className="wallet__money" id={id}>
        <CircularProgressbarWithChildren
          value={100}
          circleRatio={0.75}
          styles={buildStyles({
            rotation: 1 / 2 + 1 / 8,
            strokeLinecap: "round",
          })}
        >
          <div className="wallet__money-expenses">
            <h3>
              Balance <ArrowDropDownIcon />
            </h3>
            <p className="value">
              <span>$</span>1,684
            </p>
            <p>Out of $8684</p>
          </div>
          <div className="wallet__money-filters">
            <p
              className={id === "accent" && "selected"}
              onClick={() => setId("accent")}
            >
              W
            </p>
            <p
              className={id === "primary" && "selected"}
              onClick={() => setId("primary")}
            >
              M
            </p>
            <p
              className={id === "accent-2" && "selected"}
              onClick={() => setId("accent-2")}
            >
              Y
            </p>
          </div>
          <div id="inner" style={{ width: "94%" }}>
            <CircularProgressbar
              value={20}
              width={"90%"}
              strokeWidth={2}
              circleRatio={0.75}
              styles={buildStyles({
                rotation: 1 / 2 + 1 / 8,
                strokeLinecap: "round",
              })}
            />
          </div>
        </CircularProgressbarWithChildren>
      </div>
      <div className="wallet__history">
        <div className="wallet__history-header">
          <h3>History</h3>
          <SearchIcon />
        </div>
        <div className="shops__transactions-list">
          {shops.map((shop, idx) => (
            <div className="shops__transactions-list-item" key={idx}>
              <div className="img">
                <img src={shop.src} alt="" />
              </div>
              <div className="details">
                <p className="name">{shop.name}</p>
                <p className="expiry">02 Jan, 2002</p>
              </div>
              <p className="value">$ {shop.points}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="wallet__button">
        <Link href="./shops">
          <button>Get Coupons</button>
        </Link>
      </div>
    </div>
  );
}

export default Wallet;
