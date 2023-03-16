import React, { useState } from "react";
import "./GlobalHeader.scss";
import martianLogo from "../logo/martian-logo.svg";
import extensionLogo from "../logo/extension.svg";
import nftLogo from "../logo/nft.svg";
import pinnedLogo from "../logo/pinned.svg";

function GlobalHeader(props) {
  const { showPinMessage } = props;
  return (
    <div>
      {showPinMessage && (
        <div className="pin-message-box">
          <div className="pin-description">
            <img src={extensionLogo} alt="logo" height="26px" width="26px" />
            <span>Pin Martian extension to the toolbar for easier access.</span>
          </div>
          <div className="pin-example">
            <img src={nftLogo} alt="logo" height="14px" width="14px" />
            <span>Martian Wallet</span>
            <img
              src={pinnedLogo}
              alt="logo"
              height="20px"
              width="20px"
              style={{ marginLeft: "20px" }}
            />
          </div>
        </div>
      )}
      <div className="global-header">
        <img src={martianLogo} alt="logo" height="18px" width="18px" />
        <span>MARTIAN</span>
      </div>
    </div>
  );
}

export default GlobalHeader;
