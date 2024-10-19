import React from 'react'
import PropTypes from 'prop-types'


const TimmerControl = ({controlIcon, onClick}) => {
  return (
    <>
    <button className='timmerControl_button' onClick={onClick}>
        <img className='timerControl_button_icon' src={controlIcon} alt="icon" />
    </button>
    </>
  )
}


export default TimmerControl