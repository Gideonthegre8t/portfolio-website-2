import React from "react";
import goalImage from "../assets/image/goal.png";

function Save() {
  return (
    <div id="save" className="save-container">
      <div className="goal-image">
        <img  src={goalImage} alt="goal-pic" />
      </div>
      <div className="save-content">
        <p>
          <strong>The Rise App</strong>
        </p>
        <h2>
          Save for your <span className="save-span">future</span>
        </h2>
        <p>
          With Rise, you achieve your financial goals faster. Save for school,
          your home, vacations, your children’s future and more.
        </p>
        <button className="save-button">Start Saving</button>
      </div>
    </div>
  );
}

export default Save;
