import React from "react";
import controller from "../../assets/controller.webp";
import Logo2 from "../../assets/GMR_logo.png";
import "./home.styles.scss";

function Home() {
  return (
    <div className="home">
      <div
        className="home__logo"
        style={{ backgroundImage: `url(${controller})` }}
      ></div>
      <div className="home__text">
        <div>
          <img src={Logo2} alt="logo2" />
          <span>Presents</span>
        </div>
        <div>
          <h4>Portigo</h4>
          <p>Gaming has never been this simple.</p>
        </div>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default Home;
