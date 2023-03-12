import React, { useState } from "react";
import "./SetupNotification.scss";
import martianBigLogo from "../../../logo/martian-big-logo.svg";
import topaz from "../../../logo/topaz.svg";
import souffl3 from "../../../logo/souffl3.svg";
import tortuga from "../../../logo/tortuga.svg";
import Button from "../../custom-component/Button/Button";
import { CARD_TYPES } from "../../../constants/App";
import CardHeader from "../../CardHeader";

function SetupNotification(props) {
  const [isOn, setIsOn] = useState(false);
  const { isHidden, handleCardVisibility } = props;
  if (isHidden) {
    return null;
  }

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <div>
        <CardHeader
          isCrossSectionVisible={false}
          previousCard={CARD_TYPES.RECOVERY}
          handleCardVisibility={handleCardVisibility}
        />
      </div>
      <div className="setup-card-header">
        <span>Setup Notifications</span>
      </div>
      <div className="setup-card-info">
        <span>Get Web3 Notifications directly in your wallet</span>
      </div>
      <div className="notification-section">
        <div className="setup-info-box">
          <img src={martianBigLogo} alt="logo" height="40px" width="40px" />
          <div className="text-container">
            <div className="box-heading">
              <span>Martian</span>
            </div>
            <div className="box-description">
              <span>Stay updated with Martian</span>
            </div>
          </div>
          <div className="toggle-section">
            <div className="toggle-container" onClick={handleToggle}>
              <div className={`dialog-button ${isOn ? "on" : "off"}`}>
                <div
                  className={`dialog-button-circle ${isOn ? "on" : "off"}`}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="setup-info-box">
          <div className="img-box">
            <img src={tortuga} />
          </div>
          <div className="text-container biglogo">
            <div className="box-heading">
              <span>Tortuga</span>
            </div>
            <div className="box-description">
              <span>Get notifications about TAPT</span>
            </div>
          </div>
          <div className="toggle-section"></div>
        </div>
        <div className="setup-info-box">
          <div className="img-box">
            <img src={topaz} />
          </div>
          <div className="text-container biglogo">
            <div className="box-heading">
              <span>Topaz</span>
            </div>
            <div className="box-description">
              <span>Get notified for bids and sales from Topaz</span>
            </div>
          </div>
          <div className="toggle-section"></div>
        </div>
        <div className="setup-info-box">
          <div className="img-box">
            <img src={souffl3} />
          </div>
          <div className="text-container biglogo">
            <div className="box-heading">
              <span>Souffl3</span>
            </div>
            <div className="box-description">
              <span>Get notifications from Souffl3</span>
            </div>
          </div>
          <div className="toggle-section"></div>
        </div>
      </div>
      <div className="continue-button">
        <Button
          text="Continue"
          onClick={() => handleCardVisibility(CARD_TYPES.KEY_SHORTCUT, true)}
        />
      </div>
    </div>
  );
}

export default SetupNotification;
