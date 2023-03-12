import React from "react";
import "./Button.scss";

function Button(props) {
  const {
    type,
    text,
    onClick = () => {},
    isWhiteColor = false,
    medium = false,
    disabled = false,
    small = false
  } = props;
  return (
    <div
      className={`button-border-box ${medium ? "medium-length-button" : ""} ${
        isWhiteColor ? "white-color-box" : ""
      } ${disabled ? "disabled" : ""} ${small ? 'small-length-button': ""}`}
    >
      <div className="button-inner-border"></div>
      <div className="hide-horizontal-border"></div>
      <div className="hide-verticle-border"></div>
      <button onClick={onClick} type={type}>
        <span>{text}</span>
      </button>
    </div>
  );
}

export default Button;
