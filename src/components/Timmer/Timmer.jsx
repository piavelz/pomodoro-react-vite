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
      if (currentCycle <= cycles) {
        console.log("****ciclo numero : ", currentCycle);
        console.log("****ciclos en total: ", cycles);
        // Switch to next cycle
        if (isPomodoro) {
          setIsPomodoro(false);
          setCurrentCycle(currentCycle + 1);
          setTimeRemaining(breakTime * 60);
          console.log("ciclo numero =", currentCycle);
        } else {
          setIsPomodoro(true);
          setTimeRemaining(pomodoroTime * 60);
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
        setCurrentCycle(0);
        setIsPomodoro(true);
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
    if (isActive) {
      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
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
      {getConfetti && (
        <Confetti
          className={confettiClass}
          width={width}
          height={height}
          run={getConfetti}
        />
      )}

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
