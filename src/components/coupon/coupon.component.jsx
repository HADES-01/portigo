import "./coupon.styles.scss";

function Coupon({ shop }) {
  return (
    <div className="coupon">
      <div className="coupon-header">
        <img src={shop.src} alt={shop.name} className="coupon-logo" />
        <div className="coupon-header-right">
          <h2 className="coupon-name">{shop.name}</h2>
          <p className="coupon-value">$ {shop.add}</p>
        </div>
      </div>
      <div className="coupon-body">
        <hr className="hrs horizontal" />
        <hr className="hrs vertical" />
        <p className="coupon-info">
          <span>sold</span> 45
        </p>
        <p className="coupon-expiry">
          <span>used</span> 32
        </p>
        <p className="coupon-location">
          <span>Value</span> {shop.points}
        </p>
        <p className="coupon-code">
          <span>Code</span> {shop.code}
        </p>
      </div>
    </div>
  );
}

export default Coupon;
