import React from "react";
import lade from "../assets/image/photo/lade.png";
import jesse from "../assets/image/photo/jesse.png";
import raye from "../assets/image/photo/raye.png";

function Scroll() {
  const reviews = [
    {
      id: 1,
      reviewText:
        "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
      imgLoc: lade,
      name: "Lade",
    },

    {
      id: 2,

      reviewText:
        "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
      imgLoc: jesse,
      name: "Jese",
    },

    {
      id: 3,
      reviewText:
        "I don’t want to invest in separate stocks because I’m not a financial expert and I would rather trust my money in the hands of people like Rise who are skilled and knowledgeable.",
      imgLoc: raye,
      name: "Raye",
    },
  ];
  return (
    <div className="review-scroll">
      {reviews.map((review) => (
        <div className="review" key={review.id}>
          <div className="review-text">{review.reviewText}</div>

          <div className="review-bottom">
            <p>
              <img
                className="review-image"
                src={review.imgLoc}
                alt={review.name}
              />
              {review.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Scroll;
