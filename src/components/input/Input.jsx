import React from 'react'
import PropTypes from 'prop-types'
import './input.css'

function Input(props) {
  const { size = 'medium', ...rest } = props
  return (
    <input className={`input ${size}`} {...rest} />
  )
}

Input.propTypes = {
  onChange: PropTypes.func,
}

Input.defaultProps = {
  onChange: undefined,
}

export default Input
