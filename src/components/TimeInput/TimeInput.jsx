import PropTypes from 'prop-types'

const TimeInput = ({name, defaultTime}) => {
  return (
    <div className='timerInput__container'>
        <p>{name}</p>
        <button className="timerInput_button_increment"/>
        <div className='timerInput_show_time'>
            <span >{defaultTime}</span>
        </div>
        <button className="timerInput_button_decrement"/>
        <button className="timerInput_restart">Reiniciar</button>
    </div>
  )
}

TimerInput.propTypes = {}

export default TimeInput
