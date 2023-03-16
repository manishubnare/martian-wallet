/*global chrome*/
import React, { memo, useState } from "react";
import "./CreateAccount.scss";
import infoMark from "../../../logo/info-mark.svg";
import Button from "../../custom-component/Button/Button";
import { CARD_TYPES } from "../../../constants/App";
import CardHeader from "../../CardHeader";
import { useCreateNewAccount } from "../../../hooks/account";
import { updateData } from "../../../hooks/query";

function CreateAccount(props) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const { isHidden, handleCardVisibility } = props;
  const { createWallet, isLoading} = useCreateNewAccount();

  if (isHidden) {
    return null;
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleAgreeChange = async(event) => {
    setAgree(event.target.checked);
    if(password !== confirmPassword){
      alert('Your password do not match');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createWallet(null, {
      onSuccess: (data) => {
        chrome.storage.local.set({'account_details': data});
        updateData('storeAccountDetails', data)
        handleCardVisibility(CARD_TYPES.RECOVERY, true);
      }
    });
  };

  return (
    <div>
      <div>
        <CardHeader
          isCrossSectionVisible={true}
          previousCard={CARD_TYPES.WELCOME}
          handleCardVisibility={handleCardVisibility}
        />
      </div>
      <div className="card-header">
        <span>Create a Password</span>
      </div>
      <div className="card-info">
        <span>
          You will use the password to unlock your wallet. Do not share your
          password with others
        </span>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <div className="input-label">
              <label htmlFor="password">Password:</label>
            </div>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <div className="input-label">
              <label htmlFor="confirm-password">Confirm Password:</label>
            </div>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <div className="input-checkbox">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={agree}
              onChange={handleAgreeChange}
            />
            <label htmlFor="agree">
              I have read and agree to the Terms of Service and Privacy Policy
            </label>
          </div>
          <div className="info-box">
            <img src={infoMark} alt="logo" width="14px" height="14px" />
            <div className="info-details">
              <span>
                For your protection, Martian locks your wallet after 15 minutes
                of inactivity. You will need this password to unlock it. The
                password is stored securely on your device. We cannot recover
                the password for you, if it is lost.
              </span>
            </div>
          </div>
          <div className="continue-button">
            <Button type="submit" text="Continue" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default memo(CreateAccount);
