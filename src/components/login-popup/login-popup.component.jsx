import { Box, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "@mui/joy/Link";
import "./login-popup.styles.scss";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  AmazonLoginButton,
} from "react-social-login-buttons";
import { useNavigate } from "react-router-dom";

function LoginPopup({ open, handleClose, dest }) {
  const navigate = useNavigate();
  const loginSimul = () => {
    navigate(`/${dest}`);
  };
  return (
    <Modal open={open} onClose={handleClose}>
      <div className="login-popup">
        <CloseIcon
          fontSize="small"
          className="closeIcon"
          onClick={handleClose}
        />
        <div className="login-popup-header">
          <h4>Login Before Proceeding</h4>
        </div>
        <div className="login-popup-buttons">
          <FacebookLoginButton
            onClick={loginSimul}
            style={{ fontSize: "1em", width: "90%", height: "40px" }}
            align="center"
          />
          <GoogleLoginButton
            onClick={loginSimul}
            style={{ fontSize: "1em", width: "90%", height: "40px" }}
            align="center"
          />
          <AmazonLoginButton
            onClick={loginSimul}
            style={{ fontSize: "1em", width: "90%", height: "40px" }}
            align="center"
          />
        </div>
        {/* <img src={adBanner} alt="Ad Banner" className="adBannerImage" /> */}
        {/* <p className="ad-free">
          Wanna Enjoy Ad Free?
          <Link href="/wallet" className="ctaAction">
            Recharge Now
          </Link>
        </p> */}
      </div>
    </Modal>
  );
}

export default LoginPopup;
