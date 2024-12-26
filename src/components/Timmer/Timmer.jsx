import React, { useState, useEffect } from "react";
import TimmerDisplay from "../TimmerDisplay/TimmerDisplay";
import TimmerControlContainer from "../TimmerControlContainer/TimmerControlContainer";
import "./Timmer.css";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const Timmer = ({ cycles, pomodoroTime, breakTime }) => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(pomodoroTime * 60);
  const [isPomodoro, setIsPomodoro] = useState(true); // To alternate between Pomodoro and rest
  const [currentCycle, setCurrentCycle] = useState(1);
  const [getConfetti, setGetConfetti] = useState(false);
  const [confettiClass, setConfettiClass] = useState("confetti-enter");

  const { width, height } = useWindowSize();

  useEffect(() => {
    if (!isActive && !isPaused && timeRemaining !== pomodoroTime * 60) {
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
      if (currentCycle < cycles) {
        // Switch to next cycle
        if (isPomodoro) {
          setIsPomodoro(false);
          setTimeRemaining(breakTime * 60);
        } else {
          setIsPomodoro(true);
          setTimeRemaining(pomodoroTime * 60);
          setCurrentCycle(currentCycle + 1);
        }
      } else {
        //get confetti
        setGetConfetti(true);

        // transition to disappear confetti
        setTimeout(() => {
          setConfettiClass("confetti-exit");
        }, 5000);

        //stop confetti
        setTimeout(() => {
          setGetConfetti(false);
        }, 9000);

        //Restart the cycles
        setIsActive(false);
        setCurrentCycle(1);
        setIsPomodoro(true);
        setTimeRemaining(pomodoroTime * 60);
        setTimeout(() => {
          setGetConfetti(false);
          setConfettiClass("confetti-enter");
        }, 9000);
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
    if (isActive) {
      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
    setIsActive(!isActive);
  };

  const handleReset = () => {
    setIsActive(false);
    setCurrentCycle(1);
    setIsPomodoro(true);
    setTimeRemaining(pomodoroTime * 60); // Restart on pomodoro schedule
  };

  return (
    <section className="timmer-section">
      {getConfetti && (
        <Confetti
          className={confettiClass}
          width={width}
          height={height}
          run={getConfetti}
        />
      )}

      <TimmerDisplay
        timeRemaining={timeRemaining}
        totalTime={isPomodoro ? pomodoroTime * 60 : breakTime * 60}
        isPomodoro={isPomodoro}
        isActive={isActive}
        currentCycle={currentCycle}
      />
      <TimmerControlContainer
        onStartStop={handleStartStop}
        onReset={handleReset}
      />
    </section>
  );
};

Timmer.propTypes = {};

export default Timmer;
