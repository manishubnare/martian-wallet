import React, { memo } from "react";
import "./Welcome.scss";
import walletlogo from "../../../logo/wallet-logo.svg";
import importWalletlogo from "../../../logo/import-wallet.svg";
import { CARD_TYPES } from "../../../constants/App";

function WelcomePage(props) {
  const { handleCardVisibility, isHidden } = props;

  if (isHidden) {
    return null;
  }

  return (
    <div>
      <div className="greeting-text">
        <span>Welcome to Martian</span>
      </div>
      <div className="info-text">
        <span>
          The Aptos wallet reimagined; hold crypto, NFTs, swap assets and track
          past activity
        </span>
      </div>
      <div
        className="new-wallet-box"
        onClick={() => handleCardVisibility(CARD_TYPES.CREATE_ACCOUNT, true)}
      >
        <div className="img-box">
          <img src={walletlogo} alt="logo" height="30px" width="30px" />
        </div>
        <div className="text-container">
          <div className="box-heading">
            Create a New Wallet
          </div>
          <div className="box-description">
            Get started by creating your very first wallet to hold, trade and
            exchange crypto assets
          </div>
        </div>
      </div>
      <div className="new-wallet-box">
        <div className="img-box">
          <img src={importWalletlogo} alt="logo" height="30px" width="30px" />
        </div>
        <div className="text-container">
          <div className="box-heading">
            <span>I already have a Wallet</span>
          </div>
          <div className="box-description">
            <span>
              Import your seed phrase or private key from an existing account to
              holdin, trade and exchange assets from Martian
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(WelcomePage);
