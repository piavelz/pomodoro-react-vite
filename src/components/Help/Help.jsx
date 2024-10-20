import { useState } from "react";
import "./Help.css";

const Help = () => {
  const [popUpOpen, setpopUpOpen] = useState(false);

  const openPopUp = () => {
    setpopUpOpen(true);
    document.body.style.overflow = "hidden";
  };
  const closePopUp = () => {
    setpopUpOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <div className="help">
        <p onClick={openPopUp}>Qué es Pomodoro</p>
        <span className="help__icon" onClick={openPopUp}></span>
      </div>
      {popUpOpen && (
        <>
          <div className="popup__back" onClick={closePopUp}></div>
          <div className="popup">
            <img
              src="https://res.cloudinary.com/dnvpep1sn/image/upload/v1729370789/pomodoro-info_qxityp.jpg"
              alt="info-pomodoro"
            />
            <div className="popup__close" title="Cerrar">
              <span onClick={closePopUp}>x</span>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Help;
