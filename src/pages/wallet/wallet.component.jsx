import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import SearchIcon from "@mui/icons-material/Search";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Link from "@mui/joy/Link";
import "./wallet.styles.scss";
import { useState } from "react";
import { shops } from "../../data/shopList";
import { useNavigate } from "react-router";

function Wallet({ money, addMoney }) {
  const [id, setId] = useState("primary");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  const inc = () => {
    addMoney(money + 30);
  };
  const dec = () => {
    if (money - 30 >= 0) addMoney(money - 30);
  };
  return (
    <div className="wallet" id={id}>
      <div className="wallet__header">
        <p className="back_button" onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </p>
        <h3>Sarang's Wallet</h3>
        <p>
          <MoreVertIcon />
        </p>
      </div>
      <div className="wallet__money">
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
              Balance
              {/* <ArrowDropDownIcon /> */}
            </h3>
            <p className="value">
              <RemoveIcon
                id="subtract-icon"
                disabled={money - 30 >= 0}
                onClick={dec}
              />
              <span>₹</span>
              {money}
              <AddIcon id="add-icon" onClick={inc} />
            </p>
            {/* <p>Out of $8684</p> */}
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
              value={id === "primary" ? 20 : id === "accent" ? 40 : 60}
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
          <span
            onClick={() => {
              setOpen(!open);
            }}
          >
            {!open ? <SearchIcon /> : <ExpandLessIcon />}
          </span>
        </div>
        {open && (
          <div className="wallet__history-search">
            <input
              type="text"
              placeholder="Search Your Transactions ...."
              value={search}
              onChange={onChange}
            />
          </div>
        )}
        <div className="shops__transactions-list">
          {shops
            .filter((shop) =>
              shop.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((shop, idx) => (
              <div className="shops__transactions-list-item" key={idx}>
                <div className="img">
                  <img src={shop.src} alt="" />
                </div>
                <div className="details">
                  <p className="name">{shop.name}</p>
                  <p className="expiry">02 Jan, 2002</p>
                </div>
                <p className="value">₹ {shop.points}</p>
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
