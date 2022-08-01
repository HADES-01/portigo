import "./analytics.styles.scss";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import AssessmentIcon from "@mui/icons-material/Assessment";
import GamesIcon from "@mui/icons-material/Games";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SellIcon from "@mui/icons-material/Sell";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Statcards from "../../components/stat-card/stat-cards.components";
import { game_data, ads_data } from "../../data/datasets";
import { useState } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

function Analytics() {
  const [select, setSelect] = useState("overall");
  return (
    <div className="analytics">
      <div className="analytics__side">
        <div className="side__header">
          <AutoGraphIcon />
          <h1>Analytics</h1>
        </div>
        <div className="side__list">
          <ul className="side__nav">
            <li
              className="side__nav-item"
              id={select === "overall" && "selected"}
              onClick={() => setSelect("overall")}
            >
              <a href="#overall"> Overall Stats </a>
            </li>
            <li
              className="side__nav-item"
              id={select === "game" && "selected"}
              onClick={() => setSelect("game")}
            >
              <a href="#gameStats">Game Stats</a>
            </li>
            <li
              className="side__nav-item"
              id={select === "coupon" && "selected"}
              onClick={() => setSelect("coupon")}
            >
              <a href="#couponStats">Coupon Stats</a>
            </li>
            <li
              className="side__nav-item"
              id={select === "ads" && "selected"}
              onClick={() => setSelect("ads")}
            >
              <a href="#adsStats">Advertisment Stats</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="analytics__main">
        <div className="overall">
          <div className="overall__header">
            <AssessmentIcon />
            <h1 id="overall">Overall Statistics</h1>
          </div>
          <div className="overall__body">
            <div className="overall__body-chart">
              <Doughnut
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
                data={game_data}
              />
              <h3>Popular Games</h3>
            </div>
            <div className="overall__body-chart">
              <Doughnut
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
                data={ads_data}
              />
              <h3>Popular Ads</h3>
            </div>
          </div>
        </div>
        <div className="overall">
          <div className="overall__header">
            <GamesIcon />
            <h1 id="gameStats">Games Statistics</h1>
          </div>
          <div
            className="overall__body"
            style={{ height: "auto", display: "initial" }}
          >
            <div className="overall__stats">
              <Statcards value={233}>
                <AccessTimeIcon />
                Total Hours Played
              </Statcards>
              <Statcards value={"COD: Mobile"}>
                <CurrencyRupeeIcon />
                Most Purchased
              </Statcards>
              <Statcards value={"Genshin Impact"}>
                <StarIcon />
                Most Played
              </Statcards>
            </div>
          </div>
        </div>
        <div className="overall">
          <div className="overall__header">
            <CardGiftcardIcon />
            <h1 id="couponStats">Coupon Statistics</h1>
          </div>
          <div
            className="overall__body"
            style={{ height: "auto", display: "initial" }}
          >
            <div className="overall__stats">
              <Statcards value={"Starbucks"}>
                <AccessTimeIcon />
                Most Used
              </Statcards>
              <Statcards value={"34%"}>
                <TouchAppIcon />
                Avg. Click Rate
              </Statcards>
              <Statcards value={"₹200"}>
                <SellIcon />
                Avg. Cost
              </Statcards>
            </div>
          </div>
        </div>
        <div className="overall">
          <div className="overall__header">
            <LiveTvIcon />
            <h1 id="adsStats">Advertisment Statistics</h1>
          </div>
          <div
            className="overall__body"
            style={{ height: "auto", display: "initial" }}
          >
            <div className="overall__stats">
              <Statcards value={"Burger King"}>
                <VisibilityIcon />
                Most Viewed
              </Statcards>
              <Statcards value={"22%"}>
                <ChangeCircleIcon />
                Conversion Rate
              </Statcards>
              <Statcards value={"₹200"}>
                <AttachMoneyIcon />
                Avg. Value
              </Statcards>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
