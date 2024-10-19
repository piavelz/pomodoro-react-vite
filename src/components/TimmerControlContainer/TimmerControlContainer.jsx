import TimmerControl from '../TimmerControl/TimmerControl'


const TimmerControlContainer =  ({ onStartStop, onReset }) => {
  return (
    <div className='timmerControl_container'>
    <TimmerControl controlIcon='/playPause.svg' onClick={onStartStop}/>
    <TimmerControl controlIcon='/restart.svg' onClick={onReset}/>
    </div>
  )
}


export default TimmerControlContainer