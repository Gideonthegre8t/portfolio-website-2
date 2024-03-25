import React from "react";
import Asset from "./Asset";
import stockIcon from "../assets/image/stock-icon.png";
import realEstate from "../assets/image/real-estate.png";
import incomeIcon from "../assets/image/income.png";

function Section() {
  return (
    <div className="section-container">
      <div className="asset-header">
        <h2>Asset Classes</h2>
        <p className="asset-paragraph">
          <strong>It’s your money, choose where you invest it</strong>
        </p>
      </div>

      <div className=" asset-container  wrapper flex">
        <div>
          <div className="asset-item1 ">
            <div className="asset-wrap">
              <img src={stockIcon} alt="stock-icon" />
            </div>
          </div>

          <div className="asset-border">
            <Asset
              title="Stocks"
              description="We help you invest and manage your money by investing in our portfolio of 30 high-growth stocks across the US market with our equity portfolio of power stocks."
              returns="Historical returns :"
              returnAns=" 14% per annum"
              risk="Risk Level :"
              riskAns="Medium"
            />
          </div>
        </div>

        <div>
          <div className="asset-item2">
            <div className="asset-wrap">
              <img src={realEstate} alt="realEstate-icon" />
            </div>
          </div>

          <div className="asset-border">
            <Asset
              title="Real Estate"
              description="Our Real Estate plan is the sweet middle. Best for those who want a balance of good returns and medium risk. This plan invests in rented buildings in the US."
              returns="Historical returns :"
              returnAns=" 14% per annum"
              risk="Risk Level :"
              riskAns="Medium"
            />
          </div>
        </div>

        <div>
          <div className="asset-item3">
            <div className="asset-wrap">
              <img src={incomeIcon} alt="incomeIcon-icon" />
            </div>
          </div>

          <div className="asset-border">
            <Asset
              title="Fixed Income"
              description="A low-risk asset perfect for anyone who wants to protect their money in a secure, For people who want money from inflation while earning steady returns."
              returns="Historical returns :"
              returnAns=" 14% per annum"
              risk="Risk Level :"
              riskAns="Medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
