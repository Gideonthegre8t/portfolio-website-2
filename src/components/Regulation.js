import React from "react";
import vectorTop from "../assets/image/vector-right-top.png";
import vectorBottom from "../assets/image/vector-right-bottom.png";
import vectorTopleft from "../assets/image/vector-left-top.png";
import vectorBottomleft from "../assets/image/vector-left-bottom.png";

function Regulation() {
  return (
    <div className="regulation-container wrapper">
      <div className="bg-vector ">
        <div className="vec-left">
          <img className="vec-top" src={vectorTopleft} alt=" vectorRightTop" />
          <img
            className="vec-bottom"
            src={vectorBottomleft}
            alt="vectorRightBottom"
          />
        </div>
        <div className="vec-right">
          <img className="vec-top" src={vectorTop} alt=" vectorRightTop" />
          <img
            className="vec-bottom "
            src={vectorBottom}
            alt="vectorRightBottom"
          />
        </div>
      </div>

      <div className="regulation-content ">
        <h2 className="regulation-header">How we are Regulated</h2>
        <p className=" regulation-text">
          Rise is registered and regulated both in the US and in Nigeria. Our
          team is made up of US registered investment advisers, our Nigerian
          users are covered by our SEC licensed trustees, ARM Trustees and all
          our assets are held with regulated third parties, in all relevant
          jurisdictions
        </p>
      </div>
    </div>
  );
}

export default Regulation;
