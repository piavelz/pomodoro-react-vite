import React from 'react'
import PropTypes from 'prop-types'
import TimmerControl from '../TimmerControl/TimmerControl'


const TimmerControlContainer = props => {
  return (
    <div className='timmerControl_container'>
    <TimmerControl controlIcon='/playPause.svg'/>
    <TimmerControl controlIcon='/restart.svg'/>
    </div>
  )
}

TimmerControlContainer.propTypes = {}

export default TimmerControlContainer