import React from "react";
import "./TimmerControl.css";

const TimmerControl = ({ controlIcon, onClick }) => {
  return (
    <>
      <button className="button-control" onClick={onClick}>
        <img className="button-control__icon" src={controlIcon} alt="icon" />
      </button>
    </>
  );
};

export default TimmerControl;
