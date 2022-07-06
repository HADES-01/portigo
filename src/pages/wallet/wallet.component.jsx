import "./wallet.styles.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Wallet() {
  return (
    <div className="wallet">
      <div className="wallet__header">Sarang's Wallet</div>
      <div className="wallet__money">
        <CircularProgressbar
          styles={buildStyles({ pathColor: `#45cd56`, trailColor: "#40247c" })}
          strokeWidth={1}
          className="primary"
          value={0.4}
          maxValue={1}
        />
        <CircularProgressbar
          styles={buildStyles({ pathColor: `#f43df6`, trailColor: "#40247c" })}
          strokeWidth={1}
          className="secondary"
          value={0.7}
          maxValue={1}
        />
        <CircularProgressbar
          styles={buildStyles({ pathColor: `#ff4466`, trailColor: "#40247c" })}
          strokeWidth={1}
          className="tertiary"
          value={0.78}
          maxValue={1}
        />
        <p className="wallet__money-left">
          <span>₹</span> <br />
          <span>542</span>
        </p>
      </div>
      <div className="wallet__desc">
        <ul className="wallet__desc-list">
          <li className="wallet__desc-list-item">
            Recharges left for next coupon <br />
            <span>30</span>
          </li>
          <li className="wallet__desc-list-item">
            Recharges left for free games <br />
            <span>60</span>
          </li>
          <li className="wallet__desc-list-item">
            Time left for sceret suprise! <br />
            <span>22</span>
          </li>
        </ul>
      </div>
      <div className="wallet__buttons">
        <button>Add Money</button>
        <button>My Coupons</button>
      </div>
    </div>
  );
}

export default Wallet;
