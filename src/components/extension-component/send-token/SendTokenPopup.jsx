import { get } from "lodash";
import React, { memo, useState } from "react";
import PreviewSendTokenPopup from "../preview-send-token-card/PreviewSendTokenCard";
import SendTokenCard from "../send-token-card/SendTokenCard";

function SendTokenPopup(props) {
  const { isHidden, setShowSendPopup, location, customCoinsData } = props;
  const [selectedCoinData, setSelectedCoinData] = useState(customCoinsData[0]);
  const [activeCard, setActiveCard] = useState(() => {
    const cardType = get(location.state, "cardType", "");
    if (cardType.length) {
      return location.state.cardType;
    } else {
      return "SEND_TOKEN";
    }
  });

  if (isHidden) {
    return null;
  }

  const onClickCoinCard = (customCoin) => {
    setSelectedCoinData(customCoin);
    setActiveCard("PREVIEW_TOKEN");
  };

  const handleChangeCard = (cardType) => {
    setActiveCard(cardType);
  };

  return (
    <div className="popup-container-wrapper">
      <SendTokenCard
        isHidden={!(activeCard === "SEND_TOKEN")}
        onChangeCard={handleChangeCard}
        setShowSendPopup={setShowSendPopup}
        customCoinsData={customCoinsData}
        onClickCoinCard={onClickCoinCard}
      />
      <PreviewSendTokenPopup
        isHidden={!(activeCard === "PREVIEW_TOKEN")}
        setShowSendPopup={setShowSendPopup}
        location={location}
        selectedCoinData={selectedCoinData}
        onChangeCard={handleChangeCard}
      />
    </div>
  );
}

export default memo(SendTokenPopup);
