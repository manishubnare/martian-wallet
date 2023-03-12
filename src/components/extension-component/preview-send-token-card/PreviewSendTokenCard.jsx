import React, { useState } from "react";
import "./PreviewSendTokenCard.scss";
import crossLogo from "../../../logo/cross.svg";
import aptosLogo from "../../../logo/aptos.svg";
import Button from "../../custom-component/Button/Button";
import { Link } from "react-router-dom";

function PreviewSendTokenPopup(props) {
  const [inputAddress, setInputAddress] = useState("");
  const { isHidden } = props;
  if (isHidden) {
    return null;
  }
  return (
    <div className={`preview-send-token-popup ${!isHidden ? "show" : ""}`}>
      <div className="preview-popup-header">
        <span>Send</span>
        <img src={crossLogo} alt="logo" height="20px" width="20px" />
      </div>
      <div className="sending-token-info-box">
        <div className="sending-token-details">
          <div className="token-quantity-sec">
            <img src={aptosLogo} alt="logo" height="40px" width="40px" />
            <span>0.00</span>
          </div>
          <div className="total-token-quantity">
            <span>12,531.00 APT (MAX)</span>
          </div>
        </div>
        <div>
          <Button text="APT" isWhiteColor={true} small={true} />
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
      <div className="preview-button">
        <Link to="/send-token-confirm">
          <Button
            text="PREVIEW"
            medium={true}
            disabled={!inputAddress.length}
          />
        </Link>
      </div>
    </div>
  );
}

export default PreviewSendTokenPopup;
