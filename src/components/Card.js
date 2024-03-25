import React from "react";
import rightArrow from "../assets/image/right-arrow.png";

function Card(props) {
  return (
    <div className="invest-card  wrapper">
      <img className="invest-image" src={props.imgURL} alt="invest-img" />
      <div className="invest-text">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <button className="invest-button">
          Start Investing Now
          <img src={rightArrow} alt="arrow-icon" />
        </button>
      </div>
    </div>
  );
}

export default Card;
