import React from "react";
import Scroll from "./ScrollReview";

function Reviews() {
    return (
      <div className="reviews-container">
        <div>
          <div className="wrapper">
            <h2 className="reviews-header">From The People Who Use Rise</h2>
            <p className="review-paragraph">Our mission at Risevest is to empower more people just like you to achieve your personal financial goals.</p>
          </div>
        </div>
        <Scroll />
      </div>
    );
}

export default Reviews;