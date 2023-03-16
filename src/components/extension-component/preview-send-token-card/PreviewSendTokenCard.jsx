import React, { memo, useEffect, useState } from "react";
import "./PreviewSendTokenCard.scss";
import crossLogo from "../../../logo/cross.svg";
import aptosLogo from "../../../logo/aptos.svg";
import Button from "../../custom-component/Button/Button";
import {
  useFetchCoinBalance,
  useStoreAccountDetails,
} from "../../../hooks/account";
import { convertToDecimal } from "../../../helper";
import { get } from "lodash";
import ToggleableLink from "../../ToggleableLink";

function PreviewSendTokenPopup(props) {
  const {
    isHidden,
    setShowSendPopup,
    location,
    selectedCoinData,
    onChangeCard,
  } = props;
  const [inputAddress, setInputAddress] = useState("");
  const [coinQuantity, setCoinQuantity] = useState(null);
  const { data: accountDetails, isLoading: isLoadingAccountDetails } =
    useStoreAccountDetails();
  const { data: coinBalance, isLoading } = useFetchCoinBalance(accountDetails);

  useEffect(() => {
    setInputAddress(get(location.state, "receiverAddress", ""));
  }, [location.state]);

  if (isHidden) {
    return null;
  }

  return (
    <div className={`preview-send-token-popup ${!isHidden ? "show" : ""}`}>
      <div className="preview-popup-header">
        <span>Send</span>
        <img
          src={crossLogo}
          alt="logo"
          height="20px"
          width="20px"
          onClick={() => (setShowSendPopup(false), onChangeCard("SEND_TOKEN"))}
        />
      </div>
      <div className="sending-token-info-box">
        <div className="sending-token-details">
          <div className="token-quantity-sec">
            <img src={aptosLogo} alt="logo" height="40px" width="40px" />
            <input
              placeholder="0.00"
              value={coinQuantity}
              type="number"
              onChange={(e) => setCoinQuantity(e.target.value)}
            />
          </div>
          <div className="total-token-quantity">
            <div className="coin-quantity-text">
              <span>
                {convertToDecimal(
                  selectedCoinData.balance,
                  selectedCoinData.decimals
                )}
              </span>
            </div>
            <div
              className="max-button"
              onClick={() =>
                setCoinQuantity(
                  convertToDecimal(
                    selectedCoinData.balance,
                    selectedCoinData.decimals
                  )
                )
              }
            >
              <span>(MAX)</span>
            </div>
          </div>
        </div>
        <div className="token-select-button">
          <Button
            text={selectedCoinData.name}
            isWhiteColor={true}
            small={true}
          />
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
        <ToggleableLink
          to="/send-token-confirm"
          state={{
            coinQuantity,
            inputAddress,
            name: selectedCoinData.name
          }}
          disabled={!inputAddress.length || !coinQuantity}
        >
          <Button
            text="PREVIEW"
            medium={true}
            disabled={!inputAddress.length}
          />
        </ToggleableLink>
      </div>
    </div>
  );
}

export default memo(PreviewSendTokenPopup);
