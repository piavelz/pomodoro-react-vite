import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';
import TimerInput from '../TimeInput/TimeInput';

const SectionTimerInput = () => {

    const [desktopScreen, setDesktopScreen] = useState(window.innerWidth > 820);
    
    useEffect(()=>{
    const handleResize = () => {
        setDesktopScreen(window.innerWidth > 820);
    };
    window.addEventListener('resize', handleResize);
    
    // Clear the event
    return () => window.removeEventListener('resize', handleResize);
}, [])
    
    return (
    <section className='section_timerInput'>
    {desktopScreen && <p>Ciclos de Pomodoro: 
        <select className='timerInputCycles' max='1' type="number" > 
        
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4" selected>4</option>
        <option value="5">5</option>
        </select></p>} 
    <section className='timerInput_section'>
    {desktopScreen && <p>Define tu sesión de pomodoro y break</p>}
        <TimerInput name='Pomodoro' defaultTime='20:00'/>
        <TimerInput name='Break' defaultTime='05:00'/>  
    </section>
    </section>
    )
}

SectionTimerInput.propTypes = {}

export default SectionTimerInput