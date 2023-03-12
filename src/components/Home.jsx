import React, { useState } from "react";
import WelcomePage from "./onboarding/Welcome/WelcomePage";
import "./Home.scss";
import CreateAccount from "./onboarding/CreateAccount/CreateAccount";
import { CARD_TYPES } from "../constants/App";
import Recovery from "./onboarding/Recovery/Recovery";
import KeyShortcut from "./onboarding/KeyShortcut/KeyShortcut";
import SetupNotification from "./onboarding/SetupNotification/SetupNotification";
import FinishSetup from "./onboarding/FinishSetup/FinishSetup";

const {
  WELCOME,
  CREATE_ACCOUNT,
  RECOVERY,
  KEY_SHORTCUT,
  SETUP_NOTIFICATION,
  FINIST_SETUP,
} = CARD_TYPES;

function Home() {
  const [activeCard, setActiveCard] = useState(WELCOME);
  const [progress, setProgress] = useState(0);

  const onChangeVisibility = (componentType, isGoingForward) => {
    if (isGoingForward) {
      setActiveCard(componentType);
      setProgress(progress + 1);
    } else {
      setActiveCard(componentType);
      setProgress(progress - 1);
    }
  };

  const progressPercentage = (progress / 5) * 100;

  return (
    <div className="box-content">
      <div className="welcome-card">
        <div
          className="progress-bar"
          style={{ width: `${progressPercentage}%` }}
        />
        <div className={`${activeCard !== WELCOME && "slide-in"}`}>
          <WelcomePage
            isHidden={!(activeCard === WELCOME)}
            handleCardVisibility={onChangeVisibility}
          />
          <CreateAccount
            isHidden={!(activeCard === CREATE_ACCOUNT)}
            handleCardVisibility={onChangeVisibility}
          />
          <Recovery
            isHidden={!(activeCard === RECOVERY)}
            handleCardVisibility={onChangeVisibility}
          />
          <SetupNotification
            isHidden={!(activeCard === SETUP_NOTIFICATION)}
            handleCardVisibility={onChangeVisibility}
          />
          <KeyShortcut
            isHidden={!(activeCard === KEY_SHORTCUT)}
            handleCardVisibility={onChangeVisibility}
          />
          <FinishSetup
            isHidden={!(activeCard === FINIST_SETUP)}
            handleCardVisibility={onChangeVisibility}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
