import React from "react";
import downloadImage from "../assets/image/download.png";
import balance from "../assets/image/balance.png";

function Join() {
  return (
    <div className="join-container wrapper">
     <div className="join-left">
      <p className="join-first-text"> Download The Rise App</p>
      <h3>Join our 100,000 users investing and setting long term goals!</h3>
      <p>Dollar investments that help you grow.</p>
      <div className="join-bottom">
        <img className="join-download" src={downloadImage} alt="download-pic" />
       </div>
      </div>
      <div>
      <img className="join-balance" src={balance} alt="balance-pic" />
      </div>
    </div>
  );
}

export default Join;
