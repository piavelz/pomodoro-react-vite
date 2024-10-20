import React, { useState } from "react";
import "./TimerInput.css";

const TimerInput = ({
  name,
  defaultTime,
  setTime,
  restartTime,
  minTime,
  maxTime,
}) => {
  function handleIncrement() {
    defaultTime < maxTime ? setTime(defaultTime + 1) : defaultTime;
  }
  function handleDecrement() {
    defaultTime > minTime ? setTime(defaultTime - 1) : defaultTime;
  }
  function handleRestart() {
    setTime(parseInt(restartTime));
  }

  return (
    <div className="card-time">
      <p>{name}</p>
      <button
        className="card-time__button-increment"
        onClick={handleIncrement}
      />
      <div className="card-time__time">
        <span>{defaultTime}</span>
      </div>
      <button
        className="card-time__button-decrement"
        onClick={handleDecrement}
      />
      <button className="card-time__restart" onClick={handleRestart}>
        Reiniciar
      </button>
    </div>
  );
};

export default TimerInput;
