import React, { useState } from 'react'


const TimerInput = ({name, defaultTime,setTime, restartTime,minTime, maxTime}) => {
  
  function handleIncrement(){
  defaultTime < maxTime ? setTime( defaultTime + 1 ) : defaultTime;
  }
  function handleDecrement(){
    defaultTime > minTime ? setTime( defaultTime-1 ) : defaultTime ;
  }
  function handleRestart(){
    setTime(parseInt(restartTime));
  }

  return (
    <div className='timerInput__container'>
        <p>{name}</p>
        <button className="timerInput_button_increment" onClick={handleIncrement}/>
        <div className='timerInput_show_time'>
            <span >{defaultTime}</span>
        </div>
        <button className="timerInput_button_decrement" onClick={handleDecrement}/>
        <button className="timerInput_restart" onClick={handleRestart}>Reiniciar</button>
    </div>
  )
}



export default TimerInput
