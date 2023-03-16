import React, { memo } from "react";
import "./SendTokenCard.scss";
import searchLogo from "../../../logo/search.svg";
import TokenDetailsCard from "../account-wallet/TokenCard";
import Button from "../../custom-component/Button/Button";
import crossLogo from "../../../logo/cross.svg";
import { map } from "lodash";
import { getLogoByName } from "../../../helper";

function SendTokenCard(props) {
  const { isHidden, onChangeCard, setShowSendPopup, customCoinsData, onClickCoinCard } = props;
  return (
    <div className={`send-token-popup ${!isHidden ? "show" : ""}`}>
      <div className="popup-header">
        <span>Select a Token</span>
        <img src={crossLogo} alt="logo" height="20px" width="20px" onClick={() => setShowSendPopup(false)} />
      </div>
      <div className="search-box">
        <img src={searchLogo} alt="logo" />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="token-list">
        {map(customCoinsData, (coinData) => {
          return(
            <div onClick={() => onClickCoinCard(coinData)}>
              <TokenDetailsCard
                coinData={coinData}
                showAsList={true}
                tokenLogo={getLogoByName(coinData.name)}
              />
            </div>
          )
        })}
      </div>
      <div className="preview-button">
        <Button
          text="Preview"
          medium={true}
          onClick={() => onChangeCard("PREVIEW_TOKEN")}
        />
      </div>
    </div>
  );
}

export default memo(SendTokenCard);
