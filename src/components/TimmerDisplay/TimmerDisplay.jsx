import React, { useState } from 'react';

const TimmerDisplay = ({timeRemaining, isPomodoro}) => {
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;

    const [notificationOn, setNotificationOn] = useState(true);
    const handleClick = () => {
        setNotificationOn(!notificationOn); 
        console.log('Hola')
        };
    

    return (
    <>
    <p className='notification_txt'>Notificaciones: <span Id='sound' >{notificationOn ? 'activadas' : 'desactivadas'}</span></p>
    <article className='timmerDisplay__container'>
        <section className='timmerDisplay_container_img'>
            <img className='timmerDisplay_img'src="https://res.cloudinary.com/dnvpep1sn/image/upload/v1728880492/41cbc3d4994cb661155ed30ae1d4add6_n7a8t4.jpg" alt="" />
        </section>
        <section className='timmerDisplay_time'>
            <span className={`timmerDisplay_icon
            ${notificationOn ? 'notification_on' : 'notification_off'}`}
        onClick={handleClick}></span>
            <p>{`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</p>
        </section>
    </article>
    <div className="progress-container">
            <div className="progress-bar">
                <div className="progress"></div>
            </div>
        </div>
    
    </>
  )
}


export default TimmerDisplay