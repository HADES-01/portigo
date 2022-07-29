import "./adBanner.styles.scss";
import { shops } from "../../data/shopList";

function AdBanner({ handleOpen }) {
  return (
    <div className="adBanner">
      <div className="adBanner__img">
        <img src={shops[0].src} alt="" />
      </div>
      <div className="adBanner__offer">
        <h4>50%* OFF on your Coffee !!!</h4>
        <p onClick={handleOpen}>Avail Now {">"}</p>
      </div>
    </div>
  );
}

export default AdBanner;
