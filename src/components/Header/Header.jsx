import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <div className='title-container'>
    
    <h1 className='title'>{props.title}</h1>
    <img className='title-icon'src="https://res.cloudinary.com/dnvpep1sn/image/upload/v1728689821/kzmkitgyyipk4npdptzs.png" alt="tomato" />
    </div>
  )
}

Header.propTypes = {}

export default Header