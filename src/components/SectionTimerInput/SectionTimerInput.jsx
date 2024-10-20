import React, { useState, useEffect } from "react";
import TimerInput from "../TimerInput/TimerInput";
import "./SectionTimerInput.css";

const SectionTimerInput = ({
  cycles,
  setCycles,
  pomodoroTime,
  setPomodoroTime,
  breakTime,
  setBreakTime,
}) => {
  //When the screen is larger than 820, show more options
  const [desktopScreen, setDesktopScreen] = useState(window.innerWidth > 820);
  useEffect(() => {
    const handleResize = () => {
      setDesktopScreen(window.innerWidth > 820);
    };
    window.addEventListener("resize", handleResize);

    // Clear the event
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelectChange = (e) => {
    setCycles(parseInt(e.target.value));
  };

  return (
    <section className="timme-container--desktop">
      {desktopScreen && (
        <p>
          Ciclos de Pomodoro:
          <select
            className="select"
            type="number"
            value={cycles}
            onChange={handleSelectChange}
          >
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </p>
      )}
      <section className="timme-container">
        {desktopScreen && <p>Define tu sesión de pomodoro y break</p>}
        <TimerInput
          name="Pomodoro"
          defaultTime={pomodoroTime}
          setTime={setPomodoroTime}
          restartTime="25"
          minTime="1"
          maxTime="50"
        />
        <TimerInput
          name="Break"
          defaultTime={breakTime}
          setTime={setBreakTime}
          restartTime="5"
          minTime="1"
          maxTime="30"
        />
      </section>
    </section>
  );
};

export default SectionTimerInput;
