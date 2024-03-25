import React from "react";
import logo from "../assets/image/logo-black.png";
import upRightArrow from "../assets/image/diagonal-up-right-arrow.png";
import Copyright  from "./Copyright"

function Footer() {
  return (
    <footer>
    <div className="footer-container wrapper">
      <div className="footer-top wrapper">
        <div className="footer-top-left">
          <img src={logo} alt="logo" />
          <p>
            <a href="/#">About Us</a>
          </p>
          <p>
            <a href="/#">Careers</a>
          </p>
          <p>
            <a href="/#">FAQs</a>
          </p>
          <p>
            <a href="/#">Contact info</a>
          </p>
          <p>
            <a href="/#">Press</a>
          </p>
          <p>
            <a href="/#">Rise Impact</a>
          </p>
        </div>

        <div className="footer-top-right">
          <h4>Explore</h4>

          <p>
            <a href="/#">Investment Club</a>
            <img src={upRightArrow} alt="upRightArrow-icon" />
          </p>
          <p>
            <a href="/#">Blog</a>
            <img src={upRightArrow} alt="upRightArrow-icon" />
          </p>
        </div>
      </div>

      <div className="footer-bottom">

        <div className="footer-bottom-left">
          <h4>Products</h4>
          <p>
            <a href="/#">Rise App</a>
          </p>

          <p>
            <a href="/#">Wallets</a>
          </p>
          <p>
            <a href="/#">Asset Classes</a>
          </p>
        </div>

        <div className="footer-bottom-right">
          <h4>Cotact Us</h4>

          <p>
            <a href="/#">0818 714 7405 </a>
            <img src={upRightArrow} alt="upRightArrow-icon" />
          </p>
          <p>
            <a href="/#">hello@rise.capital</a>
            <img src={upRightArrow} alt="upRightArrow-icon" />
          </p>
          <p>
            <a href="/#">Newsletter</a>
            <img src={upRightArrow} alt="upRightArrow-icon" />
          </p>
          <p>
            <a href="/#">Instagram </a>
            <img src={upRightArrow} alt="upRightArrow-icon" />
          </p>
          <p>
            <a href="/#">Twitter </a>
            <img src={upRightArrow} alt="upRightArrow-icon" />
          </p>
        </div>
      </div>
    </div>
    <Copyright />
    </footer>
  );
}

export default Footer;
