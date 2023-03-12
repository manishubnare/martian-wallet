import React, { useState } from "react";
import "./SendTokenConfirmPage.scss";
import Header from "../Header/Header";
import backMarkLogo from "../../../logo/back-mark.svg";
import aptosLogo from "../../../logo/aptos.svg";
import Button from "../../custom-component/Button/Button";

function SendTokenConfirmPage() {
  const [inputAddress, setInputAddress] = useState("0xstee...wsx");
  return (
    <div className="confirm-page">
      <Header />
      <div className="back-input">
        <img src={backMarkLogo} alt="logo" />
        <span>Send To</span>
      </div>
      <div className="confirm-token-info">
        <div className="confirm-text">
          <span>Confirm Send</span>
        </div>
        <div className="token-info-sec">
          <img src={aptosLogo} alt="logo" />
          <div className="token-quantity-text">
            <span>65.211</span>
          </div>
          <div className="token-name-text">
            <span>APT</span>
          </div>
        </div>
        <div className="converted-rate-text">
          <span>~$6,832.11</span>
        </div>
      </div>
      <div className="send-text">
        <span>Send To</span>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Input Address...."
          value={inputAddress}
          onChange={(e) => setInputAddress(e.target.value)}
        />
      </div>
      <div className="transaction-details">
        <div className="summary-desc">
          <span className="summary-key">Total value</span>
          <span className="summary-value">65.211 APT</span>
        </div>
        <div className="summary-desc">
          <span className="summary-key">Transaction Fee</span>
          <span className="summary-value">{"< 0.001 APT"}</span>
        </div>
      </div>
      <div className="preview-button">
        <Button text="CONFIRM AND SEND" medium={true} />
      </div>
      <div className="cancel-button">
        <span>CANCEL</span>
      </div>
    </div>
  );
}

export default SendTokenConfirmPage;
