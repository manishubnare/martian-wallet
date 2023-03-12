import React from "react";
import "./TokenCard.scss";

function TokenDetailsCard(props) {
  const { tokenLogo, tokenName, tokenPrice, showAsList = false } = props;
  return (
    <div className={`token-card ${showAsList ? "show-as-list" : ""}`}>
      <div className="token-logo">
        <img src={tokenLogo} alt="logo" />
      </div>
      <div className="name-rate-sec">
        <div className="name-sec">
          <div className="token-name">{tokenName}</div>
          <div className="token-converted-rate">{tokenPrice} &nbsp;USDC</div>
        </div>
        <div className="rate-sec">
          <div className="rate-details">
            <span>Stake & Earn </span>
          </div>
          <div className="approx-converted-rate">
            <span>~5261</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TokenDetailsCard;
