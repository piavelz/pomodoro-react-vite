import PropTypes from 'prop-types'
import { useState } from 'react'

const Help = () => {

  const [popUpOpen , setpopUpOpen]= useState(false);

const openPopUp = () =>{
  setpopUpOpen(true);
  document.body.style.overflow ="hidden";
}
const closePopUp = () =>{
  setpopUpOpen(false);
  document.body.style.overflow ="auto";
}


  return (
    <>
    
    <div className='help' >
        <p onClick={openPopUp}>Qué es Pomodoro</p>
        <span className='help-icon' onClick={openPopUp}></span>
    </div>
    {popUpOpen && (
      <> 
      <div className="popup-back" id="popup-back" onClick={closePopUp}></div>
    <div className="popup" id="popup">
      <img src="https://res.cloudinary.com/dnvpep1sn/image/upload/v1729370789/pomodoro-info_qxityp.jpg" alt="info-pomodoro" />
      <div className="close-btn" title="Cerrar" id="close-btn">
        <span onClick={closePopUp}>
          x
        </span>
      </div>
    </div>
      </>
    )}
</>
  )
}



export default Help