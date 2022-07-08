import React from "react";
import { Link } from "react-router-dom";
import controller from "../../assets/controller.webp";
import Logo from "../../components/logo/logo.component";
import Logo3 from "../../assets/splash.png";
import Logo2 from "../../assets/GMR_logo.png";
import "./home.styles.scss";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <h4>Portigo</h4>
        <img src={Logo2} alt="logo2" />
      </div>
      <div className="home__banner">
        {/* <Logo /> */}
        <img src={Logo3} alt="" />
      </div>
      <div className="home__desc">
        <h3>Easiest way to game on your device</h3>
        <p>
          From Casual to AAA. <br /> All games on your device.
        </p>
      </div>
      <div className="home__link">
        <Link to="/library">Get Started</Link>
      </div>
    </div>
  );
}

export default Home;
