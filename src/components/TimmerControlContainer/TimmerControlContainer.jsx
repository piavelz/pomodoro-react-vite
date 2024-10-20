import TimmerControl from "../TimmerControl/TimmerControl";
import "./TimmerControlContainer.css";
const TimmerControlContainer = ({ onStartStop, onReset }) => {
  return (
    <div className="container-controls">
      <TimmerControl controlIcon="/playPause.svg" onClick={onStartStop} />
      <TimmerControl controlIcon="/restart.svg" onClick={onReset} />
    </div>
  );
};

export default TimmerControlContainer;
