import React, { useState } from "react";
import "./TimmerDisplay.css";

const TimmerDisplay = ({ timeRemaining, isPomodoro }) => {
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  const [notificationOn, setNotificationOn] = useState(true);
  const handleClick = () => {
    setNotificationOn(!notificationOn);
    console.log("Hola");
  };

  return (
    <>
      <p className="notification-txt">
        Notificaciones:{" "}
        <span>{notificationOn ? "activadas" : "desactivadas"}</span>
      </p>
      <article className="timmer-display">
        <section className="timmer-display__section">
          <img
            className="section__img"
            src="https://res.cloudinary.com/dnvpep1sn/image/upload/v1728880492/41cbc3d4994cb661155ed30ae1d4add6_n7a8t4.jpg"
            alt=""
          />
        </section>
        <section className="timmer-display__time">
          <span
            className={`timmer-display__icon
            ${notificationOn ? "notification--on" : "notification--off"}`}
            onClick={handleClick}
          ></span>
          <p>{`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
            2,
            "0"
          )}`}</p>
        </section>
      </article>
      <div className="timmer-display__progress-container">
        <div className="progress-container__progress-bar">
          <div className="progress-bar__progress"></div>
        </div>
      </div>
    </>
  );
};

export default TimmerDisplay;
