import PropTypes from 'prop-types'
import React, { useState } from 'react';

const TimmerDisplay = props => {

    const [notificationOn, setNotificationOn] = useState(true);

    const handleClick = () => {
        setNotificationOn(!notificationOn); // Alterna entre true y false
        };

    return (
    <>
  
    <article className='timmerDisplay__container'>
        <section className='timmerDisplay_container_img'>
            <img className='timmerDisplay_img'src="https://res.cloudinary.com/dnvpep1sn/image/upload/v1728880492/41cbc3d4994cb661155ed30ae1d4add6_n7a8t4.jpg" alt="" />
        </section>
        <section className='timmerDisplay_time'>
            <span className={`timmerDisplay_icon
            ${notificationOn ? 'notification_on' : 'notification_off'}`}
        onClick={handleClick}></span>
            <p>20:00</p>
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

TimmerDisplay.propTypes = {}

export default TimmerDisplay