/*global chrome*/
import React, { useEffect, useMemo, useState } from "react";
import Footer from "../Footer/Footer";
import "./WalletPage.scss";
import Header from "../Header/Header";
import martianLogo from "../../../logo/martian-big-logo.svg";
import copyClipboardLogo from "../../../logo/copy-clipboard-white.svg";
import downArrowLogo from "../../../logo/down-arrow.svg";
import Button from "../../custom-component/Button/Button";
import TokenDetailsCard from "./TokenCard";
import SendTokenPopup from "../send-token/SendTokenPopup";
import {
  useFetchAccountCustomCoins,
  useFetchCoinBalance,
  useStoreAccountDetails,
} from "../../../hooks/account";
import {
  convertToDecimal,
  convertIntoHexaDecimalFormat,
  copyToClipBoard,
  getLogoByName,
} from "../../../helper";
import { get, map } from "lodash";
import { useLocation } from "react-router-dom";
import Message from "../../custom-component/Message/Message";
import HidableComponent from "../../HidableComponent";
import Spinner from "../../custom-component/Spinner/Spinner";

const CustomMessage = HidableComponent(Message);

function WalletPage() {
  const location = useLocation();
  const [showSendPopup, setShowSendPopup] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState(null);
  const { data: accountDetails, isLoading: isLoadingAccountDetails } =
    useStoreAccountDetails();
  const { data: coinBalance, isLoading: isLoadingCoinBalance } =
    useFetchCoinBalance(accountDetails);
  const { data: customCoinsData = [], isLoading: isLoadingCoinsData } =
    useFetchAccountCustomCoins(accountDetails);
  const allCoinsData = useMemo(() => {
    const aptosCoin = {
      coinName: "Aptos Coin",
      balance: coinBalance,
      name: "APT",
      decimals: 8,
    };
    return [aptosCoin, ...customCoinsData];
  }, [customCoinsData, coinBalance]);

  useEffect(() => {
    if (get(location.state, "openPopup", false)) {
      setShowSendPopup(true);
    }
  }, [location.state]);

  if (isLoadingAccountDetails || isLoadingCoinBalance || isLoadingCoinsData) {
    return (
      <div className="home-page">
        <Spinner />
      </div>
    );
  }

  const handleCopyToClipBoard = () => {
    copyToClipBoard(get(accountDetails, "accounts[0].address", ""));
    setShowMessage(true);
    setMessage({ type: "success", message: "Address Copied to Clipboard" });
    setTimeout(() => {
      setShowMessage(false);
      setMessage(null);
    }, 3000);
  };

  return (
    <div>
      <CustomMessage
        isHidden={!showMessage}
        type={get(message, "type", null)}
        message={get(message, "message", null)}
      />
      <div className={`wallet-page ${showSendPopup ? "blur-background" : ""}`}>
        <div className="wallet-header">
          <Header />
        </div>
        <div className="account-details-sec">
          <img src={martianLogo} alt="logo" className="account-logo" />
          <div className="account-details">
            <div className="account-name-sec">
              <div className="account-name">
                <span>Martian.apt</span>
                <img src={downArrowLogo} alt="logo" />
              </div>
            </div>
            <div className="account-key-sec">
              <div
                className="key-address-box"
                onClick={() => handleCopyToClipBoard()}
              >
                <span>
                  {convertIntoHexaDecimalFormat(
                    get(accountDetails, "accounts[0].address", "")
                  )}
                </span>
                <img src={copyClipboardLogo} />
              </div>
            </div>
          </div>
        </div>
        <div className="account-token-sec">
          <div className="token-value-text">
            <div className="token-quantity">
              <span>{convertToDecimal(coinBalance, 8)}</span>
            </div>
            <div className="token-name">
              <span>APT</span>
            </div>
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
            {map(allCoinsData, (customCoin) => {
              return (
                <TokenDetailsCard
                  coinData={customCoin}
                  tokenLogo={getLogoByName(customCoin.name)}
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
      <div>
        <SendTokenPopup
          isHidden={!showSendPopup}
          setShowSendPopup={setShowSendPopup}
          location={location}
          customCoinsData={allCoinsData}
        />
      </div>
    </div>
  );
}

export default WalletPage;
