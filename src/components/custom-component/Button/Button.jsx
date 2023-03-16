import React from "react";
import Spinner from "../Spinner/Spinner";
import "./Button.scss";

function Button(props) {
  const {
    type,
    text,
    onClick = () => {},
    isWhiteColor = false,
    medium = false,
    disabled = false,
    small = false,
    loading = false,
  } = props;
  return (
    <div
      className={`button-border-box ${medium ? "medium-length-button" : ""} ${
        isWhiteColor ? "white-color-box" : ""
      } ${disabled ? "disabled" : ""} ${small ? "small-length-button" : ""}`}
    >
      <div className="button-inner-border" />
      <div className="hide-horizontal-border" />
      <div className="hide-verticle-border" />
      {loading ? (
        <Spinner />
      ) : (
        <button onClick={onClick} type={type}>
          <span>{text}</span>
        </button>
      )}
    </div>
  );
}

export default Button;
