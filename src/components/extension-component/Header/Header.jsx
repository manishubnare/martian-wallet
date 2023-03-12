import React from "react";
import "./Header.scss";
import aptosLogo from "../../../logo/aptos.svg";
import downArrowLogo from "../../../logo/down-arrow.svg";
import notificationLogo from "../../../logo/notification.svg";

function Header() {
  return (
    <div className="header">
      <div className="token-details">
        <img src={aptosLogo} alt="logo" width="24px" height="24px" />
        <span>Aptos</span>
        <img src={downArrowLogo} alt="logo" />
      </div>
      <div className="notification-sec">
        <img src={notificationLogo} alt="logo" width="34px" height="34px" />
      </div>
    </div>
  );
}

export default Header;
