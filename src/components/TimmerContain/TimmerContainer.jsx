import React from 'react';
import PropTypes from 'prop-types';
import TimmerControl from '../TimmerControlContainer/TimmerControl';
import '../../App.css';

const TimmerContainer = props => {
  return (
    <section className="timmerControl_container">
      
      <TimmerControl controlIcon="/playPause.svg" />
      <TimmerControl controlIcon="/restart.svg" />
    </section>
  );
};

TimmerContainer.propTypes = {};

export default TimmerContainer;
