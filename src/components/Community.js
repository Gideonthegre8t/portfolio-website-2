import React from "react";
import communityPhoto from "../assets/image/photo/community.png";

function Community() {
  return (
    <div id="community" className="community-container ">
      <div className="community-photo">
        <img src={communityPhoto} alt="community-pic" />
      </div>

      <div className="community-text">
        <h2>Join The Rise Community</h2>
        <p>
          If you want to go far, go together. Our Telegram community surrounds
          you with others who can help you along your financial journey with
          tips, support, advice and learning. It's completely free and open to
          new and seasoned investors.
        </p>
        <button className="community-button">Join Our Community</button>
      </div>
    </div>
  );
}

export default Community;
