import { useEffect, useState, useMemo } from "react";
import "./TimmerDisplay.css";
import useSound from "use-sound";
import live from "../../assets/sound/live.mp3";
import start from "../../assets/sound/start.mp3";

const TimmerDisplay = ({
  timeRemaining,
  totalTime,
  isPomodoro,
  isActive,
  currentCycle,
}) => {
  const formatTime = useMemo(() => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    return (
      String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0")
    );
  }, [timeRemaining]);

  const [notificationOn, setNotificationOn] = useState(true);
  const [fullScreen, setFullScreen] = useState(false);
  const [timmerColor, setTimmerColor] = useState("#ffffff");
  const [originalTitle] = useState(document.title);

  const [playMoreLife] = useSound(live);
  const [playStart] = useSound(start);

  const handleClick = () => {
    setNotificationOn(!notificationOn);
  };

  console.log(formatTime);

  //Changes color depending on pomodoro or break
  useEffect(() => {
    setTimmerColor(isPomodoro ? "#ffffff" : "#f75151b2");
    if (notificationOn) {
      if (timeRemaining === 4 && !isPomodoro) {
        playStart();
      } else if (timeRemaining === 1 && isPomodoro) {
        playMoreLife();
      }
    }
  });

  // Calculate bar progress in percentage
  const progressPercentage = ((1 - timeRemaining / totalTime) * 100).toFixed(2);

  //use fullScreen
  const isFullScreen = () => {
    const timmerDisplay = document.getElementById("timmer-display");
    fullScreen ? document.exitFullscreen() : timmerDisplay.requestFullscreen();
    setFullScreen(!fullScreen);
  };

  //time management in tab
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isActive) {
        setTimeout(() => {
          document.title = formatTime;
        }, 100);
      } else {
        document.title = originalTitle;
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Update the title dynamically every second if it is hidden
    let titleInterval;
    if (isActive) {
      titleInterval = setInterval(() => {
        if (document.hidden) {
          document.title = formatTime;
        }
      }, 500);
    }
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (titleInterval) clearInterval(titleInterval);
    };
  });

  return (
    <>
      <p className="notification-txt">
        Notificaciones:{" "}
        <span>{notificationOn ? "activadas" : "desactivadas"}</span>
      </p>
      <article className="timmer-display" id="timmer-display">
        <section className="timmer-display__section">
          <img
            className="section__img"
            src="https://res.cloudinary.com/dnvpep1sn/image/upload/v1728880492/41cbc3d4994cb661155ed30ae1d4add6_n7a8t4.jpg"
            alt=""
          />
          <span className="section__cycles"> ciclo: {currentCycle}</span>
        </section>
        <section className="timmer-display__time">
          <span
            className={`timmer-display__icon
            ${notificationOn ? "notification--on" : "notification--off"}`}
            onClick={handleClick}
          ></span>
          <p style={{ color: timmerColor }}>{formatTime}</p>
          <span
            className={`timmer-display__full-screen ${
              fullScreen
                ? "timmer-display__full-screen-exit"
                : "timmer-display__full-screen-enter"
            } `}
            onClick={isFullScreen}
          >
            {" "}
          </span>
        </section>
      </article>
      <div className="timmer-display__progress-container">
        <div className="progress-container__progress-bar">
          <div
            className="progress-bar__progress"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default TimmerDisplay;
