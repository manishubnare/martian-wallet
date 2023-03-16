import React, { memo } from "react";
import { convertToDecimal } from "../../../helper";
import "./TokenCard.scss";

function TokenDetailsCard(props) {
  const { coinData, showAsList = false, tokenLogo } = props;
  const { balance, coinName, name, decimals } = coinData;
  return (
    <div className={`token-card ${showAsList ? "show-as-list" : ""}`}>
      <div className="token-logo">
        <img src={tokenLogo} alt="logo" />
      </div>
      <div className="name-rate-sec">
        <div className="name-sec">
          <div className="token-name">{coinName}</div>
          <div className="token-converted-rate">{convertToDecimal(balance, decimals)} &nbsp; {name}</div>
        </div>
        <div className="rate-sec">
          <div className="rate-details">
            <span>{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(TokenDetailsCard);
