import React, { useState } from "react";
import PreviewSendTokenPopup from "../preview-send-token-card/PreviewSendTokenCard";
import SendTokenCard from "../send-token-card/SendTokenCard";

function SendTokenPopup(props) {
  const [activeCard, setActiveCard] = useState("SEND_TOKEN");
  const { isHidden } = props;
  if (isHidden) {
    return null;
  }

  const handleChangeCard = (cardType) => {
    setActiveCard(cardType);
  };

  return (
    <div className="popup-container-wrapper">
      <SendTokenCard
        isHidden={!(activeCard === "SEND_TOKEN")}
        onChangeCard={handleChangeCard}
      />
      <PreviewSendTokenPopup isHidden={!(activeCard === "PREVIEW_TOKEN")} />
    </div>
  );
}

export default SendTokenPopup;
