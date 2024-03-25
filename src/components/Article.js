import React from "react";
import content from "./util/content";
import Card from "./Card";
import investImage1 from "../assets/image/invest-image1.png";
import investImage2 from "../assets/image/invest-image2.png";
import investImage3 from "../assets/image/invest-image3.png";
import investImage4 from "../assets/image/invest-image4.png";

import rightArrow from "../assets/image/right-arrow.png";

function createCard(content) {
  return (
    <Card
      key={content.id}
      imgURL={content.imgURL}
      title={content.title}
      description={content.description}
    />
  );
}

function Article() {
  return (
    <div>
      <div className="article-container">{content.map(createCard)}</div>
      <div className="article-container-desktop">
        <div className="invest-card wrapper  reverse ">
          <img className="invest-image" src={investImage1} alt="invest-img" />
          <div className="invest-text">
            <h3>Invest your money in dollars</h3>
            <p>
              By holding your investments in a stable currency, your money grows
              more over time and retains its value better
            </p>
            <button className="invest-button">
              Start Investing Now <img src={rightArrow} alt="arrow-icon" />
            </button>
          </div>
        </div>

        <div className="invest-card wrapper ">
          <img className="invest-image" src={investImage2} alt="invest-img" />
          <div className="invest-text">
            <h3>Invest your money in dollars</h3>
            <p>
              By holding your investments in a stable currency, your money grows
              more over time and retains its value better
            </p>
            <button className="invest-button">
              Start Investing Now <img src={rightArrow} alt="arrow-icon" />
            </button>
          </div>
        </div>

        <div className="invest-card wrapper reverse ">
          <img className="invest-image" src={investImage3} alt="invest-img" />
          <div className="invest-text">
            <h3>Invest your money in dollars</h3>
            <p>
              By holding your investments in a stable currency, your money grows
              more over time and retains its value better
            </p>
            <button className="invest-button">
              Start Investing Now <img src={rightArrow} alt="arrow-icon" />
            </button>
          </div>
        </div>

        <div className="invest-card wrapper ">
          <img className="invest-image" src={investImage4} alt="invest-img" />
          <div className="invest-text">
            <h3>Invest your money in dollars</h3>
            <p>
              By holding your investments in a stable currency, your money grows
              more over time and retains its value better
            </p>
            <button className="invest-button">
              Start Investing Now <img src={rightArrow} alt="arrow-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Article;
