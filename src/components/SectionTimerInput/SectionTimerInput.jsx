import React, { useState, useEffect } from 'react';
import TimerInput from '../TimerInput/TimerInput';

const SectionTimerInput = ({cycles,setCycles, pomodoroTime, setPomodoroTime, breakTime, setBreakTime}) => {

    const [desktopScreen, setDesktopScreen] = useState(window.innerWidth > 820);
    useEffect(()=>{
    const handleResize = () => {
        setDesktopScreen(window.innerWidth > 820);
    };
    window.addEventListener('resize', handleResize);
    
    // Clear the event
    return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleSelectChange =(e) => {
        setCycles(parseInt(e.target.value));
    };
    
    return (
    <section className='section_timerInput'>
    {desktopScreen && <p>Ciclos de Pomodoro: 
        <select className='timerInputCycles' type='number' value={cycles} onChange={handleSelectChange} > 
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select></p>} 
    <section className='timerInput_section'>
    {desktopScreen && <p>Define tu sesión de pomodoro y break</p>}
        <TimerInput name='Pomodoro' defaultTime={pomodoroTime} setTime={setPomodoroTime} restartTime='25' minTime='20' maxTime='50'/>
        <TimerInput name='Break' defaultTime={breakTime} setTime={setBreakTime} restartTime='5' minTime='5' maxTime='30' />  
    </section>
    </section>
    )
}



export default SectionTimerInput