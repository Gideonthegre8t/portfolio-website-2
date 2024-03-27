import React from "react";
import logo from "../assets/image/logo.png";
import downloadImage from "../assets/image/download.png";
import sponsors from "../assets/image/sponsors.png";
import totalBalance from "../assets/image/total-balance.png";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="header-container wrapper">
      <div className="header-top">
        <div className="nav-container">
          <img className="logo" src={logo} alt="logo-pic" />
          <Navbar />
        </div>
      </div>
      <div className="header-content wrapper header ">
        <div className="header-text">
          {" "}
          <h1>Dollar Investments That Help You Grow</h1>
          <p className="header-paragraph">
            We put your money in high quality assets that help you build wealth
            and achieve your financial goals.{" "}
            <div className="download-image">
            <img
      
              src={downloadImage}
              alt="download-pic"
            />
            </div>
          </p>
        </div>
        <div className="header-bottom">
          <img className="balance-pic" src={totalBalance} alt="balance-pic" />
        </div>
      </div>
      <div className="sponsor">
        <img src={sponsors} alt="sponsors-pic" />
      </div>
    </header>
  );
}

export default Header;
