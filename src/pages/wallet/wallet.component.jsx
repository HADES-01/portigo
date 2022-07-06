import "./wallet.styles.scss";

function Wallet() {
  return (
    <div className="wallet">
      <div className="wallet__header">Sarang's Wallet</div>
      <div className="wallet__money">
        <p className="wallet__money-left">
          ₹ <br /> 500
        </p>
      </div>
      <div className="wallet__desc">
        <ul className="wallet__desc-list">
          <li className="wallet__desc-list-item">
            Recharges left for next coupon
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Wallet;
