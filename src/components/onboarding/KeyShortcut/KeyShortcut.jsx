import React, { memo } from "react";
import { CARD_TYPES } from "../../../constants/App";
import CardHeader from "../../CardHeader";
import Button from "../../custom-component/Button/Button";
import "./KeyShortcut.scss";

function KeyShortcut(props) {
  const { isHidden, handleCardVisibility, setShowPinMessage } = props;
  if (isHidden) {
    return null;
  }

  return (
    <div>
      <div>
        <CardHeader
          isCrossSectionVisible={false}
          previousCard={CARD_TYPES.SETUP_NOTIFICATION}
          handleCardVisibility={handleCardVisibility}
        />
      </div>
      <div className="shortcut-card-header">
        <span>One Last Thing</span>
      </div>
      <div className="shortcut-card-info">
        <span>
          You can open Martian at any time by using this handy keyboard shortcut
        </span>
      </div>
      <div className="key-card-details">
        <div className="keyshortcut-box">
          <span>Alt/Opt</span>
        </div>
        <div className="keyshortcut-box">
          <span>Shift</span>
        </div>
        <div className="keyshortcut-box">
          <span>X</span>
        </div>
      </div>
      <div className="try-details">
        <span>Try: Alt + Shift + X</span>
      </div>
      <div className="continue-button">
        <Button
          text="Continue"
          onClick={() => (handleCardVisibility(CARD_TYPES.FINIST_SETUP, true), setShowPinMessage(true))}
        />
      </div>
    </div>
  );
}

export default memo(KeyShortcut);
