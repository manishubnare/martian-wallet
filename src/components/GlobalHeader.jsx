import React from "react";
import "./GlobalHeader.scss";
import martianLogo from "../logo/martian-big-logo.svg";

function GlobalHeader() {
  return (
    <div className="global-header">
      <img src={martianLogo} alt="logo" height="18px" width="18px" />
      <span>MARTIAN</span>
    </div>
  );
}

export default GlobalHeader;
