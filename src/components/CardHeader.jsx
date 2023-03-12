import React from "react";
import "./CardHeader.scss";
import cross from "../logo/cross.svg";
import backArrow from "../logo/backarrow.svg";

function CardHeader(props) {
  const { isCrossSectionVisible, previousCard, handleCardVisibility } = props;
  return (
    <div className="card-main-secton">
      <div onClick={() => handleCardVisibility(previousCard, false)}>
        <img src={backArrow} alt="logo" />
      </div>
      {isCrossSectionVisible && (
        <div onClick={() => handleCardVisibility(previousCard, false)}>
          <img src={cross} alt="logo" />
        </div>
      )}
    </div>
  );
}

export default CardHeader;
