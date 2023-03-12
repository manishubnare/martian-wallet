import React, { useState } from "react";
import Footer from "../Footer/Footer";
import "./WalletPage.scss";
import Header from "../Header/Header";
import martianLogo from "../../../logo/martian-big-logo.svg";
import copyClipboardLogo from "../../../logo/copy-clipboard-white.svg";
import downArrowLogo from "../../../logo/down-arrow.svg";
import aptosLogo from "../../../logo/aptos.svg";
import Button from "../../custom-component/Button/Button";
import TokenDetailsCard from "./TokenCard";
import usdCoinLogo from "../../../logo/usd-coin.svg";
import tetherCoinLogo from "../../../logo/tether-coin.svg";
import SendTokenPopup from "../send-token/SendTokenPopup";

function WalletPage() {
  const [showSendPopup, setShowSendPopup] = useState(false);

  return (
    <div>
      <div className={`wallet-page ${showSendPopup ? "blur-background" : ""}`}>
        <div className="wallet-header">
          <Header />
        </div>
        <div className="account-details-sec">
          <img src={martianLogo} alt="logo" className="account-logo" />
          <div className="account-details">
            <div className="account-name-sec">
              <div className="account-name">
                <span>Maritan.apt</span>
                <img src={downArrowLogo} alt="logo" />
              </div>
            </div>
            <div className="account-key-sec">
              <div className="key-address-box">
                <span>Oxe09f...9926</span>
                <img src={copyClipboardLogo} />
              </div>
            </div>
          </div>
        </div>
        <div className="account-token-sec">
          <div className="token-value-text">
            <span>$23,450.62</span>
          </div>
          <div className="buy-send-button">
            <Button text="BUY" onClick={() => {}} />
            <Button
              text="SEND"
              onClick={() => setShowSendPopup(true)}
              isWhiteColor={true}
            />
          </div>
          <div className="token-list">
            <TokenDetailsCard
              tokenLogo={aptosLogo}
              tokenName="Aptos"
              tokenPrice={5610}
            />
            <TokenDetailsCard
              tokenLogo={usdCoinLogo}
              tokenName="USD"
              tokenPrice={5610}
            />
            <TokenDetailsCard
              tokenLogo={tetherCoinLogo}
              tokenName="Tether"
              tokenPrice={5610}
            />
          </div>
        </div>
        <Footer />
      </div>
      <div>
        <SendTokenPopup
          isHidden={!showSendPopup}
          setShowSendPopup={setShowSendPopup}
        />
      </div>
    </div>
  );
}

export default WalletPage;
