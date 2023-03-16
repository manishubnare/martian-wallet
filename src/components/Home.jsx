import React, { useCallback, useState } from "react";
import WelcomePage from "./onboarding/Welcome/WelcomePage";
import "./Home.scss";
import CreateAccount from "./onboarding/CreateAccount/CreateAccount";
import { CARD_TYPES } from "../constants/App";
import Recovery from "./onboarding/Recovery/Recovery";
import KeyShortcut from "./onboarding/KeyShortcut/KeyShortcut";
import SetupNotification from "./onboarding/SetupNotification/SetupNotification";
import FinishSetup from "./onboarding/FinishSetup/FinishSetup";
import HidableComponent from "./HidableComponent";

const CustomCreateAccount = HidableComponent(CreateAccount);
const CustomRecovery = HidableComponent(Recovery);
const CustomKeyShortcut = HidableComponent(KeyShortcut);
const CustomSetupNotification = HidableComponent(SetupNotification);
const CustomFinishSetup = HidableComponent(FinishSetup);


const {
  WELCOME,
  CREATE_ACCOUNT,
  RECOVERY,
  KEY_SHORTCUT,
  SETUP_NOTIFICATION,
  FINIST_SETUP,
} = CARD_TYPES;

function Home(props) {
  const [activeCard, setActiveCard] = useState(WELCOME);
  const [progress, setProgress] = useState(0);
  const { setShowPinMessage } = props;

  const onChangeVisibility = useCallback((componentType, isGoingForward) => {
    if (isGoingForward) {
      setActiveCard(componentType);
      setProgress(progress + 1);
    } else {
      setActiveCard(componentType);
      setProgress(progress - 1);
    }
  });

  const progressPercentage = (progress / 5) * 100;

  return (
    <div className="box-content">
      <div className="welcome-card">
        <div
          className="progress-bar"
          style={{ width: `${progressPercentage}%` }}
        />
        <div className={`${activeCard === CREATE_ACCOUNT ? "global-card slide-in" : " "}`}>
          <WelcomePage
            isHidden={!(activeCard === WELCOME)}
            handleCardVisibility={onChangeVisibility}
          />
          <CustomCreateAccount
            isHidden={!(activeCard === CREATE_ACCOUNT)}
            handleCardVisibility={onChangeVisibility}
          />
          <CustomRecovery
            isHidden={!(activeCard === RECOVERY)}
            handleCardVisibility={onChangeVisibility}
          />
          <CustomSetupNotification
            isHidden={!(activeCard === SETUP_NOTIFICATION)}
            handleCardVisibility={onChangeVisibility}
          />
          <CustomKeyShortcut
            isHidden={!(activeCard === KEY_SHORTCUT)}
            handleCardVisibility={onChangeVisibility}
            setShowPinMessage={setShowPinMessage}
          />
          <CustomFinishSetup
            isHidden={!(activeCard === FINIST_SETUP)}
            handleCardVisibility={onChangeVisibility}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
