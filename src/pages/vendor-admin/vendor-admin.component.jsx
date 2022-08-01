import "./vendor-admin.styles.scss";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { shops } from "../../data/shopList";
import Coupon from "../../components/coupon/coupon.component";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import InsightsIcon from "@mui/icons-material/Insights";
import Statcards from "../../components/stat-card/stat-cards.components";

function VendorAdmin() {
  const shop = shops[0];
  return (
    <div className="vendorAdmin">
      <div className="vendorAdmin__sideBar">
        <div className="info">
          <div className="info__img">
            <span className="add_icon">
              <AddPhotoAlternateIcon />
            </span>
            <img src={shop.src} alt="" />
          </div>
          <form className="info__form" onSubmit={(e) => e.preventDefault()}>
            <input
              className="info__form-input"
              type="text"
              name="Shop Name"
              placeholder="Shop Name"
              defaultValue={shop.name}
            />
            <input
              className="info__form-input"
              type="text"
              name="Shop Address"
              placeholder="Shop Address"
              defaultValue={shop.add}
            />
            <input
              className="info__form-input"
              type="text"
              name="Coupon Code"
              placeholder="Coupon Code"
              defaultValue={shop.code}
            />
            <button className="info__form-submit" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
      <div className="vendorAdmin__main">
        <div className="coupons">
          <div className="coupons__header">
            <h1>Current Coupons</h1>
          </div>
          <div className="coupons__coupons">
            <Coupon shop={shop} />
            <Coupon shop={shop} />
            <Coupon shop={shop} />
            <Coupon shop={shop} />
          </div>
        </div>
        <div className="stats">
          <div className="stats__header">
            <h1>Advertisments Stats</h1>
          </div>
          <div className="stats__stats">
            <Statcards value={45}>
              <VisibilityIcon />
              Impressions
            </Statcards>
            <Statcards value={34}>
              <TouchAppIcon />
              Clicks
            </Statcards>
            <Statcards value={23}>
              <ChangeCircleIcon />
              Conversions
            </Statcards>
            <Statcards value={323.43}>
              <CurrencyRupeeIcon />
              Cost
            </Statcards>
            <Statcards value={"34%"}>
              <InsightsIcon />
              Click Rate
            </Statcards>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VendorAdmin;
