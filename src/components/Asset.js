import React from "react";
import rightArrow from "../assets/image/right-arrow.png";

function Asset(props) {
  return (
    <div className="asset-container">
      <h3>{props.title}</h3>
      <p>{props.description}</p>

      <p className="asset-span">
        <span>{props.returns}</span> {props.returnAns}{" "}
      </p>
      <p className="asset-span asset-span-class">
        <span>{props.risk}</span> {props.riskAns}{" "}
      </p>

      <button className="asset-button">
        Learn How Stock Work
        <img src={rightArrow} alt="arrow-icon" />
      </button>
    </div>
  );
}

export default Asset;
