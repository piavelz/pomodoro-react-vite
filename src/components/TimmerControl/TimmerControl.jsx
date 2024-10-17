import React from 'react'
import PropTypes from 'prop-types'


const TimmerControl = ({controlIcon}) => {
  return (
    <>
    <button className='timmerControl_button'>
        <img className='timerControl_button_icon' src={controlIcon} alt="icon" />
    </button>
    </>
  )
}

TimmerControl.propTypes = {}

export default TimmerControl