import React, { memo, useEffect } from "react";
import "./Recovery.scss";
import copyClipboard from "../../../logo/copy-clipboard.svg";
import infoMark from "../../../logo/info-mark.svg";
import Button from "../../custom-component/Button/Button";
import { CARD_TYPES } from "../../../constants/App";
import { getQueryData, refetchQuery } from "../../../hooks/query";
import { split } from 'lodash'
import { copyToClipBoard } from "../../../helper";

function Recovery(props) {
  const { isHidden, handleCardVisibility } = props;
  const accountDetails = getQueryData('storeAccountDetails');
  // const mnemonicWordList = split(accountDetails.code, ' ');
  const mnemonicWordList = ["Banana","Toast", "Apples", "Weather", "Peanut","Seashell", "Banana","Toast", "Apples", "Weather", "Peanut","Seashell"]
  if (isHidden) {
    return null;
  }

  return (
    <div>
      <div className="recovery-card-header">
        <span>Recovery Phrase</span>
      </div>
      <div className="recovery-card-info">
        <span>
          The recovery phrase alone gives you full access to your wallet and
          funds. Please save it securely
        </span>
      </div>
      <div className="recovery-card-details">
        <div className="recovery-phrase-card">
            {mnemonicWordList.map((word, index) => {
              if (index % 3 === 0) {
                return (
                  <div key={index} className="word-row">
                    <div className="word">{index + 1} {word}</div>
                  </div>
                );
              } else if (index % 3 === 1) {
                return (
                  <div key={index} className="word-row">
                    <div className="word">{index + 1} {word}</div>
                  </div>
                );
              } else {
                return (
                  <div key={index} className="word-row">
                    <div className="word">{index + 1} {word}</div>
                  </div>
                );
              }
            })}
        </div>
        <div className="copy-button" onClick={() => copyToClipBoard(accountDetails.code)}>
          <img src={copyClipboard} alt="logo" height="14px" width="14px" />
          <span>Copy to Clipboard</span>
        </div>
        <div className="recovery-info-box">
          <img src={infoMark} alt="logo" width="14px" height="14px" />
          <div className="info-details">
            <span>
              For your protection, Martian locks your wallet after 60 minutes of
              inactivity. You will need this password to unlock it. The password
              is stored securely on your device. We cannot recover the password
              for you, if it is lost.
            </span>
          </div>
        </div>
        <div className="continue-button">
          <Button
            text="Continue"
            onClick={() =>
              handleCardVisibility(CARD_TYPES.SETUP_NOTIFICATION, true)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default memo(Recovery);
