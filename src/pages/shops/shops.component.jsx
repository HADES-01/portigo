import { useState } from "react";
import "./shops.styles.scss";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import ComputerIcon from "@mui/icons-material/Computer";

function Shops() {
  const [selected, setSelected] = useState(true);
  const shops = [
    {
      name: "Starbucks",
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
      add: "Shop No 14 | GATE 2",
      points: 3450,
    },
    {
      name: "Pizza Hut",
      src: "https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/2177px-Pizza_Hut_logo.svg.png",
      add: "Shop No 16 | GATE 3",
      points: 345,
    },
    {
      name: "Burger King",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Burger_King_1969_logo.svg/1200px-Burger_King_1969_logo.svg.png",
      add: "Shop No 20 | GATE 1",
      points: 2186,
    },
    {
      name: "McDonald's",
      src: "https://upload.wikimedia.org/wikipedia/commons/3/32/McDonald%27s_1968_logo.png",
      add: "Shop No 26 | GATE 2",
      points: 4995,
    },
    {
      name: "Taco Bell",
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b3/Taco_Bell_2016.svg/1200px-Taco_Bell_2016.svg.png",
      add: "Shop No 22 | GATE 2",
      points: 865,
    },
    {
      name: "Haldiram's",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Haldiram%27s_Logo_SVG.svg/1200px-Haldiram%27s_Logo_SVG.svg.png",
      add: "Shop 10 | Gate 3",
      points: 789,
    },
    {
      name: "Pizza Hut",
      src: "https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/2177px-Pizza_Hut_logo.svg.png",
      add: "Shop No 16 | GATE 3",
      points: 345,
    },
    {
      name: "Starbucks",
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png",
      add: "Shop No 14 | GATE 2",
      points: 3450,
    },
  ];
  return (
    <div className="shops">
      <div className="shops__header">
        <h1>AIR Wallet</h1>
      </div>
      <div className="shops__container">
        <div className="shops__tabs">
          <h3
            className={`${selected && "selected"} `}
            onClick={() => setSelected(true)}
          >
            Coupons
          </h3>
          <h3
            className={`${!selected && "selected"} `}
            onClick={() => setSelected(false)}
          >
            Wallet
          </h3>
        </div>
        <div className="shops__list">
          {shops.map((shop, idx) => (
            <div className="shops__list-item" key={idx}>
              <img src={shop.src} alt="starbucks" />
              <div className="shops__info">
                <h6>{shop.name}</h6>
                <p>{shop.add}</p>
              </div>
              <p>{shop.points} pts</p>
            </div>
          ))}
        </div>
      </div>
      <div className="shops__buttons">
        <button className="selected">
          <FastfoodIcon /> <br />
          Food
        </button>
        <button>
          <CheckroomIcon />
          <br />
          Clothes
        </button>
        <button>
          <CardGiftcardIcon />
          <br />
          Gifts
        </button>
        <button>
          <ComputerIcon />
          <br/>
          Tech
        </button>
      </div>
    </div>
  );
}

export default Shops;
