import React from "react";
import "./SendTokenCard.scss";
import searchLogo from "../../../logo/search.svg";
import TokenDetailsCard from "../account-wallet/TokenCard";
import aptosLogo from "../../../logo/aptos.svg";
import usdCoinLogo from "../../../logo/usd-coin.svg";
import tetherCoinLogo from "../../../logo/tether-coin.svg";
import Button from "../../custom-component/Button/Button";
import crossLogo from "../../../logo/cross.svg";

function SendTokenCard(props) {
  const { isHidden, onChangeCard } = props;
  return (
    <div className={`send-token-popup ${!isHidden ? "show" : ""}`}>
      <div className="popup-header">
        <span>Select a Token</span>
        <img src={crossLogo} alt="logo" height="20px" width="20px" />
      </div>
      <div className="search-box">
        <img src={searchLogo} alt="logo" />
        <input type="text" placeholder="Search..." />
      </div>
      <div className="token-list">
        <TokenDetailsCard
          tokenLogo={aptosLogo}
          tokenName="Aptos"
          tokenPrice={5434}
          showAsList={true}
        />
        <TokenDetailsCard
          tokenLogo={usdCoinLogo}
          tokenName="Usd"
          tokenPrice={5434}
          showAsList={true}
        />
        <TokenDetailsCard
          tokenLogo={tetherCoinLogo}
          tokenName="Tether"
          tokenPrice={5434}
          showAsList={true}
        />
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

export default SendTokenCard;
