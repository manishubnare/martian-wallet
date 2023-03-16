import React, { useState } from "react";
import "./SendTokenConfirmPage.scss";
import Header from "../Header/Header";
import backMarkLogo from "../../../logo/back-mark.svg";
import aptosLogo from "../../../logo/aptos.svg";
import Button from "../../custom-component/Button/Button";
import { Link, useLocation } from "react-router-dom";
import { useTransferCoins } from "../../../hooks/account";
import {
  convertToCoins,
  convertIntoHexaDecimalFormat,
  copyToClipBoard,
} from "../../../helper";
import copyToClipboardLogo from "../../../logo/copy-clipboard-white.svg";
import HidableComponent from "../../HidableComponent";
import Message from "../../custom-component/Message/Message";
import { get } from "lodash";

const CustomMessage = HidableComponent(Message);

function SendTokenConfirmPage() {
  const { transferCoins, isLoading } = useTransferCoins();
  const location = useLocation();
  const { inputAddress: receiverInputAddress, coinQuantity, name } = location.state;
  const [inputAddress, setInputAddress] = useState(receiverInputAddress);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState(null);

  const handleTransferCoins = () => {
    transferCoins(
      {
        receiver_address: inputAddress,
        coin_quantity: convertToCoins(coinQuantity, 8),
      },
      {
        onSuccess: (data) => {
          setShowMessage(true);
          setMessage({ type: "success", message: "Transferred Successfully" });
          setTimeout(() => {
            setShowMessage(false);
            setMessage(null);
          }, 3000);
        },
        onError: (error) => {
          setShowMessage(true);
          setMessage({ type: "error", message: "Something went wrong" });
          setTimeout(() => {
            setShowMessage(false);
            setMessage(null);
          }, 3000);
        },
      }
    );
  };

  const handleCopyToClipBoard = () => {
    copyToClipBoard(inputAddress);
    setShowMessage(true);
    setMessage({ type: "success", message: "Address Copied to Clipboard" });
    setTimeout(() => {
      setShowMessage(false);
      setMessage(null);
    }, 3000);
  };

  return (
    <div className="confirm-page">
      <CustomMessage
        isHidden={!showMessage}
        type={get(message, "type", null)}
        message={get(message, "message", null)}
      />
      <Header />
      <Link
        to="/"
        state={{
          openPopup: true,
          cardType: "PREVIEW_TOKEN",
          receiverAddress: receiverInputAddress,
        }}
      >
        <div className="back-input">
          <img src={backMarkLogo} alt="logo" />
          <span>Send To</span>
        </div>
      </Link>
      <div className="confirm-token-info">
        <div className="confirm-text">
          <span>Confirm Send</span>
        </div>
        <div className="token-info-sec">
          <img src={aptosLogo} alt="logo" />
          <div className="token-quantity-text">
            <span>{coinQuantity || parseFloat(0.0)}</span>
          </div>
          <div className="token-name-text">
            <span>{name}</span>
          </div>
        </div>
        <div className="converted-rate-text">
          <span>~${(coinQuantity * 14.07).toFixed(2)}</span>
        </div>
      </div>
      <div className="send-text">
        <span>Send To</span>
      </div>
      <div
        className="search-box"
        onClick={() => handleCopyToClipBoard(inputAddress)}
      >
        <input
          type="text"
          placeholder="Input Address...."
          value={convertIntoHexaDecimalFormat(inputAddress)}
        />
        <img src={copyToClipboardLogo} />
      </div>
      <div className="transaction-details">
        <div className="summary-desc">
          <span className="summary-key">Total value</span>
          <span className="summary-value">{`${coinQuantity || 0.00} ${name}`}</span>
        </div>
        <div className="summary-desc">
          <span className="summary-key">Transaction Fee</span>
          <span className="summary-value">{"< 0.001 APT"}</span>
        </div>
      </div>
      <div className="preview-button">
        <Button
          text="CONFIRM AND SEND"
          medium={true}
          onClick={() => handleTransferCoins()}
          loading={isLoading}
        />
      </div>
      <div className="cancel-button">
        <span>CANCEL</span>
      </div>
    </div>
  );
}

export default SendTokenConfirmPage;
