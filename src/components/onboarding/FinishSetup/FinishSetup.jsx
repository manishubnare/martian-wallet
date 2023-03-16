/*global chrome*/
import React, { memo } from "react";
import "./FinishSetup.scss";
import martianLogo from "../../../logo/martian-logo.svg";
import discord from "../../../logo/discord.svg";
import twitter from "../../../logo/twitter.svg";
import nft from "../../../logo/nft.svg";
import Button from "../../custom-component/Button/Button";
import CardHeader from "../../CardHeader";
import { CARD_TYPES } from "../../../constants/App";

function FinishSetup(props) {
  const { isHidden, handleCardVisibility } = props;
  if (isHidden) {
    return null;
  }

  const handleCloseTab = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.remove(tabs[0].id);
    });
  }

  return (
    <div>
      <div>
        <CardHeader
          isCrossSectionVisible={false}
          previousCard={CARD_TYPES.KEY_SHORTCUT}
          handleCardVisibility={handleCardVisibility}
        />
      </div>
      <div className="finish-logo">
        <img src={martianLogo} alt="logo" height="140px" width="140px" />
      </div>
      <div className="finish-card-header">
        <span>You're all set!</span>
      </div>
      <div className="finish-card-info">
        <span>
          Your wallet is ready to use. Follow our socials for exclusive product
          updates and reach out for any further queries
        </span>
      </div>
      <div className="finish-card-details">
        <div className="keyshortcut-box">
          <img src={discord} alt="logo" height="34px" width="34px" />
          <span>Join Martian's Discord Server</span>
        </div>
        <div className="keyshortcut-box">
          <img src={twitter} alt="logo" height="34px" width="34px" />
          <span>Follow Martian on Twitter</span>
        </div>
        <div className="keyshortcut-box">
          <img src={nft} alt="logo" height="26px" width="26px" style={{ marginTop: '8px' }} />
          <span>Browse & Shop for Aptos NFTs</span>
        </div>
      </div>
      <div className="continue-button">
        <Button text="FINISH" onClick={() => handleCloseTab()} />
      </div>
    </div>
  );
}

export default memo(FinishSetup);
