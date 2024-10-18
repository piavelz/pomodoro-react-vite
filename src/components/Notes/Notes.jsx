import React from 'react'
import PropTypes from 'prop-types'

const Notes = props => {
  return (
    <>
        <textarea className='notes_textarea' name="notes" id="notes" placeholder='Notas...'>
      
        </textarea>
    </>
  )
}

Notes.propTypes = {}

export default Notes