import React from 'react'
import PropTypes from 'prop-types'
import TimmerDisplay from '../TimmerDisplay/TimmerDisplay';
import TimmerControlContainer from '../TimmerControlContainer/TimmerControlContainer';

const Timmer = props => {
  return (
    <section className='timmer_section'>
              <TimmerDisplay/>
              <TimmerControlContainer/>
    </section>
  )
}

Timmer.propTypes = {}

export default Timmer