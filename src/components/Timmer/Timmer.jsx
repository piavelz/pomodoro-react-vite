import React, { useState, useEffect } from "react";
import TimmerDisplay from "../TimmerDisplay/TimmerDisplay";
import TimmerControlContainer from "../TimmerControlContainer/TimmerControlContainer";
import "./Timmer.css";
const Timmer = ({ cycles, pomodoroTime, breakTime }) => {
  const [isActive, setIsActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(pomodoroTime * 60);
  const [isPomodoro, setIsPomodoro] = useState(true); // To alternate between Pomodoro and rest
  const [currentCycle, setCurrentCycle] = useState(0);

  useEffect(() => {
    if (!isActive && timeRemaining === 0) {
      setTimeRemaining(isPomodoro ? pomodoroTime * 60 : breakTime * 60);
    }
  });

  useEffect(() => {
    let timer;
    if (isActive && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      if (currentCycle < cycles - 1) {
        // Switch to next cycle
        if (isPomodoro) {
          setIsPomodoro(false);
          setCurrentCycle(currentCycle + 1);
          setTimeRemaining(breakTime * 60);
        } else {
          setIsPomodoro(true);
          setTimeRemaining(pomodoroTime * 60);
        }
      } else {
        //Restart the cycles
        setIsActive(false);
        setCurrentCycle(0);
        setTimeRemaining(pomodoroTime * 60);
      }
    }
    return () => clearInterval(timer);
  }, [
    isActive,
    timeRemaining,
    cycles,
    pomodoroTime,
    breakTime,
    isPomodoro,
    currentCycle,
  ]);

  const handleStartStop = () => {
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setCurrentCycle(0);
    setIsPomodoro(true);
    setTimeRemaining(pomodoroTime * 60); // Restart on pomodoro schedule
  };

  return (
    <section className="timmer-section">
      <TimmerDisplay timeRemaining={timeRemaining} isPomodoro={isPomodoro} />
      <TimmerControlContainer
        onStartStop={handleStartStop}
        onReset={handleReset}
      />
    </section>
  );
};

Timmer.propTypes = {};

export default Timmer;
